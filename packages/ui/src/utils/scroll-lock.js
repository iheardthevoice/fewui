const LOCK_CLASS = 'ui-scroll-lock'

let lockCount = 0
let previousStyles = null

function hasStableScrollbarGutter(html) {
  const gutter = getComputedStyle(html).scrollbarGutter || ''
  return gutter.includes('stable')
}

/**
 * Modal yığını — iç içe dialog'larda kilit tek sefer uygulanır.
 * Body geometrisine (`position:fixed` / `top` / `width`) dokunulmaz:
 * fixed kilit `min-h-dvh` body yüksekliğini viewport’a çeker ve aç/kapa animasyonunu kasıtır.
 */
export function lockBodyScroll() {
  if (typeof document === 'undefined') return
  if (lockCount === 0) {
    const body = document.body
    const html = document.documentElement
    const scrollbarWidth = Math.max(0, window.innerWidth - html.clientWidth)

    previousStyles = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyOverscroll: body.style.overscrollBehavior,
      htmlPaddingRight: html.style.paddingRight,
    }

    html.classList.add(LOCK_CLASS)
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    html.style.overscrollBehavior = 'none'
    body.style.overscrollBehavior = 'none'

    if (!hasStableScrollbarGutter(html) && scrollbarWidth > 0) {
      html.style.paddingRight = `${scrollbarWidth}px`
    }
  }
  lockCount += 1
}

export function unlockBodyScroll() {
  if (typeof document === 'undefined') return
  if (lockCount <= 0) return
  lockCount -= 1
  if (lockCount > 0) return

  const body = document.body
  const html = document.documentElement
  const previous = previousStyles || {
    htmlOverflow: '',
    bodyOverflow: '',
    htmlOverscroll: '',
    bodyOverscroll: '',
    htmlPaddingRight: '',
  }

  html.classList.remove(LOCK_CLASS)
  html.style.overflow = previous.htmlOverflow
  body.style.overflow = previous.bodyOverflow
  html.style.overscrollBehavior = previous.htmlOverscroll
  body.style.overscrollBehavior = previous.bodyOverscroll
  html.style.paddingRight = previous.htmlPaddingRight

  previousStyles = null
}
