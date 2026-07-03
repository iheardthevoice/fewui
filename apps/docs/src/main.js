import { createApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './App.vue'
import UiLib from 'fewui'
import { resolveThemePreset } from 'fewui'
import { i18n } from './i18n.js'
import './style.css'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<span />' } },
  ],
})

const app = createApp(App)
app.use(router)
app.use(i18n)
/** Kütüphanenin kullanılacağı dil paketi — `i18n.global.locale` ile uyumlu olmalı */
app.use(UiLib, { i18n, locales: ['tr', 'en'], theme: resolveThemePreset('panel') })
app.mount('#app')
