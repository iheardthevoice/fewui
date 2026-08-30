import { resolveControlSize } from '../utils/control-size.js'
import { useUiDefaultsOptions } from './ui-defaults.js'

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

/**
 * Prop verilmediyse tema `defaults.js` değerini döndürür.
 * @template {string} T
 * @param {T|undefined|null} propValue
 * @param {keyof import('./defaults-base.js').UiThemeDefaults} defaultsKey
 * @param {T} fallback
 * @returns {T}
 */
export function resolveThemeDefault(propValue, defaultsKey, fallback) {
  if (propValue != null && propValue !== '') {
    return propValue
  }
  const fromTheme = useUiDefaultsOptions()[defaultsKey]
  if (fromTheme != null && fromTheme !== '') {
    return /** @type {T} */ (fromTheme)
  }
  return fallback
}

/**
 * @param {'sm'|'md'|'lg'|undefined|null} propSize
 * @param {{ key?: keyof import('./defaults-base.js').UiThemeDefaults, defaultSize?: 'sm'|'md'|'lg' }} [options]
 * @returns {'sm'|'md'|'lg'}
 */
export function resolveThemeControlSize(propSize, { key = 'controlSize', defaultSize = 'md' } = {}) {
  if (propSize != null && propSize !== '') {
    return resolveControlSize(propSize, { defaultSize })
  }
  const defaults = useUiDefaultsOptions()
  const raw =
    defaults[key] ??
    defaults.controlSize ??
    defaults.buttonSize ??
    defaults.inputSize ??
    defaultSize
  return resolveControlSize(raw, { defaultSize })
}

/**
 * @param {string|undefined|null} propType
 * @returns {string}
 */
export function resolveThemeIconType(propType) {
  const raw = resolveThemeDefault(propType, 'iconType', 'light')
  return ICON_TYPES.includes(raw) ? raw : 'light'
}

/**
 * @param {string|undefined|null} propMaxWidth
 * @returns {string}
 */
export function resolveThemeDialogMaxWidth(propMaxWidth) {
  return resolveThemeDefault(propMaxWidth, 'dialogMaxWidth', 'lg')
}

/**
 * @param {string|undefined|null} propFormat
 * @param {'dateFormat'|'dateRangeFormat'} [key]
 * @returns {string|undefined}
 */
export function resolveThemeDateFormat(propFormat, key = 'dateFormat') {
  const value = resolveThemeDefault(propFormat, key, '')
  return value || undefined
}

/**
 * @param {string|undefined|null} propFormat
 * @returns {string}
 */
export function resolveThemeTimeFormat(propFormat) {
  return resolveThemeDefault(propFormat, 'timeFormat', 'HH:mm')
}
