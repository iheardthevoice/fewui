# fewui

Vue 3 tasarım sistemi: **100 global etiket** (`ui-button`, `ui-intro`, `ui-sidebar-item`, `ui-dialog`, …), OKLCH tema token’ları, runtime `applyUiTheme`, vue-i18n (`tr` / `en`).

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
| `fewui/tailwind.css` | Tailwind v4 köprüsü: `@theme inline` token eşlemesi + `dark` çeşidi |
| `fewui/tailwind-preset` | Eski Tailwind v3 preset'i (yeni projede kullanılmaz) |

## Programatik API

- `defineTheme`, `setUiTheme`, `setUiThemeMode`, `buildThemeCss` — tema paketleri (bkz. `themes/README.md`)
- `<ui-theme-provider>` — sayfa içi kapsamlı tema önizlemesi
- `pushToast`, `dismissToast`, `clearToasts`, `useToast`
- `requestConfirm`, `useConfirm`, `useDialog`
- `resolveUiText`, `pickPassthroughAttrs`, `createUiId` — yardımcılar
- `formatCurrencyAmount`, `getCurrencySymbol`, … — para birimi

## Bileşenler (global)

ActionCard, ActionCardList, ActionGroup, AiButton, Alert, Avatar, AvatarGroup, Badge, Button, Card, Checkbox, CheckboxGroup, ChipGroup, ColorPicker, ConfirmDialog, CurrencyInput, DatePicker, DateRangePicker, Dialog, Divider, Dropdown, Empty, Field, File, FilterChip, FormRow, Icon, IconPicker, IconTile, Input, Intro, List, ListItem, Menu, MenuGroup, MenuItem, MenuNav, Password, Phone, Photo, Photos, Pin, Popover, Progress, Radio, RadioGroup, Section, Segment, SegmentGroup, Select, SidebarItem, Skeleton, Slider, Stat, StatGroup, Stepper, Switch, Table (+ alt parçalar), Tabs, TabList, TabTrigger, TabPanel, Tag, TimePicker, Toast, Toolbar, Tooltip.

0.1.0 ile eklenenler: Accordion (+ AccordionItem), Breadcrumb (+ BreadcrumbItem), Chart, Collapsible, Command, ContextMenu, HoverCard, Kbd, Menubar, Pagination, ResizableGroup / ResizablePanel / ResizableHandle, ScrollArea.

Her bileşenin prop / event / slot tablosu ve canlı örneği doküman sitesindedir (`pnpm kit-docs:dev`, `/kit/components/`); aynı veri `fewui/components.json` olarak paketle gelir.

### 0.1.0 ile gelen bileşenler

| Bileşen | Ne için |
|---------|---------|
| `ui-accordion` / `ui-accordion-item` | Açılır bölümler: tekli ya da `multiple`, `variant` `line` · `card`; başlık düğmesi `aria-expanded`, ok tuşlarıyla gezinme |
| `ui-collapsible` | Tek açılır alan; `#trigger` slotu `{ open, toggle, triggerAttrs }` verir |
| `ui-breadcrumb` / `ui-breadcrumb-item` | Sayfa yolu: `items` dizisi ya da slot; `max-items` ortadakileri `…` menüsüne toplar |
| `ui-pagination` | Numaralı sayfalama: `total` + `page-size` ya da `page-count`, `sibling-count`, `show-edges` (`ui-table-pagination` önceki / sonraki olarak durur) |
| `ui-kbd` | Klavye kısayolu: `keys="mod+k"` (Apple'da ⌘, diğerlerinde Ctrl) |
| `ui-scroll-area` | İnce çubuklu kaydırma alanı: `max-height`, `orientation`, `fade`; taşınca klavyeyle odaklanır |
| `ui-dropdown` (genişledi) | Alt menü (`children`), onay / radyo öğesi (`type`, `checked`, `group`), `shortcut`; eski `items` kullanımı aynen çalışır |
| `ui-context-menu` | Sağ tık, Shift+F10 ve uzun basışla açılan menü |
| `ui-menubar` | Yatay menü çubuğu (`menus: [{ label, items }]`) |
| `ui-hover-card` | Hover / odakla açılan önizleme kartı; dokunmatikte açılmaz, içerik zorunlu bilgi taşımamalı |
| `ui-command` | Komut paleti: `v-model:open`, `hotkey="mod+k"`, `items` / `groups`, Türkçe harf duyarsız arama; `inline` ile yerinde liste |
| `ui-chart` | Bağımlılıksız SVG grafik: `type` `bar` · `line` · `area` · `donut`, `series`, `stacked`; ekran okuyucu için gizli veri tablosu |
| `ui-resizable-group` / `-panel` / `-handle` | Sürüklenerek ve klavyeyle yeniden boyutlanan paneller; `auto-save-id` düzeni saklar |
| `ui-slider` `range` | İki tutamaçlı aralık: `v-model` `[min, max]`, `min-distance`, `format-value` |
| `ui-menu` `collapsed` | İkon rayı: etiketler ipucu olarak görünür (`v-model:collapsed`) |
| `ui-toast` eylemi | `toast.success({ title, action: { label: 'Geri al', onClick } })`; toast imleç ya da odak üzerindeyken kapanmaz |
| `ui-date-picker` `week-start` | Haftanın ilk günü dilden gelir (tr: pazartesi); prop ile ezilir |

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

Ek API'ler: `ui-segment-group` `navigation` + `ui-segment` `to` (bağlantılı gezinme kapsülü; seçili sayfa `aria-current="page"`), `ui-segment-group` ve `ui-tabs variant="segmented"` seçili zemini kayan göstergeyle taşır (`animated`, varsayılan açık; `--ui-indicator-*` değişkenleri), `ui-date-range-picker` `show-trigger=false` + `anchor` (tetikleyicisiz, başka öğeye bağlı açılır; `ui-popover` `anchor`), `ui-checkbox` `size` + `presentational` (yalnız durum kutusu), `ui-field` `icon-tone` `primary` / `secondary`. `ui-popover` / `ui-dropdown` `#trigger` slot prop'u `triggerAttrs` (`aria-haspopup`, `aria-expanded`, `aria-controls`; tetikleyici düğmeye `v-bind` ile verilir) ve `ui-popover` `aria-label` (panelin erişilebilir adı). `ui-popover` `presentation` (`auto` varsayılan: telefonda gerçek `ui-dialog`, masaüstünde panel; `popover`; `dialog`) + dialog sunumu için `title` (boşsa satır etiketinden türetilir), `description`, `dialog-max-width`; slotlar iki sunumda aynı adla: `header`, `toolbar`, `actions`, varsayılan / `content`, `footer`. Select, DatePicker, TimePicker, DateRangePicker, ColorPicker, IconPicker ve FieldAction `presentation` prop'unu geçirir. `ui-list-item` `color="primary"` (ekleme satırı), `value-swatch` (değerin önünde renk noktası), `value-image` (değerin önünde küçük görsel önizlemesi; `value-icon` / `value-swatch` / `value-image` metinsiz de değer sayılır, `clearable` × düğmesi chevron'un yerinde ve hizasında durur). `ui-radio-group` `variant="inset"` (iOS seçim listesi: kartlı satırlar, seçili satırda ✓).

