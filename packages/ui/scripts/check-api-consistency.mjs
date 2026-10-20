/**
 * Bileşen API sözlüğü denetimi — build öncesi çalışır.
 *
 * - `emits`: kebab-case veya `update:<prop>`
 * - Kaldırılmış prop adları (`fulled`, `destructive`) kullanılmaz
 * - `*COLORS` sabitleri ton sözlüğünün alt kümesi (`error` / `destructive` yok)
 * - `*VARIANTS` sabitleri görsel stil taşır: küçük harf, ton kelimesi yok
 * - `*SIZES` sabitleri ölçek sözlüğünün alt kümesi
 *
 * Argüman olarak dizin verilirse (`check-api-consistency.mjs ../frontend/src`) bu dizinlerdeki
 * `.vue` şablonlarında `ui-*` etiketlerinin kaldırılmış prop / değer kullanımı da taranır.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const componentsDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'components')

const TONES = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']
/** Button'a özel yüzey rengi. */
const EXTRA_COLORS = { 'Button.vue': ['input'] }
/** Metin vurgu ölçeği (`tone` prop'u). */
const TEXT_TONES = ['default', 'foreground', 'muted', 'title', 'body']
const SIZE_SCALE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
const EXTRA_SIZES = { 'Photo.vue': ['fill'], 'Progress.vue': ['thin'] }
const REMOVED_PROPS = ['fulled', 'destructive']
const REMOVED_VALUES = ['error', 'destructive']

/** @type {string[]} */
const errors = []

/**
 * @param {string} source
 * @returns {Array<{ name: string, values: string[] }>}
 */
function stringArrayConsts(source) {
  const out = []
  const re = /^const (\w+) = \[([^\]]*)\]/gm
  let match
  while ((match = re.exec(source))) {
    const values = [...match[2].matchAll(/'([^']*)'/g)].map((m) => m[1])
    if (values.length) out.push({ name: match[1], values })
  }
  return out
}

for (const file of readdirSync(componentsDir).filter((name) => name.endsWith('.vue'))) {
  const source = readFileSync(join(componentsDir, file), 'utf8')
  const script = source.match(/<script[^>]*>([\s\S]*?)<\/script>/)?.[1] ?? ''
  const fail = (message) => errors.push(`${file}: ${message}`)

  const emits = script.match(/emits: \[([^\]]*)\]/)?.[1]
  if (emits) {
    for (const [, name] of emits.matchAll(/'([^']+)'/g)) {
      if (!/^(update:[a-z][A-Za-z]*|[a-z]+(-[a-z]+)*)$/.test(name)) {
        fail(`emit "${name}" kebab-case olmalı`)
      }
    }
  }

  for (const prop of REMOVED_PROPS) {
    if (new RegExp(`^\\s{4}${prop}: \\{`, 'm').test(script)) fail(`kaldırılmış prop "${prop}"`)
  }

  for (const { name, values } of stringArrayConsts(script)) {
    const upper = name.toUpperCase()
    const removed = values.filter((value) => REMOVED_VALUES.includes(value))
    if (removed.length && /COLORS|TONES|VARIANTS/.test(upper)) {
      fail(`${name}: kaldırılmış değer(ler) ${removed.join(', ')} → "danger"`)
    }
    if (/(^|_)COLORS$/.test(upper) && !upper.startsWith('PRESET')) {
      const allowed = [...TONES, ...(EXTRA_COLORS[file] ?? [])]
      const bad = values.filter((value) => !allowed.includes(value))
      if (bad.length) fail(`${name}: ton sözlüğü dışı ${bad.join(', ')}`)
    }
    if (/(^|_)TONES$/.test(upper)) {
      const bad = values.filter((value) => ![...TONES, ...TEXT_TONES].includes(value))
      if (bad.length) fail(`${name}: ton sözlüğü dışı ${bad.join(', ')}`)
    }
    if (/(^|_)VARIANTS$/.test(upper)) {
      const tone = values.filter((value) => TONES.includes(value) && value !== 'secondary')
      if (tone.length) fail(`${name}: ton değerleri \`color\` prop'una ait (${tone.join(', ')})`)
      const cased = values.filter((value) => value !== value.toLowerCase())
      if (cased.length) fail(`${name}: küçük harf olmalı (${cased.join(', ')})`)
    }
    if (/(^|_)SIZES$/.test(upper)) {
      const allowed = [...SIZE_SCALE, ...(EXTRA_SIZES[file] ?? [])]
      const bad = values.filter((value) => !allowed.includes(value))
      if (bad.length) fail(`${name}: ölçek dışı ${bad.join(', ')}`)
    }
  }
}

