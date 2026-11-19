import { colorToHex, colorToRgb } from 'fewui'

/**
 * Tailwind v4 ana renkler — playground primary seçimi (`500` tonu).
 * @type {Record<string, string>}
 */
export const PRIMARY_PALETTE = {
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  lime: '#84cc16',
  green: '#22c55e',
  emerald: '#10b981',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  pink: '#ec4899',
  rose: '#f43f5e',
}

/**
 * Tema token'ları OKLCH tutulur; palet örnekleri hex'tir. Karşılaştırma sRGB üzerinden yapılır.
 * @param {string} color hex veya `oklch(...)`
 * @returns {[number, number, number]|null}
 */
function parseHex(color) {
  const rgb = colorToRgb(String(color || '').trim())
  return rgb ? rgb.map(Math.round) : null
}

/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function hexDistance(a, b) {
  const pa = parseHex(a)
  const pb = parseHex(b)
  if (!pa || !pb) return Number.POSITIVE_INFINITY
  const dr = pa[0] - pb[0]
  const dg = pa[1] - pb[1]
  const db = pa[2] - pb[2]
  return dr * dr + dg * dg + db * db
}

/**
 * @param {unknown} value
 * @returns {string|null} Palet id veya `null` (özel renk)
 */
export function matchPrimaryPalette(value) {
  const hex = colorToHex(String(value || '').trim())
  if (!hex) return null
  const exact = Object.entries(PRIMARY_PALETTE).find(
    ([, swatch]) => swatch.toLowerCase() === hex.toLowerCase(),
  )
  if (exact) return exact[0]
  let best = null
  let bestDist = 40 * 40 * 3
  for (const [id, swatch] of Object.entries(PRIMARY_PALETTE)) {
    const dist = hexDistance(hex, swatch)
    if (dist < bestDist) {
      bestDist = dist
      best = id
    }
  }
  return bestDist <= 36 * 36 * 3 ? best : null
}
