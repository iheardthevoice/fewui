import { computed, ref, watch } from 'vue'
import {
  applyUiTheme,
  applyThemeCustomCss,
  mergeUiTheme,
  resolveThemePreset,
  THEME_PRESET_IDS,
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
 * @param {{ defaultPresetId?: string }} [options]
 */
export function useThemePlayground(options = {}) {
  const stored = readStored()
  const presetId = ref(stored?.presetId || options.defaultPresetId || 'panel')
  const primaryColor = ref(stored?.primaryColor || '#f97316')
  const mode = ref(stored?.mode || 'dark')
  const fontFamily = ref(stored?.fontFamily || 'Inter')
  const customCss = ref(stored?.customCss || '')

  const theme = computed(() => {
    return mergeUiTheme(resolveThemePreset(presetId.value, { mode: mode.value, fontFamily: fontFamily.value }), {
      primaryColor: primaryColor.value,
      primary: primaryColor.value,
    })
  })

  function apply() {
    applyUiTheme(theme.value)
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
