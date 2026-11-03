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
 * `oklch(L C H)` → { l, c, h } (L 0–1). Ayrıştırılamazsa null.
 * @param {string} color
 */
export function parseOklch(color) {
  const m = String(color || '').trim().match(/^oklch\(\s*([0-9.]+%?)\s+([0-9.]+)\s+([0-9.]+)(?:deg)?\s*(?:\/[^)]*)?\)$/i)
  if (!m) return null
  const l = m[1].endsWith('%') ? Number.parseFloat(m[1]) / 100 : Number.parseFloat(m[1])
  const c = Number.parseFloat(m[2])
  const h = Number.parseFloat(m[3])
  if (![l, c, h].every(Number.isFinite)) return null
  return { l: l > 1 ? l / 100 : l, c, h }
}

/** OKLCH → sRGB 0–255 (gamut dışı kanal kırpılır). */
export function oklchToRgb(l, c, h) {
  const rad = (h * Math.PI) / 180
  const a = c * Math.cos(rad)
  const b = c * Math.sin(rad)
  const l_ = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m_ = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s_ = (l - 0.0894841775 * a - 1.291485548 * b) ** 3
  const lin = [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ]
  return lin.map((v) => {
    const x = Math.min(1, Math.max(0, v))
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055)
  })
}

/** Hex veya `oklch(...)` → [r, g, b]; desteklenmeyen biçimde null. */
export function colorToRgb(color) {
  const hex = parseHex(color)
  if (hex) return hex
  const o = parseOklch(color)
  return o ? oklchToRgb(o.l, o.c, o.h) : null
}

/** WCAG kontrast oranı (iki [r,g,b]). */
export function contrastRatio(a, b) {
  const la = relativeLuminance(...a)
  const lb = relativeLuminance(...b)
  const [hi, lo] = la > lb ? [la, lb] : [lb, la]
  return (hi + 0.05) / (lo + 0.05)
}

/**
 * Dolgunun üstündeki etiket en az `min` kontrast alana kadar dolguyu koyulaştırır; ton ve doygunluk
 * korunur (oklch'de yalnız L azalır, hex'te kanallar oranla küçülür).
 * @param {string} color
 * @param {string} [label='#ffffff']
 * @param {number} [min=4.5]
 * @returns {string}
 */
export function ensureLabelContrast(color, label = '#ffffff', min = 4.5) {
  const labelRgb = colorToRgb(label)
  if (!labelRgb) return color
  const o = parseOklch(color)
  if (o) {
    let { l } = o
    for (let i = 0; i < 60 && contrastRatio(oklchToRgb(l, o.c, o.h), labelRgb) < min && l > 0.05; i += 1) {
      l -= 0.01
    }
    return l === o.l ? color : `oklch(${l.toFixed(3)} ${o.c} ${o.h})`
  }
  const rgb = parseHex(color)
  if (!rgb) return color
  let [r, g, b] = rgb
  for (let i = 0; i < 40 && contrastRatio([r, g, b], labelRgb) < min; i += 1) {
    r *= 0.95
    g *= 0.95
    b *= 0.95
  }
  return rgbToHex(r, g, b)
}

/**
 * Dolgu rengi üzerinde okunacak metin rengi.
 * @param {string} color
 * @param {string} [light='#ffffff']
 * @param {string} [dark='#0a0a0b']
 * @returns {string}
 */
export function pickContrastForeground(color, light = '#ffffff', dark = '#0a0a0b') {
  // Gerçek kontrast: eski sabit eşik (luminance > 0.4) 0.3 civarında beyazla 3:1 bırakıyordu.
  const rgb = colorToRgb(color)
  const lightRgb = colorToRgb(light)
  const darkRgb = colorToRgb(dark)
  if (rgb && lightRgb && darkRgb) {
    return contrastRatio(rgb, lightRgb) >= contrastRatio(rgb, darkRgb) ? light : dark
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
  if (mode === 'dark' && parseOklch(color)) return ensureLabelContrast(color, '#ffffff', 4.5)
  const rgb = parseHex(color)
  if (!rgb) return color

  let [r, g, b] = rgb
  let luminance = relativeLuminance(r, g, b)

  if (mode === 'dark') {
    // Dark UI kuralı: dolgu üstü etiket beyaz → dolgu beyazla ≥4.5:1 olacak kadar koyu (eski üst sınır 0.38 → 2.4:1).
    if (luminance < 0.12) {
      const target = 0.28
      const t = Math.min(1, (target - luminance) / Math.max(0.01, target))
      r += (255 - r) * t * 0.55
      g += (255 - g) * t * 0.55
      b += (255 - b) * t * 0.55
      luminance = relativeLuminance(r, g, b)
    }
    return ensureLabelContrast(rgbToHex(r, g, b), '#ffffff', 4.5)
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
