<template>
  <!-- Defer Teleport until mount: empty SSR teleport markers mismatch and can wipe #app. -->
  <Teleport
    v-if="portalReady"
    :to="portalTarget"
  >
    <div
      v-if="layerMounted"
      ref="layerRef"
      :class="rootLayerClasses"
      :style="rootLayerStyle"
      tabindex="-1"
      role="presentation"
      @keydown="onLayerKeydown"
    >
        <div
          class="ui-dialog-backdrop absolute inset-0 bg-black/70"
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
                  'ui-dialog-header--with-back': withBack,
                  'ui-dialog-header--with-close': showHeaderClose,
                }"
              >
                <ui-button
                  v-if="showHeaderClose"
                  type="button"
                  variant="solid"
                  color="secondary"
                  size="md"
                  cubed
                  prefix-icon="xmark"
                  class="ui-dialog-header__close"
                  :aria-label="resolvedCloseLabel"
                  @click="requestClose"
                />
                <ui-button
                  v-if="withBack"
                  type="button"
                  variant="solid"
                  color="secondary"
                  size="md"
                  prefix-icon="chevron-left"
                  class="ui-dialog-header__back ui-icon--dir"
                  @click="onBack"
                >
                  {{ resolvedBackLabel }}
                </ui-button>
                <div class="ui-dialog-header__lead">
                  <h3
                    v-if="hasTitle"
                    :id="titleId"
                    class="ui-dialog-header__title ui-heading-2"
                  >
                    <slot name="title">{{ title }}</slot>
                  </h3>
                </div>
                <div
                  v-if="$slots.append || $slots.actions"
                  class="ui-dialog-header__actions"
                >
                  <slot name="append" />
                  <slot name="actions" />
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
            ref="footerRef"
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
import { uiFeedback } from '../utils/feedback.js'
import Divider from './Divider.vue'
import { cn } from '../utils/cn.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { pickPassthroughAttrs } from '../utils/pick-passthrough-attrs.js'
import { focusFirstField } from '../utils/focus-first-field.js'
import { trapTabKey, captureReturnFocus, restoreFocus } from '../utils/focus-trap.js'
import { resolveThemeDefault, resolveThemeIconType } from '../theme/resolve-theme-default.js'
import { lockBodyScroll, unlockBodyScroll } from '../utils/scroll-lock.js'
import { isMobileViewport } from '../utils/viewport.js'
import { readMotionDuration, readMotionEasing } from '../utils/motion-token.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'
import { uiPortalMixin } from '../theme/ui-portal.js'
import { OVERLAY_BASE_Z, pushOverlay, releaseOverlay, isTopModalOverlay } from '../theme/overlay-stack.js'
import { shouldContainFocus } from '../utils/focus-guard.js'
import { UI_FORM_DIRTY_KEY } from '../utils/form-dirty.js'
import { UI_LOADING_GATE_KEY, createLoadingGate } from '../utils/loading-gate.js'
import { onToastPush } from '../toast-queue.js'
import { requestConfirm, hasConfirmHost } from '../confirm-state.js'

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

/** Enter ile gönderimi tetikleyen tek satırlı `<input>` tipleri. */
const SUBMIT_INPUT_TYPES = ['', 'text', 'email', 'number', 'tel', 'url', 'password', 'search']

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

/** Alt sayfa bu kadar aşağı sürüklenip bırakılırsa kapanır (px). */
const SHEET_DISMISS_PX = 72

/** Açılışta içerik yüklemesini bekleme üst sınırı (ms). */
const OPEN_HOLD_MS = 300

