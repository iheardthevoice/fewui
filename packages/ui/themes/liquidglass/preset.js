/** @type {import('../../src/theme/define-theme.js').UiThemePreset} */
export const liquidglassPreset = {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  tokens: {
    light: {
      surfaceStyle: {
        opacity: '100%',
        backdropBlur: '0px',
        mixFrom: 'var(--surface)',
      },
      controlStyle: {
        opacity: '100%',
        backdropBlur: '0px',
        mixFrom: 'var(--control)',
      },
      inputStyle: {
        opacity: '100%',
        backdropBlur: '0px',
        mixFrom: 'var(--control)',
      },
    },
    dark: {},
  },
}
