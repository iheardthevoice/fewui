<template>
  <span
    class="ui-ai-button"
    :class="{
      'ui-ai-button--block': isBlock,
      'ui-ai-button--disabled': disabled || loading,
    }"
    :data-size="resolvedSize"
    :style="rootStyle"
  >
    <span
      class="ui-ai-button__glow"
      aria-hidden="true"
    />
    <span class="ui-ai-button__surface">
      <ui-button
        type="button"
        variant="solid"
        color="secondary"
        :size="resolvedSize"
        :prefix-icon="prefixIcon"
        :disabled="disabled"
        :loading="loading"
        :loading-text="loadingText"
        :block="isBlock"
        v-bind="$attrs"
        @click="$emit('click', $event)"
      >
        <slot />
      </ui-button>
    </span>
  </span>
</template>

<script>
import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'

/**
 * AI eylem düğmesi — animasyonlu gradient çerçeve + `ui-button` (solid secondary).
 * Köşe yarıçapı `ui-control-h-*` ile aynıdır (`sm` → rounded-md, diğerleri → `--radius`).
 */
export default {
  name: 'AiButton',
  mixins: [uiDefaultsMixin],
  inheritAttrs: false,
  props: {
    prefixIcon: {
      type: String,
      default: 'wand-magic-sparkles',
    },
    size: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
    loadingText: {
      type: String,
      default: null,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  computed: {
    isBlock() {
      return this.block
    },
    resolvedSize() {
      const raw = resolveThemeControlSize(this.uiDefaults, this.size, { key: 'controlSize', defaultSize: 'md' })
      return raw === 'sm' || raw === 'lg' ? raw : 'md'
    },
    rootStyle() {
      const radius =
        this.resolvedSize === 'sm'
          ? 'calc(var(--radius) - 2px)'
          : 'var(--radius)'
      return {
        '--ui-ai-button-radius': radius,
      }
    },
  },
}
</script>
