<template>
  <Tooltip
    :label="tooltipLabel"
    :disabled="!showTooltip"
    placement="top"
  >
    <component
      :is="rootTag"
      v-bind="hexBadgeStyle ? { ...rootAttrs, style: hexBadgeStyle } : rootAttrs"
      :class="badgeClasses"
    >
      <span
        v-if="prefixIcon"
        class="inline-flex shrink-0 items-center"
        aria-hidden="true"
      >
        <ui-icon
          :name="prefixIcon"
          size="xs"
        />
      </span>
      <span
        v-else-if="$slots.prepend"
        class="inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
      >
        <slot name="prepend" />
      </span>
      <span
        ref="labelRef"
        class="ui-badge-label"
        :class="[labelWidthClass, truncate ? 'ui-badge-label--truncate' : '']"
      >
        <slot />
      </span>
      <span
        v-if="suffixIcon"
        class="inline-flex shrink-0 items-center"
        aria-hidden="true"
      >
        <ui-icon
          :name="suffixIcon"
          size="xs"
        />
      </span>
      <span
        v-else-if="$slots.append"
        class="inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
      >
        <slot name="append" />
      </span>
    </component>
  </Tooltip>
</template>

<script>
import Tooltip from './Tooltip.vue'
import { cn } from '../utils/cn.js'
import { pickPassthroughAttrs } from '../utils/pick-passthrough-attrs.js'
import { contrastTextForHex, normalizeHexColor } from '../utils/hex-color.js'

const COLORS = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']
const VARIANTS = ['solid', 'outline', 'muted']

const SIZES = ['xs', 'sm', 'md', 'lg']

/** @type {Record<string, string>} */
const SOLID_CLASSES = {
  primary: 'border border-transparent bg-primary text-primary-foreground',
  secondary: 'border border-transparent bg-secondary text-secondary-foreground',
  success: 'border border-transparent bg-success text-success-foreground',
  warning: 'border border-transparent bg-warning text-warning-foreground',
  info: 'border border-transparent bg-info text-info-foreground',
  danger: 'border border-transparent bg-danger text-danger-foreground',
}

/** @type {Record<string, string>} */
const OUTLINE_CLASSES = {
  primary: 'border border-current bg-transparent text-primary',
  secondary: 'border border-border bg-transparent text-foreground',
  success: 'border border-current bg-transparent text-success',
  warning: 'border border-current bg-transparent text-warning',
  info: 'border border-current bg-transparent text-info',
  danger: 'border border-current bg-transparent text-danger',
}

/** @type {Record<string, string>} */
const MUTED_CLASSES = {
  primary: 'border border-transparent bg-primary/12 text-primary',
  secondary: 'border border-transparent bg-muted text-muted-foreground',
  success: 'border border-transparent bg-success/12 text-success',
  warning: 'border border-transparent bg-warning/15 text-warning',
  info: 'border border-transparent bg-info/12 text-info',
  danger: 'border border-transparent bg-danger/12 text-danger',
}

const VARIANT_CLASSES = { solid: SOLID_CLASSES, outline: OUTLINE_CLASSES, muted: MUTED_CLASSES }

const sizeClasses = {
  xs: 'ui-badge--xs',
  sm: 'ui-badge--sm',
  md: 'ui-badge--md',
  lg: 'ui-badge--lg',
}

const LABEL_WIDTH_CLASSES = {
  '32': 'max-w-32',
  '40': 'max-w-40',
  '48': 'max-w-48',
  '64': 'max-w-64',
  full: 'max-w-full',
}

