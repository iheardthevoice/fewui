import defaults from './defaults.js'
import { templatePreset } from './preset.js'

/**
 * Şablon manifest — kopyala, `id` değiştir, registry.js'e ekle.
 * @type {import('../../src/theme/registry.js').ThemePackage}
 */
export const templateTheme = {
  id: 'template',
  label: 'Template',
  description: 'Yeni tema paketi başlangıç noktası — production’da kullanılmaz.',
  defaults,
  preset: templatePreset,
  css: {
    color: 'fewui/themes/_template/color.css',
    styles: 'fewui/themes/_template/styles.css',
  },
}

export default templateTheme
