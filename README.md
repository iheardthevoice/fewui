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
| `pnpm docs:deploy` / `www:deploy` / `kit-docs:deploy` | Cloudflare Pages’e tek app deploy |
| `pnpm deploy:pages` | Üç Pages projesini sırayla deploy |

## Cloudflare Pages

| App | Local | Pages proje | URL |
| --- | --- | --- | --- |
| Docs playground | `:5175` | `fewui-docs` | https://fewui-docs.pages.dev |
| Marketing (www) | `:5176` | `fewui-www` | https://fewui-www.pages.dev |
| Kit docs (VitePress) | `:5174` | `fewui-kit` | https://fewui-kit.pages.dev |

Git bağlı build (repo kökü):

| Proje | Build command | Output |
| --- | --- | --- |
| `fewui-docs` | `pnpm docs:build` | `apps/docs/dist` |
| `fewui-www` | `pnpm www:build` | `apps/www/dist` |
| `fewui-kit` | `pnpm kit-docs:build` | `apps/kit-docs/.vitepress/dist` |

Node 22 + pnpm 9 (`packageManager` alanı). Watch paths: ilgili `apps/...` + `packages/ui` + `packages/theme-playground` + kök `package.json` / `pnpm-lock.yaml` / `pnpm-workspace.yaml`.

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
