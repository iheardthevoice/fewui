/**
 * Overlay hareket token’ları — tema CSS değişkeninden süre / eğri okur.
 * Tema vermezse bileşenin kendi varsayılanı kullanılır (`fallback`).
 *
 * Örnek: `--ui-popover-enter-duration: 420ms;` `--ui-dialog-sheet-easing: linear(…);`
 */

function readCssVar(name, el) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return ''
  const target = el instanceof Element ? el : document.documentElement
  return getComputedStyle(target).getPropertyValue(name).trim()
}

/** `420ms` / `0.42s` / `420` → milisaniye. */
export function readMotionDuration(name, fallback, el) {
  const raw = readCssVar(name, el)
  if (!raw) return fallback
  const n = Number.parseFloat(raw)
  if (!Number.isFinite(n) || n < 0) return fallback
  return /\ds$/.test(raw) ? Math.round(n * 1000) : Math.round(n)
}

/** `cubic-bezier(…)` / `linear(…)` / anahtar kelime. */
export function readMotionEasing(name, fallback, el) {
  return readCssVar(name, el) || fallback
}
