import defaults from './defaults.js'
import { webPreset } from './preset.js'

/** @type {import('../../src/theme/registry.js').ThemePackage} */
export const webTheme = {
  id: 'web',
  label: 'Web',
  description: 'Restta panel — opak yüzeyler, Inter, geniş radius.',
  defaults,
  preset: webPreset,
  css: {
    color: 'fewui/themes/web/color.css',
    styles: 'fewui/themes/web/styles.css',
  },
}

export default webTheme
