/**
 * Tema token şeması (v2) — `preset.tokens.light` / `preset.tokens.dark` düz haritaları.
 *
 * Anahtarlar camelCase yazılır ve CSS değişkenine çevrilir (`surfaceForeground` → `--surface-foreground`,
 * `chart500` → `--chart-500`). `--` ile başlayan anahtarlar olduğu gibi kullanılır.
 * Yapısal anahtarlar: `base`, `surfaceStyle`, `controlStyle`, `inputStyle`, `radius`, `cardPadding`.
 */

export const BASE_SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
export const CHART_SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const FONT_FALLBACKS = 'ui-sans-serif, system-ui, sans-serif'

/** @type {Record<string, string>} */
export const BACKDROP_BLUR_SCALE = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
}

/** @type {Record<string, string>} */
export const MIX_FROM_MAP = {
  surface: 'var(--surface)',
  foreground: 'var(--foreground)',
  background: 'var(--background)',
  control: 'var(--control)',
}

/** @type {Record<string, string>} */
export const CARD_PADDING_SCALE = {
  compact: '1rem',
  default: '1.5rem',
  comfortable: '1.25rem',
  spacious: '2rem',
}

/** Durum tonları — bileşen `color` prop sözlüğüyle aynı. */
export const STATUS_TONES = ['success', 'warning', 'info', 'danger']

/**
 * Editör ve doğrulama için bilinen token grupları.
 * @type {Record<string, string[]>}
 */
export const TOKEN_GROUPS = {
  colors: [
    'background',
    'foreground',
    'surface',
    'surfaceForeground',
    'control',
    'controlForeground',
    'primary',
    'primaryForeground',
    'secondary',
    'secondaryForeground',
    'muted',
    'mutedForeground',
    'accent',
    'accentForeground',
    'border',
    'ring',
    'white',
  ],
  status: STATUS_TONES.flatMap((tone) => [tone, `${tone}Foreground`]),
  chart: [...CHART_SCALE_STEPS.map((step) => `chart${step}`), 'chart', 'chartForeground'],
  surfaces: ['surfaceStyle', 'controlStyle', 'inputStyle'],
  shape: ['radius', 'radius4xl', 'cardPadding'],
  effects: [
    'uiShadowSm',
    'uiShadowMd',
    'uiShadowSurface',
    'uiFillGradTopPrimary',
    'uiFillGradBottomPrimary',
    'uiFillGradLight',
    'uiFillGradDark',
    'uiScrollbarSize',
    'uiScrollbarTrack',
    'uiScrollbarThumb',
    'uiScrollbarThumbHover',
  ],
  scale: ['base'],
}

export const KNOWN_TOKENS = new Set(Object.values(TOKEN_GROUPS).flat())

/**
 * Token'lardan türeyen değişkenler. Her tema bloğunda yeniden tanımlanır ki
 * kapsamlı (scoped) önizlemede kendi elemanında hesaplansın.
 * @type {Record<string, string>}
 */
export const DERIVED_VARS = {
  '--font-heading': 'var(--font-sans)',
  '--radius-sm': 'calc(var(--radius) - 4px)',
  '--radius-md': 'calc(var(--radius) - 2px)',
  '--radius-3xl': 'var(--radius)',
  '--surface-bg':
    'color-mix(in oklab, var(--ui-surface-mix-from) var(--ui-surface-opacity), transparent)',
  '--control-bg':
    'color-mix(in oklab, var(--ui-control-mix-from) var(--ui-control-opacity), transparent)',
  '--input-background':
    'color-mix(in oklab, var(--ui-input-mix-from) var(--ui-input-opacity), transparent)',
  '--border': 'var(--input-background)',
  '--ui-focus-ring': 'color-mix(in oklab, var(--ring) 45%, transparent)',
  '--ui-button-grad-top': 'var(--ui-fill-grad-top-primary)',
  '--ui-button-grad-bottom': 'var(--ui-fill-grad-bottom-primary)',
  '--ui-button-grad-light': 'var(--ui-fill-grad-light)',
  '--ui-button-grad-dark': 'var(--ui-fill-grad-dark)',
}

/**
 * @param {string} key
 * @returns {string}
 */
export function toCssVarName(key) {
  if (key.startsWith('--')) {
    return key
  }
  return `--${key
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase()}`
}

/**
 * `--surface-foreground` → `surfaceForeground`, `--chart-500` → `chart500`.
 * @param {string} cssVar
 * @returns {string}
 */
