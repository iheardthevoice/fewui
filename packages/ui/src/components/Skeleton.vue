<template>
  <!-- Placeholder mod: slot yok — yükleme kutusu -->
  <div
    v-if="!hasDefaultSlot"
    :class="skeletonClass"
    aria-hidden="true"
    v-bind="passthroughAttrs"
  />

  <!-- Sarmalayıcı mod: satır iskelet + yükseklik / opacity geçişi -->
  <div
    v-else
    ref="hostRef"
    :class="hostClass"
    :style="hostStyle"
    :aria-busy="isBusy ? 'true' : undefined"
    v-bind="passthroughAttrs"
    @transitionend="onHostTransitionEnd"
  >
    <div
      v-show="showPlaceholder"
      ref="placeholderRef"
      class="ui-skeleton-placeholder"
      :class="placeholderClass"
      aria-hidden="true"
    >
      <slot name="placeholder">
        <div class="ui-skeleton-default-rows">
          <div class="ui-skeleton ui-skeleton--line ui-skeleton--size-md" />
          <div class="ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" />
          <div class="ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" />
        </div>
      </slot>
    </div>

    <div
      ref="contentWrapRef"
      class="ui-skeleton-content-wrap"
      :class="contentWrapClass"
    >
      <div
        class="ui-skeleton-content"
        :aria-hidden="showPlaceholder && !isRevealing ? 'true' : undefined"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, useSlots, ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { cn } from '../utils/cn.js'

const VARIANTS = ['line', 'circle', 'block', 'pill']
const SIZES = ['sm', 'md', 'lg']
const REVEAL_MS = 480

const VARIANT_CLASS = {
  line: 'ui-skeleton--line',
  circle: 'ui-skeleton--circle',
  block: 'ui-skeleton--block',
  pill: 'ui-skeleton--pill',
}

const LINE_SIZE_CLASS = {
  sm: 'ui-skeleton--size-sm',
  md: 'ui-skeleton--size-md',
  lg: 'ui-skeleton--size-lg',
}

export default {
  name: 'Skeleton',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'line',
      validator: (v) => VARIANTS.includes(v),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
  },
  setup(props) {
    const slots = useSlots()
    const hasDefaultSlot = computed(() => Boolean(slots.default))

    const hostRef = ref(null)
    const placeholderRef = ref(null)
    const contentWrapRef = ref(null)
    const hostHeightPx = ref(null)
    const heightAnimActive = ref(false)
    /** Refetch: önceki içerik yüksekliğini kilitle — tek satır iskelete çökmesin */
    const heightLocked = ref(false)
    const isRevealing = ref(false)
    const revealContentVisible = ref(false)
    const prefersReducedMotion = ref(false)
    let revealTimer = null

    const showPlaceholder = computed(
      () => props.loading || isRevealing.value,
    )
    const isBusy = computed(
      () => props.loading || isRevealing.value,
    )

    onMounted(() => {
      prefersReducedMotion.value = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
    })

    onBeforeUnmount(() => {
      clearRevealTimer()
    })

    function clearRevealTimer() {
      if (revealTimer != null) {
        clearTimeout(revealTimer)
        revealTimer = null
      }
    }

    watch(
      () => props.loading,
      async (loading, prevLoading) => {
        clearRevealTimer()

        if (loading) {
          // flush: 'pre' — layout hâlâ önceki içerikte; yüksekliği ölç
          const prevHeight = Math.max(
            hostRef.value?.offsetHeight ?? 0,
            contentWrapRef.value?.scrollHeight ?? 0,
            placeholderRef.value?.offsetHeight ?? 0,
          )
          isRevealing.value = false
          revealContentVisible.value = false
          heightAnimActive.value = false
          heightLocked.value = prevHeight > 48
          hostHeightPx.value = heightLocked.value ? prevHeight : null
          return
        }
        if (prevLoading !== true) return

        if (prefersReducedMotion.value) {
          isRevealing.value = false
          heightLocked.value = false
          hostHeightPx.value = null
          heightAnimActive.value = false
          return
        }

        const from =
          hostHeightPx.value
          ?? hostRef.value?.offsetHeight
          ?? placeholderRef.value?.offsetHeight
          ?? 0

        isRevealing.value = true
        revealContentVisible.value = false
        heightLocked.value = false
        heightAnimActive.value = true
        hostHeightPx.value = from

        await nextTick()

        const to = Math.max(
          contentWrapRef.value?.scrollHeight ?? 0,
          from,
        )

        if (from <= 0 && to <= 0) {
          finishReveal()
          return
        }

        await nextTick()
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            hostHeightPx.value = to
            revealContentVisible.value = true
          })
        })

        revealTimer = setTimeout(finishReveal, REVEAL_MS + 40)
      },
    )

    function finishReveal() {
      clearRevealTimer()
      isRevealing.value = false
      revealContentVisible.value = false
      heightLocked.value = false
      hostHeightPx.value = null
      heightAnimActive.value = false
    }

    function onHostTransitionEnd(event) {
      if (event.target !== hostRef.value) return
      if (event.propertyName !== 'height') return
      if (props.loading) return
      if (!heightAnimActive.value) return
      finishReveal()
    }

    const hostStyle = computed(() => {
      if (hostHeightPx.value == null) return undefined
      return { height: `${hostHeightPx.value}px` }
    })

    const placeholderClass = computed(() => ({
      'ui-skeleton-placeholder--flow':
        props.loading && !isRevealing.value && !heightLocked.value,
      'ui-skeleton-placeholder--overlay':
        isRevealing.value || (props.loading && heightLocked.value),
      'ui-skeleton-placeholder--fade-out': isRevealing.value,
      'ui-skeleton-placeholder--fill':
        props.loading && heightLocked.value && !isRevealing.value,
    }))

    const contentWrapClass = computed(() => ({
      'ui-skeleton-content-wrap--loading':
        props.loading && !isRevealing.value && !heightLocked.value,
      'ui-skeleton-content-wrap--loading-hold':
        props.loading && heightLocked.value && !isRevealing.value,
      'ui-skeleton-content-wrap--revealing': isRevealing.value,
      'ui-skeleton-content-wrap--revealing-visible':
        isRevealing.value && revealContentVisible.value,
      'ui-skeleton-content-wrap--ready': !props.loading && !isRevealing.value,
    }))

    return {
      hasDefaultSlot,
      hostRef,
      placeholderRef,
      contentWrapRef,
      hostStyle,
      heightAnimActive,
      heightLocked,
      isRevealing,
      showPlaceholder,
      isBusy,
      placeholderClass,
      contentWrapClass,
      onHostTransitionEnd,
    }
  },
  computed: {
    variantClass() {
      return VARIANT_CLASS[this.variant] || VARIANT_CLASS.line
    },
    lineSizeClass() {
      if (this.variant !== 'line') return undefined
      return LINE_SIZE_CLASS[this.size] || LINE_SIZE_CLASS.md
    },
    skeletonClass() {
      return cn(
        'ui-skeleton',
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class,
      )
    },
    hostClass() {
      return cn(
        'ui-skeleton-host',
        this.heightAnimActive && 'ui-skeleton-host--height-active',
        this.heightLocked && 'ui-skeleton-host--height-locked',
        (this.loading || this.isRevealing) && 'ui-skeleton-host--busy',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
