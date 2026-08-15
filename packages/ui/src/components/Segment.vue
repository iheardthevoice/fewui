<template>
  <button
    type="button"
    role="radio"
    :class="segmentClass"
    :aria-checked="isSelected ? 'true' : 'false'"
    :disabled="disabled"
    @click="select"
  >
    <span
      v-if="hasPrepend"
      class="ui-segment-affix ui-segment-affix--prepend"
    >
      <slot name="prepend" />
    </span>
    <span
      v-if="icon"
      class="ui-segment-icon"
      aria-hidden="true"
    >
      <ui-icon
        :name="icon"
        :size="iconSize"
      />
    </span>
    <span
      v-if="showLabel"
      class="ui-segment-label"
    >{{ label }}</span>
    <span
      v-else-if="label"
      class="sr-only"
    >{{ label }}</span>
    <span
      v-if="hasAppend"
      class="ui-segment-affix ui-segment-affix--append"
    >
      <slot name="append" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Segment',
  inject: {
    uiSegmentGroup: {
      default: null,
    },
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    /** Font Awesome ikon adı; `iconOnly` veya dar düzenlerde yalnız ikon gösterilir */
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasPrepend() {
      return Boolean(this.$slots.prepend)
    },
    hasAppend() {
      return Boolean(this.$slots.append)
    },
    hasAffixes() {
      return this.hasPrepend || this.hasAppend
    },
    isSelected() {
      if (!this.uiSegmentGroup) return false
      return Object.is(this.uiSegmentGroup.modelValue, this.value)
    },
    iconOnly() {
      const group = this.uiSegmentGroup
      if (!group) return false
      if (typeof group.resolvedIconOnly === 'boolean') return group.resolvedIconOnly
      return Boolean(group.iconOnly)
    },
    showLabel() {
      return !this.iconOnly
    },
    iconSize() {
      const size = this.uiSegmentGroup?.resolvedSize || 'md'
      if (this.iconOnly) {
        return size === 'lg' ? 'sm' : 'xs'
      }
      return size === 'lg' ? 'sm' : 'xs'
    },
    segmentClass() {
      return [
        'ui-segment',
        { 'ui-segment--selected': this.isSelected },
        this.icon && 'ui-segment--with-icon',
        this.iconOnly && 'ui-segment--icon-only',
        this.hasAffixes && 'ui-segment--affixed',
      ]
    },
  },
  mounted() {
    if (!this.uiSegmentGroup && typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn('[Segment] Yalnızca <ui-segment-group> içinde kullanılmalı.')
    }
  },
  methods: {
    select() {
      if (this.disabled || !this.uiSegmentGroup) return
      this.uiSegmentGroup.$emit('update:modelValue', this.value)
    },
  },
}
</script>