export function toTokenKey(cssVar) {
  return cssVar
    .replace(/^--/, '')
    .replace(/-(\d)/g, '$1')
    .replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

/**
 * @param {string} fontFamily
 * @returns {string}
 */
export function formatFontFamily(fontFamily) {
  const trimmed = String(fontFamily || '').trim()
  if (!trimmed || trimmed.includes(',') || trimmed.startsWith('var(')) {
    return trimmed
  }
  const needsQuotes = /\s/.test(trimmed) && !/^["'].*["']$/.test(trimmed)
  const family = needsQuotes ? `"${trimmed.replace(/"/g, '')}"` : trimmed
  return `${family}, ${FONT_FALLBACKS}`
}

/**
 * @param {number|string|null|undefined} value
 * @returns {string|null}
 */
export function normalizeOpacity(value) {
  if (value == null || value === '') return null
  if (typeof value === 'string' && !/^-?\d*\.?\d+$/.test(value.trim())) {
    return value.trim()
  }
  const num = Number(value)
  if (Number.isNaN(num)) return null
  const percent = num <= 1 ? Math.round(num * 100) : Math.round(num)
  return `${Math.min(100, Math.max(0, percent))}%`
}

/**
 * @param {string|number|null|undefined} value
 * @returns {string|null}
 */
export function normalizeBackdropBlur(value) {
  if (value == null || value === '') return null
  if (typeof value === 'number') return `${value}px`
  const trimmed = String(value).trim()
  if (BACKDROP_BLUR_SCALE[trimmed] != null) return BACKDROP_BLUR_SCALE[trimmed]
  if (/^\d+$/.test(trimmed)) return trimmed === '0' ? '0' : `${trimmed}px`
  return trimmed
}

/**
 * @param {string|null|undefined} value
 * @returns {string|null}
 */
export function resolveMixFrom(value) {
  if (value == null || value === '') return null
  return MIX_FROM_MAP[value] ?? String(value)
}

/**
 * @param {string|null|undefined} value
 * @returns {string|null}
 */
export function resolveCardPadding(value) {
  if (value == null || value === '') return null
  return CARD_PADDING_SCALE[value] ?? String(value)
}

/**
 * @typedef {object} UiThemeBgStyle
 * @property {number|string} [opacity] 0–1, 0–100 veya CSS yüzdesi
 * @property {string|number} [backdropBlur] CSS blur (`12`, `'12px'`) veya ölçek (`'md'`)
 * @property {'surface'|'foreground'|'background'|'control'|string} [mixFrom] color-mix kaynağı
 */

/**
 * @typedef {Record<string, unknown> & {
 *   base?: Partial<Record<number, string>>,
 *   surfaceStyle?: UiThemeBgStyle,
 *   controlStyle?: UiThemeBgStyle,
 *   inputStyle?: UiThemeBgStyle,
 *   radius?: string,
 *   cardPadding?: 'compact'|'default'|'comfortable'|'spacious'|string,
 * }} UiThemeTokens
 */

/**
 * @param {Record<string, string>} vars
 * @param {'surface'|'control'|'input'} prefix
 * @param {UiThemeBgStyle|undefined} style
 */
function expandBgStyle(vars, prefix, style) {
  if (!style || typeof style !== 'object') return
  const opacity = normalizeOpacity(style.opacity ?? style.bgOpacity)
  if (opacity) vars[`--ui-${prefix}-opacity`] = opacity
  const blur = normalizeBackdropBlur(style.backdropBlur)
  if (blur) vars[`--ui-${prefix}-backdrop-blur`] = blur
  const mixFrom = resolveMixFrom(style.mixFrom)
  if (mixFrom) vars[`--ui-${prefix}-mix-from`] = mixFrom
}

/**
 * Token haritasını CSS değişkenlerine açar (türetilmiş değişkenler hariç).
 * @param {UiThemeTokens|null|undefined} tokens
 * @returns {Record<string, string>}
 */
export function expandTokens(tokens) {
  /** @type {Record<string, string>} */
  const vars = {}
  if (!tokens || typeof tokens !== 'object') return vars

  for (const [key, value] of Object.entries(tokens)) {
    if (value == null || value === '') continue

    if (key === 'base' && typeof value === 'object') {
      for (const step of BASE_SCALE_STEPS) {
        const stepValue = value[step]
        if (stepValue != null && stepValue !== '') vars[`--base-${step}`] = String(stepValue)
      }
      continue
    }
    if (key === 'surfaceStyle' || key === 'controlStyle' || key === 'inputStyle') {
      expandBgStyle(vars, key.replace('Style', ''), value)
      continue
    }
    if (key === 'cardPadding') {
      const padding = resolveCardPadding(String(value))
      if (padding) vars['--ui-card-space'] = padding
      continue
    }
    if (typeof value === 'object') continue
    vars[toCssVarName(key)] = String(value)
  }
  return vars
}

/**
 * @param {{ body?: string, heading?: string }|null|undefined} fonts
 * @returns {Record<string, string>}
 */
export function expandFonts(fonts) {
  /** @type {Record<string, string>} */
  const vars = {}
  if (!fonts) return vars
  if (fonts.body) vars['--font-sans'] = formatFontFamily(fonts.body)
  if (fonts.heading) vars['--font-heading'] = formatFontFamily(fonts.heading)
  return vars
}

/**
 * Token haritalarını derin birleştirir (yapısal anahtarlar alan bazında).
 * @param {UiThemeTokens} [base]
 * @param {UiThemeTokens} [patch]
 * @returns {UiThemeTokens}
 */
export function mergeTokens(base = {}, patch = {}) {
  /** @type {UiThemeTokens} */
  const next = { ...base }
  for (const [key, value] of Object.entries(patch || {})) {
    if (value && typeof value === 'object' && base[key] && typeof base[key] === 'object') {
      next[key] = { ...base[key], ...value }
    } else {
      next[key] = value
    }
  }
  return next
}
