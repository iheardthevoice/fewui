import defaults from './defaults.js'
import { landingPreset } from './preset.js'

/** @type {import('../../src/theme/registry.js').ThemePackage} */
export const landingTheme = {
  id: 'landing',
  label: 'Landing',
  description: 'Restta.com tenant siteleri — Poppins, cam kartlar, turuncu marka.',
  defaults,
  preset: landingPreset,
  css: {
    color: 'fewui/themes/landing/color.css',
    styles: 'fewui/themes/landing/styles.css',
  },
}

export default landingTheme
