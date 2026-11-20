<template>
  <!-- Placeholder mod: slot yok — yükleme kutusu -->
  <div
    v-if="!hasDefaultSlot && lines > 1"
    :class="linesClass"
    aria-hidden="true"
    v-bind="passthroughAttrs"
  >
    <div
      v-for="line in lines"
      :key="line"
      class="ui-skeleton ui-skeleton--line"
      :class="[lineSizeClassFor, lineWidthClass(line)]"
    />
  </div>
  <div
    v-else-if="!hasDefaultSlot"
    :class="skeletonClass"
    aria-hidden="true"
    v-bind="passthroughAttrs"
  />

  <!-- Sarmalayıcı mod: gecikmeli satır iskelet + opacity geçişi (yükseklik canlandırılmaz) -->
  <div
    v-else
    ref="hostRef"
    :class="hostClass"
    v-bind="hostStyle ? { style: hostStyle, ...passthroughAttrs } : passthroughAttrs"
    :aria-busy="isBusy ? 'true' : undefined"
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
      class="ui-skeleton-content-wrap"
      :class="contentWrapClass"
    >
      <div
        class="ui-skeleton-content"
        :aria-hidden="contentHidden ? 'true' : undefined"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, useSlots, ref, watch, inject, provide, onMounted, onBeforeUnmount } from 'vue'
import { UI_LOADING_GATE_KEY } from '../utils/loading-gate.js'
import { cn } from '../utils/cn.js'
import { CONTROL_SIZES } from '../utils/sizes.js'

