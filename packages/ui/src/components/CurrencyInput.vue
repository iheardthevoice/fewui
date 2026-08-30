<template>
  <ui-input
    :id="resolvedId"
    v-model="innerValue"
    type="text"
    inputmode="decimal"
    class="w-full"
    :size="size"
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="placeholder"
    :name="name"
    :autocomplete="autocomplete"
    :aria-describedby="ariaDescribedby"
    v-bind="passthroughAttrs"
    @focus="$emit('focus', $event)"
    @blur="onBlur"
  >
    <template #prepend>
      <span
        class="ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground"
        aria-hidden="true"
      >{{ displaySymbol }}</span>
    </template>
  </ui-input>
</template>

<script>
import {
  formatMoneyInput,
  getCurrencySymbol,
  parseLocalizedMoneyInput,
  resolveCurrencyCode,
} from '../utils/currency.js'

let currencyInputCounter = 0

const SIZES = ['sm', 'md', 'lg']

export default {
  name: 'CurrencyInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    /** ISO veya sembol (TRY, ₺, …); verilmezse `TRY` (seeder varsayılanı). */
    currency: {
      type: String,
      default: 'TRY',
    },
    /** Binlik ve ondalık ayırıcılarını belirleyen BCP 47 locale. */
    locale: {
      type: String,
      default: 'tr-TR',
    },
    size: {
      type: String,
      default: undefined,
      validator: (v) => v == null || SIZES.includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: undefined,
    },
    id: {
      type: String,
      default: undefined,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    ariaDescribedby: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur'],
  data() {
    currencyInputCounter += 1
    return { fallbackId: `ui-currency-input-${currencyInputCounter}` }
  },
  computed: {
    displaySymbol() {
      return getCurrencySymbol(this.currency)
    },
    resolvedCurrencyCode() {
      return resolveCurrencyCode(this.currency)
    },
    innerValue: {
      get() {
        return formatMoneyInput(this.modelValue, this.locale)
      },
      set(val) {
        const next = parseLocalizedMoneyInput(val, this.locale)
        this.$emit('update:modelValue', next)
      },
    },
    resolvedId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    passthroughAttrs() {
      const skip = new Set([
        'class',
        'style',
        'value',
        'id',
        'disabled',
        'readonly',
        'placeholder',
        'name',
        'autocomplete',
        'currency',
        'locale',
        'size',
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
    onBlur(e) {
      this.$emit('blur', e)
    },
  },
}
</script>
