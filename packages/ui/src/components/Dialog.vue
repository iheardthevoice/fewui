<template>
  <!-- Defer Teleport until mount: empty SSR teleport markers mismatch and can wipe #app. -->
  <Teleport
    v-if="portalReady"
    to="body"
  >
    <div
      v-if="layerMounted"
      ref="layerRef"
      :class="rootLayerClasses"
      tabindex="-1"
      role="presentation"
      @keydown="onLayerKeydown"
    >
        <div
          class="ui-dialog-backdrop absolute inset-0 bg-black/50"
          aria-hidden="true"
          @click="onBackdrop"
        />
        <div
          ref="panelRef"
          :class="panelClasses"
          :style="panelStyle"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
          :aria-labelledby="ariaLabelledby"
          :aria-describedby="ariaDescribedby"
          :aria-label="ariaLabelAttr"
          v-bind="passthroughAttrs"
          @click.stop
        >
          <div class="ui-dialog-motion">
          <div
            class="ui-dialog-sheet-grab shrink-0"
            @pointerdown="onSheetPointerDown"
          >
            <div
              class="ui-dialog-sheet-handle"
              aria-hidden="true"
            />
          </div>
          <div
            v-if="hasHeaderBlock"
            class="ui-card-header ui-dialog-sheet-drag shrink-0"
            @pointerdown="onSheetPointerDown"
          >
            <slot name="header">
              <div
                v-if="hasDefaultHeader"
                class="ui-dialog-header"
                :class="{
                  'ui-dialog-header--no-icon': !icon,
                  'ui-dialog-header--with-back': withBack,
                }"
              >
                <ui-button
                  v-if="withBack"
                  type="button"
                  variant="ghost"
                  color="secondary"
                  size="md"
                  prefix-icon="arrow-left"
                  class="ui-dialog-header__back"
                  @click="onBack"
                >
                  {{ resolvedBackLabel }}
                </ui-button>
                <div class="ui-dialog-header__lead">
                  <span
                    v-if="icon"
                    class="ui-dialog-header__icon"
                  >
                    <ui-icon
                      :name="icon"
                      :type="resolvedIconType"
                      size="md"
                    />
                  </span>
                  <h3
                    v-if="hasTitle"
                    :id="titleId"
                    class="ui-dialog-header__title ui-heading-2"
                  >
                    <slot name="title">{{ title }}</slot>
                  </h3>
                </div>
                <div
                  v-if="showClose || $slots.append || $slots.actions"
                  class="ui-dialog-header__actions"
                >
                  <slot name="append" />
                  <slot name="actions" />
                  <ui-button
                    v-if="showClose"
                    type="button"
                    variant="solid"
                    color="secondary"
                    size="sm"
                    cubed
                    prefix-icon="xmark"
                    class="ui-dialog-header__close"
                    :aria-label="resolvedCloseLabel"
                    @click="close"
                  />
                </div>
                <p
                  v-if="hasDescription"
                  :id="descriptionId"
                  class="ui-dialog-header__description ui-text-default"
                >
                  <slot name="description">{{ description }}</slot>
                </p>
              </div>
            </slot>
          </div>

          <div
            v-if="$slots.toolbar"
            class="ui-card-toolbar shrink-0"
          >
            <slot name="toolbar" />
          </div>

          <Divider
            v-if="showHeaderDivider"
            spacing="none"
            class="!my-0 shrink-0"
          />

          <div
            v-if="$slots.default"
            class="ui-card-body ui-text-default"
            :class="{
              'ui-card-body--row': row,
              'ui-card-body--flush': bodyPadding === 'none',
              'ui-card-body--flex': bodyLayout === 'flex',
            }"
          >
            <slot />
          </div>

          <div
            v-if="$slots.footer"
            class="ui-card-footer"
            :class="{ 'ui-dialog-footer--transparent': footerTransparent }"
          >
            <slot name="footer" />
          </div>
          </div>
        </div>
      </div>
  </Teleport>
