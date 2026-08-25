const FONT_LINK_ID = 'fewui-local-fonts'
const FONT_CATALOG_PREVIEW_LINK_ID = 'fewui-local-fonts-catalog-preview'

let catalogPreviewApplied = false

/**
 * Self-hosted font catalog (latin + latin-ext). Files live in `themes/fonts.css`.
 * @type {ReadonlyArray<{ value: string, label: string }>}
 */
export const GOOGLE_FONTS_CATALOG = Object.freeze([
  { value: 'Inter', label: 'Inter' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Lato', label: 'Lato' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Nunito', label: 'Nunito' },
  { value: 'Raleway', label: 'Raleway' },
  { value: 'Work Sans', label: 'Work Sans' },
  { value: 'Source Sans 3', label: 'Source Sans 3' },
  { value: 'DM Sans', label: 'DM Sans' },
  { value: 'Outfit', label: 'Outfit' },
  { value: 'Manrope', label: 'Manrope' },
  { value: 'Plus Jakarta Sans', label: 'Plus Jakarta Sans' },
  { value: 'Merriweather', label: 'Merriweather' },
  { value: 'Playfair Display', label: 'Playfair Display' },
  { value: 'Libre Baskerville', label: 'Libre Baskerville' },
])

/**
 * @param {string} name
 * @returns {string}
 */
export function formatGoogleFontFamilyName(name) {
  const trimmed = String(name || '').trim()
  if (!trimmed) return ''
  const needsQuotes = /\s/.test(trimmed) && !/^["'].*["']$/.test(trimmed)
  const family = needsQuotes ? `"${trimmed.replace(/"/g, '')}"` : trimmed
  return `${family}, sans-serif`
}

/**
 * @returns {Array<{ value: string, label: string, fontFamily: string }>}
 */
export function googleFontSelectOptions() {
  return GOOGLE_FONTS_CATALOG.map((row) => ({
    ...row,
    fontFamily: formatGoogleFontFamilyName(row.value),
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
