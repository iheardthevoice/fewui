<template>
  <ui-popover
    :open="isOpen"
    :placement="placement"
    :match-trigger-width="matchTriggerWidth"
    :block="block"
    :inherit-layout="inheritLayout"
    :mobile-centered="false"
    :close-on-outside-click="closeOnOutsideClick"
    :close-on-escape="closeOnEscape && !submenuOpen"
    :outside-click-ignore-selector="outsideClickIgnoreSelector"
    @update:open="onOpenChange"
  >
    <template #trigger="slotProps">
      <slot
        name="trigger"
        v-bind="slotProps"
        :trigger-attrs="{ ...slotProps.triggerAttrs, 'aria-haspopup': 'menu' }"
      />
    </template>
    <template #content="{ close }">
      <MenuList
        ref="menu"
        :items="items"
        :aligned="aligned"
        @select="onSelect"
        @close="close()"
        @toggle-submenu="submenuOpen = $event"
      >
        <template
          v-if="$slots.before"
          #before
        >
          <slot
            name="before"
            :close="close"
          />
        </template>
        <template
          v-if="$slots.menu"
          #menu
        >
          <slot
            name="menu"
            :close="close"
          />
        </template>
      </MenuList>
    </template>
  </ui-popover>
</template>

<script>
import MenuList from './MenuList.vue'
import { captureReturnFocus, restoreFocus } from '../utils/focus-trap.js'

const PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'bottom',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
  'top-start',
  'top-end',
]

export default {
  name: 'Dropdown',
  components: { MenuList },
  inheritAttrs: false,
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir */
    open: {
      type: Boolean,
      default: undefined,
    },
    placement: {
      type: String,
      default: 'bottom-start',
      validator: (v) => PLACEMENTS.includes(v),
    },
    matchTriggerWidth: {
      type: Boolean,
      default: false,
    },
    /** Tetikleyici tam genişlik */
    block: {
      type: Boolean,
      default: false,
    },
    /** Flex satırında tetikleyicinin doğrudan katılımı (`ui-tab-list` içi menü sekmesi). */
    inheritLayout: {
      type: Boolean,
      default: false,
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    outsideClickIgnoreSelector: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:open', 'select'],
  data() {
    return {
      internalOpen: false,
      /** Alt menü açıkken Escape yalnız onu kapatır; kök popover tuşu dinlemez. */
      submenuOpen: false,
    }
  },
  watch: {
    /**
     * WAI-ARIA Menu Button: açılınca odak ilk öğeye, kapanınca açan düğmeye döner.
     * `#menu` slotuyla özel içerik verilirse de `[role="menuitem"]` öğeleri gezilir.
     */
    isOpen(open) {
      if (open) {
        this.returnFocusEl = captureReturnFocus()
        this.$nextTick(() => requestAnimationFrame(() => this.$refs.menu?.focusItem(0)))
      } else {
        const active = document.activeElement
        const lost = !active || active === document.body || this.$refs.menu?.containsFocus()
        if (lost) restoreFocus(this.returnFocusEl)
        this.returnFocusEl = null
        this.submenuOpen = false
      }
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.open !== undefined ? this.open : this.internalOpen
      },
      set(value) {
        if (this.open !== undefined) {
          this.$emit('update:open', value)
        } else {
          this.internalOpen = value
        }
      },
    },
    /**
     * Sütunlu satır çizimi yalnız yeni şema kullanılan menüde açılır (alt menü, onay / radyo
     * öğesi, kısayol); eski menülerin görünümü değişmez.
     */
    aligned() {
      return this.items.some((it) => it && (
        it.type === 'checkbox'
        || it.type === 'radio'
        || it.shortcut
        || (Array.isArray(it.children) && it.children.length > 0)
      ))
    },
  },
  methods: {
    onOpenChange(value) {
      this.isOpen = value
    },
    /**
     * `select` öğeyi taşır; onay / radyo öğelerinde ikinci argüman `{ checked, group }`
     * (tıklama sonrası olması gereken değer — liste denetimlidir).
     */
    onSelect(item, meta) {
      if (meta) this.$emit('select', item, meta)
      else this.$emit('select', item)
    },
  },
}
</script>
