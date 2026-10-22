<template>
  <label
    :class="checkboxClasses"
    @keydown.enter.prevent="toggle"
    @keydown.space.prevent="toggle"
  >
    <input
      :type="nativeType"
      :name="nativeName"
      :value="groupValueString"
      :checked="isChecked"
      :tabindex="presentational ? -1 : undefined"
      :aria-hidden="presentational ? 'true' : undefined"
      class="sr-only"
      @change="onNativeChange"
    />
    <span
      class="ui-checkbox-box"
      aria-hidden="true"
    >
      <ui-icon
        v-if="isChecked"
        name="check"
        size="xs"
        class="ui-checkbox-check-icon text-primary-foreground"
      />
    </span>
    <span
      v-if="!presentational"
      class="ui-checkbox-body"
    >
      <span
        v-if="$slots.label || label"
        class="ui-checkbox-label"
      >
        <slot name="label">{{ label }}</slot>
      </span>
      <span
        v-if="description"
        class="ui-checkbox-description"
      >{{ description }}</span>
    </span>
  </label>
</template>

<script>
import { CONTROL_SIZES } from '../utils/sizes.js'

const SIZES = CONTROL_SIZES

export default {
  name: 'Checkbox',
  inject: {
    uiCheckboxGroup: {
      default: null,
    },
  },
  props: {
    /** Grup modunda seçenek kimliği. */
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    /** Tekil mod: `v-model` boolean. */
    modelValue: {
      type: Boolean,
      default: undefined,
    },
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** `list` varyantında satırları eşit iç boşluklu kutu yapar; işaretli satır dolgu ile vurgulanır (kenarlık yok). */
    highlight: {
      type: Boolean,
      default: false,
    },
    /** Kutu ölçüsü: sm 16px · md 18px · lg 22px (dokunmatik satır) */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /**
     * Yalnız durum göstergesi — etiket gövdesi yok, tıklama / odak dıştaki satır düğmesinde
     * (ör. sepet satırında seçim kutusu). Satır kendi `aria-pressed` / `aria-checked` bilgisini taşır.
     */
    presentational: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    inGroup() {
      return this.uiCheckboxGroup != null
    },
    isChecked() {
      if (this.inGroup) {
        const list = this.uiCheckboxGroup.modelValue
        if (!Array.isArray(list)) return false
        return list.some((v) => Object.is(v, this.value))
      }
      return !!this.modelValue
    },
    nativeType() {
      return 'checkbox'
    },
    nativeName() {
      return this.inGroup ? this.uiCheckboxGroup.groupName : undefined
    },
    groupValueString() {
      if (!this.inGroup) return undefined
      return String(this.value)
    },
    checkboxClasses() {
      const variant =
        this.inGroup && this.uiCheckboxGroup != null
          ? this.uiCheckboxGroup.normalizedVariant
          : 'list'
      return [
        'ui-checkbox',
        `ui-checkbox--${variant}`,
        this.size !== 'md' ? `ui-checkbox--${this.size}` : '',
        {
          'ui-checkbox--checked': this.isChecked,
          'ui-checkbox--highlight': this.highlight,
          'ui-checkbox--presentational': this.presentational,
        },
      ]
    },
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const checked = e.target.checked
        const raw = this.uiCheckboxGroup.modelValue
        const arr = Array.isArray(raw) ? [...raw] : []
        const i = arr.findIndex((v) => Object.is(v, this.value))
        if (checked && i === -1) {
          arr.push(this.value)
        } else if (!checked && i !== -1) {
          arr.splice(i, 1)
        }
        this.uiCheckboxGroup.$emit('update:modelValue', arr)
      } else {
        this.$emit('update:modelValue', e.target.checked)
      }
    },
    toggle() {
      if (this.inGroup) {
        const raw = this.uiCheckboxGroup.modelValue
        const arr = Array.isArray(raw) ? [...raw] : []
        const i = arr.findIndex((v) => Object.is(v, this.value))
        if (i === -1) {
          arr.push(this.value)
        } else {
          arr.splice(i, 1)
        }
        this.uiCheckboxGroup.$emit('update:modelValue', arr)
      } else {
        this.$emit('update:modelValue', !this.modelValue)
      }
    },
  },
}
</script>
