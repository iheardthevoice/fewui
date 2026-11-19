<template>
  <div :class="rootClass">
    <div
      ref="viewport"
      class="ui-scroll-area-viewport"
      :style="viewportStyle"
      :tabindex="overflowing ? 0 : undefined"
      :role="overflowing ? 'region' : undefined"
      :aria-label="overflowing ? resolvedAriaLabel : undefined"
      @scroll.passive="measure"
    >
      <div
        ref="content"
        class="ui-scroll-area-content"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { resolveUiText } from '../utils/resolve-ui-text.js'

const ORIENTATIONS = ['vertical', 'horizontal', 'both']

export default {
  name: 'ScrollArea',
  props: {
    /** Kaydırma ekseni. */
    orientation: {
      type: String,
      default: 'vertical',
      validator: (v) => ORIENTATIONS.includes(v),
    },
    /** CSS uzunluğu (`"16rem"`, `"50vh"`); sayı verilirse piksel. Boşsa yükseklik ebeveynden gelir. */
    maxHeight: {
      type: [String, Number],
      default: '',
    },
    /** Kenar solması: yalnız devamı olan kenarda görünür. */
    fade: {
      type: Boolean,
      default: false,
    },
    /** İçerik taştığında bölgenin erişilebilir adı; verilmezse `ui.scrollArea.ariaLabel`. */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      /** Taşma yoksa bölge odaklanamaz ve `role` almaz (boş sekme durağı olmasın). */
      overflowing: false,
      edges: { top: false, bottom: false, left: false, right: false },
    }
  },
  computed: {
    resolvedAriaLabel() {
      return this.ariaLabel || resolveUiText(this, 'ui.scrollArea.ariaLabel', 'Scrollable area')
    },
    viewportStyle() {
      if (this.maxHeight === '' || this.maxHeight == null) return undefined
      return { maxHeight: typeof this.maxHeight === 'number' ? `${this.maxHeight}px` : this.maxHeight }
    },
    rootClass() {
      const { top, bottom, left, right } = this.edges
      return [
        'ui-scroll-area',
        `ui-scroll-area--${this.orientation}`,
        this.fade ? 'ui-scroll-area--fade' : '',
        this.fade && top ? 'ui-scroll-area--fade-top' : '',
        this.fade && bottom ? 'ui-scroll-area--fade-bottom' : '',
        this.fade && left ? 'ui-scroll-area--fade-left' : '',
        this.fade && right ? 'ui-scroll-area--fade-right' : '',
      ]
    },
  },
  watch: {
    orientation() {
      this.$nextTick(this.measure)
    },
    maxHeight() {
      this.$nextTick(this.measure)
    },
  },
  mounted() {
    this.measure()
    if (typeof ResizeObserver === 'undefined') return
    // İçerik ya da kap boyutu değişince taşma ve kenar durumu yeniden hesaplanır.
    this.resizeObserver = new ResizeObserver(() => this.measure())
    this.resizeObserver.observe(this.$refs.viewport)
    this.resizeObserver.observe(this.$refs.content)
  },
  beforeUnmount() {
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
  },
  methods: {
    measure() {
      const el = this.$refs.viewport
      if (!el) return
      // 1px tolerans: kesirli ölçek / zoom yuvarlaması.
      const maxY = this.orientation === 'horizontal' ? 0 : Math.max(0, el.scrollHeight - el.clientHeight)
      const maxX = this.orientation === 'vertical' ? 0 : Math.max(0, el.scrollWidth - el.clientWidth)
      const y = el.scrollTop
      // RTL'de `scrollLeft` 0'dan negatife gider; fiziksel sol uzaklığa çevrilir.
      const rtl = getComputedStyle(el).direction === 'rtl'
      const x = rtl ? maxX - Math.abs(el.scrollLeft) : el.scrollLeft
      const next = {
        top: maxY > 1 && y > 1,
        bottom: maxY > 1 && y < maxY - 1,
        left: maxX > 1 && x > 1,
        right: maxX > 1 && x < maxX - 1,
      }
      const overflowing = maxY > 1 || maxX > 1
      if (overflowing !== this.overflowing) this.overflowing = overflowing
      const prev = this.edges
      if (prev.top !== next.top || prev.bottom !== next.bottom || prev.left !== next.left || prev.right !== next.right) {
        this.edges = next
      }
    },
  },
}
</script>
