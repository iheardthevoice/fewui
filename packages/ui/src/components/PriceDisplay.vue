<template>
  <div
    class="ui-price-display"
    :class="rootClass"
  >
    <span class="ui-price-display__label">{{ label }}</span>
    <ui-price-text
      :value="value"
      :size="valueSize"
      :tone="tone"
    >
      <slot name="value">{{ value }}</slot>
    </ui-price-text>
  </div>
</template>

<script>
import PriceText from './PriceText.vue'

const SIZES = ['sm', 'md', 'lg']
const VALUE_SIZES = ['sm', 'md', 'lg', 'xl', '2xl']
const TONES = ['default', 'foreground', 'muted', 'success', 'destructive', 'primary']

export default {
  name: 'PriceDisplay',
  components: { PriceText },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    valueSize: {
      type: String,
      default: 'lg',
      validator: (v) => VALUE_SIZES.includes(v),
    },
    tone: {
      type: String,
      default: 'default',
      validator: (v) => TONES.includes(v),
    },
  },
  computed: {
    rootClass() {
      return this.size !== 'md' ? `ui-price-display--${this.size}` : null
    },
  },
}
</script>
