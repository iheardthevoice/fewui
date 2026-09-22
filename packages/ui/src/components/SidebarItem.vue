<template>
  <RouterLink
    v-if="hasRouterTo"
    v-slot="{ href, navigate }"
    :to="to"
    custom
  >
    <a
      :href="href"
      :class="itemClasses"
      :aria-current="active ? 'page' : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :tabindex="disabled ? -1 : undefined"
      v-bind="forwardedAttrs"
      @click="onRouterLinkClick($event, navigate)"
    >
      <span
        v-if="usesCubedCenterLayout"
        class="ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
      >
        <ui-icon
          v-if="prefixIcon"
          :size="cubedIconSize"
          :name="prefixIcon"
        />
        <ui-icon
          v-else-if="suffixIcon"
          :size="cubedIconSize"
          :name="suffixIcon"
        />
        <slot v-else />
      </span>
      <template v-else>
        <span
          v-if="prefixIcon"
          class="inline-flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <ui-icon
            :size="inlineIconSize"
            :name="prefixIcon"
          />
        </span>
        <span :class="textContentClass">
          <slot />
        </span>
        <span
          v-if="suffixIcon"
          class="inline-flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <ui-icon
            :size="inlineIconSize"
            :name="suffixIcon"
          />
        </span>
      </template>
    </a>
  </RouterLink>
  <button
    v-else
    :type="nativeType"
    :class="itemClasses"
    :disabled="disabled || undefined"
    :aria-current="active ? 'page' : undefined"
    v-bind="forwardedAttrs"
    @click="onClick"
  >
    <span
      v-if="usesCubedCenterLayout"
      class="ui-sidebar-item-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center [&_.ui-icon]:leading-none"
    >
      <ui-icon
        v-if="prefixIcon"
        :size="cubedIconSize"
        :name="prefixIcon"
      />
      <ui-icon
        v-else-if="suffixIcon"
        :size="cubedIconSize"
        :name="suffixIcon"
      />
      <slot v-else />
    </span>
    <template v-else>
      <span
        v-if="prefixIcon"
        class="inline-flex shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <ui-icon
          :size="inlineIconSize"
          :name="prefixIcon"
        />
      </span>
      <span :class="textContentClass">
        <slot />
      </span>
      <span
        v-if="suffixIcon"
        class="inline-flex shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <ui-icon
          :size="inlineIconSize"
          :name="suffixIcon"
        />
      </span>
    </template>
  </button>
</template>

<script>
import { Comment, Fragment, Text } from 'vue'
import { RouterLink } from 'vue-router'
import { cn } from '../utils/cn.js'
import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'

const sizes = ['sm', 'md', 'lg']
const NATIVE_TYPES = ['button', 'submit', 'reset']

const sizeClasses = {
  sm: 'ui-control-h-sm',
  md: 'ui-control-h-md',
  lg: 'ui-control-h-lg',
}

const cubedSizeClasses = {
  sm: 'ui-control-cubed-sm aspect-square',
  md: 'ui-control-cubed-md aspect-square',
  lg: 'ui-control-cubed-lg aspect-square',
}

export default {
  name: 'SidebarItem',
  components: { RouterLink },
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => NATIVE_TYPES.includes(value),
    },
    size: {
      type: String,
      default: undefined,
      validator: (value) => value == null || sizes.includes(value),
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    cubed: {
      type: Boolean,
      default: false,
    },
    fulled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    textAlign: {
      type: String,
      default: 'center',
      validator: (v) => v === 'left' || v === 'center',
    },
  },
  emits: ['click'],
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== ''
    },
    resolvedSize() {
      return resolveThemeControlSize(this.size, { key: 'controlSize', defaultSize: 'md' })
    },
    usesCubedCenterLayout() {
      if (!this.cubed) return false
      if (this.prefixIcon && this.suffixIcon) return false
      if (this.prefixIcon || this.suffixIcon) {
        return !this.hasRenderableDefaultSlot
      }
      return true
    },
    hasRenderableDefaultSlot() {
      const slot = this.$slots.default
      if (!slot) return false
      return slot().some((vnode) => this.isRenderableVNode(vnode))
    },
    inlineIconSize() {
      if (this.resolvedSize === 'lg') return 'md'
      if (this.resolvedSize === 'md') return 'sm'
      return 'sm'
    },
    cubedIconSize() {
      const m = { sm: 'sm', md: 'md', lg: 'md' }
      return m[this.resolvedSize] || 'md'
    },
    isBlock() {
      return this.fulled || this.block
    },
    textContentClass() {
      const align = this.textAlign === 'left' ? 'text-left' : 'text-center'
      if (this.isBlock) {
        return cn('ui-sidebar-item-text min-w-0 flex-1 truncate', align)
      }
      return cn('ui-sidebar-item-text whitespace-nowrap', align)
    },
    forwardedAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    itemClasses() {
      const sizeOrCubed = this.cubed
        ? cubedSizeClasses[this.resolvedSize] || cubedSizeClasses.md
        : sizeClasses[this.resolvedSize] || sizeClasses.md
      return cn(
        'ui-sidebar-item font-sans',
        this.active && 'ui-sidebar-item--active',
        this.cubed && 'ui-sidebar-item--cubed',
        this.isBlock && 'ui-sidebar-item--fulled w-full',
        sizeOrCubed,
        this.disabled && 'cursor-not-allowed opacity-50',
        this.hasRouterTo && 'inline-flex items-center',
        this.$attrs.class,
      )
    },
  },
  methods: {
    isRenderableVNode(vnode) {
      if (vnode == null || typeof vnode !== 'object') return false
      if (vnode.type === Comment) return false
      if (vnode.type === Text) {
        return String(vnode.children ?? '').trim().length > 0
      }
      if (vnode.type === Fragment) {
        const children = vnode.children
        if (!Array.isArray(children)) return false
        return children.some((child) => this.isRenderableVNode(child))
      }
      return true
    },
    onClick(e) {
      if (this.disabled) return
      this.$emit('click', e)
    },
    onRouterLinkClick(e, navigate) {
      if (this.disabled) {
        e.preventDefault()
        return
      }
      this.$emit('click', e)
      if (e.defaultPrevented) return
      navigate(e)
    },
  },
}
</script>
