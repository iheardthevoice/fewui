/** @type {import('../../apply-theme.js').UiThemeConfig} */
export const liquidglassPreset = {
  mode: 'light',
  fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  headingFontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  bodyFontFamily: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  primaryColor: '#1B5CFF',
  primaryForeground: '#ffffff',
  surfaceStyle: {
    mixFrom: 'surface',
    opacity: 36,
    backdropBlur: '18px',
  },
  controlStyle: {
    mixFrom: 'control',
    opacity: 38,
    backdropBlur: '18px',
  },
  inputStyle: {
    mixFrom: 'control',
    opacity: 38,
    backdropBlur: '18px',
  },
}
