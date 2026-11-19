<template>
  <div
    :id="panelId"
    :class="rootClass"
    :style="panelStyle"
    :data-collapsed="collapsed ? 'true' : undefined"
    v-bind="passthroughAttrs"
  >
    <slot
      :collapsed="collapsed"
      :size="size"
    />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { createUiIdFactory } from '../utils/ui-id.js'

const nextPanelId = createUiIdFactory('ui-resizable-panel')

export default {
  name: 'ResizablePanel',
  inheritAttrs: false,
  inject: {
    uiResizable: { default: null },
  },
  props: {
    /** Başlangıç boyutu (yüzde). Verilmezse kalan alan eşit paylaşılır. */
    defaultSize: {
      type: Number,
      default: null,
    },
    minSize: {
      type: Number,
      default: 0,
    },
    maxSize: {
      type: Number,
      default: 100,
    },
    /** `minSize` altına sürüklenince `collapsedSize` değerine kapanır. */
    collapsible: {
      type: Boolean,
      default: false,
    },
    collapsedSize: {
      type: Number,
      default: 0,
    },
  },
  emits: ['collapse', 'expand'],
  data() {
    return { fallbackId: nextPanelId() }
  },
  computed: {
    panelId() {
      const id = this.$attrs.id
      return id != null && id !== '' ? String(id) : this.fallbackId
    },
    index() {
      return this.uiResizable ? this.uiResizable.indexOfPanel(this) : -1
    },
    size() {
      return this.index < 0 ? null : this.uiResizable.sizeAt(this.index)
    },
    collapsed() {
      return this.index >= 0 && this.uiResizable.isCollapsedAt(this.index)
    },
    /**
     * Ölçüm sonrası boyut `flex-grow` ağırlığıdır (tutamaç pikselleri hesaba katılmaz).
     * Mount öncesi (SSR) `defaultSize` yüzde taban olarak uygulanır; belirtilmeyen panel kalanı doldurur.
     */
    panelStyle() {
      if (this.size != null) return { flex: `${this.size} 1 0px` }
      if (this.defaultSize != null) return { flex: `0 1 ${this.defaultSize}%` }
      return { flex: '1 1 0px' }
    },
    rootClass() {
      return cn('ui-resizable-panel', this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, id: _id, ...rest } = this.$attrs
      return rest
    },
  },
  watch: {
    collapsed(next, prev) {
      if (next === prev) return
      this.$emit(next ? 'collapse' : 'expand')
    },
  },
  mounted() {
    this.uiResizable?.registerPanel(this)
  },
  beforeUnmount() {
    this.uiResizable?.unregisterPanel(this)
  },
}
</script>
