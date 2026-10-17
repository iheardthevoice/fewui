/**
 * `themes/<id>/preset.js` → `themes/<id>/color.css`.
 * `--check`: dosyalar güncel değilse hata kodu ile çıkar (yazmaz).
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { buildThemeCss } from '../src/theme/build-theme-css.js'

const themesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'themes')
const checkOnly = process.argv.includes('--check')
let stale = 0

for (const entry of readdirSync(themesDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name === '_shared' || entry.name === 'components') continue
  const indexPath = join(themesDir, entry.name, 'index.js')
  if (!existsSync(indexPath)) continue

  const { default: pkg } = await import(pathToFileURL(indexPath).href)
  const cssPath = join(themesDir, entry.name, 'color.css')
  const css = buildThemeCss(pkg)
  const current = existsSync(cssPath) ? readFileSync(cssPath, 'utf8') : ''

  if (current === css) continue
  if (checkOnly) {
    console.error(`[build-theme-css] ${entry.name}/color.css güncel değil`)
    stale += 1
    continue
  }
  writeFileSync(cssPath, css)
  console.log(`[build-theme-css] ${entry.name}/color.css`)
}

if (stale) process.exit(1)
