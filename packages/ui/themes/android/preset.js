/** @type {import('../../apply-theme.js').UiThemeConfig} */
export const androidPreset = {
  mode: 'light',
  fontFamily: 'Roboto, ui-sans-serif, system-ui, sans-serif',
  headingFontFamily: 'Roboto, ui-sans-serif, system-ui, sans-serif',
  bodyFontFamily: 'Roboto, ui-sans-serif, system-ui, sans-serif',
  primaryColor: '#6750A4',
  primaryForeground: '#ffffff',
  secondaryColor: '#E8DEF8',
  secondaryForeground: '#1D192B',
  /**
   * Kart / dialog / form — opak M3 surface container (cam yok).
   * Chrome / elevation `platform/android.css` + `styles.css`.
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
