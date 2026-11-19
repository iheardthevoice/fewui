---
title: ui-radio-group
outline: [2, 3]
---

# ui-radio-group

Tekli seçim: açıklamalı liste görünümü ve sütunlu düğme (kart) görünümü.

Used with: [`ui-radio`](./ui-radio)

## Example

<ExampleFrame name="Radio" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Servis ücreti">
      <ui-radio-group
        v-model="serviceFee"
        aria-label="Servis ücreti"
      >
        <ui-radio value="none" label="Uygulanmaz" />
        <ui-radio value="percent" label="Yüzde" description="Adisyon toplamına %10 eklenir." />
        <ui-radio value="fixed" label="Kişi başı sabit" description="Her misafir için 25 ₺ kuver." />
      </ui-radio-group>
    </ui-form-row>

    <ui-form-row label="Sipariş türü">
      <ui-radio-group
        v-model="orderType"
        variant="button"
        :columns="3"
        aria-label="Sipariş türü"
      >
        <ui-radio value="dine-in" label="Salon" />
        <ui-radio value="takeaway" label="Gel al" />
        <ui-radio value="delivery" label="Paket" />
      </ui-radio-group>
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'RadioExample',
  data() {
    return {
      serviceFee: 'percent',
      orderType: 'dine-in',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-radio-group>` by `app.use(UiLib)`. Local import: `import { RadioGroup } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string \| number \| boolean` | `null` |  |
| `variant` | `'list' \| 'button'` | `"list"` | `list` — satır listesi; `button` — kart seçenekleri |
| `orientation` | `'vertical' \| 'horizontal'` | `null` | `list`: varsayılan dikey; `horizontal` yan yana. `button`: varsayılan yatay; `vertical` alt alta (uzun açıklamalı plan seçimi vb.). |
| `columns` | `number` | `0` | `button` + yatay: sabit sütun sayısı (dar dialog'da 3 seçenek yan yana). `0` (varsayılan) — `auto-fit` ile genişliğe göre sarılır. |
| `size` | `string` |  | Yalnız `button`: kartlar kontrol boyuna iner (button / input ile aynı yükseklik ve köşe), etiket tek satır ortalı, seçim dolgu ile gösterilir. Boş (varsayılan) — açıklamalı kart. |
| `aria-label` | `string` | `""` | `radiogroup` erişilebilir adı |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

