<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="title || showIcon"
      :class="['ui-field__title-row', { 'ui-field__title-row--tile': showIcon && iconTile }]"
    >
      <ui-icon-tile
        v-if="showIcon && iconTile"
        :icon="icon"
        :icon-type="resolvedIconType"
        :color="iconTileColor"
        size="sm"
      />
      <span
        v-else-if="showIcon"
        :class="titleIconClass"
        aria-hidden="true"
      >
        <ui-icon
          :name="icon"
          :type="resolvedIconType"
          size="md"
        />
      </span>
      <span
        v-if="title"
        class="ui-field__title"
      >
        {{ title }}
      </span>
    </div>
    <div
      v-if="hasValue"
      class="ui-field__value"
    >
      <slot />
    </div>
    <p
      v-if="subtitle"
      class="ui-field__subtitle"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { iconTypeProp, themeIconTypeComputed } from '../theme/icon-type-prop.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'

/** `md` metrik / ayar değeri (16px, medium); `sm` detay listesi değeri (14px, normal) */
const SIZES = ['sm', 'md']

export default {
  name: 'Field',
  mixins: [uiDefaultsMixin],
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    /** true: yuvarlatılmış arka plan (kenarlık yok). */
    card: {
      type: Boolean,
      default: false,
    },
    /**
     * Değer boyutu. `md` (varsayılan): metrik ve ayar özeti — 16px medium. `sm`: salt okunur detay
     * listesi (kayıt detayı, özet) — 14px normal; etiket aynı kalır (12px büyük harf, soluk).
     */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /** Grid / flex hücrede kart yüksekliğini eşitlemek için `h-full`. */
    fill: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconType: iconTypeProp,
    /**
     * Başlık ikonu rengi: ortak `color` kümesi (`primary` | `secondary` | `success` | `warning` | `danger` | `info`) veya `muted` | ''.
     * Boş / muted → varsayılan muted-foreground.
     */
    iconTone: {
      type: String,
      default: '',
      validator: (v) =>
        !v || ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'muted'].includes(v),
    },
    /** Başlık ikonu `ui-icon-tile` (sm) içinde, `iconTone` zemininde gösterilir. */
    iconTile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...themeIconTypeComputed(),
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    hasValue() {
      return Boolean(this.$slots.default)
    },
    showIcon() {
      return Boolean(this.icon)
    },
    iconTileColor() {
      return this.iconTone === 'muted' ? '' : this.iconTone
    },
    titleIconClass() {
      const tone = this.iconTone || 'muted'
      return cn('ui-field__title-icon', `ui-field__title-icon--${tone}`)
    },
    rootClass() {
      return cn(
        'ui-field',
        this.size === 'sm' && 'ui-field--sm',
        this.card && 'ui-field--card',
        this.fill && 'h-full min-h-0 flex flex-col',
        this.$attrs.class,
      )
    },
  },
}
</script>
