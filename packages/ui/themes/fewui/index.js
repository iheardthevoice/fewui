import defaults from './defaults.js'
import { fewuiPreset } from './preset.js'

/** @type {import('../../src/theme/registry.js').ThemePackage} */
export const fewuiTheme = {
  id: 'fewui',
  label: 'Fewui',
  description: 'fewui.com — indigo marka, koyu marketing kabuğu.',
  defaults,
  preset: fewuiPreset,
  css: {
    color: 'fewui/themes/fewui/color.css',
    styles: 'fewui/themes/fewui/styles.css',
  },
}

export default fewuiTheme
