---
title: ui-toolbar
outline: [2, 3]
---

# ui-toolbar

Araç çubuğu: liste üstünde solda filtreler (`#start`), sağda eylemler (`#end`); aralıklar temadan gelir.

## Example

<ExampleFrame name="Toolbar" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <ui-toolbar aria-label="Sipariş filtreleri">
      <template #start>
        <ui-chip-group v-model="period" :options="periods" aria-label="Dönem" />
        <ui-filter-chip
          icon="chair"
          empty-label="Masa"
          :value-label="table"
          :empty="!table"
          clearable
          @click="table = 'Bahçe 4'"
          @clear="table = ''"
        />
      </template>
      <template #end>
        <ui-button variant="outline" color="secondary" prefix-icon="download">Dışa aktar</ui-button>
        <ui-button prefix-icon="plus">Sipariş</ui-button>
      </template>
    </ui-toolbar>

    <ui-toolbar aria-label="Ürün araması">
      <div class="max-w-xs flex-1">
        <ui-input v-model="query" type="search" prefix-icon="magnifying-glass" placeholder="Ürün ara" />
      </div>
      <template #end>
        <ui-button variant="ghost" color="secondary" cubed prefix-icon="sliders" aria-label="Sütunlar" />
      </template>
    </ui-toolbar>
  </div>
</template>

<script>
export default {
  name: 'ToolbarExample',
  data() {
    return {
      period: 'today',
      table: '',
      query: '',
      periods: [
        { value: 'today', label: 'Bugün' },
        { value: 'week', label: 'Bu hafta' },
        { value: 'month', label: 'Bu ay' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-toolbar>` by `app.use(UiLib)`. Local import: `import { Toolbar } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `'horizontal' \| 'vertical'` | `"horizontal"` |  |
| `wrap` | `boolean` | `true` | Yatay düzende sığmayan öğeler alt satıra kayar |
| `aria-label` | `string` | `""` | Verilirse `role="toolbar"` ile erişilebilir ad |

## Slots

| Slot | Slot props |
| --- | --- |
| `start` |  |
| `default` |  |
| `end` |  |