</template>

<script>
import Divider from './Divider.vue'
import { cn } from '../utils/cn.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { pickPassthroughAttrs } from '../utils/pick-passthrough-attrs.js'
import { focusFirstField } from '../utils/focus-first-field.js'
import {
  resolveThemeDialogMaxWidth,
  resolveThemeIconType,
} from '../theme/resolve-theme-default.js'
import { isMobileViewport } from '../utils/viewport.js'

const nextDialogId = createUiIdFactory('ui-dialog')

const BORDER_TYPES = ['solid', 'dashed', 'dotted', 'double']

const BORDER_TYPE_CLASS = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
}

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

const MAX_WIDTHS = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full']

const MAX_WIDTH_CLASS = {
  sm: 'ui-dialog-panel--max-sm',
  md: 'ui-dialog-panel--max-md',
  lg: 'ui-dialog-panel--max-lg',
  xl: 'ui-dialog-panel--max-xl',
  '2xl': 'ui-dialog-panel--max-2xl',
  '3xl': 'ui-dialog-panel--max-3xl',
  '4xl': 'ui-dialog-panel--max-4xl',
  '5xl': 'ui-dialog-panel--max-5xl',
  full: 'ui-dialog-panel--max-full',
}

export default {
  name: 'Dialog',
  components: { Divider },
  inheritAttrs: false,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: false,
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    /** İç panel genişliği (`max-w-*`). */
    maxWidth: {
      type: String,
      default: undefined,
      validator: (v) => v == null || MAX_WIDTHS.includes(v),
    },
    /** Dış çerçeve (1px `border-border`) — `ui-card` ile aynı. */
    border: {
      type: Boolean,
      default: true,
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: 'solid',
      validator: (v) => BORDER_TYPES.includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null,
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: undefined,
      validator: (v) => v == null || ICON_TYPES.includes(v),
    },
    /** Sağ üst kapat düğmesi. */
    showClose: {
      type: Boolean,
      default: true,
    },
    /** Kapat düğmesi `aria-label`; boşsa `ui.dialog.close` (i18n). */
    closeLabel: {
      type: String,
      default: '',
    },
    /** Başlıkta geri düğmesi; `@back` ile birlikte kullanılır. */
    withBack: {
      type: Boolean,
      default: false,
    },
    /** Geri düğmesi metni; boşsa `ui.dialog.back` (i18n). */
    backLabel: {
      type: String,
      default: '',
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: false,
    },
    /** Gövde dolgusu — `none`: kenar padding sıfır (POS ödeme vb.). */
    bodyPadding: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'none',
    },
    /** Gövde düzeni — `flex`: dikey flex + taşma kontrolü (içerik paneli). */
    bodyLayout: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'flex',
    },
    /**
     * Footer şeffaf — arka plan/border yok; gövde üzerine biner.
     * Kaydırılabilir içerik footer altında görünür; gövde alt boşluğu otomatik artar.
     */
    footerTransparent: {
      type: Boolean,
      default: false,
    },
    /** Panel `max-height` — örn. `min(85vh, 36rem)`. */
    panelMaxHeight: {
      type: String,
      default: '',
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı. */
    headerDivider: {
      type: Boolean,
      default: false,
    },
    /**
     * Başlık yokken `role="dialog"` için erişilebilir ad.
     * Başlık varsa `aria-labelledby` önceliklidir.
     */
    ariaLabel: {
      type: String,
      default: '',
    },
    /** Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer). */
    initialFocus: {
      type: Boolean,
      default: true,
    },
    /**
     * Yığılma katmanı — `confirm`: açık modalların üstünde (programatik onay).
     * @type {'default' | 'confirm'}
     */
    stackLayer: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'confirm',
    },
  },
  emits: ['update:open', 'after-leave', 'back'],
  data() {
    const id = nextDialogId()
    return {
      titleId: `ui-dialog-title-${id}`,
      descriptionId: `ui-dialog-desc-${id}`,
      portalReady: false,
      focusFallbackTimer: null,
      sheetDragCleanup: null,
      layerMounted: false,
      layerClosing: false,
    }
  },
  watch: {
    open: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) {
          if (this.layerMounted || this.layerClosing) return
          this.layerMounted = true
          this.$nextTick(() => {
            this.resetPanelMotionStyles()
            this.animateLayerIn(this.$refs.layerRef)
          })
        } else if (this.layerMounted && !this.layerClosing) {
          this.dismissLayer()
        }
      },
    },
  },
  mounted() {
    this.portalReady = true
  },
  beforeUnmount() {
    this.clearFocusFallback()
    this.clearSheetDragListeners()
    this.layerMounted = false
    this.layerClosing = false
  },
  computed: {
    hasTitle() {
      return !!(this.$slots.title || (this.title != null && this.title !== ''))
    },
    hasDescription() {
      return !!(
        this.$slots.description ||
        (this.description != null && this.description !== '')
      )
    },
    hasDefaultHeader() {
      return !!(
        this.icon ||
        this.hasTitle ||
        this.hasDescription ||
        this.$slots.actions ||
        this.$slots.append ||
        this.showClose ||
        this.withBack
      )
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader
    },
    showHeaderDivider() {
      return (
        this.headerDivider &&
        !!this.$slots.default &&
        (this.hasHeaderBlock || !!this.$slots.toolbar)
      )
    },
    borderStyleClass() {
      return BORDER_TYPE_CLASS[this.borderType] || BORDER_TYPE_CLASS.solid
    },
    resolvedIconType() {
      return resolveThemeIconType(this.iconType)
    },
    resolvedMaxWidth() {
      return resolveThemeDialogMaxWidth(this.maxWidth)
    },
    maxWidthClass() {
      return MAX_WIDTH_CLASS[this.resolvedMaxWidth] || MAX_WIDTH_CLASS.lg
    },
    panelClasses() {
      const borderPart = this.border
        ? cn('border', this.borderStyleClass)
        : cn('border-0', 'border-transparent')
      return cn(
        'ui-surface ui-card ui-dialog-panel relative z-[1] w-full',
        this.maxWidthClass,
        borderPart,
        this.bodyLayout === 'flex' ? 'ui-dialog-panel--body-flex' : '',
        this.footerTransparent ? 'ui-dialog-panel--footer-transparent' : '',
        this.$attrs.class,
      )
    },
    panelStyle() {
      if (!this.panelMaxHeight) return undefined
      return { maxHeight: this.panelMaxHeight }
    },
    passthroughAttrs() {
      return pickPassthroughAttrs(this.$attrs, ['class'])
    },
    ariaLabelledby() {
      if (this.hasTitle) {
        return this.titleId
      }
      return undefined
    },
    ariaDescribedby() {
      if (this.hasDescription) {
        return this.descriptionId
      }
      return undefined
    },
    ariaLabelAttr() {
      if (this.ariaLabelledby) return undefined
      if (this.ariaLabel != null && this.ariaLabel !== '') return this.ariaLabel
      return undefined
    },
    resolvedCloseLabel() {
      if (this.closeLabel != null && this.closeLabel !== '') {
        return this.closeLabel
      }
      return resolveUiText(this, 'ui.dialog.close', 'Close')
    },
    resolvedBackLabel() {
      if (this.backLabel != null && this.backLabel !== '') {
        return this.backLabel
      }
      return resolveUiText(this, 'ui.dialog.back', 'Back')
    },
    rootLayerClasses() {
      return cn(
        'ui-dialog-root fixed inset-0 flex outline-none',
        this.stackLayer === 'confirm' && 'ui-dialog-root--confirm',
      )
    },
  },
  methods: {
    prefersReducedMotion() {
      if (typeof window === 'undefined') return false
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    },
    mobileSheetEasing() {
      return 'cubic-bezier(0.32, 0.72, 0, 1)'
    },
    mobileSheetDurationMs() {
      return 360
    },
    layerMotionParts(el) {
      return {
        panel: el.querySelector('.ui-dialog-panel'),
        motion: el.querySelector('.ui-dialog-motion'),
        backdrop: el.querySelector('.ui-dialog-backdrop'),
      }
    },
    resolveTransformTarget(mobile, parts) {
      if (mobile) return parts.panel
      return parts.motion || parts.panel
    },
    sheetBackdropOpacityForDrag(panel, dy) {
      if (!panel) return 1
      const height = Math.max(panel.offsetHeight || 0, 240)
      const progress = Math.min(1, Math.max(0, dy) / height)
      return Math.max(0, 1 - progress)
    },
    clearLayerInlineMotion(el, { preserveMobilePanelTransform = false, preserveBackdrop = false } = {}) {
      const mobile = isMobileViewport()
      const { panel, motion, backdrop } = this.layerMotionParts(el)
      if (motion) {
        motion.style.removeProperty('transform')
        motion.style.removeProperty('transition')
      }
      if (panel) {
        if (!preserveMobilePanelTransform || !mobile) {
          panel.style.removeProperty('transform')
        }
        panel.style.removeProperty('transition')
        panel.style.removeProperty('opacity')
      }
      if (backdrop && !preserveBackdrop) {
        backdrop.style.removeProperty('opacity')
        backdrop.style.removeProperty('transition')
      }
    },
    waitLayerTransition(target, fallbackMs, done) {
      if (!target) {
        done()
        return
      }
      let finished = false
      const finish = () => {
        if (finished) return
        finished = true
        done()
      }
      target.addEventListener(
        'transitionend',
        (event) => {
          if (event.target === target) finish()
        },
        { once: true },
      )
      window.setTimeout(finish, fallbackMs)
    },
    animateLayerIn(el) {
      if (!el) {
        this.onOverlayAfterEnter()
        return
      }
      if (this.prefersReducedMotion()) {
        this.onOverlayAfterEnter()
        return
      }
      const parts = this.layerMotionParts(el)
      const { panel, motion, backdrop } = parts
      const mobile = isMobileViewport()
      const transformTarget = this.resolveTransformTarget(mobile, parts)
      const durationMs = mobile ? this.mobileSheetDurationMs() : 420
      const duration = `${durationMs / 1000}s`
      const easing = mobile ? this.mobileSheetEasing() : 'cubic-bezier(0.22, 1, 0.36, 1)'

      if (backdrop) backdrop.style.opacity = '0'
      if (mobile) {
        if (panel) {
          panel.style.opacity = '1'
          panel.style.transform = 'translate3d(0, 100%, 0)'
        }
        if (motion) motion.style.removeProperty('transform')
      } else {
        if (panel) panel.style.opacity = '0'
        if (motion) motion.style.transform = 'scale3d(0.96, 0.96, 1)'
      }
      void el.offsetHeight
      requestAnimationFrame(() => {
        if (backdrop) {
          backdrop.style.transition = `opacity ${duration} ${easing}`
          backdrop.style.opacity = '1'
        }
        if (!mobile && panel) {
          panel.style.transition = `opacity ${duration} ${easing}`
          panel.style.opacity = '1'
        }
        if (transformTarget) {
          transformTarget.style.transition = `transform ${duration} ${easing}`
          transformTarget.style.transform = mobile
            ? 'translate3d(0, 0, 0)'
            : 'scale3d(1, 1, 1)'
        }
        this.waitLayerTransition(transformTarget || backdrop, durationMs + 40, () => {
          this.onOverlayAfterEnter()
        })
      })
    },
    animateLayerOut(el, done) {
      if (!el || this.prefersReducedMotion()) {
        done()
        return
      }
      const mobile = isMobileViewport()
      const parts = this.layerMotionParts(el)
      const dragged =
        mobile && Boolean(parts.panel?.style.transform && parts.panel.style.transform !== 'none')
      this.clearLayerInlineMotion(el, {
        preserveMobilePanelTransform: mobile,
        preserveBackdrop: dragged,
      })
      const { panel, motion, backdrop } = parts
      const transformTarget = this.resolveTransformTarget(mobile, parts)
      const durationMs = mobile ? 320 : 380
      const duration = `${durationMs / 1000}s`
      const easing = mobile ? this.mobileSheetEasing() : 'cubic-bezier(0.4, 0, 0.2, 1)'
      void el.offsetHeight
      requestAnimationFrame(() => {
        if (backdrop) {
          backdrop.style.transition = `opacity ${duration} ${easing}`
          backdrop.style.opacity = '0'
        }
        if (mobile && panel) {
          panel.style.transition = `transform ${duration} ${easing}`
          panel.style.transform = 'translate3d(0, 100%, 0)'
        } else {
          if (panel) {
            panel.style.transition = `opacity ${duration} ${easing}`
            panel.style.opacity = '0'
          }
          if (motion) {
            motion.style.transition = `transform ${duration} ${easing}`
            motion.style.transform = 'scale3d(0.96, 0.96, 1)'
          }
        }
        this.waitLayerTransition(transformTarget || backdrop, durationMs + 40, done)
      })
    },
    dismissLayer() {
      if (!this.layerMounted || this.layerClosing) return
      this.clearFocusFallback()
      this.clearSheetDragListeners()
      this.layerClosing = true
      const el = this.$refs.layerRef
      this.animateLayerOut(el, () => {
        this.layerMounted = false
        this.layerClosing = false
        this.resetPanelMotionStyles()
        if (this.open) {
          this.$emit('update:open', false)
        }
        this.$emit('after-leave')
      })
    },
    resetPanelMotionStyles() {
      const layer = this.$refs.layerRef
      const panel = this.$refs.panelRef
      const motion = panel?.querySelector('.ui-dialog-motion')
      const backdrop = layer?.querySelector('.ui-dialog-backdrop')
      if (motion) {
        motion.style.removeProperty('transform')
        motion.style.removeProperty('transition')
      }
      if (!panel) return
      panel.style.removeProperty('transform')
      panel.style.removeProperty('transition')
      panel.style.removeProperty('opacity')
      if (backdrop) {
        backdrop.style.removeProperty('opacity')
        backdrop.style.removeProperty('transition')
      }
    },
    onOverlayAfterEnter() {
      this.scheduleInitialFocus()
    },
    clearFocusFallback() {
      if (this.focusFallbackTimer != null) {
        clearTimeout(this.focusFallbackTimer)
        this.focusFallbackTimer = null
      }
    },
    scheduleInitialFocus() {
      if (!this.open || !this.initialFocus) return
      this.clearFocusFallback()
      this.$nextTick(() => {
        const panel = this.$refs.panelRef
        const motion = panel?.querySelector('.ui-dialog-motion')
        const mobile = isMobileViewport()
        const motionTarget = mobile ? panel : (motion || panel)
        if (!motionTarget) {
          this.runInitialFocus()
          return
        }
        const onTransitionEnd = (event) => {
          if (event.target !== motionTarget) return
          motionTarget.removeEventListener('transitionend', onTransitionEnd)
          this.clearFocusFallback()
          this.runInitialFocus()
        }
        motionTarget.addEventListener('transitionend', onTransitionEnd)
        this.focusFallbackTimer = setTimeout(() => {
          motionTarget.removeEventListener('transitionend', onTransitionEnd)
          this.focusFallbackTimer = null
          this.runInitialFocus()
        }, 440)
      })
    },
    runInitialFocus() {
      if (!this.open || !this.initialFocus) return
      this.$nextTick(() => {
        this.focusInitialField()
      })
    },
    focusInitialField() {
      if (isMobileViewport()) return
      const panel = this.$refs.panelRef
      if (panel && focusFirstField(panel)) return
      panel?.focus?.()
    },
    close() {
      this.dismissLayer()
    },
    onBack() {
      this.$emit('back')
    },
    onBackdrop() {
      if (this.closeOnBackdrop) this.close()
    },
    onLayerKeydown(e) {
      if (this.closeOnEscape && e.key === 'Escape') {
        e.preventDefault()
        this.close()
      }
    },
    clearSheetDragListeners() {
      if (this.sheetDragCleanup) {
        this.sheetDragCleanup()
        this.sheetDragCleanup = null
      }
    },
    teardownSheetDrag(resetStyles = true) {
      this.clearSheetDragListeners()
      if (!resetStyles) return
      this.resetPanelMotionStyles()
    },
    isSheetDragBlockedTarget(target) {
      if (!(target instanceof Element)) return false
      return Boolean(
        target.closest(
          'button, a, input, textarea, select, label, [role="button"], [contenteditable="true"], [data-no-sheet-drag]',
        ),
      )
    },
    onSheetPointerDown(e) {
      if (!isMobileViewport() || e.button !== 0) return
      if (this.isSheetDragBlockedTarget(e.target)) return
      const layer = this.$refs.layerRef
      const panel = this.$refs.panelRef
      if (!layer || !panel) return
      e.preventDefault()
      this.teardownSheetDrag()
      const backdrop = layer.querySelector('.ui-dialog-backdrop')
      const startY = e.clientY
      const prevPanelTransition = panel.style.transition
      const prevBackdropTransition = backdrop?.style.transition || ''
      panel.style.transition = 'none'
      if (backdrop) backdrop.style.transition = 'none'
      const onMove = (ev) => {
        const dy = Math.max(0, ev.clientY - startY)
        panel.style.transform = `translate3d(0, ${dy}px, 0)`
        if (backdrop) {
          backdrop.style.opacity = String(this.sheetBackdropOpacityForDrag(panel, dy))
        }
      }
      const finishSheetDrag = (dy, dismiss) => {
        if (this.sheetDragCleanup) {
          this.sheetDragCleanup()
          this.sheetDragCleanup = null
        }
        if (dismiss) {
          panel.style.removeProperty('transition')
          if (backdrop) backdrop.style.removeProperty('transition')
          this.close()
          return
        }
        const duration = '0.28s'
        const easing = this.mobileSheetEasing()
        panel.style.transition = `transform ${duration} ${easing}`
        panel.style.transform = 'translate3d(0, 0, 0)'
        if (backdrop) {
          backdrop.style.transition = `opacity ${duration} ${easing}`
          backdrop.style.opacity = '1'
        }
        const onSnapEnd = (event) => {
          if (event.target !== panel && event.target !== backdrop) return
          panel.removeEventListener('transitionend', onSnapEnd)
          backdrop?.removeEventListener('transitionend', onSnapEnd)
          panel.style.transition = prevPanelTransition
          panel.style.removeProperty('transform')
          if (backdrop) {
            backdrop.style.transition = prevBackdropTransition
            backdrop.style.removeProperty('opacity')
          }
        }
        panel.addEventListener('transitionend', onSnapEnd)
        backdrop?.addEventListener('transitionend', onSnapEnd)
      }
      const onUp = (ev) => {
        const dy = Math.max(0, ev.clientY - startY)
        finishSheetDrag(dy, dy >= 72)
      }
      const onCancel = () => {
        finishSheetDrag(0, false)
      }
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', onUp)
      window.addEventListener('pointercancel', onCancel)
      this.sheetDragCleanup = () => {
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup', onUp)
        window.removeEventListener('pointercancel', onCancel)
      }
    },
  },
}
</script>
