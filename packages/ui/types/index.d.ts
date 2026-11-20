/* Bu dosya `scripts/build-component-meta.mjs` tarafından üretilir — elle düzenlemeyin. */
import type { App, DefineComponent, Plugin } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type UiTone = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
export type UiControlSize = 'sm' | 'md' | 'lg'
export type UiThemeMode = 'light' | 'dark'
/** system: cihazın açık / koyu ayarını izler. */
export type UiThemeModePreference = UiThemeMode | 'system'
export type UiThemeTokens = Record<string, string | number | Record<string, unknown>>
export type UiThemeOverrides = UiThemeTokens | { light?: UiThemeTokens; dark?: UiThemeTokens }
export interface UiThemePreset {
  fonts?: { body?: string; heading?: string }
  tokens: { light: UiThemeTokens; dark?: UiThemeTokens }
}
export interface UiThemeDefaults {
  iconType?: string
  buttonRounded?: 'lg' | 'full'
  controlSize?: UiControlSize
  buttonSize?: UiControlSize
  inputSize?: UiControlSize
  density?: 'comfortable' | 'compact'
  [key: string]: unknown
}
export interface UiThemePackage {
  id: string
  label?: string
  description?: string
  extends?: string | UiThemePackage
  preset: UiThemePreset
  defaults?: UiThemeDefaults
  css?: string
}
export interface UiLibInstallOptions {
  /** vue-i18n örneği; `ui.*` mesajları buna eklenir. */
  i18n?: unknown
  locale?: string
  /** Paketi olmayan dil İngilizceye düşer. */
  locales?: string[]
  theme?: string | UiThemePackage
  mode?: UiThemeModePreference
  overrides?: UiThemeOverrides
  inline?: boolean
  defaults?: UiThemeDefaults
  priceInput?: Record<string, unknown>
}


export interface AccordionProps {
  /** Açık öğe(ler): tekli kullanımda `value` (yoksa `null`), `multiple` ile dizi. Verilmezse bileşen kendi iç durumunu yönetir (`defaultValue`). */
  modelValue?: string | number | unknown[]
  /** Kontrolsüz kullanımda ilk açık öğe(ler). */
  defaultValue?: string | number | unknown[]
  /** Aynı anda birden fazla öğe açık kalabilir. */
  multiple?: boolean
  /** Tekli kullanımda açık öğe yeniden tıklanınca kapanır. `false`: her zaman bir öğe açık kalır. */
  collapsible?: boolean
  /** `line` — ayırıcı çizgili satırlar; `card` — her öğe ayrı yüzey. */
  variant?: 'line' | 'card'
  /** Satır dikey dolgusu; verilmezse tema kontrol boyutu. */
  size?: 'md'
  /** Başlık düğmesini saran başlık seviyesi (`h2`–`h6`); sayfa hiyerarşisine göre seçilir. */
  headingLevel?: number
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
}

export declare const Accordion: DefineComponent<AccordionProps>

export interface AccordionItemProps {
  /** `ui-accordion` `modelValue` ile eşleşen kimlik. */
  value: string | number
  title?: string
  /** Başlığın altında ikincil satır. */
  description?: string
  /** `ui-icon` `name` — başlığın ilk satırıyla hizalanır. */
  icon?: string
  disabled?: boolean
}

export declare const AccordionItem: DefineComponent<AccordionItemProps>

export interface ActionCardProps {
  title: string
  description?: string
  icon?: string
  iconType?: string
  selected?: boolean
  disabled?: boolean
  showTrailing?: boolean
  'onClick'?: (...args: any[]) => any
}

export declare const ActionCard: DefineComponent<ActionCardProps>

export interface ActionCardListProps {
  ariaLabel?: string
  maxHeight?: string
}

export declare const ActionCardList: DefineComponent<ActionCardListProps>

export interface ActionGroupProps {
  /** Satır (`horizontal`) veya sütun (`vertical`) dizilimi — form alanları için `vertical` + `joined` */
  orientation?: 'horizontal' | 'vertical'
  /** true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur). Kapsayıcıya border, arka plan veya divide eklenmez. Dikeyde Input / Select / Button yan yana yığılmış tek kontrol gibi görünür. */
  joined?: boolean
  /** `joined` ile birlikte: çocuklar arasında ince ayırıcı çizgi (dikeyde üst kenar, yatayda sol kenar — inset). */
  divided?: boolean
  /** Yatayda çocuklar eşit büyür; dikeyde grup ve çocuklar tam genişlik. (`min-width` / `min-height: max-content` — erken “…” kesilmesini önler). */
  grow?: boolean
  /** `role="group"` erişilebilir adı */
  ariaLabel?: string
}

export declare const ActionGroup: DefineComponent<ActionGroupProps>

export interface AiButtonProps {
  prefixIcon?: string
  size?: string
  disabled?: boolean
  loading?: boolean
  /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
  loadingText?: string
  block?: boolean
  'onClick'?: (...args: any[]) => any
}

export declare const AiButton: DefineComponent<AiButtonProps>

export interface AlertProps {
  /** Durum tonu */
  color?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  description?: string
  /** Varsayılan ikon yerine `circle-info` vb. */
  icon?: string
  /** `false` — sol ikon gösterilmez; `#icon` slotu ile özelleştirilebilir */
  showIcon?: boolean
  /** Ekran okuyucu duyurusu (WCAG 4.1.3). Varsayılan `''`: sayfada kalıcı bilgi kutusu, duyurulmaz. `polite` → `role="status"` (işlem sonucu), `assertive` → `role="alert"` (acil hata / uyarı). Eskiden rol renkten türetiliyordu: her warning/danger `alert` oluyor, kalıcı kutular araya giriyordu. */
  live?: 'polite' | 'assertive'
  dismissible?: boolean
  /** Sayfa üstünde ince, tam genişlikte durum çubuğu. Metin + CTA tek satır. */
  banner?: boolean
  /** Kullanımdan kalktı — alert tek görünümdür; kenarlık temadan gelir (`--ui-alert-border-width`). Eski kullanımlar kırılmasın diye kabul edilir, etkisi yoktur. */
  soft?: boolean
  /** Varsayılan slot’u açıklamanın altına değil, satırın sağına koyar. `banner` zaten sağ CTA kullanır; bu prop kart / soft alert için. */
  actionsEnd?: boolean
  'onDismiss'?: (...args: any[]) => any
}

export declare const Alert: DefineComponent<AlertProps>

export interface AvatarProps {
  /** Görsel URL; yüklenemezse baş harf yedeği gösterilir. */
  src?: string
  /** Tam ad; baş harf ve renk üretimi için birincil kaynak. */
  name?: string
  /** `img` alt metni. */
  alt?: string
  /** Harf yedek metni (ör. `JD`). Boşsa `name` / `alt` kullanılır. */
  fallback?: string
  size?: 'md'
  /** `circle` (varsayılan) | `rounded` (albüm kapağı) | `square` */
  shape?: 'circle' | 'rounded' | 'square'
  ring?: boolean
  interactive?: boolean
  'onClick'?: (...args: any[]) => any
}

export declare const Avatar: DefineComponent<AvatarProps>

export interface AvatarGroupProps {
  size?: 'md'
  /** Extra count shown as +N after visible avatars. */
  overflowCount?: number
  ariaLabel?: string
}

export declare const AvatarGroup: DefineComponent<AvatarGroupProps>

export interface BadgeProps {
  /** Ton; boşsa `solid`/`outline` için `primary`, `muted` için nötr (`secondary`). */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
  /** Görsel stil — `solid` dolgu, `outline` çerçeve, `muted` tonun soluk zemini */
  variant?: 'solid' | 'outline' | 'muted'
  /** sm — varsayılan kompakt; md / lg daha geniş padding */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Uzun metinde kısaltma (…) — `maxWidth` üst sınırından sonra (varsayılan ~12rem) */
  truncate?: boolean
  /** Tailwind max-w-* anahtarı: 32, 40, 48, 64, full — truncate açıkken üst sınır */
  maxWidth?: '32' | '40' | '48' | '64'
  /** Tooltip metni; boşsa slot metni kullanılır */
  tooltip?: string
  /** Geçerli hex renk (#RGB / #RRGGBB); arka plan ve metin kontrastı buna göre uygulanır */
  hex?: string
  prefixIcon?: string
  suffixIcon?: string
  /** Tıklanabilir etiket — `button` olarak basılır (kaldır / seç). */
  clickable?: boolean
}

export declare const Badge: DefineComponent<BadgeProps>

export interface BreadcrumbProps {
  /** Kısa yol: `[{ label, to, href, icon }]`. Son öğe bulunulan sayfadır. Verilmezse öğeler slot'a `ui-breadcrumb-item` olarak yazılır. */
  items?: unknown[]
  /** `items` bu sayıyı aşarsa ilk öğe ile son öğeler kalır, aradakiler `…` menüsünde toplanır. `0`: daraltma yok. Yalnız `items` ile çalışır (slot öğeleri daraltılmaz). */
  maxItems?: number
  /** Verilmezse `ui.breadcrumb.ariaLabel`. */
  ariaLabel?: string
}

export declare const Breadcrumb: DefineComponent<BreadcrumbProps>

export interface BreadcrumbItemProps {
  /** `vue-router` hedefi; `href`'e göre önceliklidir. */
  to?: RouteLocationRaw
  /** Düz bağlantı adresi (`to` yokken). */
  href?: string
  /** Slot kullanılmazsa gösterilen metin. */
  label?: string
  icon?: string
  /** Bulunulan sayfa: bağlantı değil, `aria-current="page"` taşıyan metin. */
  current?: boolean
}

export declare const BreadcrumbItem: DefineComponent<BreadcrumbItemProps>

export interface ButtonProps {
  /** `vue-router` hedefi; verildiğinde `<a>` + istemci navigasyonu (`RouterLink` custom). */
  to?: RouteLocationRaw
  /** Native `<button type="...">` — `to` yokken; forms için `submit` / `reset`. */
  nativeType?: 'button' | 'submit' | 'reset'
  variant?: 'solid' | 'outline' | 'ghost' | 'muted' | 'link' | 'nav'
  color?: 'primary' | 'secondary' | 'input' | 'warning' | 'success' | 'info' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  prefixIcon?: string
  suffixIcon?: string
  loading?: boolean
  /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
  loadingText?: string
  cubed?: boolean
  /** İkon + metin dikey yığılır (`prefixIcon` üstte, slot altta). `cubed` ile birlikte kullanılmaz. */
  stack?: boolean
  rounded?: boolean
  /** Tam genişlik. */
  block?: boolean
  disabled?: boolean
  /** Metin slot’u (ve `loading` durumunda görünen satır) yatay hizası. */
  textAlign?: 'center' | 'left'
  /** Çok satırlı etiket / açıklama — truncate ve nowrap kapatılır. */
  wrap?: boolean
  'onClick'?: (...args: any[]) => any
}

export declare const Button: DefineComponent<ButtonProps>

