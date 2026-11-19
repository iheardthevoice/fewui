<template>
  <div
    :id="menuId"
    class="ui-dropdown-menu"
    :class="[
      hasDescribedItems ? 'ui-dropdown-menu--described' : '',
      aligned ? 'ui-dropdown-menu--aligned' : '',
    ]"
    role="menu"
    :aria-label="ariaLabel || undefined"
    :aria-labelledby="ariaLabelledby || undefined"
    @click.stop
    @keydown="onKeydown"
    @pointerover="onPointerOver"
    @pointerleave="onPointerLeave"
  >
    <slot name="before" />
    <template v-if="$slots.menu">
      <slot name="menu" />
    </template>
    <template v-else>
      <template
        v-for="seg in segments"
        :key="seg.key"
      >
        <Divider
          v-if="seg.divider"
          spacing="sm"
        />
        <template v-else-if="seg.heading">
          <span
            :id="seg.headingId"
            class="ui-dropdown-heading"
            role="presentation"
          >{{ seg.heading }}</span>
          <div
            v-if="seg.entries.length"
            class="ui-dropdown-group"
            role="group"
            :aria-labelledby="seg.headingId"
          >
            <MenuListItem
              v-for="entry in seg.entries"
              :key="entry.index"
              :item="entry.item"
              :index="entry.index"
              :aligned="aligned"
              :columns="columns"
              :expanded="openSub === entry.index"
              :submenu-id="submenuId(entry.index)"
              @click.stop="onItem(entry.item, entry.index)"
            />
          </div>
        </template>
        <template v-else>
          <MenuListItem
            v-for="entry in seg.entries"
            :key="entry.index"
            :item="entry.item"
            :index="entry.index"
            :aligned="aligned"
            :columns="columns"
            :expanded="openSub === entry.index"
            :submenu-id="submenuId(entry.index)"
            @click.stop="onItem(entry.item, entry.index)"
          />
        </template>
      </template>
      <!-- Alt menüler: tetikleyicisiz popover, sanal dikdörtgenle üst öğenin yanına açılır. -->
      <Popover
        v-for="sub in submenus"
        :key="`sub-${sub.index}`"
        class="hidden"
        :open="openSub === sub.index"
        :anchor="subAnchor(sub.index)"
        :placement="subPlacement"
        :mobile-centered="false"
        :close-on-escape="false"
        @update:open="onSubOpenChange(sub.index, $event)"
      >
        <template #content>
          <MenuList
            ref="subs"
            :items="sub.item.children"
            :level="level + 1"
            :owner-index="sub.index"
            :menu-id="submenuId(sub.index)"
            :aria-label="sub.item.label"
            aligned
            @select="(it, meta) => $emit('select', it, meta)"
            @close="$emit('close')"
            @close-submenu="closeSubmenu(true)"
            @navigate="$emit('navigate', $event)"
            @pointerenter="cancelSubClose"
          />
        </template>
      </Popover>
    </template>
  </div>
</template>

<script>
import { createTypeahead, isTypeaheadKey } from '../utils/typeahead.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import Divider from './Divider.vue'
import MenuListItem from './MenuListItem.vue'
import Popover from './Popover.vue'

const nextMenuId = createUiIdFactory('ui-menu')

const ITEM_SELECTOR = [
  '[role="menuitem"]',
  '[role="menuitemcheckbox"]',
  '[role="menuitemradio"]',
].map((s) => `${s}:not([disabled]):not([aria-disabled="true"])`).join(',')

/** İşaretçi alt menülü öğeye gelince açılış gecikmesi (ms). */
const SUB_OPEN_DELAY = 150
/** Başka öğeye geçince açık alt menünün kapanma gecikmesi — çapraz geçişe izin verir (ms). */
const SUB_CLOSE_DELAY = 250
/** Alt menü ile üst panel arasındaki boşluk (px). */
const SUB_GAP = 2
/** Popover'ın tetikleyiciye bıraktığı sabit pay (px); sanal dikdörtgen bunu geri alır. */
const POPOVER_MARGIN = 10

function hasChildren(item) {
  return Array.isArray(item?.children) && item.children.length > 0
}

/**
 * Menü gövdesi — öğe listesi + klavye (WAI-ARIA APG Menu). `ui-dropdown`, `ui-context-menu`
 * ve `ui-menubar` aynı gövdeyi kullanır; global kayıtlı değildir.
 *
 * Öğe şeması: `{ label, icon, description, color, selected, disabled, suffixIcon, keepOpen,
 * divider, heading, type: 'checkbox' | 'radio', checked, group, closeOnSelect, shortcut, children }`.
 */
