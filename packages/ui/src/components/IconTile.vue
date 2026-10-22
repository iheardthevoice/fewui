<template>
  <span
    :class="rootClass"
    :style="[$attrs.style, hexStyle]"
    aria-hidden="true"
    v-bind="passthroughAttrs"
  >
    <ui-icon
      :name="icon"
      :type="resolvedIconType"
      :size="iconSize"
    />
  </span>
</template>

<script>
import { cn } from '../utils/cn.js'
import { contrastTextForHex, normalizeHexColor } from '../utils/hex-color.js'
import { iconTypeProp, themeIconTypeComputed } from '../theme/icon-type-prop.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'

const TILE_COLORS = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']
const TILE_VARIANTS = ['soft', 'solid']
const TILE_SIZES = ['sm', 'md', 'lg']
const TILE_SHAPES = ['rounded', 'circle']

const ICON_SIZE_BY_TILE = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

/**
 * Renkli kare / daire içinde ikon — liste satırı, ayar satırı, metrik kartı ve boş durum başlığı.
 * Ton ortak `color` kümesinden gelir; boş `color` nötr (muted) karodur. Marka / kategori rengi için `hex`.
 */
export default {
  name: 'IconTile',
  mixins: [uiDefaultsMixin],
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconType: iconTypeProp,
    /** `primary | secondary | success | warning | info | danger`; boş → nötr */
    color: {
      type: String,
      default: '',
      validator: (v) => !v || TILE_COLORS.includes(v),
    },
    /** `soft`: tonun açık zemini + ton rengi ikon · `solid`: dolu ton + ön plan rengi */
    variant: {
      type: String,
      default: 'soft',
      validator: (v) => TILE_VARIANTS.includes(v),
    },
    /** Geçerli hex (#RGB / #RRGGBB); verilirse `color` yerine kullanılır */
    hex: {
      type: String,
      default: '',
    },
    /** sm 28px · md 40px · lg 44px */
    size: {
      type: String,
      default: 'md',
      validator: (v) => TILE_SIZES.includes(v),
    },
    shape: {
      type: String,
      default: 'rounded',
      validator: (v) => TILE_SHAPES.includes(v),
    },
  },
  computed: {
    ...themeIconTypeComputed(),
    normalizedHex() {
      return normalizeHexColor(this.hex)
    },
    iconSize() {
      return ICON_SIZE_BY_TILE[this.size] || 'md'
    },
    rootClass() {
      const tone = this.normalizedHex ? 'hex' : this.color || 'muted'
      return cn(
        'ui-icon-tile',
        `ui-icon-tile--${this.size}`,
        `ui-icon-tile--${this.shape}`,
        `ui-icon-tile--${this.variant}`,
        `ui-icon-tile--${tone}`,
        this.$attrs.class,
      )
    },
    hexStyle() {
      if (!this.normalizedHex) return undefined
      if (this.variant === 'solid') {
        return {
          '--ui-icon-tile-bg': this.normalizedHex,
          '--ui-icon-tile-fg': contrastTextForHex(this.normalizedHex),
        }
      }
      return {
        '--ui-icon-tile-bg': `color-mix(in oklab, ${this.normalizedHex} 14%, transparent)`,
        '--ui-icon-tile-fg': this.normalizedHex,
      }
    },
    passthroughAttrs() {
      const { class: _c, style: _s, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
