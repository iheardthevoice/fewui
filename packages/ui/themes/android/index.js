import { defineTheme } from '../../src/theme/define-theme.js'
import defaults from './defaults.js'
import { androidPreset } from './preset.js'

export const androidTheme = defineTheme({
  id: 'android',
  label: 'Android',
  description: 'Material 3 — Roboto, surface containers, filled/tonal buttons, elevated cards.',
  defaults,
  preset: androidPreset,
  css: {
    color: 'fewui/themes/android/color.css',
    styles: 'fewui/themes/android/styles.css',
    platform: {
      android: 'fewui/themes/android/platform/android.css',
    },
  },
})

export default androidTheme
