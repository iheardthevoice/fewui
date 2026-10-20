<template>
  <div
    ref="rootRef"
    :class="[rootShellClass, $attrs.class]"
  >
    <div
      ref="triggerRef"
      :class="triggerShellClass"
    >
      <slot
        name="trigger"
        :open="open"
        :toggle="toggle"
        :close="close"
      />
    </div>
    <Teleport
      v-if="portalReady"
      :to="portalTarget"
    >
      <Transition
        name="ui-overlay-popover-backdrop"
        appear
      >
        <div
          v-if="showMobileBackdrop"
          class="ui-popover-backdrop fixed inset-0 bg-black/70"
          :style="backdropStyle"
          aria-hidden="true"
          @pointerdown.stop.prevent="onBackdropDismiss"
          @click.stop.prevent="onBackdropDismiss"
        />
      </Transition>
      <Transition
        name="ui-overlay-popover"
        appear
        :duration="motionDuration"
        @before-enter="onPopoverBeforeEnter"
        @after-leave="onPopoverAfterLeave"
      >
        <div
          v-if="open"
          ref="layerRef"
          class="ui-popover-layer fixed"
          :style="layerStyle"
          :data-popover-align-active="alignSelectedOptionToTrigger ? '' : undefined"
          :data-ui-popover-mobile-centered="popoverMobileCenteredAttr ? '' : undefined"
          data-ui-popover-layer
          @pointerdown.stop
        >
          <div
            ref="panelRef"
            class="ui-surface ui-popover-panel w-full min-w-0 outline-none"
            role="dialog"
            tabindex="-1"
            @keydown="onPanelKeydown"
          >
            <div class="ui-popover-motion">
              <div
                v-if="$slots.header"
                class="ui-popover-header"
              >
                <slot
                  name="header"
                  :close="close"
                />
              </div>
              <div class="ui-popover-body min-h-0 min-w-0">
                <slot
                  name="content"
                  :close="close"
                />
              </div>
              <div
                v-if="$slots.footer"
                class="ui-popover-footer"
              >
                <slot
                  name="footer"
                  :close="close"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { isMobileViewport } from '../utils/viewport.js'
import { uiPortalMixin } from '../theme/ui-portal.js'
import { pushOverlay, releaseOverlay } from '../theme/overlay-stack.js'
import { readMotionDuration } from '../utils/motion-token.js'
import { onVisibleViewportChange, visibleViewportBottom } from '../utils/visible-viewport.js'

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
  'top',
]

/** Görünüm kenarı ile panel arası minimum boşluk (px) */
const VIEW_MARGIN = 10
/** Klavye görünür alanı daraltsa da panel en az bu kadar kalsın (arama + birkaç satır). */
const MIN_AVAILABLE_H = 120
/** Dialog sheet `margin-bottom` klavye geçişi (0.25s) + pay. */
const VIEWPORT_SETTLE_MS = 320

/**
 * Dış tıklama: alt popover katmanına tıklanınca üst popover kapanmaz.
 * Üst katmana tıklanınca alt popover varsayılan olarak kapanır;
 * `keepOpenOnAncestorPopoverClick` ile bu davranış isteğe bağlı kapatılabilir.
 */
const BUILTIN_OUTSIDE_CLICK_IGNORE_SELECTORS = [
  '.ui-select-listbox',
  '.ui-datepicker-panel',
  '.ui-daterangepicker-panel',
  '.ui-timepicker-panel',
]

