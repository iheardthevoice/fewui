# Theming

## UiThemeConfig

Themes are plain objects applied to `document.documentElement`:

| Token | CSS variable |
|-------|----------------|
| `primaryColor` | `--primary` |
| `fontFamily` | `--font-sans` |
| `mode` | `.dark` class on `<html>` |
| `surfaceStyle` | glass / flat surfaces |

```js
import { applyUiTheme, mergeUiTheme, getThemePreset } from 'fewui'

applyUiTheme(mergeUiTheme(getThemePreset('panel'), {
  primaryColor: '#4ade80',
  mode: 'dark',
}))
```

## Presets

- **panel** — Inter, default glass (Restta admin).
- **flat** — opaque surfaces, no backdrop blur.
- **landing** — Poppins, dark, frosted (tenant public sites).

## Custom CSS

```js
import { applyThemeCustomCss } from 'fewui'

applyThemeCustomCss('.my-scope { … }', 'my-app-custom-css')
```

Landing tenants also support `brandCss`, `layoutCss`, and integration `customCss` injected server-side.

## SSR

```js
import { buildThemeStyleAttr, resolveSiteTheme } from 'fewui/landing'

const { classAttr, styleAttr } = buildThemeStyleAttr(resolveSiteTheme(siteConfig))
// <html class="dark" style="--primary: …">
```

## Playground

Open the [component playground](http://localhost:5175) to tune tokens and export JSON / rules / skills.
