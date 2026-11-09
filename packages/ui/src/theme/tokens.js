/**
 * Tema token şeması (v2) — `preset.tokens.light` / `preset.tokens.dark` düz haritaları.
 *
 * Anahtarlar camelCase yazılır ve CSS değişkenine çevrilir (`surfaceForeground` → `--surface-foreground`,
 * `chart500` → `--chart-500`). `--` ile başlayan anahtarlar olduğu gibi kullanılır.
 * Yapısal anahtarlar: `base`, `surfaceStyle`, `controlStyle`, `inputStyle`, `radius`, `cardPadding`.
 */

export const BASE_SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
export const CHART_SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
/** Kategorik grafik serisi: `chartSeries1` … `chartSeries8` → `--chart-series-1` … */
export const CHART_SERIES_COUNT = 8

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
/** Kart iç boşluğu — Tailwind boşluk birimiyle, artan sırada: 16 · 20 · 24 · 32 (`p-4` / `p-5` / `p-6` / `p-8`). */
export const CARD_PADDING_SCALE = {
  compact: 'calc(var(--spacing, 0.25rem) * 4)',
  default: 'calc(var(--spacing, 0.25rem) * 5)',
  comfortable: 'calc(var(--spacing, 0.25rem) * 6)',
  spacious: 'calc(var(--spacing, 0.25rem) * 8)',
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
    'surfaceSubtle',
    'surfaceSunken',
    'borderSubtle',
  ],
  status: STATUS_TONES.flatMap((tone) => [tone, `${tone}Foreground`]),
  chart: [
    ...CHART_SCALE_STEPS.map((step) => `chart${step}`),
    'chart',
    'chartForeground',
    ...Array.from({ length: CHART_SERIES_COUNT }, (_, i) => `chartSeries${i + 1}`),
  ],
  surfaces: ['surfaceStyle', 'controlStyle', 'inputStyle', 'popoverStyle'],
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
  /**
   * Kontrol köşesi — yükseklik yarısını geçmez (`--radius` büyükse kontrol hap olur,
   * değer gerçek görünen köşeyi taşır). Kontroller `rounded-lg` yerine bunları kullanır;
   * uygulamanın Tailwind `--radius-*` eşlemesine bağlı kalmaz.
   */
  '--ui-radius-control-sm': 'min(var(--radius-md), calc(var(--ui-control-h-sm) / 2))',
  '--ui-radius-control-md': 'min(var(--radius), calc(var(--ui-control-h-md) / 2))',
  '--ui-radius-control-lg': 'min(var(--radius), calc(var(--ui-control-h-lg) / 2))',
  /**
   * Yüzey içi öğe köşesi — panel (`--radius`) içinde `--ui-surface-inset` boşlukla duran
   * satır / arama kutusu. İç köşe = dış köşe − boşluk (eş merkezli).
   */
  '--ui-surface-inset': '0.5rem',
  /**
   * Liste / menü / popover satırı hover zemini — seçili zeminden (`--primary-soft`) her zaman daha
   * hafif: hover ara durumdur. Eskiden `bg-muted` (light L 0.92) seçili tondan (L 0.95) koyu kalıyordu.
   */
  '--ui-hover': 'color-mix(in oklab, var(--foreground) 4%, var(--surface))',
  /** Alert kenarlığı — tek görünüm; kenarlık temanın tercihidir (preset `uiAlertBorderWidth: '1px'`). */
  '--ui-alert-border-width': '0px',
  /**
   * Checkbox köşesi — tema yarıçapından bağımsız küçük kare (4–6px). `rounded-sm` (`--radius − 4px`)
   * 18px kutuda 22px olup checkbox'ı daireye, yani radio'ya çeviriyordu.
   */
  '--ui-radius-checkbox': 'clamp(0.25rem, calc(var(--radius) / 4), 0.375rem)',
  '--ui-radius-inner': 'max(0.375rem, calc(var(--radius) - var(--ui-surface-inset)))',
  '--surface-bg':
    'color-mix(in oklab, var(--ui-surface-mix-from) var(--ui-surface-opacity), transparent)',
  /**
   * Yüzen katman malzemesi (popover, menü, Select listesi, takvim) — kart malzemesinden ayrı
   * (`popoverStyle`). Kart camı (%4–8) menüde okunmaz; popover yüksek opaklıkta yarı saydam +
   * bulanık: arkadaki içerik sezilir, metin okunur. Tema `popoverStyle` ile değiştirir.
   */
  '--ui-popover-opacity': '85%',
  '--ui-popover-backdrop-blur': '20px',
  '--ui-popover-mix-from': 'var(--surface)',
  '--popover-bg':
    'color-mix(in oklab, var(--ui-popover-mix-from) var(--ui-popover-opacity), transparent)',
  '--control-bg':
    'color-mix(in oklab, var(--ui-control-mix-from) var(--ui-control-opacity), transparent)',
  '--input-background':
    'color-mix(in oklab, var(--ui-input-mix-from) var(--ui-input-opacity), transparent)',
  '--border': 'var(--input-background)',
  /** Kart içi ikincil bölge (liste satırı zemini, ikon karosu, boş alan). */
  '--surface-subtle': 'color-mix(in oklab, var(--muted) 30%, transparent)',
  /** Belirgin içe gömük bölge (seçili satır, karo zemini, kod/önizleme kutusu). */
  '--surface-sunken': 'color-mix(in oklab, var(--muted) 60%, transparent)',
  /** Satır ayırıcı ve ikincil çerçeve. */
  '--border-subtle': 'color-mix(in oklab, var(--border) 60%, transparent)',
  /**
   * Klavye odak halkası — WCAG 1.4.11 / 2.4.13: komşu renge ≥3:1. Eskiden `--ring` %45 saydam
   * (light 1.45:1). Primary %20 foreground ile: light'ta koyulaşır, dark'ta açılır.
   */
  '--ui-focus-ring': 'color-mix(in oklab, var(--primary) 80%, var(--foreground))',
  /**
   * Tonlu metin ("ink") — ton rengi metin olarak (muted / ghost / outline / link düğme, rozet,
   * etiket, istatistik değişimi). Ton foreground'a karıştırılır: light'ta koyulaşır, dark'ta açılır.
   * Ham ton rengi kendi %18–24 tint zemininde 1.7–3.8:1 kalıyordu (AA 4.5:1). Oranlar web
   * temasında yüzey ve tint üzerinde ≥4.5:1 ölçülerek seçildi. İkon / dolgu ham tonu kullanır.
   */
  /**
   * Seçim zemini — seçili / aktif öğe (sidebar, menü, segment, sekme, çip, takvim, Select): soluk
   * primary zemin + primary metin (`--primary-ink`). Opak: gri iz üstünde de aynı ton.
   */
  '--primary-soft': 'color-mix(in oklab, var(--primary) 10%, var(--surface))',
  '--primary-soft-hover': 'color-mix(in oklab, var(--primary) 15%, var(--surface))',
  /** Seçili / aktif metin ve ikon rengi — saf primary (tasarım kararı). */
  '--ui-selected-fg': 'var(--primary)',
  '--primary-ink': 'color-mix(in oklab, var(--primary) 65%, var(--foreground))',
  '--warning-ink': 'color-mix(in oklab, var(--warning) 55%, var(--foreground))',
  '--success-ink': 'color-mix(in oklab, var(--success) 70%, var(--foreground))',
  '--info-ink': 'color-mix(in oklab, var(--info) 75%, var(--foreground))',
  '--danger-ink': 'color-mix(in oklab, var(--danger) 75%, var(--foreground))',
  '--ui-button-grad-top': 'var(--ui-fill-grad-top-primary)',
  '--ui-button-grad-bottom': 'var(--ui-fill-grad-bottom-primary)',
  '--ui-button-grad-light': 'var(--ui-fill-grad-light)',
  '--ui-button-grad-dark': 'var(--ui-fill-grad-dark)',
}

