<template>
  <nav
    :class="rootClass"
    :aria-label="resolvedAriaLabel"
  >
    <ul class="ui-pagination-list">
      <li class="ui-pagination-item">
        <Button
          class="ui-pagination-nav ui-icon--dir"
          variant="ghost"
          color="secondary"
          cubed
          prefix-icon="chevron-left"
          :size="size"
          :disabled="disabled || currentPage <= 1"
          :aria-label="prevLabel"
          @click="goTo(currentPage - 1)"
        />
      </li>
      <li
        v-for="entry in entries"
        :key="entry.key"
        class="ui-pagination-item"
        :aria-hidden="entry.ellipsis ? 'true' : undefined"
      >
        <span
          v-if="entry.ellipsis"
          class="ui-pagination-ellipsis"
        >
          <ui-icon
            name="ellipsis"
            size="xs"
          />
        </span>
        <Button
          v-else
          class="ui-pagination-page"
          :variant="entry.page === currentPage ? 'muted' : 'ghost'"
          color="secondary"
          :size="size"
          :disabled="disabled"
          :aria-label="pageLabel(entry.page)"
          :aria-current="entry.page === currentPage ? 'page' : undefined"
          @click="goTo(entry.page)"
        >
          {{ entry.page }}
        </Button>
      </li>
      <li class="ui-pagination-item">
        <Button
          class="ui-pagination-nav ui-icon--dir"
          variant="ghost"
          color="secondary"
          cubed
          prefix-icon="chevron-right"
          :size="size"
          :disabled="disabled || currentPage >= totalPages"
          :aria-label="nextLabel"
          @click="goTo(currentPage + 1)"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import Button from './Button.vue'
import { CONTROL_SIZES } from '../utils/sizes.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'

const SIZES = [...CONTROL_SIZES]

function range(from, to) {
  const out = []
  for (let page = from; page <= to; page += 1) out.push(page)
  return out
}

export default {
  name: 'Pagination',
  components: { Button },
  props: {
    /** Bulunulan sayfa (1 tabanlı). */
    modelValue: {
      type: Number,
      default: 1,
    },
    /** Toplam kayıt sayısı; `pageSize` ile sayfa sayısına çevrilir. */
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    /** Sayfa sayısı doğrudan verilir; `total` / `pageSize` yerine geçer. */
    pageCount: {
      type: Number,
      default: null,
    },
    /** Bulunulan sayfanın her iki yanında gösterilen sayfa sayısı. */
    siblingCount: {
      type: Number,
      default: 1,
    },
    /** İlk ve son sayfa düğmeleri (aradaki boşluk `…`). */
    showEdges: {
      type: Boolean,
      default: true,
    },
    /** Verilmezse tema kontrol boyutu (düğmeler `ui-button` ile aynı yükseklikte). */
    size: {
      type: String,
      default: undefined,
      validator: (v) => v == null || SIZES.includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Verilmezse `ui.pagination.ariaLabel`. */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    totalPages() {
      if (this.pageCount != null) return Math.max(1, Math.floor(this.pageCount) || 1)
      const size = Math.max(1, Math.floor(this.pageSize) || 1)
      return Math.max(1, Math.ceil(Math.max(0, this.total) / size))
    },
    currentPage() {
      return Math.min(Math.max(1, Math.floor(this.modelValue) || 1), this.totalPages)
    },
    /**
     * Öğe sayısı sayfa değişirken sabit kalır (düğmeler imlecin altından kaymaz):
     * uçlara yakınken pencere diğer yana doğru genişler.
     */
    entries() {
      const count = this.totalPages
      const current = this.currentPage
      const siblings = Math.max(0, Math.floor(this.siblingCount) || 0)
      const page = (value) => ({ key: `page-${value}`, page: value })
      const ellipsis = (side) => ({ key: `ellipsis-${side}`, ellipsis: true })

      if (!this.showEdges) {
        const size = Math.min(count, siblings * 2 + 1)
        const start = Math.min(Math.max(1, current - siblings), count - size + 1)
        return range(start, start + size - 1).map(page)
      }

      // ilk + son + bulunulan + 2 × komşu + 2 × `…`
      const slots = siblings * 2 + 5
      if (count <= slots) return range(1, count).map(page)

      const left = Math.max(current - siblings, 1)
      const right = Math.min(current + siblings, count)
      const hasLeftGap = left > 2
      const hasRightGap = right < count - 1
      const edgeRun = siblings * 2 + 3

      if (!hasLeftGap && hasRightGap) {
        return [...range(1, edgeRun).map(page), ellipsis('end'), page(count)]
      }
      if (hasLeftGap && !hasRightGap) {
        return [page(1), ellipsis('start'), ...range(count - edgeRun + 1, count).map(page)]
      }
      return [page(1), ellipsis('start'), ...range(left, right).map(page), ellipsis('end'), page(count)]
    },
    resolvedAriaLabel() {
      return this.ariaLabel || resolveUiText(this, 'ui.pagination.ariaLabel', 'Pagination')
    },
    prevLabel() {
      return resolveUiText(this, 'ui.pagination.prev', 'Previous page')
    },
    nextLabel() {
      return resolveUiText(this, 'ui.pagination.next', 'Next page')
    },
    rootClass() {
      return ['ui-pagination', this.disabled ? 'ui-pagination--disabled' : '']
    },
  },
  methods: {
    /** `ui.pagination.page` = "Sayfa {page}"; `resolveUiText` parametre taşımadığı için burada çözülür. */
    pageLabel(page) {
      if (typeof this.$t === 'function') {
        const value = this.$t('ui.pagination.page', { page })
        if (value != null && value !== '' && value !== 'ui.pagination.page') return value
      }
      return `Page ${page}`
    },
    goTo(page) {
      if (this.disabled) return
      const next = Math.min(Math.max(1, page), this.totalPages)
      if (next === this.currentPage) return
      const hadFocus = this.$el.contains(document.activeElement)
      this.$emit('update:modelValue', next)
      this.$emit('change', next)
      // Uçta önceki / sonraki düğmesi devre dışı kalınca odak kaybolur; bulunulan sayfaya taşınır.
      if (hadFocus) {
        this.$nextTick(() => {
          const active = document.activeElement
          if (this.$el.contains(active) && !active.disabled) return
          this.$el.querySelector('[aria-current="page"]')?.focus()
        })
      }
    },
  },
}
</script>
