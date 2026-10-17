/**
 * fewui bileşen prop varsayılanları — tema paketi `defaults.js` ile birleştirilir.
 * Görsel ölçüler (`radius`, `cardPadding`) token'dır, burada yer almaz.
 * @typedef {object} UiThemeDefaults
 * @property {'solid'|'regular'|'brands'|'light'|'duotone'|'thin'} [iconType]
 * @property {'lg'|'full'} [buttonRounded]
 * @property {'sm'|'md'|'lg'} [controlSize]
 * @property {'sm'|'md'|'lg'} [buttonSize]
 * @property {'sm'|'md'|'lg'} [inputSize]
 * @property {string} [dateFormat]
 * @property {string} [dateRangeFormat]
 * @property {string} [timeFormat]
 * @property {string} [dialogMaxWidth]
 */

/** @type {UiThemeDefaults} */
export const BASE_UI_DEFAULTS = {
  iconType: 'light',
  buttonRounded: 'lg',
  controlSize: 'md',
  buttonSize: 'md',
  inputSize: 'md',
  dateFormat: 'd MMM yyyy',
  dateRangeFormat: 'd MMM yyyy',
  timeFormat: 'HH:mm',
  dialogMaxWidth: 'sm',
}

/**
 * @param {Partial<UiThemeDefaults>|undefined|null} themeDefaults
 * @returns {UiThemeDefaults}
 */
export function mergeUiDefaults(themeDefaults) {
  if (!themeDefaults || typeof themeDefaults !== 'object') {
    return { ...BASE_UI_DEFAULTS }
  }
  /** @type {UiThemeDefaults} */
  const merged = { ...BASE_UI_DEFAULTS }
  for (const key of Object.keys(BASE_UI_DEFAULTS)) {
    const value = themeDefaults[key]
    if (value != null && value !== '') merged[key] = value
  }
  return merged
}

export const UI_DEFAULTS_KEY = Symbol('uiDefaults')
