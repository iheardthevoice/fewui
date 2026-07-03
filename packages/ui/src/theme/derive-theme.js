/**
 * @param {string} hex
 * @returns {[number, number, number]|null}
 */
function parseHex(hex) {
  const normalized = String(hex || '').trim().replace('#', '')
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
 * @param {number} value
 * @returns {string}
 */
function toHexByte(value) {
  return Math.min(255, Math.max(0, Math.round(value))).toString(16).padStart(2, '0')
}

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
function rgbToHex(r, g, b) {
  return `#${toHexByte(r)}${toHexByte(g)}${toHexByte(b)}`
}

/**
 * Primary renkten accent ve brand-accent türetir.
 * @param {string} primaryColor
 * @returns {{ accent: string, brandAccent: string }}
 */
export function deriveBrandColorsFromPrimary(primaryColor) {
  const rgb = parseHex(primaryColor)
  if (!rgb) {
    return { accent: primaryColor, brandAccent: primaryColor }
  }
  const [r, g, b] = rgb
  const accent = rgbToHex(
    r + (255 - r) * 0.12,
    g + (255 - g) * 0.12,
    b + (255 - b) * 0.12,
  )
  const brandAccent = rgbToHex(
    r + (255 - r) * 0.28,
    g + (255 - g) * 0.32,
    b + (255 - b) * 0.08,
  )
  return { accent, brandAccent }
}

/**
 * Primary değişince accent renklerini tema nesnesine uygular (explicit değerleri korur).
 * @param {import('./apply-theme.js').UiThemeConfig} theme
 * @param {{ force?: boolean }} [options]
 * @returns {import('./apply-theme.js').UiThemeConfig}
 */
export function withDerivedBrandColors(theme, options = {}) {
  if (!theme || typeof theme !== 'object') return theme
  const primary = theme.primaryColor || theme.primary
  if (!primary) return theme

  const derived = deriveBrandColorsFromPrimary(String(primary))
  const next = { ...theme, colors: { ...(theme.colors || {}) } }

  if (options.force || !theme.accent) {
    next.accent = derived.accent
  }
  if (options.force || !next.colors['brand-accent']) {
    next.colors['brand-accent'] = derived.brandAccent
  }

  return next
}

/**
 * Üst düzey veya theme içinden primaryColor çözümü.
 * @param {Record<string, unknown>} raw
 * @param {string} [fallback]
 * @returns {string}
 */
export function resolvePrimaryColor(raw, fallback = '#f97316') {
  if (!raw || typeof raw !== 'object') return fallback
  const top = typeof raw.primaryColor === 'string' ? raw.primaryColor.trim() : ''
  if (top) return top
  const theme = raw.theme && typeof raw.theme === 'object' ? raw.theme : null
  if (theme) {
    const fromTheme = typeof theme.primaryColor === 'string'
      ? theme.primaryColor.trim()
      : typeof theme.primary === 'string'
        ? theme.primary.trim()
        : ''
    if (fromTheme) return fromTheme
  }
  return fallback
}
