import { resolveThemeVars } from './build-theme-css.js'
import { oklchToRgb, parseOklch, rgbToOklch } from './color-utils.js'
import { resolveTheme } from './registry.js'
import {
  BASE_SCALE_STEPS,
  CHART_SCALE_STEPS,
  CHART_SERIES_COUNT,
  DERIVED_VARS,
  STATUS_TONES,
  TOKEN_GROUPS,
  toCssVarName,
} from './tokens.js'

/**
 * Tema token katmanları ve standart dışa aktarım (W3C Design Tokens Community Group biçimi).
 *
 * fewui token'ları üç katmandır; CSS değişken adları değişmez, katman yalnız *rolü* söyler:
 *
 * 1. **primitive** — ham değerler: nötr skala (`--base-50…950`), grafik rampası, `--white`, yazı tipi, köşe.
 * 2. **semantic** — rol token'ları: `--background`, `--primary`, `--danger-foreground` … Çoğu bir primitive'e
 *    bağlıdır (`background → base.50`); mod (açık / koyu) bu katmanda ayrışır.
 * 3. **component** — bileşenlerin kullandığı türetilmiş değerler: seçim zemini (`--primary-soft`), hover,
 *    odak halkası, mürekkep tonları, kontrol yüksekliği.
 *
 * `themeToDesignTokens` bu yapıyı Figma eklentilerinin (Tokens Studio vb.) ve Style Dictionary'nin okuduğu
 * JSON'a çevirir. Figma OKLCH ve `color-mix()` okuyamadığı için renkler **çözülmüş sRGB hex** yazılır;
 * özgün CSS değeri `$extensions["com.fewui"].css` altında korunur.
 */

/** @typedef {{ L: number, a: number, b: number, alpha: number }} Oklab */

const MAX_DEPTH = 12

function srgbToOklab(r, g, b, alpha = 1) {
  const { l, c, h } = rgbToOklch(r, g, b)
  const rad = (h * Math.PI) / 180
  return { L: l, a: c * Math.cos(rad), b: c * Math.sin(rad), alpha }
}

function oklabToHex(color) {
  const c = Math.hypot(color.a, color.b)
  const h = ((Math.atan2(color.b, color.a) * 180) / Math.PI + 360) % 360
  const [r, g, b] = oklchToRgb(color.L, c, h).map((v) => Math.min(255, Math.max(0, Math.round(v))))
  const byte = (v) => v.toString(16).padStart(2, '0')
  const alpha = Math.min(1, Math.max(0, color.alpha))
  return `#${byte(r)}${byte(g)}${byte(b)}${alpha < 0.999 ? byte(Math.round(alpha * 255)) : ''}`
}

