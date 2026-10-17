import { mergeUiDefaults } from './defaults-base.js'
import { mergeTokens } from './tokens.js'

/** @type {Record<string, string>} */
const REMOVED_TOKENS = {
  destructive: 'danger',
  destructiveForeground: 'dangerForeground',
  primaryColor: 'primary',
  secondaryColor: 'secondary',
}

/**
 * @typedef {import('./tokens.js').UiThemeTokens} UiThemeTokens
 * @typedef {import('./defaults-base.js').UiThemeDefaults} UiThemeDefaults
 */

/**
 * @typedef {object} UiThemeFonts
 * @property {string} [body] `--font-sans`
 * @property {string} [heading] `--font-heading` (yoksa body)
 */

/**
 * @typedef {object} UiThemePreset
 * @property {UiThemeFonts} [fonts]
 * @property {{ light: UiThemeTokens, dark: UiThemeTokens }} tokens `dark` yalnızca light'tan farklı değerleri taşır
 */

/**
 * @typedef {object} ThemePackage
 * @property {string} id
 * @property {string} label
 * @property {string} [description]
 * @property {UiThemePreset} preset
 * @property {UiThemeDefaults} defaults
 * @property {{ color?: string, styles?: string, platform?: Record<string, string> }} [css]
 */

/**
 * @typedef {object} ThemePackageInput
 * @property {string} id
 * @property {string} [label]
 * @property {string} [description]
 * @property {ThemePackage} [extends] Token, font ve varsayılanları bu paketten devralır
 * @property {Partial<UiThemePreset>} [preset]
 * @property {Partial<UiThemeDefaults>} [defaults]
 * @property {ThemePackage['css']} [css]
 */

const isDev = typeof import.meta !== 'undefined' && import.meta.env?.DEV

/**
 * @param {string} id
 * @param {UiThemeTokens} tokens
 * @param {string} mode
 */
function warnRemovedTokens(id, tokens, mode) {
  for (const key of Object.keys(tokens)) {
    if (REMOVED_TOKENS[key]) {
      console.warn(`[fewui] theme "${id}" (${mode}): "${key}" kaldırıldı, "${REMOVED_TOKENS[key]}" kullanın.`)
    }
  }
}

/**
 * Tema paketi tanımlar ve normalize eder.
 * @param {ThemePackageInput} input
 * @returns {ThemePackage}
 */
export function defineTheme(input) {
  if (!input || typeof input !== 'object' || !input.id) {
    throw new Error('[fewui] defineTheme: `id` zorunlu.')
  }
  const parent = input.extends
  const preset = input.preset || {}
  const light = mergeTokens(parent?.preset.tokens.light, preset.tokens?.light)
  const dark = mergeTokens(parent?.preset.tokens.dark, preset.tokens?.dark)

  if (isDev) {
    warnRemovedTokens(input.id, light, 'light')
    warnRemovedTokens(input.id, dark, 'dark')
  }

  return {
    id: String(input.id),
    label: input.label || String(input.id),
    description: input.description || '',
    preset: {
      fonts: { ...parent?.preset.fonts, ...preset.fonts },
      tokens: { light, dark },
    },
    defaults: mergeUiDefaults({ ...parent?.defaults, ...input.defaults }),
    css: input.css || {},
  }
}

/**
 * Paketin üzerine kısmi değişiklik uygular (kimlik korunur).
 * @param {ThemePackage} pkg
 * @param {{ fonts?: UiThemeFonts, tokens?: { light?: UiThemeTokens, dark?: UiThemeTokens }, defaults?: Partial<UiThemeDefaults> }} [patch]
 * @returns {ThemePackage}
 */
export function extendTheme(pkg, patch = {}) {
  return defineTheme({
    id: pkg.id,
    label: pkg.label,
    description: pkg.description,
    css: pkg.css,
    extends: pkg,
    preset: { fonts: patch.fonts, tokens: patch.tokens },
    defaults: patch.defaults,
  })
}

/**
 * @param {unknown} value
 * @returns {value is ThemePackage}
 */
export function isThemePackage(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      'id' in value &&
      'preset' in value &&
      value.preset &&
      typeof value.preset === 'object' &&
      'tokens' in value.preset,
  )
}
