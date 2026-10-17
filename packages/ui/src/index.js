import ActionCard from './components/ActionCard.vue'
import ActionCardList from './components/ActionCardList.vue'
import ActionGroup from './components/ActionGroup.vue'
import AiButton from './components/AiButton.vue'
import Alert from './components/Alert.vue'
import Avatar from './components/Avatar.vue'
import AvatarGroup from './components/AvatarGroup.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import ColorPicker from './components/ColorPicker.vue'
import CurrencyInput from './components/CurrencyInput.vue'
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import DatePicker from './components/DatePicker.vue'
import DateRangePicker from './components/DateRangePicker.vue'
import Dialog from './components/Dialog.vue'
import Divider from './components/Divider.vue'
import Dropdown from './components/Dropdown.vue'
import Empty from './components/Empty.vue'
import Field from './components/Field.vue'
import FieldAction from './components/FieldAction.vue'
import File from './components/File.vue'
import FormRow from './components/FormRow.vue'
import Guidance from './components/Guidance.vue'
import Icon from './components/Icon.vue'
import IconPicker from './components/IconPicker.vue'
import Input from './components/Input.vue'
import Intro from './components/Intro.vue'
import PriceDisplay from './components/PriceDisplay.vue'
import PriceDisplayGroup from './components/PriceDisplayGroup.vue'
import PriceDisplayRow from './components/PriceDisplayRow.vue'
import PriceInput from './components/PriceInput.vue'
import PriceText from './components/PriceText.vue'
import Password from './components/Password.vue'
import Phone from './components/Phone.vue'
import Pin from './components/Pin.vue'
import List from './components/List.vue'
import ListItem from './components/ListItem.vue'
import Popover from './components/Popover.vue'
import Progress from './components/Progress.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Select from './components/Select.vue'
import Sheet from './components/Sheet.vue'
import Menu from './components/Menu.vue'
import MenuGroup from './components/MenuGroup.vue'
import MenuItem from './components/MenuItem.vue'
import MenuNav from './components/MenuNav.vue'
import SidebarItem from './components/SidebarItem.vue'
import Segment from './components/Segment.vue'
import SegmentGroup from './components/SegmentGroup.vue'
import Step from './components/Step.vue'
import Stepper from './components/Stepper.vue'
import Skeleton from './components/Skeleton.vue'
import Slider from './components/Slider.vue'
import Switch from './components/Switch.vue'
import Table from './components/Table.vue'
import TableBody from './components/TableBody.vue'
import TableCell from './components/TableCell.vue'
import TableHead from './components/TableHead.vue'
import TableHeader from './components/TableHeader.vue'
import TablePagination from './components/TablePagination.vue'
import TableRow from './components/TableRow.vue'
import Tag from './components/Tag.vue'
import TabList from './components/TabList.vue'
import TabPanel from './components/TabPanel.vue'
import Tabs from './components/Tabs.vue'
import ThemeProvider from './components/ThemeProvider.vue'
import TabTrigger from './components/TabTrigger.vue'
import TimePicker from './components/TimePicker.vue'
import Toast from './components/Toast.vue'
import Tooltip from './components/Tooltip.vue'
import Photo from './components/Photo.vue'
import Photos from './components/Photos.vue'
import en from './locales/en.js'
import tr from './locales/tr.js'
import { applyUiTheme } from './theme/apply-theme.js'
import { getThemePackage, registerTheme, resolveTheme } from './theme/registry.js'
import { provideUiDefaults, setUiDefaults } from './theme/ui-defaults.js'
import { setPriceInputConfig } from './price-input-config.js'

