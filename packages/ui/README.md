# fewui

Vue 3 tasarım sistemi: **61 global bileşen** (`ui-button`, `ui-dialog`, …), OKLCH tema token’ları, runtime `applyUiTheme`, vue-i18n (`tr` / `en`).

## Kurulum

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import UiLib from 'fewui'
import 'fewui/style.css'

const i18n = createI18n({
  legacy: true,
  locale: 'tr',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: { tr: {}, en: {} },
})

const app = createApp(App)
app.use(i18n)
app.use(UiLib, {
  i18n,
  locales: ['tr', 'en'],
  theme: { mode: 'light', fontFamily: 'Inter' },
})
```

Stil zinciri (Tailwind v4 uygulamalarda):

```css
@import "fewui/style.css";
@import "fewui/components.css";
```

## Export’lar

| Export | Açıklama |
|--------|----------|
| `fewui` | Tam plugin + named export’lar |
| `fewui/landing` | Landing alt kümesi (~20 bileşen) |
| `fewui/style.css` | `themes/default.css` token’ları |
| `fewui/components.css` | Bileşen stilleri (`themes/components/`) |
| `fewui/tailwind-preset` | Tailwind v3 preset |

## Programatik API

- `applyUiTheme`, `mergeUiTheme` — runtime tema
- `pushToast`, `dismissToast`, `clearToasts`, `useToast`
- `requestConfirm`, `useConfirm`, `useDialog`
- `resolveUiText`, `pickPassthroughAttrs`, `createUiId` — yardımcılar
- `formatCurrencyAmount`, `getCurrencySymbol`, … — para birimi

## Bileşenler (global)

ActionCard, ActionCardList, ActionGroup, Alert, Avatar, Badge, Button, Card, Checkbox, CheckboxGroup, ColorPicker, ConfirmDialog, CurrencyInput, DatePicker, DateRangePicker, Dialog, Divider, Dropdown, Empty, Field, File, FormRow, Icon, IconPicker, Input, List, ListItem, Menu, MenuGroup, MenuItem, MenuNav, Password, Phone, Photo, Photos, Pin, Popover, Progress, Radio, RadioGroup, Segment, SegmentGroup, Select, Skeleton, Slider, Stepper, Switch, Table (+ alt parçalar), Tabs, TabList, TabTrigger, TabPanel, Tag, TimePicker, Toast, Tooltip.

## i18n

Mesajlar `src/locales/tr.js` ve `en.js` içinde `ui.*` anahtarlarıyla tanımlıdır. Bileşenler `resolveUiText` / `$t('ui.…')` kullanır.

## Tema

`applyUiTheme({ mode, fontFamily, primaryColor, surfaceStyle, … })` kök öğede CSS değişkenlerini yazar. Koyu mod: `.dark` sınıfı + `--base-*` OKLCH skalası.

## Geliştirme

```bash
cd ui/packages/ui
pnpm exec vite build
node scripts/split-components-css.mjs   # components.css → themes/components/
```

## Tasarım denetimi

UI değişikliklerinde: `ui-*` üzerinde `class` override yok; dialog footer’da İptal yok; çok adımlı modalda `ui-stepper variant="pills"`; metinler i18n’de.
