import { computed, reactive, ref, watch } from 'vue'
import {
  BASE_UI_DEFAULTS,
  colorToRgb,
  defineTheme,
  deriveBrandColorsFromPrimary,
  listThemes,
  pickContrastForeground,
  resolveTheme,
} from 'fewui'
import { NEUTRAL_ROLE_TOKENS, NEUTRAL_SCALES, bindColorToBaseStep, matchNeutralScale } from './neutral-scales.js'

const MODES = ['light', 'dark']

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
 * Kullanıcı yalnız base skalasını ve primary rengini seçer; nötr roller base'den, odak / seçim /
 * vurgu primary'den türer. Yüzey stili (opaklık, bulanıklık) ve durum renkleri temanın kendisindedir.
 * @param {{ defaultThemeId?: string }} [options]
 */
export function useThemePlayground(options = {}) {
  const stored = readStored()
  const draft = reactive({ ...createThemeDraft(options.defaultThemeId), ...stored?.draft })
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
  function getToken(key, mode = 'light') {
    const { light, dark } = theme.value.preset.tokens
    if (mode === 'dark' && dark[key] != null) return dark[key]
    return light[key]
  }

  /**
   * @param {string} key
   * @param {unknown} value
   * @param {'light'|'dark'} [mode]
   */
  function setToken(key, value, mode = 'light') {
    if (value == null || value === '') {
      delete draft.tokens[mode][key]
      return
    }
    draft.tokens[mode][key] = value
  }

  /**
   * Base skalasını seçer ve nötr rolleri (metin, yüzey, kontrol, sönük …) her iki modda
   * skalaya bağlar: sabit nötr renkler en yakın `var(--base-N)` basamağına döner.
   * @param {string} id `NEUTRAL_SCALES` anahtarı
   */
  function setBaseScale(id) {
    const scale = NEUTRAL_SCALES[id]
    if (!scale) return
    draft.tokens.light.base = { ...scale }
    delete draft.tokens.dark.base
    for (const mode of MODES) {
      for (const key of NEUTRAL_ROLE_TOKENS) {
        // Dark yalnız kendi değeri varsa ayrıca bağlanır; yoksa light'tan devralır.
        if (mode === 'dark' && theme.value.preset.tokens.dark[key] == null) continue
        const current = getToken(key, mode)
        const bound = bindColorToBaseStep(current, colorToRgb)
        if (bound !== current) setToken(key, bound, mode)
      }
    }
  }

  /**
   * Primary rengini seçer; ön plan, `ring` ve marka vurgusu ondan türer. Odak halkası, seçili
   * metin ve soluk seçim zemini CSS'te zaten `--primary`'den hesaplanır. Her iki mod aynı rengi kullanır.
   * @param {string} color
   */
  function setPrimaryColor(color) {
    if (!color) return
    const { brandAccent } = deriveBrandColorsFromPrimary(color)
    const derived = {
      primary: color,
      primaryForeground: pickContrastForeground(color),
      ring: `color-mix(in oklab, ${color} 55%, transparent)`,
      brandAccent,
    }
    // Başlangıç temasının kendi dark değeri (ör. landing `ring`) devralmayla gelir; silmek yetmez, yazılır.
    for (const mode of MODES) {
      for (const [key, value] of Object.entries(derived)) setToken(key, value, mode)
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

  /**
   * Başlangıç temasını değiştirir. Kullanıcının seçimleri (base, primary, yazı tipleri, köşe,
   * bileşen varsayılanları) korunur ve yeni temanın üzerine yeniden uygulanır: base yeni temanın
   * nötr rollerini o skalaya bağlar, primary türevleriyle birlikte yazılır. Yalnız seçilmeyenler
   * temadan gelir.
   * @param {string} id
   */
  function setBaseTheme(id) {
    const picks = {
      baseScale: draft.tokens.light.base ? matchNeutralScale(draft.tokens.light.base) : null,
      primary: draft.tokens.light.primary || null,
      radius: draft.tokens.light.radius || null,
      fonts: { ...draft.fonts },
      defaults: { ...draft.defaults },
    }
    draft.baseThemeId = id
    draft.tokens = { light: {}, dark: {} }
    draft.fonts = picks.fonts
    draft.defaults = picks.defaults
    if (picks.radius) setToken('radius', picks.radius)
    if (picks.baseScale) setBaseScale(picks.baseScale)
    if (picks.primary) setPrimaryColor(picks.primary)
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
    [draft, previewMode],
    () => {
      writeStored({ draft, previewMode: previewMode.value })
    },
    { deep: true },
  )

  return {
    draft,
    previewMode,
    baseTheme,
    theme,
    themeOptions,
    getToken,
    setToken,
    setBaseScale,
    setPrimaryColor,
    getDefault,
    setDefault,
    setBaseTheme,
    reset,
    importPackage,
    exportPackage,
  }
}
