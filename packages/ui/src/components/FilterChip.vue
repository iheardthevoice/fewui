<template>
  <ui-button
    type="button"
    :variant="buttonVariant"
    :color="buttonColor"
    :size="size"
    rounded
    :prefix-icon="icon || undefined"
    :suffix-icon="showClear ? 'xmark' : undefined"
    :disabled="disabled"
    :aria-label="ariaLabel || triggerLabel"
    :aria-expanded="expandedAttr"
    :aria-keyshortcuts="showClear ? 'Backspace Delete' : undefined"
    @click="onClick"
    @keydown="onKeydown"
  >
    {{ triggerLabel }}
  </ui-button>
</template>

<script>
import { CONTROL_SIZES } from '../utils/sizes.js'

const SIZES = CONTROL_SIZES
const CHIP_COLORS = ['primary', 'secondary', 'success', 'warning', 'danger']

/**
 * Filtre / seçim çipi — boşken nötr (`solid secondary`), değer seçiliyken veya açıkken
 * `muted primary`. Dolu primary birincil eyleme (CTA) kalır.
 * Popover / select tetikleyicisi olarak kullanılır; değer doluyken sağdaki × veya
 * Backspace / Delete `clear` yayar.
 */
export default {
  name: 'FilterChip',
  props: {
    icon: {
      type: String,
      default: '',
    },
    /** Değer yokken etiket (ör. “Masa seç”) */
    emptyLabel: {
      type: String,
      required: true,
    },
    /** Değer varken etiket */
    valueLabel: {
      type: String,
      default: '',
    },
    empty: {
      type: Boolean,
      default: false,
    },
    /** Bağlı seçici açıkken değer yokken de vurgulu görünür */
    active: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    ariaExpanded: {
      type: [Boolean, String],
      default: undefined,
    },
    size: {
      type: String,
      default: 'sm',
      validator: (v) => SIZES.includes(v),
    },
    /** Verilirse boş / dolu durum rengi yerine sabit ton kullanılır */
    color: {
      type: String,
      default: '',
      validator: (v) => !v || CHIP_COLORS.includes(v),
    },
  },
  emits: ['click', 'clear'],
  computed: {
    triggerLabel() {
      return this.empty ? this.emptyLabel : this.valueLabel
    },
    showClear() {
      return this.clearable && !this.empty
    },
    buttonColor() {
      if (this.color) return this.color
      return !this.empty || this.active ? 'primary' : 'secondary'
    },
    buttonVariant() {
      return this.buttonColor === 'secondary' ? 'solid' : 'muted'
    },
    expandedAttr() {
      if (this.ariaExpanded === undefined || this.ariaExpanded === null) return undefined
      if (this.ariaExpanded === true || this.ariaExpanded === 'true') return 'true'
      if (this.ariaExpanded === false || this.ariaExpanded === 'false') return 'false'
      return String(this.ariaExpanded)
    },
  },
  methods: {
    onClick(event) {
      if (this.showClear && event?.target?.closest?.('.ui-button-suffix, [data-icon="xmark"], .fa-xmark')) {
        event.preventDefault()
        event.stopPropagation()
        this.$emit('clear', event)
        return
      }
      this.$emit('click', event)
    },
    onKeydown(event) {
      if (!this.showClear || this.disabled) return
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault()
        this.$emit('clear', event)
      }
    },
  },
}
</script>
