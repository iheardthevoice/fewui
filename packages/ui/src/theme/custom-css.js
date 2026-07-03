const DEFAULT_STYLE_ID = 'fewui-theme-custom-css'

/**
 * @param {string} id
 * @param {string|null|undefined} css
 */
export function applyThemeCustomCss(css, id = DEFAULT_STYLE_ID) {
  if (typeof document === 'undefined') return
  const text = String(css || '').trim()
  let el = document.getElementById(id)
  if (!text) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('style')
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = text
}

/**
 * @param {string} [id]
 */
export function clearThemeCustomCss(id = DEFAULT_STYLE_ID) {
  applyThemeCustomCss('', id)
}

export { DEFAULT_STYLE_ID as THEME_CUSTOM_CSS_ID }