export interface CardProps {
  /** Dış çerçeve (1px `border-border`). */
  border?: boolean
  /** `border-*` stili. */
  borderType?: 'solid' | 'dashed' | 'dotted' | 'double'
  title?: string
  description?: string
  /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
  icon?: string
  /** `ui-icon` `type` prop’u. */
  iconType?: 'solid' | 'regular' | 'brands' | 'light' | 'duotone' | 'thin'
  /** Başlık ikonu karosu tonu (`ui-icon-tile` `color`); verilirse ikon renkli zeminde çizilir. */
  iconColor?: string
  /** Başlık ikonu karosu hex rengi (`ui-icon-tile` `hex`) — rapor / kategori rengi */
  iconHex?: string
  /** `soft` | `solid` — hex verildiğinde varsayılan `solid` */
  iconVariant?: string
  /** Gövde: yatay satır (buton / ikon sıraları). */
  row?: boolean
  /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı */
  headerDivider?: boolean
  /** Kök padding ve bölüm aralığını kaldırır; gövde kenara yaslanır. Başlık/alt bilgi için kompakt iç boşluk kalır. */
  removePadding?: boolean
  /** Dolgu ve gölge olmadan yalnızca çerçeve (boş tablo kabuğu vb.). */
  transparent?: boolean
  /** Hover’da hafif yükselme + primary vurgu (etkinlik / tıklanabilir kart). */
  interactive?: boolean
  /** Primary kenar / zemin vurgusu (ör. “bugün” etkinlik kartı). */
  emphasized?: boolean
  /** Başlık (başlık + `#actions`) sabit kalır, gövde kartın içinde kayar — uzun form kartlarında Kaydet görünür kalsın diye. Yükseklik sınırını üst öğe verir (ör. sticky + max-h sarmalayıcı). Varsayılan kapalı. */
  stickyHeader?: boolean
  /** Üst flex satırında kardeşlerle aynı yüksekliğe yayılır (`h-full`). */
  fullHeight?: boolean
  /** `data-table` — sıfır kök padding; toolbar/footer DataTable boşlukları. */
  layout?: 'default' | 'data-table'
}

export declare const Card: DefineComponent<CardProps>

export interface ChartProps {
  type?: 'bar' | 'line' | 'area' | 'donut'
  /** Satır nesneleri: `[{ day: 'Pzt', salon: 12400, paket: 3200 }]`. */
  data?: unknown[]
  /** Kategori (x ekseni / dilim etiketi) alanı. */
  categoryKey?: string
  /** `[{ key, label, color? }]`. Renk verilmezse sıra ile `--chart-series-1…8`. `donut` yalnız ilk seriyi okur; dilimler satırlardır. */
  series?: unknown[]
  /** `bar` ve `area` için serileri üst üste yığar. */
  stacked?: boolean
  /** Çizim alanı yüksekliği (CSS uzunluğu). Genişlik kapsayıcıdan gelir. */
  height?: string
  showLegend?: boolean
  showGrid?: boolean
  showAxis?: boolean
  showTooltip?: boolean
  /** `(value, context) => string` — `context`: `'axis' | 'tooltip' | 'table'`. Eksen için kısa, ipucu için tam biçim döndürülebilir. */
  valueFormatter?: (...args: any[]) => any
  /** Grafiğin erişilebilir adı; gizli tablonun başlığı da budur. */
  ariaLabel?: string
  /** Gizli tablodaki kategori sütunu başlığı (varsayılan `ui.chart.category`). */
  categoryLabel?: string
  loading?: boolean
  emptyTitle?: string
  emptyDescription?: string
}

export declare const Chart: DefineComponent<ChartProps>

