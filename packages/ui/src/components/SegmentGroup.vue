<template>
  <div
    :class="rootClass"
    role="radiogroup"
    :aria-label="ariaLabel || undefined"
    v-bind="passthroughAttrs"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { resolveControlSize } from '../utils/control-size.js'
import { isMobileViewport } from '../utils/viewport.js'

const SIZES = ['sm', 'md', 'lg']
const DIRECTIONS = ['horizontal', 'vertical']

function isIconOnlyProp(v) {
  return typeof v === 'boolean' || v === 'mobile'
}

export default {
  name: 'SegmentGroup',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: 'horizontal',
      validator: (v) => DIRECTIONS.includes(v),
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 767px`).
     */
    iconOnly: {
      type: [Boolean, String],
      default: false,
      validator: isIconOnlyProp,
    },
    /** false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) */
    block: {
      type: Boolean,
      default: true,
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  provide() {
    return {
      uiSegmentGroup: this,
    }
  },
  computed: {
    resolvedSize() {
      return resolveControlSize(this.size, { defaultSize: 'md' })
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      if (this.iconOnly === 'mobile') return isMobileViewport()
      return Boolean(this.iconOnly)
    },
    rootClass() {
      return cn(
        'ui-segment-group',
        this.block ? 'ui-segment-group--block' : 'ui-segment-group--fit',
        this.direction === 'vertical' && 'ui-segment-group--vertical',
        this.resolvedIconOnly && 'ui-segment-group--icon-only',
        !this.block && this.direction !== 'vertical' && 'ui-segment-group--inline',
        this.resolvedSize !== 'md' && `ui-segment-group--${this.resolvedSize}`,
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
