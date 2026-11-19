<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <div
      ref="plot"
      class="ui-chart-plot"
      :style="{ height }"
      :role="interactive ? 'group' : undefined"
      :aria-label="interactive ? ariaLabel || undefined : undefined"
      :aria-describedby="interactive ? hintId : undefined"
      :aria-busy="loading ? 'true' : undefined"
      :tabindex="interactive ? 0 : undefined"
      @pointermove="onPointerMove"
      @pointerdown="onPointerMove"
      @pointerleave="onPointerLeave"
      @focus="onFocus"
      @blur="onBlur"
      @keydown="onKeydown"
    >
      <ui-chart-skeleton
        v-if="loading"
        variant="block"
        class="ui-chart-skeleton"
      />
      <div
        v-else-if="isEmpty"
        class="ui-chart-empty"
      >
        <slot name="empty">
          <ui-chart-empty
            icon="chart-column"
            size="sm"
            :title="resolvedEmptyTitle"
            :description="emptyDescription"
          />
        </slot>
      </div>
      <template v-else-if="ready">
        <svg
          class="ui-chart-svg"
          :width="width"
          :height="plotHeight"
          :viewBox="`0 0 ${width} ${plotHeight}`"
          role="img"
          :aria-label="ariaLabel || undefined"
          focusable="false"
        >
          <template v-if="cartesian">
            <g
              v-if="showGrid"
              aria-hidden="true"
            >
              <line
                v-for="tick in cartesian.ticks"
                :key="`g${tick.value}`"
                class="ui-chart-grid-line"
                :x1="cartesian.left"
                :x2="cartesian.right"
                :y1="tick.y"
                :y2="tick.y"
              />
            </g>
            <rect
              v-if="type === 'bar' && activeIndex != null"
              class="ui-chart-band"
              :x="cartesian.bandX(activeIndex)"
              :y="cartesian.top"
              :width="cartesian.step"
              :height="cartesian.bottom - cartesian.top"
              rx="4"
            />
            <g
              v-if="showAxis"
              aria-hidden="true"
            >
              <text
                v-for="tick in cartesian.ticks"
                :key="`y${tick.value}`"
                class="ui-chart-tick"
                :x="cartesian.left - 8"
                :y="tick.y"
                text-anchor="end"
                dominant-baseline="middle"
              >{{ tick.label }}</text>
              <text
                v-for="label in cartesian.xLabels"
                :key="`x${label.index}`"
                class="ui-chart-tick"
                :x="label.x"
                :y="cartesian.bottom + 16"
                text-anchor="middle"
              >{{ label.text }}</text>
            </g>
            <g v-if="type === 'bar'">
              <path
                v-for="bar in cartesian.bars"
                :key="bar.id"
                class="ui-chart-bar"
                :d="bar.d"
                :fill="bar.color"
              />
            </g>
            <template v-else>
              <g v-if="type === 'area'">
                <path
                  v-for="area in cartesian.areas"
                  :key="`a${area.key}`"
                  class="ui-chart-area"
                  :d="area.d"
                  :fill="area.color"
                />
              </g>
              <path
                v-for="line in cartesian.lines"
                :key="`l${line.key}`"
                class="ui-chart-line"
                :d="line.d"
                :stroke="line.color"
                :stroke-dasharray="line.dash || undefined"
              />
              <g v-if="cartesian.showDots">
                <template
                  v-for="line in cartesian.lines"
                  :key="`d${line.key}`"
                >
                  <template
                    v-for="(point, pointIndex) in line.points"
                    :key="pointIndex"
                  >
                    <circle
                      v-if="point"
                      class="ui-chart-dot"
                      :cx="point[0]"
                      :cy="point[1]"
                      r="4"
                      :fill="line.color"
                    />
                  </template>
                </template>
              </g>
            </template>
            <line
              class="ui-chart-baseline"
              :x1="cartesian.left"
              :x2="cartesian.right"
              :y1="cartesian.zeroY"
              :y2="cartesian.zeroY"
            />
            <g v-if="type !== 'bar' && activeIndex != null">
              <line
                class="ui-chart-crosshair"
                :x1="cartesian.center(activeIndex)"
                :x2="cartesian.center(activeIndex)"
                :y1="cartesian.top"
                :y2="cartesian.bottom"
              />
              <template
                v-for="line in cartesian.lines"
                :key="`c${line.key}`"
              >
                <circle
                  v-if="line.points[activeIndex]"
                  class="ui-chart-dot ui-chart-dot--active"
                  :cx="line.points[activeIndex][0]"
                  :cy="line.points[activeIndex][1]"
                  r="4"
                  :fill="line.color"
                />
              </template>
            </g>
          </template>
          <template v-else-if="donut">
            <path
              v-for="slice in donut.slices"
              :key="slice.id"
              :class="['ui-chart-slice', activeIndex != null && activeIndex !== slice.index && 'ui-chart-slice--dim']"
              :d="slice.d"
              :fill="slice.color"
              :data-index="slice.index"
            />
            <g
              v-if="donutCenter"
              aria-hidden="true"
            >
              <text
                class="ui-chart-donut-value"
                :x="donut.cx"
                :y="donut.cy - 2"
                text-anchor="middle"
              >{{ donutCenter.value }}</text>
              <text
                class="ui-chart-tick"
                :x="donut.cx"
                :y="donut.cy + 16"
                text-anchor="middle"
              >{{ donutCenter.label }}</text>
            </g>
          </template>
        </svg>
        <div
          v-if="tooltip"
          :class="['ui-chart-tooltip', tooltip.flip && 'ui-chart-tooltip--flip', tooltip.middle && 'ui-chart-tooltip--middle']"
          :style="tooltip.style"
          aria-hidden="true"
        >
          <p class="ui-chart-tooltip-title">{{ tooltip.title }}</p>
          <div
            v-for="row in tooltip.rows"
            :key="row.key"
            class="ui-chart-tooltip-row"
          >
            <svg
              class="ui-chart-key"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              focusable="false"
            >
              <line
                x1="0"
                x2="12"
                y1="6"
                y2="6"
                :stroke="row.color"
                stroke-width="2"
                stroke-linecap="round"
                :stroke-dasharray="row.dash || undefined"
              />
            </svg>
            <span class="ui-chart-tooltip-label">{{ row.label }}</span>
            <span class="ui-chart-tooltip-value">{{ row.value }}</span>
          </div>
          <div
            v-if="tooltip.total != null"
            class="ui-chart-tooltip-row ui-chart-tooltip-row--total"
          >
            <span class="ui-chart-tooltip-label">{{ totalLabel }}</span>
            <span class="ui-chart-tooltip-value">{{ tooltip.total }}</span>
          </div>
        </div>
      </template>
    </div>

    <ul
      v-if="legendItems.length"
      class="ui-chart-legend"
      :aria-label="legendLabel"
    >
      <li
        v-for="item in legendItems"
        :key="item.key"
      >
        <button
          type="button"
          :class="['ui-chart-legend-item', item.hidden && 'ui-chart-legend-item--off']"
          :aria-pressed="item.hidden ? 'false' : 'true'"
          @click="toggleSeries(item.key)"
        >
          <svg
            class="ui-chart-key"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            aria-hidden="true"
            focusable="false"
          >
            <line
              v-if="type === 'line'"
              x1="0"
              x2="12"
              y1="6"
              y2="6"
              :stroke="item.color"
              stroke-width="2"
              stroke-linecap="round"
              :stroke-dasharray="item.dash || undefined"
            />
            <rect
              v-else
              x="1"
              y="1"
              width="10"
              height="10"
              rx="3"
              :fill="item.color"
            />
          </svg>
          <span class="ui-chart-legend-label">{{ item.label }}</span>
        </button>
      </li>
    </ul>

    <!-- Aynı veri ekran okuyucu için tablo olarak; grafik yalnız görsel özet. -->
    <table
      v-if="!loading && !isEmpty"
      class="sr-only"
    >
      <caption v-if="ariaLabel">
        {{ ariaLabel }}
      </caption>
      <thead>
        <tr>
          <th scope="col">
            {{ resolvedCategoryLabel }}
          </th>
          <th
            v-for="s in tableSeries"
            :key="s.key"
            scope="col"
          >
            {{ s.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
        >
          <th scope="row">
            {{ categoryText(row) }}
          </th>
          <td
            v-for="s in tableSeries"
            :key="s.key"
          >
            {{ formatValue(cell(row, s.key), 'table') }}
          </td>
        </tr>
      </tbody>
    </table>
    <span
      v-if="interactive"
      :id="hintId"
      class="sr-only"
    >{{ keyboardHint }}</span>
    <span
      class="sr-only"
      aria-live="polite"
    >{{ liveText }}</span>
  </div>
</template>

<script>
import Empty from './Empty.vue'
import Skeleton from './Skeleton.vue'
import { cn } from '../utils/cn.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import {
  arcPath,
  areaPath,
  bandScale,
  barPath,
  extent,
  labelStride,
  linePath,
  linearScale,
  nearestBandIndex,
  niceTicks,
  pieAngles,
  polarPoint,
  round2,
  stackSeries,
  toNumber,
} from '../utils/chart-math.js'

const nextChartId = createUiIdFactory('ui-chart')

const TYPES = ['bar', 'line', 'area', 'donut']
/** Temanın kategorik rampası: `--chart-series-1` … `--chart-series-8`. */
const SERIES_COLOR_COUNT = 8
/** Çizgi serileri yalnız renkle ayrışmasın: ikinci seriden itibaren kesik desen. */
const LINE_DASHES = ['', '6 4', '2 4', '10 4 2 4']
/** Sütun kalınlığı üst sınırı — bant boşluğu "hava" olarak kalır. */
const BAR_MAX = 24
const BAR_GAP = 2
const BAR_RADIUS = 4
const TICK_FONT = 12
/** Ölçüm yapılamadığında (canvas yok) 12px gövde yazısı için ortalama karakter genişliği. */
const FALLBACK_CHAR_WIDTH = 7

function seriesColor(index) {
  return `var(--chart-series-${(index % SERIES_COLOR_COUNT) + 1})`
}

export default {
  name: 'Chart',
  components: { 'ui-chart-empty': Empty, 'ui-chart-skeleton': Skeleton },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'bar',
      validator: (v) => TYPES.includes(v),
    },
    /** Satır nesneleri: `[{ day: 'Pzt', salon: 12400, paket: 3200 }]`. */
    data: {
      type: Array,
      default: () => [],
    },
    /** Kategori (x ekseni / dilim etiketi) alanı. */
    categoryKey: {
      type: String,
      default: 'label',
    },
    /**
     * `[{ key, label, color? }]`. Renk verilmezse sıra ile `--chart-series-1…8`.
     * `donut` yalnız ilk seriyi okur; dilimler satırlardır.
     */
    series: {
      type: Array,
      default: () => [],
    },
    /** `bar` ve `area` için serileri üst üste yığar. */
    stacked: {
      type: Boolean,
      default: false,
    },
    /** Çizim alanı yüksekliği (CSS uzunluğu). Genişlik kapsayıcıdan gelir. */
    height: {
      type: String,
      default: '240px',
    },
    showLegend: {
      type: Boolean,
      default: true,
    },
    showGrid: {
      type: Boolean,
      default: true,
    },
    showAxis: {
      type: Boolean,
      default: true,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    /**
     * `(value, context) => string` — `context`: `'axis' | 'tooltip' | 'table'`.
     * Eksen için kısa, ipucu için tam biçim döndürülebilir.
     */
    valueFormatter: {
      type: Function,
      default: null,
    },
    /** Grafiğin erişilebilir adı; gizli tablonun başlığı da budur. */
    ariaLabel: {
      type: String,
      default: '',
    },
    /** Gizli tablodaki kategori sütunu başlığı (varsayılan `ui.chart.category`). */
    categoryLabel: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    emptyTitle: {
      type: String,
      default: '',
    },
    emptyDescription: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hintId: `${nextChartId()}-hint`,
      /** Ölçüm mount sonrası gelir; SSR'da boyuta bağlı hiçbir şey çizilmez. */
      width: 0,
      plotHeight: 0,
      activeIndex: null,
      /** Etkin kategori klavyeyle seçildiyse canlı bölgede okunur. */
      keyboardActive: false,
      hiddenKeys: [],
    }
  },
  computed: {
    rootClass() {
      return cn('ui-chart', `ui-chart--${this.type}`, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    rows() {
      return Array.isArray(this.data) ? this.data : []
    },
    isDonut() {
      return this.type === 'donut'
    },
    /** Renk seriye bağlıdır (sıraya değil): gizlenen seri diğerlerini yeniden boyamaz. */
    normalizedSeries() {
      return (Array.isArray(this.series) ? this.series : [])
        .filter((s) => s && s.key != null)
        .map((s, index) => ({
          key: String(s.key),
          label: s.label != null && s.label !== '' ? String(s.label) : String(s.key),
          color: s.color || seriesColor(index),
          dash: this.type === 'line' ? LINE_DASHES[index % LINE_DASHES.length] : '',
        }))
    },
    visibleSeries() {
      return this.normalizedSeries.filter((s) => !this.hiddenKeys.includes(s.key))
    },
    tableSeries() {
      return this.isDonut ? this.normalizedSeries.slice(0, 1) : this.normalizedSeries
    },
    /** Halka: her satır bir dilim. */
    donutItems() {
      const first = this.normalizedSeries[0]
      if (!this.isDonut || !first) return []
      return this.rows.map((row, index) => ({
        key: `${index}:${this.categoryText(row)}`,
        index,
        label: this.categoryText(row),
        value: toNumber(row?.[first.key]),
        color: seriesColor(index),
        dash: '',
      }))
    },
    isEmpty() {
      return this.rows.length === 0 || this.normalizedSeries.length === 0
    },
    ready() {
      return this.width > 0 && this.plotHeight > 0
    },
    interactive() {
      return this.showTooltip && !this.loading && !this.isEmpty
    },
    itemCount() {
      return this.rows.length
    },
    legendItems() {
      if (!this.showLegend || this.loading || this.isEmpty) return []
      const items = this.isDonut ? this.donutItems : this.normalizedSeries
      // Tek seride renk tektir; başlık zaten ne çizildiğini söyler.
      if (items.length < 2) return []
      return items.map((item) => ({ ...item, hidden: this.hiddenKeys.includes(item.key) }))
    },
    legendLabel() {
      return resolveUiText(this, 'ui.chart.legend', 'Series')
    },
    totalLabel() {
      return resolveUiText(this, 'ui.chart.total', 'Total')
    },
    keyboardHint() {
      return resolveUiText(this, 'ui.chart.keyboardHint', 'Use the arrow keys to read the values.')
    },
    resolvedCategoryLabel() {
      return this.categoryLabel || resolveUiText(this, 'ui.chart.category', 'Category')
    },
    resolvedEmptyTitle() {
      return this.emptyTitle || resolveUiText(this, 'ui.chart.empty', 'No data to show')
    },
    cartesian() {
      if (this.isDonut || !this.ready) return null
      const rows = this.rows
      const count = rows.length
      const series = this.visibleSeries
      const keys = series.map((s) => s.key)
      const isBar = this.type === 'bar'
      const stackedMode = this.stacked && (isBar || this.type === 'area')
      const stacks = stackedMode ? stackSeries(rows, keys) : null

      const values = [0]
      if (stacks) {
        for (const column of stacks) for (const pair of column) values.push(pair[0], pair[1])
      } else {
        for (const row of rows) for (const key of keys) values.push(toNumber(row?.[key]))
      }
      const [min, max] = extent(values)

      const top = 8
      const bottom = this.plotHeight - (this.showAxis ? 24 : 4)
      const innerHeight = Math.max(1, bottom - top)
      const tickValues = niceTicks(min, max, Math.min(6, Math.max(2, Math.floor(innerHeight / 44))))
      const tickLabels = tickValues.map((value) => this.formatValue(value, 'axis'))
      const left = this.showAxis
        ? Math.ceil(Math.max(...tickLabels.map((label) => this.measureText(label)))) + 12
        : 4
      const right = Math.max(left + 1, this.width - 8)
      const y = linearScale(tickValues[0], tickValues[tickValues.length - 1], bottom, top)
      const band = bandScale(count, left, right)
      const zeroY = round2(y(0))

      const ticks = tickValues.map((value, index) => ({ value, y: round2(y(value)), label: tickLabels[index] }))

      // Kategori etiketleri: sığmayanlar atlanır, uçtakiler çizim alanına sabitlenir.
      const texts = rows.map((row) => this.categoryText(row))
      const widths = texts.map((text) => this.measureText(text))
      const stride = labelStride(Math.max(0, ...widths) + 12, band.step)
      const xLabels = []
      for (let index = 0; index < count; index += stride) {
        const half = widths[index] / 2
        const x = Math.min(this.width - half, Math.max(half, band.center(index)))
        xLabels.push({ index, text: texts[index], x: round2(x) })
      }

      const bars = []
      const lines = []
      const areas = []
      if (isBar && series.length) {
        const slot = band.step * 0.72
        if (stacks) {
          const barWidth = Math.max(1, Math.min(BAR_MAX, slot))
          for (let rowIndex = 0; rowIndex < count; rowIndex += 1) {
            // Uç yuvarlaklığı yalnız yığının en dış parçasında.
            let lastUp = -1
            let lastDown = -1
            series.forEach((_, si) => {
              const [y0, y1] = stacks[si][rowIndex]
              if (y1 > y0) lastUp = si
              else if (y1 < y0) lastDown = si
            })
            series.forEach((s, si) => {
              const [y0, y1] = stacks[si][rowIndex]
              if (y0 === y1) return
              const down = y1 < y0
              let yTop = Math.min(y(y0), y(y1))
              let h = Math.abs(y(y1) - y(y0))
              // Parçalar arası 2px yüzey boşluğu: tabana bakan uçtan kısaltılır.
              if (y0 !== 0 && h > BAR_GAP + 1) {
                h -= BAR_GAP
                if (down) yTop += BAR_GAP
              }
              const outer = down ? si === lastDown : si === lastUp
              bars.push({
                id: `${s.key}:${rowIndex}`,
                color: s.color,
                d: barPath(band.center(rowIndex) - barWidth / 2, yTop, barWidth, h, outer ? BAR_RADIUS : 0, down),
              })
            })
          }
        } else {
          const n = series.length
          const barWidth = Math.max(1, Math.min(BAR_MAX, (slot - BAR_GAP * (n - 1)) / n))
          const group = barWidth * n + BAR_GAP * (n - 1)
          for (let rowIndex = 0; rowIndex < count; rowIndex += 1) {
            const x0 = band.center(rowIndex) - group / 2
            series.forEach((s, si) => {
              const value = toNumber(rows[rowIndex]?.[s.key])
              if (value == null || value === 0) return
              const yValue = y(value)
              bars.push({
                id: `${s.key}:${rowIndex}`,
                color: s.color,
                d: barPath(
                  x0 + si * (barWidth + BAR_GAP),
                  Math.min(yValue, zeroY),
                  barWidth,
                  Math.abs(yValue - zeroY),
                  BAR_RADIUS,
                  value < 0,
                ),
              })
            })
          }
        }
      } else if (!isBar) {
        series.forEach((s, si) => {
          const points = rows.map((row, rowIndex) => {
            const value = stacks ? stacks[si][rowIndex][1] : toNumber(row?.[s.key])
            return value == null ? null : [round2(band.center(rowIndex)), round2(y(value))]
          })
          lines.push({ key: s.key, color: s.color, dash: s.dash, points, d: linePath(points) })
          if (this.type === 'area') {
            const base = rows.map((_, rowIndex) => [
              round2(band.center(rowIndex)),
              stacks ? round2(y(stacks[si][rowIndex][0])) : zeroY,
            ])
            areas.push({ key: s.key, color: s.color, d: areaPath(points, base) })
          }
        })
      }

      return {
        left,
        right,
        top,
        bottom,
        zeroY,
        step: band.step,
        count,
        ticks,
        xLabels,
        bars,
        lines,
        areas,
        stacked: Boolean(stacks),
        // Tek noktalı çizgi yol üretmez; nokta ile gösterilir.
        showDots: count === 1,
        center: (index) => round2(band.center(index)),
        bandX: (index) => round2(left + band.step * index),
      }
    },
    donut() {
      if (!this.isDonut || !this.ready) return null
      const items = this.donutItems
      const cx = this.width / 2
      const cy = this.plotHeight / 2
      const outer = Math.max(0, Math.min(this.width, this.plotHeight) / 2 - 2)
      const inner = outer * 0.66
      const visible = items.map((item) => (this.hiddenKeys.includes(item.key) ? 0 : item.value))
      // 2px yüzey boşluğu: orta yarıçapta yay uzunluğu olarak.
      const angles = pieAngles(visible, outer > 0 ? BAR_GAP / ((outer + inner) / 2) : 0)
      const total = visible.reduce((sum, value) => sum + (value > 0 ? value : 0), 0)
      const slices = items
        .map((item, index) => {
          const angle = angles[index]
          const [tx, ty] = polarPoint(cx, cy, (outer + inner) / 2, angle.mid)
          return {
            id: item.key,
            index,
            color: item.color,
            ratio: angle.ratio,
            d: arcPath(cx, cy, outer, inner, angle.start, angle.end),
            tx: round2(tx),
            ty: round2(ty),
          }
        })
        .filter((slice) => slice.d)
      return {
        cx: round2(cx),
        cy: round2(cy),
        slices,
        total,
        inner,
      }
    },
    /**
     * Halka ortası: boşta toplam, etkin dilimde o dilimin değeri ve payı (ipucu ortadaki metni örtmesin).
     * Metin iç çapa sığmıyorsa `null` — etkin dilim o zaman yüzen ipucuna düşer.
     */
    donutCenter() {
      const donut = this.donut
      if (!donut) return null
      const room = donut.inner * 2 - 16
      const fits = (value, label) =>
        // Değer satırı 16px, ölçüm 12px fontla yapılır.
        Math.max(this.measureText(value) * (16 / TICK_FONT), this.measureText(label)) <= room
      const active = this.isDonut ? this.activeModel : null
      if (active) {
        const value = active.valueText
        const label = `${active.title} · ${active.percentText}`
        return donut.inner >= 44 && fits(value, label) ? { value, label, active: true } : null
      }
      const value = this.formatValue(donut.total, 'axis')
      const label = this.normalizedSeries[0]?.label || this.totalLabel
      return donut.inner >= 44 && fits(value, label) ? { value, label, active: false } : null
    },
    /** Klavye / imleç gezinebileceği dizinler (halkada gizli ve sıfır dilimler atlanır). */
    navigableIndexes() {
      if (this.isDonut) return this.donut ? this.donut.slices.map((slice) => slice.index) : []
      return this.rows.map((_, index) => index)
    },
    activeModel() {
      const index = this.activeIndex
      if (index == null || !this.navigableIndexes.includes(index)) return null
      if (this.isDonut) {
        const item = this.donutItems[index]
        const slice = this.donut.slices.find((s) => s.index === index)
        const valueText = this.formatValue(item.value, 'tooltip')
        const percentText = this.formatPercent(slice.ratio)
        return {
          title: item.label,
          valueText,
          percentText,
          rows: [
            {
              key: item.key,
              label: this.normalizedSeries[0].label,
              color: item.color,
              dash: '',
              value: `${valueText} · ${percentText}`,
            },
          ],
          total: null,
          x: slice.tx,
          y: slice.ty,
        }
      }
      const row = this.rows[index]
      const series = this.visibleSeries
      let sum = 0
      const rows = series.map((s) => {
        const value = toNumber(row?.[s.key])
        sum += value ?? 0
        return { key: s.key, label: s.label, color: s.color, dash: s.dash, value: this.formatValue(value, 'tooltip') }
      })
      return {
        title: this.categoryText(row),
        rows,
        total: this.cartesian?.stacked && series.length > 1 ? this.formatValue(sum, 'tooltip') : null,
        x: this.cartesian ? this.cartesian.center(index) : 0,
        y: null,
      }
    },
    tooltip() {
      const model = this.activeModel
      if (!model || !this.showTooltip) return null
      // Halkada değer ortada gösterilebiliyorsa yüzen ipucu açılmaz.
      if (this.isDonut && this.donutCenter?.active) return null
      const style = { left: `${model.x}px`, top: model.y == null ? '8px' : `${model.y}px` }
      return { ...model, style, flip: model.x > this.width / 2, middle: model.y != null }
    },
    liveText() {
      const model = this.activeModel
      if (!model || !this.keyboardActive) return ''
      const parts = model.rows.map((row) => `${row.label} ${row.value}`)
      if (model.total != null) parts.push(`${this.totalLabel} ${model.total}`)
      return `${model.title}: ${parts.join(', ')}`
    },
  },
  watch: {
    type() {
      this.hiddenKeys = []
      this.activeIndex = null
    },
  },
  mounted() {
    this.measureContext = this.createMeasureContext()
    const el = this.$refs.plot
    if (!el) return
    this.applySize(el.clientWidth, el.clientHeight)
    if (typeof ResizeObserver === 'function') {
      this.resizeObserver = new ResizeObserver((entries) => {
        const rect = entries[entries.length - 1]?.contentRect
        if (rect) this.applySize(rect.width, rect.height)
      })
      this.resizeObserver.observe(el)
    } else {
      this.onWindowResize = () => this.applySize(el.clientWidth, el.clientHeight)
      window.addEventListener('resize', this.onWindowResize)
    }
  },
  beforeUnmount() {
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
    if (this.onWindowResize) window.removeEventListener('resize', this.onWindowResize)
  },
  methods: {
    applySize(width, height) {
      const w = Math.floor(width)
      const h = Math.floor(height)
      if (w !== this.width) this.width = w
      if (h !== this.plotHeight) this.plotHeight = h
    },
    /** Eksen payı ve etiket seyreltme gerçek yazı genişliğine dayanır (tema fontu değişebilir). */
    createMeasureContext() {
      try {
        const context = document.createElement('canvas').getContext('2d')
        if (!context) return null
        const family = getComputedStyle(this.$el).fontFamily || 'sans-serif'
        context.font = `${TICK_FONT}px ${family}`
        return context
      } catch {
        return null
      }
    },
    measureText(text) {
      const value = String(text ?? '')
      if (this.measureContext) return this.measureContext.measureText(value).width
      return value.length * FALLBACK_CHAR_WIDTH
    },
    categoryText(row) {
      const value = row?.[this.categoryKey]
      return value == null ? '' : String(value)
    },
    cell(row, key) {
      return toNumber(row?.[key])
    },
    /** Sabit yedek dil: SSR ve tarayıcı aynı metni üretsin. */
    numberLocale() {
      // vue-i18n legacy modda dize, composition modda ref döndürür.
      const locale = this.$i18n?.locale
      const value = locale && typeof locale === 'object' ? locale.value : locale
      return typeof value === 'string' && value ? value : 'en-US'
    },
    formatValue(value, context) {
      if (value == null) return '–'
      if (typeof this.valueFormatter === 'function') return String(this.valueFormatter(value, context))
      try {
        return new Intl.NumberFormat(this.numberLocale(), { maximumFractionDigits: 2 }).format(value)
      } catch {
        return String(value)
      }
    },
    /** Yüzde işaretinin yeri dile göre değişir (`%12` / `12%`). */
    formatPercent(ratio) {
      try {
        return new Intl.NumberFormat(this.numberLocale(), { style: 'percent', maximumFractionDigits: 1 }).format(ratio)
      } catch {
        return `${Math.round(ratio * 1000) / 10}%`
      }
    },
    toggleSeries(key) {
      this.hiddenKeys = this.hiddenKeys.includes(key)
        ? this.hiddenKeys.filter((k) => k !== key)
        : [...this.hiddenKeys, key]
    },
    onPointerMove(event) {
      if (!this.interactive || !this.ready) return
      this.keyboardActive = false
      if (this.isDonut) {
        const index = event.target?.getAttribute?.('data-index')
        this.activeIndex = index == null ? null : Number(index)
        return
      }
      const rect = this.$refs.plot.getBoundingClientRect()
      const scene = this.cartesian
      const index = nearestBandIndex(event.clientX - rect.left, scene.left, scene.step, scene.count)
      this.activeIndex = index < 0 ? null : index
    },
    onPointerLeave(event) {
      // Dokunmada parmak kalkınca da `pointerleave` gelir: ipucu açık kalır, dışarı dokununca (blur) kapanır.
      if (event?.pointerType === 'touch') return
      if (!this.keyboardActive) this.activeIndex = null
    },
    onFocus(event) {
      // Fare tıklamasıyla gelen odakta ipucu imleci izler; klavye odağında ilk kategori açılır.
      if (!this.interactive || !event.target.matches?.(':focus-visible')) return
      this.keyboardActive = true
      if (this.activeIndex == null || !this.navigableIndexes.includes(this.activeIndex)) {
        this.activeIndex = this.navigableIndexes[0] ?? null
      }
    },
    onBlur() {
      this.keyboardActive = false
      this.activeIndex = null
    },
    onKeydown(event) {
      if (!this.interactive) return
      const indexes = this.navigableIndexes
      if (!indexes.length) return
      if (event.key === 'Escape') {
        if (this.activeIndex == null) return
        event.stopPropagation()
        this.activeIndex = null
        return
      }
      const position = indexes.indexOf(this.activeIndex)
      let next
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          next = position < 0 ? 0 : this.isDonut ? (position + 1) % indexes.length : Math.min(indexes.length - 1, position + 1)
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          if (position < 0) next = indexes.length - 1
          else next = this.isDonut ? (position - 1 + indexes.length) % indexes.length : Math.max(0, position - 1)
          break
        case 'Home':
          next = 0
          break
        case 'End':
          next = indexes.length - 1
          break
        default:
          return
      }
      event.preventDefault()
      this.keyboardActive = true
      this.activeIndex = indexes[next]
    },
  },
}
</script>
