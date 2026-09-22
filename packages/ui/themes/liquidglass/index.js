import defaults from './defaults.js'
import { liquidglassPreset } from './preset.js'

/** @type {import('../../src/theme/registry.js').ThemePackage} */
export const liquidglassTheme = {
  id: 'liquidglass',
  label: 'Liquid Glass',
  description: 'iOS native — opak grouped yüzeyler; cam chrome / popover / kontrol.',
  defaults,
  preset: liquidglassPreset,
  css: {
    color: 'fewui/themes/liquidglass/color.css',
    styles: 'fewui/themes/liquidglass/styles.css',
    platform: {
      ios: 'fewui/themes/liquidglass/platform/ios.css',
    },
  },
}

export default liquidglassTheme
