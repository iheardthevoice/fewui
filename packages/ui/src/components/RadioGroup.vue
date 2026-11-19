<template>
  <div
    :class="rootClass"
    :style="rootStyle()"
    role="radiogroup"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import { CONTROL_SIZES } from '../utils/sizes.js'

const nextRadioGroupId = createUiIdFactory('ui-radio-group')

const VARIANTS = ['list', 'button']
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
    /**
     * `button` + yatay: sabit sütun sayısı (dar dialog'da 3 seçenek yan yana).
     * `0` (varsayılan) — `auto-fit` ile genişliğe göre sarılır.
     */
    columns: {
      type: Number,
      default: 0,
      validator: (v) => Number.isInteger(v) && v >= 0 && v <= 6,
    },
    /**
     * Yalnız `button`: kartlar kontrol boyuna iner (button / input ile aynı yükseklik ve köşe),
     * etiket tek satır ortalı, seçim dolgu ile gösterilir. Boş (varsayılan) — açıklamalı kart.
     */
    size: {
      type: String,
      default: undefined,
      validator: (v) => v == null || CONTROL_SIZES.includes(v),
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return { groupName: nextRadioGroupId() }
  },
  computed: {
    normalizedVariant() {
      const v = this.variant || 'list'
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
        this.normalizedVariant === 'button' && this.size
          ? `ui-radio-group--control ui-radio-group--control-${this.size}`
          : '',
      )
    },
  },
  methods: {
    rootStyle() {
      if (this.normalizedVariant !== 'button' || this.effectiveOrientation !== 'horizontal') return undefined
      if (!this.columns) return undefined
      return { gridTemplateColumns: `repeat(${this.columns}, minmax(0, 1fr))` }
    },
  },
  provide() {
    return {
      uiRadioGroup: this,
    }
  },
}
</script>
