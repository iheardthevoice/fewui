<template>
  <div
    class="ui-menubar"
    role="menubar"
    :aria-label="ariaLabel || undefined"
    @keydown="onBarKeydown"
  >
    <Popover
      v-for="(menu, index) in menus"
      :key="index"
      :open="openIndex === index"
      placement="bottom-start"
      :mobile-centered="false"
      :close-on-escape="!submenuOpen"
      @update:open="onOpenChange(index, $event)"
    >
      <template #trigger>
        <ui-button
          :id="triggerId(index)"
          class="ui-menubar-trigger"
          variant="ghost"
          color="secondary"
          :size="size"
          role="menuitem"
          aria-haspopup="menu"
          :aria-expanded="openIndex === index ? 'true' : 'false'"
          :aria-controls="openIndex === index ? menuId(index) : undefined"
          :tabindex="index === rovingIndex ? 0 : -1"
          :data-menubar-index="index"
          :disabled="menu.disabled"
          @click="toggle(index)"
          @pointerenter="onTriggerEnter(index, $event)"
          @focus="focusedIndex = index"
        >{{ menu.label }}</ui-button>
      </template>
      <template #content="{ close }">
        <MenuList
          ref="lists"
          :items="menu.items || []"
          :menu-id="menuId(index)"
          :aria-labelledby="triggerId(index)"
          aligned
          @select="onSelect"
          @close="close()"
          @navigate="onNavigate(index, $event)"
          @toggle-submenu="submenuOpen = $event"
        >
          <template
            v-if="$slots.menu"
            #menu
          >
            <slot
              name="menu"
              :menu="menu"
              :index="index"
              :close="close"
            />
          </template>
        </MenuList>
      </template>
    </Popover>
  </div>
</template>

<script>
import { createUiIdFactory } from '../utils/ui-id.js'
import { logicalArrowKey } from '../utils/direction.js'
import { createTypeahead, isTypeaheadKey } from '../utils/typeahead.js'
import { CONTROL_SIZES } from '../utils/sizes.js'
import MenuList from './MenuList.vue'
import Popover from './Popover.vue'

const nextMenubarId = createUiIdFactory('ui-menubar')

/**
 * Menü çubuğu (WAI-ARIA APG Menubar): yatay üst düzey başlıklar, her biri bir menü açar.
 * Sol / sağ ok başlıklar arasında gezer (menü açıkken açık menüyü değiştirir), aşağı ok açar,
 * Escape kapatıp odağı başlığa döndürür; bir menü açıkken işaretçiyle üzerine gelinen başlık açılır.
 */
