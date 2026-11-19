---
title: ui-radio
outline: [2, 3]
---

# ui-radio

Tekli seçim: açıklamalı liste görünümü ve sütunlu düğme (kart) görünümü.

Used with: [`ui-radio-group`](./ui-radio-group)

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

Registered globally as `<ui-radio>` by `app.use(UiLib)`. Local import: `import { Radio } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` * | `string \| number \| boolean` |  |  |
| `label` * | `string` |  |  |
| `description` | `string` | `""` |  |
| `highlight` | `boolean` | `false` | `list` varyantında satırları eşit iç boşluklu kutu yapar; seçili satır dolgu ile vurgulanır (kenarlık yok). |

\* required

