import { inject, reactive } from 'vue'
import { BASE_UI_DEFAULTS, UI_DEFAULTS_KEY, mergeUiDefaults } from './defaults-base.js'

export { UI_DEFAULTS_KEY, BASE_UI_DEFAULTS, mergeUiDefaults }

/**
 * Uygulama geneli reaktif varsayılanlar; `setUiDefaults` ile güncellenir.
 * @param {import('vue').App} app
 * @param {Partial<import('./defaults-base.js').UiThemeDefaults>} defaults
 * @returns {import('./defaults-base.js').UiThemeDefaults}
 */
export function provideUiDefaults(app, defaults) {
  const state = reactive(mergeUiDefaults(defaults))
  app.provide(UI_DEFAULTS_KEY, state)
  return state
}

/**
 * Reaktif varsayılan nesnesini yerinde günceller (tema değişimi).
 * @param {import('./defaults-base.js').UiThemeDefaults} state `provideUiDefaults` dönüşü
 * @param {Partial<import('./defaults-base.js').UiThemeDefaults>} defaults
 */
export function setUiDefaults(state, defaults) {
  Object.assign(state, mergeUiDefaults(defaults))
}

/**
 * Composition API — en yakın `ui-theme-provider` veya uygulama varsayılanları.
 * @returns {import('./defaults-base.js').UiThemeDefaults}
 */
export function useUiDefaults() {
  return inject(UI_DEFAULTS_KEY, BASE_UI_DEFAULTS)
}

/** Options API — bileşende `this.uiDefaults` sağlar. */
export const uiDefaultsMixin = {
  inject: {
    uiDefaults: {
      from: UI_DEFAULTS_KEY,
      default: () => BASE_UI_DEFAULTS,
    },
  },
}
