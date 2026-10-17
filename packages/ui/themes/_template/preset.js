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
      background: '#fafafa',
      foreground: '#171717',
      surface: '#ffffff',
      surfaceForeground: '#171717',
      control: '#f5f5f5',
      controlForeground: '#171717',
      primary: '#6366f1',
      primaryForeground: '#ffffff',
      secondary: '#e5e5e5',
      secondaryForeground: '#171717',
      muted: '#e5e5e5',
      mutedForeground: '#737373',
      accent: '#f5f5f5',
      accentForeground: '#171717',
      ring: '#6366f1',
      success: 'oklch(0.58 0.155 152)',
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
      background: '#0a0a0a',
      foreground: '#fafafa',
      surface: '#171717',
      surfaceForeground: '#fafafa',
      control: '#262626',
      controlForeground: '#fafafa',
      primary: '#818cf8',
      primaryForeground: '#1e1b4b',
      secondary: '#404040',
      secondaryForeground: '#fafafa',
      muted: '#262626',
      mutedForeground: '#a3a3a3',
      accent: '#262626',
      accentForeground: '#fafafa',
      ring: '#818cf8',
    },
  },
}
