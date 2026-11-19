import { afterEach, describe, expect, it, vi } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  applyUiTheme,
  buildThemeModeScript,
  clearUiTheme,
  getUiThemeMode,
  setUiThemeMode,
  UI_THEME_MODE_EVENT,
  UI_THEME_TRANSITION_CLASS,
} from '../../src/theme/apply-theme.js'
import { colorToHex, hexToOklchString } from '../../src/theme/color-utils.js'
import { resolveCssColorToHex, themeToDesignTokens, TOKEN_LAYERS } from '../../src/theme/design-tokens.js'

const themesDir = join(process.cwd(), 'themes')

/** Cihazın açık / koyu ayarını taklit eder; `set(true)` ayarı koyuya çevirir ve dinleyicileri çağırır. */
function mockSystem(dark = false) {
  const listeners = new Set()
  const state = { dark }
  window.matchMedia = (query) => ({
    get matches() {
      return query.includes('prefers-color-scheme') ? state.dark : false
    },
    media: query,
    addEventListener: (_type, fn) => query.includes('prefers-color-scheme') && listeners.add(fn),
    removeEventListener: (_type, fn) => listeners.delete(fn),
  })
  return {
    listeners,
    set(value) {
      state.dark = value
      for (const fn of [...listeners]) fn({ matches: value })
    },
  }
}

describe('hexToOklchString', () => {
  it('hex rengi kayıpsız OKLCH yazımına çevirir (aynı 8 bit renk)', () => {
    for (const hex of ['#1b5cff', '#ffffff', '#000000', '#eef2ff', '#f43f5e', '#0a0a0b', '#abc']) {
      const oklch = hexToOklchString(hex)
      expect(oklch.startsWith('oklch(')).toBe(true)
      const expected = hex.length === 4 ? `#${[...hex.slice(1)].map((c) => c + c).join('')}` : hex
      expect(colorToHex(oklch)).toBe(expected)
    }
  })

  it('alfa kanalını taşır; hex olmayan değeri olduğu gibi bırakır', () => {
    expect(hexToOklchString('#00000080')).toMatch(/\/ 0\.502\)$/)
    expect(hexToOklchString('var(--base-50)')).toBe('var(--base-50)')
    expect(hexToOklchString('oklch(0.5 0.1 20)')).toBe('oklch(0.5 0.1 20)')
  })
})

