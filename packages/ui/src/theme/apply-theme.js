const BASE_SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const FONT_FALLBACKS = 'ui-sans-serif, system-ui, sans-serif'

/** @type {Record<string, string>} */
const BACKDROP_BLUR_SCALE = {
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
const MIX_FROM_MAP = {
  surface: 'var(--surface)',
  foreground: 'var(--foreground)',
  background: 'var(--background)',
  control: 'var(--control)',
}

/**
 * @typedef {Record<number, string>} UiThemeBaseColorScale
 */

/**
 * @typedef {object} UiThemeBgStyle
 * @property {number} [opacity] 0–1 ondalık veya 0–100 yüzde (örn. `6` → %6, `0.06` → %6)
 * @property {number} [bgOpacity] `opacity` alias
 * @property {string|number} [backdropBlur] CSS blur (`12`, `'12px'`) veya Tailwind ölçeği (`'md'`)
 * @property {'surface'|'foreground'|'background'|'control'|string} [mixFrom] color-mix kaynağı (varsayılan: ilgili token)
 */

/**
 * @typedef {object} UiThemeConfig
 * @property {'light'|'dark'} [mode] Kök öğeye `.dark` sınıfı ekler veya kaldırır
 * @property {string} [fontFamily] `--font-sans` (örn. `Poppins` veya tam yığın)
 * @property {string} [primaryColor] `--primary` (alias: `primary`)
 * @property {string} [primaryForeground] `--primary-foreground`
 * @property {UiThemeBaseColorScale} [baseColor] `--base-50` … `--base-950` (kısmi verilebilir)
 * @property {string} [background] `--background`
 * @property {string} [foreground] `--foreground`
 * @property {string} [surface] `--surface`
 * @property {string} [surfaceForeground] `--surface-foreground`
 * @property {UiThemeBgStyle} [surfaceStyle] `--surface-bg`, `--ui-surface-backdrop-blur`, …
 * @property {string} [control] `--control`
 * @property {string} [controlForeground] `--control-foreground`
 * @property {UiThemeBgStyle} [controlStyle] `--control-bg`, `--ui-control-backdrop-blur`, …
 * @property {UiThemeBgStyle} [inputStyle] `--input-background`, `--ui-input-backdrop-blur`, …
 * @property {string} [secondaryColor] `--secondary` (alias: `secondary`)
 * @property {string} [secondaryForeground] `--secondary-foreground`
 * @property {string} [border] `--border`
 * @property {string} [ring] `--ring`
 * @property {string} [muted] `--muted`
 * @property {string} [mutedForeground] `--muted-foreground`
 * @property {string} [accent] `--accent`
 * @property {string} [accentForeground] `--accent-foreground`
 * @property {Record<string, string>} [colors] Ek CSS değişkenleri (`brand-accent` → `--brand-accent`)
 * @property {string|HTMLElement} [root] Varsayılan: `document.documentElement`
 */

/**
 * @param {string|HTMLElement|null|undefined} root
 * @returns {HTMLElement|null}
 */
function resolveRoot(root) {
  if (typeof document === 'undefined') {
    return null
  }
  if (!root) {
    return document.documentElement
  }
  if (typeof root === 'string') {
    return document.querySelector(root)
  }
  return root
}

/**
 * @param {string} fontFamily
 * @returns {string}
 */
function formatFontFamily(fontFamily) {
  const trimmed = String(fontFamily).trim()
  if (!trimmed) {
    return trimmed
  }
  if (trimmed.includes(',')) {
    return trimmed
  }
  return `${trimmed}, ${FONT_FALLBACKS}`
}

/**
 * @param {string} hex
 * @returns {[number, number, number]|null}
 */
function parseHex(hex) {
  const normalized = hex.trim().replace('#', '')
  if (normalized.length === 3) {
    return [0, 1, 2].map((index) => parseInt(normalized[index] + normalized[index], 16))
  }
  if (normalized.length === 6) {
    return [
      parseInt(normalized.slice(0, 2), 16),
      parseInt(normalized.slice(2, 4), 16),
      parseInt(normalized.slice(4, 6), 16),
    ]
  }
  return null
}

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {number}
 */
function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((channel) => {
    const normalized = channel / 255
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * @param {string} color
 * @param {string} [light='#ffffff']
 * @param {string} [dark='#0a0a0b']
 * @returns {string}
 */
function pickContrastForeground(color, light = '#ffffff', dark = '#0a0a0b') {
  const rgb = parseHex(color)
  if (!rgb) {
    return light
  }
  return relativeLuminance(...rgb) > 0.4 ? dark : light
}

/**
 * @param {string} key
 * @returns {string}
 */
function toCssVarName(key) {
  if (key.startsWith('--')) {
    return key
  }
  return `--${key
    .replace(/([A-Z])/g, '-$1')
    .replace(/_/g, '-')
    .toLowerCase()}`
}

/**
 * @param {number|string|null|undefined} value
 * @returns {string|null}
 */
function normalizeOpacity(value) {
  if (value == null || value === '') {
    return null
  }
  const num = Number(value)
  if (Number.isNaN(num)) {
    return null
  }
  const percent = num <= 1 ? Math.round(num * 100) : Math.round(num)
  return `${Math.min(100, Math.max(0, percent))}%`
}

/**
 * @param {string|number|null|undefined} value
 * @returns {string|null}
 */
function normalizeBackdropBlur(value) {
  if (value == null || value === '') {
    return null
  }
  if (typeof value === 'number') {
    return `${value}px`
  }
  const trimmed = String(value).trim()
  if (BACKDROP_BLUR_SCALE[trimmed] != null) {
    return BACKDROP_BLUR_SCALE[trimmed]
  }
  if (/^\d+$/.test(trimmed)) {
    return `${trimmed}px`
  }
  return trimmed
}

/**
 * @param {'surface'|'foreground'|'background'|'control'|string|null|undefined} value
 * @returns {string|null}
 */
function resolveMixFrom(value) {
  if (value == null || value === '') {
    return null
  }
  if (MIX_FROM_MAP[value]) {
    return MIX_FROM_MAP[value]
  }
  return String(value)
}

/**
 * @param {Record<string, string>} vars
 * @param {'surface'|'control'|'input'} prefix
 * @param {UiThemeBgStyle|undefined} style
 */
function applyBgStyle(vars, prefix, style) {
  if (!style || typeof style !== 'object') {
    return
  }

  const opacity = normalizeOpacity(style.opacity ?? style.bgOpacity)
  if (opacity) {
    vars[`--ui-${prefix}-opacity`] = opacity
  }

  const blur = normalizeBackdropBlur(style.backdropBlur ?? style.backdropFilter)
  if (blur) {
    vars[`--ui-${prefix}-backdrop-blur`] = blur
  }

  const mixFrom = resolveMixFrom(style.mixFrom)
  if (mixFrom) {
    vars[`--ui-${prefix}-mix-from`] = mixFrom
  }
}

/**
 * @param {UiThemeConfig} theme
 * @param {string} primaryKey
 * @param {string} fallbackKey
 * @returns {string|undefined}
 */
function readColorToken(theme, primaryKey, fallbackKey) {
  const primary = theme[primaryKey]
  if (primary != null && primary !== '') {
    return String(primary)
  }
  const fallback = theme[fallbackKey]
  if (fallback != null && fallback !== '') {
    return String(fallback)
  }
  return undefined
}

/**
 * Tema yapılandırmasını kök öğede CSS custom property olarak uygular.
 * @param {UiThemeConfig} [theme]
 * @param {{ root?: string|HTMLElement }} [options]
 * @returns {Record<string, string>}
 */
export function applyUiTheme(theme = {}, options = {}) {
  const root = resolveRoot(theme.root ?? options.root)
  if (!root || typeof theme !== 'object') {
    return {}
  }

  if (theme.mode === 'dark') {
    root.classList.add('dark')
  } else if (theme.mode === 'light') {
    root.classList.remove('dark')
  }

  /** @type {Record<string, string>} */
  const vars = {}

  if (theme.fontFamily) {
    vars['--font-sans'] = formatFontFamily(theme.fontFamily)
  }

  if (theme.baseColor && typeof theme.baseColor === 'object') {
    for (const step of BASE_SCALE_STEPS) {
      const value = theme.baseColor[step]
      if (value != null && value !== '') {
        vars[`--base-${step}`] = String(value)
      }
    }
  }

  const semanticEntries = [
    ['background', '--background'],
    ['foreground', '--foreground'],
    ['surface', '--surface'],
    ['surfaceForeground', '--surface-foreground'],
    ['control', '--control'],
    ['controlForeground', '--control-foreground'],
    ['primaryForeground', '--primary-foreground'],
    ['secondaryForeground', '--secondary-foreground'],
    ['border', '--border'],
    ['ring', '--ring'],
    ['muted', '--muted'],
    ['mutedForeground', '--muted-foreground'],
    ['accent', '--accent'],
    ['accentForeground', '--accent-foreground'],
  ]

  for (const [tokenKey, cssVar] of semanticEntries) {
    const value = theme[tokenKey]
    if (value != null && value !== '') {
      vars[cssVar] = String(value)
    }
  }

  const primary = readColorToken(theme, 'primaryColor', 'primary')
  if (primary) {
    vars['--primary'] = primary
    if (!theme.primaryForeground) {
      vars['--primary-foreground'] = pickContrastForeground(primary)
    }
    if (!theme.ring) {
      vars['--ring'] = `color-mix(in oklab, ${primary} 55%, transparent)`
    }
  }

  const secondary = readColorToken(theme, 'secondaryColor', 'secondary')
  if (secondary) {
    vars['--secondary'] = secondary
  }

  applyBgStyle(vars, 'surface', theme.surfaceStyle)
  applyBgStyle(vars, 'control', theme.controlStyle)
  applyBgStyle(vars, 'input', theme.inputStyle)

  if (theme.colors && typeof theme.colors === 'object') {
    for (const [key, value] of Object.entries(theme.colors)) {
      if (value != null && value !== '') {
        vars[toCssVarName(key)] = String(value)
      }
    }
  }

  for (const [prop, value] of Object.entries(vars)) {
    root.style.setProperty(prop, value)
  }

  return { ...vars }
}

/**
 * @param {UiThemeConfig} base
 * @param {UiThemeConfig} overrides
 * @returns {UiThemeConfig}
 */
export function mergeUiTheme(base, overrides) {
  return {
    ...base,
    ...overrides,
    baseColor: {
      ...base.baseColor,
      ...overrides.baseColor,
    },
    surfaceStyle: {
      ...base.surfaceStyle,
      ...overrides.surfaceStyle,
    },
    controlStyle: {
      ...base.controlStyle,
      ...overrides.controlStyle,
    },
    inputStyle: {
      ...base.inputStyle,
      ...overrides.inputStyle,
    },
    colors: {
      ...base.colors,
      ...overrides.colors,
    },
  }
}
