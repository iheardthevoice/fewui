import { computed, ref, watch } from 'vue'
import {
  applyUiTheme,
  applyThemeCustomCss,
  mergeUiTheme,
  resolveThemePreset,
  THEME_PRESET_IDS,
  FEW_PRIMARY,
} from 'fewui'

const STORAGE_KEY = 'fewui-theme-playground'

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
 * @param {{
 *   defaultPresetId?: string,
 *   applyTheme?: boolean,
 *   getThemeRoot?: () => string|HTMLElement|null|undefined,
 * }} [options]
 */
export function useThemePlayground(options = {}) {
  const stored = readStored()
  const presetId = ref(stored?.presetId || options.defaultPresetId || 'panel')
  const primaryColor = ref(stored?.primaryColor || FEW_PRIMARY)
  const mode = ref(stored?.mode || 'dark')
  const fontFamily = ref(stored?.fontFamily || 'Inter')
  const customCss = ref(stored?.customCss || '')
  const applyTheme = options.applyTheme !== false

  const theme = computed(() => {
    return mergeUiTheme(resolveThemePreset(presetId.value, { mode: mode.value, fontFamily: fontFamily.value }), {
      primaryColor: primaryColor.value,
      primary: primaryColor.value,
    })
  })

  function apply() {
    if (!applyTheme) return
    const hasRootGetter = typeof options.getThemeRoot === 'function'
    const root = hasRootGetter ? options.getThemeRoot() : undefined
    // Preview kökü bekleniyorsa documentElement'e yazma (shell dark/light bozulmasın)
    if (hasRootGetter && !root) return
    applyUiTheme(theme.value, root ? { root } : {})
    applyThemeCustomCss(customCss.value, 'fewui-playground-custom-css')
  }

  watch([presetId, primaryColor, mode, fontFamily, customCss], () => {
    writeStored({
      presetId: presetId.value,
      primaryColor: primaryColor.value,
      mode: mode.value,
      fontFamily: fontFamily.value,
      customCss: customCss.value,
    })
    apply()
  }, { immediate: true })

  if (typeof options.getThemeRoot === 'function') {
    watch(
      () => options.getThemeRoot(),
      () => {
        apply()
      },
    )
  }
  const presetOptions = computed(() =>
    THEME_PRESET_IDS.map((id) => ({ value: id, label: id })),
  )

  return {
    presetId,
    primaryColor,
    mode,
    fontFamily,
    customCss,
    theme,
    presetOptions,
    apply,
  }
}
