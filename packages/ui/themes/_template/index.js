import { defineTheme } from '../../src/theme/define-theme.js'
import defaults from './defaults.js'
import { templatePreset } from './preset.js'

/** Şablon — klasörü kopyala, `id` değiştir, `registerTheme()` ile kaydet. */
export const templateTheme = defineTheme({
  id: 'template',
  label: 'Template',
  description: 'Yeni tema paketi başlangıç noktası — production’da kullanılmaz.',
  defaults,
  preset: templatePreset,
  css: {
    color: 'fewui/themes/_template/color.css',
    styles: 'fewui/themes/_template/styles.css',
  },
})

export default templateTheme
