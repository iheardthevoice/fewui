<template>
  <Teleport
    to="body"
    :disabled="!overlay"
  >
    <Transition name="ui-intro-shell">
      <div
        v-if="isVisible"
        ref="root"
        :class="rootClass"
        role="dialog"
        :aria-modal="overlay ? 'true' : undefined"
        :aria-label="resolvedAriaLabel"
        :aria-roledescription="resolvedCarouselRole"
        tabindex="-1"
        v-bind="passthroughAttrs"
        @keydown="onRootKeydown"
      >
        <div class="ui-intro__header">
          <slot name="header">
            <ui-button
              v-if="showSkip"
              type="button"
              variant="link"
              color="secondary"
              @click="onSkip"
            >
              {{ resolvedSkipLabel }}
            </ui-button>
          </slot>
        </div>

        <div
          ref="viewport"
          class="ui-intro__viewport"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
          @touchstart.passive="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          @touchcancel="onTouchEnd"
        >
          <div
            class="ui-intro__track"
            :class="{ 'ui-intro__track--dragging': dragging }"
            :style="trackStyle"
          >
            <div
              v-for="(step, index) in normalizedSteps"
              :key="step.key"
              class="ui-intro__slide"
              :aria-hidden="index === activeIndex ? undefined : 'true'"
            >
              <slot
                :step="step"
                :index="index"
                :active="index === activeIndex"
              >
                <span
                  v-if="step.icon"
                  class="ui-intro__icon"
                >
                  <ui-icon
                    :name="step.icon"
                    :type="step.iconType"
                    size="xl"
                  />
                </span>
                <h2
                  v-if="step.title"
                  class="ui-intro__title"
                >
                  {{ step.title }}
                </h2>
                <p
                  v-if="step.description"
                  class="ui-intro__description"
                >
                  {{ step.description }}
                </p>
              </slot>
            </div>
          </div>
        </div>

        <div class="ui-intro__footer">
          <slot
            name="footer"
            :index="activeIndex"
            :is-last="isLastStep"
            :go-next="goNext"
            :go-prev="goPrev"
            :go-to="goTo"
          >
            <div
              v-if="normalizedSteps.length > 1"
              class="ui-intro__dots"
              role="tablist"
              :aria-label="resolvedAriaLabel"
            >
              <button
                v-for="(step, index) in normalizedSteps"
                :key="step.key"
                type="button"
                class="ui-intro__dot"
                :class="{ 'ui-intro__dot--active': index === activeIndex }"
                role="tab"
                :aria-selected="index === activeIndex"
                :aria-label="step.ariaLabel || step.title || String(index + 1)"
                @click="goTo(index)"
              />
            </div>
            <ui-button
              type="button"
              color="primary"
              rounded
              fulled
              @click="goNext"
            >
              {{ primaryLabel }}
            </ui-button>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { cn } from '../utils/cn.js'
import { pickPassthroughAttrs } from '../utils/pick-passthrough-attrs.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { resolveThemeIconType } from '../theme/resolve-theme-default.js'

const SWIPE_MIN_PX = 56
const SWIPE_AXIS_RATIO = 1.15
const RUBBER = 0.28

