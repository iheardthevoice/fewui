/** @type {import('../../apply-theme.js').UiThemeConfig} */
export const fewuiPreset = {
  mode: 'dark',
  fontFamily: 'Inter',
  headingFontFamily: 'Inter',
  bodyFontFamily: 'Inter',
  primaryColor: '#6366f1',
  primaryForeground: '#ffffff',
  background: '#09090b',
  foreground: '#fafafa',
  surface: '#18181b',
  surfaceForeground: '#fafafa',
  control: '#27272a',
  controlForeground: '#fafafa',
  surfaceStyle: {
    mixFrom: 'foreground',
    opacity: 4,
    backdropBlur: 'sm',
  },
  controlStyle: {
    mixFrom: 'foreground',
    opacity: 6,
    backdropBlur: 'sm',
  },
  inputStyle: {
    mixFrom: 'foreground',
    opacity: 6,
    backdropBlur: 'sm',
  },
  colors: {
    'brand-accent': '#a5b4fc',
  },
}