export {
  GOOGLE_FONTS_CATALOG,
  googleFontSelectOptions,
  formatGoogleFontFamilyName,
  buildGoogleFontsStylesheetUrl,
  buildGoogleFontsLinkTag,
  applyGoogleFontsForTheme,
  applyGoogleFontsCatalogPreview,
  resolveThemeFontFamilies,
} from './theme/google-fonts.js'
export {
  applyUiTheme,
  setUiThemeMode,
  clearUiTheme,
  computeThemeVars,
  buildThemeStyleAttr,
  buildThemeEnforcementCss,
  themeConfigToTokens,
  withDerivedConfigBrandColors,
} from './theme/apply-theme.js'
export { defineTheme, extendTheme, isThemePackage } from './theme/define-theme.js'
export { buildThemeCss, resolveThemeVars } from './theme/build-theme-css.js'
export {
  TOKEN_GROUPS,
  STATUS_TONES,
  DERIVED_VARS,
  CARD_PADDING_SCALE,
  MIX_FROM_MAP,
  BACKDROP_BLUR_SCALE,
  expandTokens,
  mergeTokens,
  toCssVarName,
  formatFontFamily,
} from './theme/tokens.js'
export {
  pickContrastForeground,
  ensureContrastForMode,
  deriveBrandColorsFromPrimary,
  parseHex,
  parseOklchLightness,
  relativeLuminance,
} from './theme/color-utils.js'
export { withDerivedBrandTokens } from './theme/derive-theme.js'
export {
  FEW_PALETTE_ID,
  FEW_PRIMARY,
  FEW_PRIMARY_FOREGROUND,
  FEW_COLOR_SCALE,
  getFewPrimaryColors,
} from './theme/few-palette.js'
export { applyThemeCustomCss, clearThemeCustomCss, THEME_CUSTOM_CSS_ID } from './theme/custom-css.js'
export {
  DEFAULT_THEME_ID,
  registerTheme,
  getThemePackage,
  listThemes,
  resolveTheme,
  getThemeCssPath,
} from './theme/registry.js'
export {
  provideUiDefaults,
  setUiDefaults,
  useUiDefaults,
  uiDefaultsMixin,
  mergeUiDefaults,
  BASE_UI_DEFAULTS,
  UI_DEFAULTS_KEY,
} from './theme/ui-defaults.js'
export { iconTypeProp, themeIconTypeComputed, UI_ICON_TYPES } from './theme/icon-type-prop.js'
export { uiPortalMixin, UI_PORTAL_KEY } from './theme/ui-portal.js'
export {
  resolveThemeDefault,
  resolveThemeControlSize,
  resolveThemeIconType,
} from './theme/resolve-theme-default.js'
export { createUiId, createUiIdFactory, resetUiIds } from './utils/ui-id.js'
export { resolveControlSize } from './utils/control-size.js'
export { resolveUiText } from './utils/resolve-ui-text.js'
export { pickPassthroughAttrs } from './utils/pick-passthrough-attrs.js'
export {
  pushToast,
  dismissToast,
  clearToasts,
  setToastExpanded,
  toggleToastExpanded,
  TOAST_GROUP_WINDOW_MS,
} from './toast-queue.js'
export { requestConfirm } from './confirm-state.js'
export { getPriceInputConfig, setPriceInputConfig, PRICE_FORMATS } from './price-input-config.js'
export {
  resolveCurrencyCode,
  getCurrencySymbol,
  formatCurrencyAmount,
  sanitizeMoneyInput,
  getMoneySeparators,
  parseLocalizedMoneyInput,
  formatMoneyInput,
} from './utils/currency.js'

export { useToast } from './composables/useToast.js'
export { useDialog } from './composables/useDialog.js'
export { useConfirm } from './composables/useConfirm.js'

export {
  ActionCard,
  ActionCardList,
  ActionGroup,
  AiButton,
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  ColorPicker,
  CurrencyInput,
  ConfirmDialog,
  DatePicker,
  DateRangePicker,
  Dialog,
  Divider,
  Dropdown,
  Empty,
  Field,
  FieldAction,
  File,
  FormRow,
  Guidance,
  Icon,
  IconPicker,
  Intro,
  Input,
  PriceInput,
  Password,
  Phone,
  Pin,
  List,
  ListItem,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Sheet,
  Menu,
  MenuGroup,
  MenuItem,
  MenuNav,
  SidebarItem,
  Segment,
  SegmentGroup,
  Skeleton,
  Slider,
  Step,
  Stepper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TablePagination,
  TableRow,
  Tag,
  TabList,
  TabPanel,
  Tabs,
  TabTrigger,
  ThemeProvider,
  TimePicker,
  Toast,
  Tooltip,
  Photo,
  Photos,
}