export default {
  name: 'Intro',
  inheritAttrs: false,
  props: {
    /** Overlay iken görünürlük; `overlay` kapalıysa yok sayılır. */
    open: {
      type: Boolean,
      default: true,
    },
    /** Aktif slayt (0 tabanlı). */
    modelValue: {
      type: Number,
      default: 0,
    },
    /**
     * `{ key, icon, iconType, title, description, ariaLabel }`
     */
    steps: {
      type: Array,
      default: () => [],
    },
    /** Tam ekran katman (`Teleport` + `role=dialog`). */
    overlay: {
      type: Boolean,
      default: true,
    },
    showSkip: {
      type: Boolean,
      default: true,
    },
    skipLabel: {
      type: String,
      default: '',
    },
    nextLabel: {
      type: String,
      default: '',
    },
    finishLabel: {
      type: String,
      default: '',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:open', 'update:modelValue', 'skip', 'finish', 'next'],
  data() {
    return {
      dragging: false,
      dragOffset: 0,
      pointerId: null,
      startX: 0,
      startY: 0,
      startAt: 0,
      lockedAxis: null,
    }
  },
  computed: {
    isVisible() {
      return this.overlay ? this.open : true
    },
    normalizedSteps() {
      const raw = Array.isArray(this.steps) ? this.steps : []
      return raw.map((step, index) => ({
        key: step?.key ?? `intro-${index}`,
        icon: step?.icon ?? '',
        iconType: step?.iconType ?? resolveThemeIconType(undefined),
        title: step?.title ?? '',
        description: step?.description ?? '',
        ariaLabel: step?.ariaLabel ?? '',
      }))
    },
    lastIndex() {
      return Math.max(0, this.normalizedSteps.length - 1)
    },
    activeIndex() {
      if (!this.normalizedSteps.length) return 0
      return Math.min(this.lastIndex, Math.max(0, Number(this.modelValue) || 0))
    },
    isLastStep() {
      return this.activeIndex >= this.lastIndex
    },
    resolvedSkipLabel() {
      return this.skipLabel || resolveUiText(this, 'ui.intro.skip', 'Skip')
    },
    resolvedNextLabel() {
      return this.nextLabel || resolveUiText(this, 'ui.intro.next', 'Next')
    },
    resolvedFinishLabel() {
      return this.finishLabel || resolveUiText(this, 'ui.intro.finish', 'Get started')
    },
    resolvedAriaLabel() {
      return this.ariaLabel || resolveUiText(this, 'ui.intro.stepsAria', 'Introduction')
    },
    resolvedCarouselRole() {
      return resolveUiText(this, 'ui.intro.carouselRole', 'carousel')
    },
    primaryLabel() {
      return this.isLastStep ? this.resolvedFinishLabel : this.resolvedNextLabel
    },
    trackStyle() {
      const shift = `calc(${-this.activeIndex * 100}% + ${this.dragOffset}px)`
      return { transform: `translate3d(${shift}, 0, 0)` }
    },
    rootClass() {
      return cn('ui-intro', this.overlay && 'ui-intro--overlay', this.$attrs.class)
    },
    passthroughAttrs() {
      return pickPassthroughAttrs(this.$attrs)
    },
  },
  watch: {
    isVisible(visible) {
      if (visible) {
        this.resetDrag()
        this.$nextTick(() => {
          this.$refs.root?.focus?.({ preventScroll: true })
        })
      }
    },
  },
  beforeUnmount() {
    this.releasePointer()
  },
  methods: {
    isRtl() {
      const el = this.$refs.root
      if (el && typeof getComputedStyle === 'function') {
        return getComputedStyle(el).direction === 'rtl'
      }
      return document.documentElement.dir === 'rtl'
    },
    setIndex(index) {
      const next = Math.min(this.lastIndex, Math.max(0, index))
      if (next === this.activeIndex) return
      this.$emit('update:modelValue', next)
    },
    goTo(index) {
      this.setIndex(index)
    },
    goPrev() {
      this.setIndex(this.activeIndex - 1)
    },
    goNext() {
      if (this.isLastStep) {
        this.onFinish()
        return
      }
      this.setIndex(this.activeIndex + 1)
      this.$emit('next', this.activeIndex + 1)
    },
    onSkip() {
      this.$emit('skip')
      if (this.overlay) this.$emit('update:open', false)
    },
    onFinish() {
      this.$emit('finish')
      if (this.overlay) this.$emit('update:open', false)
    },
    onRootKeydown(event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        this.isRtl() ? this.goPrev() : this.goNext()
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        this.isRtl() ? this.goNext() : this.goPrev()
      }
    },
    isInteractiveTarget(target) {
      if (!(target instanceof Element)) return false
      return Boolean(target.closest('button, a, input, textarea, select, [role="tab"]'))
    },
    resetDrag() {
      this.dragging = false
      this.dragOffset = 0
      this.pointerId = null
      this.lockedAxis = null
    },
    releasePointer() {
      const el = this.$refs.viewport
      if (el && this.pointerId != null && el.hasPointerCapture?.(this.pointerId)) {
        el.releasePointerCapture(this.pointerId)
      }
    },
    onPointerDown(event) {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      if (this.isInteractiveTarget(event.target)) return
      if (this.normalizedSteps.length < 2) return
      this.dragging = true
      this.dragOffset = 0
      this.pointerId = event.pointerId
      this.startX = event.clientX
      this.startY = event.clientY
      this.startAt = event.timeStamp
      this.lockedAxis = null
      try {
        event.currentTarget?.setPointerCapture?.(event.pointerId)
      } catch {
        /* sentetik / WKWebView pointer id */
      }
    },
    onPointerMove(event) {
      if (!this.dragging || event.pointerId !== this.pointerId) return
      this.applyDrag(event.clientX, event.clientY, event)
    },
    onPointerUp(event) {
      if (!this.dragging || (this.pointerId != null && event.pointerId !== this.pointerId)) {
        return
      }
      this.commitDrag(event.clientX, event.timeStamp)
    },
    onTouchStart(event) {
      if (typeof window !== 'undefined' && window.PointerEvent) return
      if (this.isInteractiveTarget(event.target)) return
      if (this.normalizedSteps.length < 2) return
      const touch = event.changedTouches?.[0]
      if (!touch) return
      this.dragging = true
      this.dragOffset = 0
      this.pointerId = 'touch'
      this.startX = touch.clientX
      this.startY = touch.clientY
      this.startAt = event.timeStamp
      this.lockedAxis = null
    },
    onTouchMove(event) {
      if (!this.dragging || this.pointerId !== 'touch') return
      const touch = event.changedTouches?.[0]
      if (!touch) return
      this.applyDrag(touch.clientX, touch.clientY, event)
    },
    onTouchEnd(event) {
      if (!this.dragging || this.pointerId !== 'touch') return
      const touch = event.changedTouches?.[0]
      this.commitDrag(touch?.clientX ?? this.startX + this.dragOffset, event.timeStamp)
    },
    applyDrag(clientX, clientY, event) {
      const dx = clientX - this.startX
      const dy = clientY - this.startY
      if (!this.lockedAxis) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return
        this.lockedAxis = Math.abs(dx) > Math.abs(dy) * SWIPE_AXIS_RATIO ? 'x' : 'y'
        if (this.lockedAxis === 'y') {
          this.resetDrag()
          return
        }
      }
      if (this.lockedAxis !== 'x') return
      event?.preventDefault?.()
      const atStart = this.activeIndex === 0
      const atEnd = this.activeIndex === this.lastIndex
      let offset = dx
      if ((atStart && offset > 0) || (atEnd && offset < 0)) {
        offset *= RUBBER
      }
      this.dragOffset = offset
    },
    commitDrag(clientX, timeStamp) {
      const dx = clientX - this.startX
      const elapsed = Math.max(1, timeStamp - this.startAt)
      const velocity = dx / elapsed
      const width = this.$refs.viewport?.clientWidth || 0
      const threshold = Math.max(SWIPE_MIN_PX, width * 0.18)
      const committed = this.lockedAxis === 'x' && (Math.abs(dx) >= threshold || Math.abs(velocity) > 0.45)
      this.releasePointer()
      this.resetDrag()
      if (!committed) return
      const goingNext = this.isRtl() ? dx > 0 : dx < 0
      if (goingNext) {
        if (!this.isLastStep) this.goNext()
        return
      }
      this.goPrev()
    },
  },
}
</script>
