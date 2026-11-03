/**
 * Modal odak yönetimi (WAI-ARIA APG Dialog): Tab / Shift+Tab panel içinde döner, kapanınca odak
 * açan öğeye döner. Panelden taşınan katmanlar (popover portalı) panelin dışında olduğundan tuzak
 * yalnız odak panelin içindeyken çalışır.
 */
const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
].join(',')

export function focusableElements(container) {
  if (!container) return []
  return [...container.querySelectorAll(FOCUSABLE)].filter(
    (el) => el.getClientRects().length > 0 && !el.closest('[inert], [aria-hidden="true"]'),
  )
}

/** Tab tuşunu panel içinde döndürür; işlediyse `true`. */
export function trapTabKey(event, container) {
  if (event.key !== 'Tab' || !container) return false
  const active = document.activeElement
  if (active && !container.contains(active)) return false
  const items = focusableElements(container)
  if (items.length === 0) {
    event.preventDefault()
    container.focus?.()
    return true
  }
  const first = items[0]
  const last = items[items.length - 1]
  if (event.shiftKey && (active === first || active === container)) {
    event.preventDefault()
    last.focus()
    return true
  }
  if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
    return true
  }
  return false
}

/** Açılış anındaki odaklı öğe — kapanınca geri dönülecek hedef. */
export function captureReturnFocus() {
  const el = typeof document !== 'undefined' ? document.activeElement : null
  return el && el !== document.body ? el : null
}

export function restoreFocus(el) {
  if (!el || !el.isConnected || typeof el.focus !== 'function') return
  el.focus({ preventScroll: true })
}
