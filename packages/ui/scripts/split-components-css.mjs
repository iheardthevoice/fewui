/**
 * Splits themes/components.css into utilities + layer + overrides.
 * Keeps themes/components.css as re-export for fewui/components.css consumers.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourcePath = join(root, 'themes/components.css')
const outDir = join(root, 'themes/components')

const source = readFileSync(sourcePath, 'utf8')
const layerStart = source.indexOf('@layer components {')

if (layerStart === -1) {
  console.error('Could not locate @layer components block')
  process.exit(1)
}

let depth = 0
let layerEnd = -1
for (let i = layerStart; i < source.length; i += 1) {
  const ch = source[i]
  if (ch === '{') depth += 1
  else if (ch === '}') {
    depth -= 1
    if (depth === 0) {
      layerEnd = i
      break
    }
  }
}

if (layerEnd === -1) {
  console.error('Could not find matching close for @layer components')
  process.exit(1)
}

const header = source.slice(0, layerStart).trimEnd()
const layerBlock = source.slice(layerStart, layerEnd + 1).trim()
const unlayered = source.slice(layerEnd + 1).trim()

rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

writeFileSync(join(outDir, 'utilities.css'), `${header}\n`, 'utf8')
writeFileSync(join(outDir, 'layer.css'), `${layerBlock}\n`, 'utf8')

if (unlayered) {
  writeFileSync(join(outDir, 'overrides.css'), `${unlayered}\n`, 'utf8')
}

const imports = ['./utilities.css', './layer.css', ...(unlayered ? ['./overrides.css'] : [])]

writeFileSync(
  join(outDir, 'index.css'),
  `${imports.map((p) => `@import "${p}";`).join('\n')}\n`,
  'utf8',
)

writeFileSync(
  sourcePath,
  `${header}\n\n${layerBlock}\n${unlayered ? `\n${unlayered}\n` : ''}`,
  'utf8',
)

console.log('Split components.css →', outDir)
