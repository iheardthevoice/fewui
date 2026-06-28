<template>
  <div
    v-if="shouldRender"
    :class="rootShellClass"
  >
    <!-- card -->
    <ui-card
      v-if="mode === 'card'"
      :icon="icon"
      :icon-type="iconType"
      :title="title"
      :description="description"
      border
    >
      <slot />
      <template
        v-if="hasFooterActions"
        #footer
      >
        <slot name="footer">
          <div class="ui-guidance-footer">
            <ui-button
              v-if="showFooterClose"
              type="button"
              variant="outline"
              color="secondary"
              rounded
              @click="onClose"
            >
              {{ resolvedCloseLabel }}
            </ui-button>
            <ui-button
              v-if="showGo"
              type="button"
              color="primary"
              rounded
              @click="onGo"
            >
              {{ resolvedGoLabel }}
            </ui-button>
          </div>
        </slot>
      </template>
    </ui-card>

    <!-- dialog -->
    <ui-dialog
      v-else-if="mode === 'dialog'"
      v-model:open="syncOpen"
      :icon="icon"
      :icon-type="iconType"
      :title="title"
      :description="description"
      :max-width="maxWidth"
      :close-on-backdrop="closeOnBackdrop"
      :close-on-escape="closeOnEscape"
      :show-close="showClose"
      header-divider
      @after-leave="$emit('after-leave')"
    >
      <slot />
      <template
        v-if="showGo && !$slots.footer"
        #footer
      >
        <ui-button
          type="button"
          color="primary"
          rounded
          @click="onGo"
        >
          {{ resolvedGoLabel }}
        </ui-button>
      </template>
      <template
        v-else-if="$slots.footer"
        #footer
      >
        <slot name="footer" />
      </template>
    </ui-dialog>

    <!-- popover -->
    <ui-popover
      v-else-if="mode === 'popover'"
      v-model:open="syncOpen"
      :placement="placement"
      :width="popoverWidth"
      :close-on-outside-click="closeOnBackdrop"
      :close-on-escape="closeOnEscape"
    >
      <template #trigger="slotProps">
        <slot
          name="trigger"
          v-bind="slotProps"
        />
      </template>
      <template #content>
        <div class="ui-guidance-popover">
          <div
            v-if="icon || title || description"
            class="ui-guidance-popover__lead"
          >
            <span
              v-if="icon"
              class="ui-guidance-popover__icon"
            >
              <ui-icon
                :name="icon"
                :type="iconType"
                size="sm"
              />
            </span>
            <div class="ui-guidance-popover__text">
              <p
                v-if="title"
                class="ui-guidance-popover__title"
              >
                {{ title }}
              </p>
              <p
                v-if="description"
                class="ui-guidance-popover__description ui-text-default"
              >
                {{ description }}
              </p>
            </div>
          </div>
          <slot />
          <div
            v-if="hasFooterActions && !$slots.footer"
            class="ui-guidance-footer ui-guidance-footer--popover"
          >
            <ui-button
              v-if="showFooterClose"
              type="button"
              variant="outline"
              color="secondary"
              size="sm"
              rounded
              @click="onClose"
            >
              {{ resolvedCloseLabel }}
            </ui-button>
            <ui-button
              v-if="showGo"
              type="button"
              color="primary"
              size="sm"
              rounded
              @click="onGo"
            >
              {{ resolvedGoLabel }}
            </ui-button>
          </div>
          <slot
            v-else
            name="footer"
          />
        </div>
      </template>
    </ui-popover>

    <!-- tour -->
    <Teleport
      v-else-if="mode === 'tour'"
      to="body"
    >
      <Transition
        name="ui-overlay-dialog"
        appear
        @after-leave="$emit('after-leave')"
      >
        <div
          v-if="syncOpen"
          class="ui-guidance-tour"
          role="presentation"
          @keydown.esc="onEscape"
        >
          <div
            v-if="closeOnBackdrop"
            class="ui-guidance-tour__backdrop"
            aria-hidden="true"
            @click="onBackdrop"
          />
          <div
            v-if="tourHighlightStyle"
            class="ui-guidance-tour__highlight"
            :style="tourHighlightStyle"
            aria-hidden="true"
          />
          <div
            ref="tourPanelRef"
            class="ui-guidance-tour__panel ui-surface ui-card"
            :style="tourPanelStyle"
            role="dialog"
            aria-modal="true"
            :aria-label="title || resolvedGoLabel"
          >
            <div class="ui-guidance-tour__panel-header">
              <span
                v-if="icon"
                class="ui-guidance-tour__icon"
              >
                <ui-icon
                  :name="icon"
                  :type="iconType"
                  size="sm"
                />
              </span>
              <div class="ui-guidance-tour__panel-text">
                <p
                  v-if="title"
                  class="ui-guidance-tour__title"
                >
                  {{ title }}
                </p>
                <p
                  v-if="description"
                  class="ui-guidance-tour__description ui-text-default"
                >
                  {{ description }}
                </p>
              </div>
              <ui-button
                v-if="showClose"
                type="button"
                variant="solid"
                color="secondary"
                size="sm"
                cubed
                prefix-icon="xmark"
                :aria-label="resolvedCloseLabel"
                @click="onClose"
              />
            </div>
            <div
              v-if="$slots.default"
              class="ui-guidance-tour__body"
            >
              <slot />
            </div>
            <div
              v-if="hasFooterActions && !$slots.footer"
              class="ui-guidance-footer ui-guidance-footer--tour"
            >
              <ui-button
                v-if="showFooterClose"
                type="button"
                variant="outline"
                color="secondary"
                size="sm"
                rounded
                @click="onClose"
              >
                {{ resolvedCloseLabel }}
              </ui-button>
              <ui-button
                v-if="showGo"
                type="button"
                color="primary"
                size="sm"
                rounded
                @click="onGo"
              >
                {{ resolvedGoLabel }}
              </ui-button>
            </div>
            <slot
              v-else
              name="footer"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { resolveUiText } from '../utils/resolve-ui-text.js'

