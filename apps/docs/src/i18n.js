import { createI18n } from 'vue-i18n'
import { themePlaygroundMessages } from '@fewui/theme-playground/messages.js'

/** Uygulama metinleri (isteğe bağlı). Kütüphane çevirileri `app.use(UiLib, { i18n, locale })` ile eklenir. */
export const i18n = createI18n({
  legacy: true,
  locale: 'tr',
  fallbackLocale: 'tr',
  globalInjection: true,
  messages: {
    en: { themePlayground: themePlaygroundMessages.en },
    tr: { themePlayground: themePlaygroundMessages.tr },
  },
})