export default {
  name: 'Popover',
  mixins: [uiPortalMixin],
  inheritAttrs: false,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom-start',
      validator: (v) => PLACEMENTS.includes(v),
    },
    /** Tetikleyici ile aynı minimum genişlik */
    matchTriggerWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * Panel genişliği (örn. `13rem`, `208px`). Verildiğinde katman sabitlenir; `matchTriggerWidth` ile birlikteyse bu önceliklidir.
     */
    width: {
      type: [String, Number],
      default: undefined,
    },
    disabled: {
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
    /**
     * Ek `closest` seçicileri (iç içe Select / DatePicker / TimePicker).
     */
    outsideClickIgnoreSelector: {
      type: String,
      default: '',
    },
    /**
     * true: bu popover, üst (ata) popover paneline tıklanınca da açık kalır.
     * false (varsayılan): üst panelde ama kendi panelinin dışında tıklanınca kapanır.
     */
    keepOpenOnAncestorPopoverClick: {
      type: Boolean,
      default: false,
    },
    /**
     * true: panel içinde `[role="option"][aria-selected="true"]` satırının üstü,
     * tetikleyicinin üstü ile aynı hizada olacak şekilde katman kaydırılır (Select).
     */
    alignSelectedOptionToTrigger: {
      type: Boolean,
      default: false,
    },
    /** true: tetikleyici satır genişliğini doldurur (sidebar footer vb.) */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * true: kök ve tetikleyici kabuğu `display: contents` — flex satırında yalnızca slot
     * (ör. `ui-tab-trigger`) katılır; konumlandırma ilk çocuk öğeden alınır.
     */
    inheritLayout: {
      type: Boolean,
      default: false,
    },
    /**
     * Mobil görünümde paneli ekran ortasında aç (varsayılan).
     * false: tetikleyiciye göre konumlanır (Dropdown menüler).
     */
    mobileCentered: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:open'],
  data() {
    return {
      layerStyle: {},
      layerZIndex: 0,
      rafId: 0,
      mobileCenteredActive: false,
      mobileCenteredLeaving: false,
      portalReady: false,
      /** Transition süresi — tema `--ui-popover-enter-duration` / `--ui-popover-leave-duration` verebilir. */
      motionDuration: { enter: 240, leave: 160 },
    }
  },
  computed: {
    showMobileBackdrop() {
      return this.open && this.mobileCentered && isMobileViewport()
    },
    popoverMobileCenteredAttr() {
      return this.mobileCenteredActive || this.mobileCenteredLeaving
    },
    backdropStyle() {
      // Panel her zaman backdrop üstünde; aynı z-index iOS’ta tıklama sızıntısı yapar.
      return { zIndex: String(this.layerZIndex) }
    },
    rootShellClass() {
      if (this.inheritLayout) {
        return 'ui-popover ui-popover--inherit-layout'
      }
      return this.block
        ? 'ui-popover ui-popover--block relative w-full min-w-0 max-w-full'
        : 'ui-popover relative shrink-0'
    },
    triggerShellClass() {
      if (this.inheritLayout) {
        return 'ui-popover-trigger ui-popover-trigger--inherit-layout'
      }
      return this.block
        ? 'ui-popover-trigger ui-popover-trigger--block flex w-full min-w-0 max-w-full'
        : 'ui-popover-trigger inline-flex shrink-0'
    },
    resolvedWidth() {
      const w = this.width
      if (w == null || w === '') return null
      return typeof w === 'number' ? `${w}px` : String(w)
    },
  },
  watch: {
    open(v) {
      if (v) {
        this.syncMotionDuration()
        this.mobileCenteredLeaving = false
        this.mobileCenteredActive = this.mobileCentered && isMobileViewport()
        // Panel ölçülmeden önce de z-index ver — aksi halde ilk karede z-auto
        // kalıp dialog (400) altında boyanabiliyor.
        this.acquireLayer()
        this.$nextTick(() => {
          this.updatePosition()
          this.schedulePosition()
          this.bindGlobalListeners()
        })
      } else {
        if (this.mobileCenteredActive) {
          this.mobileCenteredLeaving = true
        }
        this.mobileCenteredActive = false
        this.releaseLayer()
        this.teardownGlobalListeners()
      }
    },
    width() {
      if (this.open) this.schedulePosition()
    },
  },
  mounted() {
    this.portalReady = true
    this.syncMotionDuration()
    if (this.open) {
      this.acquireLayer()
      this.$nextTick(() => {
        this.updatePosition()
        this.schedulePosition()
        this.bindGlobalListeners()
      })
    }
  },
  beforeUnmount() {
    this.releaseLayer()
    this.teardownGlobalListeners()
    if (this.rafId) cancelAnimationFrame(this.rafId)
  },
  methods: {
    onPopoverBeforeEnter() {
      this.updatePosition()
    },
    /** Transition `duration` render’da okunur — açılış render’ından önce çağrılır. */
    syncMotionDuration() {
      const el = this.$refs.rootRef
      this.motionDuration = {
        enter: readMotionDuration('--ui-popover-enter-duration', 240, el),
        leave: readMotionDuration('--ui-popover-leave-duration', 160, el),
      }
    },
    onPopoverAfterLeave() {
      this.mobileCenteredLeaving = false
    },
    onBackdropDismiss() {
      this.close()
    },
    toggle() {
      if (this.disabled) return
      this.$emit('update:open', !this.open)
    },
    close() {
      if (!this.open) return
      this.$emit('update:open', false)
    },
    schedulePosition() {
      if (this.rafId) cancelAnimationFrame(this.rafId)
      this.rafId = requestAnimationFrame(() => {
        this.rafId = requestAnimationFrame(() => {
          this.rafId = 0
          this.updatePosition()
        })
      })
    },
    /**
     * Katman kaydına girer. Sonra açılan bir dialog bu kaydı kapatır;
     * z-index açılış anında dondurulduğu için aksi halde popover dialogun arkasında kalır.
     */
    acquireLayer() {
      if (this.layerZIndex) return
      this.layerZIndex = pushOverlay(this, 'floating', () => this.close())
      this.layerStyle = this.withLayerZIndex({ ...this.layerStyle })
    },
    releaseLayer() {
      if (!this.layerZIndex) return
      releaseOverlay(this)
      this.layerZIndex = 0
    },
    withLayerZIndex(style) {
      const z = this.layerZIndex
      return {
        ...style,
        // Panel, mobil backdrop (`layerZIndex`) üzerinde kalsın.
        zIndex: String(z + 1),
      }
    },
    resolveTriggerEl() {
      const shell = this.$refs.triggerRef
      if (!shell) return null
      if (this.inheritLayout) {
        return shell.firstElementChild instanceof HTMLElement ? shell.firstElementChild : shell
      }
      return shell
    },
    updatePosition() {
      const trigger = this.resolveTriggerEl()
      const panel = this.$refs.panelRef
      if (!trigger || !panel) return
      const vw = window.innerWidth
      // Klavye (Capacitor resize: none) innerHeight’i küçültmez — görünür alt kenar.
      const vh = visibleViewportBottom()
      const margin = VIEW_MARGIN
      const explicitW = this.resolvedWidth
      // Önceki yükseklik tavanını kaldır; doğal yükseklik ölçülsün (klavye kapanınca büyüsün).
      this.$refs.layerRef?.style.removeProperty('--ui-popover-available-h')
      const r = trigger.getBoundingClientRect()
      const contentW = panel.offsetWidth || 0
      const triggerW = Math.ceil(r.width)
      /**
       * Mobil ortalanmış panelde `offsetWidth` bazen çok dar (içerik henüz ölçülmemiş /
       * min-w-0 shrink) kalır; `matchTriggerWidth` iken tetikleyici genişliğini taban al.
       */
      let panelW
      if (explicitW != null) {
        panelW = contentW || 200
      } else if (this.matchTriggerWidth) {
        panelW = Math.max(contentW, triggerW)
      } else {
        panelW = contentW || 200
      }
      const panelH = panel.offsetHeight || 120

      if (isMobileViewport() && this.mobileCentered) {
        this.mobileCenteredActive = true
        const maxW = vw - margin * 2
        const widthPx = Math.min(panelW, maxW)
        const left = Math.max(margin, Math.round((vw - widthPx) / 2))
        const availableH = vh - margin * 2
        const top = Math.max(margin, Math.round((vh - Math.min(panelH, availableH)) / 2))
        const style = {
          top: `${top}px`,
          left: `${left}px`,
          '--ui-popover-origin': 'center center',
          '--ui-popover-available-h': `${Math.max(MIN_AVAILABLE_H, Math.floor(availableH))}px`,
        }
        if (explicitW != null) {
          style.width = explicitW
          style.minWidth = explicitW
        } else {
          style.width = `${widthPx}px`
          if (this.matchTriggerWidth) {
            style.minWidth = `${Math.min(triggerW, maxW)}px`
          }
          style.maxWidth = `calc(100vw - ${margin * 2}px)`
        }
        this.layerStyle = this.withLayerZIndex(style)
        return
      }

      this.mobileCenteredActive = false
      let top
      let left

      switch (this.placement) {
        case 'right-start':
          top = r.top
          left = r.right + margin
          break
        case 'right-end':
          top = r.bottom - panelH
          left = r.right + margin
          break
        case 'left-start':
          top = r.top
          left = r.left - margin - panelW
          break
        case 'left-end':
          top = r.bottom - panelH
          left = r.left - margin - panelW
          break
        case 'top-start':
          top = r.top - margin - panelH
          left = r.left
          break
        case 'top-end':
          top = r.top - margin - panelH
          left = r.right - panelW
          break
        case 'top':
          top = r.top - margin - panelH
          left = r.left + (r.width - panelW) / 2
          break
        case 'bottom-end':
          top = r.bottom + margin
          left = r.right - panelW
          break
        case 'bottom':
          top = r.bottom + margin
          left = r.left + (r.width - panelW) / 2
          break
        case 'bottom-start':
        default:
          top = r.bottom + margin
          left = r.left
          break
      }

      if (this.placement.startsWith('right') && left + panelW > vw - margin) {
        left = r.left - margin - panelW
      }
      if (this.placement.startsWith('left') && left < margin) {
        left = r.right + margin
      }
      if (this.placement.startsWith('top') && top < margin) {
        top = r.bottom + margin
      }

      if (left + panelW > vw - margin) left = Math.max(margin, vw - margin - panelW)
      if (left < margin) left = margin

      let availableH = null
      if (this.placement.startsWith('bottom') && top + panelH > vh - margin) {
        const spaceBelow = vh - margin - top
        const spaceAbove = r.top - margin * 2
        if (spaceAbove >= panelH) {
          top = r.top - margin - panelH
        } else if (spaceAbove > spaceBelow) {
          // İki tarafa da sığmıyor — geniş tarafa aç, panel kendi içinde kaysın.
          top = margin
          availableH = spaceAbove
        } else {
          availableH = spaceBelow
        }
      }

      if (this.placement.startsWith('right') || this.placement.startsWith('left')) {
        if (top + panelH > vh - margin) top = Math.max(margin, vh - margin - panelH)
        if (top < margin) top = margin
      }

      const minW =
        this.matchTriggerWidth && explicitW == null ? `${Math.ceil(r.width)}px` : undefined
      if (availableH == null) availableH = vh - margin - top
      const style = {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        minWidth: minW,
        '--ui-popover-origin': this.resolveMotionOrigin(r, top, left, panelW, panelH),
        '--ui-popover-available-h': `${Math.max(MIN_AVAILABLE_H, Math.floor(availableH))}px`,
      }
      if (explicitW != null) {
        style.width = explicitW
        style.minWidth = explicitW
      }
      this.layerStyle = this.withLayerZIndex(style)
      if (this.alignSelectedOptionToTrigger) {
        this.$nextTick(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger())
          })
        })
      }
    },
    /**
     * Açılış ölçeğinin merkezi: tetikleyiciye bakan kenar, tetikleyici ortasına hizalı.
     * Yer değiştiren (flip) panelde de doğru kenardan büyür.
     */
    resolveMotionOrigin(r, top, left, panelW, panelH) {
      const clamp = (v, max) => Math.min(max, Math.max(0, v))
      let x
      if (left >= r.right - 1) x = 0
      else if (left + panelW <= r.left + 1) x = panelW
      else x = clamp(r.left + r.width / 2 - left, panelW)
      let y
      if (top >= r.bottom - 1) y = 0
      else if (top + panelH <= r.top + 1) y = panelH
      else y = clamp(r.top + r.height / 2 - top, panelH)
      return `${Math.round(x)}px ${Math.round(y)}px`
    },
    nudgeAlignSelectedToTrigger() {
      const trigger = this.resolveTriggerEl()
      const panel = this.$refs.panelRef
      const layer = this.$refs.layerRef
      if (!trigger || !panel || !layer) return
      const listbox = panel.querySelector('[role="listbox"]')
      if (listbox && listbox.scrollHeight > listbox.clientHeight + 2) {
        return
      }
      const selected = panel.querySelector('[role="option"][aria-selected="true"]')
      if (!selected) return
      /** Metin hizası — Select `[data-popover-align]` span’larında */
      const triggerAlign = trigger.querySelector('[data-popover-align]') || trigger
      const selectedAlign = selected.querySelector('[data-popover-align]') || selected
      const tr = triggerAlign.getBoundingClientRect()
      const sr = selectedAlign.getBoundingClientRect()
      const deltaY = sr.top - tr.top
      const deltaX = sr.left - tr.left

      const lb = layer.getBoundingClientRect()
      const topStr = this.layerStyle.top
      const leftStr = this.layerStyle.left
      let topNum =
        typeof topStr === 'string' && topStr !== ''
          ? parseFloat(topStr)
          : lb.top
      let leftNum =
        typeof leftStr === 'string' && leftStr !== ''
          ? parseFloat(leftStr)
          : lb.left
      if (Number.isNaN(topNum)) topNum = lb.top
      if (Number.isNaN(leftNum)) leftNum = lb.left

      let newTop = topNum - deltaY
      let newLeft = leftNum - deltaX

      const margin = VIEW_MARGIN
      const vh = visibleViewportBottom()
      const vw = window.innerWidth
      const h = lb.height
      const w = lb.width

      if (newTop + h > vh - margin) newTop = Math.max(margin, vh - margin - h)
      if (newTop < margin) newTop = margin

      if (newLeft + w > vw - margin) newLeft = Math.max(margin, vw - margin - w)
      if (newLeft < margin) newLeft = margin

      this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(newTop)}px`,
        left: `${Math.round(newLeft)}px`,
      })
    },
    bindGlobalListeners() {
      this.offVisibleViewport?.()
      this.offVisibleViewport = onVisibleViewportChange(this.onVisibleViewportChange)
      window.addEventListener('scroll', this.onScrollResize, true)
      window.addEventListener('resize', this.onScrollResize)
      document.addEventListener('pointerdown', this.onDocPointerDown, true)
      document.addEventListener('keydown', this.onDocKeydown, true)
    },
    teardownGlobalListeners() {
      this.offVisibleViewport?.()
      this.offVisibleViewport = null
      if (this.viewportSettleTimer) {
        clearTimeout(this.viewportSettleTimer)
        this.viewportSettleTimer = null
      }
      window.removeEventListener('scroll', this.onScrollResize, true)
      window.removeEventListener('resize', this.onScrollResize)
      document.removeEventListener('pointerdown', this.onDocPointerDown, true)
      document.removeEventListener('keydown', this.onDocKeydown, true)
    },
    /**
     * Klavye açılıp kapanınca: hemen yerleş, sonra dialog sheet’in klavyeyle
     * yükselme geçişi bitince (tetikleyici yer değiştirir) bir kez daha.
     */
    onVisibleViewportChange() {
      if (!this.open) return
      this.updatePosition()
      if (this.viewportSettleTimer) clearTimeout(this.viewportSettleTimer)
      this.viewportSettleTimer = setTimeout(() => {
        this.viewportSettleTimer = null
        if (this.open) this.updatePosition()
      }, VIEWPORT_SETTLE_MS)
    },
    onScrollResize(e) {
      if (!this.open) return
      const panel = this.$refs.panelRef
      const target = e?.target
      if (
        panel
        && target instanceof Node
        && target !== document
        && target !== document.documentElement
        && panel.contains(target)
      ) {
        return
      }
      this.schedulePosition()
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return
      const t = e.target
      const trigger = this.$refs.triggerRef
      const panel = this.$refs.panelRef
      if (trigger?.contains(t) || panel?.contains(t)) return
      if (this.shouldIgnoreOutsideClick(t)) return
      // Overlay açıkken alttaki kontrole tıklama gitmesin (iOS hit-test sızıntısı).
      e.preventDefault()
      e.stopPropagation()
      this.close()
    },
    isOpenedInsidePopoverLayer(layerEl) {
      const root = this.$refs.rootRef
      return Boolean(layerEl && root && layerEl.contains(root))
    },
    shouldIgnoreOutsideClick(target) {
      if (typeof target?.closest !== 'function') return false

      const ownLayer = this.$refs.layerRef
      const foreignLayer = target.closest('[data-ui-popover-layer]')
      if (foreignLayer && foreignLayer !== ownLayer) {
        const insideAncestorPopover = this.isOpenedInsidePopoverLayer(foreignLayer)
        if (insideAncestorPopover) {
          return this.keepOpenOnAncestorPopoverClick
        }
        return true
      }

      for (const sel of BUILTIN_OUTSIDE_CLICK_IGNORE_SELECTORS) {
        if (target.closest(sel)) return true
      }

      const extra = this.outsideClickIgnoreSelector?.trim()
      if (extra && target.closest(extra)) return true

      return false
    },
    onDocKeydown(e) {
      if (!this.open || !this.closeOnEscape) return
      if (e.key === 'Escape') {
        e.preventDefault()
        this.close()
      }
    },
    onPanelKeydown(e) {
      if (e.key === 'Escape') this.close()
    },
  },
}
</script>
