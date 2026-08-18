const FONT_LINK_ID = 'fewui-google-fonts'
const FONT_CATALOG_PREVIEW_LINK_ID = 'fewui-google-fonts-catalog-preview'

let catalogPreviewApplied = false

/**
 * Google Fonts with latin-ext (Türkçe karakter desteği).
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
 * @param {string[]} families
 * @returns {string | null}
 */
export function buildGoogleFontsStylesheetUrl(families) {
  const unique = [...new Set(
    (families || [])
      .map((name) => String(name || '').trim())
      .filter(Boolean),
  )]
  if (!unique.length) return null

  const query = unique
    .map((name) => `family=${encodeURIComponent(name).replace(/%20/g, '+')}:wght@400;500;600`)
    .join('&')

  return `https://fonts.googleapis.com/css2?${query}&display=swap`
}

/**
 * @param {import('./apply-theme.js').UiThemeConfig} [theme]
 * @returns {string}
 */
export function buildGoogleFontsLinkTag(theme = {}) {
  const { body, heading } = resolveThemeFontFamilies(theme)
  const href = buildGoogleFontsStylesheetUrl([body, heading])
  if (!href) return ''
  return `<link rel="stylesheet" href="${href}">`
}

/**
 * @param {import('./apply-theme.js').UiThemeConfig} [theme]
 * @param {{ id?: string }} [options]
 * @returns {string | null}
 */
export function applyGoogleFontsForTheme(theme = {}, options = {}) {
  if (typeof document === 'undefined') return null

  const { body, heading } = resolveThemeFontFamilies(theme)
  const href = buildGoogleFontsStylesheetUrl([body, heading])
  if (!href) return null

  const id = options.id || FONT_LINK_ID
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('link')
    el.id = id
    el.rel = 'stylesheet'
    document.head.appendChild(el)
  }

  if (el.getAttribute('href') !== href) {
    el.setAttribute('href', href)
  }

  return href
}

/**
 * Font seçici önizlemesi — katalog tek istekte yüklenir (açılışta bir kez).
 * @param {{ force?: boolean, id?: string }} [options]
 * @returns {string | null}
 */
export function applyGoogleFontsCatalogPreview(options = {}) {
  if (typeof document === 'undefined') return null
  if (catalogPreviewApplied && !options.force) {
    return document.getElementById(options.id || FONT_CATALOG_PREVIEW_LINK_ID)?.getAttribute('href') || null
  }

  const href = buildGoogleFontsStylesheetUrl(GOOGLE_FONTS_CATALOG.map((row) => row.value))
  if (!href) return null

  const id = options.id || FONT_CATALOG_PREVIEW_LINK_ID
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('link')
    el.id = id
    el.rel = 'stylesheet'
    document.head.appendChild(el)
  }

  if (el.getAttribute('href') !== href) {
    el.setAttribute('href', href)
  }

  catalogPreviewApplied = true
  return href
}
