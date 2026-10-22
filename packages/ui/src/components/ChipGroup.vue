<template>
  <div
    ref="root"
    :class="rootClass"
    :role="multiple ? 'group' : 'radiogroup'"
    :aria-label="ariaLabel || undefined"
    v-bind="passthroughAttrs"
    @keydown="onKeydown"
  >
    <ui-button
      v-for="(option, index) in normalizedOptions"
      :key="optionKey(option, index)"
      type="button"
      :size="size"
      rounded
      :variant="isSelected(option) ? 'solid' : 'outline'"
      :color="isSelected(option) ? 'primary' : 'secondary'"
      :prefix-icon="option.icon || undefined"
      :disabled="disabled || option.disabled"
      :role="multiple ? undefined : 'radio'"
      :aria-checked="multiple ? undefined : (isSelected(option) ? 'true' : 'false')"
      :aria-pressed="multiple ? (isSelected(option) ? 'true' : 'false') : undefined"
      :aria-label="option.ariaLabel || undefined"
      :aria-current="option.ariaCurrent || undefined"
      :tabindex="index === focusIndex ? 0 : -1"
      data-ui-chip
      @click="toggle(option)"
      @focus="focusIndex = index"
    >
      <slot
        name="option"
        :option="option"
        :selected="isSelected(option)"
      >
        {{ option.label }}
      </slot>
    </ui-button>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { CONTROL_SIZES } from '../utils/sizes.js'

const SIZES = CONTROL_SIZES

/**
 * Seçim çipleri — dönem, kapsam veya etiket gibi kısa seçenekler yatay sırada.
 * Tek seçimde `radiogroup` (ok tuşları seçimi taşır), `multiple` ile `aria-pressed` düğme grubu.
 * `scrollable` dar ekranda yatay kaydırır. Seçili çip dolu primary, diğerleri outline.
 * Sekme için değil (`ui-tabs`), form içi ikili seçim için değil (`ui-segment-group`).
 */
export default {
  name: 'ChipGroup',
  inheritAttrs: false,
  props: {
    /** Tek seçimde değer, `multiple` ile dizi */
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: null,
    },
    /** `{ value, label, icon?, disabled?, ariaLabel?, ariaCurrent? }[]` (`ariaCurrent`: ör. `'date'` bugünkü birim) */
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    /** Tek seçimde seçili çipe tekrar basınca seçimi kaldırır */
    clearable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'sm',
      validator: (v) => SIZES.includes(v),
    },
    /** Tek satırda yatay kaydırma (dar ekran); `false` iken alt satıra kayar */
    scrollable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      focusIndex: 0,
    }
  },
  computed: {
    rootClass() {
      return cn(
        'ui-chip-group',
        this.scrollable ? 'ui-chip-group--scrollable' : 'ui-chip-group--wrap',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    normalizedOptions() {
      return (this.options || []).map((option) =>
        option && typeof option === 'object' ? option : { value: option, label: String(option) },
      )
    },
    selectedValues() {
      if (this.multiple) return Array.isArray(this.modelValue) ? this.modelValue : []
      return this.modelValue == null ? [] : [this.modelValue]
    },
  },
  watch: {
    normalizedOptions: {
      immediate: true,
      handler() {
        this.syncFocusIndex()
      },
    },
    modelValue() {
      this.syncFocusIndex()
    },
  },
  methods: {
    optionKey(option, index) {
      return option.value == null ? `__${index}` : String(option.value)
    },
    isSelected(option) {
      return this.selectedValues.some((value) => value === option.value)
    },
    syncFocusIndex() {
      const selected = this.normalizedOptions.findIndex((option) => this.isSelected(option))
      if (selected >= 0) {
        this.focusIndex = selected
        return
      }
      const firstEnabled = this.normalizedOptions.findIndex((option) => !option.disabled)
      this.focusIndex = firstEnabled >= 0 ? firstEnabled : 0
    },
    emitValue(next) {
      this.$emit('update:modelValue', next)
      this.$emit('change', next)
    },
    toggle(option) {
      if (this.disabled || option.disabled) return
      if (this.multiple) {
        const current = this.selectedValues
        const next = this.isSelected(option)
          ? current.filter((value) => value !== option.value)
          : [...current, option.value]
        this.emitValue(next)
        return
      }
      if (this.isSelected(option)) {
        if (this.clearable) this.emitValue(null)
        return
      }
      this.emitValue(option.value)
    },
    chipElements() {
      return Array.from(this.$refs.root?.querySelectorAll('[data-ui-chip]') || [])
    },
    onKeydown(event) {
      const keys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End']
      if (!keys.includes(event.key)) return
      const options = this.normalizedOptions
      const enabled = options
        .map((option, index) => (option.disabled || this.disabled ? -1 : index))
        .filter((index) => index >= 0)
      if (!enabled.length) return
      event.preventDefault()
      const position = Math.max(0, enabled.indexOf(this.focusIndex))
      let nextPosition = position
      if (event.key === 'Home') nextPosition = 0
      else if (event.key === 'End') nextPosition = enabled.length - 1
      else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextPosition = (position + 1) % enabled.length
      } else {
        nextPosition = (position - 1 + enabled.length) % enabled.length
      }
      const nextIndex = enabled[nextPosition]
      this.focusIndex = nextIndex
      this.chipElements()[nextIndex]?.focus()
      if (!this.multiple) this.toggle(options[nextIndex])
    },
  },
}
</script>
