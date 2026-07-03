import { panelPreset } from './panel.js'
import { flatPreset } from './flat.js'
import { landingPreset } from './landing.js'
import { mergeUiTheme } from '../apply-theme.js'

/** @type {Record<string, import('../apply-theme.js').UiThemeConfig>} */
export const THEME_PRESETS = {
  panel: panelPreset,
  flat: flatPreset,
  landing: landingPreset,
}

/** @type {Array<'panel'|'flat'|'landing'>} */
export const THEME_PRESET_IDS = ['panel', 'flat', 'landing']

/**
 * @param {string} [id]
 * @returns {import('../apply-theme.js').UiThemeConfig}
 */
export function getThemePreset(id = 'panel') {
  const key = String(id || 'panel').trim()
  const base = THEME_PRESETS[key] || panelPreset
  return structuredClone(base)
}

/**
 * @param {string} presetId
 * @param {import('../apply-theme.js').UiThemeConfig} [overrides]
 * @returns {import('../apply-theme.js').UiThemeConfig}
 */
export function resolveThemePreset(presetId, overrides = {}) {
  return mergeUiTheme(getThemePreset(presetId), overrides)
}
