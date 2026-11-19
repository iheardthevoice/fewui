<template>
  <nav
    :class="rootClass"
    :data-collapsed="collapsed ? 'true' : undefined"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="$slots.header"
      class="ui-menu-header"
    >
      <slot
        name="header"
        :collapsed="collapsed"
        :toggle="toggleCollapsed"
      />
    </div>
    <div class="ui-menu-body">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ui-menu-footer"
    >
      <slot
        name="footer"
        :collapsed="collapsed"
        :toggle="toggleCollapsed"
      />
    </div>
  </nav>
</template>

<script>
import { cn } from '../utils/cn.js'

const WIDTHS = ['sm', 'md', 'lg', 'full']

const WIDTH_CLASS = {
  sm: 'w-52 max-w-full',
  md: 'w-56 max-w-full',
  lg: 'w-64 max-w-full',
  full: 'w-full max-w-full',
}

export default {
  name: 'Menu',
  inheritAttrs: false,
  provide() {
    return { uiMenu: this }
  },
  props: {
    /**
     * `full` (varsayılan): kapsayıcıyı (kart, sidebar) doldurur.
     * `sm` / `md` / `lg`: sabit genişlik — yüzen panel vb.
     */
    width: {
      type: String,
      default: 'full',
      validator: (v) => WIDTHS.includes(v),
    },
    /**
     * İkon rayı: etiketler ve grup başlıkları gizlenir (ekran okuyucuda kalır), öğeler kare ikon
     * düğmesi olur ve etiket ipucu olarak gösterilir. Genişlik içeriğe iner (`width` yok sayılır).
     */
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:collapsed'],
  computed: {
    rootClass() {
      return cn(
        'ui-menu',
        this.collapsed ? 'ui-menu--collapsed' : WIDTH_CLASS[this.width] || WIDTH_CLASS.full,
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  methods: {
    /** `header` / `footer` slot'undaki aç-kapa düğmesi için: `v-model:collapsed` ile çalışır. */
    toggleCollapsed() {
      this.$emit('update:collapsed', !this.collapsed)
    },
  },
}
</script>
