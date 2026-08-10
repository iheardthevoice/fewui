<template>
  <!-- Defer Teleport until mount: empty SSR teleport markers mismatch and can wipe #app. -->
  <Teleport
    v-if="portalReady"
    to="body"
  >
    <Transition
      :name="transitionName"
      appear
      @after-enter="onOverlayAfterEnter"
      @after-leave="onOverlayAfterLeave"
    >
      <div
        v-if="open"
        ref="layerRef"
        :class="rootLayerClasses"
        tabindex="-1"
        role="presentation"
        @keydown="onLayerKeydown"
      >
        <div
          v-if="overlay"
          class="ui-sheet-backdrop absolute inset-0 bg-black/50"
          aria-hidden="true"
          @click="onBackdrop"
        />
        <div
          ref="panelRef"
          :class="panelClasses"
          role="dialog"
          :aria-modal="overlay ? 'true' : 'false'"
          tabindex="-1"
          :aria-labelledby="ariaLabelledby"
          :aria-describedby="ariaDescribedby"
          :aria-label="ariaLabelAttr"
          v-bind="passthroughAttrs"
          @click.stop
        >
          <div
            v-if="hasHeaderBlock"
            class="ui-card-header shrink-0"
          >
            <slot name="header">
              <div
                v-if="hasDefaultHeader"
                class="ui-sheet-header"
                :class="{ 'ui-sheet-header--no-icon': !icon }"
              >
                <span
                  v-if="icon"
                  class="ui-sheet-header__icon"
                >
                  <ui-icon
                    :name="icon"
                    :type="iconType"
                    size="sm"
                  />
                </span>
                <h3
                  v-if="title"
                  :id="titleId"
                  class="ui-sheet-header__title ui-heading-3"
                >
                  {{ title }}
                </h3>
                <div
                  v-if="$slots.append || $slots.actions"
                  class="ui-sheet-header__actions"
                >
                  <slot name="append" />
                  <slot name="actions" />
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
                  @click="close"
                />
                <p
                  v-if="description"
                  :id="descriptionId"
                  class="ui-sheet-header__description ui-text-default"
                >
                  {{ description }}
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
              'ui-card-body--flush': bodyPadding === 'none',
              'ui-card-body--flex': bodyLayout === 'flex',
            }"
          >
            <slot />
          </div>

          <div
            v-if="$slots.footer"
            class="ui-card-footer"
            :class="{ 'ui-sheet-footer--borderless': !footerBorder }"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import Divider from './Divider.vue'
import { cn } from '../utils/cn.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { pickPassthroughAttrs } from '../utils/pick-passthrough-attrs.js'
import { focusFirstField } from '../utils/focus-first-field.js'

const nextSheetId = createUiIdFactory('ui-sheet')

const SIDES = ['left', 'right']
const SIZES = ['sm', 'md', 'lg', 'xl']
const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

const SIZE_CLASS = {
  sm: 'ui-sheet-panel--sm',
  md: 'ui-sheet-panel--md',
  lg: 'ui-sheet-panel--lg',
  xl: 'ui-sheet-panel--xl',
}

