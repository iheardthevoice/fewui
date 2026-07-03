# ui

Monorepo: **`fewui`**, **theme playground**, **docs playground**, **Kit docs (VitePress)**, **fewui.com (www)**.

**Tasarım dili:** [`DESIGN.md`](DESIGN.md)

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `pnpm build` | `fewui` kütüphane bundle |
| `pnpm playground:dev` / `pnpm docs:dev` | Component + tema playground (`:5175`) |
| `pnpm kit-docs:dev` | Kit dokümantasyonu VitePress (`:5174`) |
| `pnpm www:dev` | fewui.com marketing (`:5176`) |
| `pnpm docs:build` / `kit-docs:build` / `www:build` | Üretim build |

## Tüketim

```js
import { createI18n } from 'vue-i18n'
import UiLib from 'fewui'
import 'fewui/style.css'

const i18n = createI18n({
  legacy: true,
  locale: 'tr',
  fallbackLocale: 'tr',
  globalInjection: true,
  messages: { tr: {} },
})

app.use(i18n)
app.use(UiLib, { i18n, locale: 'tr' })
```

Ayrıntı: [`packages/ui/README.md`](packages/ui/README.md).
