# Getting started

## Install

FewUI ships inside the Restta monorepo as `fewui`. Consumer apps register the plugin:

```js
import { createI18n } from 'vue-i18n'
import UiLib from 'fewui'
import 'fewui/style.css'

const i18n = createI18n({ legacy: true, locale: 'tr', messages: { tr: {} } })

app.use(i18n)
app.use(UiLib, { i18n, locales: ['tr', 'en'] })
```

## Use components

Templates use `ui-*` tags globally (no per-view imports for standard markup):

```html
<ui-button variant="solid" color="primary">Save</ui-button>
<ui-form-row label="Email">
  <ui-input v-model="email" type="email" />
</ui-form-row>
```

## Theme preset

```js
import { resolveThemePreset } from 'fewui'

app.use(UiLib, {
  i18n,
  theme: resolveThemePreset('panel'),
})
```

See [Theming](./theming) for presets and custom CSS.
