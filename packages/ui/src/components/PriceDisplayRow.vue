<template>
  <div
    class="ui-price-display-row"
    :class="rootClass"
  >
    <span class="ui-price-display-row__label">{{ label }}</span>
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

const VALUE_SIZES = ['sm', 'md', 'lg', 'xl', '2xl']
const TONES = ['default', 'foreground', 'muted', 'success', 'destructive', 'primary']

export default {
  name: 'PriceDisplayRow',
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
    valueSize: {
      type: String,
      default: 'md',
      validator: (v) => VALUE_SIZES.includes(v),
    },
    tone: {
      type: String,
      default: 'default',
      validator: (v) => TONES.includes(v),
    },
    divider: {
      type: Boolean,
      default: false,
    },
    emphasis: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      return {
        'ui-price-display-row--divider': this.divider,
        'ui-price-display-row--emphasis': this.emphasis,
      }
    },
  },
}
</script>
