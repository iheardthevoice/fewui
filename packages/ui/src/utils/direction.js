/**
 * Yazı yönü (LTR / RTL) yardımcıları.
 *
 * Yön CSS’ten okunur (`direction`), `dir` niteliğinden değil: `dir` bir üst öğede, `:dir()` ile ya da
 * doğrudan CSS ile verilmiş olabilir; hesaplanan değer hepsini kapsar.
 * SSR’da ve öğe yokken LTR kabul edilir.
 */

/** Öğenin (yoksa belgenin) hesaplanan yönü RTL mi. */
export function isRtl(el) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return false
  const node = el && el.nodeType === 1 ? el : document.documentElement
  if (!node) return false
  return window.getComputedStyle(node).direction === 'rtl'
}

/**
 * Yatay ok tuşunu görsel sıraya çevirir: RTL’de `ArrowLeft` “sonraki”, `ArrowRight` “önceki” öğedir.
 * Dönen değer LTR’deki karşılığıdır; mevcut `ArrowRight = +1` mantığı değişmeden çalışır.
 * Diğer tuşlar olduğu gibi döner.
 */
export function logicalArrowKey(key, el) {
  if (key !== 'ArrowLeft' && key !== 'ArrowRight') return key
  if (!isRtl(el)) return key
  return key === 'ArrowLeft' ? 'ArrowRight' : 'ArrowLeft'
}

/**
 * `*-start` / `*-end` yerleşimini yatay eksende aynalar (RTL’de satır başı sağ kenardır).
 * Yalnız `top-*` / `bottom-*` etkilenir: `left-*` / `right-*` fizikseldir ve oradaki
 * `start` / `end` dikey ekseni anlatır.
 */
export function mirrorInlinePlacement(placement, rtl) {
  if (!rtl || typeof placement !== 'string') return placement
  const match = /^(top|bottom)-(start|end)$/.exec(placement)
  if (!match) return placement
  return `${match[1]}-${match[2] === 'start' ? 'end' : 'start'}`
}
