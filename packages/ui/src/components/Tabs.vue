<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'
import { resolveSegmentedTabSize } from '../utils/resolve-segmented-tab-size.js'
import { useId } from 'vue'

const VARIANTS = ['line', 'segmented']

export default {
  name: 'Tabs',
  inheritAttrs: false,
  props: {
    /** Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). */
    modelValue: {
      type: [String, Number],
      default: null,
    },
    /** `line` — alt çizgi; `segmented` — Apple tarzı segment kontrolü (ikon + etiket, yatay). */
    variant: {
      type: String,
      default: 'line',
      validator: (v) => VARIANTS.includes(v),
    },
    /** `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. */
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (v) => v === 'horizontal' || v === 'vertical',
    },
    /** `full` — segmented tab listesi tam genişlik (hub / show sayfaları). */
    fit: {
      type: String,
      default: '',
      validator: (v) => v === '' || v === 'full',
    },
    /** Segmented yükseklik / tipografi — `sm` | `md` (varsayılan) | `lg`. */
    size: {
      type: String,
      default: undefined,
      validator: (v) => v == null || v === 'sm' || v === 'md' || v === 'lg',
    },
    /** Segmented iz arka planını kaldırır (mobil sabit üst şerit vb.). */
    transparent: {
      type: Boolean,
      default: false,
    },
    /** Dar alanlarda (sheet, mobil) segmented listede yatay kaydırma — varsayılan açık. */
    scrollable: {
      type: Boolean,
      default: true,
    },
    /**
     * Button ile aynı satırda / hizada — tab yüksekliği button ile aynı kalır (`--ui-control-h-*`).
     * Varsayılan kapalı: segmented tab bir kademe büyük (`--ui-tab-h-*`).
     */
    inlineControls: {
      type: Boolean,
      default: false,
    },
    /**
     * Native mobil alt dock — `cap-ios` / `cap-android` ile liquid glass veya opak blur.
     * Web’de etkisiz; yalnızca `variant="segmented"` ile kullanılır.
     */
    nativeChrome: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup() {
    // Vue useId is stable across SSR ↔ client (unlike module counters on Workers).
    return { baseId: useId() }
  },
  provide() {
    return {
      uiTabs: this,
    }
  },
  computed: {
    resolvedSize() {
      if (this.variant === 'segmented') {
        return resolveSegmentedTabSize(this.size, {
          inlineControls: this.inlineControls,
          nativeChrome: this.nativeChrome,
        })
      }
      return resolveThemeControlSize(this.size, { key: 'controlSize', defaultSize: 'md' })
    },
    rootClass() {
      return cn(
        'ui-tabs flex min-w-0 flex-col',
        this.variant === 'segmented' ? 'ui-tabs--segmented' : 'ui-tabs--line',
        this.orientation === 'vertical' ? 'ui-tabs--vertical' : '',
        this.fit === 'full' ? 'ui-tabs--fit-full' : '',
        this.variant === 'segmented' && this.resolvedSize === 'lg' ? 'ui-tabs--segmented-lg' : '',
        this.variant === 'segmented' && this.resolvedSize === 'sm' ? 'ui-tabs--segmented-sm' : '',
        this.inlineControls ? 'ui-tabs--inline-controls' : '',
        this.transparent ? 'ui-tabs--transparent' : '',
        this.nativeChrome ? 'ui-tabs--native-chrome' : '',
        this.scrollable ? 'ui-tabs--scrollable' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  methods: {
    setValue(v) {
      this.$emit('update:modelValue', v)
    },
    tabSlug(v) {
      return String(v).replace(/[^a-zA-Z0-9_-]/g, '_')
    },
    triggerId(value) {
      return `${this.baseId}-tab-${this.tabSlug(value)}`
    },
    panelId(value) {
      return `${this.baseId}-panel-${this.tabSlug(value)}`
    },
    isSelected(value) {
      return Object.is(this.modelValue, value)
    },
  },
}
</script>
