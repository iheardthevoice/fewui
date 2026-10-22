<template>
  <component
    :is="tag"
    class="ui-theme-provider"
    :class="{ dark: resolvedMode === 'dark', 'ui-theme-provider--background': background }"
    :data-ui-theme="themeId"
    :data-ui-mode="resolvedMode"
    :data-ui-density="mergedDefaults.density === 'compact' ? 'compact' : undefined"
    :style="cssVars"
  >
    <div
      ref="portal"
      class="ui-theme-provider-portal"
    />
    <slot
      :mode="resolvedMode"
      :theme="pkg"
    />
  </component>
</template>

<script>
import { computed, reactive } from 'vue'
import { resolveOverrideVars } from '../theme/apply-theme.js'
import { resolveThemeVars } from '../theme/build-theme-css.js'
import { BASE_UI_DEFAULTS, UI_DEFAULTS_KEY, mergeUiDefaults } from '../theme/defaults-base.js'
import { resolveTheme } from '../theme/registry.js'
import { UI_PORTAL_KEY } from '../theme/ui-portal.js'

const UI_THEME_MODE_KEY = Symbol('uiThemeMode')

/**
 * Alt ağaca tema uygular: token'lar elemanın kendisinde inline yazılır, bileşen varsayılanları
 * provide edilir; dialog / popover gibi overlay'ler provider içindeki portala taşınır.
 * Sayfa içi önizleme ve iç içe farklı temalar için.
 */
export default {
  name: 'ThemeProvider',
  inject: {
    parentDefaults: { from: UI_DEFAULTS_KEY, default: () => BASE_UI_DEFAULTS },
    parentMode: { from: UI_THEME_MODE_KEY, default: null },
  },
  provide() {
    return {
      [UI_DEFAULTS_KEY]: this.providedDefaults,
      [UI_THEME_MODE_KEY]: computed(() => this.resolvedMode),
      [UI_PORTAL_KEY]: () => this.$refs.portal || null,
    }
  },
  props: {
    /** Kayıtlı tema id'si veya `defineTheme` paketi; verilmezse yalnızca mod / override uygulanır. */
    theme: { type: [String, Object], default: null },
    /** `light` | `dark`; verilmezse üst provider veya belge kökü. */
    mode: {
      type: String,
      default: null,
      validator: (value) => value == null || value === 'light' || value === 'dark',
    },
    /** Token override'ları — düz harita veya `{ light, dark }`. */
    overrides: { type: Object, default: null },
    /** Bileşen varsayılanı override'ları (`iconType`, `buttonRounded`, …). */
    defaults: { type: Object, default: null },
    /** Kökte `--background` dolgusu. */
    background: { type: Boolean, default: false },
    tag: { type: String, default: 'div' },
  },
  data() {
    return {
      documentDark: false,
      providedDefaults: reactive({ ...BASE_UI_DEFAULTS }),
    }
  },
  computed: {
    pkg() {
      return this.theme ? resolveTheme(this.theme) : null
    },
    themeId() {
      return this.pkg?.id ?? null
    },
    resolvedMode() {
      if (this.mode) return this.mode
      if (this.parentMode?.value) return this.parentMode.value
      return this.documentDark ? 'dark' : 'light'
    },
    cssVars() {
      const base = this.pkg ? resolveThemeVars(this.pkg, this.resolvedMode) : {}
      return { ...base, ...resolveOverrideVars(this.overrides, this.resolvedMode) }
    },
    mergedDefaults() {
      return mergeUiDefaults({
        ...this.parentDefaults,
        ...this.pkg?.defaults,
        ...this.defaults,
      })
    },
  },
  watch: {
    mergedDefaults: {
      immediate: true,
      handler(value) {
        Object.assign(this.providedDefaults, value)
      },
    },
  },
  mounted() {
    if (this.mode || this.parentMode || typeof document === 'undefined') return
    const root = document.documentElement
    this.documentDark = root.classList.contains('dark')
    this.modeObserver = new MutationObserver(() => {
      this.documentDark = root.classList.contains('dark')
    })
    this.modeObserver.observe(root, { attributes: true, attributeFilter: ['class'] })
  },
  beforeUnmount() {
    this.modeObserver?.disconnect()
  },
}
</script>
