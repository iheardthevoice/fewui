import { resolveThemeVars } from './build-theme-css.js'
import { deriveBrandColorsFromPrimary, pickContrastForeground } from './color-utils.js'
import { resolveTheme } from './registry.js'
import { expandFonts, expandTokens, formatFontFamily } from './tokens.js'

/**
 * @typedef {import('./define-theme.js').ThemePackage} ThemePackage
 * @typedef {import('./tokens.js').UiThemeTokens} UiThemeTokens
 * @typedef {'light'|'dark'} UiThemeMode
 */

/**
 * @typedef {UiThemeTokens | { light?: UiThemeTokens, dark?: UiThemeTokens }} UiThemeOverrides
 * Düz harita aktif moda, `{ light, dark }` ilgili moda uygulanır.
 */

/**
 * @typedef {object} ApplyThemeOptions
 * @property {UiThemeMode} [mode] Verilmezse kökteki `.dark` sınıfı korunur
 * @property {string|HTMLElement} [root] Varsayılan: `document.documentElement`
 * @property {boolean} [inline=false] Tüm token'ları inline yazar (tema `color.css` yüklenmediyse)
 * @property {UiThemeOverrides} [overrides] Anlık token override'ları (her zaman inline)
 */

/** @type {WeakMap<HTMLElement, { theme: ThemePackage, inline: boolean, overrides?: UiThemeOverrides, keys: string[] }>} */
const ROOT_STATE = new WeakMap()

/**
 * @param {string|HTMLElement|null|undefined} root
 * @returns {HTMLElement|null}
 */
function resolveRoot(root) {
  if (typeof document === 'undefined') return null
  if (!root) return document.documentElement
  if (typeof root === 'string') return document.querySelector(root)
  return root
}

/**
 * @param {UiThemeOverrides|undefined} overrides
 * @param {UiThemeMode} mode
 * @returns {Record<string, string>}
 */
export function resolveOverrideVars(overrides, mode) {
  if (!overrides || typeof overrides !== 'object') return {}
  if ('light' in overrides || 'dark' in overrides) {
    const scoped = /** @type {{ light?: UiThemeTokens, dark?: UiThemeTokens }} */ (overrides)
    return {
      ...expandTokens(scoped.light),
      ...(mode === 'dark' ? expandTokens(scoped.dark) : {}),
    }
  }
  return expandTokens(/** @type {UiThemeTokens} */ (overrides))
}

/**
 * Uygulanacak CSS değişkenlerini DOM olmadan hesaplar.
 * @param {string|ThemePackage} theme
 * @param {{ mode?: UiThemeMode, inline?: boolean, overrides?: UiThemeOverrides }} [options]
 * @returns {Record<string, string>}
 */
export function computeThemeVars(theme, options = {}) {
  const pkg = resolveTheme(theme)
  const mode = options.mode === 'dark' ? 'dark' : 'light'
  const base = options.inline ? resolveThemeVars(pkg, mode) : expandFonts(pkg.preset.fonts)
  return { ...base, ...resolveOverrideVars(options.overrides, mode) }
}

/**
 * Temayı kök öğeye uygular: `.dark` sınıfı, fontlar, (isteğe bağlı) tüm token'lar ve override'lar.
 * Önceki çağrıdan kalan inline değişkenler temizlenir.
 * @param {string|ThemePackage} theme Kayıtlı tema id'si veya paket
 * @param {ApplyThemeOptions} [options]
 * @returns {Record<string, string>}
 */
export function applyUiTheme(theme, options = {}) {
  const root = resolveRoot(options.root)
  if (!root) return {}

  const pkg = resolveTheme(theme)
  const mode = options.mode ?? (root.classList.contains('dark') ? 'dark' : 'light')
  root.classList.toggle('dark', mode === 'dark')

  const inline = Boolean(options.inline)
  const vars = computeThemeVars(pkg, { mode, inline, overrides: options.overrides })

  const previous = ROOT_STATE.get(root)
  if (previous) {
    for (const key of previous.keys) {
      if (!(key in vars)) root.style.removeProperty(key)
    }
  }
  for (const [prop, value] of Object.entries(vars)) {
    root.style.setProperty(prop, value)
  }
  ROOT_STATE.set(root, { theme: pkg, inline, overrides: options.overrides, keys: Object.keys(vars) })

  return vars
}

/**
 * Aktif modu değiştirir; kökte `applyUiTheme` ile uygulanmış tema varsa o moda göre yeniden uygular.
 * @param {UiThemeMode} mode
 * @param {string|HTMLElement} [rootInput]
 */
export function setUiThemeMode(mode, rootInput) {
  const root = resolveRoot(rootInput)
  if (!root) return
  const state = ROOT_STATE.get(root)
  if (state) {
    applyUiTheme(state.theme, { mode, root, inline: state.inline, overrides: state.overrides })
    return
  }
  root.classList.toggle('dark', mode === 'dark')
}

