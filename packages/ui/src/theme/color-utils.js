/**
 * Renk yardımcıları — kontrast ve türetme için tek kaynak.
 */

/**
 * @param {string} hex
 * @returns {[number, number, number]|null}
 */
export function parseHex(hex) {
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
 * Tailwind v4 palette values are often `oklch(...)`. Returns lightness in 0–1, or null.
 * @param {string} color
 * @returns {number|null}
 */
export function parseOklchLightness(color) {
  const match = String(color || '')
    .trim()
    .match(/^oklch\(\s*([0-9.]+%?)/i)
  if (!match) return null
  const raw = match[1]
  if (raw.endsWith('%')) {
    const pct = Number.parseFloat(raw)
    return Number.isFinite(pct) ? pct / 100 : null
  }
  const value = Number.parseFloat(raw)
  if (!Number.isFinite(value)) return null
  return value > 1 ? value / 100 : value
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
export function rgbToHex(r, g, b) {
  return `#${toHexByte(r)}${toHexByte(g)}${toHexByte(b)}`
}

/**
 * WCAG göreli parlaklık (sRGB 0–255 kanallar).
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {number}
 */
export function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((channel) => {
    const normalized = channel / 255
    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Dolgu rengi üzerinde okunacak metin rengi.
 * @param {string} color
 * @param {string} [light='#ffffff']
 * @param {string} [dark='#0a0a0b']
 * @returns {string}
 */
export function pickContrastForeground(color, light = '#ffffff', dark = '#0a0a0b') {
  const rgb = parseHex(color)
  if (rgb) {
    return relativeLuminance(...rgb) > 0.4 ? dark : light
  }
  const lightness = parseOklchLightness(color)
  if (lightness != null) {
    // OKLCH L is perceptual, not WCAG luminance — mid brand steps still need light labels.
    return lightness > 0.72 ? dark : light
  }
  return light
}

/**
 * Hex ana rengi moda göre okunur aralıkta tutar (dark: beyaz etiket, light: çok açık değil).
 * Hex olmayan değerler olduğu gibi döner.
 * @param {string} color
 * @param {'light'|'dark'} mode
 * @returns {string}
 */
export function ensureContrastForMode(color, mode) {
  const rgb = parseHex(color)
  if (!rgb) return color

  let [r, g, b] = rgb
  let luminance = relativeLuminance(r, g, b)

  if (mode === 'dark') {
    if (luminance < 0.12) {
      const target = 0.28
      const t = Math.min(1, (target - luminance) / Math.max(0.01, target))
      r += (255 - r) * t * 0.55
      g += (255 - g) * t * 0.55
      b += (255 - b) * t * 0.55
      luminance = relativeLuminance(r, g, b)
    }
    for (let i = 0; i < 12 && luminance > 0.38; i += 1) {
      r *= 0.82
      g *= 0.82
      b *= 0.82
      luminance = relativeLuminance(r, g, b)
    }
    return rgbToHex(r, g, b)
  }

  if (luminance > 0.82) {
    return rgbToHex(r * 0.22, g * 0.22, b * 0.22)
  }
  return color
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
