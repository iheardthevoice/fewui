import { resolveThemeVars } from './build-theme-css.js'
import { deriveBrandColorsFromPrimary, pickContrastForeground } from './color-utils.js'
import { resolveTheme } from './registry.js'
import { expandFonts, expandTokens, formatFontFamily } from './tokens.js'

/**
 * @typedef {import('./define-theme.js').ThemePackage} ThemePackage
 * @typedef {import('./tokens.js').UiThemeTokens} UiThemeTokens
 * @typedef {'light'|'dark'} UiThemeMode
 * @typedef {'light'|'dark'|'system'} UiThemeModePreference `system` cihaz ayarını izler
 */

/**
 * @typedef {UiThemeTokens | { light?: UiThemeTokens, dark?: UiThemeTokens }} UiThemeOverrides
 * Düz harita aktif moda, `{ light, dark }` ilgili moda uygulanır.
 */

/**
 * @typedef {object} ApplyThemeOptions
 * @property {UiThemeModePreference} [mode] Verilmezse önceki tercih / kökteki `.dark` sınıfı korunur
 * @property {string|HTMLElement} [root] Varsayılan: `document.documentElement`
 * @property {boolean} [inline=false] Tüm token'ları inline yazar (tema `color.css` yüklenmediyse)
 * @property {UiThemeOverrides} [overrides] Anlık token override'ları (her zaman inline)
 * @property {boolean} [transition=true] Mod / renk değişimini kısa bir geçişle uygular
 */

/** @type {WeakMap<HTMLElement, { theme: ThemePackage, inline: boolean, overrides?: UiThemeOverrides, keys: string[], vars: Record<string, string> }>} */
const ROOT_STATE = new WeakMap()

/**
 * Kök başına mod tercihi. `system` iken cihaz ayarı izlenir (`unwatch` dinleyiciyi kaldırır).
 * @type {WeakMap<HTMLElement, { preference: UiThemeModePreference, unwatch?: () => void }>}
 */
const MODE_STATE = new WeakMap()

/** @type {WeakMap<HTMLElement, ReturnType<typeof setTimeout>>} */
const TRANSITION_TIMERS = new WeakMap()

const SYSTEM_DARK_QUERY = '(prefers-color-scheme: dark)'
/** Mod / renk değişiminde köke kısa süreliğine verilen sınıf (`_shared/properties.css`). */
export const UI_THEME_TRANSITION_CLASS = 'ui-theme-transition'
/** Kökte yayılan olay: `detail: { mode, preference }`. */
export const UI_THEME_MODE_EVENT = 'ui-theme-mode-change'
const TRANSITION_MS = 260

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
 * Cihazın açık / koyu tercihi; tarayıcı dışında (SSR) `light`.
 * @returns {UiThemeMode}
 */
export function resolveSystemMode() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return 'light'
  return window.matchMedia(SYSTEM_DARK_QUERY).matches ? 'dark' : 'light'
}

/**
 * Tercihi (`light` | `dark` | `system`) uygulanacak moda çevirir.
 * @param {UiThemeModePreference|null|undefined} preference
 * @param {UiThemeMode} [fallback='light'] Tercih verilmediğinde
 * @returns {UiThemeMode}
 */
export function resolveUiThemeMode(preference, fallback = 'light') {
  if (preference === 'system') return resolveSystemMode()
  if (preference === 'dark' || preference === 'light') return preference
  return fallback
}

/**
 * Kökün etkin modu ve tercihi (`system` seçiliyse `mode` cihazdan çözülmüş değerdir).
 * @param {string|HTMLElement} [rootInput]
 * @returns {{ mode: UiThemeMode, preference: UiThemeModePreference }}
 */
export function getUiThemeMode(rootInput) {
  const root = resolveRoot(rootInput)
  if (!root) return { mode: 'light', preference: 'light' }
  const mode = root.classList.contains('dark') ? 'dark' : 'light'
  return { mode, preference: MODE_STATE.get(root)?.preference ?? mode }
}

/** Tercih `system` ise cihaz ayarını dinler; değilse dinleyiciyi bırakır. */
function trackPreference(root, preference) {
  const current = MODE_STATE.get(root)
  if (current?.preference === preference) return
  current?.unwatch?.()
  if (preference !== 'system' || typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    MODE_STATE.set(root, { preference })
    return
  }
  const query = window.matchMedia(SYSTEM_DARK_QUERY)
  const onChange = () => setUiThemeMode('system', root)
  query.addEventListener?.('change', onChange)
  MODE_STATE.set(root, { preference, unwatch: () => query.removeEventListener?.('change', onChange) })
}

/**
 * Renk token'ları `@property` ile tiplidir; bu sınıf varken köktekiler geçişle değişir.
 * Hareket azaltma tercihinde ve tarayıcı dışında atlanır.
 */