/**
 * @param {string} dir
 * @returns {string[]}
 */
function vueFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : vueFiles(path)
    return entry.name.endsWith('.vue') ? [path] : []
  })
}

const STATIC_TONE_VARIANT = new RegExp(`(?<![:\\w-])variant="(${[...TONES.filter((t) => t !== 'secondary'), ...REMOVED_VALUES].join('|')})"`)
const STATIC_REMOVED_COLOR = new RegExp(`(?<![:\\w-])color="(${REMOVED_VALUES.join('|')})"`)
/**
 * Vurgu yalnız `font-medium` (500); kalınlık ve ölçek dışı boyut tipografi ölçeğini bozar.
 * `ui-heading-*` başlık ölçeği fewui'den gelir, burada aranmaz.
 */
const WEIGHT_CLASS = /(?:^|\s)!?(?:font-semibold|font-bold|font-extrabold|font-black)(?=\s|$)/
/**
 * Ölçek: 12px altı kasıtlı mikro metindir (rozet, sayaç). Ara değerler (12px ile 14px arası,
 * 14px ile 16px arası) ölçeği bozar ve `text-xs` / `text-sm` olmalıdır.
 */
const ARBITRARY_SIZE = /(?:^|\s)!?text-\[(\d+(?:\.\d+)?)(px|rem)\](?=\s|$)/g
const OFF_SCALE = (value, unit) => {
  const px = unit === 'rem' ? value * 16 : value
  return (px > 12 && px < 14) || (px > 14 && px < 16)
}

/** Ölçü / hiza bileşenin kendi sınıflarından gelir; dışarıdan verilirse iç boşluk ve dikey merkez bozulur. */
const CONTROL_TAGS = /^<ui-(button|input|select|segment|segment-group|tab-trigger|badge|tag|ai-button)\b/
const LAYOUT_CLASS = /(?:^|\s)!?(?:-?[pm][xytblrse]?-\S+|h-\S+|min-h-\S+|w-full|leading-\S+|justify-\S+|items-\S+|text-(?:xs|sm|base|lg|xl)|rounded(?:-\S+)?|gap-\S+)(?=\s|$)/

for (const dir of process.argv.slice(2)) {
  for (const path of vueFiles(resolve(dir))) {
    const template = readFileSync(path, 'utf8').match(/<template[^>]*>([\s\S]*)<\/template>/)?.[1] ?? ''
    for (const [, cls] of template.matchAll(/class="([^"]*)"/g)) {
      const weight = cls.match(WEIGHT_CLASS)
      if (weight) errors.push(`${path}: \`${weight[0].trim()}\` → \`font-medium\``)
      for (const sized of cls.matchAll(ARBITRARY_SIZE)) {
        if (OFF_SCALE(Number(sized[1]), sized[2])) {
          errors.push(`${path}: ara boyut \`${sized[0].trim()}\` → text-xs (12px) ya da text-sm (14px)`)
        }
      }
    }
    for (const [tag] of template.matchAll(/<ui-[a-z-]+\b[^>]*>/g)) {
      const fail = (message) => errors.push(`${path}: ${message} → ${tag.replace(/\s+/g, ' ').slice(0, 120)}`)
      if (/(?<![\w-])fulled\b/.test(tag)) fail('kaldırılmış prop "fulled" → "block"')
      if (/(?<![\w-])destructive\b(?!=)/.test(tag)) fail('kaldırılmış prop "destructive" → color="danger"')
      if (STATIC_TONE_VARIANT.test(tag)) fail('ton değeri `variant` içinde → `color`')
      if (STATIC_REMOVED_COLOR.test(tag)) fail('kaldırılmış ton → "danger"')
      const staticClass = tag.match(/(?<![:\w-])class="([^"]*)"/)?.[1]
      if (CONTROL_TAGS.test(tag) && staticClass && LAYOUT_CLASS.test(staticClass)) {
        fail(`ölçü / hiza sınıfı (${staticClass.match(LAYOUT_CLASS)[0].trim()}) → prop (block, size, text-align) veya sarmalayıcı div`)
      }
    }
  }
}

if (errors.length) {
  console.error(`[check-api-consistency] ${errors.length} sorun:\n  ${errors.join('\n  ')}`)
  process.exit(1)
}
console.log('[check-api-consistency] OK')