describe('tema preset\'leri', () => {
  it('hex renk içermez (token renkleri OKLCH tutulur)', () => {
    for (const theme of readdirSync(themesDir)) {
      const file = join(themesDir, theme, 'preset.js')
      if (!existsSync(file)) continue
      expect(readFileSync(file, 'utf8').match(/#[0-9a-fA-F]{3,8}\b/g), theme).toBeNull()
    }
  })
})

describe('sistem modu', () => {
  afterEach(() => {
    clearUiTheme()
    document.documentElement.className = ''
  })

  it('`system` cihaz ayarını uygular ve ayar değişince kendiliğinden güncellenir', () => {
    const system = mockSystem(false)
    const events = []
    const onChange = (event) => events.push(event.detail)
    document.documentElement.addEventListener(UI_THEME_MODE_EVENT, onChange)

    applyUiTheme('web', { mode: 'system' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(getUiThemeMode()).toEqual({ mode: 'light', preference: 'system' })

    system.set(true)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(getUiThemeMode()).toEqual({ mode: 'dark', preference: 'system' })
    expect(events.at(-1)).toEqual({ mode: 'dark', preference: 'system' })
    document.documentElement.removeEventListener(UI_THEME_MODE_EVENT, onChange)
  })

  it('açık bir seçim cihaz ayarını izlemeyi bırakır', () => {
    const system = mockSystem(true)
    applyUiTheme('web', { mode: 'system' })
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    setUiThemeMode('light')
    expect(system.listeners.size).toBe(0)
    system.set(true)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(getUiThemeMode().preference).toBe('light')
  })

  it('mod verilmeden yeniden uygulanınca `system` tercihi sürer', () => {
    mockSystem(true)
    applyUiTheme('web', { mode: 'system' })
    applyUiTheme('web', { overrides: { primary: 'oklch(0.6 0.2 30)' } })
    expect(getUiThemeMode()).toEqual({ mode: 'dark', preference: 'system' })
  })

  it('tema uygulanmamış kökte de çalışır', () => {
    const system = mockSystem(false)
    setUiThemeMode('system')
    system.set(true)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('ilk boyama betiği kayıtlı tercihi okur, yoksa cihaza bakar', () => {
    const script = buildThemeModeScript({ storageKey: 'theme' })
    expect(script).toContain('localStorage.getItem')
    expect(script).toContain('prefers-color-scheme: dark')
    mockSystem(true)
    localStorage.setItem('theme', 'light')
    new Function(script)()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    localStorage.removeItem('theme')
    new Function(script)()
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})

describe('tema geçişi', () => {
  afterEach(() => {
    vi.useRealTimers()
    clearUiTheme()
    document.documentElement.className = ''
  })

  it('ilk uygulamada geçiş yok; mod değişince geçiş sınıfı kısa süre eklenir', () => {
    vi.useFakeTimers()
    mockSystem(false)
    const root = document.documentElement
    applyUiTheme('web', { mode: 'light' })
    expect(root.classList.contains(UI_THEME_TRANSITION_CLASS)).toBe(false)
    setUiThemeMode('dark')
    expect(root.classList.contains(UI_THEME_TRANSITION_CLASS)).toBe(true)
    vi.advanceTimersByTime(400)
    expect(root.classList.contains(UI_THEME_TRANSITION_CLASS)).toBe(false)
  })

  it('değişiklik yoksa ya da `transition: false` ise sınıf eklenmez', () => {
    mockSystem(false)
    const root = document.documentElement
    applyUiTheme('web', { mode: 'light' })
    applyUiTheme('web', { mode: 'light' })
    expect(root.classList.contains(UI_THEME_TRANSITION_CLASS)).toBe(false)
    setUiThemeMode('dark', undefined, { transition: false })
    expect(root.classList.contains(UI_THEME_TRANSITION_CLASS)).toBe(false)
    expect(root.classList.contains('dark')).toBe(true)
  })

  it('tiplenmiş değişken dosyası yalnız her temada tanımlı renk token\'larını içerir', () => {
    const css = readFileSync(join(themesDir, '_shared/properties.css'), 'utf8')
    const names = [...css.matchAll(/@property (--[a-z-]+)/g)].map((m) => m[1])
    expect(names).toContain('--primary')
    expect(names).toContain('--background')
    // Yedekle okunan token tiplenirse yedek hiç çalışmaz.
    expect(names).not.toContain('--ring')
    for (const theme of ['web', 'fewui', 'landing', 'android', 'liquidglass']) {
      const color = readFileSync(join(themesDir, theme, 'color.css'), 'utf8')
      for (const name of names) expect(color.includes(`${name}:`) || theme === 'liquidglass', `${theme} ${name}`).toBe(true)
    }
  })
})

describe('tasarım token dışa aktarımı', () => {
  it('üç katmanı ve iki modu DTCG biçiminde üretir', () => {
    const tokens = themeToDesignTokens('web')
    expect(Object.keys(tokens)).toEqual(expect.arrayContaining(['primitive', 'semantic', 'component']))
    expect(Object.keys(tokens.primitive.color.base)).toHaveLength(11)
    expect(tokens.semantic.light.primary).toMatchObject({ $type: 'color', $value: '#1b5cff' })
    // Rol token'ı primitive'e bağlıdır; çözülmüş değer de taşınır.
    expect(tokens.semantic.light.background.$value).toBe('{primitive.color.base.50}')
    expect(tokens.semantic.light.background.$extensions['com.fewui'].resolved).toBe('#fafafa')
    expect(tokens.semantic.dark.primary.$type).toBe('color')
    expect(tokens.component.light.primarySoft.$value).toBe('#e8f0ff')
    expect(tokens.component.size.controlHeightMd.$value).toBe('32px')
  })

  it('her değer renk ya da geçerli bir bağ olur; çözülemeyen ifade yazılmaz', () => {
    for (const theme of ['web', 'fewui', 'landing', 'android', 'liquidglass']) {
      const tokens = themeToDesignTokens(theme)
      for (const mode of ['light', 'dark']) {
        for (const [name, token] of Object.entries({ ...tokens.semantic[mode], ...tokens.component[mode] })) {
          expect(token.$value, `${theme} ${mode} ${name}`).toMatch(/^(#[0-9a-f]{6}([0-9a-f]{2})?|\{primitive\.color\.[a-z]+(\.\d+)?\})$/)
        }
      }
      expect(Object.keys(tokens.semantic.light).length).toBeGreaterThan(20)
    }
  })

  it('color-mix ve var() ifadelerini çözer', () => {
    const vars = { '--a': '#ffffff', '--b': 'var(--a)' }
    expect(resolveCssColorToHex('var(--b)', vars)).toBe('#ffffff')
    expect(resolveCssColorToHex('color-mix(in oklab, #000000 50%, transparent)', {})).toBe('#00000080')
    expect(resolveCssColorToHex('oklch(from red l c h)', {})).toBeNull()
    expect(resolveCssColorToHex('var(--missing)', {})).toBeNull()
  })

  it('katman listesi CSS değişken adlarını verir', () => {
    expect(TOKEN_LAYERS.primitive).toContain('--base-500')
    expect(TOKEN_LAYERS.semantic).toContain('--primary-foreground')
    expect(TOKEN_LAYERS.component).toContain('--primary-soft')
  })
})
