import defaults from './defaults.js'
import { androidPreset } from './preset.js'

/** @type {import('../../src/theme/registry.js').ThemePackage} */
export const androidTheme = {
  id: 'android',
  label: 'Android',
  description: 'Material 3 — Roboto, tonal surfaces, pill controls.',
  defaults,
  preset: androidPreset,
  css: {
    color: 'fewui/themes/android/color.css',
    styles: 'fewui/themes/android/styles.css',
    platform: {
      android: 'fewui/themes/android/platform/android.css',
    },
  },
}

export default androidTheme