const MODES = ['dialog', 'popover', 'card', 'tour']
const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']
const PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'bottom',
  'top-start',
  'top-end',
  'top',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
]
const MAX_WIDTHS = ['sm', 'md', 'lg', 'xl', '2xl', 'full']

const TOUR_GAP = 8
const TOUR_PANEL_MARGIN = 12
const TOUR_DEFAULT_TARGET_PADDING = 8

export default {
  name: 'Guidance',
  props: {
    /** `dialog` | `popover` | `card` | `tour` */
    mode: {
      type: String,
      default: 'dialog',
      validator: (v) => MODES.includes(v),
    },
    /** v-model:open — dialog, popover, tour */
    open: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    iconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    goLabel: {
      type: String,
      default: '',
    },
    closeLabel: {
      type: String,
      default: '',
    },
    showGo: {
      type: Boolean,
      default: true,
    },
    /** Üst köşe X (dialog/tour) */
    showClose: {
      type: Boolean,
      default: true,
    },
    /** Alt ikincil düğme (card/popover/tour) */
    showFooterClose: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom-start',
      validator: (v) => PLACEMENTS.includes(v),
    },
    /** Tour: CSS seçici veya HTMLElement */
    target: {
      type: [String, Object],
      default: '',
    },
    /** Tour: hedef etrafındaki vurgu boşluğu (px) */
    targetPadding: {
      type: Number,
      default: TOUR_DEFAULT_TARGET_PADDING,
    },
    maxWidth: {
      type: String,
      default: 'sm',
      validator: (v) => MAX_WIDTHS.includes(v),
    },
    popoverWidth: {
      type: String,
      default: '18rem',
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    /**
     * `false` iken `seen` true olduğunda bileşen render edilmez.
     * Kalıcılık üst katmanda `persistKey` ile yönetilir.
     */
    repeatable: {
      type: Boolean,
      default: false,
    },
    /** Kullanıcı bu bilgilendirmeyi gördü mü (üst katman tercihlerinden) */
    seen: {
      type: Boolean,
      default: false,
    },
    /** Üst katman tercih anahtarı (dokümantasyon / erişilebilirlik) */
    persistKey: {
      type: String,
      default: '',
    },
  },
  emits: ['update:open', 'go', 'close', 'after-leave'],
  data() {
    return {
      tourHighlightStyle: null,
      tourPanelStyle: null,
      tourResizeObserver: null,
    }
  },
  computed: {
    shouldRender() {
      return this.repeatable || !this.seen
    },
    rootShellClass() {
      if (this.mode === 'card') return 'ui-guidance ui-guidance--card'
      if (this.mode === 'popover') return 'ui-guidance ui-guidance--popover'
      return 'ui-guidance'
    },
    syncOpen: {
      get() {
        return this.open
      },
      set(value) {
        this.$emit('update:open', value)
      },
    },
    hasFooterActions() {
      return this.showGo || this.showFooterClose || Boolean(this.$slots.footer)
    },
    resolvedGoLabel() {
      if (this.goLabel) return this.goLabel
      return resolveUiText(this, 'ui.guidance.go', 'Continue')
    },
    resolvedCloseLabel() {
      if (this.closeLabel) return this.closeLabel
      return resolveUiText(this, 'ui.guidance.close', 'Close')
    },
  },
  watch: {
    open: {
      immediate: true,
      handler(isOpen) {
        if (this.mode !== 'tour') return
        if (isOpen) {
          this.$nextTick(() => {
            this.updateTourLayout()
            this.bindTourListeners()
          })
        } else {
          this.unbindTourListeners()
        }
      },
    },
    target() {
      if (this.mode === 'tour' && this.open) {
        this.$nextTick(() => {
          this.updateTourLayout()
          this.bindTourListeners()
        })
      }
    },
    targetPadding() {
      if (this.mode === 'tour' && this.open) {
        this.$nextTick(() => this.updateTourLayout())
      }
    },
  },
  beforeUnmount() {
    this.unbindTourListeners()
  },
  methods: {
    onGo() {
      this.$emit('go')
    },
    onClose() {
      this.$emit('close')
      this.$emit('update:open', false)
    },
    onBackdrop() {
      if (!this.closeOnBackdrop) return
      this.onClose()
    },
    onEscape() {
      if (!this.closeOnEscape) return
      this.onClose()
    },
    resolveTourTarget() {
      const raw = this.target
      if (!raw) return null
      let el = null
      if (typeof raw === 'object' && raw instanceof HTMLElement) {
        el = raw
      } else if (typeof raw === 'string' && raw.trim()) {
        el = document.querySelector(raw.trim())
      }
      if (!el) return null
      const row = el.closest('.ui-form-row')
      return row || el
    },
    measureTourLayout(flipIfNeeded = false) {
      const targetEl = this.resolveTourTarget()
      const panelEl = this.$refs.tourPanelRef
      if (!panelEl) return

      const viewportW = window.innerWidth
      const viewportH = window.innerHeight
      const panelRect = panelEl.getBoundingClientRect()
      const panelW = panelRect.width || 320
      const panelH = panelRect.height || 180

      if (!targetEl) {
        this.tourHighlightStyle = null
        this.tourPanelStyle = {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(24rem, calc(100vw - 2rem))',
          zIndex: 420,
        }
        return
      }

      const rect = targetEl.getBoundingClientRect()
      const pad = Math.max(0, Number(this.targetPadding) || 0)
      const highlightTop = Math.max(0, rect.top - pad)
      const highlightLeft = Math.max(0, rect.left - pad)
      const highlightBottom = Math.min(viewportH, rect.bottom + pad)
      const highlightRight = Math.min(viewportW, rect.right + pad)

      this.tourHighlightStyle = {
        top: `${highlightTop}px`,
        left: `${highlightLeft}px`,
        width: `${Math.max(0, highlightRight - highlightLeft)}px`,
        height: `${Math.max(0, highlightBottom - highlightTop)}px`,
      }

      let top = highlightBottom + TOUR_PANEL_MARGIN
      let left = highlightLeft

      if (this.placement.startsWith('top')) {
        top = highlightTop - panelH - TOUR_PANEL_MARGIN
      } else if (this.placement.startsWith('right')) {
        top = highlightTop
        left = highlightRight + TOUR_PANEL_MARGIN
      } else if (this.placement.startsWith('left')) {
        top = highlightTop
        left = highlightLeft - panelW - TOUR_PANEL_MARGIN
      } else if (this.placement.includes('end')) {
        left = highlightRight - panelW
      }

      if (
        flipIfNeeded
        && !this.placement.startsWith('top')
        && !this.placement.startsWith('left')
        && !this.placement.startsWith('right')
        && top + panelH > viewportH - TOUR_PANEL_MARGIN
      ) {
        top = highlightTop - panelH - TOUR_PANEL_MARGIN
      }

      top = Math.max(TOUR_PANEL_MARGIN, Math.min(top, viewportH - panelH - TOUR_PANEL_MARGIN))
      left = Math.max(TOUR_PANEL_MARGIN, Math.min(left, viewportW - panelW - TOUR_PANEL_MARGIN))

      this.tourPanelStyle = {
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        width: 'min(24rem, calc(100vw - 2rem))',
        zIndex: 420,
        transform: 'none',
      }
    },
    updateTourLayout() {
      this.measureTourLayout(false)
      if (this._tourLayoutRaf) {
        cancelAnimationFrame(this._tourLayoutRaf)
      }
      this._tourLayoutRaf = requestAnimationFrame(() => {
        this.measureTourLayout(true)
        this._tourLayoutRaf = null
      })
    },
    bindTourListeners() {
      this.unbindTourListeners()
      this._tourOnResize = () => this.updateTourLayout()
      window.addEventListener('resize', this._tourOnResize)
      window.addEventListener('scroll', this._tourOnResize, true)
      if (typeof ResizeObserver !== 'undefined') {
        this.tourResizeObserver = new ResizeObserver(() => this.updateTourLayout())
        const panelEl = this.$refs.tourPanelRef
        if (panelEl) this.tourResizeObserver.observe(panelEl)
        const targetEl = this.resolveTourTarget()
        if (targetEl) this.tourResizeObserver.observe(targetEl)
      }
    },
    unbindTourListeners() {
      if (this._tourLayoutRaf) {
        cancelAnimationFrame(this._tourLayoutRaf)
        this._tourLayoutRaf = null
      }
      if (this._tourOnResize) {
        window.removeEventListener('resize', this._tourOnResize)
        window.removeEventListener('scroll', this._tourOnResize, true)
        this._tourOnResize = null
      }
      if (this.tourResizeObserver) {
        this.tourResizeObserver.disconnect()
        this.tourResizeObserver = null
      }
    },
  },
}
</script>
