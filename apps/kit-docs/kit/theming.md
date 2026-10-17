# Theming

## Tema paketleri

Her tema `themes/{id}/` altında: `index.js` (`defineTheme`), `preset.js` (token'lar), `defaults.js`,
üretilen `color.css` ve isteğe bağlı `styles.css`.

| id | CSS import | Kullanım |
|----|------------|----------|
| `web` | `fewui/themes/web.css` | Restta panel |
| `liquidglass` | `fewui/themes/liquidglass.css` | iOS cam |
| `android` | `fewui/themes/android.css` | Material 3 |
| `landing` | `fewui/themes/landing.css` | Tenant siteler |
| `fewui` | `fewui/themes/fewui.css` | fewui.com |

Varsayılan bundle: `fewui/style.css` (web + iOS / Android platform katmanları).

Detaylı geliştirici rehberi: paket içi `themes/README.md`.

## Kurulum (Vue)

```js
import UiLib from 'fewui'
import 'fewui/themes/web.css'

app.use(UiLib, {
  i18n,
  theme: 'web',
  mode: 'dark',
  overrides: { primary: '#1B5CFF' },
})
```

- **`theme`** — kayıtlı id veya `defineTheme` paketi.
- **`mode`** — `light` / `dark`; verilmezse kökteki `.dark` korunur.
- **`overrides`** — anlık token'lar: düz harita (aktif mod) veya `{ light, dark }`.
- **`inline`** — tema `color.css` yüklenmediyse tüm token'ları köke yazar.

## Token'lar

```js
// themes/my-theme/preset.js
export const myPreset = {
  fonts: { body: 'Inter' },
  tokens: {
    light: {
      primary: '#1B5CFF',
      background: 'var(--base-100)',
      danger: 'oklch(0.55 0.22 27)',
      radius: '20px',
      cardPadding: 'comfortable',
      surfaceStyle: { mixFrom: 'surface', opacity: 100, backdropBlur: 'none' },
    },
    dark: {
      background: 'var(--base-950)',
    },
  },
}
```

```js
import { defineTheme, buildThemeCss, setUiTheme, setUiThemeMode } from 'fewui'

const myTheme = defineTheme({ id: 'my-theme', label: 'My theme', preset: myPreset, defaults })
const css = buildThemeCss(myTheme) // color.css içeriği
setUiTheme(myTheme, { mode: 'dark' })
setUiThemeMode('light')
```

## Sayfa içi önizleme

```html
<ui-theme-provider theme="android" mode="dark" background>
  <ui-card title="Önizleme">…</ui-card>
</ui-theme-provider>
```

## Bileşen defaults (`defaults.js`)

Prop verilmediğinde bileşenler en yakın provider'ın veya uygulamanın varsayılanını kullanır:

- `iconType`, `buttonRounded`, `buttonSize`, `inputSize`, `controlSize`
- `dateFormat`, `dateRangeFormat`, `timeFormat`
- `dialogMaxWidth`

## Renk yardımcıları

```js
import { pickContrastForeground, ensureContrastForMode, deriveBrandColorsFromPrimary } from 'fewui'
```

## Custom CSS

```js
import { applyThemeCustomCss } from 'fewui'

applyThemeCustomCss('.my-scope { … }', 'my-app-custom-css')
```

## SSR (landing)

```js
import { buildThemeStyleAttr, themeConfigToTokens } from 'fewui/landing'

const { classAttr, styleAttr } = buildThemeStyleAttr('landing', {
  mode: 'dark',
  overrides: themeConfigToTokens(storedSiteTheme),
})
```

## Yeni tema

1. Create sayfasında tasarla ve zip indir — ya da `themes/_template/` klasörünü kopyala.
2. `pnpm --filter fewui run build:themes` ile `color.css` üret.
3. `color.css` import et, `app.use(UiLib, { theme })`.
