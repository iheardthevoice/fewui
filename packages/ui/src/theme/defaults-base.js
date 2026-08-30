/**
 * fewui bileşen varsayılanları — tema paketi `defaults.js` ile birleştirilir.
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
 * @property {'default'|'comfortable'|'spacious'|'compact'} [cardPadding]
 * @property {string} [radius]
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
  cardPadding: 'default',
  radius: '26px',
}

/**
 * @param {Partial<UiThemeDefaults>|undefined|null} themeDefaults
 * @returns {UiThemeDefaults}
 */
export function mergeUiDefaults(themeDefaults) {
  if (!themeDefaults || typeof themeDefaults !== 'object') {
    return { ...BASE_UI_DEFAULTS }
  }
  return {
    ...BASE_UI_DEFAULTS,
    ...themeDefaults,
  }
}

export const UI_DEFAULTS_KEY = Symbol('uiDefaults')
