import { defineTheme } from '../../src/theme/define-theme.js'
import webTheme from '../web/index.js'
import defaults from './defaults.js'
import { liquidglassPreset } from './preset.js'

export const liquidglassTheme = defineTheme({
  id: 'liquidglass',
  label: 'Liquid Glass',
  description: 'iOS native — opak grouped yüzeyler; cam chrome / popover / kontrol.',
  extends: webTheme,
  defaults,
  preset: liquidglassPreset,
  css: {
    color: 'fewui/themes/liquidglass/color.css',
    styles: 'fewui/themes/liquidglass/styles.css',
    platform: {
      ios: 'fewui/themes/liquidglass/platform/ios.css',
    },
  },
})

export default liquidglassTheme
