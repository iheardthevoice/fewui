import { getCurrentInstance, inject } from 'vue'
import { BASE_UI_DEFAULTS, UI_DEFAULTS_KEY, mergeUiDefaults } from './defaults-base.js'

export { UI_DEFAULTS_KEY, BASE_UI_DEFAULTS, mergeUiDefaults }

/**
 * @param {import('vue').App} app
 * @param {import('./defaults-base.js').UiThemeDefaults} defaults
 */
export function provideUiDefaults(app, defaults) {
  app.provide(UI_DEFAULTS_KEY, mergeUiDefaults(defaults))
}

/**
 * @param {Partial<import('./defaults-base.js').UiThemeDefaults>} [local]
 * @returns {import('./defaults-base.js').UiThemeDefaults}
 */
export function useUiDefaults(local = {}) {
  const injected = inject(UI_DEFAULTS_KEY, BASE_UI_DEFAULTS)
  return mergeUiDefaults({ ...injected, ...local })
}

/**
 * Options API — `this.uiDefaults` (setup'sız bileşenler).
 * @returns {import('./defaults-base.js').UiThemeDefaults}
 */
export function useUiDefaultsOptions() {
  const vm = getCurrentInstance()
  return vm?.appContext?.config?.globalProperties?.$uiDefaults ?? BASE_UI_DEFAULTS
}

/**
 * Tema defaults → runtime CSS değişkenleri (`applyUiTheme` ile birleştirilir).
 * @param {import('./defaults-base.js').UiThemeDefaults} defaults
 * @returns {Record<string, string>}
 */
/** @type {Record<string, string>} */
const CARD_PADDING_VALUES = {
  compact: '1rem',
  default: '1.5rem',
  comfortable: '1.25rem',
  spacious: '2rem',
}

export function uiDefaultsToCssVars(defaults) {
  const vars = {}
  if (defaults.radius) {
    const radius = String(defaults.radius)
    vars['--radius'] = radius
    vars['--radius-sm'] = `calc(${radius} - 4px)`
    vars['--radius-md'] = `calc(${radius} - 2px)`
    vars['--radius-3xl'] = radius
  }
  if (defaults.cardPadding) {
    const padding = CARD_PADDING_VALUES[defaults.cardPadding] || CARD_PADDING_VALUES.default
    vars['--ui-card-padding'] = padding
    vars['--ui-card-gap'] = padding
  }
  return vars
}
