/**
 * Şablon preset — `tokens.light` tam set, `tokens.dark` yalnızca farklı değerler.
 * `color.css` bu dosyadan üretilir: `pnpm --filter fewui run build:themes`.
 * @type {import('../../src/theme/define-theme.js').UiThemePreset}
 */
export const templatePreset = {
  fonts: {
    body: 'Inter',
  },
  tokens: {
    light: {
      radius: '20px',
      background: 'oklch(0.9851 0 0)',
      foreground: 'oklch(0.2046 0 0)',
      surface: 'oklch(1 0 0)',
      surfaceForeground: 'oklch(0.2046 0 0)',
      control: 'oklch(0.9702 0 0)',
      controlForeground: 'oklch(0.2046 0 0)',
      primary: 'oklch(0.5854 0.2041 277.12)',
      primaryForeground: 'oklch(1 0 0)',
      secondary: 'oklch(0.9219 0 0)',
      secondaryForeground: 'oklch(0.2046 0 0)',
      muted: 'oklch(0.9219 0 0)',
      mutedForeground: 'oklch(0.5278 0 0)',
      accent: 'oklch(0.9702 0 0)',
      accentForeground: 'oklch(0.2046 0 0)',
      ring: 'oklch(0.5854 0.2041 277.12)',
      success: 'oklch(0.53 0.15 152)',
      successForeground: 'oklch(0.99 0.01 152)',
      warning: 'oklch(0.78 0.15 72)',
      warningForeground: 'oklch(0.26 0.055 72)',
      info: 'oklch(0.54 0.125 252)',
      infoForeground: 'oklch(0.99 0.01 252)',
      danger: 'oklch(0.55 0.22 27)',
      dangerForeground: 'oklch(0.985 0.01 27)',
      surfaceStyle: { mixFrom: 'surface', opacity: 100, backdropBlur: 'none' },
      controlStyle: { mixFrom: 'control', opacity: 100, backdropBlur: 'none' },
      inputStyle: { mixFrom: 'control', opacity: 100, backdropBlur: 'none' },
      cardPadding: 'default',
    },
    dark: {
      background: 'oklch(0.1448 0 0)',
      foreground: 'oklch(0.9851 0 0)',
      surface: 'oklch(0.2046 0 0)',
      surfaceForeground: 'oklch(0.9851 0 0)',
      control: 'oklch(0.2686 0 0)',
      controlForeground: 'oklch(0.9851 0 0)',
      primary: 'oklch(0.6801 0.1583 276.93)',
      primaryForeground: 'oklch(0.2573 0.0861 281.29)',
      secondary: 'oklch(0.3715 0 0)',
      secondaryForeground: 'oklch(0.9851 0 0)',
      muted: 'oklch(0.2686 0 0)',
      mutedForeground: 'oklch(0.7155 0 0)',
      accent: 'oklch(0.2686 0 0)',
      accentForeground: 'oklch(0.9851 0 0)',
      ring: 'oklch(0.6801 0.1583 276.93)',
    },
  },
}