export default {
  name: 'Badge',
  components: { Tooltip },
  inheritAttrs: false,
  props: {
    /** Ton — `primary | secondary | success | warning | info | danger` */
    /** Ton; boşsa `solid`/`outline` için `primary`, `muted` için nötr (`secondary`). */
    color: {
      type: String,
      default: undefined,
      validator: (v) => v == null || COLORS.includes(v),
    },
    /** Görsel stil — `solid` dolgu, `outline` çerçeve, `muted` tonun soluk zemini */
    variant: {
      type: String,
      default: 'solid',
      validator: (v) => VARIANTS.includes(v),
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: 'sm',
      validator: (v) => SIZES.includes(v),
    },
    /** Uzun metinde kısaltma (…) — `maxWidth` üst sınırından sonra (varsayılan ~12rem) */
    truncate: {
      type: Boolean,
      default: true,
    },
    /** Tailwind max-w-* anahtarı: 32, 40, 48, 64, full — truncate açıkken üst sınır */
    maxWidth: {
      type: String,
      default: '48',
      validator: (v) => Object.keys(LABEL_WIDTH_CLASSES).includes(v),
    },
    /** Tooltip metni; boşsa slot metni kullanılır */
    tooltip: {
      type: String,
      default: '',
    },
    /** Geçerli hex renk (#RGB / #RRGGBB); arka plan ve metin kontrastı buna göre uygulanır */
    hex: {
      type: String,
      default: '',
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    /** Tıklanabilir etiket — `button` olarak basılır (kaldır / seç). */
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isTruncated: false,
      labelText: '',
      resizeObserver: null,
    }
  },
  computed: {
    toneClasses() {
      const map = VARIANT_CLASSES[this.variant] || SOLID_CLASSES
      return map[this.color || (this.variant === 'muted' ? 'secondary' : 'primary')]
    },
    isClickable() {
      return this.clickable || typeof this.$attrs.onClick === 'function'
    },
    rootTag() {
      return this.isClickable ? 'button' : 'span'
    },
    rootAttrs() {
      const rest = pickPassthroughAttrs(this.$attrs)
      if (this.isClickable) {
        return { type: 'button', ...rest }
      }
      return rest
    },
    labelWidthClass() {
      if (!this.truncate) return ''
      return LABEL_WIDTH_CLASSES[this.maxWidth] || LABEL_WIDTH_CLASSES['48']
    },
    hasAdornment() {
      return Boolean(
        this.prefixIcon
        || this.suffixIcon
        || this.$slots.prepend
        || this.$slots.append,
      )
    },
    normalizedHex() {
      return normalizeHexColor(this.hex)
    },
    hexBadgeStyle() {
      if (!this.normalizedHex) return undefined
      return {
        backgroundColor: this.normalizedHex,
        color: contrastTextForHex(this.normalizedHex),
        borderColor: 'transparent',
        boxShadow: '0 1px 2px rgb(0 0 0 / 0.12)',
      }
    },
    badgeClasses() {
      return cn(
        'ui-badge inline-flex max-w-full items-center font-medium',
        this.hasAdornment ? 'gap-1' : 'justify-center',
        sizeClasses[this.size] || sizeClasses.sm,
        this.isClickable ? 'ui-badge--clickable' : '',
        !this.normalizedHex && this.toneClasses,
        this.$attrs.class,
      )
    },
    tooltipLabel() {
      return (this.tooltip || this.labelText || '').trim()
    },
    showTooltip() {
      return this.truncate && this.isTruncated && Boolean(this.tooltipLabel)
    },
  },
  watch: {
    tooltip() {
      this.$nextTick(() => this.measureLabel())
    },
  },
  mounted() {
    this.$nextTick(() => this.observeLabel())
  },
  updated() {
    this.$nextTick(() => this.measureLabel())
  },
  beforeUnmount() {
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
  },
  methods: {
    observeLabel() {
      const el = this.$refs.labelRef
      if (!el || typeof ResizeObserver === 'undefined') {
        this.measureLabel()
        return
      }
      this.resizeObserver?.disconnect()
      this.measureLabel()
      this.resizeObserver = new ResizeObserver(() => this.measureLabel())
      this.resizeObserver.observe(el)
    },
    measureLabel() {
      const el = this.$refs.labelRef
      if (!el) {
        this.isTruncated = false
        this.labelText = ''
        return
      }
      this.labelText = (el.textContent || '').trim()
      if (!this.truncate) {
        this.isTruncated = false
        return
      }
      this.isTruncated = el.scrollWidth > el.clientWidth + 1
    },
  },
}
</script>
