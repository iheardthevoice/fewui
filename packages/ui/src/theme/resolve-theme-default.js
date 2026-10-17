import { resolveControlSize } from '../utils/control-size.js'
import { BASE_UI_DEFAULTS } from './defaults-base.js'

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

/**
 * @typedef {import('./defaults-base.js').UiThemeDefaults} UiThemeDefaults
 */

/**
 * Prop verilmediyse tema varsayılanını döndürür.
 * @template {string} T
 * @param {UiThemeDefaults|undefined} defaults `this.uiDefaults` (uiDefaultsMixin)
 * @param {T|undefined|null} propValue
 * @param {keyof UiThemeDefaults} key
 * @returns {T}
 */
export function resolveThemeDefault(defaults, propValue, key) {
  if (propValue != null && propValue !== '') {
    return propValue
  }
  const fromTheme = defaults?.[key]
  if (fromTheme != null && fromTheme !== '') {
    return /** @type {T} */ (fromTheme)
  }
  return /** @type {T} */ (BASE_UI_DEFAULTS[key])
}

/**
 * @param {UiThemeDefaults|undefined} defaults
 * @param {'sm'|'md'|'lg'|undefined|null} propSize
 * @param {{ key?: 'controlSize'|'buttonSize'|'inputSize', defaultSize?: 'sm'|'md'|'lg' }} [options]
 * @returns {'sm'|'md'|'lg'}
 */
export function resolveThemeControlSize(defaults, propSize, { key = 'controlSize', defaultSize = 'md' } = {}) {
  if (propSize != null && propSize !== '') {
    return resolveControlSize(propSize, { defaultSize })
  }
  const raw = defaults?.[key] ?? defaults?.controlSize ?? defaultSize
  return resolveControlSize(raw, { defaultSize })
}

/**
 * @param {UiThemeDefaults|undefined} defaults
 * @param {string|undefined|null} propType
 * @returns {string}
 */
export function resolveThemeIconType(defaults, propType) {
  const raw = resolveThemeDefault(defaults, propType, 'iconType')
  return ICON_TYPES.includes(raw) ? raw : 'light'
}
