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
        :size="size"
        :prefix-icon="prefixIcon"
        :disabled="disabled"
        :loading="loading"
        :fulled="isBlock"
        v-bind="$attrs"
        @click="$emit('click', $event)"
      >
        <slot />
      </ui-button>
    </span>
  </span>
</template>

<script>
/**
 * AI eylem düğmesi — animasyonlu gradient çerçeve + `ui-button` (solid secondary).
 * Köşe yarıçapı `ui-control-h-*` ile aynıdır (`sm` → rounded-md, diğerleri → `--radius`).
 */
export default {
  name: 'AiButton',
  inheritAttrs: false,
  props: {
    prefixIcon: {
      type: String,
      default: 'wand-magic-sparkles',
    },
    size: {
      type: String,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    fulled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  computed: {
    isBlock() {
      return this.fulled || this.block
    },
    resolvedSize() {
      return this.size === 'sm' || this.size === 'lg' ? this.size : 'md'
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
