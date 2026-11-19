---
title: ui-chart
outline: [2, 3]
---

# ui-chart

## Example

<ExampleFrame name="Chart" />

```vue
<template>
  <div class="grid gap-4 lg:grid-cols-2">
    <ui-card title="Haftalık ciro" description="Salon ve paket servis, son 7 gün">
      <ui-chart
        type="bar"
        stacked
        category-key="day"
        aria-label="Haftalık ciro: salon ve paket servis"
        category-label="Gün"
        :data="weeklySales"
        :series="salesSeries"
        :value-formatter="formatLira"
      />
    </ui-card>

    <ui-card title="Saatlik sipariş" description="Bugün ve geçen haftanın aynı günü">
      <ui-chart
        type="line"
        category-key="hour"
        aria-label="Saatlik sipariş sayısı: bugün ve geçen hafta"
        category-label="Saat"
        :data="hourlyOrders"
        :series="orderSeries"
      />
    </ui-card>

    <ui-card title="Ödeme tipleri" description="Bu ayki tahsilatın dağılımı">
      <ui-chart
        type="donut"
        category-key="type"
        aria-label="Ödeme tiplerine göre tahsilat"
        category-label="Ödeme tipi"
        :data="paymentTypes"
        :series="paymentSeries"
        :value-formatter="formatLira"
      />
    </ui-card>

    <ui-card title="Rezervasyonlar" description="Henüz kayıt yokken">
      <ui-chart
        type="area"
        category-key="day"
        aria-label="Günlük rezervasyon sayısı"
        empty-title="Henüz rezervasyon yok"
        empty-description="İlk rezervasyon geldiğinde günlük doluluk burada görünür."
        :data="[]"
        :series="[{ key: 'count', label: 'Rezervasyon' }]"
      />
    </ui-card>
  </div>
</template>

<script>
const lira = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 })
const compact = new Intl.NumberFormat('tr-TR', { notation: 'compact', maximumFractionDigits: 1 })

export default {
  name: 'ChartExample',
  data() {
    return {
      salesSeries: [
        { key: 'salon', label: 'Salon' },
        { key: 'paket', label: 'Paket servis' },
      ],
      weeklySales: [
        { day: 'Pzt', salon: 18400, paket: 6200 },
        { day: 'Sal', salon: 16950, paket: 5800 },
        { day: 'Çar', salon: 21300, paket: 7100 },
        { day: 'Per', salon: 24800, paket: 7650 },
        { day: 'Cum', salon: 38600, paket: 11200 },
        { day: 'Cmt', salon: 46200, paket: 12900 },
        { day: 'Paz', salon: 41750, paket: 9800 },
      ],
      orderSeries: [
        { key: 'today', label: 'Bugün' },
        { key: 'lastWeek', label: 'Geçen hafta' },
      ],
      hourlyOrders: [
        { hour: '11:00', today: 8, lastWeek: 6 },
        { hour: '12:00', today: 21, lastWeek: 18 },
        { hour: '13:00', today: 34, lastWeek: 29 },
        { hour: '14:00', today: 19, lastWeek: 22 },
        { hour: '15:00', today: 9, lastWeek: 11 },
        { hour: '16:00', today: 7, lastWeek: 8 },
        { hour: '17:00', today: 12, lastWeek: 10 },
        { hour: '18:00', today: 24, lastWeek: 20 },
        { hour: '19:00', today: 41, lastWeek: 35 },
        { hour: '20:00', today: 52, lastWeek: 44 },
        { hour: '21:00', today: 38, lastWeek: 40 },
        { hour: '22:00', today: 17, lastWeek: 21 },
      ],
      paymentSeries: [{ key: 'amount', label: 'Tahsilat' }],
      paymentTypes: [
        { type: 'Kredi kartı', amount: 412500 },
        { type: 'Nakit', amount: 138200 },
        { type: 'Yemek kartı', amount: 96400 },
        { type: 'Cari hesap', amount: 41800 },
      ],
    }
  },
  methods: {
    /** Eksende kısa (`20 B`), ipucu ve tabloda tam tutar. */
    formatLira(value, context) {
      return context === 'axis' ? compact.format(value) : lira.format(value)
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-chart>` by `app.use(UiLib)`. Local import: `import { Chart } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'bar' \| 'line' \| 'area' \| 'donut'` | `"bar"` |  |
| `data` | `unknown[]` | `[]` | Satır nesneleri: `[{ day: 'Pzt', salon: 12400, paket: 3200 }]`. |
| `category-key` | `string` | `"label"` | Kategori (x ekseni / dilim etiketi) alanı. |
| `series` | `unknown[]` | `[]` | `[{ key, label, color? }]`. Renk verilmezse sıra ile `--chart-series-1…8`. `donut` yalnız ilk seriyi okur; dilimler satırlardır. |
| `stacked` | `boolean` | `false` | `bar` ve `area` için serileri üst üste yığar. |
| `height` | `string` | `"240px"` | Çizim alanı yüksekliği (CSS uzunluğu). Genişlik kapsayıcıdan gelir. |
| `show-legend` | `boolean` | `true` |  |
| `show-grid` | `boolean` | `true` |  |
| `show-axis` | `boolean` | `true` |  |
| `show-tooltip` | `boolean` | `true` |  |
| `value-formatter` | `(...args: any[]) => any` | `null` | `(value, context) => string` — `context`: `'axis' \| 'tooltip' \| 'table'`. Eksen için kısa, ipucu için tam biçim döndürülebilir. |
| `aria-label` | `string` | `""` | Grafiğin erişilebilir adı; gizli tablonun başlığı da budur. |
| `category-label` | `string` | `""` | Gizli tablodaki kategori sütunu başlığı (varsayılan `ui.chart.category`). |
| `loading` | `boolean` | `false` |  |
| `empty-title` | `string` | `""` |  |
| `empty-description` | `string` | `""` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `empty` |  |

