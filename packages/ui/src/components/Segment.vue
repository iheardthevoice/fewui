<template>
  <component
    :is="hasRouterTo ? 'RouterLink' : 'button'"
    v-bind="rootAttrs"
    :class="segmentClass"
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
        :type="segmentIconType"
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
  </component>
</template>

<script>
import { RouterLink } from 'vue-router'
import { iconTypeProp, themeIconTypeComputed } from '../theme/icon-type-prop.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'

export default {
  name: 'Segment',
  components: { RouterLink },
  mixins: [uiDefaultsMixin],
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
    iconType: iconTypeProp,
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * `vue-router` hedefi; verildiğinde segment `<a>` olarak çizilir (gezinme kapsülü).
     * Seçili durum yine grubun `modelValue` değerinden gelir; seçili bağlantı `aria-current="page"` alır.
     */
    to: {
      type: [String, Object],
      default: null,
    },
  },
  computed: {
    ...themeIconTypeComputed('iconType'),
    /** Varsayılan `duotone`; `icon-type` verilirse o kullanılır. */
    segmentIconType() {
      if (this.iconType != null && this.iconType !== '') {
        return this.resolvedIconType
      }
      return 'duotone'
    },
    hasRouterTo() {
      return this.to != null && this.to !== '' && !this.disabled
    },
    rootAttrs() {
      if (this.hasRouterTo) {
        return { to: this.to, 'aria-current': this.isSelected ? 'page' : undefined }
      }
      const navigation = Boolean(this.uiSegmentGroup?.navigation)
      return {
        type: 'button',
        role: navigation ? undefined : 'radio',
        'aria-checked': navigation ? undefined : this.isSelected ? 'true' : 'false',
        tabindex: navigation ? undefined : this.rovingTabindex,
        disabled: this.disabled,
      }
    },
    hasPrepend() {
      return Boolean(this.$slots.prepend)
    },
    hasAppend() {
      return Boolean(this.$slots.append)
    },
    hasAffixes() {
      return this.hasPrepend || this.hasAppend
    },
    /** Radio grubunda tek Tab durağı: seçili segment; seçim yoksa hepsi odaklanabilir. */
    rovingTabindex() {
      const v = this.uiSegmentGroup?.modelValue
      if (v === undefined || v === null || v === '') return 0
      return this.isSelected ? 0 : -1
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
      if (this.disabled || !this.uiSegmentGroup || this.hasRouterTo) return
      this.uiSegmentGroup.$emit('update:modelValue', this.value)
    },
  },
}
</script>
