import { defineTheme } from '../../src/theme/define-theme.js'
import defaults from './defaults.js'
import { landingPreset } from './preset.js'

export const landingTheme = defineTheme({
  id: 'landing',
  label: 'Landing',
  description: 'Restta.com tenant siteleri — Poppins, cam kartlar, turuncu marka.',
  defaults,
  preset: landingPreset,
  css: {
    color: 'fewui/themes/landing/color.css',
    styles: 'fewui/themes/landing/styles.css',
  },
})

export default landingTheme