function startThemeTransition(root) {
  if (typeof window === 'undefined') return
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
  root.classList.add(UI_THEME_TRANSITION_CLASS)
  clearTimeout(TRANSITION_TIMERS.get(root))
  TRANSITION_TIMERS.set(
    root,
    setTimeout(() => root.classList.remove(UI_THEME_TRANSITION_CLASS), TRANSITION_MS),
  )
}

function emitModeChange(root, mode, preference) {
  if (typeof CustomEvent !== 'function') return
  root.dispatchEvent(new CustomEvent(UI_THEME_MODE_EVENT, { detail: { mode, preference } }))
}

function sameVars(a, b) {
  const keys = Object.keys(a)
  return keys.length === Object.keys(b).length && keys.every((key) => a[key] === b[key])
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
  const mode = resolveUiThemeMode(options.mode)
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
  const wasDark = root.classList.contains('dark')
  // Mod verilmezse önceki tercih (ör. `system`) sürer; o da yoksa kökteki `.dark` korunur.
  const preference = options.mode ?? MODE_STATE.get(root)?.preference
  const mode = resolveUiThemeMode(preference, wasDark ? 'dark' : 'light')

  const inline = Boolean(options.inline)
  const vars = computeThemeVars(pkg, { mode, inline, overrides: options.overrides })
  const previous = ROOT_STATE.get(root)

  // İlk uygulamada geçiş yok (sayfa açılışında renkler kaymasın); sonraki gerçek değişimlerde var.
  const changed = Boolean(previous) && (wasDark !== (mode === 'dark') || !sameVars(previous.vars, vars))
  if (changed && options.transition !== false) startThemeTransition(root)

  root.classList.toggle('dark', mode === 'dark')
  if (previous) {
    for (const key of previous.keys) {
      if (!(key in vars)) root.style.removeProperty(key)
    }
  }
  for (const [prop, value] of Object.entries(vars)) {
    root.style.setProperty(prop, value)
  }
  ROOT_STATE.set(root, { theme: pkg, inline, overrides: options.overrides, keys: Object.keys(vars), vars })

  if (preference) trackPreference(root, preference)
  if (wasDark !== (mode === 'dark')) emitModeChange(root, mode, preference ?? mode)

  return vars
}

/**
 * Aktif modu değiştirir; kökte `applyUiTheme` ile uygulanmış tema varsa o moda göre yeniden uygular.
 * `system` cihazın açık / koyu ayarını izler ve ayar değiştikçe kendiliğinden güncellenir.
 * @param {UiThemeModePreference} mode
 * @param {string|HTMLElement} [rootInput]
 * @param {{ transition?: boolean }} [options]
 */
export function setUiThemeMode(mode, rootInput, options = {}) {
  const root = resolveRoot(rootInput)
  if (!root) return
  const state = ROOT_STATE.get(root)
  if (state) {
    applyUiTheme(state.theme, {
      mode,
      root,
      inline: state.inline,
      overrides: state.overrides,
      transition: options.transition,
    })
    return
  }
  const wasDark = root.classList.contains('dark')
  const resolved = resolveUiThemeMode(mode, wasDark ? 'dark' : 'light')
  if (wasDark !== (resolved === 'dark') && options.transition !== false) startThemeTransition(root)
  root.classList.toggle('dark', resolved === 'dark')
  trackPreference(root, mode)
  if (wasDark !== (resolved === 'dark')) emitModeChange(root, resolved, mode)
}

/**
 * Kökteki inline tema değişkenlerini kaldırır (stylesheet değerlerine döner).
 * @param {string|HTMLElement} [rootInput]
 */
export function clearUiTheme(rootInput) {
  const root = resolveRoot(rootInput)
  if (!root) return
  MODE_STATE.get(root)?.unwatch?.()
  MODE_STATE.delete(root)
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
    // `system` sunucuda bilinemez: sınıf boş kalır, `buildThemeModeScript()` ilk boyamadan önce ekler.
    classAttr: options.mode === 'dark' ? 'dark' : '',
    styleAttr: Object.entries(vars)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; '),
  }
}

/**
 * `<head>` içine konacak küçük betik: ilk boyamadan önce `.dark` sınıfını ayarlar (açılışta parlama olmaz).
 * `storageKey` verilirse kullanıcının kayıtlı tercihi (`light` | `dark` | `system`) okunur; yoksa `defaultMode`.
 * @param {{ storageKey?: string, defaultMode?: UiThemeModePreference }} [options]
 * @returns {string} `<script>` etiketi olmadan betik gövdesi
 */
export function buildThemeModeScript(options = {}) {
  const key = options.storageKey ? JSON.stringify(options.storageKey) : 'null'
  const fallback = JSON.stringify(options.defaultMode ?? 'system')
  return `(function(){try{var k=${key},m=(k&&localStorage.getItem(k))||${fallback};if(m!=='light'&&m!=='dark')m=matchMedia('${SYSTEM_DARK_QUERY}').matches?'dark':'light';document.documentElement.classList.toggle('dark',m==='dark')}catch(e){}})()`
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
