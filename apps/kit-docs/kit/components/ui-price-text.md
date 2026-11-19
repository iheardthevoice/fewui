---
title: ui-price-text
outline: [2, 3]
---

# ui-price-text

Tutar metni: eşit genişlikli rakam; boyutlar, tonlar ve üstü çizili eski fiyat.

## Example

<ExampleFrame name="PriceText" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-baseline gap-4">
      <ui-price-text value="₺285,00" size="sm" />
      <ui-price-text value="₺285,00" />
      <ui-price-text value="₺285,00" size="lg" />
      <ui-price-text value="₺285,00" size="xl" />
      <ui-price-text value="₺285,00" size="2xl" />
    </div>

    <div class="flex flex-wrap items-baseline gap-4">
      <ui-price-text value="+₺1.240,00" tone="success" />
      <ui-price-text value="−₺380,00" tone="danger" />
      <ui-price-text value="₺0,00" tone="muted" />
      <ui-price-text value="₺48.250,00" tone="primary" />
    </div>

    <div class="flex items-baseline gap-2">
      <ui-price-text value="₺320,00" tone="muted" strike />
      <ui-price-text value="₺285,00" size="lg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceTextExample',
}
</script>
```

## Usage

Registered globally as `<ui-price-text>` by `app.use(UiLib)`. Local import: `import { PriceText } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `""` |  |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `"md"` |  |
| `tone` | `'default' \| 'foreground' \| 'muted' \| 'success' \| 'danger' \| 'primary'` | `"default"` |  |
| `strike` | `boolean` | `false` |  |
| `truncate` | `boolean` | `false` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