const VARIANTS = ['line', 'circle', 'block', 'pill']
/** Sarmalayıcı iskelet içindeki kutular gecikme / kapı kararını sarmalayıcıya bırakır. */
const SKELETON_WRAPPER_KEY = Symbol.for('fewui.skeleton-wrapper')
const SIZES = CONTROL_SIZES
/** İskelet → içerik geçişi (yalnız opacity). */
const REVEAL_MS = 200
/** Yükleme bu süreden kısaysa iskelet hiç görünmez. */
const SHOW_DELAY_MS = 150
/** Görünen iskelet en az bu süre kalır. */
const MIN_VISIBLE_MS = 300

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
    /** Kutu modu: alt alta bu kadar satır çizer (son satırlar kısalır) — metin bloğu yer tutucusu. */
    lines: {
      type: Number,
      default: 1,
      validator: (v) => Number.isInteger(v) && v >= 1,
    },
    /**
     * Sarmalayıcı mod: iskelet ancak yükleme bu süreden (ms) uzun sürerse görünür.
     * Hızlı yanıtta iskelet hiç çizilmez; yer yine de ayrılır (görünmez iskelet), içerik zıplamaz.
     */
    delay: {
      type: Number,
      default: SHOW_DELAY_MS,
    },
    /** Sarmalayıcı mod: iskelet bir kez göründüyse en az bu süre (ms) kalır — yanıp sönmez. */
    minDuration: {
      type: Number,
      default: MIN_VISIBLE_MS,
    },
  },
  setup(props) {
    const slots = useSlots()
    const hasDefaultSlot = computed(() => Boolean(slots.default))

    const hostRef = ref(null)
    const placeholderRef = ref(null)
    /**
     * `ready`: içerik · `pending`: yükleniyor, iskelet henüz görünmez (yer ayrılı) ·
     * `placeholder`: iskelet görünür · `revealing`: iskelet söner, içerik belirir (yalnız opacity).
     */
    const phase = ref(props.loading ? 'pending' : 'ready')
    /** Yeniden yükleme: önceki içerik yerinde kalır, yükseklik kilitlenir (tek satıra çökmez). */
    const stale = ref(false)
    const hostHeightPx = ref(null)
    let showTimer = null
    let revealTimer = null
    let shownAt = 0
    /**
     * İçerik gerçekten gösterildi mi: bir yükleme döngüsü bitti ya da en az bir kare yüklemesiz çizildi.
     * Yalnız o zaman yeniden yüklemede "eski içerik" yerinde kalır. Aksi halde ilk kurulumda
     * `loading=false → true` aynı karede dönünce boş durum (ör. "yeni ekle") eski içerik sanılıp görünürdü.
     */
    let contentSettled = false
    let settleFrame = 0

    function clearTimers() {
      if (showTimer != null) clearTimeout(showTimer)
      if (revealTimer != null) clearTimeout(revealTimer)
      showTimer = null
      revealTimer = null
    }

    function reducedMotion() {
      return typeof window !== 'undefined'
        && typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }

    function startPending() {
      phase.value = 'pending'
      showTimer = setTimeout(() => {
        showTimer = null
        if (!props.loading) return
        phase.value = 'placeholder'
        shownAt = Date.now()
      }, Math.max(0, props.delay))
    }

    function finish() {
      clearTimers()
      contentSettled = true
      phase.value = 'ready'
      stale.value = false
      hostHeightPx.value = null
    }

    function reveal() {
      stale.value = false
      hostHeightPx.value = null
      if (reducedMotion()) {
        finish()
        return
      }
      phase.value = 'revealing'
      revealTimer = setTimeout(finish, REVEAL_MS)
    }

    // Çevreleyen katman (ör. `ui-dialog`) ilk yükleme bitene kadar açılışını tutabilsin.
    const gate = inject(UI_LOADING_GATE_KEY, null)
    const gateToken = Symbol('ui-skeleton')
    const insideWrapper = inject(SKELETON_WRAPPER_KEY, false)
    provide(SKELETON_WRAPPER_KEY, true)

    /*
     * Kutu modu (yuvasız; genelde `v-if="loading"` bloğunda): DOM'dayken "yükleniyor" demektir.
     * Aynı gösterim kuralı: yer ayrılır, `delay` dolmadan görünmez; katman kapısına kayıt olur.
     * Sarmalayıcı iskeletin `placeholder` yuvasındaki kutular buna katılmaz.
     */
    const boxPending = ref(!hasDefaultSlot.value && !insideWrapper && props.delay > 0)
    let boxTimer = null
    if (!hasDefaultSlot.value && !insideWrapper) {
      if (boxPending.value) {
        boxTimer = setTimeout(() => {
          boxTimer = null
          boxPending.value = false
        }, props.delay)
      }
      gate?.register(gateToken)
    }
    watch(
      () => phase.value === 'pending' || phase.value === 'placeholder',
      (waiting) => {
        if (!gate) return
        if (waiting && !stale.value) gate.register(gateToken)
        else gate.release(gateToken)
      },
      { flush: 'sync' },
    )

    if (props.loading) startPending()
    if (gate && props.loading) gate.register(gateToken)

    onMounted(() => {
      if (props.loading || typeof requestAnimationFrame !== 'function') return
      // Yüklemesiz kurulduysa içerik bir kare sonra "gösterilmiş" sayılır.
      settleFrame = requestAnimationFrame(() => {
        settleFrame = 0
        if (!props.loading) contentSettled = true
      })
    })

    onBeforeUnmount(() => {
      clearTimers()
      if (settleFrame) cancelAnimationFrame(settleFrame)
      if (boxTimer != null) clearTimeout(boxTimer)
      gate?.release(gateToken)
    })

    watch(
      () => props.loading,
      (loading) => {
        clearTimers()
        if (loading) {
          // flush: 'pre' — layout hâlâ önceki içerikte; yüksekliği ölç
          if (settleFrame) cancelAnimationFrame(settleFrame)
          settleFrame = 0
          const prevHeight = phase.value === 'ready' && contentSettled
            ? (hostRef.value?.offsetHeight ?? 0)
            : 0
          stale.value = prevHeight > 48
          hostHeightPx.value = stale.value ? prevHeight : null
          startPending()
          return
        }
        if (phase.value === 'ready') return
        if (phase.value === 'pending') {
          // İskelet hiç görünmedi: eski içerik varsa doğrudan güncelle, yoksa kısa belirme.
          if (stale.value) {
            finish()
            return
          }
          reveal()
          return
        }
        const wait = Math.max(0, props.minDuration - (Date.now() - shownAt))
        if (wait > 0) {
          revealTimer = setTimeout(() => {
            revealTimer = null
            if (!props.loading) reveal()
          }, wait)
          return
        }
        reveal()
      },
    )

    const isBusy = computed(() => props.loading)
    const showPlaceholder = computed(() => {
      if (phase.value === 'pending') return !stale.value
      return phase.value === 'placeholder' || phase.value === 'revealing'
    })
    const contentHidden = computed(
      () => phase.value === 'placeholder' || (phase.value === 'pending' && !stale.value),
    )

    const hostStyle = computed(() => {
      if (hostHeightPx.value == null) return undefined
      return { minHeight: `${hostHeightPx.value}px` }
    })

    const placeholderClass = computed(() => ({
      'ui-skeleton-placeholder--flow':
        (phase.value === 'pending' || phase.value === 'placeholder') && !stale.value,
      'ui-skeleton-placeholder--overlay':
        phase.value === 'revealing' || (phase.value === 'placeholder' && stale.value),
      'ui-skeleton-placeholder--fill': phase.value === 'placeholder' && stale.value,
      'ui-skeleton-placeholder--hidden': phase.value === 'pending',
      'ui-skeleton-placeholder--fade-out': phase.value === 'revealing',
    }))

    const contentWrapClass = computed(() => ({
      'ui-skeleton-content-wrap--loading': contentHidden.value && !stale.value,
      'ui-skeleton-content-wrap--loading-hold': phase.value === 'placeholder' && stale.value,
      'ui-skeleton-content-wrap--revealing': phase.value === 'revealing',
      'ui-skeleton-content-wrap--ready':
        phase.value === 'ready' || (phase.value === 'pending' && stale.value),
    }))

    return {
      hasDefaultSlot,
      boxPending,
      hostRef,
      placeholderRef,
      hostStyle,
      stale,
      isBusy,
      showPlaceholder,
      contentHidden,
      placeholderClass,
      contentWrapClass,
    }
  },
  methods: {
    /** Son satır %68, sondan ikinci %92 — paragraf görünümü. */
    lineWidthClass(line) {
      if (line === this.lines) return 'ui-skeleton-default-rows__line--sm'
      if (line === this.lines - 1) return 'ui-skeleton-default-rows__line--md'
      return undefined
    },
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
        this.boxPending && 'ui-skeleton--pending',
        this.$attrs.class,
      )
    },
    lineSizeClassFor() {
      return LINE_SIZE_CLASS[this.size] || LINE_SIZE_CLASS.md
    },
    linesClass() {
      return cn('ui-skeleton-default-rows', this.boxPending && 'ui-skeleton--pending', this.$attrs.class)
    },
    hostClass() {
      return cn(
        'ui-skeleton-host',
        this.isBusy && 'ui-skeleton-host--busy',
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
