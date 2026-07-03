/**
 * @param {import('fewui').UiThemeConfig} theme
 * @param {{ presetId?: string, customCss?: string }} [meta]
 */
export function exportThemeJson(theme, meta = {}) {
  return JSON.stringify({ presetId: meta.presetId || 'panel', theme, customCss: meta.customCss || '' }, null, 2)
}

/**
 * @param {import('fewui').UiThemeConfig} theme
 * @param {{ presetId?: string, customCss?: string }} [meta]
 */
export function exportCursorRule(theme, meta = {}) {
  const primary = theme.primaryColor || theme.primary || '#f97316'
  const mode = theme.mode || 'dark'
  const font = theme.fontFamily || 'Inter'
  return `---
description: FewUI theme tokens for this project
alwaysApply: true
---

# FewUI theme

Preset: **${meta.presetId || 'panel'}** · Mode: **${mode}**

## Tokens

- Primary: \`${primary}\`
- Font: \`${font}\`
- Use \`ui-*\` components from fewui; do not override with arbitrary Tailwind on components.
- Theme via \`applyUiTheme()\` / \`mergeUiTheme()\` — see Kit docs.

## Custom CSS

\`\`\`css
${meta.customCss || '/* optional */'}
\`\`\`

## Full theme JSON

\`\`\`json
${exportThemeJson(theme, meta)}
\`\`\`
`
}

/**
 * @param {import('fewui').UiThemeConfig} theme
 * @param {{ presetId?: string }} [meta]
 */
export function exportAgentSkill(theme, meta = {}) {
  const primary = theme.primaryColor || theme.primary || '#f97316'
  return `# FewUI Kit

FewUI is an AI-oriented UI framework: components, design tokens, Cursor rules, and agent skills work together.

## When to use

- Building Vue 3 admin or marketing UIs with \`ui-*\` components.
- Theming via \`UiThemeConfig\` and \`applyUiTheme\`.

## Theme for this project

- Preset: ${meta.presetId || 'panel'}
- Primary: ${primary}
- Mode: ${theme.mode || 'dark'}

## Rules

1. Prefer existing \`ui-button\`, \`ui-card\`, \`ui-form-row\`, \`ui-dialog\` — no raw HTML for standard patterns.
2. User-visible text via vue-i18n; no hardcoded strings in views.
3. API calls through the app's request utility, not raw fetch.
4. Do not add extra classes on fewui components to override styles.

## References

- Component playground: fewui docs /playground
- Theming: docs Kit → Theming
`
}

/**
 * @param {string} filename
 * @param {string} content
 */
export function downloadTextFile(filename, content) {
  if (typeof document === 'undefined') return
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
