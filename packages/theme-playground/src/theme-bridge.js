import { applyThemeCustomCss, applyUiTheme, defineTheme } from 'fewui'

export const THEME_PLAYGROUND_MESSAGE = 'fewui-theme-playground'

/**
 * @typedef {object} ThemePlaygroundPayload
 * @property {import('./export-theme-bundle.js').ThemeExport} theme
 * @property {'light'|'dark'} [mode]
 * @property {string} [customCss]
 */

/**
 * Tema paketini belgeye tam token setiyle uygular (iframe önizleme).
 * @param {ThemePlaygroundPayload} payload
 */
export function applyThemePlaygroundPayload(payload) {
  if (payload?.theme) {
    applyUiTheme(defineTheme(payload.theme), { mode: payload.mode || 'light', inline: true })
  }
  applyThemeCustomCss(payload?.customCss || '', 'fewui-playground-custom-css')
}

/**
 * @param {HTMLIFrameElement | null | undefined} frame
 * @param {ThemePlaygroundPayload} payload
 */
export function postThemeToFrame(frame, payload) {
  const target = frame?.contentWindow
  if (!target) return
  target.postMessage(
    {
      type: THEME_PLAYGROUND_MESSAGE,
      payload: JSON.parse(JSON.stringify(payload)),
    },
    '*',
  )
}

/**
 * @param {(payload: ThemePlaygroundPayload) => void} handler
 * @returns {() => void}
 */
export function listenThemeBridge(handler) {
  const onMessage = (event) => {
    if (event.data?.type !== THEME_PLAYGROUND_MESSAGE || !event.data.payload) return
    handler(event.data.payload)
  }
  window.addEventListener('message', onMessage)
  return () => window.removeEventListener('message', onMessage)
}
