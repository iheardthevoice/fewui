/**
 * Hex renk yardımcıları — `hex` prop'u alan bileşenler (Badge, IconTile) ortak kullanır.
 */

/**
 * `#RGB` / `#RRGGBB` (diyez isteğe bağlı) → `#RRGGBB`; geçersizse ''.
 * @param {string} raw
 * @returns {string}
 */
export function normalizeHexColor(raw) {
  const value = String(raw || '').trim()
  if (!value) return ''
  let hex = value.startsWith('#') ? value : `#${value}`
  if (/^#[0-9A-Fa-f]{3}$/.test(hex)) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  }
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return ''
  return hex.toUpperCase()
}

/**
 * Hex zemin üzerinde okunur metin rengi (açık zeminde koyu, koyu zeminde beyaz).
 * @param {string} hex `normalizeHexColor` çıktısı
 * @returns {string}
 */
export function contrastTextForHex(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.58 ? '#0a0a0a' : '#ffffff'
}
