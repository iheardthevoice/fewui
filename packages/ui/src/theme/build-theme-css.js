import {
  DERIVED_VARS,
  DERIVED_DARK_VARS,
  RELATIVE_VARS,
  RELATIVE_DARK_VARS,
  RELATIVE_COLOR_SUPPORTS,
  expandFonts,
  expandTokens,
} from './tokens.js'

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
    Object.assign(vars, derivedDarkVars(pkg, DERIVED_DARK_VARS), expandTokens(pkg.preset.tokens.dark))
  }
  // Inline uygulamada `@supports` yok — çalışma anında kontrol edilir.
  const supportsRelative =
    typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('color', 'oklch(from red l c h)')
  if (supportsRelative) {
    const rel = mode === 'dark' ? RELATIVE_DARK_VARS : RELATIVE_VARS
    Object.assign(vars, explicitFree(pkg, rel, mode))
  }
  return vars
}

/** Preset'te (light veya dark) açıkça verilmiş anahtarlar türetilmiş değerle ezilmez. */
function explicitKeys(pkg) {
  return new Set([
    ...Object.keys(expandTokens(pkg.preset.tokens.light)),
    ...Object.keys(expandTokens(pkg.preset.tokens.dark || {})),
  ])
}

function derivedDarkVars(pkg, map) {
  const explicit = explicitKeys(pkg)
  return Object.fromEntries(Object.entries(map).filter(([k]) => !explicit.has(k)))
}

function explicitFree(pkg, map) {
  const explicit = explicitKeys(pkg)
  return Object.fromEntries(Object.entries(map).filter(([k]) => !explicit.has(k)))
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
  const dark = { ...derivedDarkVars(pkg, DERIVED_DARK_VARS), ...expandTokens(pkg.preset.tokens.dark) }
  const darkBlock = Object.keys(dark).length ? block(darkSelector, dark) : ''
  const relLight = explicitFree(pkg, RELATIVE_VARS)
  const relDark = explicitFree(pkg, RELATIVE_DARK_VARS)
  const indent = (css) => css.replace(/^/gm, '  ').replace(/^  $/gm, '')
  const relBlock = Object.keys(relLight).length || Object.keys(relDark).length
    ? `@supports ${RELATIVE_COLOR_SUPPORTS} {\n${indent(block(selector, relLight) + block(darkSelector, relDark))}}\n`
    : ''
  return `${banner}${block(selector, lightVars(pkg))}${darkBlock}${relBlock}`
}
