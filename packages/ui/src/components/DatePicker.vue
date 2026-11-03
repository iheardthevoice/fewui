<template>
  <div
    :class="[
      'ui-datepicker',
      embedded ? 'ui-datepicker--embedded' : '',
      !embedded && block ? 'ui-datepicker--block w-full' : '',
      !embedded && !block ? 'w-auto shrink-0' : '',
      disabled ? 'pointer-events-none opacity-50' : '',
      $attrs.class,
    ]"
  >
    <template v-if="embedded">
      <div class="ui-datepicker-panel w-full min-w-[17rem]">
        <div class="mb-3 flex items-center justify-between gap-2">
          <ui-button
            variant="ghost"
            color="primary"
            cubed
            prefix-icon="chevron-left"
            aria-label="Previous month"
            @click.stop="shiftMonth(-1)"
          />
          <span class="text-sm font-medium tabular-nums text-foreground">{{ monthTitle }}</span>
          <ui-button
            variant="ghost"
            color="primary"
            cubed
            prefix-icon="chevron-right"
            aria-label="Next month"
            @click.stop="shiftMonth(1)"
          />
        </div>
          <div class="ui-datepicker-weekdays mb-2">
            <span
              v-for="w in weekdayLabels"
              :key="w.key"
              :title="w.long"
            >{{ w.short }}</span>
          </div>
          <div
            class="ui-datepicker-grid"
            @keydown="onGridKeydown"
          >
            <ui-button
              v-for="cell in calendarCells"
              :key="cell.key"
              :variant="dayVariant(cell)"
              :color="dayColor(cell)"
              size="sm"
              cubed
              :disabled="cell.disabled"
              :data-key="cell.key"
              :tabindex="cell.key === rovingKey ? 0 : -1"
              :aria-label="cellLabel(cell)"
              :aria-pressed="cell.sel ? 'true' : 'false'"
              :aria-current="cell.today ? 'date' : undefined"
              :aria-disabled="cell.disabled ? 'true' : undefined"
              :data-outside="cell.inMonth ? undefined : 'true'"
              :data-today="cell.today ? 'true' : undefined"
              @click="pick(cell)"
            >
              {{ cell.d }}
            </ui-button>
          </div>
        <div
          v-if="showQuick"
          class="ui-datepicker-quick"
        >
          <ui-button
            type="button"
            variant="ghost"
            color="secondary"
            size="sm"
            block
            :disabled="yesterdayQuickDisabled"
            @click="pickQuick('yesterday')"
          >
            {{ resolvedYesterdayLabel }}
          </ui-button>
          <ui-button
            type="button"
            variant="ghost"
            color="secondary"
            size="sm"
            block
            :disabled="todayQuickDisabled"
            @click="pickQuick('today')"
          >
            {{ resolvedTodayLabel }}
          </ui-button>
          <ui-button
            type="button"
            variant="ghost"
            color="secondary"
            size="sm"
            block
            :disabled="tomorrowQuickDisabled"
            @click="pickQuick('tomorrow')"
          >
            {{ resolvedTomorrowLabel }}
          </ui-button>
        </div>
      </div>
    </template>

    <ui-popover
      v-else
      v-model:open="menuOpen"
      placement="bottom-start"
      :match-trigger-width="!$slots.trigger"
      :disabled="disabled"
    >
      <template #trigger="{ open, toggle, close }">
        <slot
          name="trigger"
          :open="open"
          :toggle="toggle"
          :close="close"
        >
          <ui-button
            type="button"
            :id="resolvedId"
            variant="solid"
            color="input"
            :block="block"
            text-align="left"
            prefix-icon="calendar"
            :disabled="disabled"
            :aria-expanded="open ? 'true' : 'false'"
            :aria-haspopup="true"
            @click="toggle"
          >
            <span
              :class="[
                'min-w-0 flex-1 truncate',
                selectedDate ? 'text-foreground' : 'text-muted-foreground',
              ]"
            >{{ displayText }}</span>
          </ui-button>
        </slot>
      </template>
      <template #content="{ close }">
        <div class="ui-datepicker-panel w-full min-w-[17rem] p-3">
          <div class="mb-3 flex items-center justify-between gap-2">
            <ui-button
              variant="ghost"
              color="primary"
              cubed
              prefix-icon="chevron-left"
              aria-label="Previous month"
              @click.stop="shiftMonth(-1)"
            />
            <span class="text-sm font-medium tabular-nums text-foreground">{{ monthTitle }}</span>
            <ui-button
              variant="ghost"
              color="primary"
              cubed
              prefix-icon="chevron-right"
              aria-label="Next month"
              @click.stop="shiftMonth(1)"
            />
          </div>
          <div class="ui-datepicker-weekdays mb-2">
            <span
              v-for="w in weekdayLabels"
              :key="w.key"
              :title="w.long"
            >{{ w.short }}</span>
          </div>
          <div
            ref="popoverGrid"
            class="ui-datepicker-grid"
            @keydown="onGridKeydown"
          >
            <ui-button
              v-for="cell in calendarCells"
              :key="cell.key"
              :variant="dayVariant(cell)"
              :color="dayColor(cell)"
              size="sm"
              cubed
              :disabled="cell.disabled"
              :data-key="cell.key"
              :tabindex="cell.key === rovingKey ? 0 : -1"
              :aria-label="cellLabel(cell)"
              :aria-pressed="cell.sel ? 'true' : 'false'"
              :aria-current="cell.today ? 'date' : undefined"
              :aria-disabled="cell.disabled ? 'true' : undefined"
              :data-outside="cell.inMonth ? undefined : 'true'"
              :data-today="cell.today ? 'true' : undefined"
              @click="pick(cell, close)"
            >
              {{ cell.d }}
            </ui-button>
          </div>
          <div
            v-if="showQuick"
            class="ui-datepicker-quick"
          >
            <ui-button
              type="button"
              variant="ghost"
              color="secondary"
              size="sm"
              block
              :disabled="yesterdayQuickDisabled"
              @click="pickQuick('yesterday', close)"
            >
              {{ resolvedYesterdayLabel }}
            </ui-button>
            <ui-button
              type="button"
              variant="ghost"
              color="secondary"
              size="sm"
              block
              :disabled="todayQuickDisabled"
              @click="pickQuick('today', close)"
            >
              {{ resolvedTodayLabel }}
            </ui-button>
            <ui-button
              type="button"
              variant="ghost"
              color="secondary"
              size="sm"
              block
              :disabled="tomorrowQuickDisabled"
              @click="pickQuick('tomorrow', close)"
            >
              {{ resolvedTomorrowLabel }}
            </ui-button>
          </div>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
