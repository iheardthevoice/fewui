<template>
  <component
    :is="tag"
    :class="listClass"
    role="list"
    v-bind="passthroughAttrs"
  >
    <slot />
  </component>
</template>

<script>
import { cn } from '../utils/cn.js'

const TAGS = ['ul', 'ol', 'div']
const VARIANTS = ['plain', 'bordered', 'divided']
const DENSITIES = ['compact', 'normal', 'relaxed']

export default {
  name: 'List',
  inheritAttrs: false,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: 'ul',
      validator: (v) => TAGS.includes(v),
    },
    /**
     * `plain`: dikey gap’li liste.
     * `bordered`: kenarlıklı, satır ayırıcılı grup.
     * `divided`: dış çerçeve yok; yalnızca satır ayırıcı (şarkı sırası vb.).
     */
    variant: {
      type: String,
      default: 'plain',
      validator: (v) => VARIANTS.includes(v),
    },
    /**
     * Öğeler arası dikey boşluk.
     * `plain`: gap. `divided` / `bordered`: satır içi dikey padding.
     */
    density: {
      type: String,
      default: 'normal',
      validator: (v) => DENSITIES.includes(v),
    },
  },
  computed: {
    listClass() {
      const densityClass =
        this.density === 'compact'
          ? 'ui-list--compact'
          : this.density === 'relaxed'
            ? 'ui-list--relaxed'
            : ''
      if (this.variant === 'bordered') {
        return cn('ui-list', 'ui-list--bordered', densityClass, this.$attrs.class)
      }
      if (this.variant === 'divided') {
        return cn('ui-list', 'ui-list--divided', densityClass, this.$attrs.class)
      }
      const gap =
        this.density === 'compact'
          ? 'gap-3'
          : this.density === 'relaxed'
            ? 'gap-5'
            : 'gap-4'
      return cn('ui-list', gap, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
