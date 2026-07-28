<script>
import CurrencyInput from './CurrencyInput.vue'
import { getPriceInputConfig } from '../price-input-config.js'

export default {
  name: 'PriceInput',
  components: { CurrencyInput },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    currency: {
      type: String,
      default: undefined,
    },
    /** BCP 47 fiyat biçimi; verilmezse fewui global ayarı kullanılır. */
    format: {
      type: String,
      default: undefined,
    },
    /** `format` için geriye uyumlu alias. */
    locale: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur'],
  setup() {
    return { priceInputConfig: getPriceInputConfig() }
  },
  computed: {
    resolvedCurrency() {
      return this.currency || this.priceInputConfig.currency
    },
    resolvedFormat() {
      return this.format || this.locale || this.priceInputConfig.format
    },
  },
}
</script>

<template>
  <CurrencyInput
    :model-value="modelValue"
    :currency="resolvedCurrency"
    :locale="resolvedFormat"
    v-bind="$attrs"
    @update:model-value="$emit('update:modelValue', $event)"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  />
</template>
