import ActionGroup from './components/ActionGroup.vue'
import Alert from './components/Alert.vue'
import Avatar from './components/Avatar.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
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
import TabList from './components/TabList.vue'
import Tabs from './components/Tabs.vue'
import TabTrigger from './components/TabTrigger.vue'
import Toast from './components/Toast.vue'
import en from './locales/en.js'
import tr from './locales/tr.js'
import { applyUiTheme } from './theme/apply-theme.js'

export { createUiId, createUiIdFactory, resetUiIds } from './utils/ui-id.js'
export { pushToast, dismissToast, clearToasts } from './toast-queue.js'

export {
  applyUiTheme,
  mergeUiTheme,
  resolveThemeVars,
  buildThemeStyleAttr,
  buildThemeEnforcementCss,
} from './theme/apply-theme.js'
export {
  deriveBrandColorsFromPrimary,
  withDerivedBrandColors,
  resolvePrimaryColor,
} from './theme/derive-theme.js'
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
export { getThemePreset, resolveThemePreset } from './theme/presets/index.js'

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
  ['ui-tab-list', TabList],
  ['ui-tabs', Tabs],
  ['ui-tab-trigger', TabTrigger],
  ['ui-toast', Toast],
]

/**
 * @typedef {import('./theme/apply-theme.js').UiThemeConfig} UiThemeConfig
 */

/**
 * @typedef {object} UiLibInstallOptions
 * @property {import('vue-i18n').I18n} i18n
 * @property {string} [locale]
 * @property {string[]} [locales]
 * @property {UiThemeConfig} [theme]
 */

/**
 * Landing-only Vue plugin: registers the subset of `ui-*` components used on restta.com tenant sites.
 * @param {import('vue').App} app
 * @param {UiLibInstallOptions} options
 */
function install(app, options = {}) {
  const { i18n, locale, locales, theme } = options

  if (theme) {
    applyUiTheme(theme)
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
