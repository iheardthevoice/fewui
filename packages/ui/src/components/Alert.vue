<template>
  <div
    :class="rootClasses"
    :role="alertRole"
    :aria-atomic="alertRole ? 'true' : undefined"
    v-bind="passthroughAttrs"
  >
    <span
      v-if="showIcon"
      :class="['ui-alert-icon', iconToneClass]"
      aria-hidden="true"
    >
      <slot name="icon">
        <ui-icon
          :name="resolvedIcon"
          size="sm"
        />
      </slot>
    </span>
    <div class="ui-alert-body">
      <div
        v-if="title || description"
        class="ui-alert-copy"
      >
        <p
          v-if="title"
          class="ui-alert-title"
        >
          <span class="sr-only">{{ toneLabel }}: </span>{{ title }}
        </p>
        <p
          v-if="description"
          class="ui-alert-description ui-text-default"
        >
          <span
            v-if="!title"
            class="sr-only"
          >{{ toneLabel }}: </span>{{ description }}
        </p>
      </div>
      <div
        v-if="$slots.default && !resolvedActionsEnd"
        class="ui-alert-slot"
      >
        <slot />
      </div>
    </div>
    <div
      v-if="$slots.default && resolvedActionsEnd"
      class="ui-alert-actions"
    >
      <slot />
    </div>
    <ui-button
      v-if="dismissible"
      native-type="button"
      variant="ghost"
      color="secondary"
      cubed
      size="sm"
      class="ui-alert-dismiss shrink-0"
      prefix-icon="xmark"
      :aria-label="dismissLabel"
      @click="onDismiss"
    />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const COLORS = ['info', 'success', 'warning', 'danger']

const COLOR_ICON = {
  info: 'circle-info',
  success: 'circle-check',
  warning: 'triangle-exclamation',
  danger: 'circle-xmark',
}

/** İkon tonlu zeminde ≥3:1 (WCAG 1.4.11) — ham ton warning'de 1.77:1 kalıyordu; ink tonu kullanılır. */
const COLOR_ICON_CLASS = {
  info: 'text-[var(--info-ink)]',
  success: 'text-[var(--success-ink)]',
  warning: 'text-[var(--warning-ink)]',
  danger: 'text-[var(--danger-ink)]',
}

const LIVE_MODES = ['', 'polite', 'assertive']

export default {
  name: 'Alert',
  inheritAttrs: false,
  props: {
    /** Durum tonu */
    color: {
      type: String,
      default: 'info',
      validator: (v) => COLORS.includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** Varsayılan ikon yerine `circle-info` vb. */
    icon: {
      type: String,
      default: null,
    },
    /** `false` — sol ikon gösterilmez; `#icon` slotu ile özelleştirilebilir */
    showIcon: {
      type: Boolean,
      default: true,
    },
    /**
     * Ekran okuyucu duyurusu (WCAG 4.1.3). Varsayılan `''`: sayfada kalıcı bilgi kutusu, duyurulmaz.
     * `polite` → `role="status"` (işlem sonucu), `assertive` → `role="alert"` (acil hata / uyarı).
     * Eskiden rol renkten türetiliyordu: her warning/danger `alert` oluyor, kalıcı kutular araya giriyordu.
     */
    live: {
      type: String,
      default: '',
      validator: (v) => LIVE_MODES.includes(v),
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    /** Sayfa üstünde ince, tam genişlikte durum çubuğu. Metin + CTA tek satır. */
    banner: {
      type: Boolean,
      default: false,
    },
    /**
     * Kullanımdan kalktı — alert tek görünümdür; kenarlık temadan gelir (`--ui-alert-border-width`).
     * Eski kullanımlar kırılmasın diye kabul edilir, etkisi yoktur.
     */
    soft: {
      type: Boolean,
      default: true,
    },
    /**
     * Varsayılan slot’u açıklamanın altına değil, satırın sağına koyar.
     * `banner` zaten sağ CTA kullanır; bu prop kart / soft alert için.
     */
    actionsEnd: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['dismiss'],
  computed: {
    alertRole() {
      if (this.live === 'assertive') return 'alert'
      if (this.live === 'polite') return 'status'
      return undefined
    },
    toneLabel() {
      const fallback = { info: 'Info', success: 'Success', warning: 'Warning', danger: 'Error' }
      if (typeof this.$t === 'function') return this.$t(`ui.alert.tone.${this.color}`)
      return fallback[this.color] || fallback.info
    },
    resolvedIcon() {
      return this.icon || COLOR_ICON[this.color] || COLOR_ICON.info
    },
    iconToneClass() {
      return COLOR_ICON_CLASS[this.color] || COLOR_ICON_CLASS.info
    },
    resolvedActionsEnd() {
      return Boolean(this.banner || this.actionsEnd)
    },
    rootClasses() {
      return cn(
        `ui-alert ui-alert--${this.color}`,
        this.banner ? 'ui-alert--banner' : '',
        this.actionsEnd && !this.banner ? 'ui-alert--actions-end' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    dismissLabel() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.alert.dismiss')
      }
      return 'Kapat'
    },
  },
  methods: {
    onDismiss() {
      this.$emit('dismiss')
    },
  },
}
</script>
