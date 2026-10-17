import { createI18n } from 'vue-i18n'
import { themePlaygroundMessages } from '@fewui/theme-playground/messages.js'
import en from './locales/en.json'
import tr from './locales/tr.json'

export const i18n = createI18n({
  legacy: true,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    en: { ...en, themePlayground: themePlaygroundMessages.en },
    tr: { ...tr, themePlayground: themePlaygroundMessages.tr },
  },
})