export default {
  name: 'Sheet',
  components: { Divider },
  inheritAttrs: false,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: false,
    },
    /** `left` | `right` */
    side: {
      type: String,
      default: 'right',
      validator: (v) => SIDES.includes(v),
    },
    /**
     * `true` — karartmalı tam ekran katman (modal).
     * `false` — arka plan etkileşime açık kalır; değişiklikler anında görünür.
     */
    overlay: {
      type: Boolean,
      default: true,
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
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
    showClose: {
      type: Boolean,
      default: true,
    },
    closeLabel: {
      type: String,
      default: null,
    },
    bodyPadding: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'none',
    },
    bodyLayout: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'flex',
    },
    headerDivider: {
      type: Boolean,
      default: false,
    },
    /**
     * Footer üst kenar çizgisi — `false` ile border-t kalkar.
     */
    footerBorder: {
      type: Boolean,
      default: true,
    },
    /**
     * Dar viewport’ta (`max-width: 767px`) panel tam genişlik.
     */
    fullOnMobile: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    initialFocus: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:open', 'after-leave'],
  data() {
    const id = nextSheetId()
    return {
      titleId: `ui-sheet-title-${id}`,
      descriptionId: `ui-sheet-desc-${id}`,
      portalReady: false,
      focusFallbackTimer: null,
    }
  },
  watch: {
    open: {
      handler(isOpen) {
        if (isOpen) {
          this.scheduleInitialFocus()
        } else {
          this.clearFocusFallback()
        }
      },
      flush: 'post',
    },
  },
  mounted() {
    this.portalReady = true
  },
  beforeUnmount() {
    this.clearFocusFallback()
  },
  computed: {
    hasDefaultHeader() {
      return !!(
        this.icon ||
        (this.title != null && this.title !== '') ||
        (this.description != null && this.description !== '') ||
        this.$slots.actions ||
        this.$slots.append ||
        this.showClose
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
    sizeClass() {
      return SIZE_CLASS[this.size] || SIZE_CLASS.md
    },
    transitionName() {
      return this.side === 'left' ? 'ui-overlay-sheet-left' : 'ui-overlay-sheet-right'
    },
    panelClasses() {
      return cn(
        'ui-surface ui-card ui-sheet-panel relative z-[1] flex h-dvh max-h-dvh shrink-0 flex-col overflow-hidden',
        this.sizeClass,
        this.side === 'left' ? 'ui-sheet-panel--left' : 'ui-sheet-panel--right',
        this.bodyLayout === 'flex' ? 'ui-sheet-panel--body-flex' : '',
        this.fullOnMobile ? 'ui-sheet-panel--full-mobile' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      return pickPassthroughAttrs(this.$attrs, ['class'])
    },
    ariaLabelledby() {
      if (this.title != null && this.title !== '') return this.titleId
      return undefined
    },
    ariaDescribedby() {
      if (this.description != null && this.description !== '') return this.descriptionId
      return undefined
    },
    ariaLabelAttr() {
      if (this.ariaLabelledby) return undefined
      if (this.ariaLabel != null && this.ariaLabel !== '') return this.ariaLabel
      return undefined
    },
    resolvedCloseLabel() {
      if (this.closeLabel != null && this.closeLabel !== '') return this.closeLabel
      return resolveUiText(this, 'ui.dialog.close', 'Close')
    },
    rootLayerClasses() {
      return cn(
        'ui-sheet-root fixed inset-0 flex outline-none',
        this.side === 'left' ? 'justify-start' : 'justify-end',
        !this.overlay && 'ui-sheet-root--no-overlay',
      )
    },
  },
  methods: {
    close() {
      this.$emit('update:open', false)
    },
    onBackdrop() {
      if (this.overlay && this.closeOnBackdrop) this.close()
    },
    onLayerKeydown(e) {
      if (e.key === 'Escape' && this.closeOnEscape) {
        e.stopPropagation()
        this.close()
      }
    },
    onOverlayAfterEnter() {
      this.scheduleInitialFocus()
    },
    onOverlayAfterLeave() {
      this.$emit('after-leave')
    },
    clearFocusFallback() {
      if (this.focusFallbackTimer != null) {
        clearTimeout(this.focusFallbackTimer)
        this.focusFallbackTimer = null
      }
    },
    scheduleInitialFocus() {
      this.clearFocusFallback()
      if (!this.initialFocus || !this.open) return
      this.$nextTick(() => {
        const panel = this.$refs.panelRef
        if (!panel) return
        const focused = focusFirstField(panel)
        if (!focused) {
          this.focusFallbackTimer = setTimeout(() => {
            this.focusFallbackTimer = null
            panel.focus?.()
          }, 50)
        }
      })
    },
  },
}
</script>
