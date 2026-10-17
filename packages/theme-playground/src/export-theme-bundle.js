import { strToU8, zipSync } from 'fflate'
import { buildThemeCss, defineTheme } from 'fewui'

/**
 * @typedef {object} ThemeExport `useThemePlayground().exportPackage()` çıktısı
 * @property {string} id
 * @property {string} label
 * @property {string} description
 * @property {string} baseThemeId
 * @property {import('fewui').UiThemePreset} preset
 * @property {Record<string, string>} defaults
 * @property {string} customCss
 */

/**
 * JS nesne literali (tek tırnak, güvenli anahtarlar).
 * @param {unknown} value
 * @param {string} [indent]
 * @returns {string}
 */
function toJsLiteral(value, indent = '') {
  const next = `${indent}  `
  if (value && typeof value === 'object') {
    const entries = Object.entries(value).map(([key, val]) => {
      const safeKey = /^([A-Za-z_$][\w$]*|\d+)$/.test(key) ? key : `'${key}'`
      return `${next}${safeKey}: ${toJsLiteral(val, next)},`
    })
    return entries.length ? `{\n${entries.join('\n')}\n${indent}}` : '{}'
  }
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  return JSON.stringify(value)
}

/**
 * @param {string} id
 * @returns {string}
 */
function presetName(id) {
  return `${id.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())}Preset`
}

/**
 * Tema paketi klasörünün dosyaları.
 * @param {ThemeExport} data
 * @returns {Record<string, string>}
 */
export function buildThemePackageFiles(data) {
  const pkg = defineTheme({
    id: data.id,
    label: data.label,
    description: data.description,
    preset: data.preset,
    defaults: data.defaults,
  })
  const name = presetName(pkg.id)

  return {
    'index.js': `import { defineTheme } from 'fewui'
import defaults from './defaults.js'
import { ${name} } from './preset.js'

export default defineTheme({
  id: ${toJsLiteral(pkg.id)},
  label: ${toJsLiteral(pkg.label)},
  description: ${toJsLiteral(pkg.description)},
  preset: ${name},
  defaults,
})
`,
    'preset.js': `/** @type {import('fewui').UiThemePreset} */\nexport const ${name} = ${toJsLiteral(pkg.preset)}\n`,
    'defaults.js': `export default ${toJsLiteral(pkg.defaults)}\n`,
    'color.css': buildThemeCss(pkg),
    'styles.css': data.customCss ? `${data.customCss.trim()}\n` : `/* ${pkg.label} — temaya özel kurallar */\n`,
    'theme.json': `${JSON.stringify(data, null, 2)}\n`,
    'README.md': `# ${pkg.label}

fewui tema paketi (v2) — create sayfasında üretildi.

\`\`\`js
import UiLib from 'fewui'
import theme from './themes/${pkg.id}/index.js'
import './themes/${pkg.id}/color.css'
import './themes/${pkg.id}/styles.css'

app.use(UiLib, { i18n, theme, mode: 'light' })
\`\`\`

- Token'ları değiştirince \`color.css\` dosyasını \`buildThemeCss(theme)\` ile yeniden üretin.
- Create sayfasına geri yüklemek için \`theme.json\` dosyasını içe aktarın.
`,
  }
}

/**
 * @param {ThemeExport} data
 * @returns {Blob}
 */
export function buildThemeZip(data) {
  const files = buildThemePackageFiles(data)
  /** @type {Record<string, Uint8Array>} */
  const entries = {}
  for (const [name, content] of Object.entries(files)) {
    entries[`${data.id}/${name}`] = strToU8(content)
  }
  return new Blob([zipSync(entries)], { type: 'application/zip' })
}

/**
 * @param {ThemeExport} data
 * @returns {string}
 */
export function exportCursorRule(data) {
  const light = data.preset.tokens.light
  return `---
description: fewui theme "${data.id}" for this project
alwaysApply: true
---

# fewui theme — ${data.label}

- Paket: \`themes/${data.id}/\` (\`defineTheme\`), CSS: \`themes/${data.id}/color.css\` (üretilir; elle düzenleme).
- Kurulum: \`app.use(UiLib, { i18n, theme })\`; mod değişimi \`setUiThemeMode('dark')\`.
- Ana renk: \`${light.primary ?? ''}\` · Yazı tipi: \`${data.preset.fonts?.body ?? ''}\` · Radius: \`${light.radius ?? ''}\`
- Bileşenler \`ui-*\`; fewui bileşenlerine ek class ile stil ezilmez.
- Ton \`color\` prop'u ile: \`primary | secondary | success | warning | info | danger\`; görsel stil \`variant\`.
- Tam genişlik \`block\`; event'ler kebab-case.
- Yeni renk gerekiyorsa token olarak \`preset.js\` içine eklenir, bileşende sabit renk yazılmaz.
`
}

/**
 * @param {ThemeExport} data
 * @returns {string}
 */
export function exportAgentSkill(data) {
  return `# fewui Kit — ${data.label}

## When to use

- Building Vue 3 admin or marketing UIs with \`ui-*\` components and the "${data.id}" theme package.

## Theme

- Package folder: \`themes/${data.id}/\` — \`preset.js\` holds light/dark tokens, \`defaults.js\` component defaults.
- \`color.css\` is generated with \`buildThemeCss(theme)\`; never edit it by hand.
- Scoped preview: \`<ui-theme-provider :theme="theme" mode="dark">\`.

## Rules

1. Prefer existing \`ui-button\`, \`ui-card\`, \`ui-form-row\`, \`ui-dialog\` — no raw HTML for standard patterns.
2. Tone via \`color\` (\`danger\`, not \`error\` / \`destructive\`); visual style via \`variant\`; full width via \`block\`.
3. User-visible text via vue-i18n; no hardcoded strings in views.
4. Do not add extra classes on fewui components to override styles.
`
}

/**
 * @param {string} filename
 * @param {Blob|string} content
 */
export function downloadFile(filename, content) {
  if (typeof document === 'undefined') return
  const blob = typeof content === 'string' ? new Blob([content], { type: 'text/plain;charset=utf-8' }) : content
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
