<template>
  <div
    :class="rootClasses"
    :role="alertRole"
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
          {{ title }}
        </p>
        <p
          v-if="description"
          class="ui-alert-description ui-text-default"
        >
          {{ description }}
        </p>
      </div>
      <div
        v-if="$slots.default"
        class="ui-alert-slot"
      >
        <slot />
      </div>
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

const COLOR_ICON_CLASS = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
}

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
     * Dialog / form / sayfa çağrı kutusu (varsayılan).
     * Bordersız, kompakt, `rounded-3xl` — banner ile birlikte kullanılmaz.
     */
    soft: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['dismiss'],
  computed: {
    alertRole() {
      return this.color === 'danger' || this.color === 'warning' ? 'alert' : 'status'
    },
    resolvedIcon() {
      return this.icon || COLOR_ICON[this.color] || COLOR_ICON.info
    },
    iconToneClass() {
      return COLOR_ICON_CLASS[this.color] || COLOR_ICON_CLASS.info
    },
    rootClasses() {
      return cn(
        `ui-alert ui-alert--${this.color}`,
        this.banner ? 'ui-alert--banner' : '',
        this.soft && !this.banner ? 'ui-alert--soft' : '',
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
