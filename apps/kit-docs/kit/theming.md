# Theming

## Tema paketleri

Her tema `themes/{id}/` altında: `defaults.js`, `preset.js`, `color.css`, `styles.css`, `index.js`.

| id | CSS import | Kullanım |
|----|------------|----------|
| `web` | `fewui/themes/web.css` | Restta panel |
| `liquidglass` | `fewui/themes/liquidglass.css` | iOS cam |
| `android` | `fewui/themes/android.css` | Material 3 |
| `landing` | `fewui/themes/landing.css` | Tenant siteler |
| `fewui` | `fewui/themes/fewui.css` | fewui.com |

Varsayılan bundle: `fewui/style.css` (web + iOS platform).

Detaylı geliştirici rehberi: paket içi `themes/README.md`.

## Kurulum (Vue)

```js
import UiLib from 'fewui'
import 'fewui/themes/web.css'

app.use(UiLib, {
  i18n,
  theme: 'web',
  themeOverrides: {
    mode: 'dark',
    primaryColor: '#1B5CFF',
  },
})
```

- **`theme`** — string (`web`, `liquidglass`, …) veya doğrudan `UiThemeConfig` nesnesi.
- **`themeOverrides`** — string tema seçildiğinde anlık override (`primaryColor`, `mode`, `surfaceStyle`, …).

## UiThemeConfig (runtime tokenlar)

| Token | CSS |
|-------|-----|
| `primaryColor` | `--primary` |
| `fontFamily` | `--font-sans` |
| `mode` | `.dark` on `<html>` |
| `surfaceStyle` / `controlStyle` / `inputStyle` | glass / opak yüzeyler |

```js
import { applyUiTheme, mergeUiTheme, resolveThemePackage } from 'fewui'

applyUiTheme(mergeUiTheme(resolveThemePackage('web').config, {
  primaryColor: '#4ade80',
  mode: 'dark',
}))
```

## Bileşen defaults (`defaults.js`)

Tema paketindeki `defaults.js` install sırasında inject edilir; prop verilmezse bileşenler bunu kullanır:

- `iconType`, `buttonRounded`, `buttonSize`, `inputSize`, `controlSize`
- `dateFormat`, `dateRangeFormat`, `timeFormat`
- `dialogMaxWidth`, `cardPadding`, `radius`

## Geriye dönük presetler

- **panel** → `web` (mode dark override)
- **flat** → `web` (opak yüzeyler)
- **landing** → `landing`

```js
import { getThemePreset } from 'fewui' // hâlâ çalışır
```

## Custom CSS

```js
import { applyThemeCustomCss } from 'fewui'

applyThemeCustomCss('.my-scope { … }', 'my-app-custom-css')
```

## SSR (landing)

```js
import { buildThemeStyleAttr, resolveThemePackage } from 'fewui/landing'

const theme = resolveThemePackage('landing').config
const { classAttr, styleAttr } = buildThemeStyleAttr(theme)
```

## Yeni tema

1. `themes/_template/` klasörünü kopyala.
2. Token ve defaults doldur.
3. `src/theme/registry.js` içine kaydet.
4. `themes/{id}.css` bundle + `package.json` export ekle.

Playground: [component playground](http://localhost:5175) — token deneme ve JSON export.