export default {
  name: 'Menubar',
  components: { MenuList, Popover },
  props: {
    /** `[{ label, items, disabled }]` — `items` `ui-dropdown` ile aynı şemadadır. */
    menus: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: 'sm',
      validator: (v) => CONTROL_SIZES.includes(v),
    },
    /** `role="menubar"` için erişilebilir ad; metin i18n'den gelir. */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['select'],
  data() {
    return {
      uid: nextMenubarId(),
      /** Açık menünün dizini; -1 = hepsi kapalı. */
      openIndex: -1,
      /** Son odaklanan başlık — Tab ile çubuğa dönünce buradan devam edilir. */
      focusedIndex: 0,
      submenuOpen: false,
    }
  },
  computed: {
    rovingIndex() {
      const usable = (i) => this.menus[i] && !this.menus[i].disabled
      if (usable(this.openIndex)) return this.openIndex
      if (usable(this.focusedIndex)) return this.focusedIndex
      return this.menus.findIndex((m) => m && !m.disabled)
    },
  },
  methods: {
    triggerId(index) {
      return `${this.uid}-trigger-${index}`
    },
    menuId(index) {
      return `${this.uid}-menu-${index}`
    },
    triggerEl(index) {
      return this.$el?.querySelector?.(`[data-menubar-index="${index}"]`) || null
    },
    /** `from` dizininden `step` yönünde ilk kullanılabilir başlık (döngülü). */
    stepIndex(from, step) {
      const n = this.menus.length
      for (let i = 1; i <= n; i += 1) {
        const idx = (((from + step * i) % n) + n) % n
        if (this.menus[idx] && !this.menus[idx].disabled) return idx
      }
      return -1
    },
    /** @param {'first' | 'last' | null} focus Açılınca odaklanacak öğe; `null` odak başlıkta kalır. */
    openMenu(index, focus = 'first') {
      if (index < 0 || this.menus[index]?.disabled) return
      this.submenuOpen = false
      this.openIndex = index
      this.focusedIndex = index
      if (!focus) return
      this.$nextTick(() => requestAnimationFrame(() => {
        const list = this.activeList()
        if (list) list.focusItem(focus === 'last' ? -1 : 0)
      }))
    },
    activeList() {
      const lists = this.$refs.lists
      const all = !lists ? [] : (Array.isArray(lists) ? lists : [lists])
      return all.find((list) => list.menuId === this.menuId(this.openIndex)) || null
    },
    closeMenu(restoreFocus) {
      const index = this.openIndex
      if (index < 0) return
      const active = document.activeElement
      const lost = !active || active === document.body || this.activeList()?.containsFocus()
      this.openIndex = -1
      this.submenuOpen = false
      if (restoreFocus || lost) this.triggerEl(index)?.focus({ preventScroll: true })
    },
    toggle(index) {
      if (this.openIndex === index) this.closeMenu(true)
      else this.openMenu(index)
    },
    onOpenChange(index, open) {
      // Popover yalnız kapanışı bildirir (Escape, dış tıklama, menüden seçim).
      if (!open && this.openIndex === index) this.closeMenu(false)
    },
    onTriggerEnter(index, e) {
      if (e.pointerType === 'touch') return
      if (this.openIndex >= 0 && this.openIndex !== index) this.openMenu(index)
    },
    /** Açık menü içinden yatay ok: komşu menü açılır. */
    onNavigate(index, direction) {
      if (this.openIndex !== index) return
      const next = this.stepIndex(index, direction === 'next' ? 1 : -1)
      if (next >= 0 && next !== index) this.openMenu(next)
    },
    onBarKeydown(e) {
      const index = Number(e.target?.dataset?.menubarIndex ?? -1)
      // Yalnız başlık üzerindeki tuşlar; menü içi tuşları `MenuList` işler.
      if (index < 0) return
      const key = logicalArrowKey(e.key, this.$el)
      const focusTrigger = (idx) => {
        if (idx < 0) return
        if (this.openIndex >= 0) this.openMenu(idx)
        else this.triggerEl(idx)?.focus()
      }
      const keys = {
        ArrowRight: () => focusTrigger(this.stepIndex(index, 1)),
        ArrowLeft: () => focusTrigger(this.stepIndex(index, -1)),
        Home: () => focusTrigger(this.stepIndex(-1, 1)),
        End: () => focusTrigger(this.stepIndex(this.menus.length, -1)),
        ArrowDown: () => this.openMenu(index, 'first'),
        ArrowUp: () => this.openMenu(index, 'last'),
      }
      if (keys[key]) {
        e.preventDefault()
        keys[key]()
        return
      }
      if (isTypeaheadKey(e)) {
        if (!this.typeahead) this.typeahead = createTypeahead()
        const usable = this.menus.map((m, i) => i).filter((i) => !this.menus[i]?.disabled)
        const match = this.typeahead(e.key, usable.map((i) => this.menus[i].label || ''), usable.indexOf(index))
        if (match >= 0) {
          e.preventDefault()
          focusTrigger(usable[match])
        }
      }
    },
    onSelect(item, meta) {
      if (meta) this.$emit('select', item, meta)
      else this.$emit('select', item)
    },
  },
}
</script>
