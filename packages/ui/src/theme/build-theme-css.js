import { DERIVED_VARS, expandFonts, expandTokens } from './tokens.js'

/**
 * @typedef {import('./define-theme.js').ThemePackage} ThemePackage
 */

/**
 * Light bloğu: fontlar + light token'ları + açıkça verilmemiş türetilmiş formüller.
 * @param {ThemePackage} pkg
 * @returns {Record<string, string>}
 */
function lightVars(pkg) {
  const vars = {
    ...expandFonts(pkg.preset.fonts),
    ...expandTokens(pkg.preset.tokens.light),
  }
  for (const [prop, value] of Object.entries(DERIVED_VARS)) {
    if (!(prop in vars)) vars[prop] = value
  }
  return vars
}

/**
 * Seçilen mod için tam CSS değişken haritası (inline / scoped uygulama için).
 * @param {ThemePackage} pkg
 * @param {'light'|'dark'} [mode='light']
 * @returns {Record<string, string>}
 */
export function resolveThemeVars(pkg, mode = 'light') {
  const vars = lightVars(pkg)
  if (mode === 'dark') {
    Object.assign(vars, expandTokens(pkg.preset.tokens.dark))
  }
  return vars
}

/**
 * @param {string} selector
 * @param {Record<string, string>} vars
 * @returns {string}
 */
function block(selector, vars) {
  const lines = Object.entries(vars).map(([prop, value]) => `  ${prop}: ${value};`)
  return `${selector} {\n${lines.join('\n')}\n}\n`
}

/**
 * Tema paketinden `color.css` üretir (`:root` light + `.dark` farkları).
 * @param {ThemePackage} pkg
 * @param {{ selector?: string, darkSelector?: string }} [options]
 * @returns {string}
 */
export function buildThemeCss(pkg, options = {}) {
  const selector = options.selector || ':root'
  const darkSelector = options.darkSelector || '.dark'
  const banner = `/* fewui theme "${pkg.id}" — preset.js'ten üretildi (buildThemeCss); elle düzenlemeyin. */\n`
  const dark = expandTokens(pkg.preset.tokens.dark)
  const darkBlock = Object.keys(dark).length ? block(darkSelector, dark) : ''
  return `${banner}${block(selector, lightVars(pkg))}${darkBlock}`
}