/**
 * Kökteki inline tema değişkenlerini kaldırır (stylesheet değerlerine döner).
 * @param {string|HTMLElement} [rootInput]
 */
export function clearUiTheme(rootInput) {
  const root = resolveRoot(rootInput)
  if (!root) return
  const state = ROOT_STATE.get(root)
  if (!state) return
  for (const key of state.keys) root.style.removeProperty(key)
  ROOT_STATE.delete(root)
}

/**
 * SSR için html öznitelikleri.
 * @param {string|ThemePackage} theme
 * @param {{ mode?: UiThemeMode, inline?: boolean, overrides?: UiThemeOverrides }} [options]
 * @returns {{ classAttr: string, styleAttr: string }}
 */
export function buildThemeStyleAttr(theme, options = {}) {
  const vars = computeThemeVars(theme, options)
  return {
    classAttr: options.mode === 'dark' ? 'dark' : '',
    styleAttr: Object.entries(vars)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; '),
  }
}

/**
 * Tenant marka CSS'inden sonra tema değişkenlerini ve font ailesini `!important` ile zorlar.
 * @param {string|ThemePackage} theme
 * @param {{ mode?: UiThemeMode, inline?: boolean, overrides?: UiThemeOverrides }} [options]
 * @returns {string}
 */
export function buildThemeEnforcementCss(theme, options = {}) {
  const vars = computeThemeVars(theme, options)
  const chunks = []
  const decl = Object.entries(vars)
    .map(([prop, value]) => `${prop}: ${value} !important`)
    .join('; ')
  if (decl) chunks.push(`:root, html, html.dark { ${decl} }`)

  const bodyFont = vars['--font-sans']
  const headingFont = vars['--font-heading'] || bodyFont
  if (bodyFont) chunks.push(`html, body { font-family: ${bodyFont} !important; }`)
  if (headingFont) chunks.push(`h1, h2, h3, h4, h5, h6 { font-family: ${headingFont} !important; }`)
  return chunks.join('\n')
}

/**
 * Düz tema yapılandırmasını (kayıtlı site tasarımı / AI çıktısı) v2 token haritasına çevirir.
 * Alanlar: `primaryColor`, `secondaryColor`, `baseColor`, `fontFamily` / `bodyFontFamily`,
 * `headingFontFamily`, `colors` (ek değişkenler) ve doğrudan token adları.
 * @param {Record<string, unknown>|null|undefined} config
 * @returns {UiThemeTokens}
 */
export function themeConfigToTokens(config) {
  if (!config || typeof config !== 'object') return {}
  /** @type {UiThemeTokens} */
  const tokens = {}
  const skip = new Set([
    'mode',
    'root',
    'primaryColor',
    'secondaryColor',
    'baseColor',
    'fontFamily',
    'bodyFontFamily',
    'headingFontFamily',
    'colors',
  ])

  for (const [key, value] of Object.entries(config)) {
    if (skip.has(key) || value == null || value === '') continue
    tokens[key] = value
  }

  for (const [legacy, next] of [['destructive', 'danger'], ['destructiveForeground', 'dangerForeground']]) {
    if (legacy in tokens) {
      tokens[next] ??= tokens[legacy]
      delete tokens[legacy]
    }
  }

  const primary = config.primaryColor || config.primary
  if (primary) {
    tokens.primary = String(primary)
    tokens.primaryForeground ??= pickContrastForeground(tokens.primary)
    tokens.ring ??= `color-mix(in oklab, ${tokens.primary} 55%, transparent)`
  }
  const secondary = config.secondaryColor || config.secondary
  if (secondary) tokens.secondary = String(secondary)
  if (config.baseColor && typeof config.baseColor === 'object') tokens.base = { ...config.baseColor }

  const body = config.bodyFontFamily || config.fontFamily
  if (body) tokens['--font-sans'] = formatFontFamily(String(body))
  const heading = config.headingFontFamily || body
  if (heading) tokens['--font-heading'] = formatFontFamily(String(heading))

  if (config.colors && typeof config.colors === 'object') {
    for (const [key, value] of Object.entries(config.colors)) {
      if (value != null && value !== '') tokens[key] = String(value)
    }
  }
  return tokens
}

/**
 * Kayıtlı düz yapılandırmada `accent` ve `colors['brand-accent']` alanlarını ana renkten türetir.
 * @param {Record<string, unknown>} config
 * @param {{ force?: boolean }} [options] `force`: mevcut değerlerin üzerine yazar
 * @returns {Record<string, unknown>}
 */
export function withDerivedConfigBrandColors(config, options = {}) {
  if (!config || typeof config !== 'object') return config
  const primary = config.primaryColor || config.primary
  if (!primary) return config
  const derived = deriveBrandColorsFromPrimary(String(primary))
  const colors = { ...(config.colors && typeof config.colors === 'object' ? config.colors : {}) }
  if (options.force || !colors['brand-accent']) colors['brand-accent'] = derived.brandAccent
  return {
    ...config,
    accent: options.force || !config.accent ? derived.accent : config.accent,
    colors,
  }
}
