<template>
  <div
    class="ui-price-display-group"
    :class="rootClass"
  >
    <slot />
  </div>
</template>

<script>
const SIZES = ['sm', 'md', 'lg']

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
