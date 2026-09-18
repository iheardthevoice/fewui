const FONT_LINK_ID = 'fewui-local-fonts'
const FONT_CATALOG_PREVIEW_LINK_ID = 'fewui-local-fonts-catalog-preview'

let catalogPreviewApplied = false

/**
 * Self-hosted font catalog (latin + latin-ext). Files live in `themes/fonts.css`.
 * Ordered for restaurant-site variety: sans → serif → display → script.
 * @type {ReadonlyArray<{ value: string, label: string, fallback?: string }>}
 */
export const GOOGLE_FONTS_CATALOG = Object.freeze([
  // Sans — readable body / modern UI
  { value: 'Inter', label: 'Inter' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Nunito', label: 'Nunito' },
  { value: 'Outfit', label: 'Outfit' },
  { value: 'Plus Jakarta Sans', label: 'Plus Jakarta Sans' },
  { value: 'Space Grotesk', label: 'Space Grotesk' },
  { value: 'Josefin Sans', label: 'Josefin Sans' },
  { value: 'Oswald', label: 'Oswald' },
  { value: 'DM Sans', label: 'DM Sans' },

  // Serif — editorial / classic hospitality
  { value: 'Merriweather', label: 'Merriweather', fallback: 'serif' },
  { value: 'Lora', label: 'Lora', fallback: 'serif' },
  { value: 'Libre Baskerville', label: 'Libre Baskerville', fallback: 'serif' },
  { value: 'Cormorant Garamond', label: 'Cormorant Garamond', fallback: 'serif' },
  { value: 'EB Garamond', label: 'EB Garamond', fallback: 'serif' },
  { value: 'Crimson Pro', label: 'Crimson Pro', fallback: 'serif' },
  { value: 'Spectral', label: 'Spectral', fallback: 'serif' },
  { value: 'Bitter', label: 'Bitter', fallback: 'serif' },

  // Display — strong headlines
  { value: 'Playfair Display', label: 'Playfair Display', fallback: 'serif' },
  { value: 'DM Serif Display', label: 'DM Serif Display', fallback: 'serif' },
  { value: 'Fraunces', label: 'Fraunces', fallback: 'serif' },
  { value: 'Bodoni Moda', label: 'Bodoni Moda', fallback: 'serif' },
  { value: 'Cinzel', label: 'Cinzel', fallback: 'serif' },
  { value: 'Abril Fatface', label: 'Abril Fatface', fallback: 'serif' },
  { value: 'Anton', label: 'Anton' },

  // Script — accent / logo-like titles
  { value: 'Pacifico', label: 'Pacifico', fallback: 'cursive' },
  { value: 'Great Vibes', label: 'Great Vibes', fallback: 'cursive' },
  { value: 'Dancing Script', label: 'Dancing Script', fallback: 'cursive' },
  { value: 'Caveat', label: 'Caveat', fallback: 'cursive' },
  { value: 'Satisfy', label: 'Satisfy', fallback: 'cursive' },
])

/**
 * @param {string} name
 * @param {string} [fallback='sans-serif']
 * @returns {string}
 */
export function formatGoogleFontFamilyName(name, fallback = 'sans-serif') {
  const trimmed = String(name || '').trim()
  if (!trimmed) return ''
  const needsQuotes = /\s/.test(trimmed) && !/^["'].*["']$/.test(trimmed)
  const family = needsQuotes ? `"${trimmed.replace(/"/g, '')}"` : trimmed
  const stack = String(fallback || 'sans-serif').trim() || 'sans-serif'
  return `${family}, ${stack}`
}

/**
 * @returns {Array<{ value: string, label: string, fontFamily: string }>}
 */
export function googleFontSelectOptions() {
  return GOOGLE_FONTS_CATALOG.map((row) => ({
    value: row.value,
    label: row.label,
    fontFamily: formatGoogleFontFamilyName(row.value, row.fallback),
  }))
}

/**
 * @param {import('./apply-theme.js').UiThemeConfig} [theme]
 */
export function resolveThemeFontFamilies(theme = {}) {
  const body = String(theme.bodyFontFamily || theme.fontFamily || '').trim()
  const heading = String(theme.headingFontFamily || body).trim()
  return { body, heading }
}

/**
 * Legacy helper — remote Google Fonts URLs are no longer used.
 * Fonts ship via `fewui/fonts.css` (self-hosted woff2).
 * @param {string[]} [_families]
 * @returns {null}
 */
export function buildGoogleFontsStylesheetUrl(_families) {
  return null
}

/**
 * SSR: fonts are bundled with app CSS (`fewui/fonts.css`); no extra link tag.
 * @param {import('./apply-theme.js').UiThemeConfig} [_theme]
 * @returns {string}
 */
export function buildGoogleFontsLinkTag(_theme = {}) {
  return ''
}

/**
 * Ensures local catalog fonts are available. No remote requests.
 * Prefer importing `fewui/fonts.css` in the app stylesheet; this is a safe no-op fallback.
 * @param {import('./apply-theme.js').UiThemeConfig} [_theme]
 * @param {{ id?: string }} [_options]
 * @returns {string | null}
 */
export function applyGoogleFontsForTheme(_theme = {}, _options = {}) {
  if (typeof document === 'undefined') return null
  // Fonts come from bundled `fewui/fonts.css`; keep API for callers (web design select, landing).
  return document.getElementById(_options.id || FONT_LINK_ID)?.getAttribute('href') || 'local'
}

/**
 * Font seçici önizlemesi — katalog `fonts.css` ile zaten yüklü (uzak istek yok).
 * @param {{ force?: boolean, id?: string }} [options]
 * @returns {string | null}
 */
export function applyGoogleFontsCatalogPreview(options = {}) {
  if (typeof document === 'undefined') return null
  if (catalogPreviewApplied && !options.force) {
    return (
      document.getElementById(options.id || FONT_CATALOG_PREVIEW_LINK_ID)?.getAttribute('href') ||
      'local'
    )
  }
  catalogPreviewApplied = true
  return 'local'
}
