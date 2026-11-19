#!/usr/bin/env node
/**
 * Bileşen kaynağından tek seferde üç çıktı üretir:
 *
 * 1. `types/index.d.ts`, `types/landing.d.ts` — paket tipleri + `ui-*` etiketleri için
 *    `GlobalComponents` bildirimi (IDE'de prop tamamlama).
 * 2. `types/components.json` — prop / event / slot verisi (araçlar ve yapay zekâ ajanları için).
 * 3. `apps/kit-docs/kit/components/*.md` — bileşen başına doküman sayfası ve kenar çubuğu listesi.
 *
 * Veri kaynağı bileşenin kendisidir: prop'lar çalışma anındaki tanımdan (`type`, `default`,
 * `validator`), açıklamalar kaynak dosyadaki JSDoc yorumlarından, slotlar şablondan okunur.
 * Elle tutulan tablo yoktur; bileşen değişince `pnpm --filter fewui run build:meta` yeter.
 *
 * `--check`: dosya yazmaz; üretilecek çıktı diskten farklıysa 1 ile çıkar (CI).
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const repoRoot = join(pkgRoot, '../..')
const typesDir = join(pkgRoot, 'types')
const docsDir = join(repoRoot, 'apps/kit-docs/kit/components')
const sidebarFile = join(repoRoot, 'apps/kit-docs/.vitepress/components-sidebar.json')
const examplesDir = join(repoRoot, 'apps/docs/src/examples')
const CHECK = process.argv.includes('--check')

/** Kenar çubuğu grupları — listede olmayan bileşen "Other" altına düşer. */
const CATEGORIES = {
  Actions: ['Button', 'AiButton', 'ActionGroup', 'FilterChip', 'ChipGroup', 'Segment', 'SegmentGroup'],
  Forms: [
    'FormRow', 'Input', 'Password', 'Phone', 'Pin', 'PriceInput', 'CurrencyInput', 'Select', 'Checkbox',
    'CheckboxGroup', 'Radio', 'RadioGroup', 'Switch', 'Slider', 'DatePicker', 'DateRangePicker', 'TimePicker',
    'ColorPicker', 'IconPicker', 'FieldAction',
  ],
  Overlays: [
    'Dialog', 'ConfirmDialog', 'Sheet', 'Popover', 'Dropdown', 'ContextMenu', 'Menubar', 'HoverCard', 'Tooltip',
    'Command', 'Guidance', 'Intro',
  ],
  Navigation: [
    'Tabs', 'TabList', 'TabTrigger', 'TabPanel', 'Breadcrumb', 'BreadcrumbItem', 'Pagination', 'TablePagination',
    'Stepper', 'Step', 'Menu', 'MenuGroup', 'MenuItem', 'MenuNav', 'SidebarItem',
  ],
  'Data display': [
    'Table', 'TableHeader', 'TableBody', 'TableRow', 'TableHead', 'TableCell', 'List', 'ListItem', 'Card',
    'ActionCard', 'ActionCardList', 'Accordion', 'AccordionItem', 'Collapsible', 'Avatar', 'AvatarGroup', 'Badge',
    'Tag', 'Kbd', 'Stat', 'StatGroup', 'Chart', 'Field', 'PriceDisplay', 'PriceDisplayGroup', 'PriceDisplayRow',
    'PriceText', 'Photo', 'Photos', 'File', 'Icon', 'IconTile',
  ],
  Feedback: ['Alert', 'Toast', 'Progress', 'Skeleton', 'Empty'],
  Layout: [
    'Section', 'Divider', 'Toolbar', 'ScrollArea', 'ResizableGroup', 'ResizablePanel', 'ResizableHandle',
    'ThemeProvider', 'SelectionIndicator',
  ],
}