## i18n

Mesajlar `src/locales/tr.js` ve `en.js` içinde `ui.*` anahtarlarıyla tanımlıdır. Bileşenler `resolveUiText` / `$t('ui.…')` kullanır. Paketi olmayan dil İngilizceye düşer; tarih gösterimi tarayıcının tanıdığı dilde yazılır.

## RTL

`<html dir="rtl">` ile bileşenler aynalanır (mantıksal boşluk / hizalama, `*-start` / `*-end` yerleşimleri, ok tuşları). Kendi şablonunuzdaki yön ikonuna `class="ui-icon--dir"` verin. Yeni stil yazarken `ml/mr/pl/pr/left/right` yerine `ms/me/ps/pe/start/end` kullanılır.

## Tipler

Kaynak JavaScript'tir; `types/index.d.ts` bileşenlerden üretilir (`pnpm build:meta`) ve `ui-*` etiketlerini `GlobalComponents` içinde bildirir. Volar şablonda prop tamamlar; `import type { ButtonProps } from 'fewui'` kullanılabilir.

## Tema

`applyUiTheme(theme, { mode, overrides })` kök öğede CSS değişkenlerini yazar. `mode`: `light` · `dark` · `system` (cihaz ayarını izler); koyu mod `.dark` sınıfıyla çalışır. Renk token'ları OKLCH tutulur ve `@property` ile tiplidir: mod / ana renk değişimi kısa bir geçişle olur. Her tema için `tokens.json` (W3C Design Tokens, Figma eklentileri için) üretilir. Ayrıntı: `themes/README.md` ve doküman sitesindeki Theming sayfası.

## Geliştirme

```bash
pnpm build:lib     # tema CSS + API denetimi + tipler / doküman sayfaları + dist
pnpm test          # Vitest (yardımcılar, bileşen davranışı, tüm doküman örnekleri)
pnpm lint          # ESLint — yalnız gerçek hatalar
pnpm check         # CI'ın çalıştırdığı her şey
pnpm build:meta    # types/ ve kit-docs bileşen sayfalarını yeniden üret
```

Bileşen stilleri yalnız `themes/components/` altında düzenlenir: `utilities.css`, `layer.css`, `overrides.css` ve yeni bileşenler için `parts/<ad>.css` (`index.css` içinden alınır). `themes/components.css` yalnız bunları yeniden dışa aktarır.

Yeni bileşen: `.vue` + `parts/<ad>.css` + `tr.js` / `en.js` + `src/index.js` kaydı + `apps/docs/src/examples/<Ad>Example.vue` (doküman sayfasının canlı örneği ve duman testi) + `tests/components/` altında davranış testi.

## Tasarım denetimi

UI değişikliklerinde: `ui-*` üzerinde `class` override yok; dialog footer’da İptal yok; çok adımlı modalda `ui-stepper variant="pills"`; metinler i18n’de.
