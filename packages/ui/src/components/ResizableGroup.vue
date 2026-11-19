<template>
  <div
    :class="rootClass"
    :data-direction="direction"
    :data-dragging="dragging ? 'true' : undefined"
    v-bind="passthroughAttrs"
  >
    <slot :sizes="sizes" />
  </div>
</template>

<script>
import { markRaw } from 'vue'
import { cn } from '../utils/cn.js'

const DIRECTIONS = ['horizontal', 'vertical']
const STORAGE_PREFIX = 'ui-resizable:'
const EPSILON = 0.001

function round2(value) {
  return Math.round(value * 100) / 100
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

/**
 * Panelin yüzde sınırları. `collapsed` yalnız `collapsible` panelde sayıdır.
 * @param {{ minSize: number, maxSize: number, collapsible: boolean, collapsedSize: number }} panel
 */
function panelLimits(panel) {
  const min = clamp(Number(panel.minSize) || 0, 0, 100)
  const max = clamp(Number.isFinite(Number(panel.maxSize)) ? Number(panel.maxSize) : 100, min, 100)
  const collapsed = panel.collapsible ? clamp(Number(panel.collapsedSize) || 0, 0, min) : null
  return { min, max, collapsed }
}

/**
 * İstenen boyutu panelin sınırlarına oturtur. Daraltılabilir panelde `min` altına inen istek
 * yarı yolda `collapsedSize` değerine atlar (ara değer yoktur).
 */
function constrainSize(panel, desired) {
  const { min, max, collapsed } = panelLimits(panel)
  if (collapsed != null && desired < min - EPSILON) {
    return desired < (collapsed + min) / 2 ? collapsed : min
  }
  return clamp(desired, min, max)
}

function isSizeList(value, length) {
  return Array.isArray(value) && value.length === length && value.every((n) => Number.isFinite(Number(n)) && Number(n) >= 0)
}

/** Toplamı 100'e ölçekler; hepsi 0 ise eşit böler. */
function normalizeSizes(list) {
  const sum = list.reduce((total, n) => total + n, 0)
  if (!list.length) return []
  if (!(sum > 0)) return list.map(() => round2(100 / list.length))
  return list.map((n) => round2((n / sum) * 100))
}

export default {
  name: 'ResizableGroup',
  inheritAttrs: false,
  provide() {
    return { uiResizable: this }
  },
  props: {
    /** `horizontal` — paneller yan yana; `vertical` — alt alta. */
    direction: {
      type: String,
      default: 'horizontal',
      validator: (v) => DIRECTIONS.includes(v),
    },
    /** Panel boyutları (yüzde, toplam 100). Verilmezse bileşen kendi durumunu tutar. */
    modelValue: {
      type: Array,
      default: null,
    },
    /** Boyutlar `localStorage` içinde bu kimlikle saklanır (yalnız mount sonrası okunur). */
    autoSaveId: {
      type: String,
      default: '',
    },
    /** Ok tuşu adımı (yüzde). */
    keyboardStep: {
      type: Number,
      default: 5,
    },
  },
  emits: ['update:modelValue', 'resize-end'],
  data() {
    return {
      /** DOM sırasıyla kayıtlı paneller ve tutamaçlar. */
      panels: [],
      handles: [],
      /** Mount öncesi boş: paneller `defaultSize` ile çizilir (SSR). */
      sizes: [],
      dragging: false,
      /** Daraltmadan önceki boyut — Enter ile geri açılırken kullanılır. */
      expandedSizes: {},
      ready: false,
    }
  },
  computed: {
    rootClass() {
      return cn('ui-resizable-group', `ui-resizable-group--${this.direction}`, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    isHorizontal() {
      return this.direction === 'horizontal'
    },
  },
  watch: {
    modelValue(next) {
      if (!this.ready || !isSizeList(next, this.panels.length)) return
      const normalized = normalizeSizes(next.map(Number))
      if (normalized.some((n, i) => Math.abs(n - this.sizes[i]) > 0.01)) {
        this.sizes = normalized
        this.rememberExpanded()
      }
    },
  },
  mounted() {
    // Çocuklar ebeveynden önce mount olur: bu noktada tüm paneller kayıtlıdır.
    this.ready = true
    this.sizes = this.initialSizes()
    this.rememberExpanded()
    // Saklanan düzen `v-model` başlangıç değerinin önüne geçtiyse ebeveyn de güncellenir.
    if (isSizeList(this.modelValue, this.sizes.length) && this.sizes.some((n, i) => Math.abs(n - Number(this.modelValue[i])) > 0.01)) {
      this.$emit('update:modelValue', this.sizes.slice())
    }
  },
  methods: {
    sortByDom(list) {
      return list.sort((a, b) => {
        if (!a.$el || !b.$el || a.$el === b.$el) return 0
        return a.$el.compareDocumentPosition(b.$el) & 4 ? -1 : 1
      })
    },
    registerPanel(panel) {
      this.panels = this.sortByDom([...this.panels, markRaw(panel)])
      if (this.ready) this.relayout()
    },
    unregisterPanel(panel) {
      this.panels = this.panels.filter((p) => p !== panel)
      if (this.ready) this.relayout()
    },
    registerHandle(handle) {
      this.handles = this.sortByDom([...this.handles, markRaw(handle)])
    },
    unregisterHandle(handle) {
      this.handles = this.handles.filter((h) => h !== handle)
    },
    /** Panel sayısı değişti: varsayılanlardan yeniden dağıt. */
    relayout() {
      if (this.sizes.length === this.panels.length) return
      this.expandedSizes = {}
      this.sizes = this.defaultSizes()
      this.rememberExpanded()
    },
    defaultSizes() {
      const known = this.panels.map((p) => (Number.isFinite(Number(p.defaultSize)) && p.defaultSize != null ? Number(p.defaultSize) : null))
      const used = known.reduce((sum, n) => sum + (n ?? 0), 0)
      const unknown = known.filter((n) => n == null).length
      const share = unknown ? Math.max(0, 100 - used) / unknown : 0
      return normalizeSizes(known.map((n) => n ?? share))
    },
    initialSizes() {
      const count = this.panels.length
      // Öncelik: kullanıcının sakladığı düzen → `modelValue` → panel varsayılanları.
      const stored = this.readStored()
      if (isSizeList(stored, count)) return normalizeSizes(stored.map(Number))
      if (isSizeList(this.modelValue, count)) return normalizeSizes(this.modelValue.map(Number))
      return this.defaultSizes()
    },
    storageKey() {
      return this.autoSaveId ? `${STORAGE_PREFIX}${this.autoSaveId}` : ''
    },
    readStored() {
      const key = this.storageKey()
      if (!key) return null
      try {
        return JSON.parse(window.localStorage.getItem(key) || 'null')
      } catch {
        return null
      }
    },
    writeStored() {
      const key = this.storageKey()
      if (!key) return
      try {
        window.localStorage.setItem(key, JSON.stringify(this.sizes))
      } catch {
        // Depolama kapalı / dolu: boyutlar yalnız bu oturumda kalır.
      }
    },
    indexOfPanel(panel) {
      return this.panels.indexOf(panel)
    },
    indexOfHandle(handle) {
      return this.handles.indexOf(handle)
    },
    sizeAt(index) {
      const size = this.sizes[index]
      return Number.isFinite(size) ? size : null
    },
    isCollapsedAt(index) {
      const panel = this.panels[index]
      const size = this.sizeAt(index)
      if (!panel || !panel.collapsible || size == null) return false
      return size <= panelLimits(panel).collapsed + 0.01
    },
    rememberExpanded() {
      this.panels.forEach((panel, index) => {
        if (panel.collapsible && !this.isCollapsedAt(index) && this.sizeAt(index) != null) {
          this.expandedSizes[index] = this.sizes[index]
        }
      })
    },
    commit(next) {
      const rounded = next.map(round2)
      if (rounded.every((n, i) => Math.abs(n - this.sizes[i]) < 0.005)) return false
      this.sizes = rounded
      this.rememberExpanded()
      this.$emit('update:modelValue', rounded.slice())
      return true
    },
    /**
     * Tutamacın iki yanındaki panelleri yeniden böler; diğer paneller değişmez.
     * @param {number} index Tutamaç dizini (önceki panel `index`, sonraki `index + 1`).
     * @param {number} desiredBefore Önceki panel için istenen yüzde.
     * @param {number[]} [base] Sürükleme başlangıcındaki boyutlar.
     */
    resizePair(index, desiredBefore, base = this.sizes) {
      const before = this.panels[index]
      const after = this.panels[index + 1]
      if (!before || !after || base[index] == null || base[index + 1] == null) return false
      const total = base[index] + base[index + 1]
      let b = constrainSize(before, clamp(desiredBefore, 0, total))
      const a = constrainSize(after, total - b)
      b = total - a
      // Komşunun sınırı öncekini kendi sınırının dışına itiyorsa hareket uygulanmaz.
      if (Math.abs(constrainSize(before, b) - b) > EPSILON) return false
      const next = this.sizes.slice()
      next[index] = b
      next[index + 1] = a
      return this.commit(next)
    },
    /** Tutamaç ARIA değerleri — önceki panelin yüzdesi. */
    handleValues(index) {
      const before = this.panels[index]
      const after = this.panels[index + 1]
      if (!before || !after || this.sizeAt(index) == null || this.sizeAt(index + 1) == null) return null
      const total = this.sizes[index] + this.sizes[index + 1]
      const b = panelLimits(before)
      const a = panelLimits(after)
      return {
        now: Math.round(this.sizes[index]),
        min: Math.round(b.collapsed ?? b.min),
        max: Math.round(Math.min(b.max, total - (a.collapsed ?? a.min))),
        controls: before.panelId,
      }
    },
    panelsPixelSize() {
      return this.panels.reduce((sum, panel) => {
        const el = panel.$el
        return sum + (el ? (this.isHorizontal ? el.offsetWidth : el.offsetHeight) : 0)
      }, 0)
    },
    isRtl() {
      return this.isHorizontal && getComputedStyle(this.$el).direction === 'rtl'
    },
    startDrag() {
      this.dragging = true
      return { base: this.sizes.slice(), pixels: this.panelsPixelSize(), sign: this.isRtl() ? -1 : 1 }
    },
    dragTo(index, context, deltaPixels) {
      if (!(context.pixels > 0)) return
      const delta = (deltaPixels * context.sign * 100) / context.pixels
      this.resizePair(index, context.base[index] + delta, context.base)
    },
    endDrag() {
      if (!this.dragging) return
      this.dragging = false
      this.finishResize()
    },
    finishResize() {
      this.writeStored()
      this.$emit('resize-end', this.sizes.slice())
    },
    /** Ok tuşu: `direction` +1 önceki paneli büyütür, -1 küçültür. */
    stepHandle(index, direction) {
      const before = this.panels[index]
      const after = this.panels[index + 1]
      if (!before || !after) return
      const total = this.sizes[index] + this.sizes[index + 1]
      const current = this.sizes[index]
      const b = panelLimits(before)
      const a = panelLimits(after)
      const afterCurrent = this.sizes[index + 1]
      let desired = current + direction * this.keyboardStep
      if (direction < 0) {
        // Alt sınırda bir adım daha: daraltılabilir panel kapanır.
        if (b.collapsed != null && current <= b.min + EPSILON) desired = b.collapsed
        else desired = Math.max(b.min, desired)
        if (a.collapsed != null && afterCurrent < a.min - EPSILON) desired = total - a.min
      } else {
        if (b.collapsed != null && current < b.min - EPSILON) desired = b.min
        if (a.collapsed != null && afterCurrent <= a.min + EPSILON) desired = total - a.collapsed
        else if (!(a.collapsed != null && afterCurrent < a.min - EPSILON)) desired = Math.min(desired, total - a.min)
      }
      if (this.resizePair(index, desired)) this.finishResize()
    },
    /** Home / End: önceki panel izin verilen en küçük / en büyük boyuta. */
    moveHandleToLimit(index, toMax) {
      const before = this.panels[index]
      const after = this.panels[index + 1]
      if (!before || !after) return
      const total = this.sizes[index] + this.sizes[index + 1]
      const b = panelLimits(before)
      const a = panelLimits(after)
      const desired = toMax ? Math.min(b.max, total - a.min) : b.min
      if (this.resizePair(index, desired)) this.finishResize()
    },
    /** Enter: tutamacın yanındaki daraltılabilir paneli kapatır / geri açar. */
    toggleCollapse(index) {
      const before = this.panels[index]
      const after = this.panels[index + 1]
      if (!before || !after) return
      const targetIndex = before.collapsible ? index : after.collapsible ? index + 1 : -1
      if (targetIndex < 0) return
      const target = this.panels[targetIndex]
      const limits = panelLimits(target)
      const total = this.sizes[index] + this.sizes[index + 1]
      const desiredTarget = this.isCollapsedAt(targetIndex)
        ? Math.max(limits.min, this.expandedSizes[targetIndex] ?? target.defaultSize ?? limits.min)
        : limits.collapsed
      const desiredBefore = targetIndex === index ? desiredTarget : total - desiredTarget
      if (this.resizePair(index, desiredBefore)) this.finishResize()
    },
  },
}
</script>
