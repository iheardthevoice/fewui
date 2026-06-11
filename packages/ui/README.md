# @ui/lib

Vue 3: **`Icon`**, **`Button`** (Font Awesome `ui-icon` ile) + **`themes/default.css`** + **`tailwind-preset.cjs`** + **vue-i18n** dil paketleri.

## Dil (i18n) — tek kaynak, `main`’de seçim

Çeviriler **`src/locales/<kod>.js`** dosyalarındadır (şimdilik yalnız **`tr.js`**). Bileşenler **yalnızca `$t('ui.…')`** kullanır; dil dosyasını **doğrudan import etmezler**.

Kullanım sırası:

1. `createI18n` ile uygulama `i18n` örneğini oluşturun (`messages` içinde ilgili locale anahtarları olabilir veya boş `{}` başlayabilir).
2. `app.use(i18n)` — aktif dil `i18n.global.locale` (ör. `'tr'`).
3. **`app.use(UiLib, { i18n, locale: 'tr' })`** — kütüphane, **`tr`** paketini `mergeLocaleMessage('tr', …)` ile i18n’e ekler. Böylece hangi dil paketinin yükleneceği **burada** seçilir; bileşenler aktif locale’e göre `$t` ile çözüm alır.

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import UiLib from '@ui/lib'
import '@ui/lib/style.css'

const i18n = createI18n({
  legacy: true,
  locale: 'tr',
  fallbackLocale: 'tr',
  globalInjection: true,
  messages: { tr: {} },
})

const app = createApp(App)
app.use(i18n)
app.use(UiLib, { i18n, locale: 'tr' })
```

İleride `en.js` eklendiğinde: `messages: { tr: {}, en: {} }`, ardından `app.use(UiLib, { i18n, locales: ['tr', 'en'] })` veya dil değişiminde sadece `i18n.global.locale = 'en'` (mesajlar önceden birleştirilmiş olmalı).

Programatik erişim: **`getUiMessages('tr')`** — manuel `mergeLocaleMessage` için.

## Tema (`theme`)

`app.use(UiLib, { i18n, locale: 'tr', theme: { … } })` ile tasarım token’ları kök öğede CSS değişkeni olarak uygulanır.

```js
app.use(UiLib, {
  i18n,
  locales: ['tr', 'en'],
  theme: {
    mode: 'dark',
    fontFamily: 'Poppins',
    primaryColor: '#ff006e',
    primaryForeground: '#ffffff',
    secondaryColor: '#8338ec',
    background: '#0a0a0a',
    foreground: '#ffffff',
    surface: '#141416',
    control: '#2c2c30',
    surfaceStyle: {
      mixFrom: 'foreground',
      opacity: 6,
      backdropBlur: 'md',
    },
    controlStyle: {
      opacity: 8,
      backdropBlur: 12,
    },
    baseColor: {
      50: '#f5f5f7',
      950: '#0a0a0a',
    },
    colors: {
      'brand-accent': '#3a86ff',
    },
  },
})
```

Desteklenen alanlar: `mode`, `fontFamily`, `primaryColor`, `primaryForeground`, `baseColor` (50–950), `background`, `foreground`, `surface`, `surfaceStyle`, `control`, `controlStyle`, `inputStyle`, `secondaryColor`, `border`, `ring`, `muted`, `accent`, `colors`.

`surfaceStyle` / `controlStyle` / `inputStyle`: `opacity` (veya `bgOpacity`, 0–100 veya 0–1), `backdropBlur` (`12`, `'12px'`, `'md'`), `mixFrom` (`'foreground'`, `'surface'`, `'background'`, `'control'` veya ham renk).

Runtime güncelleme: **`applyUiTheme(theme)`** veya **`mergeUiTheme(base, overrides)`**.

## Global kayıt (`ui-*`)

```js
app.use(UiLib, { i18n, locale: 'tr' })
```

Önizleme: `apps/docs/src/main.js` + `i18n.js`.
