# Localization & RTL

## UI strings

fewui's own strings (close buttons, empty states, aria labels) live under the `ui.*` namespace of your vue-i18n instance. The package ships **Turkish** and **English** packs:

```js
app.use(UiLib, { i18n, locales: ['tr', 'en'] })
```

- A language without a pack falls back to **English**. If you list it in `locales` (for example `['tr', 'en', 'de']`), the English strings are loaded under that locale so nothing renders as a raw key.
- To translate fewui into another language, provide the `ui` messages yourself before installing the plugin; your translations are never overwritten:

```js
const i18n = createI18n({ locale: 'de', messages: { de: { ui: { dialog: { close: 'Schließen' } } } } })
```

`getUiMessages('tr')` returns a pack if you prefer to merge manually.

## Dates

Date pickers format with `Intl`, using the active vue-i18n locale:

| Locale | Example |
| --- | --- |
| `tr` | 17 Kasım 2026 |
| `en` (also `en-US`) | 17 November 2026 |
| any other language the browser knows, e.g. `de` | 17. November 2026 |
| empty or unknown | English |

### First day of the week

The calendar starts the week on the locale's first day: Monday for `tr`, `de`, `en-GB`; Sunday for `en-US`. Override it per picker:

```html
<ui-date-picker v-model="date" :week-start="0" />  <!-- 0 = Sunday … 6 = Saturday -->
```

## Right-to-left

Set `dir="rtl"` on `<html>` (or any ancestor). Components mirror automatically:

- Spacing, alignment, borders and corner radii use logical properties.
- Popovers, selects, dropdowns and tours: `*-start` / `*-end` placements follow the text direction; `left` / `right` stay physical, as does `ui-sheet side="left|right"`.
- Arrow keys follow visual order in tabs, segments, chips, sliders, calendars, menus, the menubar and resizable handles.
- Directional icons that fewui renders itself (back, next/previous, breadcrumb and submenu chevrons) are mirrored.

For a directional icon in **your** template, add the `ui-icon--dir` class to the icon or to the button that renders it:

```html
<ui-button prefix-icon="arrow-left" class="ui-icon--dir">Geri</ui-button>
```

Icons that are not directional (refresh, external link, check) must not get the class.

### Known limits

- Verified in Chromium. Firefox and Safari have not been run in RTL.
- Charts are not mirrored (the category axis keeps its order).
- The phone country-code list can show `90+` instead of `+90` in RTL.
- `ui-pin` lays its cells out right-to-left in RTL; wrap it in `dir="ltr"` if codes should always read left-to-right.
- If `dir` is set only on a subtree, layers teleported to `<body>` are positioned correctly but their content does not inherit the direction.
