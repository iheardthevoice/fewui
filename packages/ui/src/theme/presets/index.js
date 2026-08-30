import { mergeUiTheme } from '../apply-theme.js'
import { resolveThemePackage } from '../registry.js'

/** @deprecated `THEME_PACKAGES` / `resolveThemePackage` kullanın. */
export const THEME_PRESETS = {
  get panel() {
    return resolveThemePackage('panel').config
  },
  get flat() {
    return resolveThemePackage('flat').config
  },
  get landing() {
    return resolveThemePackage('landing').config
  },
}

/** @deprecated `THEME_IDS` kullanın. */
export const THEME_PRESET_IDS = ['panel', 'flat', 'landing']

/**
 * @param {string} [id] Tema adı veya eski preset kimliği
 * @returns {import('../apply-theme.js').UiThemeConfig}
 */
export function getThemePreset(id = 'panel') {
  return structuredClone(resolveThemePackage(id).config)
}

/**
 * @param {string} presetId
 * @param {import('../apply-theme.js').UiThemeConfig} [overrides]
 * @returns {import('../apply-theme.js').UiThemeConfig}
 */
export function resolveThemePreset(presetId, overrides = {}) {
  return mergeUiTheme(getThemePreset(presetId), overrides)
}

export { resolveThemePackage, getThemePackage, resolveThemeId, THEME_IDS, THEME_PACKAGES } from '../registry.js'
