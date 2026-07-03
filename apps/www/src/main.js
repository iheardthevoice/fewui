import { createApp } from 'vue'
import App from './App.vue'
import UiLib from 'fewui'
import { resolveThemePreset } from 'fewui'
import { i18n } from './i18n.js'
import { router } from './router.js'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(UiLib, { i18n, locales: ['en', 'tr'], theme: resolveThemePreset('panel') })
app.mount('#app')
