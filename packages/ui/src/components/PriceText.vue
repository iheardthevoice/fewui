<template>
  <span
    class="ui-price-text"
    :class="rootClass"
  >
    <slot>{{ value }}</slot>
  </span>
</template>

<script>
const SIZES = ['sm', 'md', 'lg', 'xl', '2xl']
const TONES = ['default', 'foreground', 'muted', 'success', 'destructive', 'primary']

export default {
  name: 'PriceText',
  props: {
    value: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    tone: {
      type: String,
      default: 'default',
      validator: (v) => TONES.includes(v),
    },
    strike: {
      type: Boolean,
      default: false,
    },
    truncate: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      return [
        `ui-price-text--${this.size}`,
        this.tone !== 'default' ? `ui-price-text--${this.tone}` : null,
        this.strike ? 'ui-price-text--strike' : null,
        this.truncate ? 'ui-price-text--truncate' : null,
      ]
    },
  },
}
</script>