export interface CheckboxProps {
  /** Grup modunda seçenek kimliği. */
  value?: string | number | boolean
  /** Tekil mod: `v-model` boolean. */
  modelValue?: boolean
  label?: string
  description?: string
  /** `list` varyantında satırları eşit iç boşluklu kutu yapar; işaretli satır dolgu ile vurgulanır (kenarlık yok). */
  highlight?: boolean
  /** Kutu ölçüsü: sm 16px · md 18px · lg 22px (dokunmatik satır) */
  size?: 'md'
  /** Yalnız durum göstergesi — etiket gövdesi yok, tıklama / odak dıştaki satır düğmesinde (ör. sepet satırında seçim kutusu). Satır kendi `aria-pressed` / `aria-checked` bilgisini taşır. */
  presentational?: boolean
  /** Kısmi seçim — "Tümünü seç" alt öğelerin bir kısmı seçiliyken (WAI-ARIA Checkbox, tri-state). Görünüm dolu + çizgi; `aria-checked="mixed"`. Tıklanınca `update:modelValue` normal akışla çalışır. */
  indeterminate?: boolean
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const Checkbox: DefineComponent<CheckboxProps>

export interface CheckboxGroupProps {
  /** Seçili değerler dizisi (ilkel karşılaştırma). */
  modelValue?: unknown[]
  /** `list` — dikey liste; `button` — kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
  variant?: 'list' | 'button'
  /** `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.). */
  orientation?: 'vertical' | 'horizontal'
  ariaLabel?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const CheckboxGroup: DefineComponent<CheckboxGroupProps>

export interface ChipGroupProps {
  /** Tek seçimde değer, `multiple` ile dizi */
  modelValue?: string | number | boolean | unknown[]
  /** `{ value, label, icon?, disabled?, ariaLabel?, ariaCurrent? }[]` (`ariaCurrent`: ör. `'date'` bugünkü birim) */
  options?: unknown[]
  multiple?: boolean
  /** Tek seçimde seçili çipe tekrar basınca seçimi kaldırır */
  clearable?: boolean
  /** Verilmezse temanın kontrol boyutu (`controlSize`, varsayılan md) — yanındaki seçici ve filtre çipleriyle aynı yükseklik ve metin. Eskiden sabit `sm` idi. Yoğun yerlerde `size="sm"` verilir. */
  size?: string
  /** Tek satırda yatay kaydırma (dar ekran); `false` iken alt satıra kayar */
  scrollable?: boolean
  disabled?: boolean
  ariaLabel?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
}

export declare const ChipGroup: DefineComponent<ChipGroupProps>

export interface CollapsibleProps {
  /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
  open?: boolean
  /** Kontrolsüz kullanımda ilk durum. */
  defaultOpen?: boolean
  /** Açma / kapama kilitlenir; mevcut durum korunur. */
  disabled?: boolean
  'onUpdate:open'?: (...args: any[]) => any
}

export declare const Collapsible: DefineComponent<CollapsibleProps>

export interface ColorPickerProps {
  modelValue?: string
  disabled?: boolean
  triggerPlaceholder?: string
  popoverTitle?: string
  clearLabel?: string
  customColorLabel?: string
  /** Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`. */
  block?: boolean
  /** Renk örnekleri — `'#hex'` veya `{ value, label?, color? }`. `color` verilirse örnek o renkle çizilir, `value` anahtar olabilir (ör. `'zinc'`); tetikleyici seçili öğenin `label`'ını gösterir. Verilmezse yerleşik palet. */
  options?: unknown[]
  /** Özel hex alanı — yalnız paletten seçilecekse `false`. */
  showCustom?: boolean
  /** Paneldeki “Temizle” — değer boş bırakılamıyorsa `false`. */
  showClear?: boolean
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const ColorPicker: DefineComponent<ColorPickerProps>

export interface CommandProps {
  /** `v-model:open` — palet (dialog) kullanımı. */
  open?: boolean
  /** true: dialog olmadan, liste bulunduğu yerde çizilir. */
  inline?: boolean
  /** `[{ id, label, description, icon, shortcut, keywords, group, disabled, to }]` */
  items?: unknown[]
  /** `[{ label, items }]` — verilirse `items` yerine kullanılır. */
  groups?: unknown[]
  /** `v-model:query` — verilmezse arama metni içeride tutulur. */
  query?: string
  placeholder?: string
  emptyText?: string
  loading?: boolean
  /** Eşleşme fonksiyonu `(item, query) => boolean`. Varsayılan: etiket + `keywords` içinde harf / aksan duyarsız arama. Sunucu taraflı aramada `() => true` verilip `update:query` dinlenir. */
  filter?: (...args: any[]) => any
  /** Paleti açıp kapatan genel kısayol (örn. `mod+k`); `inline` iken arama alanına odaklar. */
  hotkey?: string
  'onUpdate:open'?: (...args: any[]) => any
  'onUpdate:query'?: (...args: any[]) => any
  'onSelect'?: (...args: any[]) => any
}

export declare const Command: DefineComponent<CommandProps>

export interface ConfirmDialogProps {

}

export declare const ConfirmDialog: DefineComponent<ConfirmDialogProps>

export interface ContextMenuProps {
  /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
  open?: boolean
  /** `ui-dropdown` ile aynı öğe şeması. */
  items?: unknown[]
  /** true: menü açılmaz, tarayıcının kendi bağlam menüsü çalışır. */
  disabled?: boolean
  'onUpdate:open'?: (...args: any[]) => any
  'onSelect'?: (...args: any[]) => any
}

export declare const ContextMenu: DefineComponent<ContextMenuProps>

export interface CurrencyInputProps {
  modelValue?: string | number
  /** ISO veya sembol (TRY, ₺, …); verilmezse `TRY` (seeder varsayılanı). */
  currency?: string
  /** Binlik ve ondalık ayırıcılarını belirleyen BCP 47 locale. */
  locale?: string
  size?: string
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  name?: string
  id?: string
  autocomplete?: string
  ariaDescribedby?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onInput'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
  'onFocus'?: (...args: any[]) => any
  'onBlur'?: (...args: any[]) => any
}

export declare const CurrencyInput: DefineComponent<CurrencyInputProps>

export interface DatePickerProps {
  /** Haftanın ilk günü (0 pazar … 6 cumartesi). Verilmezse dilden çözülür: `tr` / `en-GB` pazartesi, `en-US` pazar. */
  weekStart?: number
  /** `YYYY-MM-DD` */
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  block?: boolean
  /** true: tetikleyici/popover yok — paneli doğrudan yerleştir (FieldAction vb.). */
  embedded?: boolean
  /** Hızlı seçim satırını göster */
  showQuick?: boolean
  id?: string
  /** En erken seçilebilir gün (`YYYY-MM-DD`) */
  min?: string
  todayLabel?: string
  yesterdayLabel?: string
  tomorrowLabel?: string
  /** Restaurant day-end (`HH:mm`). When set, dün/bugün/yarın and “today” highlight follow the business day (same as backend `toBusinessDate`). */
  businessDayEnd?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
}

export declare const DatePicker: DefineComponent<DatePickerProps>

export interface DateRangePickerProps {
  /** Haftanın ilk günü (0 pazar … 6 cumartesi). Verilmezse dilden çözülür: `tr` / `en-GB` pazartesi, `en-US` pazar. */
  weekStart?: number
  /** `[startYmd, endYmd]` */
  modelValue?: unknown[]
  /** Masaüstü panelin tetikleyiciye göre yeri. Varsayılan sağa hizalı (`bottom-end`); araç çubuğunun solundaki filtre çipinde `bottom-start` verilir, panel sola taşmaz. */
  placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'top-start' | 'top-end' | 'top'
  placeholder?: string
  disabled?: boolean
  id?: string
  min?: string
  max?: string
  /** Hızlı aralık listesi. Verilmezse varsayılan set kullanılır. */
  presets?: unknown[]
  /** Kontrollü aç/kapa (`undefined` = dahili state). */
  open?: boolean
  /** `false`: tetikleyici çizilmez; panel `anchor` öğesine göre `v-model:open` ile açılır (ör. bir seçim çipindeki “Özel aralık”). */
  showTrigger?: boolean
  /** Konum referansı (HTMLElement, bileşen örneği veya CSS seçici) — `ui-popover` `anchor` */
  anchor?: string | Record<string, unknown>
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
  'onUpdate:open'?: (...args: any[]) => any
}

export declare const DateRangePicker: DefineComponent<DateRangePickerProps>

export interface DialogProps {
  /** `v-model:open` */
  open?: boolean
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  /** İç panel genişliği (`max-w-*`). */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
  /** Dış çerçeve (1px `border-border`) — `ui-card` ile aynı. */
  border?: boolean
  /** `border-*` stili. */
  borderType?: 'solid' | 'dashed' | 'dotted' | 'double'
  title?: string
  description?: string
  /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
  icon?: string
  /** `ui-icon` `type` prop’u. */
  iconType?: 'solid' | 'regular' | 'brands' | 'light' | 'duotone' | 'thin'
  /** Sağ üst kapat düğmesi. */
  showClose?: boolean
  /** Kapat düğmesi `aria-label`; boşsa `ui.dialog.close` (i18n). */
  closeLabel?: string
  /** Başlıkta geri düğmesi; `@back` ile birlikte kullanılır. */
  withBack?: boolean
  /** Geri düğmesi metni; boşsa `ui.dialog.back` (i18n). */
  backLabel?: string
  /** Gövde: yatay satır (buton / ikon sıraları). */
  row?: boolean
  /** Gövde dolgusu — `none`: kenar padding sıfır (POS ödeme vb.). */
  bodyPadding?: 'default' | 'none'
  /** Gövde düzeni — `flex`: dikey flex + taşma kontrolü (içerik paneli). */
  bodyLayout?: 'default' | 'flex'
  /** Footer şeffaf — arka plan/border yok; gövde üzerine biner. Kaydırılabilir içerik footer altında görünür; gövde alt boşluğu otomatik artar. Varsayılan açık: yalnızca eylem butonları görünür. */
  footerTransparent?: boolean
  /** Panel `max-height` — örn. `min(85vh, 36rem)`. */
  panelMaxHeight?: string
  /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı. */
  headerDivider?: boolean
  /** Başlık yokken `role="dialog"` için erişilebilir ad. Başlık varsa `aria-labelledby` önceliklidir. */
  ariaLabel?: string
  /** Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer). `false`: alan seçilmez, odak yalnız panele taşınır (klavye / Escape dialoga gider). */
  initialFocus?: boolean
  /** Yığılma katmanı — `confirm`: açık modalların üstünde (programatik onay). */
  stackLayer?: 'default' | 'confirm'
  /** Kaydedilmemiş değişiklik koruması: form kirliyken Escape / arka plan / X / sheet sürükleme kapatmadan önce onay ister. Verilmezse tema varsayılanı `dialogGuardUnsaved` (false). Programatik kapanış (`open=false`) hiçbir zaman sormaz. */
  guardUnsaved?: boolean
  /** Kirli durumu elle belirler; verilmezse içerideki fewui form kontrollerinin kullanıcı değişiklikleri izlenir. */
  dirty?: boolean
  /** Tek satırlı metin alanında Enter (ve her yerde Cmd/Ctrl+Enter) footer'daki birincil eylemi tetikler: `data-ui-dialog-primary` işaretli ilk etkin düğme, yoksa son etkin solid primary `ui-button`. Verilmezse tema varsayılanı `dialogSubmitOnEnter` (false). */
  submitOnEnter?: boolean
  /** Açılışta içerideki yüklemeleri (`ui-skeleton`) en fazla bu kadar (ms) bekle: karartma hemen gelir, panel içerik hazır olunca kayar — boş açılıp sonra dolma / büyüme olmaz. `0` beklemez. */
  openHold?: number
  'onUpdate:open'?: (...args: any[]) => any
  'onAfterLeave'?: (...args: any[]) => any
  'onBack'?: (...args: any[]) => any
}

export declare const Dialog: DefineComponent<DialogProps>

export interface DividerProps {
  /** Ortada gösterilecek başlık — `icon` ile birlikte etiketli ayırıcı */
  title?: string
  /** Başlık yanında gösterilecek ikon (`ui-icon` `name`) */
  icon?: string
  /** Dikey boşluk (üst/alt). `none`: yalnızca çizgi — üst bileşenin kendi gap’i ile hizalamak için. */
  spacing?: 'none' | 'sm' | 'md'
  /** true: yalnızca görsel — `role="presentation"`, ekran okuyucu atlar. false: `role="separator"` + `aria-orientation="horizontal"`. */
  decorative?: boolean
}

export declare const Divider: DefineComponent<DividerProps>

export interface DropdownProps {
  /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir */
  open?: boolean
  placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'right-start' | 'right-end' | 'left-start' | 'left-end' | 'top-start' | 'top-end'
  matchTriggerWidth?: boolean
  /** Tetikleyici tam genişlik */
  block?: boolean
  /** Flex satırında tetikleyicinin doğrudan katılımı (`ui-tab-list` içi menü sekmesi). */
  inheritLayout?: boolean
  closeOnOutsideClick?: boolean
  closeOnEscape?: boolean
  outsideClickIgnoreSelector?: string
  items?: unknown[]
  'onUpdate:open'?: (...args: any[]) => any
  'onSelect'?: (...args: any[]) => any
}

export declare const Dropdown: DefineComponent<DropdownProps>

export interface EmptyProps {
  /** `ui-icon` `name` (örn. `plus`). Boş string → ikon kutusu gösterilmez. */
  icon?: string
  title?: string
  description?: string
  iconType?: string
  size?: 'sm' | 'md' | 'lg'
}

export declare const Empty: DefineComponent<EmptyProps>

export interface FieldProps {
  title?: string
  subtitle?: string
  /** true: yuvarlatılmış arka plan (kenarlık yok). */
  card?: boolean
  /** Değer boyutu. `md` (varsayılan): metrik ve ayar özeti — 16px medium. `sm`: salt okunur detay listesi (kayıt detayı, özet) — 14px normal; etiket aynı kalır (12px büyük harf, soluk). */
  size?: 'sm' | 'md'
  /** Grid / flex hücrede kart yüksekliğini eşitlemek için `h-full`. */
  fill?: boolean
  icon?: string
  iconType?: string
  /** Başlık ikonu rengi: ortak `color` kümesi (`primary` | `secondary` | `success` | `warning` | `danger` | `info`) veya `muted` | ''. Boş / muted → varsayılan muted-foreground. */
  iconTone?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted'
  /** Başlık ikonu `ui-icon-tile` (sm) içinde, `iconTone` zemininde gösterilir. */
  iconTile?: boolean
}

export declare const Field: DefineComponent<FieldProps>

export interface FieldActionProps {
  /** `v-model:open` */
  open?: boolean
  title?: string
  description?: string
  /** Boş değerde tetikleyici metni (örn. “Tarih ekle”). */
  actionName?: string
  /** `popover` | `dialog` */
  mode?: 'popover' | 'dialog'
  /** Seçili değerin görünen metni; doluysa tetikleyicide `actionName` yerine gösterilir. */
  value?: string | number
  prefixIcon?: string
  suffixIcon?: string
  /** Yalnız ikon tetikleyici (kübik düğme). */
  iconOnly?: boolean
  clearable?: boolean
  disabled?: boolean
  /** Tetikleyici boyutu. Verilmezse `ui-filter-chip` gibi temanın kontrol boyutu — yan yana duran filtre çipleriyle aynı yükseklik (eskiden sabit `sm` idi, bir kademe küçük kalıyordu). */
  size?: 'sm'
  placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'top-start' | 'top-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end'
  popoverWidth?: string | number
  mobileCentered?: boolean
  maxWidth?: string
  dialogIcon?: string
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  clearLabel?: string
  doneLabel?: string
  /** Dialog modunda alt çubuğu göster (varsayılan: true). */
  showFooter?: boolean
  'onUpdate:open'?: (...args: any[]) => any
  'onClear'?: (...args: any[]) => any
}

export declare const FieldAction: DefineComponent<FieldActionProps>

export interface FileProps {
  /** Dosya veya klasör adı (veya yol — `basename-only` ile yalnız son parça gösterilir) */
  name: string
  /** `auto`: sonda `/` veya `\\` → klasör; aksi dosya */
  kind?: 'auto' | 'file' | 'folder'
  /** Finder tarzı düzen ölçeği */
  size?: 'md' | 'lg'
  /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
  icon?: string
  iconType?: string
  /** İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) */
  color?: string
  /** true: etikette yalnızca yolun son segmenti */
  basenameOnly?: boolean
  /** true: yalnızca ikon kabuğu (dışarıda etiket gösteren grid’ler için) */
  hideLabel?: boolean
}

export declare const File: DefineComponent<FileProps>

export interface FilterChipProps {
  icon?: string
  /** Değer yokken etiket (ör. “Masa seç”) */
  emptyLabel: string
  /** Değer varken etiket */
  valueLabel?: string
  empty?: boolean
  /** Bağlı seçici açıkken değer yokken de vurgulu görünür */
  active?: boolean
  clearable?: boolean
  disabled?: boolean
  ariaLabel?: string
  ariaExpanded?: boolean | string
  /** Açtığı katman türü (`true` / `dialog` / `listbox` …) — `aria-haspopup`. */
  ariaHaspopup?: boolean | string
  /** Değer boşken (veya temizlenemezken) sağdaki ikon; doluyken × önceliklidir. */
  suffixIcon?: string
  /** Verilmezse temanın kontrol boyutu (`controlSize`, varsayılan md = 32px) — yanındaki arama kutusu ve butonlarla aynı yükseklik. Eskiden sabit `sm` idi: tablo araç çubuğundaki çipler panelin geri kalanından bir kademe küçük kalıyordu. Yoğun yerlerde `size="sm"` verilir. */
  size?: string
  /** Verilirse boş / dolu durum rengi yerine sabit ton kullanılır */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  'onClick'?: (...args: any[]) => any
  'onClear'?: (...args: any[]) => any
}

export declare const FilterChip: DefineComponent<FilterChipProps>

export interface FormRowProps {
  label?: string
  description?: string
  /** `vertical`: etiket üstte, kontrol altta, açıklama kontrolün altında. `horizontal`: etiket + açıklama solda, kontrol sağda (Preferences). */
  direction?: 'vertical' | 'horizontal'
  /** `direction="horizontal"` iken dar viewport’ta dikey yığılır (`max-width: 1023px` — segment `icon-only="mobile"` ile aynı kırılım). */
  stackOnMobile?: boolean
  /** `default`: mevcut `direction` düzeni. `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`. */
  variant?: 'default' | 'card'
  /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
  id?: string
  /** Alan hatası (WCAG 3.3.1). Verilince kontrolün altında gösterilir; kontrol `aria-invalid` ve `aria-describedby` ile otomatik bağlanır (FormRow içindeki ilk fewui kontrolü). */
  error?: string
  /** Alan adı. Üstteki form hata bağlamında (`UI_FORM_ERRORS_KEY`) bu ada bir mesaj varsa `error` verilmiş gibi gösterilir; kullanıcı satırdaki kontrolü değiştirince mesaj silinir. Birden çok ad boşlukla ayrılır (`"startDate endDate"`). */
  field?: string
  /** Dialog oluşturma formlarında ana alan — açılışta odak hedefi (kontrol boyutunu değiştirmez) */
  primary?: boolean
}

export declare const FormRow: DefineComponent<FormRowProps>

export interface GuidanceProps {
  /** `dialog` | `popover` | `card` | `tour` */
  mode?: 'dialog' | 'popover' | 'card' | 'tour'
  /** v-model:open — dialog, popover, tour */
  open?: boolean
  icon?: string
  iconType?: string
  title?: string
  description?: string
  goLabel?: string
  closeLabel?: string
  showGo?: boolean
  /** Üst köşe X (dialog/tour) */
  showClose?: boolean
  /** Alt ikincil düğme (card/popover/tour) */
  showFooterClose?: boolean
  placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'top-start' | 'top-end' | 'top' | 'right-start' | 'right-end' | 'left-start' | 'left-end'
  /** Tour: CSS seçici veya HTMLElement */
  target?: string | Record<string, unknown>
  /** Tour: hedef etrafındaki vurgu boşluğu (px) */
  targetPadding?: number
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  popoverWidth?: string
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  /** `false` iken `seen` true olduğunda bileşen render edilmez. Kalıcılık üst katmanda `persistKey` ile yönetilir. */
  repeatable?: boolean
  /** Kullanıcı bu bilgilendirmeyi gördü mü (üst katman tercihlerinden) */
  seen?: boolean
  /** Üst katman tercih anahtarı (dokümantasyon / erişilebilirlik) */
  persistKey?: string
  'onUpdate:open'?: (...args: any[]) => any
  'onGo'?: (...args: any[]) => any
  'onClose'?: (...args: any[]) => any
  'onAfterLeave'?: (...args: any[]) => any
}

export declare const Guidance: DefineComponent<GuidanceProps>

export interface HoverCardProps {
  /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
  open?: boolean
  /** Açılış gecikmesi (ms). */
  openDelay?: number
  /** Kapanış gecikmesi (ms) — işaretçinin karta geçmesine izin verir. */
  closeDelay?: number
  placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'right-start' | 'right-end' | 'left-start' | 'left-end' | 'top-start' | 'top-end' | 'top'
  /** Kart genişliği (örn. `20rem`); verilmezse içerik + tema üst sınırı. */
  width?: string | number
  disabled?: boolean
  /** Kart panelinin erişilebilir adı; metin i18n'den gelir. */
  ariaLabel?: string
  'onUpdate:open'?: (...args: any[]) => any
}

export declare const HoverCard: DefineComponent<HoverCardProps>

export interface IconProps {
  /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
  name: string
  type?: string
  /** Visual size (maps to Tailwind `text-*`). */
  size?: 'md'
  /** true: `aria-label` i18n `ui.icon.accessible` ile, `role="img"`. false: dekoratif — `aria-hidden="true"`. */
  showAccessibleName?: boolean
}

export declare const Icon: DefineComponent<IconProps>

export interface IconPickerProps {
  modelValue?: string
  icons?: unknown[]
  iconType?: string
  disabled?: boolean
  triggerPlaceholder?: string
  popoverTitle?: string
  clearLabel?: string
  searchPlaceholder?: string
  noResultsLabel?: string
  /** 0 veya negatif = limit yok (tüm ikonlar). */
  maxResults?: number
  panelWidth?: string
  /** Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`. */
  block?: boolean
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const IconPicker: DefineComponent<IconPickerProps>

export interface IconTileProps {
  icon: string
  iconType?: 'solid'
  /** `primary | secondary | success | warning | info | danger`; boş → nötr */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
  /** `soft`: tonun açık zemini + ton rengi ikon · `solid`: dolu ton + ön plan rengi */
  variant?: 'soft' | 'solid'
  /** Geçerli hex (#RGB / #RRGGBB); verilirse `color` yerine kullanılır */
  hex?: string
  /** sm 28px · md 40px · lg 44px */
  size?: 'sm' | 'md' | 'lg'
  shape?: 'rounded' | 'circle'
}

export declare const IconTile: DefineComponent<IconTileProps>

export interface InputProps {
  /** `default` dolgulu kabuk; `plain` border/fill yok (inline düzenleme). */
  variant?: 'default' | 'plain'
  /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
  size?: 'md'
  /** `v-model` */
  modelValue?: string | number
  /** Tek satır için native `type`. */
  type?: string
  /** `<textarea>` kullan. */
  multiline?: boolean
  rows?: number
  prefixIcon?: string
  suffixIcon?: string
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  name?: string
  id?: string
  autocomplete?: string
  maxlength?: number | string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onInput'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
  'onFocus'?: (...args: any[]) => any
  'onBlur'?: (...args: any[]) => any
}

export declare const Input: DefineComponent<InputProps>

export interface IntroProps {
  /** Overlay iken görünürlük; `overlay` kapalıysa yok sayılır. */
  open?: boolean
  /** Aktif slayt (0 tabanlı). */
  modelValue?: number
  /** `{ key, icon, iconType, title, description, ariaLabel }` */
  steps?: unknown[]
  /** Tam ekran katman (`Teleport` + `role=dialog`). */
  overlay?: boolean
  showSkip?: boolean
  skipLabel?: string
  nextLabel?: string
  finishLabel?: string
  ariaLabel?: string
  'onUpdate:open'?: (...args: any[]) => any
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onSkip'?: (...args: any[]) => any
  'onFinish'?: (...args: any[]) => any
  'onNext'?: (...args: any[]) => any
}

export declare const Intro: DefineComponent<IntroProps>

export interface KbdProps {
  /** Tuş(lar): dizi (`['mod', 'k']`) ya da `+` ile ayrılmış metin (`"mod+shift+p"`). `mod` Apple platformlarında ⌘, diğerlerinde Ctrl olarak yazılır. */
  keys?: unknown[] | string
  size?: 'sm' | 'md'
}

export declare const Kbd: DefineComponent<KbdProps>

export interface ListProps {
  /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
  tag?: 'ul' | 'ol' | 'div'
  /** `plain`: dikey gap’li liste. `bordered`: kenarlıklı, satır ayırıcılı grup. `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.). */
  variant?: 'plain' | 'bordered' | 'divided'
  /** Öğeler arası dikey boşluk. `plain`: gap. `divided` / `bordered`: satır içi dikey padding. */
  density?: 'compact' | 'normal' | 'relaxed'
}

export declare const List: DefineComponent<ListProps>

export interface ListItemProps {
  /** Dolu daire içinde `ui-icon` (ör. `check`) — serbest içerik düzeni. */
  prefixIcon?: string
  prefixIconType?: 'solid'
  /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
  align?: 'start' | 'center'
  /** `div`: `role="list"` taşıyan `div` içinde (ör. kart içi ayar listesi) */
  tag?: 'li' | 'div'
  title?: string
  description?: string
  /** Sağdaki kısa durum metni (chevron'un solunda) */
  value?: string
  /** Satır başı ikon karosu (`ui-icon-tile`) */
  icon?: string
  iconType?: 'solid'
  /** İkon karosu tonu (`ui-icon-tile` `color`) */
  iconColor?: string
  /** İkon karosu hex rengi (`ui-icon-tile` `hex`) — kategori / marka rengi */
  iconHex?: string
  /** `soft` | `solid` — hex verildiğinde varsayılan `solid` */
  iconVariant?: string
  /** `danger`: başlık tehlike tonunda (ör. hesabı sil) */
  color?: 'danger'
  /** sm / md: 14px başlık · lg: 16px başlık */
  size?: 'sm' | 'md' | 'lg'
  /** `vue-router` hedefi — satır bağlantı olur */
  to?: RouteLocationRaw
  /** Satır düğme olur ve `click` yayar */
  interactive?: boolean
  disabled?: boolean
  /** Tıklanabilir satırda sağ gösterge: `chevron` | `external` | `none` */
  trailingIcon?: 'chevron' | 'external' | 'none'
  'onClick'?: (...args: any[]) => any
}

export declare const ListItem: DefineComponent<ListItemProps>

export interface MenuProps {
  /** `full` (varsayılan): kapsayıcıyı (kart, sidebar) doldurur. `sm` / `md` / `lg`: sabit genişlik — yüzen panel vb. */
  width?: 'sm' | 'md' | 'lg' | 'full'
  /** İkon rayı: etiketler ve grup başlıkları gizlenir (ekran okuyucuda kalır), öğeler kare ikon düğmesi olur ve etiket ipucu olarak gösterilir. Genişlik içeriğe iner (`width` yok sayılır). */
  collapsed?: boolean
  'onUpdate:collapsed'?: (...args: any[]) => any
}

export declare const Menu: DefineComponent<MenuProps>

export interface MenuGroupProps {
  label?: string
}

export declare const MenuGroup: DefineComponent<MenuGroupProps>

export interface MenuItemProps {
  /** `vue-router` hedefi; verildiğinde menü öğesi bağlantı olarak davranır. */
  to?: RouteLocationRaw
  prefixIcon?: string
  suffixIcon?: string
  disabled?: boolean
  loading?: boolean
  active?: boolean
  'onClick'?: (...args: any[]) => any
}

export declare const MenuItem: DefineComponent<MenuItemProps>

export interface MenuNavProps {
  ariaLabel?: string
}

export declare const MenuNav: DefineComponent<MenuNavProps>

export interface MenubarProps {
  /** `[{ label, items, disabled }]` — `items` `ui-dropdown` ile aynı şemadadır. */
  menus?: unknown[]
  size?: 'sm'
  /** `role="menubar"` için erişilebilir ad; metin i18n'den gelir. */
  ariaLabel?: string
  'onSelect'?: (...args: any[]) => any
}

export declare const Menubar: DefineComponent<MenubarProps>

export interface PaginationProps {
  /** Bulunulan sayfa (1 tabanlı). */
  modelValue?: number
  /** Toplam kayıt sayısı; `pageSize` ile sayfa sayısına çevrilir. */
  total?: number
  pageSize?: number
  /** Sayfa sayısı doğrudan verilir; `total` / `pageSize` yerine geçer. */
  pageCount?: number
  /** Bulunulan sayfanın her iki yanında gösterilen sayfa sayısı. */
  siblingCount?: number
  /** İlk ve son sayfa düğmeleri (aradaki boşluk `…`). */
  showEdges?: boolean
  /** Verilmezse tema kontrol boyutu (düğmeler `ui-button` ile aynı yükseklikte). */
  size?: string
  disabled?: boolean
  /** Verilmezse `ui.pagination.ariaLabel`. */
  ariaLabel?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
}

export declare const Pagination: DefineComponent<PaginationProps>

export interface PasswordProps {
  size?: string
  modelValue?: string
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  name?: string
  id?: string
  autocomplete?: string
  maxlength?: number | string
  /** Güç çubuğu ve etiket */
  showStrength?: boolean
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onFocus'?: (...args: any[]) => any
  'onBlur'?: (...args: any[]) => any
}

export declare const Password: DefineComponent<PasswordProps>

export interface PhoneProps {
  country?: string
  number?: string
  countries?: unknown[]
  size?: 'md'
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  numberName?: string
  id?: string
  autocomplete?: string
  numberMaxlength?: number | string
  countryAriaLabel?: string
  ariaDescribedby?: string
  'onUpdate:country'?: (...args: any[]) => any
  'onUpdate:number'?: (...args: any[]) => any
  'onFocus'?: (...args: any[]) => any
  'onBlur'?: (...args: any[]) => any
}

export declare const Phone: DefineComponent<PhoneProps>

export interface PhotoProps {
  src?: string
  alt?: string
  favorite?: boolean
  aspect?: 'square' | 'video' | 'auto'
  size?: 'fill' | 'sm' | 'md' | 'lg'
  interactive?: boolean
  preview?: boolean
  overflowLabel?: string
  galleryIndex?: number
  'onClick'?: (...args: any[]) => any
  'onOpenPreview'?: (...args: any[]) => any
}

export declare const Photo: DefineComponent<PhotoProps>

export interface PhotosProps {
  items?: unknown[]
  max?: number
  aspect?: 'square' | 'video' | 'auto'
  preview?: boolean
}

export declare const Photos: DefineComponent<PhotosProps>

export interface PinProps {
  /** Tam kod — `v-model` */
  modelValue?: string
  /** Hane sayısı */
  length?: number
  /** `numeric` yalnızca rakam; `alphanumeric` harf + rakam */
  type?: 'numeric' | 'alphanumeric'
  disabled?: boolean
  readonly?: boolean
  /** Haneleri gizler (PIN / şifre); OTP için kapalı bırakın. */
  mask?: boolean
  autocomplete?: string
  ariaLabel?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onComplete'?: (...args: any[]) => any
  'onFocus'?: (...args: any[]) => any
  'onBlur'?: (...args: any[]) => any
}

export declare const Pin: DefineComponent<PinProps>

export interface PopoverProps {
  /** `v-model:open` */
  open?: boolean
  placement?: 'bottom-start' | 'bottom-end' | 'bottom' | 'right-start' | 'right-end' | 'left-start' | 'left-end' | 'top-start' | 'top-end' | 'top'
  /** Tetikleyici ile aynı minimum genişlik */
  matchTriggerWidth?: boolean
  /** Panel genişliği (örn. `13rem`, `208px`). Verildiğinde katman sabitlenir; `matchTriggerWidth` ile birlikteyse bu önceliklidir. */
  width?: string | number
  disabled?: boolean
  /** Konum referansı — verilirse panel tetikleyici yerine bu öğeye göre açılır (HTMLElement, bileşen örneği, CSS seçici ya da sanal referans: `{ x, y }` görünüm noktası / `{ getBoundingClientRect() }`). Tetikleyicisiz kullanımda (`#trigger` boş) `v-model:open` ile programatik açılır; bu öğeye tıklama dış tıklama sayılmaz. */
  anchor?: string | Record<string, unknown>
  closeOnOutsideClick?: boolean
  closeOnEscape?: boolean
  /** Ek `closest` seçicileri (iç içe Select / DatePicker / TimePicker). */
  outsideClickIgnoreSelector?: string
  /** true: bu popover, üst (ata) popover paneline tıklanınca da açık kalır. false (varsayılan): üst panelde ama kendi panelinin dışında tıklanınca kapanır. */
  keepOpenOnAncestorPopoverClick?: boolean
  /** true: panel içinde `[role="option"][aria-selected="true"]` satırının üstü, tetikleyicinin üstü ile aynı hizada olacak şekilde katman kaydırılır (Select). */
  alignSelectedOptionToTrigger?: boolean
  /** true: tetikleyici satır genişliğini doldurur (sidebar footer vb.) */
  block?: boolean
  /** true: kök ve tetikleyici kabuğu `display: contents` — flex satırında yalnızca slot (ör. `ui-tab-trigger`) katılır; konumlandırma ilk çocuk öğeden alınır. */
  inheritLayout?: boolean
  /** Mobil görünümde paneli ekran ortasında aç (varsayılan). false: tetikleyiciye göre konumlanır (Dropdown menüler). */
  mobileCentered?: boolean
  /** Panelin (`role="dialog"`) erişilebilir adı; metin i18n'den gelir. */
  ariaLabel?: string
  'onUpdate:open'?: (...args: any[]) => any
}

export declare const Popover: DefineComponent<PopoverProps>

export interface PriceDisplayProps {
  label: string
  value?: string
  size?: 'sm' | 'md' | 'lg'
  valueSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  tone?: 'default' | 'foreground' | 'muted' | 'success' | 'danger' | 'primary'
}

export declare const PriceDisplay: DefineComponent<PriceDisplayProps>

export interface PriceDisplayGroupProps {
  size?: 'md'
}

export declare const PriceDisplayGroup: DefineComponent<PriceDisplayGroupProps>

export interface PriceDisplayRowProps {
  label: string
  value?: string
  valueSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  tone?: 'default' | 'foreground' | 'muted' | 'success' | 'danger' | 'primary'
  divider?: boolean
  emphasis?: boolean
}

export declare const PriceDisplayRow: DefineComponent<PriceDisplayRowProps>

export interface PriceInputProps {
  modelValue?: string | number
  currency?: string
  /** BCP 47 fiyat biçimi; verilmezse fewui global ayarı kullanılır. */
  format?: string
  /** `format` için geriye uyumlu alias. */
  locale?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onInput'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
  'onFocus'?: (...args: any[]) => any
  'onBlur'?: (...args: any[]) => any
}

export declare const PriceInput: DefineComponent<PriceInputProps>

export interface PriceTextProps {
  value?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  tone?: 'default' | 'foreground' | 'muted' | 'success' | 'danger' | 'primary'
  strike?: boolean
  truncate?: boolean
}

export declare const PriceText: DefineComponent<PriceTextProps>

export interface ProgressProps {
  /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
  type?: 'bar' | 'circle'
  /** 0 … `max` */
  value?: number
  max?: number
  /** Daire: sm 16px, md 20px, lg 24px, xl 40px, 2xl 56px. Çubuk: thin 4px (şifre gücü), md 8px (slider izi). */
  size?: string
  /** Çubuk / halka dolgu rengi — şifre gücü vb. */
  variant?: 'default' | 'weak' | 'fair' | 'good' | 'strong'
  indeterminate?: boolean
  /** Slider izi gibi — progressbar rolü / aria yok */
  presentational?: boolean
  ariaLabel?: string
  ariaValuetext?: string
}

export declare const Progress: DefineComponent<ProgressProps>

export interface RadioProps {
  value: string | number | boolean
  label: string
  description?: string
  /** `list` varyantında satırları eşit iç boşluklu kutu yapar; seçili satır dolgu ile vurgulanır (kenarlık yok). */
  highlight?: boolean
}

export declare const Radio: DefineComponent<RadioProps>

export interface RadioGroupProps {
  modelValue?: string | number | boolean
  /** `list` — satır listesi; `button` — kart seçenekleri */
  variant?: 'list' | 'button'
  /** `list`: varsayılan dikey; `horizontal` yan yana. `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.). */
  orientation?: 'vertical' | 'horizontal'
  /** `button` + yatay: sabit sütun sayısı (dar dialog'da 3 seçenek yan yana). `0` (varsayılan) — `auto-fit` ile genişliğe göre sarılır. */
  columns?: number
  /** Yalnız `button`: kartlar kontrol boyuna iner (button / input ile aynı yükseklik ve köşe), etiket tek satır ortalı, seçim dolgu ile gösterilir. Boş (varsayılan) — açıklamalı kart. */
  size?: string
  /** `radiogroup` erişilebilir adı */
  ariaLabel?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const RadioGroup: DefineComponent<RadioGroupProps>

export interface ResizableGroupProps {
  /** `horizontal` — paneller yan yana; `vertical` — alt alta. */
  direction?: 'horizontal' | 'vertical'
  /** Panel boyutları (yüzde, toplam 100). Verilmezse bileşen kendi durumunu tutar. */
  modelValue?: unknown[]
  /** Boyutlar `localStorage` içinde bu kimlikle saklanır (yalnız mount sonrası okunur). */
  autoSaveId?: string
  /** Ok tuşu adımı (yüzde). */
  keyboardStep?: number
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onResizeEnd'?: (...args: any[]) => any
}

export declare const ResizableGroup: DefineComponent<ResizableGroupProps>

export interface ResizableHandleProps {
  /** Çizginin ortasında görünür tutma kulpu. */
  showGrip?: boolean
  disabled?: boolean
  ariaLabel?: string
}

export declare const ResizableHandle: DefineComponent<ResizableHandleProps>

export interface ResizablePanelProps {
  /** Başlangıç boyutu (yüzde). Verilmezse kalan alan eşit paylaşılır. */
  defaultSize?: number
  minSize?: number
  maxSize?: number
  /** `minSize` altına sürüklenince `collapsedSize` değerine kapanır. */
  collapsible?: boolean
  collapsedSize?: number
  'onCollapse'?: (...args: any[]) => any
  'onExpand'?: (...args: any[]) => any
}

export declare const ResizablePanel: DefineComponent<ResizablePanelProps>

export interface ScrollAreaProps {
  /** Kaydırma ekseni. */
  orientation?: 'vertical' | 'horizontal' | 'both'
  /** CSS uzunluğu (`"16rem"`, `"50vh"`); sayı verilirse piksel. Boşsa yükseklik ebeveynden gelir. */
  maxHeight?: string | number
  /** Kenar solması: yalnız devamı olan kenarda görünür. */
  fade?: boolean
  /** İçerik taştığında bölgenin erişilebilir adı; verilmezse `ui.scrollArea.ariaLabel`. */
  ariaLabel?: string
}

export declare const ScrollArea: DefineComponent<ScrollAreaProps>

export interface SectionProps {
  title?: string
  description?: string
  icon?: string
  /** `false`: üstteki sekme / segment konumu zaten gösteriyorsa etiketli ayırıcı çizilmez */
  showDivider?: boolean
}

export declare const Section: DefineComponent<SectionProps>

export interface SegmentProps {
  value: string | number | boolean
  label: string
  /** Font Awesome ikon adı; `iconOnly` veya dar düzenlerde yalnız ikon gösterilir */
  icon?: string
  iconType?: 'duotone'
  disabled?: boolean
  /** `vue-router` hedefi; verildiğinde segment `<a>` olarak çizilir (gezinme kapsülü). Seçili durum yine grubun `modelValue` değerinden gelir; seçili bağlantı `aria-current="page"` alır. */
  to?: RouteLocationRaw
}

export declare const Segment: DefineComponent<SegmentProps>

export interface SegmentGroupProps {
  modelValue?: string | number | boolean
  size?: 'md'
  /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
  direction?: 'horizontal' | 'vertical'
  /** Yalnız ikon; etiketler ekran okuyucu için gizli kalır. `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 1023px`). */
  iconOnly?: 'mobile' | boolean
  /** false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) */
  block?: boolean
  /** Yatay taşmada grup içinde kaydırma; seçili segment ortalanır. Varsayılan açık — dar kart / mobil’de etiketler patlamasın. Dikey yönde etkisiz. `block=false` (fit) gruplarda da taşmayı keser. */
  scrollable?: boolean
  /** Seçili zemin yeni seçilinin arkasına kayarak geçer (yolda hafif büyür). `false`: her segment kendi zeminini çizer (eski davranış). */
  animated?: boolean
  /** Gezinme kapsülü: segmentler `to` ile bağlantıdır, grup `radiogroup` rolü taşımaz. Erişilebilir ad sarmalayan `<nav aria-label>` öğesinden gelir; `modelValue` etkin rotanın değeridir. */
  navigation?: boolean
  /** `radiogroup` erişilebilir adı */
  ariaLabel?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const SegmentGroup: DefineComponent<SegmentGroupProps>

export interface SelectProps {
  variant?: 'field' | 'inline'
  size?: 'md' | 'lg' | 'sm'
  modelValue?: string | number | boolean | unknown[]
  /** Çoklu seçim — `modelValue` dizi; tetikleyicide etiketler + arama, listede onay işareti */
  multiple?: boolean
  options?: unknown[]
  disabled?: boolean
  loading?: boolean
  placeholder?: string
  clearable?: boolean
  filterable?: boolean
  filterPlaceholder?: string
  /** Tetikleyici sol ikon (`ui-icon` `name`) */
  prefixIcon?: string
  name?: string
  id?: string
  ariaDescribedby?: string
  block?: boolean
  matchTriggerWidth?: boolean
  /** Seçenek panelinin sabit genişliği (ör. `'18rem'`). Özel `#trigger` ile açılan ve seçenekleri açılınca yüklenen listelerde panel boş/iskelet hâliyle daralmaz. */
  width?: string | number
  scrollListThreshold?: number
  /** Sunucu tarafı arama — liste yerel filtrelenmez; `filter-change` yayınlanır */
  remoteFilter?: boolean
  /** Liste açık durumu — `v-model:open` ile kontrol edilebilir */
  open?: boolean
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
  'onUpdate:open'?: (...args: any[]) => any
  'onFilterChange'?: (...args: any[]) => any
}

export declare const Select: DefineComponent<SelectProps>

export interface SelectionIndicatorProps {
  /** Seçili öğe seçicisi (kapsayıcı içinde aranır). */
  selector: string
}

export declare const SelectionIndicator: DefineComponent<SelectionIndicatorProps>

export interface SheetProps {
  /** `v-model:open` */
  open?: boolean
  /** `left` | `right` */
  side?: 'left' | 'right'
  /** `true` — karartmalı tam ekran katman (modal). `false` — arka plan etkileşime açık kalır; değişiklikler anında görünür. */
  overlay?: boolean
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  description?: string
  icon?: string
  iconType?: 'solid' | 'regular' | 'brands' | 'light' | 'duotone' | 'thin'
  showClose?: boolean
  closeLabel?: string
  bodyPadding?: 'default' | 'none'
  bodyLayout?: 'default' | 'flex'
  headerDivider?: boolean
  /** Footer üst kenar çizgisi — `false` ile border-t kalkar. */
  footerBorder?: boolean
  /** Dar viewport’ta (`max-width: 1023px`) panel tam genişlik. */
  fullOnMobile?: boolean
  ariaLabel?: string
  initialFocus?: boolean
  'onUpdate:open'?: (...args: any[]) => any
  'onAfterLeave'?: (...args: any[]) => any
}

export declare const Sheet: DefineComponent<SheetProps>

export interface SidebarItemProps {
  to?: RouteLocationRaw
  nativeType?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  prefixIcon?: string
  suffixIcon?: string
  cubed?: boolean
  block?: boolean
  disabled?: boolean
  active?: boolean
  textAlign?: 'center' | 'left'
  'onClick'?: (...args: any[]) => any
}

export declare const SidebarItem: DefineComponent<SidebarItemProps>

export interface SkeletonProps {
  variant?: 'line' | 'circle' | 'block' | 'pill'
  loading?: boolean
  /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
  size?: 'md'
  /** Kutu modu: alt alta bu kadar satır çizer (son satırlar kısalır) — metin bloğu yer tutucusu. */
  lines?: number
  /** Sarmalayıcı mod: iskelet ancak yükleme bu süreden (ms) uzun sürerse görünür. Hızlı yanıtta iskelet hiç çizilmez; yer yine de ayrılır (görünmez iskelet), içerik zıplamaz. */
  delay?: number
  /** Sarmalayıcı mod: iskelet bir kez göründüyse en az bu süre (ms) kalır — yanıp sönmez. */
  minDuration?: number
}

export declare const Skeleton: DefineComponent<SkeletonProps>

export interface SliderProps {
  /** Tek değer; `range` açıkken `[alt, üst]` dizisi. */
  modelValue?: number | unknown[]
  /** İki tutamaçlı aralık seçimi. Kapalıyken (varsayılan) yerel `input[type=range]` çizilir. */
  range?: boolean
  /** `range`: iki tutamaç arasında korunacak en küçük fark (değer birimi). */
  minDistance?: number
  /** `range`: `(value) => string` — tutamacın `aria-valuetext` metni (örn. para biçimi). */
  formatValue?: (...args: any[]) => any
  min?: number
  max?: number
  step?: number
  label?: string
  /** Sağ üstte gösterilen biçimlendirilmiş değer (örn. para string’i). */
  valueText?: string
  minLabel?: string
  maxLabel?: string
  disabled?: boolean
  id?: string
  ariaDescribedby?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onInput'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
}

export declare const Slider: DefineComponent<SliderProps>

export interface StatProps {
  title?: string
  value?: string | number
  icon?: string
  iconType?: string
  /** Başlık ikonu tonu */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
  /** Başlık ikonu `ui-icon-tile` içinde, `color` zemininde */
  iconTile?: boolean
  /** Yüzde değişim; `undefined` satırı gizler, `null` yerini korur */
  change?: number
  /** Hazır değişim metni (biçimlendirmeyi geçersiz kılar), ör. “Yeni dönem” */
  changeText?: string
  /** Değişimin yanındaki nötr açıklama, ör. “(₺1.250)” veya “dünden” */
  changeLabel?: string
  /** Azalış iyi (gider, iptal, bekleme süresi) */
  invertTrend?: boolean
  /** `soft`: kart içi dolgulu kutu · `surface`: sayfa üzerinde kart yüzeyi · `plain`: kutusuz */
  variant?: 'soft' | 'surface' | 'plain'
  /** Değer ölçüsü: sm 18px · md 20px · lg 24px */
  size?: 'lg'
  /** Kart tıklanabilir (`click` yayar; Enter / Space ile de çalışır) */
  interactive?: boolean
  loading?: boolean
  'onClick'?: (...args: any[]) => any
}

export declare const Stat: DefineComponent<StatProps>

export interface StatGroupProps {
  /** Geniş ekrandaki en fazla sütun sayısı */
  columns?: number
  /** Dar ekranda en az sütun sayısı; `2` mobilde de metrikleri ikişer dizer */
  minColumns?: number
  ariaLabel?: string
}

export declare const StatGroup: DefineComponent<StatGroupProps>

export interface StepProps {
  /** Adım paneli görünür mü */
  active?: boolean
  /** Görünür olduğunda ilk form alanına odaklan (dialog içinde toolbar birincil alanı dahil) */
  autofocus?: boolean
}

export declare const Step: DefineComponent<StepProps>

export interface StepperProps {
  modelValue?: number
  steps: unknown[]
  /** `default` — daire + başlık (yatay / dikey). `pills` — hap ilerleme + `2/5 - Adım` etiketi (modal / kayıt formları için tercih). */
  variant?: 'default' | 'pills'
  direction?: 'horizontal' | 'vertical'
  interactive?: boolean
  /** `pills` varyantında sağdaki `1/5 - Adım` metni */
  showLabel?: boolean
  ariaLabel?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const Stepper: DefineComponent<StepperProps>

export interface SwitchProps {
  /** `v-model` */
  modelValue?: boolean
  disabled?: boolean
  id?: string
  ariaDescribedby?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
}

export declare const Switch: DefineComponent<SwitchProps>

export interface TabListProps {
  /** `tablist` erişilebilir adı (birden fazla sekme şeridi için önerilir). */
  ariaLabel?: string
}

export declare const TabList: DefineComponent<TabListProps>

export interface TabPanelProps {
  value: string | number
}

export declare const TabPanel: DefineComponent<TabPanelProps>

export interface TabTriggerProps {
  value: string | number
  /** Slot kullanılmazsa gösterilen metin. */
  label?: string
  /** `ui-icon` `name` — doluysa ikon + metin (veya yalnız ikon). */
  icon?: string
  iconType?: 'duotone'
  disabled?: boolean
  /** Doluysa sekme köşesinde sayı rozeti (ör. sepet adedi). */
  badge?: string | number
  /** Verilirse `ui-tabs` seçim durumunun üzerine yazar (menü tetikleyici sekmeler). */
  active?: boolean
  /** `menu` — `aria-haspopup` / `aria-expanded` (panel `aria-controls` kapatılır). */
  popup?: string
  /** `popup` doluysa menü açık/kapalı durumu. */
  expanded?: boolean
}

export declare const TabTrigger: DefineComponent<TabTriggerProps>

export interface TableProps {
  /** Sütun başlıkları sayfa kayarken görünür kalır (masaüstü). Üst boşluk `--ui-table-sticky-top`, zemin `--ui-table-sticky-bg` ile ayarlanır. */
  stickyHeader?: boolean
}

export declare const Table: DefineComponent<TableProps>

export interface TableBodyProps {

}

export declare const TableBody: DefineComponent<TableBodyProps>

export interface TableCellProps {
  colspan?: number
  align?: 'left' | 'center' | 'right'
  tone?: 'title' | 'secondary' | 'body'
  iconCol?: boolean
  empty?: boolean
  /** Seçim (onay kutusu) sütunu: dar, sabit genişlik. */
  selectCol?: boolean
}

export declare const TableCell: DefineComponent<TableCellProps>

export interface TableHeadProps {
  align?: 'left' | 'center' | 'right'
  width?: string
  iconCol?: boolean
  /** Seçim (onay kutusu) sütunu: dar, sabit genişlik. */
  selectCol?: boolean
}

export declare const TableHead: DefineComponent<TableHeadProps>

export interface TableHeaderProps {
  sticky?: boolean
}

export declare const TableHeader: DefineComponent<TableHeaderProps>

export interface TablePaginationProps {
  currentPage?: number
  lastPage?: number
  metaText?: string
  pageLabel?: string
  prevAriaLabel?: string
  nextAriaLabel?: string
  'onPrev'?: (...args: any[]) => any
  'onNext'?: (...args: any[]) => any
}

export declare const TablePagination: DefineComponent<TablePaginationProps>

export interface TableRowProps {
  hover?: 'none' | 'soft' | 'strong'
  clickable?: boolean
  /** Satır bir eylem taşır: odaklanabilir (`tabindex="0"`), Enter / Boşluk `click` yayar, iç denetimlere (düğme, bağlantı, alan) yapılan tıklama satırı tetiklemez. */
  interactive?: boolean
  selected?: boolean
  'onClick'?: (...args: any[]) => any
}

export declare const TableRow: DefineComponent<TableRowProps>

export interface TabsProps {
  /** Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). */
  modelValue?: string | number
  /** `line` — alt çizgi; `segmented` — düğme kartları (yatay: ikon üstte; dikey: yan ray). */
  variant?: 'line' | 'segmented'
  /** `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. */
  orientation?: 'horizontal' | 'vertical'
  /** `full` — segmented tab listesi tam genişlik (hub / show sayfaları). */
  fit?: 'full'
  /** Segmented yükseklik / tipografi — `sm` | `md` (varsayılan) | `lg`. */
  size?: 'sm' | 'md' | 'lg'
  /** Segmented iz arka planını kaldırır (mobil sabit üst şerit vb.). */
  transparent?: boolean
  /** Dar alanlarda (sheet, mobil) segmented listede yatay kaydırma — varsayılan açık. */
  scrollable?: boolean
  /** Button ile aynı satırda / hizada — tab yüksekliği button ile aynı kalır (`--ui-control-h-*`). Varsayılan kapalı: segmented tab bir kademe büyük (`--ui-tab-h-*`). */
  inlineControls?: boolean
  /** Native mobil alt dock — `cap-ios` / `cap-android` ile liquid glass veya opak blur. Web’de etkisiz; yalnızca `variant="segmented"` ile kullanılır. */
  nativeChrome?: boolean
  /** Dikey segmented ray — yalnız ikon; etiketler ekran okuyucu için gizli kalır. `true` — her zaman; `mobile` — dar viewport (`max-width: 1023px`). */
  iconOnly?: 'mobile' | boolean
  /** `segmented`: seçili zemin yeni sekmenin arkasına kayarak geçer (yolda hafif büyür). `false`: her tetikleyici kendi zeminini çizer (eski davranış). */
  animated?: boolean
  /** Kayan göstergenin son konumunu aynı anahtarlı şeritler arasında taşır. Her rotada yeniden kurulan sekme şeridi (sayfa başına `ui-tabs`) önceki sekmeden kayarak gelir; anahtarsız şerit anlık yerleşir. */
  indicatorKey?: string
  'onUpdate:modelValue'?: (...args: any[]) => any
}

export declare const Tabs: DefineComponent<TabsProps>

export interface TagProps {
  /** Ton — Badge ile aynı sözlük */
  color?: 'secondary' | 'primary' | 'success' | 'warning' | 'info' | 'danger'
  variant?: 'solid' | 'outline' | 'muted'
  size?: 'sm' | 'md' | 'lg'
  removable?: boolean
  'onRemove'?: (...args: any[]) => any
}

export declare const Tag: DefineComponent<TagProps>

export interface ThemeProviderProps {
  /** Kayıtlı tema id'si veya `defineTheme` paketi; verilmezse yalnızca mod / override uygulanır. */
  theme?: string | Record<string, unknown>
  /** `light` | `dark` | `system` (cihaz ayarı); verilmezse üst provider veya belge kökü. */
  mode?: 'light' | 'dark' | 'system'
  /** Token override'ları — düz harita veya `{ light, dark }`. */
  overrides?: Record<string, unknown>
  /** Bileşen varsayılanı override'ları (`iconType`, `buttonRounded`, …). */
  defaults?: Record<string, unknown>
  /** Kökte `--background` dolgusu. */
  background?: boolean
  tag?: string
}

export declare const ThemeProvider: DefineComponent<ThemeProviderProps>

export interface TimePickerProps {
  /** `HH:mm` (24 saat) */
  modelValue?: string
  /** Adım (dakika) */
  stepMinutes?: number
  placeholder?: string
  disabled?: boolean
  /** true: tetikleyici/popover yok — tekerlek panelini doğrudan yerleştir. */
  embedded?: boolean
  id?: string
  /** `ui-popover` panel genişliği — dar zaman seçici için */
  popoverWidth?: string | number
  'onUpdate:modelValue'?: (...args: any[]) => any
  'onChange'?: (...args: any[]) => any
}

export declare const TimePicker: DefineComponent<TimePickerProps>

export interface ToastProps {

}

export declare const Toast: DefineComponent<ToastProps>

export interface ToolbarProps {
  direction?: 'horizontal' | 'vertical'
  /** Yatay düzende sığmayan öğeler alt satıra kayar */
  wrap?: boolean
  /** Verilirse `role="toolbar"` ile erişilebilir ad */
  ariaLabel?: string
}

export declare const Toolbar: DefineComponent<ToolbarProps>

export interface TooltipProps {
  /** Boşsa yalnızca `content` slot’u kullanılabilir */
  label?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  /** Gecikme (ms) */
  showDelay?: number
  hideDelay?: number
  disabled?: boolean
}

export declare const Tooltip: DefineComponent<TooltipProps>

export declare const GOOGLE_FONTS_CATALOG: any

export declare function googleFontSelectOptions(...args: any[]): any

export declare function formatGoogleFontFamilyName(...args: any[]): any

export declare function buildGoogleFontsStylesheetUrl(...args: any[]): any

export declare function buildGoogleFontsLinkTag(...args: any[]): any

export declare function applyGoogleFontsForTheme(...args: any[]): any

export declare function applyGoogleFontsCatalogPreview(...args: any[]): any

export declare function resolveThemeFontFamilies(...args: any[]): any

export declare function applyUiTheme(
  theme: string | UiThemePackage,
  options?: { mode?: UiThemeModePreference; overrides?: UiThemeOverrides; inline?: boolean; root?: string | HTMLElement; transition?: boolean },
): Record<string, string>

export declare function setUiThemeMode(
  mode: UiThemeModePreference,
  target?: string | HTMLElement,
  options?: { transition?: boolean },
): void

export declare function getUiThemeMode(
  target?: string | HTMLElement,
): { mode: UiThemeMode; preference: UiThemeModePreference }

export declare function resolveUiThemeMode(preference?: UiThemeModePreference | null, fallback?: UiThemeMode): UiThemeMode

export declare function resolveSystemMode(): UiThemeMode

export declare function buildThemeModeScript(options?: { storageKey?: string; defaultMode?: UiThemeModePreference }): string

export declare const UI_THEME_MODE_EVENT: 'ui-theme-mode-change'

export declare const UI_THEME_TRANSITION_CLASS: string

export declare function clearUiTheme(...args: any[]): any

export declare function computeThemeVars(...args: any[]): any

export declare function buildThemeStyleAttr(...args: any[]): any

export declare function buildThemeEnforcementCss(...args: any[]): any

export declare function themeConfigToTokens(...args: any[]): any

export declare function withDerivedConfigBrandColors(...args: any[]): any

export declare function defineTheme(theme: Partial<UiThemePackage> & { id: string }): UiThemePackage

export declare function extendTheme(...args: any[]): any

export declare function isThemePackage(...args: any[]): any

export declare function buildThemeCss(...args: any[]): any

export declare function resolveThemeVars(...args: any[]): any

export declare const TOKEN_GROUPS: any

export declare const STATUS_TONES: readonly string[]

export declare const DERIVED_VARS: any

export declare const CARD_PADDING_SCALE: any

export declare const MIX_FROM_MAP: any

export declare const BACKDROP_BLUR_SCALE: any

export declare function expandTokens(...args: any[]): any

export declare function mergeTokens(...args: any[]): any

export declare function toCssVarName(...args: any[]): any

export declare function formatFontFamily(...args: any[]): any

export declare function pickContrastForeground(...args: any[]): any

export declare function ensureContrastForMode(...args: any[]): any

export declare function ensureLabelContrast(...args: any[]): any

export declare function contrastRatio(...args: any[]): any

export declare function colorToRgb(...args: any[]): any

export declare function colorToHex(color: string): string | null

export declare function hexToOklchString(color: string): string

export declare function rgbToOklch(...args: any[]): any

export declare function parseOklch(...args: any[]): any

export declare function oklchToRgb(...args: any[]): any

export declare function deriveBrandColorsFromPrimary(...args: any[]): any

export declare function parseHex(...args: any[]): any

export declare function parseOklchLightness(...args: any[]): any

export declare function relativeLuminance(...args: any[]): any

export declare function withDerivedBrandTokens(...args: any[]): any

export declare const UI_FORM_DIRTY_KEY: unique symbol

export declare const formDirtyMixin: any

export declare function setUiFeedbackHandler(...args: any[]): any

export declare function uiFeedback(...args: any[]): any

export declare const UI_FORM_ERRORS_KEY: unique symbol

export declare function createFormErrorsContext(...args: any[]): any

export declare function themeToDesignTokens(theme: string | UiThemePackage): Record<string, unknown>

export declare function resolveCssColorToHex(...args: any[]): any

export declare const TOKEN_LAYERS: any

export declare const FEW_PALETTE_ID: string

export declare const FEW_PRIMARY: string

export declare const FEW_PRIMARY_FOREGROUND: string

export declare const FEW_COLOR_SCALE: any

export declare function getFewPrimaryColors(...args: any[]): any

export declare function applyThemeCustomCss(...args: any[]): any

export declare function clearThemeCustomCss(...args: any[]): any

export declare const THEME_CUSTOM_CSS_ID: string

export declare const DEFAULT_THEME_ID: string

export declare function registerTheme(...args: any[]): any

export declare function getThemePackage(...args: any[]): any

export declare function listThemes(...args: any[]): any

export declare function resolveTheme(...args: any[]): any

export declare function getThemeCssPath(...args: any[]): any

export declare function provideUiDefaults(...args: any[]): any

export declare function setUiDefaults(...args: any[]): any

export declare function useUiDefaults(...args: any[]): any

export declare const uiDefaultsMixin: any

export declare function mergeUiDefaults(...args: any[]): any

export declare const BASE_UI_DEFAULTS: any

export declare const UI_DEFAULTS_KEY: unique symbol

export declare function applyUiDensity(...args: any[]): any

export declare const UI_DENSITIES: readonly string[]

export declare const iconTypeProp: any

export declare function themeIconTypeComputed(...args: any[]): any

export declare const UI_ICON_TYPES: readonly string[]

export declare const uiPortalMixin: any

export declare const UI_PORTAL_KEY: unique symbol

export declare function resolveThemeDefault(...args: any[]): any

export declare function resolveThemeControlSize(...args: any[]): any

export declare function resolveThemeIconType(...args: any[]): any

export declare function createUiId(prefix: string): string

export declare function createUiIdFactory(prefix: string): () => string

export declare function resetUiIds(): void

export declare function resolveControlSize(...args: any[]): any

export declare function resolveUiText(ctx: unknown, key: string, fallback: string): string

export declare function pickPassthroughAttrs(...args: any[]): any

export declare const CONTROL_SIZES: readonly string[]

export declare const SCALE_SIZES: readonly string[]

export declare const SIZE_SCALE: readonly string[]

export declare const UI_KEYBOARD_INSET_EVENT: string

export declare function readKeyboardInset(...args: any[]): any

export declare function visibleViewportBottom(...args: any[]): any

export declare function onVisibleViewportChange(...args: any[]): any

export declare function pushToast(payload?: UiToastPayload): number

export declare function dismissToast(id: number): void

export declare function clearToasts(): void

export declare function setToastExpanded(...args: any[]): any

export declare function toggleToastExpanded(...args: any[]): any

export declare const TOAST_GROUP_WINDOW_MS: number

export declare function requestConfirm(options?: UiConfirmOptions | string): Promise<boolean>

export declare function getPriceInputConfig(...args: any[]): any

export declare function setPriceInputConfig(...args: any[]): any

export declare const PRICE_FORMATS: readonly string[]

export declare function resolveCurrencyCode(...args: any[]): any

export declare function getCurrencySymbol(...args: any[]): any

export declare function formatCurrencyAmount(...args: any[]): any

export declare function sanitizeMoneyInput(...args: any[]): any

export declare function getMoneySeparators(...args: any[]): any

export declare function parseLocalizedMoneyInput(...args: any[]): any

export declare function formatMoneyInput(...args: any[]): any

export interface UiToastAction { label: string; onClick?: () => void; keepOpen?: boolean }
export interface UiToastPayload {
  title?: string
  description?: string
  color?: 'info' | 'success' | 'warning' | 'danger'
  /** ms; `0` yalnız elle kapanır. */
  duration?: number
  group?: boolean
  action?: UiToastAction
}
export declare function useToast(): {
  push: (payload?: UiToastPayload) => number
  dismiss: (id: number) => void
  clear: () => void
  info: (payload: string | UiToastPayload) => number
  success: (payload: string | UiToastPayload) => number
  warning: (payload: string | UiToastPayload) => number
  danger: (payload: string | UiToastPayload) => number
}

export declare function useDialog(initial?: boolean): {
  open: import('vue').Ref<boolean>
  show: () => void
  hide: () => void
  toggle: () => void
}

export interface UiConfirmOptions {
  title?: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  color?: UiTone
  icon?: string
  [key: string]: unknown
}
export declare function useConfirm(): { confirm: (options?: UiConfirmOptions | string) => Promise<boolean> }

export declare function getUiMessages(locale?: string): Record<string, unknown>

export declare function setUiTheme(
  theme: string | UiThemePackage,
  options?: { mode?: UiThemeModePreference; overrides?: UiThemeOverrides; inline?: boolean; defaults?: Record<string, unknown>; transition?: boolean },
): void

declare const UiLib: Plugin<[UiLibInstallOptions?]> & { install(app: App, options?: UiLibInstallOptions): void }
export default UiLib

declare module 'vue' {
  /** `app.use(UiLib)` ile kaydedilen global etiketler. */
  interface GlobalComponents {
    'ui-accordion': typeof Accordion
    UiAccordion: typeof Accordion
    'ui-accordion-item': typeof AccordionItem
    UiAccordionItem: typeof AccordionItem
    'ui-action-card': typeof ActionCard
    UiActionCard: typeof ActionCard
    'ui-action-card-list': typeof ActionCardList
    UiActionCardList: typeof ActionCardList
    'ui-action-group': typeof ActionGroup
    UiActionGroup: typeof ActionGroup
    'ui-ai-button': typeof AiButton
    UiAiButton: typeof AiButton
    'ui-alert': typeof Alert
    UiAlert: typeof Alert
    'ui-avatar': typeof Avatar
    UiAvatar: typeof Avatar
    'ui-avatar-group': typeof AvatarGroup
    UiAvatarGroup: typeof AvatarGroup
    'ui-badge': typeof Badge
    UiBadge: typeof Badge
    'ui-breadcrumb': typeof Breadcrumb
    UiBreadcrumb: typeof Breadcrumb
    'ui-breadcrumb-item': typeof BreadcrumbItem
    UiBreadcrumbItem: typeof BreadcrumbItem
    'ui-button': typeof Button
    UiButton: typeof Button
    'ui-card': typeof Card
    UiCard: typeof Card
    'ui-chart': typeof Chart
    UiChart: typeof Chart
    'ui-checkbox': typeof Checkbox
    UiCheckbox: typeof Checkbox
    'ui-checkbox-group': typeof CheckboxGroup
    UiCheckboxGroup: typeof CheckboxGroup
    'ui-chip-group': typeof ChipGroup
    UiChipGroup: typeof ChipGroup
    'ui-collapsible': typeof Collapsible
    UiCollapsible: typeof Collapsible
    'ui-color-picker': typeof ColorPicker
    UiColorPicker: typeof ColorPicker
    'ui-command': typeof Command
    UiCommand: typeof Command
    'ui-confirm-dialog': typeof ConfirmDialog
    UiConfirmDialog: typeof ConfirmDialog
    'ui-context-menu': typeof ContextMenu
    UiContextMenu: typeof ContextMenu
    'ui-currency-input': typeof CurrencyInput
    UiCurrencyInput: typeof CurrencyInput
    'ui-date-picker': typeof DatePicker
    UiDatePicker: typeof DatePicker
    'ui-date-range-picker': typeof DateRangePicker
    UiDateRangePicker: typeof DateRangePicker
    'ui-dialog': typeof Dialog
    UiDialog: typeof Dialog
    'ui-divider': typeof Divider
    UiDivider: typeof Divider
    'ui-dropdown': typeof Dropdown
    UiDropdown: typeof Dropdown
    'ui-empty': typeof Empty
    UiEmpty: typeof Empty
    'ui-field': typeof Field
    UiField: typeof Field
    'ui-field-action': typeof FieldAction
    UiFieldAction: typeof FieldAction
    'ui-file': typeof File
    UiFile: typeof File
    'ui-filter-chip': typeof FilterChip
    UiFilterChip: typeof FilterChip
    'ui-form-row': typeof FormRow
    UiFormRow: typeof FormRow
    'ui-guidance': typeof Guidance
    UiGuidance: typeof Guidance
    'ui-hover-card': typeof HoverCard
    UiHoverCard: typeof HoverCard
    'ui-icon': typeof Icon
    UiIcon: typeof Icon
    'ui-icon-picker': typeof IconPicker
    UiIconPicker: typeof IconPicker
    'ui-icon-tile': typeof IconTile
    UiIconTile: typeof IconTile
    'ui-input': typeof Input
    UiInput: typeof Input
    'ui-intro': typeof Intro
    UiIntro: typeof Intro
    'ui-kbd': typeof Kbd
    UiKbd: typeof Kbd
    'ui-list': typeof List
    UiList: typeof List
    'ui-list-item': typeof ListItem
    UiListItem: typeof ListItem
    'ui-menu': typeof Menu
    UiMenu: typeof Menu
    'ui-menu-group': typeof MenuGroup
    UiMenuGroup: typeof MenuGroup
    'ui-menu-item': typeof MenuItem
    UiMenuItem: typeof MenuItem
    'ui-menu-nav': typeof MenuNav
    UiMenuNav: typeof MenuNav
    'ui-menubar': typeof Menubar
    UiMenubar: typeof Menubar
    'ui-pagination': typeof Pagination
    UiPagination: typeof Pagination
    'ui-password': typeof Password
    UiPassword: typeof Password
    'ui-phone': typeof Phone
    UiPhone: typeof Phone
    'ui-photo': typeof Photo
    UiPhoto: typeof Photo
    'ui-photos': typeof Photos
    UiPhotos: typeof Photos
    'ui-pin': typeof Pin
    UiPin: typeof Pin
    'ui-popover': typeof Popover
    UiPopover: typeof Popover
    'ui-price-display': typeof PriceDisplay
    UiPriceDisplay: typeof PriceDisplay
    'ui-price-display-group': typeof PriceDisplayGroup
    UiPriceDisplayGroup: typeof PriceDisplayGroup
    'ui-price-display-row': typeof PriceDisplayRow
    UiPriceDisplayRow: typeof PriceDisplayRow
    'ui-price-input': typeof PriceInput
    UiPriceInput: typeof PriceInput
    'ui-price-text': typeof PriceText
    UiPriceText: typeof PriceText
    'ui-progress': typeof Progress
    UiProgress: typeof Progress
    'ui-radio': typeof Radio
    UiRadio: typeof Radio
    'ui-radio-group': typeof RadioGroup
    UiRadioGroup: typeof RadioGroup
    'ui-resizable-group': typeof ResizableGroup
    UiResizableGroup: typeof ResizableGroup
    'ui-resizable-handle': typeof ResizableHandle
    UiResizableHandle: typeof ResizableHandle
    'ui-resizable-panel': typeof ResizablePanel
    UiResizablePanel: typeof ResizablePanel
    'ui-scroll-area': typeof ScrollArea
    UiScrollArea: typeof ScrollArea
    'ui-section': typeof Section
    UiSection: typeof Section
    'ui-segment': typeof Segment
    UiSegment: typeof Segment
    'ui-segment-group': typeof SegmentGroup
    UiSegmentGroup: typeof SegmentGroup
    'ui-select': typeof Select
    UiSelect: typeof Select
    'ui-selection-indicator': typeof SelectionIndicator
    UiSelectionIndicator: typeof SelectionIndicator
    'ui-sheet': typeof Sheet
    UiSheet: typeof Sheet
    'ui-sidebar-item': typeof SidebarItem
    UiSidebarItem: typeof SidebarItem
    'ui-skeleton': typeof Skeleton
    UiSkeleton: typeof Skeleton
    'ui-slider': typeof Slider
    UiSlider: typeof Slider
    'ui-stat': typeof Stat
    UiStat: typeof Stat
    'ui-stat-group': typeof StatGroup
    UiStatGroup: typeof StatGroup
    'ui-step': typeof Step
    UiStep: typeof Step
    'ui-stepper': typeof Stepper
    UiStepper: typeof Stepper
    'ui-switch': typeof Switch
    UiSwitch: typeof Switch
    'ui-tab-list': typeof TabList
    UiTabList: typeof TabList
    'ui-tab-panel': typeof TabPanel
    UiTabPanel: typeof TabPanel
    'ui-tab-trigger': typeof TabTrigger
    UiTabTrigger: typeof TabTrigger
    'ui-table': typeof Table
    UiTable: typeof Table
    'ui-table-body': typeof TableBody
    UiTableBody: typeof TableBody
    'ui-table-cell': typeof TableCell
    UiTableCell: typeof TableCell
    'ui-table-head': typeof TableHead
    UiTableHead: typeof TableHead
    'ui-table-header': typeof TableHeader
    UiTableHeader: typeof TableHeader
    'ui-table-pagination': typeof TablePagination
    UiTablePagination: typeof TablePagination
    'ui-table-row': typeof TableRow
    UiTableRow: typeof TableRow
    'ui-tabs': typeof Tabs
    UiTabs: typeof Tabs
    'ui-tag': typeof Tag
    UiTag: typeof Tag
    'ui-theme-provider': typeof ThemeProvider
    UiThemeProvider: typeof ThemeProvider
    'ui-time-picker': typeof TimePicker
    UiTimePicker: typeof TimePicker
    'ui-toast': typeof Toast
    UiToast: typeof Toast
    'ui-toolbar': typeof Toolbar
    UiToolbar: typeof Toolbar
    'ui-tooltip': typeof Tooltip
    UiTooltip: typeof Tooltip
  }
}