/** Alt bileşen → örneği taşıyan kök bileşen. */
const FAMILY_ROOT = {
  TabList: 'Tabs', TabTrigger: 'Tabs', TabPanel: 'Tabs',
  TableHeader: 'Table', TableBody: 'Table', TableRow: 'Table', TableHead: 'Table', TableCell: 'Table',
  TablePagination: 'Table', ListItem: 'List', Step: 'Stepper', Radio: 'RadioGroup', CheckboxGroup: 'Checkbox',
  Segment: 'SegmentGroup', StatGroup: 'Stat', AvatarGroup: 'Avatar', ActionCardList: 'ActionCard',
  PriceDisplayGroup: 'PriceDisplay', PriceDisplayRow: 'PriceDisplay', MenuGroup: 'Menu', MenuItem: 'Menu',
  MenuNav: 'Menu', SidebarItem: 'Menu', AccordionItem: 'Accordion', BreadcrumbItem: 'Breadcrumb',
  ResizablePanel: 'ResizableGroup', ResizableHandle: 'ResizableGroup',
}

/** Örnek dosya adı kökü: `<Ad>Example.vue`; kökler için olası diğer adlar. */
const EXAMPLE_ALIASES = {
  Dropdown: ['DropdownMenu'], ResizableGroup: ['Resizable'], Menu: ['MenuRail'], RadioGroup: ['Radio'],
  SegmentGroup: ['Segment'], Slider: ['SliderRange'], Checkbox: ['CheckboxGroup'],
}

/** Elle yazılmış tipler — gevşek `any` yerine gerçek imza (en çok kullanılan API). */
const TYPED_EXPORTS = {
  useToast: `export interface UiToastAction { label: string; onClick?: () => void; keepOpen?: boolean }
export interface UiToastPayload {
  title?: string
  description?: string
  color?: 'info' | 'success' | 'warning' | 'danger'
  /** ms; \`0\` yalnız elle kapanır. */
  duration?: number
  group?: boolean
  action?: UiToastAction
}
export declare function useToast(): {
  push: (payload?: UiToastPayload) => number
  dismiss: (id: number) => void
  clear: () => void
  info: (payload: string | UiToastPayload) => number
  success: (payload: string | UiToastPayload) => number
  warning: (payload: string | UiToastPayload) => number
  danger: (payload: string | UiToastPayload) => number
}`,
  pushToast: 'export declare function pushToast(payload?: UiToastPayload): number',
  dismissToast: 'export declare function dismissToast(id: number): void',
  clearToasts: 'export declare function clearToasts(): void',
  useConfirm: `export interface UiConfirmOptions {
  title?: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  color?: UiTone
  icon?: string
  [key: string]: unknown
}
export declare function useConfirm(): { confirm: (options?: UiConfirmOptions | string) => Promise<boolean> }`,
  requestConfirm: 'export declare function requestConfirm(options?: UiConfirmOptions | string): Promise<boolean>',
  useDialog: `export declare function useDialog(initial?: boolean): {
  open: import('vue').Ref<boolean>
  show: () => void
  hide: () => void
  toggle: () => void
}`,
  getUiMessages: 'export declare function getUiMessages(locale?: string): Record<string, unknown>',
  resolveUiText: 'export declare function resolveUiText(ctx: unknown, key: string, fallback: string): string',
  createUiId: 'export declare function createUiId(prefix: string): string',
  createUiIdFactory: 'export declare function createUiIdFactory(prefix: string): () => string',
  resetUiIds: 'export declare function resetUiIds(): void',
  setUiTheme: `export declare function setUiTheme(
  theme: string | UiThemePackage,
  options?: { mode?: UiThemeModePreference; overrides?: UiThemeOverrides; inline?: boolean; defaults?: Record<string, unknown>; transition?: boolean },
): void`,
  applyUiTheme: `export declare function applyUiTheme(
  theme: string | UiThemePackage,
  options?: { mode?: UiThemeModePreference; overrides?: UiThemeOverrides; inline?: boolean; root?: string | HTMLElement; transition?: boolean },
): Record<string, string>`,
  setUiThemeMode: `export declare function setUiThemeMode(
  mode: UiThemeModePreference,
  target?: string | HTMLElement,
  options?: { transition?: boolean },
): void`,
  getUiThemeMode: `export declare function getUiThemeMode(
  target?: string | HTMLElement,
): { mode: UiThemeMode; preference: UiThemeModePreference }`,
  resolveUiThemeMode: 'export declare function resolveUiThemeMode(preference?: UiThemeModePreference | null, fallback?: UiThemeMode): UiThemeMode',
  resolveSystemMode: 'export declare function resolveSystemMode(): UiThemeMode',
  buildThemeModeScript: 'export declare function buildThemeModeScript(options?: { storageKey?: string; defaultMode?: UiThemeModePreference }): string',
  UI_THEME_MODE_EVENT: "export declare const UI_THEME_MODE_EVENT: 'ui-theme-mode-change'",
  themeToDesignTokens: 'export declare function themeToDesignTokens(theme: string | UiThemePackage): Record<string, unknown>',
  hexToOklchString: 'export declare function hexToOklchString(color: string): string',
  colorToHex: 'export declare function colorToHex(color: string): string | null',
  defineTheme: 'export declare function defineTheme(theme: Partial<UiThemePackage> & { id: string }): UiThemePackage',
}

