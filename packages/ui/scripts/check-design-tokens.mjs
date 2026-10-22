/**
 * Tasarım token denetimi — uygulama şablonlarında ölçek / yüzey token'ı yerine elle yazılmış
 * değerleri raporlar (DESIGN.md → Ölçek ve yüzey).
 *
 * Kullanım: `node check-design-tokens.mjs <dizin...> [--strict]`
 * Varsayılan rapor verir ve 0 ile çıkar; `--strict` bulgu varsa 1 ile çıkar.
 *
 * Kurallar:
 * - `text-[…px|rem]`           → `ui-text-2xs` / Tailwind ölçeği (12 / 14 / 16 / 18px)
 * - `bg-muted/NN`              → `bg-surface-subtle` / `bg-surface-sunken`
 * - `border-border/NN`         → `border-border-subtle`
 * - `hsl(var(--…))`            → token'lar oklch; `var(--…)` veya `color-mix`
 * - `:deep(.ui-…)`             → fewui'ye prop / variant
 * - `dark:` karşılığı olmayan sabit palet rengi (`bg-amber-500` …)
 * - elle `aria-pressed` toggle → `ui-chip-group` / `ui-segment-group`
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const args = process.argv.slice(2)
const strict = args.includes('--strict')
const roots = args.filter((arg) => !arg.startsWith('--')).map((dir) => resolve(dir))

const PALETTE =
  'red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone'

const RULES = [
  { id: 'arbitrary-text', re: /(?<![\w-])text-\[\d*\.?\d+(?:px|rem)\]/g, hint: 'ui-text-2xs veya ölçek sınıfı' },
  { id: 'muted-opacity', re: /(?<![\w-])bg-muted\/\d+/g, hint: 'bg-surface-subtle / bg-surface-sunken' },
  { id: 'border-opacity', re: /(?<![\w-])border-border\/\d+/g, hint: 'border-border-subtle' },
  {
    id: 'hsl-token',
    re: /hsl\(var\(--(?:background|foreground|surface|muted|primary|secondary|accent|border|ring|card|danger|success|warning|info|control)\b/g,
    hint: 'var(--…) / color-mix (token’lar oklch)',
  },
  { id: 'deep-ui', re: /:deep\(\.ui-/g, hint: 'fewui prop / variant' },
  { id: 'manual-toggle', re: /<ui-button\b[^>]*\s:?aria-pressed=/gs, hint: 'ui-chip-group / ui-segment-group' },
]

const PALETTE_RE = new RegExp(`(?<![\\w:-])(bg|text|border)-(${PALETTE})-\\d{2,3}(?:\\/\\d+)?`, 'g')

/** @param {string} dir @returns {string[]} */
function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name.startsWith('.')) continue
    const full = join(dir, name)
    const stat = statSync(full)
    if (stat.isDirectory()) out.push(...walk(full))
    else if (/\.(vue|css)$/.test(name)) out.push(full)
  }
  return out
}

/** @param {string} source @param {number} index */
function lineOf(source, index) {
  return source.slice(0, index).split('\n').length
}

const findings = []

for (const root of roots) {
  for (const file of walk(root)) {
    const source = readFileSync(file, 'utf8')
    const rel = relative(process.cwd(), file)
    for (const rule of RULES) {
      for (const match of source.matchAll(rule.re)) {
        findings.push({ rule: rule.id, file: rel, line: lineOf(source, match.index), text: match[0].slice(0, 60), hint: rule.hint })
      }
    }
    // Palet rengi: aynı class dizisinde `dark:` karşılığı yoksa
    for (const classMatch of source.matchAll(/class="([^"]*)"/g)) {
      const classes = classMatch[1]
      if (classes.includes('dark:')) continue
      for (const color of classes.matchAll(PALETTE_RE)) {
        findings.push({
          rule: 'palette-no-dark',
          file: rel,
          line: lineOf(source, classMatch.index),
          text: color[0],
          hint: 'semantik token veya dark: karşılığı',
        })
      }
    }
  }
}

const byRule = {}
for (const finding of findings) byRule[finding.rule] = (byRule[finding.rule] || 0) + 1

for (const finding of findings) {
  console.log(`${finding.file}:${finding.line}  [${finding.rule}] ${finding.text}  → ${finding.hint}`)
}
console.log(
  `[check-design-tokens] ${findings.length} bulgu`,
  Object.keys(byRule).length ? JSON.stringify(byRule) : '',
)

if (strict && findings.length) process.exit(1)
