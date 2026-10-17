#!/usr/bin/env node
/**
 * fewui v2 API codemod.
 *
 *   node ui/scripts/codemods/v2.mjs <dir...> [--dry]
 *
 * - `fulled` → `block`
 * - Alert / app-alert / Toast: `variant` (tone) → `color`, `error` → `danger`
 * - Badge / Tag: tone → `color`; görsel stil `variant` (`solid | outline | muted`)
 * - `destructive` → `danger` (CSS token, Tailwind sınıfları, menü öğeleri, requestConfirm)
 * - Select `@dropdown-open-change` → `@update:open`
 * - `ui-timepicker` → `ui-time-picker`, `toast.error(` → `toast.danger(`
 *
 * Güvenle dönüştürülemeyen dinamik `:variant` ifadeleri dosya:satır olarak raporlanır.
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { extname, join, relative } from 'node:path'

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const roots = args.filter((arg) => !arg.startsWith('--'))
const EXTENSIONS = new Set(['.vue', '.js', '.mjs', '.css'])
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'locales', 'codemods'])

const TONES = new Set(['primary', 'secondary', 'success', 'warning', 'info', 'danger'])
const TONE_ALIASES = { error: 'danger', destructive: 'danger' }

/** @type {string[]} */
const manual = []
let changedFiles = 0

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue
    const full = join(dir, name)
    const stat = statSync(full)
    if (stat.isDirectory()) walk(full, out)
    else if (EXTENSIONS.has(extname(name))) out.push(full)
  }
  return out
}

/**
 * `<tag ...>` açılış etiketlerini bulur (tırnak içindeki `>` yok sayılır).
 * @param {string} source
 * @param {RegExp} tagRe
 * @param {(tag: string, attrs: string, offset: number) => string} transform
 */
function rewriteTags(source, tagRe, transform) {
  let out = ''
  let cursor = 0
  tagRe.lastIndex = 0
  let match
  while ((match = tagRe.exec(source))) {
    const start = match.index
    let i = start + match[0].length
    let quote = null
    while (i < source.length) {
      const ch = source[i]
      if (quote) {
        if (ch === quote) quote = null
      } else if (ch === '"' || ch === "'") {
        quote = ch
      } else if (ch === '>') {
        break
      }
      i += 1
    }
    const attrs = source.slice(start + match[0].length, i)
    out += source.slice(cursor, start + match[0].length) + transform(match[1], attrs, start)
    cursor = i
    tagRe.lastIndex = i
  }
  return out + source.slice(cursor)
}

function lineOf(source, offset) {
  return source.slice(0, offset).split('\n').length
}

function mapToneLiteral(value) {
  return TONE_ALIASES[value] ?? (value === 'solid' ? 'primary' : value)
}

/** Alert / app-alert: `variant` tonu → `color`. */
function rewriteAlertAttrs(attrs) {
  return attrs
    .replace(/(\s)variant="(info|success|warning|error)"/g, (_, sp, v) => `${sp}color="${mapToneLiteral(v)}"`)
    .replace(/(\s):variant="([^"]*)"/g, (_, sp, expr) => `${sp}:color="${expr.replace(/'error'/g, "'danger'")}"`)
}

/**
 * Badge / Tag: eski tek `variant` → `color` + `variant`.
 * @param {'ui-badge'|'ui-tag'} tag
 */
function rewriteBadgeAttrs(tag, attrs, report) {
  const defaultColor = tag === 'ui-tag' ? 'secondary' : 'primary'
  let next = attrs.replace(/(\s)variant="(\w+)"/g, (full, sp, value) => {
    if (value === 'outline') return tag === 'ui-tag' ? `${sp}variant="outline"` : `${sp}variant="outline" color="secondary"`
    if (value === 'muted') return `${sp}variant="muted"`
    const color = mapToneLiteral(value)
    if (!TONES.has(color)) return full
    return color === defaultColor ? '' : `${sp}color="${color}"`
  })
  next = next.replace(/(\s):variant="([^"]*)"/g, (full, sp, expr) => {
    const literals = [...expr.matchAll(/'([a-z]+)'/g)].map((m) => m[1])
    const mapped = literals.map(mapToneLiteral)
    if (literals.length && mapped.every((value) => TONES.has(value))) {
      const nextExpr = expr.replace(/'([a-z]+)'/g, (_, value) => `'${mapToneLiteral(value)}'`)
      return `${sp}:color="${nextExpr}"`
    }
    report(expr)
    return full
  })
  return next
}

const TEXT_RULES = [
  [/variant: 'destructive'/g, "color: 'danger'"],
  [/\bdestructive: true\b/g, "color: 'danger'"],
  [/variant: 'error'/g, "color: 'danger'"],
  [/variant: '(success|warning|info)'/g, "color: '$1'"],
  [/\bdestructive\b/g, 'danger'],
  [/\bfulled\b/g, 'block'],
  [/@dropdown-open-change\b/g, '@update:open'],
  [/@dropdownOpenChange\b/g, '@update:open'],
  [/\bui-timepicker\b/g, 'ui-time-picker'],
  [/\btoast\.error\(/g, 'toast.danger('],
  [/\bui-alert--error\b/g, 'ui-alert--danger'],
]

for (const root of roots) {
  for (const file of walk(root)) {
    const original = readFileSync(file, 'utf8')
    let source = original

    if (file.endsWith('.vue')) {
      source = rewriteTags(source, /<(ui-alert|app-alert)\b/g, (_, attrs) => rewriteAlertAttrs(attrs))
      source = rewriteTags(source, /<(ui-badge|ui-tag)\b/g, (tag, attrs, offset) =>
        rewriteBadgeAttrs(tag, attrs, (expr) => {
          manual.push(`${relative(process.cwd(), file)}:${lineOf(source, offset)}  <${tag} :variant="${expr}">`)
        }),
      )
    }
    for (const [pattern, replacement] of TEXT_RULES) {
      source = source.replace(pattern, replacement)
    }

    if (source !== original) {
      changedFiles += 1
      if (!dry) writeFileSync(file, source)
    }
  }
}

console.log(`[fewui v2 codemod] ${changedFiles} dosya ${dry ? 'değişecek' : 'güncellendi'}.`)
if (manual.length) {
  console.log('\nElle kontrol edilmesi gereken dinamik Badge/Tag variant ifadeleri:')
  for (const line of manual) console.log(`  ${line}`)
}
