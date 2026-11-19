# Getting started

fewui is a Vue 3 design system: globally registered `ui-*` components, theme packages and Tailwind v4 component styles. It is written in plain JavaScript (Options API) and ships generated TypeScript declarations.

## Requirements

| Peer | Version |
| --- | --- |
| `vue` | `^3.5` |
| `vue-i18n` | `^9.14` |
| `vue-router` | `^4` or `^5` |
| `tailwindcss` | `^4` (the component CSS is Tailwind source and is compiled by your app) |

Icons are rendered as Font Awesome classes by `ui-icon`. Load the Font Awesome CSS yourself; the default icon weight is `light`, which is part of Font Awesome Pro. Set `defaults: { iconType: 'solid' }` if you use the free set.

## Install

fewui is consumed from Git (it is not published to npm). Pin a commit:

```json
{
  "dependencies": {
    "fewui": "github:iheardthevoice/fewui#<commit>"
  }
}
```

## CSS

Add fewui to your app's main stylesheet, after Tailwind:

```css
@import "tailwindcss";

/* Let Tailwind see the classes used inside fewui templates. */
@source "../node_modules/fewui/packages/ui/src";

@import "fewui/style.css";       /* tokens — or one theme: fewui/themes/web.css */
@import "fewui/fonts.css";       /* optional self-hosted fonts */
@import "fewui/tailwind.css";    /* maps tokens to Tailwind utilities + the dark variant */
@import "fewui/components.css";  /* component styles */
```

`fewui/tailwind.css` gives you `bg-primary`, `text-muted-foreground`, `border-border`, `bg-surface-subtle`, `rounded-lg` and friends, all resolved from the active theme at runtime. You do not copy an `@theme` block into your app.

## Register the plugin

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import UiLib from 'fewui'
import App from './App.vue'
import './style.css'

const i18n = createI18n({ legacy: false, globalInjection: true, locale: 'en', fallbackLocale: 'en', messages: {} })

createApp(App)
  .use(i18n)
  .use(UiLib, {
    i18n,
    locales: ['tr', 'en'],   // languages to load fewui's own strings for
    theme: 'web',
    mode: 'light',           // 'light' | 'dark'
  })
  .mount('#app')
```

Mount the two singletons once at the app root so `useToast()` and `useConfirm()` have somewhere to render:

```html
<ui-toast />
<ui-confirm-dialog />
```

## Use components

Tags are global; no per-view imports:

```html
<ui-form-row label="E-posta">
  <ui-input v-model="email" type="email" />
</ui-form-row>
<ui-button color="primary" :loading="saving" @click="save">Kaydet</ui-button>
```

```js
import { useToast } from 'fewui'

const toast = useToast()
toast.success({ title: 'Kaydedildi', action: { label: 'Geri al', onClick: undo } })
```

Two rules keep screens consistent:

- **Never put appearance classes on a `ui-*` component.** Use its props (`variant`, `color`, `size`) or extend the component. Layout classes belong on the wrapper element.
- **`color` is the tone, `variant` is the visual style.** Tones are `primary`, `secondary`, `success`, `warning`, `info`, `danger`.

## Next

- [Components](./components/) — props, events, slots and live examples.
- [Theming](./theming) — theme packages, tokens, scoped preview.
- [Localization & RTL](./localization) — languages, dates, week start, right-to-left.
- [Accessibility](./accessibility) — what the components guarantee and what stays your job.
- [TypeScript & tooling](./tooling) — types, tests, checks.
