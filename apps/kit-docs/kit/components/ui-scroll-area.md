---
title: ui-scroll-area
outline: [2, 3]
---

# ui-scroll-area

## Example

<ExampleFrame name="ScrollArea" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-6">
    <ui-scroll-area
      max-height="12rem"
      fade
      aria-label="Bugünkü siparişler"
    >
      <ul class="flex flex-col">
        <li
          v-for="order in orders"
          :key="order.id"
          class="flex items-center justify-between gap-3 py-2 text-sm"
        >
          <span class="text-foreground">{{ order.table }}</span>
          <span class="text-muted-foreground">{{ order.total }}</span>
        </li>
      </ul>
    </ui-scroll-area>

    <ui-scroll-area
      orientation="horizontal"
      fade
      aria-label="Kategoriler"
    >
      <div class="flex gap-2 pb-2">
        <ui-badge
          v-for="category in categories"
          :key="category"
          variant="outline"
        >
          {{ category }}
        </ui-badge>
      </div>
    </ui-scroll-area>
  </div>
</template>

<script>
export default {
  name: 'ScrollAreaExample',
  data() {
    return {
      orders: Array.from({ length: 14 }, (_, index) => ({
        id: index + 1,
        table: `Masa ${index + 1}`,
        total: `${(index + 2) * 145} ₺`,
      })),
      categories: [
        'Başlangıçlar', 'Çorbalar', 'Salatalar', 'Izgaralar', 'Makarnalar', 'Pizzalar',
        'Burgerler', 'Tatlılar', 'Sıcak içecekler', 'Soğuk içecekler', 'Kokteyller',
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-scroll-area>` by `app.use(UiLib)`. Local import: `import { ScrollArea } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `'vertical' \| 'horizontal' \| 'both'` | `"vertical"` | Kaydırma ekseni. |
| `max-height` | `string \| number` | `""` | CSS uzunluğu (`"16rem"`, `"50vh"`); sayı verilirse piksel. Boşsa yükseklik ebeveynden gelir. |
| `fade` | `boolean` | `false` | Kenar solması: yalnız devamı olan kenarda görünür. |
| `aria-label` | `string` | `""` | İçerik taştığında bölgenin erişilebilir adı; verilmezse `ui.scrollArea.ariaLabel`. |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

