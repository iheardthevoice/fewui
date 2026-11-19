<template>
  <ui-menu-item-tooltip
    v-if="rail"
    :label="railLabel()"
    :placement="railPlacement"
  >
    <ui-button
      type="button"
      variant="ghost"
      color="secondary"
      :to="to"
      :prefix-icon="prefixIcon || railFallbackIcon"
      :disabled="disabled"
      :loading="loading"
      :class="itemClass"
      :aria-current="active ? 'page' : undefined"
      :aria-label="railLabel() || undefined"
      v-bind="forwardedAttrs"
      @click="onClick"
    >
      <slot />
    </ui-button>
    <template
      v-if="!railLabel()"
      #content
    >
      <slot />
    </template>
  </ui-menu-item-tooltip>
  <ui-button
    v-else
    type="button"
    variant="ghost"
    color="secondary"
    block
    text-align="left"
    :to="to"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    :disabled="disabled"
    :loading="loading"
    :class="itemClass"
    :aria-current="active ? 'page' : undefined"
    v-bind="forwardedAttrs"
    @click="onClick"
  >
    <slot />
  </ui-button>
</template>

<script>
import { Comment, Fragment, Text } from 'vue'
import Tooltip from './Tooltip.vue'
import { cn } from '../utils/cn.js'

/** Rayda ikonsuz öğe boş kare kalmasın. */
const RAIL_FALLBACK_ICON = 'circle'

/** Slot vnode'larından düz metin — ray ipucu ve `aria-label` için. */
function vnodeText(nodes) {
  if (!Array.isArray(nodes)) return typeof nodes === 'string' ? nodes : ''
  return nodes
    .map((node) => {
      if (node == null || typeof node !== 'object' || node.type === Comment) return ''
      if (node.type === Text) return String(node.children ?? '')
      if (node.type === Fragment || typeof node.type === 'string') return vnodeText(node.children)
      return ''
    })
    .join('')
}

export default {
  name: 'MenuItem',
  components: { 'ui-menu-item-tooltip': Tooltip },
  inheritAttrs: false,
  inject: {
    uiMenu: { default: null },
  },
  props: {
    /** `vue-router` hedefi; verildiğinde menü öğesi bağlantı olarak davranır. */
    to: {
      type: [String, Object],
      default: null,
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  data() {
    return {
      /** Ray ipucu satır sonu tarafında açılır; yön mount sonrası okunur. */
      rtl: false,
    }
  },
  computed: {
    /**
     * Üst `ui-menu` ikon rayı modunda mı (`collapsed`). Menü dışında her zaman `false`.
     * Rayda etiket görsel olarak gizlenir ve `ui-tooltip` ile satır sonu tarafında gösterilir.
     */
    rail() {
      return Boolean(this.uiMenu?.collapsed)
    },
    railFallbackIcon() {
      return RAIL_FALLBACK_ICON
    },
    railPlacement() {
      return this.rtl ? 'left' : 'right'
    },
    itemClass() {
      return cn(
        'ui-menu-item',
        this.active && 'ui-menu-item--active',
        this.$attrs.class,
      )
    },
    forwardedAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  watch: {
    rail(next) {
      if (next) this.$nextTick(() => this.readDirection())
    },
  },
  mounted() {
    if (this.rail) this.readDirection()
  },
  methods: {
    /**
     * Ray etiketi (ipucu + `aria-label`): tüketici `aria-label` verdiyse o, yoksa slot metni.
     * Boşsa ipucu slot içeriğini gösterir. Slot reaktif izlenmediği için computed değil, her çizimde okunur.
     */
    railLabel() {
      const given = this.$attrs['aria-label']
      if (given) return String(given)
      const slot = this.$slots.default
      return slot ? vnodeText(slot()).replace(/\s+/g, ' ').trim() : ''
    },
    readDirection() {
      const el = this.$el
      if (el && el.nodeType === 1) this.rtl = getComputedStyle(el).direction === 'rtl'
    },
    onClick(e) {
      if (this.disabled || this.loading) return
      this.$emit('click', e)
    },
  },
}
</script>