import { captureReturnFocus, restoreFocus } from '../utils/focus-trap.js'
import { formatDateDisplay, resolveDateDisplayLocale, formatYmdDisplay } from '../utils/format-ymd-display.js'
import { resolveThemeDefault } from '../theme/resolve-theme-default.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import { uiDefaultsMixin } from '../theme/ui-defaults.js'

const nextDatePickerId = createUiIdFactory('ui-datepicker')

function pad2(n) {
  return String(n).padStart(2, '0')
}

function toYmd(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

function parseYmd(s) {
  if (s == null || s === '') return null
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s).trim())
  if (!m) return null
  const y = Number(m[1])
  const mo = Number(m[2]) - 1
  const da = Number(m[3])
  const d = new Date(y, mo, da)
  if (d.getFullYear() !== y || d.getMonth() !== mo || d.getDate() !== da) return null
  return d
}

export default {
  name: 'DatePicker',
  mixins: [uiDefaultsMixin],
  inheritAttrs: false,
  props: {
    /** `YYYY-MM-DD` */
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Pick a date',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: true,
    },
    /**
     * true: tetikleyici/popover yok — paneli doğrudan yerleştir (FieldAction vb.).
     */
    embedded: {
      type: Boolean,
      default: false,
    },
    /** Hızlı seçim satırını göster */
    showQuick: {
      type: Boolean,
      default: true,
    },
    id: {
      type: String,
      default: undefined,
    },
    /** En erken seçilebilir gün (`YYYY-MM-DD`) */
    min: {
      type: String,
      default: '',
    },
    todayLabel: {
      type: String,
      default: '',
    },
    yesterdayLabel: {
      type: String,
      default: '',
    },
    tomorrowLabel: {
      type: String,
      default: '',
    },
    /**
     * Restaurant day-end (`HH:mm`). When set, dün/bugün/yarın and “today”
     * highlight follow the business day (same as backend `toBusinessDate`).
     */
    businessDayEnd: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    const initial = parseYmd(this.modelValue) || new Date()
    return {
      fallbackId: nextDatePickerId(),
      menuOpen: false,
      /** Klavye ile gezilen gün (roving tabindex); seçim değil. */
      focusDate: null,
      viewYear: initial.getFullYear(),
      viewMonth: initial.getMonth(),
    }
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== '' ? this.id : this.fallbackId
    },
    selectedDate() {
      return parseYmd(this.modelValue)
    },
    locale() {
      return resolveDateDisplayLocale(this.$i18n?.locale)
    },
    displayText() {
      if (!this.selectedDate) return this.placeholder
      const format = resolveThemeDefault(this.uiDefaults, undefined, 'dateFormat')
      return formatDateDisplay(this.selectedDate, this.locale, format)
    },
    monthTitle() {
      return new Date(this.viewYear, this.viewMonth, 1).toLocaleString(this.locale, {
        month: 'long',
        year: 'numeric',
      })
    },
    minYmd() {
      return this.min ? String(this.min).trim() : ''
    },
    resolvedTodayLabel() {
      if (this.todayLabel) return this.todayLabel
      return typeof this.$t === 'function' ? this.$t('ui.datePicker.today') : 'Today'
    },
    resolvedYesterdayLabel() {
      if (this.yesterdayLabel) return this.yesterdayLabel
      return typeof this.$t === 'function' ? this.$t('ui.datePicker.yesterday') : 'Yesterday'
    },
    resolvedTomorrowLabel() {
      if (this.tomorrowLabel) return this.tomorrowLabel
      return typeof this.$t === 'function' ? this.$t('ui.datePicker.tomorrow') : 'Tomorrow'
    },
    /** Local calendar date representing the current business “today”. */
    referenceTodayDate() {
      const raw = String(this.businessDayEnd || '').trim()
      if (!/^\d{1,2}:\d{2}$/.test(raw)) {
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth(), now.getDate())
      }
      const [h, m] = raw.split(':').map((part) => Number(part) || 0)
      const shifted = new Date(Date.now() - (h * 60 + m) * 60 * 1000)
      return new Date(shifted.getFullYear(), shifted.getMonth(), shifted.getDate())
    },
    todayQuickDisabled() {
      return this.isQuickDateDisabled(this.referenceTodayDate)
    },
    yesterdayQuickDisabled() {
      const d = new Date(this.referenceTodayDate)
      d.setDate(d.getDate() - 1)
      return this.isQuickDateDisabled(d)
    },
    tomorrowQuickDisabled() {
      const d = new Date(this.referenceTodayDate)
      d.setDate(d.getDate() + 1)
      return this.isQuickDateDisabled(d)
    },
    /** Hafta günü başlıkları dile göre (eskiden sabit "Su Mo Tu" — TR arayüzde İngilizce). Izgara pazardan başlar. */
    weekdayLabels() {
      const sunday = new Date(2024, 0, 7)
      return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate() + i)
        return {
          key: i,
          short: d.toLocaleDateString(this.locale, { weekday: 'short' }).replace('.', ''),
          long: d.toLocaleDateString(this.locale, { weekday: 'long' }),
        }
      })
    },
    /** Izgarada tek Tab durağı: gezilen gün → seçili → bugün → ayın ilk günü. */
    rovingKey() {
      const cells = this.calendarCells.filter((c) => c.inMonth && !c.disabled)
      const target = this.focusDate ? toYmd(this.focusDate) : null
      return (
        cells.find((c) => target && toYmd(c.date) === target)?.key
        || cells.find((c) => c.sel)?.key
        || cells.find((c) => c.today)?.key
        || cells[0]?.key
      )
    },
    calendarCells() {
      const y = this.viewYear
      const m = this.viewMonth
      const first = new Date(y, m, 1)
      const start = new Date(y, m, 1 - first.getDay())
      const todayYmd = toYmd(this.referenceTodayDate)
      const cells = []
      for (let i = 0; i < 42; i += 1) {
        const cur = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
        const inMonth = cur.getMonth() === m && cur.getFullYear() === y
        const d = cur.getDate()
        const ymd = toYmd(cur)
        const key = `${cur.getFullYear()}-${cur.getMonth()}-${cur.getDate()}`
        const sel = !!(this.selectedDate && ymd === toYmd(this.selectedDate))
        const today = todayYmd === ymd
        const disabled = Boolean(this.minYmd && ymd < this.minYmd)
        cells.push({
          key,
          d,
          out: !inMonth,
          date: cur,
          sel,
          today,
          inMonth,
          disabled,
        })
      }
      return cells
    },
  },
  watch: {
    /** Açılınca odak seçili / bugün gününe (WAI-ARIA date picker dialog). */
    menuOpen(open) {
      if (!open) {
        this.focusDate = null
        // Odak takvimdeydi; kapanınca açan düğmeye döner (yoksa sayfa başına düşer).
        const active = document.activeElement
        if (!active || active === document.body || this.$refs.popoverGrid?.contains(active)) {
          restoreFocus(this.returnFocusEl)
        }
        this.returnFocusEl = null
        return
      }
      this.returnFocusEl = captureReturnFocus()
      this.$nextTick(() => requestAnimationFrame(() => this.focusRovingCell(this.$refs.popoverGrid)))
    },
    modelValue() {
      const p = parseYmd(this.modelValue)
      if (p) {
        this.viewYear = p.getFullYear()
        this.viewMonth = p.getMonth()
      }
    },
  },
  methods: {
    isQuickDateDisabled(date) {
      if (!date) return true
      const ymd = toYmd(date)
      return Boolean(this.minYmd && ymd < this.minYmd)
    },
    cellLabel(cell) {
      return cell.date.toLocaleDateString(this.locale, { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' })
    },
    focusRovingCell(grid) {
      grid?.querySelector?.(`[data-key="${this.rovingKey}"]`)?.focus?.()
    },
    /** ← → ±1 gün, ↑ ↓ ±1 hafta, Home/End hafta başı/sonu, PageUp/PageDown ±1 ay. */
    onGridKeydown(e) {
      const grid = e.currentTarget
      const current = this.calendarCells.find((c) => c.key === this.rovingKey)
      if (!current) return
      const d = new Date(current.date)
      const map = {
        ArrowRight: () => d.setDate(d.getDate() + 1),
        ArrowLeft: () => d.setDate(d.getDate() - 1),
        ArrowDown: () => d.setDate(d.getDate() + 7),
        ArrowUp: () => d.setDate(d.getDate() - 7),
        Home: () => d.setDate(d.getDate() - d.getDay()),
        End: () => d.setDate(d.getDate() + (6 - d.getDay())),
        PageDown: () => d.setMonth(d.getMonth() + 1),
        PageUp: () => d.setMonth(d.getMonth() - 1),
      }
      if (!map[e.key]) return
      e.preventDefault()
      map[e.key]()
      this.focusDate = d
      this.viewYear = d.getFullYear()
      this.viewMonth = d.getMonth()
      this.$nextTick(() => this.focusRovingCell(grid))
    },
    shiftMonth(delta) {
      const d = new Date(this.viewYear, this.viewMonth + delta, 1)
      this.viewYear = d.getFullYear()
      this.viewMonth = d.getMonth()
    },
    pick(cell, close) {
      if (!cell.date || cell.disabled) return
      const ymd = toYmd(cell.date)
      this.$emit('update:modelValue', ymd)
      this.$emit('change', ymd)
      if (typeof close === 'function') close()
      else this.menuOpen = false
    },
    pickQuick(kind, close) {
      const date = new Date(this.referenceTodayDate)
      if (kind === 'yesterday') {
        date.setDate(date.getDate() - 1)
      } else if (kind === 'tomorrow') {
        date.setDate(date.getDate() + 1)
      }
      if (this.isQuickDateDisabled(date)) return
      const ymd = toYmd(date)
      this.viewYear = date.getFullYear()
      this.viewMonth = date.getMonth()
      this.$emit('update:modelValue', ymd)
      this.$emit('change', ymd)
      if (typeof close === 'function') close()
      else this.menuOpen = false
    },
    dayVariant(cell) {
      if (cell.sel) return 'solid'
      return 'ghost'
    },
    dayColor(cell) {
      if (cell.sel) return 'primary'
      if (cell.today && !cell.sel) return 'primary'
      return 'secondary'
    },
  },
}
</script>
