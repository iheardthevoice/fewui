import { defineTheme } from '../../src/theme/define-theme.js'
import defaults from './defaults.js'
import { webPreset } from './preset.js'

export const webTheme = defineTheme({
  id: 'web',
  label: 'Web',
  description: 'Restta panel — opak yüzeyler, Inter, geniş radius.',
  defaults,
  preset: webPreset,
  css: {
    color: 'fewui/themes/web/color.css',
    styles: 'fewui/themes/web/styles.css',
  },
})

export default webTheme
