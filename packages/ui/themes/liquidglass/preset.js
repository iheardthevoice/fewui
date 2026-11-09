/** @type {import('../../src/theme/define-theme.js').UiThemePreset} */
export const liquidglassPreset = {
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  tokens: {
    light: {
      /**
       * Grouped canvas — iOS `systemGroupedBackground` (#F2F2F7) parlaklığı. `base-50` beyaz kartla
       * neredeyse aynı tondaydı (kart seçilmiyordu); dark'taki siyah zemin / gri kart basamağının karşılığı.
       */
      background: 'color-mix(in oklab, var(--base-100) 80%, var(--base-200))',
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
