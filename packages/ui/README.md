# fewui

Vue 3 tasarım sistemi: **83 global etiket** (`ui-button`, `ui-intro`, `ui-sidebar-item`, `ui-dialog`, …), OKLCH tema token’ları, runtime `applyUiTheme`, vue-i18n (`tr` / `en`).

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

- `defineTheme`, `setUiTheme`, `setUiThemeMode`, `buildThemeCss` — tema paketleri (bkz. `themes/README.md`)
- `<ui-theme-provider>` — sayfa içi kapsamlı tema önizlemesi
- `pushToast`, `dismissToast`, `clearToasts`, `useToast`
- `requestConfirm`, `useConfirm`, `useDialog`
- `resolveUiText`, `pickPassthroughAttrs`, `createUiId` — yardımcılar
- `formatCurrencyAmount`, `getCurrencySymbol`, … — para birimi

## Bileşenler (global)

ActionCard, ActionCardList, ActionGroup, AiButton, Alert, Avatar, AvatarGroup, Badge, Button, Card, Checkbox, CheckboxGroup, ChipGroup, ColorPicker, ConfirmDialog, CurrencyInput, DatePicker, DateRangePicker, Dialog, Divider, Dropdown, Empty, Field, File, FilterChip, FormRow, Icon, IconPicker, IconTile, Input, Intro, List, ListItem, Menu, MenuGroup, MenuItem, MenuNav, Password, Phone, Photo, Photos, Pin, Popover, Progress, Radio, RadioGroup, Section, Segment, SegmentGroup, Select, SidebarItem, Skeleton, Slider, Stat, StatGroup, Stepper, Switch, Table (+ alt parçalar), Tabs, TabList, TabTrigger, TabPanel, Tag, TimePicker, Toast, Toolbar, Tooltip.

### Pano ve liste yapı taşları

| Bileşen | Ne için |
|---------|---------|
| `ui-stat` / `ui-stat-group` | Metrik kartı: başlık + ikon, `ui-display-*` değer, `change` (yüzde; artış `success`, azalış `danger`, `invert-trend`), `variant` `soft` (kart içi) · `surface` (sayfada) |
| `ui-icon-tile` | Renkli kare / daire ikon: `color` (ortak küme, boş = nötr), `variant` `soft` · `solid`, `hex`, `size` sm 28 · md 40 · lg 44px |
| `ui-list-item` | Serbest içerik (geriye uyumlu) veya satır düzeni: `title`, `description`, `value`, `icon` (+ `icon-color` / `icon-hex`), `to` / `interactive` → chevron'lu satır |
| `ui-filter-chip` | Filtre / seçim tetikleyicisi: boşken nötr, doluyken `muted primary`; `clearable` × ve Backspace / Delete ile `clear` |
| `ui-chip-group` | Kısa seçenekler (dönem, kapsam, etiket): tek seçimde `radiogroup` + ok tuşları, `multiple` ile `aria-pressed`; `#option` slotu |
| `ui-section` | Detay / form bölümü: etiketli ayırıcı, açıklama, alan yığını (`--ui-space-section` / `--ui-space-stack`) |
| `ui-toolbar` | Araç / filtre çubuğu: `start` · varsayılan · `end`; `direction` `horizontal` (mobilde yığılır) · `vertical` |

Ek API'ler: `ui-segment-group` ve `ui-tabs variant="segmented"` seçili zemini kayan göstergeyle taşır (`animated`, varsayılan açık; `--ui-indicator-*` değişkenleri), `ui-date-range-picker` `show-trigger=false` + `anchor` (tetikleyicisiz, başka öğeye bağlı açılır; `ui-popover` `anchor`), `ui-checkbox` `size` + `presentational` (yalnız durum kutusu), `ui-field` `icon-tone` `primary` / `secondary`.

## i18n

Mesajlar `src/locales/tr.js` ve `en.js` içinde `ui.*` anahtarlarıyla tanımlıdır. Bileşenler `resolveUiText` / `$t('ui.…')` kullanır.

## Tema

`applyUiTheme({ mode, fontFamily, primaryColor, surfaceStyle, … })` kök öğede CSS değişkenlerini yazar. Koyu mod: `.dark` sınıfı + `--base-*` OKLCH skalası.

## Geliştirme

```bash
cd ui/packages/ui
pnpm exec vite build
```

Bileşen stilleri yalnız `themes/components/` altında düzenlenir (`utilities.css`, `layer.css`, `overrides.css`). `themes/components.css` yalnız bunları yeniden dışa aktarır.

## Tasarım denetimi

UI değişikliklerinde: `ui-*` üzerinde `class` override yok; dialog footer’da İptal yok; çok adımlı modalda `ui-stepper variant="pills"`; metinler i18n’de.
