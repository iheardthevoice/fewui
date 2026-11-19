<template>
  <div
    class="ui-context-menu"
    @contextmenu="onContextMenu"
    @keydown="onKeydown"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="clearLongPress"
  >
    <slot />
    <Popover
      class="hidden"
      :open="isOpen"
      :anchor="anchor"
      placement="bottom-start"
      :mobile-centered="false"
      :close-on-escape="!submenuOpen"
      @update:open="setOpen"
    >
      <template #content="{ close }">
        <MenuList
          ref="menu"
          :items="items"
          aligned
          @select="onSelect"
          @close="close()"
          @toggle-submenu="submenuOpen = $event"
        >
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
    </Popover>
  </div>
</template>

<script>
import { uiFeedback } from '../utils/feedback.js'
import { captureReturnFocus, restoreFocus } from '../utils/focus-trap.js'
import MenuList from './MenuList.vue'
import Popover from './Popover.vue'

/** Dokunmatik uzun basış süresi (ms) ve iptal eden parmak kayması (px). */
const LONG_PRESS_MS = 500
const LONG_PRESS_SLOP = 10
/** Popover'ın referansa bıraktığı sabit pay (px); menü köşesi tam işaretçiye gelsin diye geri alınır. */
const POPOVER_MARGIN = 10

/**
 * Bağlam menüsü — sardığı alanda sağ tık, Shift+F10 / Menü tuşu ve dokunmatik uzun basışla
 * `ui-dropdown` ile aynı menüyü işaretçi konumunda açar.
 */
export default {
  name: 'ContextMenu',
  components: { MenuList, Popover },
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. */
    open: {
      type: Boolean,
      default: undefined,
    },
    /** `ui-dropdown` ile aynı öğe şeması. */
    items: {
      type: Array,
      default: () => [],
    },
    /** true: menü açılmaz, tarayıcının kendi bağlam menüsü çalışır. */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:open', 'select'],
  data() {
    return {
      internalOpen: false,
      submenuOpen: false,
      /** Görünüm koordinatında açılış noktası. */
      point: { x: 0, y: 0 },
    }
  },
  computed: {
    isOpen() {
      return this.open !== undefined ? this.open : this.internalOpen
    },
    /**
     * Sanal konum referansı. Popover referansın altına / üstüne sabit pay bırakır; kenarlar
     * o kadar kaydırılır ki menü işaretçiye bitişik açılsın (yukarı dönünce de).
     */
    anchor() {
      const { x, y } = this.point
      return {
        getBoundingClientRect: () => ({
          left: x,
          right: x,
          top: y + POPOVER_MARGIN,
          bottom: y - POPOVER_MARGIN,
          x,
          y,
          width: 0,
          height: 0,
        }),
      }
    },
  },
  watch: {
    /** Açılınca odak ilk öğeye, kapanınca menüyü açan öğeye döner. */
    isOpen(open) {
      if (open) {
        this.returnFocusEl = captureReturnFocus()
        this.focusFirst()
      } else {
        const active = document.activeElement
        const lost = !active || active === document.body || this.$refs.menu?.containsFocus()
        if (lost) restoreFocus(this.returnFocusEl)
        this.returnFocusEl = null
        this.submenuOpen = false
      }
    },
  },
  beforeUnmount() {
    this.clearLongPress()
  },
  methods: {
    setOpen(value) {
      if (this.open === undefined) this.internalOpen = value
      this.$emit('update:open', value)
    },
    focusFirst() {
      this.$nextTick(() => requestAnimationFrame(() => this.$refs.menu?.focusItem(0)))
    },
    openAt(x, y) {
      if (this.disabled) return
      this.point = { x, y }
      if (this.isOpen) {
        // Zaten açık: yeni noktaya taşınır (referans değişimi popover'ı yeniden konumlar).
        this.focusFirst()
        return
      }
      this.setOpen(true)
    },
    onContextMenu(e) {
      if (this.disabled) return
      e.preventDefault()
      // Uzun basış menüyü açtıysa aynı hareketin `contextmenu` olayı (Android) yeniden taşımaz.
      if (this.longPressFired) return
      // Klavyeden tetiklenen olayda koordinat yoktur; odaklı öğenin altına açılır.
      if (e.clientX === 0 && e.clientY === 0) {
        this.openAtElement(e.target)
        return
      }
      this.openAt(e.clientX, e.clientY)
    },
    openAtElement(el) {
      const target = el instanceof Element ? el : this.$el
      const rect = target.getBoundingClientRect()
      this.openAt(Math.round(rect.left), Math.round(rect.bottom))
    },
    onKeydown(e) {
      if (this.disabled || this.isOpen) return
      const menuKey = e.key === 'ContextMenu' || (e.key === 'F10' && e.shiftKey)
      if (!menuKey) return
      e.preventDefault()
      this.openAtElement(document.activeElement)
    },
    onTouchStart(e) {
      this.clearLongPress()
      this.longPressFired = false
      if (this.disabled || e.touches.length !== 1) return
      const touch = e.touches[0]
      this.touchOrigin = { x: touch.clientX, y: touch.clientY }
      this.longPressTimer = setTimeout(() => {
        this.longPressTimer = null
        this.longPressFired = true
        uiFeedback('impact-medium')
        this.openAt(this.touchOrigin.x, this.touchOrigin.y)
      }, LONG_PRESS_MS)
    },
    onTouchMove(e) {
      if (!this.longPressTimer || !this.touchOrigin) return
      const touch = e.touches[0]
      const moved = Math.hypot(touch.clientX - this.touchOrigin.x, touch.clientY - this.touchOrigin.y)
      if (moved > LONG_PRESS_SLOP) this.clearLongPress()
    },
    /** Uzun basış menüyü açtıysa parmak kalkınca alttaki öğeye tıklama gitmez. */
    onTouchEnd(e) {
      this.clearLongPress()
      const fired = this.longPressFired
      this.longPressFired = false
      if (fired && e.cancelable) e.preventDefault()
    },
    clearLongPress() {
      if (this.longPressTimer) clearTimeout(this.longPressTimer)
      this.longPressTimer = null
    },
    onSelect(item, meta) {
      if (meta) this.$emit('select', item, meta)
      else this.$emit('select', item)
    },
  },
}
</script>
