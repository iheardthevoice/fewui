import ActionGroup from './components/ActionGroup.vue'
import Alert from './components/Alert.vue'
import Avatar from './components/Avatar.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import DatePicker from './components/DatePicker.vue'
import Dialog from './components/Dialog.vue'
import Dropdown from './components/Dropdown.vue'
import Empty from './components/Empty.vue'
import FormRow from './components/FormRow.vue'
import Icon from './components/Icon.vue'
import Input from './components/Input.vue'
import List from './components/List.vue'
import ListItem from './components/ListItem.vue'
import Phone from './components/Phone.vue'
import Pin from './components/Pin.vue'
import Popover from './components/Popover.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Segment from './components/Segment.vue'
import SegmentGroup from './components/SegmentGroup.vue'
import Select from './components/Select.vue'
import Skeleton from './components/Skeleton.vue'
import Switch from './components/Switch.vue'
import TabList from './components/TabList.vue'
import Tabs from './components/Tabs.vue'
import TabTrigger from './components/TabTrigger.vue'
import Toast from './components/Toast.vue'
import en from './locales/en.js'
import tr from './locales/tr.js'
import { applyUiTheme } from './theme/apply-theme.js'
import { resolveTheme } from './theme/registry.js'
import { provideUiDefaults } from './theme/ui-defaults.js'

export { createUiId, createUiIdFactory, resetUiIds } from './utils/ui-id.js'
export {
  pushToast,
  dismissToast,
  clearToasts,
  setToastExpanded,
  toggleToastExpanded,
  TOAST_GROUP_WINDOW_MS,
} from './toast-queue.js'
export { requestConfirm } from './confirm-state.js'

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
export { defineTheme, extendTheme } from './theme/define-theme.js'
export { resolveThemeVars } from './theme/build-theme-css.js'
export { expandTokens, mergeTokens, formatFontFamily } from './theme/tokens.js'
export {
  pickContrastForeground,
  ensureContrastForMode,
  deriveBrandColorsFromPrimary,
} from './theme/color-utils.js'
export { withDerivedBrandTokens } from './theme/derive-theme.js'
export {
  FEW_PALETTE_ID,
  FEW_PRIMARY,
  FEW_PRIMARY_FOREGROUND,
  FEW_COLOR_SCALE,
  getFewPrimaryColors,
} from './theme/few-palette.js'
export { applyThemeCustomCss, clearThemeCustomCss } from './theme/custom-css.js'
export {
  applyGoogleFontsForTheme,
  buildGoogleFontsLinkTag,
  buildGoogleFontsStylesheetUrl,
  googleFontSelectOptions,
  formatGoogleFontFamilyName,
  applyGoogleFontsCatalogPreview,
  GOOGLE_FONTS_CATALOG,
  resolveThemeFontFamilies,
} from './theme/google-fonts.js'
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

const LOCALE_PACKS = {
  en,
  tr,
}

const GLOBAL_COMPONENTS = [
  ['ui-action-group', ActionGroup],
  ['ui-alert', Alert],
  ['ui-avatar', Avatar],
  ['ui-badge', Badge],
  ['ui-button', Button],
  ['ui-card', Card],
  ['ui-confirm-dialog', ConfirmDialog],
  ['ui-date-picker', DatePicker],
  ['ui-dialog', Dialog],
  ['ui-dropdown', Dropdown],
  ['ui-empty', Empty],
  ['ui-form-row', FormRow],
  ['ui-icon', Icon],
  ['ui-input', Input],
  ['ui-list', List],
  ['ui-list-item', ListItem],
  ['ui-phone', Phone],
  ['ui-pin', Pin],
  ['ui-popover', Popover],
  ['ui-radio', Radio],
  ['ui-radio-group', RadioGroup],
  ['ui-segment', Segment],
  ['ui-segment-group', SegmentGroup],
  ['ui-select', Select],
  ['ui-skeleton', Skeleton],
  ['ui-switch', Switch],
  ['ui-tab-list', TabList],
  ['ui-tabs', Tabs],
  ['ui-tab-trigger', TabTrigger],
  ['ui-toast', Toast],
]

/**
 * @typedef {object} UiLibInstallOptions
 * @property {import('vue-i18n').I18n} i18n
 * @property {string} [locale]
 * @property {string[]} [locales]
 * @property {string|import('./theme/define-theme.js').ThemePackage} [theme]
 * @property {'light'|'dark'} [mode]
 * @property {import('./theme/apply-theme.js').UiThemeOverrides} [overrides]
 * @property {boolean} [inline]
 */

/**
 * Landing-only Vue plugin: registers the subset of `ui-*` components used on restta.com tenant sites.
 * @param {import('vue').App} app
 * @param {UiLibInstallOptions} options
 */
function install(app, options = {}) {
  const { i18n, locale, locales, theme, mode, overrides, inline } = options

  const pkg = theme ? resolveTheme(theme) : null
  provideUiDefaults(app, pkg?.defaults)
  if (pkg) {
    applyUiTheme(pkg, { mode, overrides, inline })
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
      }
    }
  }

  for (const [name, component] of GLOBAL_COMPONENTS) {
    app.component(name, component)
  }
}

export default {
  install,
}
