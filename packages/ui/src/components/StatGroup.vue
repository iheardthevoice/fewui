<template>
  <div
    :class="rootClass"
    role="group"
    :aria-label="ariaLabel || undefined"
    v-bind="passthroughAttrs"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const COLUMNS = [1, 2, 3, 4]

/**
 * `ui-stat` ızgarası — mobilde tek sütun, `sm` üstünde 2, geniş ekranda `columns` sütun.
 * Kartlar aynı satırda eşit yükseklikte; aralık `--ui-space-stack`.
 */
export default {
  name: 'StatGroup',
  inheritAttrs: false,
  props: {
    /** Geniş ekrandaki en fazla sütun sayısı */
    columns: {
      type: Number,
      default: 3,
      validator: (v) => COLUMNS.includes(v),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    rootClass() {
      return cn('ui-stat-group', `ui-stat-group--cols-${this.columns}`, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
