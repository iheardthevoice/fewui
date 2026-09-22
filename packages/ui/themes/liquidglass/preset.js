/** @type {import('../../apply-theme.js').UiThemeConfig} */
export const liquidglassPreset = {
  mode: 'light',
  fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  headingFontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  bodyFontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  primaryColor: '#1B5CFF',
  primaryForeground: '#ffffff',
  /**
   * Kart / dialog / form — opak grouped yüzey (iPhone + iPad).
   * Cam yalnızca chrome / popover / kontrol (`--ui-ios-glass-*`) üzerinde kalır.
   */
  surfaceStyle: {
    mixFrom: 'surface',
    opacity: 100,
    backdropBlur: '0px',
  },
  controlStyle: {
    mixFrom: 'control',
    opacity: 100,
    backdropBlur: '0px',
  },
  inputStyle: {
    mixFrom: 'control',
    opacity: 100,
    backdropBlur: '0px',
  },
}