const TYPES_PREAMBLE = `/* Bu dosya \`scripts/build-component-meta.mjs\` tarafından üretilir — elle düzenlemeyin. */
import type { App, DefineComponent, Plugin } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type UiTone = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger'
export type UiControlSize = 'sm' | 'md' | 'lg'
export type UiThemeMode = 'light' | 'dark'
/** system: cihazın açık / koyu ayarını izler. */
export type UiThemeModePreference = UiThemeMode | 'system'
export type UiThemeTokens = Record<string, string | number | Record<string, unknown>>
export type UiThemeOverrides = UiThemeTokens | { light?: UiThemeTokens; dark?: UiThemeTokens }
export interface UiThemePreset {
  fonts?: { body?: string; heading?: string }
  tokens: { light: UiThemeTokens; dark?: UiThemeTokens }
}
export interface UiThemeDefaults {
  iconType?: string
  buttonRounded?: 'lg' | 'full'
  controlSize?: UiControlSize
  buttonSize?: UiControlSize
  inputSize?: UiControlSize
  density?: 'comfortable' | 'compact'
  [key: string]: unknown
}
export interface UiThemePackage {
  id: string
  label?: string
  description?: string
  extends?: string | UiThemePackage
  preset: UiThemePreset
  defaults?: UiThemeDefaults
  css?: string
}
export interface UiLibInstallOptions {
  /** vue-i18n örneği; \`ui.*\` mesajları buna eklenir. */
  i18n?: unknown
  locale?: string
  /** Paketi olmayan dil İngilizceye düşer. */
  locales?: string[]
  theme?: string | UiThemePackage
  mode?: UiThemeModePreference
  overrides?: UiThemeOverrides
  inline?: boolean
  defaults?: UiThemeDefaults
  priceInput?: Record<string, unknown>
}
`

function read(path) {
  return readFileSync(path, 'utf8')
}

