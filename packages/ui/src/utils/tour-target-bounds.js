/**
 * Tour vurgusu — form-row etiket/açıklama + kontrol alanını birlikte ölçer.
 */

/**
 * @param {DOMRect[]} rects
 * @returns {DOMRect | null}
 */
function unionDOMRects(rects) {
  const valid = rects.filter((rect) => rect && (rect.width > 0 || rect.height > 0))
  if (!valid.length) return null

  const top = Math.min(...valid.map((rect) => rect.top))
  const left = Math.min(...valid.map((rect) => rect.left))
  const right = Math.max(...valid.map((rect) => rect.right))
  const bottom = Math.max(...valid.map((rect) => rect.bottom))

  return {
    top,
    left,
    right,
    bottom,
    width: right - left,
    height: bottom - top,
    x: left,
    y: top,
    toJSON: () => ({}),
  }
}

/**
 * @param {Element | null | undefined} el
 * @returns {HTMLElement | null}
 */
export function normalizeTourTarget(el) {
  if (!el || !(el instanceof HTMLElement)) return null
  if (el.classList.contains('ui-form-row')) return el
  const row = el.closest('.ui-form-row')
  return row instanceof HTMLElement ? row : el
}

/**
 * @param {Element | null | undefined} el
 * @returns {DOMRect | null}
 */
export function measureTourHighlightRect(el) {
  const target = normalizeTourTarget(el)
  if (!target) return null

  if (target.classList.contains('ui-form-row')) {
    const parts = [
      target.querySelector('.ui-form-row-text'),
      target.querySelector('.ui-form-row-control'),
    ].filter((node) => node instanceof HTMLElement)

    const union = unionDOMRects(parts.map((node) => node.getBoundingClientRect()))
    if (union) return union
  }

  return target.getBoundingClientRect()
}

/**
 * @param {HTMLElement} target
 * @returns {HTMLElement[]}
 */
export function tourHighlightObserveNodes(target) {
  if (!target?.classList?.contains('ui-form-row')) {
    return [target]
  }

  const nodes = [target]
  for (const part of target.querySelectorAll('.ui-form-row-text, .ui-form-row-control')) {
    if (part instanceof HTMLElement) nodes.push(part)
  }
  return nodes
}
