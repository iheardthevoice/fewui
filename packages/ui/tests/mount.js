import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createMemoryHistory, createRouter } from 'vue-router'
import UiLib from '../src/index.js'

/**
 * Bileşeni gerçek kurulumla bağlar: `ui-*` etiketleri kayıtlı, `ui.*` mesajları yüklü.
 * @param {import('vue').Component} component
 * @param {{ locale?: string, locales?: string[] } & Record<string, unknown>} [options]
 */
export function mountUi(component, options = {}) {
  const { locale = 'en', locales, global = {}, ...rest } = options
  const i18n = createI18n({ legacy: false, globalInjection: true, locale, fallbackLocale: 'en', messages: {} })
  // `to` alan bileşenler (button, breadcrumb, list-item) RouterLink çizer.
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: { render: () => null } }],
  })
  return mount(component, {
    attachTo: document.body,
    ...rest,
    global: {
      ...global,
      plugins: [i18n, router, [UiLib, { i18n, locales: locales ?? ['tr', 'en'] }], ...(global.plugins ?? [])],
    },
  })
}

/** Bekleyen zamanlayıcı ve render kuyruğunu boşaltır. */
export async function flush(ms = 0) {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

export function press(target, key, init = {}) {
  const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...init })
  target.dispatchEvent(event)
  return event
}
