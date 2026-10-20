/**
 * Görünür viewport — klavyenin kapladığı alan hariç.
 *
 * Capacitor `Keyboard.setResizeMode({ mode: 'none' })` ile WebView küçülmez;
 * `window.innerHeight` klavye açıkken de tam ekranı verir. Kabuk klavye
 * yüksekliğini `--ui-keyboard-inset` ile köke yazar ve
 * `UI_KEYBOARD_INSET_EVENT` yayınlar. Mobil Safari’de (web) `visualViewport`
 * klavyeyle küçülür; ikisinden dar olanı alınır.
 */

export const UI_KEYBOARD_INSET_EVENT = 'ui-keyboard-inset-change'

/** @returns {number} px */
export function readKeyboardInset() {
  if (typeof document === 'undefined') return 0
  const root = document.documentElement
  const raw =
    root.style.getPropertyValue('--ui-keyboard-inset') ||
    getComputedStyle(root).getPropertyValue('--ui-keyboard-inset')
  const n = parseFloat(raw)
  return Number.isFinite(n) && n > 0 ? n : 0
}

/** Görünür alanın alt kenarı (viewport koordinatı, px). */
export function visibleViewportBottom() {
  if (typeof window === 'undefined') return 0
  let bottom = window.innerHeight - readKeyboardInset()
  const vv = window.visualViewport
  if (vv && vv.height > 0) {
    bottom = Math.min(bottom, vv.offsetTop + vv.height)
  }
  return Math.max(0, bottom)
}

/**
 * Klavye / görsel viewport değişimini dinler.
 * @param {() => void} callback
 * @returns {() => void} dinlemeyi bırakır
 */
export function onVisibleViewportChange(callback) {
  if (typeof window === 'undefined') return () => {}
  const vv = window.visualViewport
  window.addEventListener(UI_KEYBOARD_INSET_EVENT, callback)
  vv?.addEventListener('resize', callback)
  vv?.addEventListener('scroll', callback)
  return () => {
    window.removeEventListener(UI_KEYBOARD_INSET_EVENT, callback)
    vv?.removeEventListener('resize', callback)
    vv?.removeEventListener('scroll', callback)
  }
}
