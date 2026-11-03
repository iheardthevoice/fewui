<template>
  <div
    :class="rootClass"
    :role="navigation ? undefined : 'radiogroup'"
    :aria-label="(!navigation && ariaLabel) || undefined"
    v-bind="{ ...passthroughAttrs, ...indicatorRootAttrs }"
    :data-overflowing="isScrollable && overflowing != null ? String(overflowing) : undefined"
    @keydown="onRadioKeydown"
  >
    <span
      v-if="indicatorEnabled"
      ref="indicator"
      class="ui-selection-indicator"
      v-bind="indicatorBind"
    >
      <span class="ui-selection-indicator-fill" />
    </span>
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'
import { isMobileViewport } from '../utils/viewport.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'
import { CONTROL_SIZES } from '../utils/sizes.js'
import { selectionIndicatorMixin } from '../utils/selection-indicator.js'

const SIZES = CONTROL_SIZES
const DIRECTIONS = ['horizontal', 'vertical']

function isIconOnlyProp(v) {
  return typeof v === 'boolean' || v === 'mobile'
}

export default {
  name: 'SegmentGroup',
  mixins: [uiDefaultsMixin, selectionIndicatorMixin],
  inheritAttrs: false,
  emits: ['update:modelValue'],
  data() {
    return {
      /** Kaydırılabilir grupta içerik gerçekten taşıyor mu — taşmıyorsa kırpma kapanır (gösterge büyümesi kesilmez). */
      overflowing: null,
    }
  },
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
     * Varsayılan açık — dar kart / mobil’de etiketler patlamasın.
     * Dikey yönde etkisiz. `block=false` (fit) gruplarda da taşmayı keser.
     */
    scrollable: {
      type: Boolean,
      default: true,
    },
    /**
     * Seçili zemin yeni seçilinin arkasına kayarak geçer (yolda hafif büyür).
     * `false`: her segment kendi zeminini çizer (eski davranış).
     */
    animated: {
      type: Boolean,
      default: true,
    },
    /**
     * Gezinme kapsülü: segmentler `to` ile bağlantıdır, grup `radiogroup` rolü taşımaz.
     * Erişilebilir ad sarmalayan `<nav aria-label>` öğesinden gelir; `modelValue` etkin rotanın değeridir.
     */
    navigation: {
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
      return resolveThemeControlSize(this.uiDefaults, this.size, { key: 'controlSize', defaultSize: 'md' })
    },
    /** Segment çocukları bunu okur (`iconOnly` ham prop değil). */
    resolvedIconOnly() {
      if (this.iconOnly === 'mobile') return isMobileViewport()
      return Boolean(this.iconOnly)
    },
    indicatorEnabled() {
      return this.animated
    },
    indicatorSelector() {
      return '.ui-segment--selected'
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
        this.indicatorEnabled && 'ui-segment-group--indicator',
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
    isScrollable: {
      handler(enabled) {
        if (enabled) this.$nextTick(() => this.watchOverflow())
        else this.unwatchOverflow()
      },
    },
  },
  mounted() {
    this.scheduleScrollSelected('auto')
    if (this.isScrollable) this.watchOverflow()
  },
  beforeUnmount() {
    this.unwatchOverflow()
    if (this._scrollSelectedRaf != null) {
      cancelAnimationFrame(this._scrollSelectedRaf)
      this._scrollSelectedRaf = null
    }
  },
  methods: {
    watchOverflow() {
      this.unwatchOverflow()
      const root = this.$el
      if (!root || typeof ResizeObserver === 'undefined') return
      // Öğelerin kapladığı genişlik — `scrollWidth` büyüyen göstergenin dönüşümünü de sayar.
      const measure = () => {
        let left = Infinity
        let right = -Infinity
        for (const child of root.children) {
          if (child === this.$refs.indicator) continue
          const r = child.getBoundingClientRect()
          if (r.width === 0) continue
          left = Math.min(left, r.left)
          right = Math.max(right, r.right)
        }
        this.overflowing = right > left && right - left > root.clientWidth + 1
      }
      this._overflowResize = new ResizeObserver(measure)
      this._overflowResize.observe(root)
      for (const child of root.children) this._overflowResize.observe(child)
      measure()
    },
    unwatchOverflow() {
      this._overflowResize?.disconnect()
      this._overflowResize = null
      this.overflowing = null
    },
    /**
     * WAI-ARIA Radio Group: ok tuşları seçimi değiştirir ve odağı taşır; grup tek Tab durağıdır
     * (seçili segment `tabindex=0`, diğerleri `-1`). Gezinme kapsülü (`navigation`) bağlantıdır, dahil değil.
     */
    onRadioKeydown(e) {
      if (this.navigation) return
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
      const edge = e.key === 'Home' ? 'first' : e.key === 'End' ? 'last' : null
      if (!step && !edge) return
      const radios = [...this.$el.querySelectorAll('[role="radio"]:not([disabled])')]
      if (!radios.length) return
      e.preventDefault()
      const cur = radios.indexOf(document.activeElement)
      let next
      if (edge === 'first') next = 0
      else if (edge === 'last') next = radios.length - 1
      else next = ((cur < 0 ? 0 : cur + step) % radios.length + radios.length) % radios.length
      radios[next].click()
      radios[next].focus()
    },
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