export default {
  name: 'Dialog',
  mixins: [uiPortalMixin, uiDefaultsMixin],
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
    /**
     * @deprecated Başlıkta süs ikonu çizilmez (DESIGN.md § Ekran anatomisi — başlık). Prop geriye uyum için kalır.
     */
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
    /**
     * Geri düğmesi metni — önceki ekranın adı verilir (iOS: "‹ Profil Tercihleri"); boşsa `ui.dialog.back`.
     * Geri düğmesi olan başlıkta üst satır: geri solda, `#actions` (ör. Kaydet) sağda; başlık altta.
     */
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
     * Varsayılan açık: yalnızca eylem butonları görünür.
     */
    footerTransparent: {
      type: Boolean,
      default: true,
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
    /**
     * Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer).
     * `false`: alan seçilmez, odak yalnız panele taşınır (klavye / Escape dialoga gider).
     */
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
    /**
     * Kaydedilmemiş değişiklik koruması: form kirliyken Escape / arka plan / X / sheet sürükleme
     * kapatmadan önce onay ister. Verilmezse tema varsayılanı `dialogGuardUnsaved` (false).
     * Programatik kapanış (`open=false`) hiçbir zaman sormaz.
     */
    guardUnsaved: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Kirli durumu elle belirler; verilmezse içerideki fewui form kontrollerinin
     * kullanıcı değişiklikleri izlenir.
     */
    dirty: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Tek satırlı metin alanında Enter (ve her yerde Cmd/Ctrl+Enter) footer'daki birincil
     * eylemi tetikler: `data-ui-dialog-primary` işaretli ilk etkin düğme, yoksa son etkin
     * solid primary `ui-button`. Verilmezse tema varsayılanı `dialogSubmitOnEnter` (false).
     */
    submitOnEnter: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Açılışta içerideki yüklemeleri (`ui-skeleton`) en fazla bu kadar (ms) bekle: karartma hemen gelir,
     * panel içerik hazır olunca kayar — boş açılıp sonra dolma / büyüme olmaz. `0` beklemez.
     */
    openHold: {
      type: Number,
      default: OPEN_HOLD_MS,
    },
  },
  emits: ['update:open', 'after-leave', 'back'],
  provide() {
    // İç içe dialogda içteki kontroller yalnız en yakın (içteki) dialogu işaretler.
    // Yükleme kapısı: içteki `ui-skeleton` beklemedeyken panel açılışı kısa süre tutulur.
    if (!this.loadingGate) this.loadingGate = createLoadingGate()
    return {
      [UI_FORM_DIRTY_KEY]: () => this.markDirty(),
      [UI_LOADING_GATE_KEY]: this.loadingGate,
    }
  },
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
      layerMotionActive: false,
      /** Şeffaf footer gerçek yüksekliği (px) — gövde alt padding */
      footerClearancePx: null,
      /** Katman kaydından gelen z-index */
      rootZIndex: null,
      /** Kullanıcı içerideki bir form kontrolünü değiştirdi. */
      detectedDirty: false,
      /** Kaydedilmemiş değişiklik onayı ekranda. */
      unsavedPromptOpen: false,
    }
  },
  watch: {
    open: {
      immediate: true,
      handler(isOpen) {
        this.detectedDirty = false
        if (isOpen) {
          if (this.layerMounted || this.layerClosing) return
          this.returnFocusEl = captureReturnFocus()
          this.rootZIndex = this.resolveRootZIndex()
          this.layerMounted = true
          lockBodyScroll()
          this.bindFocusGuard()
          this.$nextTick(() => {
            this.resetPanelMotionStyles()
            this.resetBodyScroll()
            this.syncFooterClearance()
            this.animateLayerIn(this.$refs.layerRef)
          })
        } else if (this.layerMounted && !this.layerClosing) {
          this.dismissLayer()
        }
      },
    },
    footerTransparent() {
      this.$nextTick(() => {
        this.bindFooterClearanceObserver()
      })
    },
    hasFooterSlot(hasFooter) {
      if (!hasFooter || !this.open) return
      this.$nextTick(() => {
        this.bindFooterClearanceObserver()
      })
    },
  },
  mounted() {
    this.portalReady = true
  },
  beforeUnmount() {
    this.clearFocusFallback()
    this.clearSheetDragListeners()
    this.unbindFooterClearanceObserver()
    this.unbindFocusGuard()
    if (this.layerMounted) {
      unlockBodyScroll()
    }
    this.releaseLayer()
    this.layerMounted = false
    this.layerClosing = false
    this.layerMotionActive = false
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
        this.hasTitle ||
        this.hasDescription ||
        this.$slots.actions ||
        this.$slots.append ||
        this.showClose ||
        this.withBack
      )
    },
    /**
     * Geri düğmesi varken X çizilmez (iOS gezinme çubuğu: solda geri, sağda birincil aksiyon).
     * Kapatma Esc / dış tıklama / sheet sürükleme ile sürer; kök ekrana dönünce X geri gelir.
     */
    showHeaderClose() {
      return this.showClose && !this.withBack
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader
    },
    hasFooterSlot() {
      return !!this.$slots.footer
    },
    /**
     * Şeffaf footer yalnızca gövde varken anlamlıdır (kaydırılabilir içerik altına biner).
     * Gövdesiz uyarı / onay diyaloglarında absolute footer başlık metninin üstüne biner.
     */
    usesFooterTransparentLayout() {
      return this.footerTransparent && this.hasFooterSlot && !!this.$slots.default
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
      return resolveThemeIconType(this.uiDefaults, this.iconType)
    },
    resolvedMaxWidth() {
      return resolveThemeDefault(this.uiDefaults, this.maxWidth, 'dialogMaxWidth')
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
        this.usesFooterTransparentLayout ? 'ui-dialog-panel--footer-transparent' : '',
        this.$attrs.class,
      )
    },
    panelStyle() {
      const style = {}
      if (this.panelMaxHeight) {
        /**
         * Inline maxHeight CSS’teki native klavye tavanını ezmesin.
         * `--ui-dialog-max-height-cap` yoksa (web) yalnızca prop değeri kullanılır.
         */
        style.maxHeight = `min(${this.panelMaxHeight}, var(--ui-dialog-max-height-cap, ${this.panelMaxHeight}))`
      }
      if (this.usesFooterTransparentLayout && this.footerClearancePx != null) {
        style['--ui-dialog-footer-clearance'] = `${this.footerClearancePx}px`
      }
      return Object.keys(style).length ? style : undefined
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
    resolvedGuardUnsaved() {
      return resolveThemeDefault(this.uiDefaults, this.guardUnsaved, 'dialogGuardUnsaved') === true
    },
    resolvedSubmitOnEnter() {
      return resolveThemeDefault(this.uiDefaults, this.submitOnEnter, 'dialogSubmitOnEnter') === true
    },
    isDirty() {
      return this.dirty !== undefined ? this.dirty : this.detectedDirty
    },
    rootLayerClasses() {
      return cn(
        'ui-dialog-root fixed inset-0 flex outline-none',
        this.stackLayer === 'confirm' && 'ui-dialog-root--confirm',
        this.layerMotionActive && 'ui-dialog-root--motion',
        this.layerClosing && 'ui-dialog-root--leaving',
      )
    },
    rootLayerStyle() {
      if (this.rootZIndex == null) return undefined
      return { zIndex: String(this.rootZIndex) }
    },
  },
  methods: {
    bindFocusGuard() {
      if (this.focusGuardBound || typeof document === 'undefined') return
      this.focusGuardBound = true
      document.addEventListener('focusin', this.onDocumentFocusIn)
      // Açık kalan dialog kaydedince ("… kaydedildi" başarı toast'ı) artık kirli sayılmaz.
      this.stopToastWatch = onToastPush((payload) => {
        if (payload?.color === 'success' && isTopModalOverlay(this)) this.markPristine()
      })
    },
    unbindFocusGuard() {
      this.stopToastWatch?.()
      this.stopToastWatch = null
      if (!this.focusGuardBound) return
      this.focusGuardBound = false
      document.removeEventListener('focusin', this.onDocumentFocusIn)
    },
    /** Odak arkadaki sayfaya kaçarsa panele geri çağırır (bkz. `utils/focus-guard.js`). */
    onDocumentFocusIn(e) {
      if (this.layerClosing || !isTopModalOverlay(this)) return
      if (!shouldContainFocus(e.target, this.$refs.layerRef)) return
      this.$refs.panelRef?.focus?.({ preventScroll: true })
    },
    releaseLayer() {
      if (this.rootZIndex == null) return
      releaseOverlay(this)
      this.rootZIndex = null
    },
    resolveRootZIndex() {
      // Onay katmanı açık modalların üstünde başlar; kayda gerçek değer yazılır ki
      // onun içinden açılan dialog (ör. düzenleme) altında kalmasın.
      const minZ = this.stackLayer === 'confirm' ? OVERLAY_BASE_Z.confirm : 0
      return pushOverlay(this, 'modal', () => {}, minZ)
    },
    prefersReducedMotion() {
      if (typeof window === 'undefined') return false
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    },
    mobileSheetEasing() {
      return readMotionEasing('--ui-dialog-sheet-easing', 'cubic-bezier(0.32, 0.72, 0, 1)')
    },
    /**
     * Süre / eğri tema token’larından (`--ui-dialog-*`, mobil `--ui-dialog-sheet-*`);
     * yoksa aşağıdaki varsayılanlar.
     */
    layerMotionTimings() {
      const mobile = isMobileViewport()
      if (mobile) {
        const easing = this.mobileSheetEasing()
        return {
          enterMs: readMotionDuration('--ui-dialog-sheet-enter-duration', 260),
          leaveMs: readMotionDuration('--ui-dialog-sheet-leave-duration', 200),
          snapMs: readMotionDuration('--ui-dialog-sheet-snap-duration', 220),
          easing,
          leaveEasing: readMotionEasing('--ui-dialog-sheet-leave-easing', easing),
        }
      }
      return {
        enterMs: readMotionDuration('--ui-dialog-enter-duration', 220),
        leaveMs: readMotionDuration('--ui-dialog-leave-duration', 150),
        snapMs: 180,
        easing: readMotionEasing('--ui-dialog-easing', 'cubic-bezier(0.16, 1, 0.3, 1)'),
        leaveEasing: readMotionEasing('--ui-dialog-leave-easing', 'cubic-bezier(0.4, 0, 0.2, 1)'),
      }
    },
    /** Cam yüzeyde kayma yok, yalnız hafif ölçek (blur her karede yeniden hesaplanır). */
    desktopEnterTransform(glass = false) {
      return glass
        ? 'translate3d(0, 0, 0) scale3d(0.97, 0.97, 1)'
        : 'translate3d(0, 12px, 0) scale3d(0.96, 0.96, 1)'
    },
    desktopLeaveTransform(glass = false) {
      return glass
        ? 'translate3d(0, 0, 0) scale3d(0.98, 0.98, 1)'
        : 'translate3d(0, 8px, 0) scale3d(0.97, 0.97, 1)'
    },
    desktopRestTransform() {
      return 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
    },
    /**
     * Blur panelin kendisinde (`.ui-surface`); hareket de aynı öğede olduğu için blur
     * geçiş boyunca görünür kalır. Atada opacity verilmez (backdrop root olur).
     */
    surfaceBackdropBlurPx() {
      if (typeof window === 'undefined' || typeof document === 'undefined') return 0
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue('--ui-surface-backdrop-blur')
        .trim()
      const n = Number.parseFloat(raw)
      return Number.isFinite(n) ? n : 0
    },
    /**
     * Desktop cam: kaymasız, daha küçük ölçek.
     * Mobil sheet (alttan kayma) her zaman açık — blur animasyon boyunca sabit.
     */
    preferGlassSafeOverlayMotion() {
      if (isMobileViewport()) return false
      return this.surfaceBackdropBlurPx() > 0
    },
    runOnNextFrames(fn) {
      requestAnimationFrame(() => {
        requestAnimationFrame(fn)
      })
    },
    layerMotionParts(el) {
      return {
        panel: el.querySelector('.ui-dialog-panel'),
        motion: el.querySelector('.ui-dialog-motion'),
        backdrop: el.querySelector('.ui-dialog-backdrop'),
      }
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
      const onEnd = (event) => {
        if (event.target !== target) return
        const prop = event.propertyName || ''
        if (prop && prop !== 'transform' && prop !== 'opacity') return
        target.removeEventListener('transitionend', onEnd)
        finish()
      }
      target.addEventListener('transitionend', onEnd)
      window.setTimeout(() => {
        target.removeEventListener('transitionend', onEnd)
        finish()
      }, fallbackMs)
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
      const glassSafe = this.preferGlassSafeOverlayMotion()
      const { enterMs, easing } = this.layerMotionTimings()
      const duration = `${enterMs / 1000}s`
      const backdropMs = Math.round(enterMs * 0.72)
      const backdropDuration = `${backdropMs / 1000}s`
      this.layerMotionActive = true
      if (motion) {
        motion.style.removeProperty('transform')
        motion.style.removeProperty('transition')
      }
      if (backdrop) {
        backdrop.style.transition = 'none'
        backdrop.style.opacity = '0'
      }
      if (panel) {
        panel.style.transition = 'none'
        if (mobile) {
          panel.style.opacity = '1'
          panel.style.transform = 'translate3d(0, 100%, 0)'
        } else {
          panel.style.opacity = '0'
          panel.style.transform = this.desktopEnterTransform(glassSafe)
        }
      }
      void el.offsetHeight
      // Karartma hemen gelir (dokunuşa anında yanıt); panel içerideki yüklemeler bitince kayar.
      this.runOnNextFrames(() => {
        if (!this.layerMounted || this.layerClosing) return
        if (backdrop) {
          backdrop.style.transition = `opacity ${backdropDuration} ${easing}`
          backdrop.style.opacity = '1'
        }
      })
      const gate = this.loadingGate
      const hold = gate && this.openHold > 0 ? gate.whenSettled(this.openHold) : Promise.resolve()
      void hold.then(() => this.runOnNextFrames(() => {
        if (!this.layerMounted || this.layerClosing) return
        if (panel) {
          if (mobile) {
            panel.style.transition = `transform ${duration} ${easing}`
            panel.style.opacity = '1'
            panel.style.transform = 'translate3d(0, 0, 0)'
          } else {
            panel.style.transition = `opacity ${duration} ${easing}, transform ${duration} ${easing}`
            panel.style.opacity = '1'
            panel.style.transform = this.desktopRestTransform()
          }
        }
        this.waitLayerTransition(panel || backdrop, enterMs + 80, () => {
          if (this.layerClosing) return
          this.finishLayerMotion(el)
          this.onOverlayAfterEnter()
        })
      }))
    },
    /**
     * Kapanışta klavye inset / max-height / footer padding o anki değerde donsun.
     * Aksi halde `--ui-keyboard-inset` veya safe-area değişince footer aşağı kayıp öyle kapanır.
     */
    freezeSheetGeometry(panel) {
      if (!panel) return
      const cs = getComputedStyle(panel)
      panel.style.marginBottom = cs.marginBottom
      panel.style.maxHeight = cs.maxHeight
      const footer = panel.querySelector('.ui-card-footer')
      if (footer) {
        footer.style.paddingBottom = getComputedStyle(footer).paddingBottom
      }
    },
    animateLayerOut(el, done) {
      const finish = () => {
        this.finishLayerMotion(el)
        done()
      }
      // Görünmez sayfada (arka plan sekmesi, uyuyan ekran) rAF çalışmaz; animasyon
      // hiç başlamaz ve katman açık kalır. Görülmeyen kapanışı canlandırmaya gerek yok.
      if (!el || this.prefersReducedMotion() || document.visibilityState === 'hidden') {
        finish()
        return
      }
      const mobile = isMobileViewport()
      const glassSafe = this.preferGlassSafeOverlayMotion()
      const parts = this.layerMotionParts(el)
      this.freezeSheetGeometry(parts.panel)
      const dragged =
        mobile &&
        Boolean(parts.panel?.style.transform && parts.panel.style.transform !== 'none')
      this.clearLayerInlineMotion(el, {
        preserveMobilePanelTransform: mobile,
        preserveBackdrop: dragged,
      })
      const { panel, motion, backdrop } = parts
      const { leaveMs, leaveEasing } = this.layerMotionTimings()
      const duration = `${leaveMs / 1000}s`
      const backdropDuration = `${Math.round(leaveMs * 0.85) / 1000}s`
      this.layerMotionActive = true
      if (motion) {
        motion.style.removeProperty('transform')
        motion.style.removeProperty('transition')
      }
      void el.offsetHeight
      this.runOnNextFrames(() => {
        if (backdrop) {
          backdrop.style.transition = `opacity ${backdropDuration} ${leaveEasing}`
          backdrop.style.opacity = '0'
        }
        if (mobile && panel) {
          panel.style.transition = `transform ${duration} ${leaveEasing}`
          panel.style.transform = 'translate3d(0, 100%, 0)'
        } else if (panel) {
          panel.style.transition = `opacity ${duration} ${leaveEasing}, transform ${duration} ${leaveEasing}`
          panel.style.opacity = '0'
          panel.style.transform = this.desktopLeaveTransform(glassSafe)
        }
        this.waitLayerTransition(panel || backdrop, leaveMs + 80, finish)
      })
    },
    finishLayerMotion(el) {
      this.layerMotionActive = false
      if (el) this.clearLayerInlineMotion(el)
    },
    dismissLayer() {
      if (!this.layerMounted || this.layerClosing) return
      this.clearFocusFallback()
      this.clearSheetDragListeners()
      this.unbindFooterClearanceObserver()
      this.layerClosing = true
      const el = this.$refs.layerRef
      this.animateLayerOut(el, () => {
        this.layerMounted = false
        this.layerClosing = false
        this.unbindFocusGuard()
        this.releaseLayer()
        unlockBodyScroll()
        this.resetPanelMotionStyles()
        if (this.open) {
          this.$emit('update:open', false)
        }
        this.$emit('after-leave')
        restoreFocus(this.returnFocusEl)
        this.returnFocusEl = null
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
      this.bindFooterClearanceObserver()
      this.scheduleInitialFocus()
    },
    resetBodyScroll() {
      const panel = this.$refs.panelRef
      const body = panel?.querySelector?.('.ui-card-body')
      if (body) body.scrollTop = 0
    },
    syncFooterClearance() {
      if (!this.usesFooterTransparentLayout || !this.open) {
        this.footerClearancePx = null
        return
      }
      const footer = this.$refs.footerRef
      if (!footer) {
        this.footerClearancePx = null
        return
      }
      const height = Math.ceil(footer.getBoundingClientRect().height)
      this.footerClearancePx = height > 0 ? height : null
    },
    bindFooterClearanceObserver() {
      this.unbindFooterClearanceObserver()
      if (!this.usesFooterTransparentLayout || !this.open) {
        this.footerClearancePx = null
        return
      }
      this.$nextTick(() => {
        const footer = this.$refs.footerRef
        if (!footer) {
          this.footerClearancePx = null
          return
        }
        this.syncFooterClearance()
        if (typeof ResizeObserver === 'undefined') return
        this._footerResizeObserver = new ResizeObserver(() => {
          this.syncFooterClearance()
        })
        this._footerResizeObserver.observe(footer)
      })
    },
    unbindFooterClearanceObserver() {
      this._footerResizeObserver?.disconnect?.()
      this._footerResizeObserver = null
    },
    clearFocusFallback() {
      if (this.focusFallbackTimer != null) {
        clearTimeout(this.focusFallbackTimer)
        this.focusFallbackTimer = null
      }
    },
    scheduleInitialFocus() {
      if (!this.open) return
      this.clearFocusFallback()
      this.$nextTick(() => {
        const panel = this.$refs.panelRef
        const motionTarget = panel
        if (!motionTarget) {
          this.runInitialFocus()
          return
        }
        const onTransitionEnd = (event) => {
          if (event.target !== motionTarget) return
          const prop = event.propertyName || ''
          if (prop && prop !== 'transform' && prop !== 'opacity') return
          motionTarget.removeEventListener('transitionend', onTransitionEnd)
          this.clearFocusFallback()
          this.runInitialFocus()
        }
        motionTarget.addEventListener('transitionend', onTransitionEnd)
        this.focusFallbackTimer = setTimeout(() => {
          motionTarget.removeEventListener('transitionend', onTransitionEnd)
          this.focusFallbackTimer = null
          this.runInitialFocus()
        }, this.layerMotionTimings().enterMs + 80)
      })
    },
    runInitialFocus() {
      if (!this.open) return
      this.$nextTick(() => {
        this.focusInitialField()
      })
    },
    focusInitialField() {
      const panel = this.$refs.panelRef
      if (!this.initialFocus) {
        // Odak arkada (ör. dialogu açan popover düğmesinde) kalmasın; panel klavye göndermez.
        if (panel && !panel.contains(document.activeElement)) panel.focus?.({ preventScroll: true })
        return
      }
      if (isMobileViewport()) return
      if (panel && focusFirstField(panel)) return
      panel?.focus?.()
    },
    /** Koşulsuz kapatır (programatik). Kullanıcı kaynaklı kapanış `requestClose` kullanır. */
    close() {
      this.dismissLayer()
    },
    markDirty() {
      if (this.layerMounted && !this.layerClosing) this.detectedDirty = true
    },
    /** Kirli işaretini sıfırlar (ör. kaydetmeden sonra dialog açık kalıyorsa). */
    markPristine() {
      this.detectedDirty = false
    },
    /** Kapanış onay gerektiriyor mu: koruma açık, form kirli ve onay katmanı kurulu. */
    shouldGuardClose() {
      return this.resolvedGuardUnsaved && this.isDirty && hasConfirmHost()
    },
    /** Kullanıcı kaynaklı kapanış (Escape, arka plan, X, sheet sürükleme). */
    async requestClose() {
      if (!this.shouldGuardClose()) {
        this.close()
        return
      }
      if (this.unsavedPromptOpen) return
      this.unsavedPromptOpen = true
      let discard = false
      try {
        discard = await requestConfirm({
          title: resolveUiText(this, 'ui.dialog.unsavedTitle', 'Unsaved changes'),
          description: resolveUiText(
            this,
            'ui.dialog.unsavedDescription',
            'If you close now, unsaved changes will be discarded.',
          ),
          confirmLabel: resolveUiText(this, 'ui.dialog.unsavedConfirm', 'Discard changes'),
          color: 'danger',
        })
      } finally {
        this.unsavedPromptOpen = false
      }
      if (discard && this.layerMounted) this.close()
    },
    /** Footer'daki birincil eylem düğmesi (bkz. `submitOnEnter`). */
    findPrimaryAction() {
      const footer = this.$refs.footerRef
      if (!footer) return null
      const enabled = (el) =>
        !el.disabled && el.getAttribute('aria-disabled') !== 'true' && el.getAttribute('data-loading') !== 'true'
      const marked = [...footer.querySelectorAll('[data-ui-dialog-primary]')].filter(enabled)
      if (marked.length) return marked[0]
      const solid = [...footer.querySelectorAll('.ui-button[data-variant="solid"][data-color="primary"]')].filter(enabled)
      return solid.length ? solid[solid.length - 1] : null
    },
    isSubmitKeyTarget(target) {
      if (!(target instanceof Element)) return false
      if (target.tagName !== 'INPUT') return false
      if (!SUBMIT_INPUT_TYPES.includes((target.getAttribute('type') || '').toLowerCase())) return false
      // Yerel <form> kendi gönderimini yapar; çift gönderim olmasın.
      if (target.form) return false
      if (target.readOnly && target.getAttribute('role') !== 'combobox') return false
      // Alanın sahip olduğu açık liste / popover (select, combobox, tarih seçici) Enter'ı kullanır.
      if (target.closest('[aria-expanded="true"]')) return false
      if (target.closest('[role="listbox"], [role="menu"], [role="grid"], .ui-popover-panel')) return false
      return true
    },
    /** @returns {boolean} tuş tüketildi */
    handleSubmitKey(e) {
      if (!this.resolvedSubmitOnEnter || e.key !== 'Enter') return false
      if (e.defaultPrevented || e.isComposing || e.keyCode === 229 || e.repeat) return false
      if (e.altKey || e.shiftKey) return false
      const panel = this.$refs.panelRef
      if (!panel || !(e.target instanceof Node) || !panel.contains(e.target)) return false
      const modifier = e.metaKey || e.ctrlKey
      if (!modifier && !this.isSubmitKeyTarget(e.target)) return false
      const action = this.findPrimaryAction()
      if (!action) return false
      e.preventDefault()
      action.click()
      return true
    },
    onBack() {
      this.$emit('back')
    },
    onBackdrop() {
      if (this.closeOnBackdrop) this.requestClose()
    },
    onLayerKeydown(e) {
      if (this.closeOnEscape && e.key === 'Escape') {
        // İçteki açık katman (popover, select, lightbox) tuşu tüketti; aynı basışta dialog kapanmaz.
        if (e.defaultPrevented) return
        e.preventDefault()
        this.requestClose()
        return
      }
      if (this.handleSubmitKey(e)) return
      trapTabKey(e, this.$refs.panelRef)
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
      let pastDismiss = false
      const onMove = (ev) => {
        const dy = Math.max(0, ev.clientY - startY)
        // Bırakınca kapanacağı eşik geçildiğinde (ve geri dönüldüğünde) hafif dokunsal işaret.
        if ((dy >= SHEET_DISMISS_PX) !== pastDismiss) {
          pastDismiss = !pastDismiss
          uiFeedback('impact-light')
        }
        panel.style.transform = `translate3d(0, ${dy}px, 0)`
        if (backdrop) {
          backdrop.style.opacity = String(this.sheetBackdropOpacityForDrag(panel, dy))
        }
      }
      const finishSheetDrag = (dy, wantsDismiss) => {
        let dismiss = wantsDismiss
        if (this.sheetDragCleanup) {
          this.sheetDragCleanup()
          this.sheetDragCleanup = null
        }
        if (dismiss && this.shouldGuardClose()) {
          // Kirli form: sheet yerine döner, kapanış onaydan sonra olur.
          dismiss = false
          this.requestClose()
        }
        if (dismiss) {
          panel.style.removeProperty('transition')
          if (backdrop) backdrop.style.removeProperty('transition')
          this.close()
          return
        }
        const duration = `${this.layerMotionTimings().snapMs / 1000}s`
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
        finishSheetDrag(dy, dy >= SHEET_DISMISS_PX)
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
