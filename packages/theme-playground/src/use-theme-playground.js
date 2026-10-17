import { computed, reactive, ref, watch } from 'vue'
import {
  BASE_UI_DEFAULTS,
  defineTheme,
  deriveBrandColorsFromPrimary,
  listThemes,
  pickContrastForeground,
  resolveTheme,
} from 'fewui'

const STORAGE_KEY = 'fewui-theme-playground-v2'

/**
 * @typedef {object} ThemeDraft
 * @property {string} id
 * @property {string} label
 * @property {string} description
 * @property {string} baseThemeId Başlangıç teması (kayıtlı id)
 * @property {{ body?: string, heading?: string }} fonts
 * @property {{ light: Record<string, unknown>, dark: Record<string, unknown> }} tokens Başlangıç temasına göre değişiklikler
 * @property {Record<string, string>} defaults
 * @property {string} customCss `styles.css` içeriği
 */

/**
 * @param {string} [baseThemeId]
 * @returns {ThemeDraft}
 */
export function createThemeDraft(baseThemeId = 'web') {
  return {
    id: 'my-theme',
    label: 'My theme',
    description: '',
    baseThemeId,
    fonts: {},
    tokens: { light: {}, dark: {} },
    defaults: {},
    customCss: '',
  }
}

function readStored() {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeStored(payload) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // ignore quota
  }
}

/**
 * @param {unknown} value
 * @returns {string}
 */
function slugify(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Create sayfası tema taslağı: başlangıç teması + light/dark token değişiklikleri → v2 paket.
 * @param {{ defaultThemeId?: string }} [options]
 */
export function useThemePlayground(options = {}) {
  const stored = readStored()
  const draft = reactive({ ...createThemeDraft(options.defaultThemeId), ...stored?.draft })
  const editMode = ref(stored?.editMode === 'dark' ? 'dark' : 'light')
  const previewMode = ref(['light', 'dark', 'split'].includes(stored?.previewMode) ? stored.previewMode : 'split')

  const baseTheme = computed(() => resolveTheme(draft.baseThemeId))

  /** Tam (devralma çözülmüş) v2 tema paketi. */
  const theme = computed(() =>
    defineTheme({
      id: slugify(draft.id) || 'my-theme',
      label: draft.label || draft.id,
      description: draft.description,
      extends: baseTheme.value,
      preset: { fonts: draft.fonts, tokens: draft.tokens },
      defaults: draft.defaults,
    }),
  )

  const themeOptions = computed(() =>
    listThemes().map((pkg) => ({ value: pkg.id, label: pkg.label })),
  )

  /**
   * Moddaki etkin değer (dark: dark ?? light).
   * @param {string} key
   * @param {'light'|'dark'} [mode]
   */
  function getToken(key, mode = editMode.value) {
    const { light, dark } = theme.value.preset.tokens
    if (mode === 'dark' && dark[key] != null) return dark[key]
    return light[key]
  }

  /**
   * @param {string} key
   * @param {unknown} value
   * @param {'light'|'dark'} [mode]
   */
  function setToken(key, value, mode = editMode.value) {
    if (value == null || value === '') {
      delete draft.tokens[mode][key]
      return
    }
    draft.tokens[mode][key] = value
  }

  /**
   * Yüzey stili alanı (`surfaceStyle.opacity` vb.).
   * @param {'surfaceStyle'|'controlStyle'|'inputStyle'} key
   * @param {'mixFrom'|'opacity'|'backdropBlur'} field
   * @param {unknown} value
   * @param {'light'|'dark'} [mode]
   */
  function setStyleField(key, field, value, mode = editMode.value) {
    const current = /** @type {Record<string, unknown>} */ (getToken(key, mode) || {})
    draft.tokens[mode][key] = { ...current, [field]: value }
  }

  /** Ana renkten ön plan, halka ve vurgu renklerini türetir. */
  function deriveFromPrimary(mode = editMode.value) {
    const primary = String(getToken('primary', mode) || '')
    if (!primary) return
    const { accent, brandAccent } = deriveBrandColorsFromPrimary(primary)
    setToken('primaryForeground', pickContrastForeground(primary), mode)
    setToken('ring', `color-mix(in oklab, ${primary} 55%, transparent)`, mode)
    if (accent !== primary) {
      setToken('accent', accent, mode)
      setToken('accentForeground', pickContrastForeground(accent), mode)
      setToken('brandAccent', brandAccent, mode)
    }
  }

  /** @param {string} key */
  function setDefault(key, value) {
    draft.defaults = { ...draft.defaults, [key]: value }
  }

  /** @param {string} key */
  function getDefault(key) {
    return theme.value.defaults[key] ?? BASE_UI_DEFAULTS[key]
  }

  /** Başlangıç temasını değiştirir; token değişiklikleri sıfırlanır. */
  function setBaseTheme(id) {
    draft.baseThemeId = id
    draft.fonts = {}
    draft.tokens = { light: {}, dark: {} }
    draft.defaults = {}
  }

  function reset() {
    Object.assign(draft, createThemeDraft(draft.baseThemeId))
  }

  /**
   * Dışa aktarılmış paket JSON'unu (`theme.json`) taslağa yükler.
   * @param {string} text
   */
  function importPackage(text) {
    const data = JSON.parse(text)
    if (!data?.preset?.tokens) {
      throw new Error('invalid-theme-package')
    }
    Object.assign(draft, {
      ...createThemeDraft(data.baseThemeId || draft.baseThemeId),
      id: data.id || 'my-theme',
      label: data.label || data.id || '',
      description: data.description || '',
      fonts: { ...data.preset.fonts },
      tokens: {
        light: { ...data.preset.tokens.light },
        dark: { ...data.preset.tokens.dark },
      },
      defaults: { ...data.defaults },
      customCss: data.customCss || '',
    })
  }

  /** `theme.json` — tekrar içe aktarılabilir tam paket. */
  function exportPackage() {
    const pkg = theme.value
    return {
      id: pkg.id,
      label: pkg.label,
      description: pkg.description,
      baseThemeId: draft.baseThemeId,
      preset: pkg.preset,
      defaults: pkg.defaults,
      customCss: draft.customCss,
    }
  }

  watch(
    [draft, editMode, previewMode],
    () => {
      writeStored({ draft, editMode: editMode.value, previewMode: previewMode.value })
    },
    { deep: true },
  )

  return {
    draft,
    editMode,
    previewMode,
    baseTheme,
    theme,
    themeOptions,
    getToken,
    setToken,
    setStyleField,
    deriveFromPrimary,
    getDefault,
    setDefault,
    setBaseTheme,
    reset,
    importPackage,
    exportPackage,
  }
}
