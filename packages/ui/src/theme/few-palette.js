/**
 * Few brand palette — modern marketing blue (cobalt / electric).
 * Shared by fewui defaults and app theme pickers.
 */

export const FEW_PALETTE_ID = 'few'

/** Primary fill used as fewui default `--primary` / `primaryColor`. */
export const FEW_PRIMARY = '#1B5CFF'

export const FEW_PRIMARY_FOREGROUND = '#ffffff'

/**
 * Tailwind-style steps for POS ring / swatches.
 * @type {Record<number, string>}
 */
export const FEW_COLOR_SCALE = {
  50: '#F0F5FF',
  100: '#DBE7FF',
  200: '#BDD4FF',
  300: '#90B6FF',
  400: '#5A8FFF',
  500: '#2F6BFF',
  600: FEW_PRIMARY,
  700: '#1447DB',
  800: '#163AB0',
  900: '#18358A',
  950: '#102054',
}

/**
 * Light / dark UI primary pair (same step as other app palettes: 600).
 * @returns {{ light: string, dark: string }}
 */
export function getFewPrimaryColors() {
  return {
    light: FEW_COLOR_SCALE[600],
    dark: FEW_COLOR_SCALE[600],
  }
}