/** `LOCALE_PACKS` anahtarları — `getUiMessages` / `app.use(UiLib, { locales })` */
const LOCALE_PACKS = {
  en,
  tr,
}

/**
 * Kütüphane UI mesajlarını verilen locale koduna göre döndürür (manuel `mergeLocaleMessage` için).
 * @param {string} [locale='tr']
 */
export function getUiMessages(locale = 'tr') {
  return LOCALE_PACKS[locale] ?? LOCALE_PACKS.tr
}

/** Global tag names (`<ui-button>`, `<ui-card>`, …). */
const GLOBAL_COMPONENTS = [
  ['ui-action-card', ActionCard],
  ['ui-action-card-list', ActionCardList],
  ['ui-action-group', ActionGroup],
  ['ui-ai-button', AiButton],
  ['ui-alert', Alert],
  ['ui-avatar', Avatar],
  ['ui-avatar-group', AvatarGroup],
  ['ui-badge', Badge],
  ['ui-button', Button],
  ['ui-card', Card],
  ['ui-checkbox', Checkbox],
  ['ui-checkbox-group', CheckboxGroup],
  ['ui-color-picker', ColorPicker],
  ['ui-currency-input', CurrencyInput],
  ['ui-confirm-dialog', ConfirmDialog],
  ['ui-date-picker', DatePicker],
  ['ui-date-range-picker', DateRangePicker],
  ['ui-dialog', Dialog],
  ['ui-divider', Divider],
  ['ui-dropdown', Dropdown],
  ['ui-empty', Empty],
  ['ui-field', Field],
  ['ui-field-action', FieldAction],
  ['ui-file', File],
  ['ui-form-row', FormRow],
  ['ui-guidance', Guidance],
  ['ui-icon', Icon],
  ['ui-icon-picker', IconPicker],
  ['ui-intro', Intro],
  ['ui-input', Input],
  ['ui-price-display', PriceDisplay],
  ['ui-price-display-group', PriceDisplayGroup],
  ['ui-price-display-row', PriceDisplayRow],
  ['ui-price-input', PriceInput],
  ['ui-price-text', PriceText],
  ['ui-password', Password],
  ['ui-phone', Phone],
  ['ui-pin', Pin],
  ['ui-list', List],
  ['ui-list-item', ListItem],
  ['ui-popover', Popover],
  ['ui-progress', Progress],
  ['ui-radio', Radio],
  ['ui-radio-group', RadioGroup],
  ['ui-select', Select],
  ['ui-sheet', Sheet],
  ['ui-menu', Menu],
  ['ui-menu-group', MenuGroup],
  ['ui-menu-item', MenuItem],
  ['ui-menu-nav', MenuNav],
  ['ui-sidebar-item', SidebarItem],
  ['ui-segment', Segment],
  ['ui-segment-group', SegmentGroup],
  ['ui-skeleton', Skeleton],
  ['ui-slider', Slider],
  ['ui-step', Step],
  ['ui-stepper', Stepper],
  ['ui-switch', Switch],
  ['ui-table', Table],
  ['ui-table-body', TableBody],
  ['ui-table-cell', TableCell],
  ['ui-table-head', TableHead],
  ['ui-table-header', TableHeader],
  ['ui-table-pagination', TablePagination],
  ['ui-table-row', TableRow],
  ['ui-tag', Tag],
  ['ui-tab-list', TabList],
  ['ui-tab-panel', TabPanel],
  ['ui-tabs', Tabs],
  ['ui-tab-trigger', TabTrigger],
  ['ui-theme-provider', ThemeProvider],
  ['ui-time-picker', TimePicker],
  ['ui-tooltip', Tooltip],
  ['ui-toast', Toast],
  ['ui-photo', Photo],
  ['ui-photos', Photos],
]