/** Üst düzey virgüllerden böler (iç içe parantezleri korur). */
function splitTopLevel(text, separator = ',') {
  const parts = []
  let depth = 0
  let current = ''
  for (const ch of text) {
    if (ch === '(') depth += 1
    if (ch === ')') depth -= 1
    if (ch === separator && depth === 0) {
      parts.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  if (current.trim()) parts.push(current.trim())
  return parts
}

/** `var(--x)` / `var(--x, yedek)` ifadelerini değişken haritasından açar. */
function substituteVars(value, vars, depth = 0) {
  if (depth > MAX_DEPTH) return null
  let out = String(value)
  for (let guard = 0; guard < 40 && out.includes('var('); guard += 1) {
    const start = out.indexOf('var(')
    let level = 0
    let end = -1
    for (let i = start + 3; i < out.length; i += 1) {
      if (out[i] === '(') level += 1
      if (out[i] === ')') {
        level -= 1
        if (level === 0) {
          end = i
          break
        }
      }
    }
    if (end === -1) return null
    const [name, ...fallback] = splitTopLevel(out.slice(start + 4, end))
    const replacement = vars[name] ?? (fallback.length ? fallback.join(', ') : null)
    if (replacement == null) return null
    out = out.slice(0, start) + replacement + out.slice(end + 1)
  }
  return out.includes('var(') ? null : out
}

function parsePercent(text) {
  const m = /^(-?[0-9.]+)%$/.exec(String(text).trim())
  return m ? Number.parseFloat(m[1]) / 100 : null
}

/**
 * CSS renk ifadesini OKLab'a çözer: hex, `oklch()`, `rgb()`, `transparent`, `color-mix(in oklab, …)`.
 * Desteklenmeyen ifadede (`oklch(from …)`, gradyan) `null`.
 * @param {string} expression `var()` içermeyen ifade
 * @returns {Oklab | null}
 */
export function parseCssColor(expression) {
  const text = String(expression || '').trim()
  if (!text) return null
  if (text === 'transparent') return { L: 0, a: 0, b: 0, alpha: 0 }
  if (text === 'white') return srgbToOklab(255, 255, 255)
  if (text === 'black') return srgbToOklab(0, 0, 0)

  const hex = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(text)
  if (hex) {
    let digits = hex[1]
    if (digits.length <= 4) digits = [...digits].map((ch) => ch + ch).join('')
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(digits.slice(i, i + 2), 16))
    return srgbToOklab(r, g, b, digits.length === 8 ? parseInt(digits.slice(6, 8), 16) / 255 : 1)
  }

  if (/^oklch\(/i.test(text) && !/^oklch\(\s*from/i.test(text)) {
    const parsed = parseOklch(text)
    if (!parsed) return null
    const alphaText = /\/\s*([0-9.]+%?)\s*\)$/.exec(text)?.[1]
    const alpha = alphaText ? (alphaText.endsWith('%') ? Number.parseFloat(alphaText) / 100 : Number.parseFloat(alphaText)) : 1
    const rad = (parsed.h * Math.PI) / 180
    return { L: parsed.l, a: parsed.c * Math.cos(rad), b: parsed.c * Math.sin(rad), alpha }
  }

  const rgb = /^rgba?\(\s*([0-9.]+)[\s,]+([0-9.]+)[\s,]+([0-9.]+)\s*(?:[/,]\s*([0-9.]+%?))?\s*\)$/i.exec(text)
  if (rgb) {
    const alpha = rgb[4] ? (rgb[4].endsWith('%') ? Number.parseFloat(rgb[4]) / 100 : Number.parseFloat(rgb[4])) : 1
    return srgbToOklab(Number(rgb[1]), Number(rgb[2]), Number(rgb[3]), alpha)
  }

  const mix = /^color-mix\(\s*in\s+(oklab|srgb)\s*,([\s\S]*)\)$/i.exec(text)
  if (mix) {
    const parts = splitTopLevel(mix[2])
    if (parts.length !== 2) return null
    const sides = parts.map((part) => {
      const tokens = splitTopLevel(part, ' ')
      const percentIndex = tokens.findIndex((token) => parsePercent(token) != null)
      const weight = percentIndex === -1 ? null : parsePercent(tokens[percentIndex])
      const colorText = tokens.filter((_, index) => index !== percentIndex).join(' ')
      return { color: parseCssColor(colorText), weight }
    })
    if (sides.some((side) => !side.color)) return null
    let [w1, w2] = sides.map((side) => side.weight)
    if (w1 == null && w2 == null) w1 = w2 = 0.5
    else if (w1 == null) w1 = 1 - w2
    else if (w2 == null) w2 = 1 - w1
    const total = w1 + w2
    if (!(total > 0)) return null
    const [p1, p2] = [w1 / total, w2 / total]
    const [c1, c2] = sides.map((side) => side.color)
    // CSS: alfa ile önceden çarpılmış uzayda karıştırılır.
    const alpha = c1.alpha * p1 + c2.alpha * p2
    if (alpha <= 0) return { L: 0, a: 0, b: 0, alpha: 0 }
    const channel = (key) => (c1[key] * c1.alpha * p1 + c2[key] * c2.alpha * p2) / alpha
    return { L: channel('L'), a: channel('a'), b: channel('b'), alpha: alpha * Math.min(1, total) }
  }
  return null
}

/**
 * Değişken haritasındaki bir CSS değerini çözülmüş hex renge çevirir.
 * @param {string} value
 * @param {Record<string, string>} vars
 * @returns {string | null}
 */
export function resolveCssColorToHex(value, vars) {
  const flat = substituteVars(value, vars)
  if (flat == null) return null
  const color = parseCssColor(flat)
  return color ? oklabToHex(color) : null
}

const PRIMITIVE_VAR = /^var\(\s*(--base-(\d+)|--chart-(\d+)|--white)\s*\)$/

function primitiveAlias(value) {
  const m = PRIMITIVE_VAR.exec(String(value).trim())
  if (!m) return null
  if (m[2]) return `{primitive.color.base.${m[2]}}`
  if (m[3]) return `{primitive.color.chart.${m[3]}}`
  return '{primitive.color.white}'
}

function colorToken(cssVar, value, vars, { alias = true, primitives = vars } = {}) {
  const hex = resolveCssColorToHex(value, vars)
  if (!hex) return null
  // Primitive'ler açık moddan yazılır; koyu mod aynı basamağı farklı tanımlıyorsa bağ kurulmaz, değer yazılır.
  const target = /^var\(\s*(--[a-z0-9-]+)\s*\)$/.exec(String(value).trim())?.[1]
  const samePrimitive = target ? vars[target] === primitives[target] : false
  const reference = alias && samePrimitive ? primitiveAlias(value) : null
  return {
    $type: 'color',
    $value: reference ?? hex,
    $extensions: { 'com.fewui': { cssVar, css: String(value), ...(reference ? { resolved: hex } : {}) } },
  }
}

function camel(cssVar) {
  return cssVar.replace(/^--(ui-)?/, '').replace(/-([a-z0-9])/g, (_, ch) => ch.toUpperCase())
}

/** Semantic katmanın token anahtarları (preset anahtarı → CSS değişkeni). */
const SEMANTIC_KEYS = [
  ...TOKEN_GROUPS.colors.filter((key) => key !== 'white'),
  ...STATUS_TONES.flatMap((tone) => [tone, `${tone}Foreground`]),
  'chart',
  'chartForeground',
  ...Array.from({ length: CHART_SERIES_COUNT }, (_, i) => `chartSeries${i + 1}`),
]

/** Component katmanında renk olarak dışa aktarılan türetilmiş değişkenler. */
const COMPONENT_COLOR_VARS = Object.keys(DERIVED_VARS).filter((name) =>
  /^--(ui-hover|ui-focus-ring|ui-selected-fg|primary-soft|primary-soft-hover|primary-ink|warning-ink|success-ink|info-ink|danger-ink|surface-bg|control-bg|popover-bg|input-background)$/.test(name),
)

/**
 * Katman → CSS değişkeni listesi (doküman ve araçlar için).
 * @type {{ primitive: string[], semantic: string[], component: string[] }}
 */
export const TOKEN_LAYERS = {
  primitive: [
    ...BASE_SCALE_STEPS.map((step) => `--base-${step}`),
    ...CHART_SCALE_STEPS.map((step) => `--chart-${step}`),
    '--white',
    '--font-sans',
    '--font-heading',
    '--radius',
  ],
  semantic: SEMANTIC_KEYS.map(toCssVarName),
  component: [
    ...COMPONENT_COLOR_VARS,
    '--radius-sm',
    '--radius-md',
    '--ui-control-h-sm',
    '--ui-control-h-md',
    '--ui-control-h-lg',
  ],
}

function modeTokens(vars, primitives) {
  /** @type {Record<string, unknown>} */
  const semantic = {}
  for (const key of SEMANTIC_KEYS) {
    const cssVar = toCssVarName(key)
    if (!(cssVar in vars)) continue
    const token = colorToken(cssVar, vars[cssVar], vars, { primitives })
    if (token) semantic[key] = token
  }
  /** @type {Record<string, unknown>} */
  const component = {}
  for (const cssVar of COMPONENT_COLOR_VARS) {
    if (!(cssVar in vars)) continue
    const token = colorToken(cssVar, vars[cssVar], vars, { alias: false })
    if (token) component[camel(cssVar)] = token
  }
  return { semantic, component }
}

function fontToken(cssVar, value) {
  const families = String(value || '')
    .split(',')
    .map((part) => part.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
  return { $type: 'fontFamily', $value: families, $extensions: { 'com.fewui': { cssVar } } }
}

function dimensionToken(cssVar, value, css) {
  return { $type: 'dimension', $value: value, $extensions: { 'com.fewui': { cssVar, ...(css ? { css } : {}) } } }
}

/**
 * Tema paketini W3C Design Tokens (DTCG) JSON'una çevirir: `primitive` · `semantic.{light,dark}` ·
 * `component.{light,dark,size}`. Çıktı `themes/<id>/tokens.json` olarak üretilir.
 * @param {string | import('./define-theme.js').ThemePackage} theme
 * @returns {Record<string, unknown>}
 */
export function themeToDesignTokens(theme) {
  const pkg = resolveTheme(theme)
  const light = resolveThemeVars(pkg, 'light')
  const dark = resolveThemeVars(pkg, 'dark')

  /** @type {Record<string, unknown>} */
  const base = {}
  for (const step of BASE_SCALE_STEPS) {
    const token = colorToken(`--base-${step}`, light[`--base-${step}`] ?? '', light, { alias: false })
    if (token) base[step] = token
  }
  /** @type {Record<string, unknown>} */
  const chart = {}
  for (const step of CHART_SCALE_STEPS) {
    const token = colorToken(`--chart-${step}`, light[`--chart-${step}`] ?? '', light, { alias: false })
    if (token) chart[step] = token
  }
  const white = colorToken('--white', light['--white'] ?? '', light, { alias: false })

  const radius = Number.parseFloat(light['--radius'])
  const radiusUnit = /px\s*$/.test(String(light['--radius'] || '')) && Number.isFinite(radius)

  const lightTokens = modeTokens(light, light)
  const darkTokens = modeTokens(dark, light)

  return {
    $description: `fewui theme "${pkg.id}" — W3C Design Tokens (DTCG). Generated from preset.js; do not edit.`,
    $extensions: {
      'com.fewui': {
        theme: pkg.id,
        label: pkg.label ?? pkg.id,
        modes: ['light', 'dark'],
        layers: ['primitive', 'semantic', 'component'],
      },
    },
    primitive: {
      color: { base, ...(Object.keys(chart).length ? { chart } : {}), ...(white ? { white } : {}) },
      font: {
        ...(light['--font-sans'] ? { body: fontToken('--font-sans', light['--font-sans']) } : {}),
        ...(light['--font-heading'] && !/^var\(/.test(light['--font-heading'])
          ? { heading: fontToken('--font-heading', light['--font-heading']) }
          : {}),
      },
      ...(light['--radius'] ? { radius: { base: dimensionToken('--radius', String(light['--radius'])) } } : {}),
    },
    semantic: { light: lightTokens.semantic, dark: darkTokens.semantic },
    component: {
      light: lightTokens.component,
      dark: darkTokens.component,
      size: {
        ...(radiusUnit
          ? {
              radiusSm: dimensionToken('--radius-sm', `${Math.max(radius - 4, 0)}px`, DERIVED_VARS['--radius-sm']),
              radiusMd: dimensionToken('--radius-md', `${Math.max(radius - 2, 0)}px`, DERIVED_VARS['--radius-md']),
            }
          : {}),
        // `_shared/global.css`: `--spacing` (0.25rem = 4px) × 7 / 8 / 9.
        controlHeightSm: dimensionToken('--ui-control-h-sm', '28px', 'calc(var(--spacing) * 7)'),
        controlHeightMd: dimensionToken('--ui-control-h-md', '32px', 'calc(var(--spacing) * 8)'),
        controlHeightLg: dimensionToken('--ui-control-h-lg', '36px', 'calc(var(--spacing) * 9)'),
      },
    },
  }
}