export default {
  name: 'MenuList',
  components: { Divider, MenuListItem, Popover },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    /** Sütunlu satırlar: gösterge, ikon ve etiket öğeler arasında hizalanır. */
    aligned: {
      type: Boolean,
      default: false,
    },
    /** İç içe derinlik; 0 = kök menü. */
    level: {
      type: Number,
      default: 0,
    },
    /** Üst menüde bu alt menüyü açan öğenin dizini. */
    ownerIndex: {
      type: Number,
      default: -1,
    },
    menuId: {
      type: String,
      default: undefined,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    ariaLabelledby: {
      type: String,
      default: '',
    },
  },
  emits: ['select', 'close', 'close-submenu', 'navigate', 'toggle-submenu'],
  data() {
    return {
      uid: nextMenuId(),
      /** Alt menüsü açık öğenin dizini; -1 = kapalı. */
      openSub: -1,
      subPlacement: 'right-start',
    }
  },
  computed: {
    hasDescribedItems() {
      return Boolean(this.$slots.before) || this.items.some((it) => it && !it.divider && it.description)
    },
    columns() {
      const rows = this.items.filter((it) => it && !it.divider && !it.heading)
      return {
        indicator: rows.some((it) => it.type === 'checkbox' || it.type === 'radio'),
        icon: rows.some((it) => it.icon),
      }
    },
    /**
     * Öğeler bölümlere ayrılır: `heading` yeni bir `role="group"` başlatır; grup bir sonraki
     * başlık ya da ayırıcıda biter. Başlıksız öğeler sarmalayıcısız çizilir (eski DOM).
     */
    segments() {
      const out = []
      let current = null
      this.items.forEach((item, index) => {
        if (!item) return
        if (item.divider) {
          out.push({ key: `d-${index}`, divider: true })
          current = null
          return
        }
        if (item.heading) {
          current = {
            key: `h-${index}`,
            heading: item.heading,
            headingId: `${this.uid}-heading-${index}`,
            entries: [],
          }
          out.push(current)
          return
        }
        if (!current) {
          current = { key: `s-${index}`, entries: [] }
          out.push(current)
        }
        current.entries.push({ item, index })
      })
      return out
    },
    submenus() {
      const out = []
      this.items.forEach((item, index) => {
        if (hasChildren(item)) out.push({ item, index })
      })
      return out
    },
  },
  watch: {
    openSub(index) {
      this.$emit('toggle-submenu', index >= 0)
    },
    items() {
      // Liste değişince açık alt menünün dizini başka öğeyi gösterebilir.
      if (this.openSub >= 0 && !hasChildren(this.items[this.openSub])) this.openSub = -1
    },
  },
  created() {
    /** Alt menü sanal referansları — kimlikleri sabit kalsın diye tepkisel olmayan önbellek. */
    this.subAnchors = {}
  },
  beforeUnmount() {
    this.clearHoverTimers()
  },
  methods: {
    submenuId(index) {
      return `${this.uid}-sub-${index}`
    },
    itemEls() {
      const root = this.$el
      if (!root?.querySelectorAll) return []
      return [...root.querySelectorAll(ITEM_SELECTOR)]
    },
    /** Odaklanabilir öğeler arasında sırayla (negatif dizin sondan sayar). */
    focusItem(index) {
      const items = this.itemEls()
      if (!items.length) return
      const i = ((index % items.length) + items.length) % items.length
      items[i].focus()
    },
    /** `items` dizinindeki öğeye odaklan. */
    focusIndex(index) {
      this.$el?.querySelector?.(`[data-menu-index="${index}"]`)?.focus()
    },
    /** Odak bu menüde ya da açık alt menülerinden birinde mi? */
    containsFocus() {
      const active = document.activeElement
      if (!active) return false
      if (this.$el?.contains?.(active)) return true
      return this.subRefs().some((sub) => sub.containsFocus())
    },
    subRefs() {
      const subs = this.$refs.subs
      if (!subs) return []
      return Array.isArray(subs) ? subs : [subs]
    },
    isRtl() {
      return getComputedStyle(this.$el).direction === 'rtl'
    },
    /**
     * Alt menünün konum referansı: üst panelin kenarları + öğenin satırı. Popover tetikleyiciye
     * sabit pay bıraktığı için dikdörtgen o kadar içeri çekilir; alt menü panele bitişik açılır
     * ve ilk satırı üst öğeyle aynı hizaya gelir.
     */
    subAnchor(index) {
      if (!this.subAnchors[index]) {
        this.subAnchors[index] = {
          getBoundingClientRect: () => {
            const menu = this.$el.getBoundingClientRect()
            const el = this.$el.querySelector(`[data-menu-index="${index}"]`)
            const row = el ? el.getBoundingClientRect() : menu
            const inset = el ? Math.max(0, row.left - menu.left) : 0
            const shrink = POPOVER_MARGIN - SUB_GAP
            const left = menu.left + shrink
            const right = menu.right - shrink
            const top = row.top - inset
            const bottom = row.bottom + inset
            return { left, right, top, bottom, x: left, y: top, width: right - left, height: bottom - top }
          },
        }
      }
      return this.subAnchors[index]
    },
    openSubmenu(index, focusFirst) {
      this.clearHoverTimers()
      this.subPlacement = this.isRtl() ? 'left-start' : 'right-start'
      this.openSub = index
      if (!focusFirst) return
      this.$nextTick(() => requestAnimationFrame(() => {
        const sub = this.subRefs().find((s) => s.ownerIndex === index)
        sub?.focusItem(0)
      }))
    },
    closeSubmenu(restoreFocus) {
      this.clearHoverTimers()
      const index = this.openSub
      if (index < 0) return
      const hadFocus = this.subRefs().some((sub) => sub.containsFocus())
      this.openSub = -1
      if (restoreFocus || hadFocus) this.focusIndex(index)
    },
    onSubOpenChange(index, open) {
      if (!open && this.openSub === index) this.closeSubmenu(false)
    },
    clearHoverTimers() {
      if (this.subOpenTimer) clearTimeout(this.subOpenTimer)
      if (this.subCloseTimer) clearTimeout(this.subCloseTimer)
      this.subOpenTimer = null
      this.subCloseTimer = null
    },
    cancelSubClose() {
      if (this.subCloseTimer) clearTimeout(this.subCloseTimer)
      this.subCloseTimer = null
    },
    onPointerOver(e) {
      if (e.pointerType === 'touch') return
      const el = e.target?.closest?.('[data-menu-index]')
      if (!el || !this.$el.contains(el)) return
      const index = Number(el.dataset.menuIndex)
      if (index === this.hoverIndex) return
      this.hoverIndex = index
      this.clearHoverTimers()
      const item = this.items[index]
      if (hasChildren(item) && !item.disabled) {
        if (this.openSub !== index) {
          this.subOpenTimer = setTimeout(() => this.openSubmenu(index, false), SUB_OPEN_DELAY)
        }
      } else if (this.openSub >= 0) {
        this.subCloseTimer = setTimeout(() => this.closeSubmenu(false), SUB_CLOSE_DELAY)
      }
    },
    onPointerLeave() {
      this.hoverIndex = -1
      if (this.subOpenTimer) clearTimeout(this.subOpenTimer)
      this.subOpenTimer = null
    },
    onKeydown(e) {
      const items = this.itemEls()
      const current = items.indexOf(document.activeElement)
      const move = {
        ArrowDown: () => this.focusItem(current + 1),
        ArrowUp: () => this.focusItem(current < 0 ? -1 : current - 1),
        Home: () => this.focusItem(0),
        End: () => this.focusItem(-1),
      }
      if (move[e.key]) {
        e.preventDefault()
        this.closeSubmenu(false)
        move[e.key]()
        return
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        // Özel `#menu` içeriğindeki alanlarda imleç hareketi korunur.
        if (e.target?.closest?.('input, textarea, select, [contenteditable="true"]')) return
        const forward = (e.key === 'ArrowRight') !== this.isRtl()
        const index = Number(document.activeElement?.dataset?.menuIndex ?? -1)
        const item = index >= 0 ? this.items[index] : null
        if (forward && hasChildren(item) && !item.disabled) {
          e.preventDefault()
          e.stopPropagation()
          this.openSubmenu(index, true)
        } else if (!forward && this.level > 0) {
          e.preventDefault()
          e.stopPropagation()
          this.$emit('close-submenu')
        } else {
          // Kök menüde yatay oklar menü çubuğuna (varsa) bırakılır.
          this.$emit('navigate', forward ? 'next' : 'prev')
        }
        return
      }
      if (e.key === 'Escape') {
        if (this.level > 0) {
          // Yalnız bu alt menü kapanır; üst menü ve (varsa) dialog açık kalır.
          e.preventDefault()
          e.stopPropagation()
          this.$emit('close-submenu')
        } else if (this.openSub >= 0) {
          e.preventDefault()
          e.stopPropagation()
          this.closeSubmenu(true)
        }
        return
      }
      // Tab menüden çıkar: menü kapanır, odak açan düğmeye döner (APG).
      if (e.key === 'Tab') {
        e.preventDefault()
        this.$emit('close')
        return
      }
      // Yazarak arama: basılan harflerle başlayan öğeye odaklan. Özel `#menu` içindeki alanlara dokunma.
      if (isTypeaheadKey(e) && !e.target?.closest?.('input, textarea, select, [contenteditable="true"]')) {
        if (!this.typeahead) this.typeahead = createTypeahead()
        const labels = items.map((el) => {
          const index = el.dataset?.menuIndex
          return (index != null && this.items[index]?.label) || el.textContent || ''
        })
        const match = this.typeahead(e.key, labels, current)
        if (match >= 0) {
          e.preventDefault()
          this.closeSubmenu(false)
          this.focusItem(match)
        }
      }
    },
    /**
     * Seçim: `select` olayı öğeyi taşır. İşaretlenebilir öğelerde ikinci argüman
     * `{ checked, group }` — `checked` tıklama sonrası olması gereken değerdir; liste
     * denetimlidir, öğeyi tüketen taraf günceller.
     */
    onItem(item, index) {
      if (item.disabled) return
      if (hasChildren(item)) {
        if (this.openSub === index) this.closeSubmenu(true)
        else this.openSubmenu(index, true)
        return
      }
      if (item.type === 'checkbox' || item.type === 'radio') {
        const checked = item.type === 'radio' ? true : !item.checked
        this.$emit('select', item, { checked, group: item.group })
        if (item.closeOnSelect) this.$emit('close')
        return
      }
      this.$emit('select', item)
      if (!item.keepOpen && !item.keep_open) this.$emit('close')
    },
  },
}
</script>
