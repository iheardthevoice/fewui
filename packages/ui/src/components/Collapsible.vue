<template>
  <div
    :class="rootClass"
    :data-state="isOpen ? 'open' : 'closed'"
  >
    <slot
      name="trigger"
      :open="isOpen"
      :toggle="toggle"
      :trigger-attrs="triggerAttrs"
    />
    <div
      :id="contentId"
      class="ui-collapse"
      :class="isOpen ? 'ui-collapse--open' : ''"
    >
      <div class="ui-collapse-inner">
        <slot
          :open="isOpen"
          :toggle="toggle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createUiIdFactory } from '../utils/ui-id.js'

const nextCollapsibleId = createUiIdFactory('ui-collapsible')

export default {
  name: 'Collapsible',
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
    open: {
      type: Boolean,
      default: undefined,
    },
    /** Kontrolsüz kullanımda ilk durum. */
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    /** Açma / kapama kilitlenir; mevcut durum korunur. */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:open'],
  data() {
    return {
      contentId: nextCollapsibleId(),
      internalOpen: this.defaultOpen,
    }
  },
  computed: {
    isOpen() {
      return this.open !== undefined ? this.open : this.internalOpen
    },
    /**
     * `#trigger` slot prop'u: tetikleyici düğmeye `v-bind="triggerAttrs"` ile verilir (Popover ile aynı fikir).
     * İçerik DOM'da kaldığı için `aria-controls` kapalıyken de yazılır.
     */
    triggerAttrs() {
      return {
        'aria-expanded': this.isOpen ? 'true' : 'false',
        'aria-controls': this.contentId,
        disabled: this.disabled || undefined,
      }
    },
    rootClass() {
      return ['ui-collapsible', this.disabled ? 'ui-collapsible--disabled' : '']
    },
  },
  methods: {
    toggle() {
      this.setOpen(!this.isOpen)
    },
    setOpen(value) {
      if (this.disabled || value === this.isOpen) return
      // Kontrollü kullanımda da iç durum güncel tutulur: `open` sonradan kaldırılırsa görünüm zıplamaz.
      this.internalOpen = value
      this.$emit('update:open', value)
    },
  },
}
</script>
