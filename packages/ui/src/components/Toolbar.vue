<template>
  <div
    :class="rootClass"
    :role="ariaLabel ? 'toolbar' : undefined"
    :aria-label="ariaLabel || undefined"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="$slots.start"
      class="ui-toolbar-start"
    >
      <slot name="start" />
    </div>
    <div
      v-if="$slots.default"
      class="ui-toolbar-main"
    >
      <slot />
    </div>
    <div
      v-if="$slots.end"
      class="ui-toolbar-end"
    >
      <slot name="end" />
    </div>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const DIRECTIONS = ['horizontal', 'vertical']

/**
 * Araç / filtre çubuğu yerleşimi — `start`, varsayılan (esnek orta) ve `end` bölgeleri.
 * Aralık `--ui-toolbar-gap` (yoğunlukla küçülür). `horizontal` mobilde dikey yığılır;
 * `vertical` her ekranda satırları alt alta dizer (ör. üst eylem + filtre satırı).
 */
export default {
  name: 'Toolbar',
  inheritAttrs: false,
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator: (v) => DIRECTIONS.includes(v),
    },
    /** Yatay düzende sığmayan öğeler alt satıra kayar */
    wrap: {
      type: Boolean,
      default: true,
    },
    /** Verilirse `role="toolbar"` ile erişilebilir ad */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    rootClass() {
      return cn(
        'ui-toolbar',
        `ui-toolbar--${this.direction}`,
        this.wrap && this.direction === 'horizontal' ? 'ui-toolbar--wrap' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
