<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="resolvedIcon"
      class="ui-empty-icon"
    >
      <ui-icon
        :name="resolvedIcon"
        :type="resolvedIconType"
        :size="iconSize"
      />
    </div>
    <h2
      v-if="title"
      class="ui-empty-title"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="ui-empty-description ui-text-default"
    >
      {{ description }}
    </p>
    <div
      v-if="$slots.default"
      class="ui-empty-actions"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { iconTypeProp, themeIconTypeComputed } from '../theme/icon-type-prop.js'
import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'

const SIZES = ['sm', 'md', 'lg']

const ICON_SIZE_BY_EMPTY = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

export default {
  name: 'Empty',
  inheritAttrs: false,
  props: {
    /** `ui-icon` `name` (örn. `plus`). Boş string → ikon kutusu gösterilmez. */
    icon: {
      type: String,
      default: 'plus',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** `ui-icon` `type` */
    iconType: iconTypeProp,
    size: {
      type: String,
      default: undefined,
      validator: (v) => v == null || SIZES.includes(v),
    },
  },
  computed: {
    ...themeIconTypeComputed(),
    resolvedSize() {
      return resolveThemeControlSize(this.size, { key: 'controlSize', defaultSize: 'md' })
    },
    iconSize() {
      return ICON_SIZE_BY_EMPTY[this.resolvedSize] ?? 'md'
    },
    resolvedIcon() {
      if (this.icon == null || this.icon === '') {
        return null
      }
      return this.icon
    },
    rootClass() {
      return cn('ui-empty', `ui-empty--${this.resolvedSize}`, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
