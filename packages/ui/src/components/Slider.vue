<template>
  <div :class="rootClass">
    <div
      v-if="label || hasValue"
      class="ui-slider-header"
    >
      <span
        v-if="label"
        class="ui-form-label"
      >{{ label }}</span>
      <span
        v-if="hasValue"
        class="ui-slider-value"
      >{{ valueText }}</span>
    </div>
    <div
      v-if="!range"
      class="ui-slider-rail"
    >
      <ui-progress
        type="bar"
        size="md"
        class="ui-slider-progress"
        :value="fillPercent"
        presentational
      />
      <input
        v-bind="passthroughAttrs"
        :id="resolvedId"
        :value="modelValue"
        type="range"
        class="ui-slider-input"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="modelValue"
        :aria-valuetext="valueText || String(modelValue)"
        :aria-describedby="ariaDescribedby"
        @input="onNativeInput"
        @change="onChange"
      />
    </div>
    <div
      v-else
      :id="resolvedId"
      ref="rail"
      class="ui-slider-rail ui-slider-range-rail"
      role="group"
      :aria-label="groupAriaLabel"
      @pointerdown="onRangePointerDown"
      @pointermove="onRangePointerMove"
      @pointerup="onRangePointerEnd"
      @pointercancel="onRangePointerEnd"
      @lostpointercapture="onRangePointerEnd"
    >
      <div
        class="ui-slider-range-track"
        aria-hidden="true"
      >
        <div
          class="ui-slider-range-fill"
          :style="rangeFillStyle"
        />
      </div>
      <div
        v-for="thumb in rangeThumbs"
        :key="thumb.index"
        :class="['ui-slider-range-thumb', activeThumb === thumb.index && 'ui-slider-range-thumb--top']"
        :style="thumb.style"
        role="slider"
        :tabindex="disabled ? -1 : 0"
        :data-thumb="thumb.index"
        :aria-label="thumb.label"
        :aria-valuemin="thumb.min"
        :aria-valuemax="thumb.max"
        :aria-valuenow="thumb.value"
        :aria-valuetext="thumb.text"
        :aria-disabled="disabled ? 'true' : undefined"
        :aria-describedby="ariaDescribedby"
        aria-orientation="horizontal"
        @keydown="onRangeKeydown($event, thumb.index)"
        @focus="activeThumb = thumb.index"
      />
    </div>
    <div
      v-if="minLabel || maxLabel"
      class="ui-slider-scale"
    >
      <span v-if="minLabel">{{ minLabel }}</span>
      <span v-if="maxLabel">{{ maxLabel }}</span>
    </div>
  </div>
</template>

<script>
import { formDirtyMixin } from '../utils/form-dirty.js'
import { cn } from '../utils/cn.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { createUiIdFactory } from '../utils/ui-id.js'

const nextSliderId = createUiIdFactory('ui-slider')

export default {
  name: 'Slider',
  mixins: [formDirtyMixin],
  inheritAttrs: false,
  props: {
    /** Tek değer; `range` açıkken `[alt, üst]` dizisi. */
    modelValue: {
      type: [Number, Array],
      default: 0,
    },
    /** İki tutamaçlı aralık seçimi. Kapalıyken (varsayılan) yerel `input[type=range]` çizilir. */
    range: {
      type: Boolean,
      default: false,
    },
    /** `range`: iki tutamaç arasında korunacak en küçük fark (değer birimi). */
    minDistance: {
      type: Number,
      default: 0,
    },
    /** `range`: `(value) => string` — tutamacın `aria-valuetext` metni (örn. para biçimi). */
    formatValue: {
      type: Function,
      default: null,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: '',
    },
    /** Sağ üstte gösterilen biçimlendirilmiş değer (örn. para string’i). */
    valueText: {
      type: String,
      default: '',
    },
    minLabel: {
      type: String,
      default: '',
    },
    maxLabel: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: undefined,
    },
    ariaDescribedby: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'input', 'change'],
  data() {
    return {
      fallbackId: nextSliderId(),
      /** `range`: son dokunulan tutamaç üstte kalır (üst üste geldiklerinde tutulabilsin). */
      activeThumb: 1,
      /** `range`: sürüklenen tutamaç ve işaretçi kimliği. */
      rangeDrag: null,
    }
  },
  computed: {
    resolvedId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    hasValue() {
      return this.valueText != null && this.valueText !== ''
    },
    rootClass() {
      return cn(
        'ui-slider',
        this.range && 'ui-slider--range',
        this.disabled && 'ui-slider--disabled',
        this.$attrs.class,
      )
    },
    /** `range`: geçerli `[alt, üst]`; eksik / ters değerler sınırlara oturtulur. */
    rangeValue() {
      const min = Number(this.min)
      const max = Number(this.max)
      const raw = Array.isArray(this.modelValue) ? this.modelValue : []
      let lo = Number.isFinite(Number(raw[0])) && raw[0] != null ? Number(raw[0]) : min
      let hi = Number.isFinite(Number(raw[1])) && raw[1] != null ? Number(raw[1]) : max
      lo = Math.min(max, Math.max(min, lo))
      hi = Math.min(max, Math.max(min, hi))
      return lo <= hi ? [lo, hi] : [hi, lo]
    },
    rangeGap() {
      const span = Number(this.max) - Number(this.min)
      return Math.min(Math.max(0, Number(this.minDistance) || 0), Math.max(0, span))
    },
    rangeThumbs() {
      const [lo, hi] = this.rangeValue
      const gap = this.rangeGap
      const labels = [
        resolveUiText(this, 'ui.slider.minThumb', 'Minimum'),
        resolveUiText(this, 'ui.slider.maxThumb', 'Maximum'),
      ]
      return [lo, hi].map((value, index) => ({
        index,
        value,
        // Sınırlar diğer tutamaca göre daralır: tutamaçlar birbirini geçemez.
        min: index === 0 ? Number(this.min) : lo + gap,
        max: index === 0 ? hi - gap : Number(this.max),
        label: labels[index],
        text: typeof this.formatValue === 'function' ? String(this.formatValue(value)) : undefined,
        style: { '--ui-slider-thumb-pos': String(this.rangePercent(value) / 100) },
      }))
    },
    rangeFillStyle() {
      const [lo, hi] = this.rangeValue
      return {
        insetInlineStart: `${this.rangePercent(lo)}%`,
        insetInlineEnd: `${100 - this.rangePercent(hi)}%`,
      }
    },
    groupAriaLabel() {
      return this.$attrs['aria-label'] || this.label || undefined
    },
    fillPercent() {
      const span = Number(this.max) - Number(this.min)
      if (span <= 0 || !Number.isFinite(Number(this.modelValue))) {
        return 0
      }
      const pct = ((Number(this.modelValue) - Number(this.min)) / span) * 100
      return Math.min(100, Math.max(0, pct))
    },
    passthroughAttrs() {
      const skip = new Set([
        'class',
        'style',
        'id',
        'type',
        'value',
        'min',
        'max',
        'step',
        'disabled',
      ])
      const out = {}
      for (const [key, val] of Object.entries(this.$attrs)) {
        if (!skip.has(key)) {
          out[key] = val
        }
      }
      return out
    },
  },
  methods: {
    onNativeInput(e) {
      const v = Number(e.target.value)
      this.notifyFormDirty()
      this.$emit('update:modelValue', Number.isNaN(v) ? this.min : v)
      this.$emit('input', e)
    },
    onChange(e) {
      this.$emit('change', e)
    },
    rangePercent(value) {
      const span = Number(this.max) - Number(this.min)
      if (span <= 0) return 0
      return Math.min(100, Math.max(0, ((value - Number(this.min)) / span) * 100))
    },
    /** Değeri adıma oturtur (kayan nokta artığı temizlenir). */
    snapToStep(value) {
      const step = Number(this.step) > 0 ? Number(this.step) : 1
      const min = Number(this.min)
      const snapped = Math.round((value - min) / step) * step + min
      const decimals = (String(step).split('.')[1] || '').length
      return Number(snapped.toFixed(Math.min(10, decimals + 2)))
    },
    /**
     * Tutamacı yeni değere taşır; diğer tutamaç ve `minDistance` sınırdır.
     * @returns {boolean} Değer değiştiyse `true`.
     */
    setRangeThumb(index, value) {
      const [lo, hi] = this.rangeValue
      const gap = this.rangeGap
      const lower = index === 0 ? Number(this.min) : lo + gap
      const upper = index === 0 ? hi - gap : Number(this.max)
      if (upper < lower) return false
      let next = this.snapToStep(value)
      // Adıma oturtma sınırı aşarsa sınırın kendisi kullanılır.
      next = Math.min(upper, Math.max(lower, next))
      const pair = index === 0 ? [next, hi] : [lo, next]
      if (pair[0] === lo && pair[1] === hi) return false
      this.notifyFormDirty()
      this.$emit('update:modelValue', pair)
      return true
    },
    emitRangeChange() {
      this.$nextTick(() => this.$emit('change', this.rangeValue.slice()))
    },
    isRtl() {
      return getComputedStyle(this.$el).direction === 'rtl'
    },
    onRangeKeydown(event, index) {
      if (this.disabled) return
      const step = Number(this.step) > 0 ? Number(this.step) : 1
      const forward = this.isRtl() ? 'ArrowLeft' : 'ArrowRight'
      const backward = this.isRtl() ? 'ArrowRight' : 'ArrowLeft'
      const thumb = this.rangeThumbs[index]
      let next
      switch (event.key) {
        case forward:
        case 'ArrowUp':
          next = thumb.value + step
          break
        case backward:
        case 'ArrowDown':
          next = thumb.value - step
          break
        case 'PageUp':
          next = thumb.value + step * 10
          break
        case 'PageDown':
          next = thumb.value - step * 10
          break
        case 'Home':
          next = thumb.min
          break
        case 'End':
          next = thumb.max
          break
        default:
          return
      }
      event.preventDefault()
      if (this.setRangeThumb(index, next)) this.emitRangeChange()
    },
    /** İşaretçi konumundan değer — tutamaç yarı genişliği kadar iç pay (yerel range ile aynı yol). */
    rangeValueFromPointer(event) {
      const rail = this.$refs.rail
      const rect = rail.getBoundingClientRect()
      const thumbEl = rail.querySelector('.ui-slider-range-thumb')
      const half = thumbEl ? thumbEl.offsetWidth / 2 : 0
      const usable = rect.width - half * 2
      if (!(usable > 0)) return Number(this.min)
      const offset = this.isRtl() ? rect.right - event.clientX : event.clientX - rect.left
      const ratio = Math.min(1, Math.max(0, (offset - half) / usable))
      return Number(this.min) + ratio * (Number(this.max) - Number(this.min))
    },
    onRangePointerDown(event) {
      if (this.disabled || (event.pointerType === 'mouse' && event.button !== 0)) return
      event.preventDefault()
      const value = this.rangeValueFromPointer(event)
      const [lo, hi] = this.rangeValue
      const hit = event.target?.getAttribute?.('data-thumb')
      let index
      if (lo === hi) {
        // Üst üste: tıklanan yön hangisinin hareket edebileceğini belirler.
        if (value < lo) index = 0
        else if (value > hi) index = 1
        else index = lo >= Number(this.max) ? 0 : 1
      } else if (hit != null) {
        index = Number(hit)
      } else {
        index = Math.abs(value - lo) <= Math.abs(value - hi) ? 0 : 1
      }
      this.activeThumb = index
      const rail = this.$refs.rail
      try {
        rail.setPointerCapture(event.pointerId)
      } catch {
        // Sentetik işaretçi yakalanamaz; hareket yine ray üzerinde izlenir.
      }
      rail.querySelector(`[data-thumb="${index}"]`)?.focus({ preventScroll: true })
      this.rangeDrag = { index, pointerId: event.pointerId, changed: false }
      // Raya tıklama: en yakın tutamaç o noktaya gelir.
      if (hit == null && this.setRangeThumb(index, value)) this.rangeDrag.changed = true
    },
    onRangePointerMove(event) {
      const drag = this.rangeDrag
      if (!drag || drag.pointerId !== event.pointerId) return
      if (this.setRangeThumb(drag.index, this.rangeValueFromPointer(event))) drag.changed = true
    },
    onRangePointerEnd(event) {
      const drag = this.rangeDrag
      if (!drag || drag.pointerId !== event.pointerId) return
      this.rangeDrag = null
      try {
        this.$refs.rail.releasePointerCapture(event.pointerId)
      } catch {
        // Zaten bırakılmış.
      }
      if (drag.changed) this.emitRangeChange()
    },
  },
}
</script>
