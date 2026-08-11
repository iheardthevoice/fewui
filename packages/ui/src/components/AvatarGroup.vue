<template>
  <div
    :class="rootClass"
    role="group"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
    <span
      v-if="overflowCount > 0"
      class="ui-avatar-group-overflow"
      :class="SIZE_CLASS[size] || SIZE_CLASS.md"
    >
      {{ overflowText }}
    </span>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl']

const SIZE_CLASS = {
  xs: 'ui-avatar-group--xs',
  sm: 'ui-avatar-group--sm',
  md: 'ui-avatar-group--md',
  lg: 'ui-avatar-group--lg',
  xl: 'ui-avatar-group--xl',
}

export default {
  name: 'AvatarGroup',
  SIZE_CLASS,
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /** Extra count shown as +N after visible avatars. */
    overflowCount: {
      type: Number,
      default: 0,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    rootClass() {
      return cn(
        'ui-avatar-group',
        SIZE_CLASS[this.size] || SIZE_CLASS.md,
        this.$attrs.class
      )
    },
    overflowText() {
      const n = Math.max(0, Math.trunc(Number(this.overflowCount) || 0))
      return `+${n}`
    },
  },
}
</script>
