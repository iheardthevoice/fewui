<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="title || showIcon"
      class="ui-field__title-row"
    >
      <span
        v-if="showIcon"
        class="ui-field__title-icon"
        aria-hidden="true"
      >
        <ui-icon
          :name="icon"
          :type="resolvedIconType"
          size="md"
        />
      </span>
      <span
        v-if="title"
        class="ui-field__title"
      >
        {{ title }}
      </span>
    </div>
    <div
      v-if="hasValue"
      class="ui-field__value"
      :class="fill ? 'mt-auto' : undefined"
    >
      <slot />
    </div>
    <p
      v-if="subtitle"
      class="ui-field__subtitle"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { iconTypeProp, themeIconTypeComputed } from '../theme/icon-type-prop.js'

export default {
  name: 'Field',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    /** true: yuvarlatılmış arka plan (kenarlık yok). */
    card: {
      type: Boolean,
      default: false,
    },
    /** Grid / flex hücrede kart yüksekliğini eşitlemek için `h-full`. */
    fill: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconType: iconTypeProp,
  },
  computed: {
    ...themeIconTypeComputed(),
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    hasValue() {
      return Boolean(this.$slots.default)
    },
    showIcon() {
      return Boolean(this.icon)
    },
    rootClass() {
      return cn(
        'ui-field',
        this.card && 'ui-field--card',
        this.fill && 'h-full min-h-0 flex flex-col',
        this.$attrs.class,
      )
    },
  },
}
</script>
