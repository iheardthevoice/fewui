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
import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'
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
      default: undefined,
      validator: (v) => v == null || SIZES.includes(v),
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: 'horizontal',
      validator: (v) => DIRECTIONS.includes(v),
    },
    /**
     * Yalnız ikon; etiketler ekran okuyucu için gizli kalır.
     * `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 1023px`).
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
    /**
     * Yatay taşmada grup içinde kaydırma; seçili segment ortalanır.
     * Dikey yönde etkisiz.
     */
    scrollable: {
      type: Boolean,
      default: false,
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
      return resolveThemeControlSize(this.size, { key: 'controlSize', defaultSize: 'md' })
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      if (this.iconOnly === 'mobile') return isMobileViewport()
      return Boolean(this.iconOnly)
    },
    isScrollable() {
      return this.scrollable === true && this.direction !== 'vertical'
    },
    rootClass() {
      return cn(
        'ui-segment-group',
        this.block ? 'ui-segment-group--block' : 'ui-segment-group--fit',
        this.direction === 'vertical' && 'ui-segment-group--vertical',
        this.resolvedIconOnly && 'ui-segment-group--icon-only',
        !this.block && this.direction !== 'vertical' && 'ui-segment-group--inline',
        this.isScrollable && 'ui-segment-group--scrollable',
        this.resolvedSize !== 'md' && `ui-segment-group--${this.resolvedSize}`,
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  watch: {
    modelValue() {
      this.scheduleScrollSelected('smooth')
    },
    scrollable(enabled) {
      if (enabled) this.scheduleScrollSelected('auto')
    },
  },
  mounted() {
    this.scheduleScrollSelected('auto')
  },
  beforeUnmount() {
    if (this._scrollSelectedRaf != null) {
      cancelAnimationFrame(this._scrollSelectedRaf)
      this._scrollSelectedRaf = null
    }
  },
  methods: {
    scheduleScrollSelected(behavior = 'smooth') {
      if (!this.isScrollable) return
      if (this._scrollSelectedRaf != null) cancelAnimationFrame(this._scrollSelectedRaf)
      this.$nextTick(() => {
        this._scrollSelectedRaf = requestAnimationFrame(() => {
          this._scrollSelectedRaf = null
          this.scrollSelectedIntoView(behavior)
        })
      })
    },
    scrollSelectedIntoView(behavior = 'smooth') {
      if (!this.isScrollable) return
      const root = this.$el
      if (!root || typeof root.querySelector !== 'function') return
      const selected = root.querySelector('.ui-segment--selected')
      if (!selected) return
      const rootWidth = root.clientWidth
      if (rootWidth <= 0) return
      const maxScroll = Math.max(0, root.scrollWidth - rootWidth)
      if (maxScroll <= 0) return
      const selectedCenter = selected.offsetLeft + selected.offsetWidth / 2
      const nextLeft = Math.min(maxScroll, Math.max(0, selectedCenter - rootWidth / 2))
      if (Math.abs(root.scrollLeft - nextLeft) < 1) return
      if (typeof root.scrollTo === 'function') {
        root.scrollTo({ left: nextLeft, behavior })
      } else {
        root.scrollLeft = nextLeft
      }
    },
  },
}
</script>
