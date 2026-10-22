<template>
  <div
    class="ui-price-display-group"
    :class="rootClass"
  >
    <slot />
  </div>
</template>

<script>
import { CONTROL_SIZES } from '../utils/sizes.js'
const SIZES = CONTROL_SIZES

export default {
  name: 'PriceDisplayGroup',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
  },
  computed: {
    rootClass() {
      return this.size !== 'md' ? `ui-price-display-group--${this.size}` : null
    },
  },
}
</script>