function kebab(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/** `src/index.js` içindeki `['ui-x', Ad]` kayıtları ve `import Ad from './components/Ad.vue'` satırları. */
function parseRegistry(entry) {
  const source = read(join(pkgRoot, entry))
  const files = new Map()
  for (const m of source.matchAll(/import (\w+) from '\.\/components\/([\w-]+\.vue)'/g)) files.set(m[1], m[2])
  const tags = []
  for (const m of source.matchAll(/\['(ui-[a-z0-9-]+)',\s*(\w+)\]/g)) tags.push({ tag: m[1], name: m[2] })
  return { files, tags }
}

function typeFromConstructors(type) {
  const list = Array.isArray(type) ? type : type == null ? [] : [type]
  const names = list.map((ctor) => {
    switch (ctor) {
      case String: return 'string'
      case Number: return 'number'
      case Boolean: return 'boolean'
      case Array: return 'unknown[]'
      case Object: return 'Record<string, unknown>'
      case Function: return '(...args: any[]) => any'
      case Date: return 'Date'
      case Symbol: return 'symbol'
      default: return 'unknown'
    }
  })
  return names.length ? [...new Set(names)] : ['unknown']
}

function formatDefault(value) {
  if (value === undefined) return ''
  if (typeof value === 'function') {
    try {
      const out = value()
      if (out !== undefined && typeof out !== 'function') return JSON.stringify(out)
    } catch {
      // Varsayılan üretici `this` isteyebilir.
    }
    return ''
  }
  return JSON.stringify(value)
}

/** Dosyadaki kısa dize sabitleri — `validator` bunlarla denenerek enum değerleri bulunur. */
function literalPool(script) {
  const pool = new Set()
  for (const m of script.matchAll(/'([A-Za-z0-9][A-Za-z0-9_-]{0,23})'/g)) pool.add(m[1])
  return [...pool]
}

function enumFromValidator(validator, pool) {
  if (typeof validator !== 'function') return null
  const accepts = (v) => {
    try {
      return validator(v) === true
    } catch {
      return false
    }
  }
  if (accepts('__fewui_not_a_value__')) return null
  const values = pool.filter(accepts)
  return values.length > 0 && values.length <= 24 ? values : null
}

/** Prop tanımının hemen üstündeki JSDoc / satır yorumu. */
function propDocs(script) {
  const docs = new Map()
  // Yorum gövdesi `*/` içeremez: yoksa eşleşme önceki bir yorumdan başlayıp araya giren kodu yutar.
  const re = /\/\*\*((?:(?!\*\/)[\s\S])*)\*\/\s*\n\s{4}(\w+):\s*[{[A-Z]/g
  const start = script.search(/\n\s{2}props:\s*\{/)
  for (const m of script.slice(Math.max(start, 0)).matchAll(re)) {
    const text = m[1]
      .split('\n')
      .map((line) => line.replace(/^\s*\*? ?/, '').trim())
      .filter((line) => line && !line.startsWith('@'))
      .join(' ')
    if (text && !docs.has(m[2])) docs.set(m[2], text)
  }
  return docs
}

function parseSlots(template) {
  const slots = new Map()
  for (const m of template.matchAll(/<slot\b([^>]*)>/g)) {
    const attrs = m[1]
    const name = /(?:^|\s)name="([^"]+)"/.exec(attrs)?.[1] ?? 'default'
    const props = [...attrs.matchAll(/(?:^|\s):([a-z][\w-]*)=/g)].map((p) => p[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase()))
    if (/v-bind="/.test(attrs)) props.push('…')
    const entry = slots.get(name) ?? new Set()
    props.forEach((p) => entry.add(p))
    slots.set(name, entry)
  }
  return [...slots].map(([name, props]) => ({ name, props: [...props] }))
}

function collectProps(component) {
  const merged = {}
  const visit = (def) => {
    if (!def) return
    for (const mixin of def.mixins ?? []) visit(mixin)
    if (def.extends) visit(def.extends)
    const props = def.props
    if (Array.isArray(props)) props.forEach((name) => { merged[name] = merged[name] ?? {} })
    else if (props) Object.assign(merged, props)
  }
  visit(component)
  return merged
}

function describeComponent({ tag, name, file }, component) {
  const source = read(join(pkgRoot, 'src/components', file))
  const script = /<script>([\s\S]*?)<\/script>/.exec(source)?.[1] ?? ''
  const template = /<template>([\s\S]*)<\/template>/.exec(source)?.[1] ?? ''
  const pool = literalPool(script)
  const docs = propDocs(script)

  const props = Object.entries(collectProps(component)).map(([prop, raw]) => {
    const def = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : { type: raw }
    const values = enumFromValidator(def.validator, pool)
    const base = typeFromConstructors(def.type)
    let types = base
    if (values && base.includes('string')) types = [...values.map((v) => `'${v}'`), ...base.filter((t) => t !== 'string')]
    if (prop === 'to') types = ['RouteLocationRaw']
    return {
      name: prop,
      type: types.join(' | '),
      required: def.required === true,
      default: formatDefault(def.default),
      description: docs.get(prop) ?? '',
    }
  })

  const emits = Array.isArray(component.emits) ? component.emits : Object.keys(component.emits ?? {})
  return { tag, name, file, props, events: emits, slots: parseSlots(template) }
}

function exampleFor(name) {
  const root = FAMILY_ROOT[name] ?? name
  const candidates = [name, ...(EXAMPLE_ALIASES[name] ?? []), root, ...(EXAMPLE_ALIASES[root] ?? [])]
  for (const candidate of candidates) {
    const file = join(examplesDir, `${candidate}Example.vue`)
    if (existsSync(file)) return { id: candidate, source: read(file) }
  }
  return null
}

// ---------------------------------------------------------------------------------------------
// Tipler

function propsInterface(meta) {
  const lines = meta.props.map((p) => {
    const doc = p.description ? `  /** ${p.description.replace(/\*\//g, '* /')} */\n` : ''
    return `${doc}  ${/^[a-zA-Z_$][\w$]*$/.test(p.name) ? p.name : `'${p.name}'`}${p.required ? '' : '?'}: ${p.type}`
  })
  for (const event of meta.events) {
    const handler = `on${event[0].toUpperCase()}${event.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`
    lines.push(`  '${handler}'?: (...args: any[]) => any`)
  }
  return `export interface ${meta.name}Props {\n${lines.join('\n')}\n}`
}

function looseExport(name, value) {
  if (TYPED_EXPORTS[name]) return TYPED_EXPORTS[name]
  if (typeof value === 'function') return `export declare function ${name}(...args: any[]): any`
  if (Array.isArray(value) && value.every((v) => typeof v === 'string')) return `export declare const ${name}: readonly string[]`
  if (typeof value === 'string') return `export declare const ${name}: string`
  if (typeof value === 'number') return `export declare const ${name}: number`
  if (typeof value === 'symbol') return `export declare const ${name}: unique symbol`
  return `export declare const ${name}: any`
}

function buildIndexTypes(metas, mod) {
  const byName = new Map(metas.map((m) => [m.name, m]))
  const parts = [TYPES_PREAMBLE]
  for (const meta of metas) {
    parts.push(propsInterface(meta))
    const exported = meta.name in mod
    parts.push(`${exported ? 'export ' : ''}declare const ${meta.name}: DefineComponent<${meta.name}Props>`)
  }
  for (const [name, value] of Object.entries(mod)) {
    if (name === 'default' || byName.has(name)) continue
    parts.push(looseExport(name, value))
  }
  parts.push(`declare const UiLib: Plugin<[UiLibInstallOptions?]> & { install(app: App, options?: UiLibInstallOptions): void }
export default UiLib`)
  const globals = metas.map((m) => `    '${m.tag}': typeof ${m.name}\n    Ui${m.name}: typeof ${m.name}`)
  parts.push(`declare module 'vue' {\n  /** \`app.use(UiLib)\` ile kaydedilen global etiketler. */\n  interface GlobalComponents {\n${globals.join('\n')}\n  }\n}`)
  return `${parts.join('\n\n')}\n`
}

function buildLandingTypes(metas, landingMod, mainMod) {
  const names = new Set(metas.map((m) => m.name))
  const lines = [
    "/* Bu dosya `scripts/build-component-meta.mjs` tarafından üretilir — elle düzenlemeyin. */",
    "import type { App, Plugin } from 'vue'",
    "import type { UiLibInstallOptions } from './index'",
    '',
  ]
  const reexport = []
  for (const [name, value] of Object.entries(landingMod)) {
    if (name === 'default') continue
    if ((names.has(name) && name in mainMod) || name in TYPED_EXPORTS || name in mainMod) reexport.push(name)
    else lines.push(looseExport(name, value))
  }
  if (reexport.length) lines.push(`export { ${reexport.join(', ')} } from './index'`)
  lines.push(
    '',
    'declare const UiLandingLib: Plugin<[UiLibInstallOptions?]> & { install(app: App, options?: UiLibInstallOptions): void }',
    'export default UiLandingLib',
    '',
  )
  return lines.join('\n')
}

// ---------------------------------------------------------------------------------------------
// Doküman sayfaları

function mdCell(text) {
  return String(text ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

function code(text) {
  return text ? `\`${String(text).replace(/\|/g, '\\|')}\`` : ''
}

function buildPage(meta, metas) {
  const example = exampleFor(meta.name)
  const lead = example ? /^\s*<!--\s*([\s\S]*?)\s*-->/.exec(example.source)?.[1]?.replace(/\s+/g, ' ') : ''
  const root = FAMILY_ROOT[meta.name]
  const family = metas.filter((m) => m.name !== meta.name && (FAMILY_ROOT[m.name] === (root ?? meta.name) || m.name === root))
  const exported = meta.exported

  const out = ['---', `title: ${meta.tag}`, 'outline: [2, 3]', '---', '', `# ${meta.tag}`, '']
  if (lead) out.push(lead, '')
  if (family.length) {
    out.push(`Used with: ${family.map((m) => `[\`${m.tag}\`](./${m.tag})`).join(' · ')}`, '')
  }
  if (example) {
    const body = example.source.replace(/^\s*<!--[\s\S]*?-->\s*/, '')
    out.push('## Example', '', `<ExampleFrame name="${example.id}" />`, '', '```vue', body.trimEnd(), '```', '')
  }
  out.push('## Usage', '')
  out.push(
    `Registered globally as \`<${meta.tag}>\` by \`app.use(UiLib)\`.${
      exported ? ` Local import: \`import { ${meta.name} } from 'fewui'\`.` : ''
    }`,
    '',
  )
  if (meta.props.length) {
    out.push('## Props', '', '| Prop | Type | Default | Description |', '| --- | --- | --- | --- |')
    for (const p of meta.props) {
      out.push(`| ${code(kebab(p.name))}${p.required ? ' *' : ''} | ${code(p.type)} | ${code(p.default)} | ${mdCell(p.description)} |`)
    }
    out.push('')
    if (meta.props.some((p) => p.required)) out.push('\\* required', '')
  }
  if (meta.events.length) {
    out.push('## Events', '', '| Event | Listener |', '| --- | --- |')
    for (const e of meta.events) out.push(`| ${code(e)} | ${code(`@${e}`)} |`)
    out.push('')
  }
  if (meta.slots.length) {
    out.push('## Slots', '', '| Slot | Slot props |', '| --- | --- |')
    for (const s of meta.slots) out.push(`| ${code(s.name)} | ${s.props.map(code).join(', ')} |`)
    out.push('')
  }
  return out.join('\n')
}

function buildSidebar(metas) {
  const categoryOf = (name) => Object.entries(CATEGORIES).find(([, names]) => names.includes(name))?.[0] ?? 'Other'
  const groups = new Map([...Object.keys(CATEGORIES), 'Other'].map((c) => [c, []]))
  for (const meta of metas) groups.get(categoryOf(meta.name)).push({ text: meta.tag, link: `/kit/components/${meta.tag}` })
  return [...groups]
    .filter(([, items]) => items.length)
    .map(([text, items]) => ({ text, collapsed: false, items: items.sort((a, b) => a.text.localeCompare(b.text)) }))
}

function buildIndexPage(metas, sidebar) {
  const out = [
    '---',
    'title: Components',
    '---',
    '',
    '# Components',
    '',
    `fewui registers **${metas.length}** global \`ui-*\` components. Every page lists props, events and slots generated from the component source, and most include a live example with copy-paste code.`,
    '',
  ]
  for (const group of sidebar) {
    out.push(`## ${group.text}`, '')
    out.push(group.items.map((item) => `[\`${item.text}\`](./${item.text})`).join(' · '), '')
  }
  return out.join('\n')
}

/** Yapay zekâ ajanları için site dizini (llmstxt.org biçimi). */
function buildLlmsTxt(metas, sidebar) {
  const site = 'https://fewui-kit.pages.dev'
  const out = [
    '# fewui',
    '',
    `> Vue 3 design system: ${metas.length} globally registered \`ui-*\` components, theme packages, Tailwind v4 component styles. Plain JavaScript (Options API) with generated TypeScript declarations.`,
    '',
    'Rules that apply everywhere: never put appearance classes on a `ui-*` component (use props); `color` is the tone (primary, secondary, success, warning, info, danger) and `variant` is the visual style; visibility is `open` + `update:open`; form controls go inside `ui-form-row`.',
    '',
    '## Guide',
    '',
    `- [Getting started](${site}/kit/getting-started.html): install, CSS setup, plugin registration`,
    `- [Theming](${site}/kit/theming.html): theme packages, tokens, scoped preview`,
    `- [Localization & RTL](${site}/kit/localization.html): languages, dates, week start, right-to-left`,
    `- [Accessibility](${site}/kit/accessibility.html): guarantees and responsibilities`,
    `- [TypeScript & tooling](${site}/kit/tooling.html): types, components.json, checks`,
    '',
  ]
  for (const group of sidebar) {
    out.push(`## ${group.text}`, '')
    for (const item of group.items) {
      const meta = metas.find((m) => m.tag === item.text)
      const props = meta.props.map((p) => p.name).slice(0, 12).join(', ')
      out.push(`- [${item.text}](${site}${item.link}.html)${props ? `: props ${props}` : ''}`)
    }
    out.push('')
  }
  return out.join('\n')
}

// ---------------------------------------------------------------------------------------------

async function main() {
  const server = await createServer({
    root: pkgRoot,
    configFile: false,
    logLevel: 'error',
    plugins: [vue()],
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  })

  let outputs
  try {
    const registry = parseRegistry('src/index.js')
    const mod = await server.ssrLoadModule('/src/index.js')
    const landingMod = await server.ssrLoadModule('/src/landing.js')

    const metas = []
    for (const entry of registry.tags) {
      const file = registry.files.get(entry.name)
      if (!file) throw new Error(`[build-component-meta] ${entry.name} için import bulunamadı`)
      const component = mod[entry.name] ?? (await server.ssrLoadModule(`/src/components/${file}`)).default
      const meta = describeComponent({ ...entry, file }, component)
      meta.exported = entry.name in mod
      metas.push(meta)
    }

    const sidebar = buildSidebar(metas)
    outputs = new Map()
    outputs.set(join(typesDir, 'index.d.ts'), buildIndexTypes(metas, mod))
    outputs.set(join(typesDir, 'landing.d.ts'), buildLandingTypes(metas, landingMod, mod))
    outputs.set(
      join(typesDir, 'components.json'),
      `${JSON.stringify(metas.map(({ exported, file, ...rest }) => rest), null, 2)}\n`,
    )
    outputs.set(sidebarFile, `${JSON.stringify(sidebar, null, 2)}\n`)
    outputs.set(join(docsDir, 'index.md'), buildIndexPage(metas, sidebar))
    for (const meta of metas) outputs.set(join(docsDir, `${meta.tag}.md`), `${buildPage(meta, metas)}\n`)
    outputs.set(join(repoRoot, 'apps/kit-docs/public/llms.txt'), buildLlmsTxt(metas, sidebar))
  } finally {
    await server.close()
  }

  if (CHECK) {
    const stale = [...outputs].filter(([path, content]) => !existsSync(path) || read(path) !== content)
    if (stale.length) {
      console.error(`[build-component-meta] ${stale.length} dosya güncel değil — \`pnpm --filter fewui run build:meta\` çalıştırın:`)
      for (const [path] of stale.slice(0, 12)) console.error(`  ${relative(repoRoot, path)}`)
      process.exit(1)
    }
    console.log('[build-component-meta] OK')
    return
  }

  mkdirSync(typesDir, { recursive: true })
  mkdirSync(docsDir, { recursive: true })
  mkdirSync(join(repoRoot, 'apps/kit-docs/public'), { recursive: true })
  // Kaldırılan bileşenin sayfası kalmasın.
  for (const file of readdirSync(docsDir)) {
    if (file.endsWith('.md') && !outputs.has(join(docsDir, file))) rmSync(join(docsDir, file))
  }
  for (const [path, content] of outputs) writeFileSync(path, content)
  console.log(`[build-component-meta] ${outputs.size} dosya yazıldı`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
