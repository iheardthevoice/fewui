import { defineTheme } from '../../src/theme/define-theme.js'
import defaults from './defaults.js'
import { fewuiPreset } from './preset.js'

export const fewuiTheme = defineTheme({
  id: 'fewui',
  label: 'Fewui',
  description: 'fewui.com — indigo marka, koyu marketing kabuğu.',
  defaults,
  preset: fewuiPreset,
  css: {
    color: 'fewui/themes/fewui/color.css',
    styles: 'fewui/themes/fewui/styles.css',
  },
})

export default fewuiTheme