/**
 * Dark modda türetilmiş değerler (preset `dark` içinde açıkça verilmemişse `.dark` bloğuna yazılır).
 * Göreli renk sözdizimi desteklenmeyen tarayıcılar (Safari < 16.4) için `color-mix` yedekleri.
 */
export const DERIVED_DARK_VARS = {
  '--ui-hover': 'color-mix(in oklab, var(--foreground) 7%, var(--surface))',
  '--primary-soft': 'color-mix(in oklab, var(--primary) 26%, var(--surface))',
  '--primary-soft-hover': 'color-mix(in oklab, var(--primary) 34%, var(--surface))',
  '--ui-selected-fg': 'color-mix(in oklab, var(--primary) 55%, var(--foreground))',
  '--ui-focus-ring': 'color-mix(in oklab, var(--primary) 70%, var(--foreground))',
}

/**
 * Primary'den moda göre ideal ton — ton ve doygunluk korunur, yalnız açıklık ayarlanır; böylece hangi
 * primary seçilirse seçilsin (few, turuncu, lime, slate …) seçili metin soluk zeminde ≥4.5:1, odak
 * halkası ≥3:1 kalır. Light: seçili metin en fazla L 0.5, halka en fazla 0.55. Dark: seçili metin en
 * az L 0.8, halka en az 0.72. Soluk zemin açılmış tondan değil ham primary'den türer (`DERIVED_DARK_VARS`):
 * L 0.8'e çekilen doygun ton sRGB dışına taşıp kırpılıyor, zemin primary'den farklı bir renk gibi okunuyordu.
 * `@supports (color: oklch(from red l c h))` bloğunda üretilir.
 */
export const RELATIVE_VARS = {
  '--ui-selected-fg': 'oklch(from var(--primary) min(l, 0.5) c h)',
  '--ui-focus-ring': 'oklch(from var(--primary) min(l, 0.55) c h)',
}

export const RELATIVE_DARK_VARS = {
  '--ui-selected-fg': 'oklch(from var(--primary) max(l, 0.8) c h)',
  '--ui-focus-ring': 'oklch(from var(--primary) max(l, 0.72) c h)',
}

export const RELATIVE_COLOR_SUPPORTS = '(color: oklch(from red l c h))'

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
 *   popoverStyle?: UiThemeBgStyle,
 *   radius?: string,
 *   cardPadding?: 'compact'|'default'|'comfortable'|'spacious'|string,
 * }} UiThemeTokens
 */

/**
 * @param {Record<string, string>} vars
 * @param {'surface'|'control'|'input'|'popover'} prefix
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
    if (key === 'surfaceStyle' || key === 'controlStyle' || key === 'inputStyle' || key === 'popoverStyle') {
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
