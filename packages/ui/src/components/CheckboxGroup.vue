<template>
  <div
    :class="rootClass"
    role="group"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const VARIANTS = ['list', 'button', 'List', 'Button']
const ORIENTATIONS = ['vertical', 'horizontal']

let cgCounter = 0

export default {
  name: 'CheckboxGroup',
  props: {
    /** Seçili değerler dizisi (ilkel karşılaştırma). */
    modelValue: {
      type: Array,
      default: () => [],
    },
    /** `list` — dikey liste; `button` — kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
    variant: {
      type: String,
      default: 'list',
      validator: (v) => VARIANTS.includes(v),
    },
    /**
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı seçim vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (v) => v == null || v === '' || ORIENTATIONS.includes(v),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    cgCounter += 1
    return { groupName: `ui-checkbox-group-${cgCounter}` }
  },
  computed: {
    normalizedVariant() {
      const v = (this.variant || 'list').toLowerCase()
      return v === 'button' ? 'button' : 'list'
    },
    effectiveOrientation() {
      if (this.normalizedVariant === 'button') {
        return this.orientation === 'vertical' ? 'vertical' : 'horizontal'
      }
      return 'vertical'
    },
    rootClass() {
      return cn(
        'ui-checkbox-group',
        `ui-checkbox-group--${this.normalizedVariant}`,
        this.normalizedVariant === 'button' && this.effectiveOrientation === 'vertical'
          ? 'ui-checkbox-group--vertical'
          : '',
      )
    },
  },
  provide() {
    return {
      uiCheckboxGroup: this,
    }
  },
}
</script>
