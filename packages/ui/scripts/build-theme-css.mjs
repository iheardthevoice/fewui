/**
 * `themes/<id>/preset.js` → `themes/<id>/color.css` + `themes/<id>/tokens.json` (W3C Design Tokens),
 * ve tüm temalardan `themes/_shared/properties.css` (tiplenmiş renk değişkenleri + tema geçişi).
 * `--check`: dosyalar güncel değilse hata kodu ile çıkar (yazmaz).
 * Preset'lerde hex renk kalmışsa da hata verir: token renkleri OKLCH tutulur.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { buildThemeCss, resolveThemeVars } from '../src/theme/build-theme-css.js'
import { themeToDesignTokens } from '../src/theme/design-tokens.js'
import { TOKEN_GROUPS, toCssVarName } from '../src/theme/tokens.js'

const themesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'themes')
const checkOnly = process.argv.includes('--check')
let stale = 0

/** @type {Array<{ id: string, pkg: any }>} */
const themes = []

function emit(path, content, label) {
  const current = existsSync(path) ? readFileSync(path, 'utf8') : ''
  if (current === content) return
  if (checkOnly) {
    console.error(`[build-theme-css] ${label} güncel değil`)
    stale += 1
    return
  }
  writeFileSync(path, content)
  console.log(`[build-theme-css] ${label}`)
}

for (const entry of readdirSync(themesDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || entry.name === '_shared' || entry.name === 'components') continue
  const indexPath = join(themesDir, entry.name, 'index.js')
  if (!existsSync(indexPath)) continue

  const presetPath = join(themesDir, entry.name, 'preset.js')
  if (existsSync(presetPath)) {
    const hex = readFileSync(presetPath, 'utf8').match(/#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b/g)
    if (hex) {
      console.error(
        `[build-theme-css] ${entry.name}/preset.js hex renk içeriyor (${[...new Set(hex)].slice(0, 5).join(', ')}); ` +
          'OKLCH yazın — `hexToOklchString` kayıpsız çevirir.',
      )
      stale += 1
    }
  }

  const { default: pkg } = await import(pathToFileURL(indexPath).href)
  themes.push({ id: entry.name, pkg })
  emit(join(themesDir, entry.name, 'color.css'), buildThemeCss(pkg), `${entry.name}/color.css`)
  emit(
    join(themesDir, entry.name, 'tokens.json'),
    `${JSON.stringify(themeToDesignTokens(pkg), null, 2)}\n`,
    `${entry.name}/tokens.json`,
  )
}

/**
 * Tiplenecek renk token'ları: her temada tanımlı olanlar. Tiplenmiş değişkende `var(--x, yedek)`
 * yedeği hiç devreye girmez (başlangıç değeri hep vardır); bu yüzden yedekle okunan ya da bazı
 * temalarda bulunmayan token'lar listeye alınmaz.
 */
const FALLBACK_READ = new Set(['--ring', '--border-subtle', '--white'])
const shipped = themes.filter((theme) => theme.id !== '_template')
const typed = [...TOKEN_GROUPS.colors, ...TOKEN_GROUPS.status]
  .map(toCssVarName)
  .filter((name) => !FALLBACK_READ.has(name))
  .filter((name) => shipped.every(({ pkg }) => name in resolveThemeVars(pkg, 'light')))

const propertiesCss = `/* fewui — tema token'larından üretildi (scripts/build-theme-css.mjs); elle düzenlemeyin. */

/**
 * Renk token'ları tiplidir (\`<color>\`): tarayıcı değeri renk olarak bilir ve ara değer üretebilir.
 * Böylece açık / koyu ya da ana renk değişimi anında sıçramak yerine kısa bir geçişle olur.
 * Tiplenmemiş türevler (\`--primary-soft\`, \`--surface-bg\` …) bu token'lardan hesaplandığı için birlikte akar.
 */
${typed.map((name) => `@property ${name} {\n  syntax: '<color>';\n  inherits: true;\n  initial-value: transparent;\n}`).join('\n')}

/** \`applyUiTheme\` / \`setUiThemeMode\` değişim anında kısa süreliğine bu sınıfı verir. */
.ui-theme-transition {
  transition-property: ${typed.join(', ')};
  transition-duration: var(--ui-theme-transition-duration, 200ms);
  transition-timing-function: ease;
}

@media (prefers-reduced-motion: reduce) {
  .ui-theme-transition {
    transition: none;
  }
}
`
emit(join(themesDir, '_shared', 'properties.css'), propertiesCss, '_shared/properties.css')

if (stale) process.exit(1)
