<template>
  <tr
    :class="rootClass"
    :tabindex="interactive ? 0 : undefined"
    @click="onClick"
    @keydown="onKeydown"
  >
    <slot />
  </tr>
</template>

<script>
import { cn } from '../utils/cn.js'

const HOVERS = ['none', 'soft', 'strong']

/** Satırın içindeki kendi başına etkileşimli öğeler: tıklama / tuş satırı tetiklemez. */
const INNER_CONTROL_SELECTOR = [
  'a[href]',
  'button',
  'input',
  'select',
  'textarea',
  'label',
  'summary',
  '[role="button"]',
  '[role="link"]',
  '[role="menu"]',
  '[role="menuitem"]',
  '[role="checkbox"]',
  '[role="switch"]',
  '[role="combobox"]',
  '[contenteditable="true"]',
  '[data-row-click-ignore]',
].join(',')

/**
 * Tablo satırı. `interactive` satırı klavyeyle kullanılabilir yapar: Tab ile odaklanır,
 * Enter / Boşluk `click` yayar, ok tuşları ve Home / End aynı tablonun satırları arasında gezer.
 */
export default {
  name: 'TableRow',
  props: {
    hover: {
      type: String,
      default: undefined,
      validator: (v) => v == null || HOVERS.includes(v),
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    /**
     * Satır bir eylem taşır: odaklanabilir (`tabindex="0"`), Enter / Boşluk `click` yayar,
     * iç denetimlere (düğme, bağlantı, alan) yapılan tıklama satırı tetiklemez.
     */
    interactive: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  computed: {
    rootClass() {
      return cn(
        'ui-table-row',
        this.hover === 'none' && 'ui-table-row--no-hover',
        this.hover === 'soft' && 'ui-table-row--soft-hover',
        this.hover === 'strong' && 'ui-table-row--strong-hover',
        this.interactive && 'ui-table-row--interactive',
        this.clickable && 'ui-table-row--clickable',
        this.selected && 'ui-table-row--selected',
        this.$attrs.class,
      )
    },
  },
  methods: {
    isFromInnerControl(event) {
      const target = event.target
      if (!(target instanceof Element) || target === this.$el) return false
      const control = target.closest(INNER_CONTROL_SELECTOR)
      return Boolean(control && control !== this.$el && this.$el.contains(control))
    },
    onClick(event) {
      if (this.interactive && this.isFromInnerControl(event)) return
      this.$emit('click', event)
    },
    siblingRows() {
      const table = this.$el.closest('table')
      if (!table) return [this.$el]
      return Array.from(table.querySelectorAll('tr.ui-table-row--interactive')).filter(
        (row) => row.closest('table') === table,
      )
    },
    onKeydown(event) {
      // Yalnız satırın kendisi odaktayken; iç denetimlerin tuşları onlara aittir.
      if (!this.interactive || event.target !== this.$el) return
      if (event.altKey || event.ctrlKey || event.metaKey) return
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        this.$emit('click', event)
        return
      }
      const moves = { ArrowDown: 1, ArrowUp: -1, Home: 'first', End: 'last' }
      const move = moves[event.key]
      if (move === undefined) return
      const rows = this.siblingRows()
      const index = rows.indexOf(this.$el)
      let next = index
      if (move === 'first') next = 0
      else if (move === 'last') next = rows.length - 1
      else next = Math.min(rows.length - 1, Math.max(0, index + move))
      event.preventDefault()
      if (rows[next] && rows[next] !== this.$el) rows[next].focus()
    },
  },
}
</script>
