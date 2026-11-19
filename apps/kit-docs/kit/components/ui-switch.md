---
title: ui-switch
outline: [2, 3]
---

# ui-switch

Aç/kapa anahtarı: yatay form satırında ayar; kart satırı ve devre dışı durum.

## Example

<ExampleFrame name="Switch" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="QR menüden sipariş"
      description="Misafir masadaki kodu okutup sipariş verebilir."
      direction="horizontal"
    >
      <ui-switch v-model="qrOrdering" />
    </ui-form-row>

    <ui-form-row
      label="Stok bitince gizle"
      description="Tükenen ürün menüde görünmez."
      direction="horizontal"
      variant="card"
    >
      <ui-switch v-model="hideSoldOut" />
    </ui-form-row>

    <ui-form-row
      label="Çevrimiçi ödeme"
      description="Ödeme sağlayıcısı bağlanınca açılır."
      direction="horizontal"
      variant="card"
    >
      <ui-switch
        :model-value="false"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'SwitchExample',
  data() {
    return {
      qrOrdering: true,
      hideSoldOut: false,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-switch>` by `app.use(UiLib)`. Local import: `import { Switch } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `boolean` | `false` | `v-model` |
| `disabled` | `boolean` | `false` |  |
| `id` | `string` |  |  |
| `aria-describedby` | `string` |  |  |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |

