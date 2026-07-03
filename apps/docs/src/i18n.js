import { createI18n } from 'vue-i18n'

/** Uygulama metinleri (isteğe bağlı). Kütüphane çevirileri `app.use(UiLib, { i18n, locale })` ile eklenir. */
export const i18n = createI18n({
  legacy: true,
  locale: 'tr',
  fallbackLocale: 'tr',
  globalInjection: true,
  messages: {
    en: {
      themePlayground: {
        title: 'Theme',
        description: 'Adjust tokens and export rules for your project.',
        mode: { dark: 'Dark', light: 'Light' },
        fields: {
          preset: 'Style',
          mode: 'Mode',
          primary: 'Primary',
          font: 'Font',
          customCss: 'Custom CSS',
          customCssPlaceholder: ':root { … }',
        },
        actions: {
          copyJson: 'Copy theme JSON',
          downloadRules: 'Download rules',
          downloadSkill: 'Download skill',
        },
      },
    },
    tr: {
      themePlayground: {
        title: 'Tema',
        description: 'Token ayarlarını yapın ve projeniz için kuralları dışa aktarın.',
        mode: { dark: 'Koyu', light: 'Açık' },
        fields: {
          preset: 'Stil',
          mode: 'Mod',
          primary: 'Ana renk',
          font: 'Yazı tipi',
          customCss: 'Özel CSS',
          customCssPlaceholder: ':root { … }',
        },
        actions: {
          copyJson: 'Tema JSON kopyala',
          downloadRules: 'Kuralları indir',
          downloadSkill: 'Skill indir',
        },
      },
    },
  },
})
