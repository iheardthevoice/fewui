<template>
  <div
    :class="rootClass"
    @keydown="onKeydown"
  >
    <slot />
  </div>
</template>

<script>
import { CONTROL_SIZES } from '../utils/sizes.js'
import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'

const VARIANTS = ['line', 'card']
const SIZES = [...CONTROL_SIZES]

export default {
  name: 'Accordion',
  mixins: [uiDefaultsMixin],
  provide() {
    return {
      uiAccordion: this,
    }
  },
  props: {
    /**
     * Açık öğe(ler): tekli kullanımda `value` (yoksa `null`), `multiple` ile dizi.
     * Verilmezse bileşen kendi iç durumunu yönetir (`defaultValue`).
     */
    modelValue: {
      type: [String, Number, Array],
      default: undefined,
    },
    /** Kontrolsüz kullanımda ilk açık öğe(ler). */
    defaultValue: {
      type: [String, Number, Array],
      default: null,
    },
    /** Aynı anda birden fazla öğe açık kalabilir. */
    multiple: {
      type: Boolean,
      default: false,
    },
    /** Tekli kullanımda açık öğe yeniden tıklanınca kapanır. `false`: her zaman bir öğe açık kalır. */
    collapsible: {
      type: Boolean,
      default: true,
    },
    /** `line` — ayırıcı çizgili satırlar; `card` — her öğe ayrı yüzey. */
    variant: {
      type: String,
      default: 'line',
      validator: (v) => VARIANTS.includes(v),
    },
    /** Satır dikey dolgusu; verilmezse tema kontrol boyutu. */
    size: {
      type: String,
      default: undefined,
      validator: (v) => v == null || SIZES.includes(v),
    },
    /** Başlık düğmesini saran başlık seviyesi (`h2`–`h6`); sayfa hiyerarşisine göre seçilir. */
    headingLevel: {
      type: Number,
      default: 3,
      validator: (v) => Number.isInteger(v) && v >= 1 && v <= 6,
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      internalValue: this.defaultValue,
    }
  },
  computed: {
    resolvedSize() {
      return resolveThemeControlSize(this.uiDefaults, this.size, { key: 'controlSize', defaultSize: 'md' })
    },
    /** Tek biçim: her zaman dizi. */
    openValues() {
      const raw = this.modelValue !== undefined ? this.modelValue : this.internalValue
      if (Array.isArray(raw)) return this.multiple ? raw : raw.slice(0, 1)
      return raw == null || raw === '' ? [] : [raw]
    },
    rootClass() {
      return ['ui-accordion', `ui-accordion--${this.variant}`, `ui-accordion--${this.resolvedSize}`]
    },
  },
  methods: {
    isOpen(value) {
      return this.openValues.some((v) => Object.is(v, value))
    },
    /** Tekli + `collapsible: false`: açık öğe kapatılamaz (APG: düğme `aria-disabled`). */
    isLocked(value) {
      return !this.multiple && !this.collapsible && this.isOpen(value)
    },
    toggle(value) {
      const open = this.isOpen(value)
      let next
      if (this.multiple) {
        next = open ? this.openValues.filter((v) => !Object.is(v, value)) : [...this.openValues, value]
      } else if (open) {
        if (!this.collapsible) return
        next = null
      } else {
        next = value
      }
      this.internalValue = next
      this.$emit('update:modelValue', next)
      this.$emit('change', next)
    },
    /** İç içe akordeonda yalnız bu akordeonun başlıkları gezilir. */
    triggers() {
      const root = this.$el
      if (!root?.querySelectorAll) return []
      return [...root.querySelectorAll('.ui-accordion-trigger:not(:disabled)')].filter(
        (el) => el.closest('.ui-accordion') === root,
      )
    },
    /** APG Accordion: ok tuşları başlıklar arasında dolaşır (uçlarda sarar), Home / End uçlara gider. */
    onKeydown(e) {
      const target = e.target
      if (!target?.classList?.contains('ui-accordion-trigger')) return
      const items = this.triggers()
      const current = items.indexOf(target)
      if (current < 0) return
      const last = items.length - 1
      const moves = {
        ArrowDown: current === last ? 0 : current + 1,
        ArrowUp: current === 0 ? last : current - 1,
        Home: 0,
        End: last,
      }
      if (!(e.key in moves)) return
      e.preventDefault()
      items[moves[e.key]].focus()
    },
  },
}
</script>
