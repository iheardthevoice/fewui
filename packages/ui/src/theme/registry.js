import { mergeUiTheme } from './apply-theme.js'
import { mergeUiDefaults } from './defaults-base.js'
import webTheme from '../../themes/web/index.js'
import liquidglassTheme from '../../themes/liquidglass/index.js'
import androidTheme from '../../themes/android/index.js'
import landingTheme from '../../themes/landing/index.js'
import fewuiTheme from '../../themes/fewui/index.js'

/**
 * @typedef {import('./defaults-base.js').UiThemeDefaults} UiThemeDefaults
 */

/**
 * @typedef {import('./apply-theme.js').UiThemeConfig} UiThemeConfig
 */

/**
 * @typedef {object} ThemePackageCss
 * @property {string} color
 * @property {string} [styles]
 * @property {{ ios?: string }} [platform]
 */

/**
 * @typedef {object} ThemePackage
 * @property {string} id
 * @property {string} label
 * @property {string} [description]
 * @property {UiThemeDefaults} defaults
 * @property {UiThemeConfig} preset
 * @property {ThemePackageCss} css
 */

/** @type {Record<string, ThemePackage>} */
export const THEME_PACKAGES = {
  web: webTheme,
  liquidglass: liquidglassTheme,
  android: androidTheme,
  landing: landingTheme,
  fewui: fewuiTheme,
}

/** @type {Array<'web'|'liquidglass'|'android'|'landing'|'fewui'>} */
export const THEME_IDS = ['web', 'liquidglass', 'android', 'landing', 'fewui']

/** Eski preset kimlikleri → tema paketi. */
export const LEGACY_PRESET_TO_THEME = {
  panel: 'web',
  flat: 'web',
  landing: 'landing',
}

/** Eski preset’lerin tema preset’ine ek override’ları. */
/** @type {Record<string, Partial<UiThemeConfig>>} */
export const LEGACY_PRESET_OVERRIDES = {
  panel: {
    mode: 'dark',
  },
  flat: {
    mode: 'dark',
    surfaceStyle: {
      mixFrom: 'background',
      opacity: 100,
      backdropBlur: 'none',
    },
    controlStyle: {
      mixFrom: 'background',
      opacity: 100,
      backdropBlur: 'none',
    },
    inputStyle: {
      mixFrom: 'background',
      opacity: 100,
      backdropBlur: 'none',
    },
  },
}

/**
 * @param {string} [input]
 * @returns {'web'|'liquidglass'|'android'|'landing'|'fewui'}
 */
export function resolveThemeId(input = 'web') {
  const key = String(input || 'web').trim()
  if (THEME_PACKAGES[key]) {
    return /** @type {'web'|'liquidglass'|'android'|'landing'|'fewui'} */ (key)
  }
  const mapped = LEGACY_PRESET_TO_THEME[key]
  if (mapped && THEME_PACKAGES[mapped]) {
    return /** @type {'web'|'liquidglass'|'android'|'landing'|'fewui'} */ (mapped)
  }
  return 'web'
}

/**
 * @param {string} [id]
 * @returns {ThemePackage}
 */
export function getThemePackage(id = 'web') {
  return THEME_PACKAGES[resolveThemeId(id)]
}

/**
 * Tema paketi + birleştirilmiş runtime config ve defaults.
 * @param {string} [id] Tema adı (`web`, `liquidglass`, …) veya eski preset (`panel`, `flat`, `landing`)
 * @param {Partial<UiThemeConfig>} [overrides] Anlık override (`primaryColor`, `mode`, …)
 * @returns {{ package: ThemePackage, id: string, config: UiThemeConfig, defaults: UiThemeDefaults }}
 */
export function resolveThemePackage(id = 'web', overrides = {}) {
  const rawId = String(id || 'web').trim()
  const themeId = resolveThemeId(rawId)
  const pkg = THEME_PACKAGES[themeId]
  const legacyOverrides = LEGACY_PRESET_OVERRIDES[rawId] || {}
  const basePreset = structuredClone(pkg.preset)
  const config = mergeUiTheme(mergeUiTheme(basePreset, legacyOverrides), overrides)
  const defaults = mergeUiDefaults(pkg.defaults)

  return {
    package: pkg,
    id: themeId,
    config,
    defaults,
  }
}

/**
 * Tema CSS bundle yolu (`fewui/themes/{id}.css`).
 * @param {string} [id]
 * @returns {string}
 */
export function getThemeCssPath(id = 'web') {
  const themeId = resolveThemeId(id)
  return `fewui/themes/${themeId}.css`
}