/**
 * @typedef {import('./theme/define-theme.js').ThemePackage} ThemePackage
 * @typedef {import('./theme/apply-theme.js').UiThemeOverrides} UiThemeOverrides
 */

/**
 * @typedef {object} UiLibInstallOptions
 * @property {import('vue-i18n').I18n} i18n vue-i18n örneği (zorunlu — UI metinleri buraya yazılır)
 * @property {string} [locale] Birleştirilecek paket kodu (`LOCALE_PACKS` anahtarı). Verilmezse `i18n.global.locale` kullanılır.
 * @property {string[]} [locales] Birden fazla dil paketini aynı anda birleştir (örn. `['tr','en']`). Verilirse `locale` yok sayılır.
 * @property {string|ThemePackage} [theme] Kayıtlı tema id'si veya `defineTheme` paketi (paket otomatik kaydedilir)
 * @property {'light'|'dark'} [mode] Başlangıç modu; verilmezse kökteki `.dark` sınıfı korunur
 * @property {UiThemeOverrides} [overrides] Anlık token override'ları (`{ primary }` veya `{ light, dark }`)
 * @property {boolean} [inline] Tüm token'ları köke inline yazar (tema `color.css` import edilmediyse)
 * @property {Partial<import('./theme/defaults-base.js').UiThemeDefaults>} [defaults] Bileşen varsayılanı override'ları
 * @property {{currency?: string, format?: string, locale?: string}} [priceInput] `ui-price-input` global para birimi ve fiyat biçimi
 */

/** @type {import('./theme/defaults-base.js').UiThemeDefaults|null} */
let appDefaults = null

/**
 * Uygulama temasını çalışırken değiştirir: kök token'ları ve bileşen varsayılanları birlikte güncellenir.
 * @param {string|ThemePackage} theme
 * @param {import('./theme/apply-theme.js').ApplyThemeOptions & { defaults?: Partial<import('./theme/defaults-base.js').UiThemeDefaults> }} [options]
 * @returns {ThemePackage}
 */
export function setUiTheme(theme, options = {}) {
  const pkg = resolveTheme(theme)
  if (!getThemePackage(pkg.id)) registerTheme(pkg)
  applyUiTheme(pkg, options)
  if (appDefaults) setUiDefaults(appDefaults, { ...pkg.defaults, ...options.defaults })
  return pkg
}

/**
 * Vue plugin: `ui-*` bileşenlerini kaydeder; temayı ve bileşen varsayılanlarını uygular;
 * seçilen dil paket(ler)ini i18n'e `mergeLocaleMessage` ile ekler.
 * @param {import('vue').App} app
 * @param {UiLibInstallOptions} options
 */
function install(app, options = {}) {
  const { i18n, locale, locales, theme, mode, overrides, inline, defaults, priceInput } = options

  appDefaults = provideUiDefaults(app, defaults)
  if (theme) {
    setUiTheme(theme, { mode, overrides, inline, defaults })
  }
  if (priceInput) {
    setPriceInputConfig(priceInput)
  }

  if (i18n?.global?.mergeLocaleMessage) {
    const list =
      locales ??
      (locale != null
        ? [locale]
        : [
            typeof i18n.global.locale === 'string'
              ? i18n.global.locale
              : i18n.global.locale?.value ?? 'tr',
          ])

    for (const loc of list) {
      const pack = LOCALE_PACKS[loc]
      if (pack) {
        i18n.global.mergeLocaleMessage(loc, pack)
      } else if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
        console.warn(`[fewui] Bilinmeyen locale paketi: "${loc}". Mevcut: ${Object.keys(LOCALE_PACKS).join(', ')}`)
      }
    }
  } else if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.warn(
      '[fewui] app.use(UiLib, { i18n, locale: "tr" }) şeklinde i18n ve locale verin; aksi halde $t anahtarları çözülmez.',
    )
  }

  for (const [name, component] of GLOBAL_COMPONENTS) {
    app.component(name, component)
  }
}

export default {
  install,
}
