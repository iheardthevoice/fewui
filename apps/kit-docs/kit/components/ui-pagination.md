---
title: ui-pagination
outline: [2, 3]
---

# ui-pagination

## Example

<ExampleFrame name="Pagination" />

```vue
<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <span class="text-xs text-muted-foreground">248 kayıttan {{ (page - 1) * 20 + 1 }}–{{ Math.min(page * 20, 248) }} arası</span>
      <ui-pagination
        v-model="page"
        :total="248"
        :page-size="20"
      />
    </div>

    <ui-pagination
      v-model="compactPage"
      :page-count="40"
      :sibling-count="2"
      :show-edges="false"
      size="sm"
    />
  </div>
</template>

<script>
export default {
  name: 'PaginationExample',
  data() {
    return {
      page: 6,
      compactPage: 1,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-pagination>` by `app.use(UiLib)`. Local import: `import { Pagination } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `number` | `1` | Bulunulan sayfa (1 tabanlı). |
| `total` | `number` | `0` | Toplam kayıt sayısı; `pageSize` ile sayfa sayısına çevrilir. |
| `page-size` | `number` | `10` |  |
| `page-count` | `number` | `null` | Sayfa sayısı doğrudan verilir; `total` / `pageSize` yerine geçer. |
| `sibling-count` | `number` | `1` | Bulunulan sayfanın her iki yanında gösterilen sayfa sayısı. |
| `show-edges` | `boolean` | `true` | İlk ve son sayfa düğmeleri (aradaki boşluk `…`). |
| `size` | `string` |  | Verilmezse tema kontrol boyutu (düğmeler `ui-button` ile aynı yükseklikte). |
| `disabled` | `boolean` | `false` |  |
| `aria-label` | `string` | `""` | Verilmezse `ui.pagination.ariaLabel`. |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |

