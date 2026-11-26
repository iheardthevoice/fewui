<template>
  <div
    role="group"
    :aria-label="ariaLabel || undefined"
    :class="['ui-number-stepper', `ui-number-stepper--${size}`, disabled ? 'ui-number-stepper--disabled' : '']"
  >
    <ui-button
      type="button"
      variant="solid"
      color="secondary"
      :size="size"
      cubed
      prefix-icon="minus"
      :disabled="disabled || atMin"
      :aria-label="resolvedDecreaseLabel"
      @click="bump(-1)"
    />
    <output
      class="ui-number-stepper-value"
      aria-live="polite"
    >{{ displayValue }}</output>
    <ui-button
      type="button"
      variant="solid"
      color="secondary"
      :size="size"
      cubed
      prefix-icon="plus"
      :disabled="disabled || atMax"
      :aria-label="resolvedIncreaseLabel"
      @click="bump(1)"
    />
  </div>
</template>

<script>
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { CONTROL_SIZES } from '../utils/sizes.js'

/**
 * Sayı artırma / azaltma (− değer +). Adet, kişi sayısı gibi küçük tam sayılar için.
 * Yazılabilir sayı gerekiyorsa `ui-input type="number"` kullanılır.
 */
export default {
  name: 'NumberStepper',
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      default: 'sm',
      validator: (v) => CONTROL_SIZES.includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Grubun erişilebilir adı (ör. "Kişi sayısı") */
    ariaLabel: {
      type: String,
      default: '',
    },
    decreaseLabel: {
      type: String,
      default: '',
    },
    increaseLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    current() {
      const n = Number(this.modelValue)
      return Number.isFinite(n) ? n : null
    },
    displayValue() {
      return this.current == null ? '—' : String(this.current)
    },
    atMin() {
      return this.current != null && this.current - this.step < this.min
    },
    atMax() {
      return this.current != null && this.current + this.step > this.max
    },
    resolvedDecreaseLabel() {
      return this.decreaseLabel || resolveUiText(this, 'ui.numberStepper.decrease', 'Decrease')
    },
    resolvedIncreaseLabel() {
      return this.increaseLabel || resolveUiText(this, 'ui.numberStepper.increase', 'Increase')
    },
  },
  methods: {
    bump(direction) {
      const base = this.current == null ? this.min : this.current
      const next = this.current == null ? base : base + direction * this.step
      this.$emit('update:modelValue', Math.min(this.max, Math.max(this.min, next)))
    },
  },
}
</script>
