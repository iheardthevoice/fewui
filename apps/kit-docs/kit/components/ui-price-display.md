---
title: ui-price-display
outline: [2, 3]
---

# ui-price-display

Tutar gösterimi: adisyon özetinde etiket–tutar satırları, vurgulu toplam ve tek başına büyük tutar.

Used with: [`ui-price-display-group`](./ui-price-display-group) · [`ui-price-display-row`](./ui-price-display-row)

## Example

<ExampleFrame name="PriceDisplay" />

```vue
<template>
  <div class="flex max-w-sm flex-col gap-6">
    <ui-price-display-group>
      <ui-price-display-row label="Ara toplam" value="₺1.140,00" />
      <ui-price-display-row label="İndirim (%10)" value="−₺114,00" tone="danger" />
      <ui-price-display-row label="Servis ücreti" value="₺102,60" tone="muted" />
      <ui-price-display-row label="Toplam" value="₺1.128,60" value-size="lg" divider emphasis />
    </ui-price-display-group>

    <div class="grid grid-cols-2 gap-4">
      <ui-price-display label="Ödenen" value="₺600,00" tone="success" />
      <ui-price-display label="Kalan" value="₺528,60" value-size="xl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceDisplayExample',
}
</script>
```

## Usage

Registered globally as `<ui-price-display>` by `app.use(UiLib)`. Local import: `import { PriceDisplay } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` * | `string` |  |  |
| `value` | `string` | `""` |  |
| `size` | `'sm' \| 'md' \| 'lg'` | `"md"` |  |
| `value-size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `"lg"` |  |
| `tone` | `'default' \| 'foreground' \| 'muted' \| 'success' \| 'danger' \| 'primary'` | `"default"` |  |

\* required

## Slots

| Slot | Slot props |
| --- | --- |
| `value` |  |

