<template>
  <div
    :class="rootClass"
    :role="interactive ? 'button' : undefined"
    :tabindex="interactive ? 0 : undefined"
    :aria-busy="loading ? 'true' : undefined"
    v-bind="passthroughAttrs"
    @click="onActivate"
    @keydown.enter.prevent="onActivate"
    @keydown.space.prevent="onActivate"
  >
    <ui-field
      :card="variant === 'soft'"
      fill
      :title="title"
      :icon="icon"
      :icon-type="iconType"
      :icon-tone="color || undefined"
    >
      <span
        v-if="loading"
        class="ui-stat-value-skeleton"
      >
        <ui-skeleton
          variant="line"
          size="md"
        />
      </span>
      <p
        v-else
        :class="valueClass"
      >
        <slot name="value">
          {{ value }}
        </slot>
      </p>

      <p
        v-if="showChangeRow"
        :class="changeClass"
      >
        <template v-if="hasChangeContent">
          <ui-icon
            v-if="changeIcon"
            :name="changeIcon"
            size="xs"
            aria-hidden="true"
          />
          <span>{{ changeDisplay }}</span>
          <span
            v-if="changeLabel"
            class="ui-stat-change-label"
          >{{ changeLabel }}</span>
        </template>
        <template v-else>
          {{ ' ' }}
        </template>
      </p>

      <div
        v-if="$slots.default"
        class="ui-stat-body"
      >
        <slot />
      </div>

      <div
        v-if="$slots.footer"
        class="ui-stat-footer"
      >
        <slot name="footer" />
      </div>
    </ui-field>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { iconTypeProp } from '../theme/icon-type-prop.js'
import { CONTROL_SIZES } from '../utils/sizes.js'

const SIZES = CONTROL_SIZES
const STAT_COLORS = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']
const STAT_VARIANTS = ['soft', 'surface']

const VALUE_CLASS_BY_SIZE = {
  sm: 'ui-display-sm',
  md: 'ui-display-md',
  lg: 'ui-display-lg',
}

/**
 * Metrik kartı — başlık + ikon, büyük değer, önceki döneme göre değişim ve isteğe bağlı açıklama.
 *
 * `change`: yüzde sayı (12.5 → `+12,5%`). Verilmezse değişim satırı yok; `null` ise satırın yeri
 * korunur (aynı ızgarada kartlar hizalı kalır) veya `changeText` gösterilir (ör. “Yeni dönem”).
 * Artış `success`, azalış `danger` renktedir; gider gibi azalmanın iyi olduğu metriklerde `invertTrend`.
 *
 * `variant`: `soft` kart içinde (dolgulu kutu), `surface` sayfa üzerinde tek başına (kart yüzeyi).
 */
export default {
  name: 'Stat',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconType: iconTypeProp,
    /** Başlık ikonu tonu */
    color: {
      type: String,
      default: '',
      validator: (v) => !v || STAT_COLORS.includes(v),
    },
    /** Yüzde değişim; `undefined` satırı gizler, `null` yerini korur */
    change: {
      type: Number,
      default: undefined,
    },
    /** Hazır değişim metni (biçimlendirmeyi geçersiz kılar), ör. “Yeni dönem” */
    changeText: {
      type: String,
      default: '',
    },
    /** Değişimin yanındaki nötr açıklama, ör. “(₺1.250)” veya “dünden” */
    changeLabel: {
      type: String,
      default: '',
    },
    /** Azalış iyi (gider, iptal, bekleme süresi) */
    invertTrend: {
      type: Boolean,
      default: false,
    },
    /** `soft`: kart içi dolgulu kutu · `surface`: sayfa üzerinde kart yüzeyi */
    variant: {
      type: String,
      default: 'soft',
      validator: (v) => STAT_VARIANTS.includes(v),
    },
    /** Değer ölçüsü: sm 18px · md 20px · lg 24px */
    size: {
      type: String,
      default: 'lg',
      validator: (v) => SIZES.includes(v),
    },
    /** Kart tıklanabilir (`click` yayar; Enter / Space ile de çalışır) */
    interactive: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  computed: {
    rootClass() {
      return cn(
        'ui-stat',
        this.variant === 'surface' ? 'ui-surface ui-stat--surface' : '',
        this.interactive ? 'ui-stat--interactive' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, onClick: _o, ...rest } = this.$attrs
      return rest
    },
    valueClass() {
      return cn('ui-stat-value', VALUE_CLASS_BY_SIZE[this.size] || VALUE_CLASS_BY_SIZE.lg)
    },
    numericChange() {
      if (this.change == null) return null
      const n = Number(this.change)
      return Number.isFinite(n) ? n : null
    },
    showChangeRow() {
      return this.change !== undefined || Boolean(this.changeText)
    },
    hasChangeContent() {
      return Boolean(this.changeText) || this.numericChange != null
    },
    trend() {
      const n = this.numericChange
      if (n == null || n === 0) return 'neutral'
      const up = n > 0
      return up !== this.invertTrend ? 'positive' : 'negative'
    },
    changeIcon() {
      const n = this.numericChange
      if (n == null || n === 0) return ''
      return n > 0 ? 'chart-line-up' : 'chart-line-down'
    },
    changeDisplay() {
      if (this.changeText) return this.changeText
      const n = this.numericChange
      if (n == null) return ''
      const locale = this.$i18n?.locale || undefined
      const formatted = new Intl.NumberFormat(locale, {
        maximumFractionDigits: 1,
        signDisplay: 'exceptZero',
      }).format(n)
      return `${formatted}%`
    },
    changeClass() {
      return cn(
        'ui-stat-change',
        `ui-stat-change--${this.trend}`,
        this.hasChangeContent ? '' : 'invisible',
      )
    },
  },
  methods: {
    onActivate(event) {
      if (!this.interactive || this.loading) return
      this.$emit('click', event)
    },
  },
}
</script>
