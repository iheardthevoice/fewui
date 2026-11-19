---
title: ui-price-input
outline: [2, 3]
---

# ui-price-input

Fiyat girişi: uygulamanın para birimi ayarını kullanır; alan bazında para birimi değiştirilebilir.

## Example

<ExampleFrame name="PriceInput" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Satış fiyatı">
      <ui-price-input v-model="price" />
    </ui-form-row>

    <ui-form-row
      label="Paket servis fiyatı"
      description="Boş bırakılırsa satış fiyatı kullanılır."
    >
      <ui-price-input
        v-model="deliveryPrice"
        placeholder="0,00"
      />
    </ui-form-row>

    <ui-form-row label="Tedarikçi fiyatı (EUR)">
      <ui-price-input
        v-model="supplierPrice"
        currency="EUR"
        format="de-DE"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'PriceInputExample',
  data() {
    return {
      price: 285,
      deliveryPrice: '',
      supplierPrice: 12.5,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-price-input>` by `app.use(UiLib)`. Local import: `import { PriceInput } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string \| number` | `""` |  |
| `currency` | `string` |  |  |
| `format` | `string` |  | BCP 47 fiyat biçimi; verilmezse fewui global ayarı kullanılır. |
| `locale` | `string` |  | `format` için geriye uyumlu alias. |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `input` | `@input` |
| `change` | `@change` |
| `focus` | `@focus` |
| `blur` | `@blur` |

