import { isThemePackage } from './define-theme.js'
import webTheme from '../../themes/web/index.js'
import liquidglassTheme from '../../themes/liquidglass/index.js'
import androidTheme from '../../themes/android/index.js'
import landingTheme from '../../themes/landing/index.js'
import fewuiTheme from '../../themes/fewui/index.js'

/**
 * @typedef {import('./define-theme.js').ThemePackage} ThemePackage
 */

export const DEFAULT_THEME_ID = 'web'

/** @type {Map<string, ThemePackage>} */
const THEMES = new Map()

/**
 * Tema paketini id ile kaydeder (aynı id'yi ezer).
 * @param {ThemePackage} pkg
 * @returns {ThemePackage}
 */
export function registerTheme(pkg) {
  if (!isThemePackage(pkg)) {
    throw new Error('[fewui] registerTheme: geçerli bir tema paketi bekleniyor (defineTheme).')
  }
  THEMES.set(pkg.id, pkg)
  return pkg
}

for (const pkg of [webTheme, liquidglassTheme, androidTheme, landingTheme, fewuiTheme]) {
  registerTheme(pkg)
}

/**
 * @param {string} id
 * @returns {ThemePackage|null}
 */
export function getThemePackage(id) {
  return THEMES.get(String(id || '').trim()) ?? null
}

/**
 * Kayıtlı temalar (kayıt sırasıyla).
 * @returns {ThemePackage[]}
 */
export function listThemes() {
  return [...THEMES.values()]
}

/**
 * Id veya paket → paket. Bilinmeyen id varsayılan temaya düşer.
 * @param {string|ThemePackage|null|undefined} input
 * @returns {ThemePackage}
 */
export function resolveTheme(input) {
  if (isThemePackage(input)) return input
  const pkg = getThemePackage(/** @type {string} */ (input) || DEFAULT_THEME_ID)
  if (pkg) return pkg
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.warn(`[fewui] Bilinmeyen tema "${input}", "${DEFAULT_THEME_ID}" kullanılıyor.`)
  }
  return /** @type {ThemePackage} */ (THEMES.get(DEFAULT_THEME_ID))
}

/**
 * Tema CSS bundle yolu (`fewui/themes/{id}.css`).
 * @param {string} id
 * @returns {string}
 */
export function getThemeCssPath(id) {
  return `fewui/themes/${resolveTheme(id).id}.css`
}
