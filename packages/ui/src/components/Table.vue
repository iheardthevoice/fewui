<template>
  <div :class="scrollClass">
    <table
      :class="rootClass"
      v-bind="passthroughAttrs"
    >
      <slot />
    </table>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'Table',
  inheritAttrs: false,
  props: {
    /**
     * Sütun başlıkları sayfa kayarken görünür kalır (masaüstü). Üst boşluk `--ui-table-sticky-top`,
     * zemin `--ui-table-sticky-bg` ile ayarlanır.
     */
    stickyHeader: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    scrollClass() {
      return cn('ui-table-scroll', this.stickyHeader && 'ui-table-scroll--sticky-head')
    },
    rootClass() {
      return cn('ui-table', this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
