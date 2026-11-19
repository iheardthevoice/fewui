---
title: ui-table-body
outline: [2, 3]
---

# ui-table-body

Tablo: başlık, hizalı tutar sütunu, seçili ve tıklanabilir satır; sayfalama kartın footer'ında.

Used with: [`ui-table`](./ui-table) · [`ui-table-cell`](./ui-table-cell) · [`ui-table-head`](./ui-table-head) · [`ui-table-header`](./ui-table-header) · [`ui-table-pagination`](./ui-table-pagination) · [`ui-table-row`](./ui-table-row)

## Example

<ExampleFrame name="Table" />

```vue
<template>
  <ui-card layout="data-table">
    <ui-table>
      <ui-table-header>
        <ui-table-row>
          <ui-table-head>Sipariş</ui-table-head>
          <ui-table-head>Masa</ui-table-head>
          <ui-table-head>Durum</ui-table-head>
          <ui-table-head align="right">Tutar</ui-table-head>
        </ui-table-row>
      </ui-table-header>
      <ui-table-body>
        <ui-table-row
          v-for="order in pageRows"
          :key="order.id"
          clickable
          :selected="order.id === selectedId"
          @click="selectedId = order.id"
        >
          <ui-table-cell tone="title">#{{ order.id }}</ui-table-cell>
          <ui-table-cell tone="secondary">{{ order.table }}</ui-table-cell>
          <ui-table-cell>
            <ui-badge v-bind="statusBadge(order.status)">{{ order.status }}</ui-badge>
          </ui-table-cell>
          <ui-table-cell align="right">
            <ui-price-text :value="order.total" />
          </ui-table-cell>
        </ui-table-row>
      </ui-table-body>
    </ui-table>
    <template #footer>
      <ui-table-pagination
        :current-page="page"
        :last-page="lastPage"
        :meta-text="`${orders.length} sipariş`"
        :page-label="`${page} / ${lastPage}`"
        prev-aria-label="Önceki sayfa"
        next-aria-label="Sonraki sayfa"
        @prev="page--"
        @next="page++"
      />
    </template>
  </ui-card>
</template>

<script>
const PAGE_SIZE = 4

export default {
  name: 'TableExample',
  data() {
    return {
      page: 1,
      selectedId: 1042,
      orders: [
        { id: 1043, table: 'Bahçe 4', status: 'Açık', total: '₺1.140' },
        { id: 1042, table: 'Salon 2', status: 'Hazır', total: '₺640' },
        { id: 1041, table: 'Paket', status: 'Kapandı', total: '₺385' },
        { id: 1040, table: 'Teras 1', status: 'İptal', total: '₺210' },
        { id: 1039, table: 'Salon 5', status: 'Kapandı', total: '₺920' },
        { id: 1038, table: 'Bahçe 1', status: 'Kapandı', total: '₺1.475' },
      ],
    }
  },
  computed: {
    lastPage() {
      return Math.ceil(this.orders.length / PAGE_SIZE)
    },
    pageRows() {
      const start = (this.page - 1) * PAGE_SIZE
      return this.orders.slice(start, start + PAGE_SIZE)
    },
  },
  methods: {
    statusBadge(status) {
      const map = {
        'Açık': { color: 'info', variant: 'muted' },
        'Hazır': { color: 'success', variant: 'muted' },
        'İptal': { color: 'danger', variant: 'muted' },
      }
      return map[status] || { color: 'secondary', variant: 'muted' }
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-table-body>` by `app.use(UiLib)`. Local import: `import { TableBody } from 'fewui'`.

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

