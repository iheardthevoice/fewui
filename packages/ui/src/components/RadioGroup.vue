<template>
  <div
    :class="rootClass"
    role="radiogroup"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

let rgCounter = 0

const VARIANTS = ['list', 'button', 'List', 'Button']
const ORIENTATIONS = ['vertical', 'horizontal']

export default {
  name: 'RadioGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    /** `list` — satır listesi; `button` — kart seçenekleri */
    variant: {
      type: String,
      default: 'list',
      validator: (v) => VARIANTS.includes(v),
    },
    /**
     * `list`: varsayılan dikey; `horizontal` yan yana.
     * `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.).
     */
    orientation: {
      type: String,
      default: null,
      validator: (v) => v == null || v === '' || ORIENTATIONS.includes(v),
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    rgCounter += 1
    return { groupName: `ui-radio-group-${rgCounter}` }
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
      return this.orientation === 'horizontal' ? 'horizontal' : 'vertical'
    },
    rootClass() {
      return cn(
        'ui-radio-group',
        `ui-radio-group--${this.normalizedVariant}`,
        this.normalizedVariant === 'list' && this.effectiveOrientation === 'horizontal'
          ? 'ui-radio-group--horizontal'
          : '',
        this.normalizedVariant === 'button' && this.effectiveOrientation === 'vertical'
          ? 'ui-radio-group--vertical'
          : '',
      )
    },
  },
  provide() {
    return {
      uiRadioGroup: this,
    }
  },
}
</script>
