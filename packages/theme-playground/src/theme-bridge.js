import { applyUiTheme, applyThemeCustomCss } from 'fewui'

export const THEME_PLAYGROUND_MESSAGE = 'fewui-theme-playground'

/**
 * @param {{ theme: import('fewui').UiThemeConfig, customCss?: string }} payload
 */
export function applyThemePlaygroundPayload(payload) {
  if (payload?.theme) {
    applyUiTheme(payload.theme)
  }
  applyThemeCustomCss(payload?.customCss || '', 'fewui-playground-custom-css')
}

/**
 * @param {HTMLIFrameElement | null | undefined} frame
 * @param {{ theme: import('fewui').UiThemeConfig, customCss?: string }} payload
 */
export function postThemeToFrame(frame, payload) {
  const target = frame?.contentWindow
  if (!target) return
  target.postMessage(
    {
      type: THEME_PLAYGROUND_MESSAGE,
      theme: payload.theme,
      customCss: payload.customCss || '',
    },
    '*',
  )
}

/**
 * @param {(payload: { theme: import('fewui').UiThemeConfig, customCss?: string }) => void} handler
 * @returns {() => void}
 */
export function listenThemeBridge(handler) {
  const onMessage = (event) => {
    if (event.data?.type !== THEME_PLAYGROUND_MESSAGE) return
    handler({
      theme: event.data.theme,
      customCss: event.data.customCss || '',
    })
  }
  window.addEventListener('message', onMessage)
  return () => window.removeEventListener('message', onMessage)
}
