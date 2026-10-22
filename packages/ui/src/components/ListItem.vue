<template>
  <component
    :is="tag"
    :class="itemClass"
    role="listitem"
    @click="onRootClick"
  >
    <component
      :is="actionable ? 'ui-button' : 'div'"
      v-if="usesRowLayout"
      v-bind="actionBind"
      :class="actionable ? undefined : 'ui-list-item-row'"
      @click="onClick"
    >
      <span :class="actionable ? 'ui-list-item-row' : 'contents'">
        <ui-icon-tile
          v-if="icon"
          :icon="icon"
          :icon-type="iconType"
          :color="iconColor"
          :hex="iconHex"
          :variant="resolvedIconVariant"
          :size="tileSize"
        />
        <span
          v-else-if="$slots.prefix"
          class="ui-list-item-prefix-slot shrink-0"
        >
          <slot name="prefix" />
        </span>

        <span class="ui-list-item-text">
          <span :class="titleClass">
            <slot name="title">{{ title }}</slot>
          </span>
          <span
            v-if="description || $slots.description"
            class="ui-list-item-description"
          >
            <slot name="description">{{ description }}</slot>
          </span>
          <slot />
        </span>

        <span
          v-if="value || $slots.trailing"
          class="ui-list-item-trailing"
        >
          <span
            v-if="value"
            class="ui-list-item-value"
          >{{ value }}</span>
          <slot name="trailing" />
        </span>

        <span
          v-if="resolvedTrailingIcon"
          class="ui-list-item-chevron"
          aria-hidden="true"
        >
          <ui-icon
            :name="resolvedTrailingIcon"
            type="solid"
            size="sm"
          />
        </span>
      </span>
    </component>

    <template v-else>
      <span
        v-if="prefixIcon"
        class="ui-list-item-prefix"
        aria-hidden="true"
      >
        <ui-icon
          :name="prefixIcon"
          :type="resolvedPrefixIconType"
          size="xs"
          class="ui-list-item-prefix-icon"
        />
      </span>
      <span
        v-else-if="$slots.prefix"
        class="ui-list-item-prefix-slot shrink-0"
      >
        <slot name="prefix" />
      </span>
      <div class="ui-list-item-content min-w-0 flex-1">
        <slot />
      </div>
      <div
        v-if="$slots.trailing"
        class="ui-list-item-trailing shrink-0"
      >
        <slot name="trailing" />
      </div>
    </template>
  </component>
</template>

<script>
import { cn } from '../utils/cn.js'
import { iconTypeProp } from '../theme/icon-type-prop.js'
import { resolveThemeIconType } from '../theme/resolve-theme-default.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'
import { CONTROL_SIZES } from '../utils/sizes.js'

const ALIGNS = ['start', 'center']
const TAGS = ['li', 'div']
const SIZES = CONTROL_SIZES
const ITEM_COLORS = ['danger']
const TRAILING_ICONS = ['chevron', 'external', 'none']

const TILE_SIZE_BY_ITEM = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
}

/**
 * Liste satırı.
 *
 * Serbest içerik: varsayılan slot + `prefix` / `trailing` slotları veya `prefixIcon` (geriye uyumlu).
 * Satır düzeni: `title` / `description` / `value` / `icon` verildiğinde ikon karosu, başlık, açıklama,
 * sağda değer ve (tıklanabilirse) chevron. `to` veya `interactive` satırı düğme / bağlantı yapar.
 */
export default {
  name: 'ListItem',
  mixins: [uiDefaultsMixin],
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`) — serbest içerik düzeni. */
    prefixIcon: {
      type: String,
      default: null,
    },
    prefixIconType: iconTypeProp,
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: 'start',
      validator: (v) => ALIGNS.includes(v),
    },
    /** `div`: `role="list"` taşıyan `div` içinde (ör. kart içi ayar listesi) */
    tag: {
      type: String,
      default: 'li',
      validator: (v) => TAGS.includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** Sağdaki kısa durum metni (chevron'un solunda) */
    value: {
      type: String,
      default: '',
    },
    /** Satır başı ikon karosu (`ui-icon-tile`) */
    icon: {
      type: String,
      default: '',
    },
    iconType: iconTypeProp,
    /** İkon karosu tonu (`ui-icon-tile` `color`) */
    iconColor: {
      type: String,
      default: '',
    },
    /** İkon karosu hex rengi (`ui-icon-tile` `hex`) — kategori / marka rengi */
    iconHex: {
      type: String,
      default: '',
    },
    /** `soft` | `solid` — hex verildiğinde varsayılan `solid` */
    iconVariant: {
      type: String,
      default: '',
    },
    /** `danger`: başlık tehlike tonunda (ör. hesabı sil) */
    color: {
      type: String,
      default: '',
      validator: (v) => !v || ITEM_COLORS.includes(v),
    },
    /** sm / md: 14px başlık · lg: 16px başlık */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /** `vue-router` hedefi — satır bağlantı olur */
    to: {
      type: [String, Object],
      default: undefined,
    },
    /** Satır düğme olur ve `click` yayar */
    interactive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Tıklanabilir satırda sağ gösterge: `chevron` | `external` | `none` */
    trailingIcon: {
      type: String,
      default: 'chevron',
      validator: (v) => TRAILING_ICONS.includes(v),
    },
  },
  emits: ['click'],
  computed: {
    resolvedPrefixIconType() {
      return resolveThemeIconType(this.uiDefaults, this.prefixIconType)
    },
    usesRowLayout() {
      return Boolean(this.title || this.description || this.value || this.icon || this.$slots.title)
    },
    actionable() {
      return this.interactive || this.to != null
    },
    actionBind() {
      if (!this.actionable) return {}
      return {
        type: 'button',
        variant: 'nav',
        color: this.color === 'danger' ? 'danger' : 'secondary',
        size: 'lg',
        block: true,
        textAlign: 'left',
        wrap: true,
        disabled: this.disabled,
        to: this.to,
      }
    },
    tileSize() {
      return TILE_SIZE_BY_ITEM[this.size] || 'sm'
    },
    resolvedIconVariant() {
      return this.iconVariant || (this.iconHex ? 'solid' : 'soft')
    },
    resolvedTrailingIcon() {
      if (!this.actionable || this.$slots.trailing) return ''
      if (this.trailingIcon === 'external') return 'arrow-up-right-from-square'
      if (this.trailingIcon === 'chevron') return 'chevron-right'
      return ''
    },
    titleClass() {
      return cn('ui-list-item-title', this.color === 'danger' ? 'ui-list-item-title--danger' : '')
    },
    itemClass() {
      if (this.usesRowLayout) {
        return cn(
          'ui-list-item',
          'ui-list-item--row',
          `ui-list-item--${this.size}`,
          this.actionable ? 'ui-list-item--actionable' : '',
          this.disabled ? 'ui-list-item--disabled' : '',
        )
      }
      return cn(
        'ui-list-item',
        this.align === 'center' ? 'ui-list-item--center' : '',
      )
    },
  },
  methods: {
    onClick(event) {
      if (!this.actionable || this.disabled) return
      this.$emit('click', event)
    },
    /** Serbest içerik düzeninde (geriye uyumlu) satır tıklaması `click` olarak iletilir. */
    onRootClick(event) {
      if (this.usesRowLayout) return
      this.$emit('click', event)
    },
  },
}
</script>
