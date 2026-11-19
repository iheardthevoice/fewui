---
title: ui-currency-input
outline: [2, 3]
---

# ui-currency-input

Tutar girişi: para birimi ve yerel biçim alan üzerinde verilir; küçük boyut ve salt okunur durum.

## Example

<ExampleFrame name="CurrencyInput" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Kasa açılış tutarı">
      <ui-currency-input v-model="opening" />
    </ui-form-row>

    <ui-form-row label="Döviz ile tahsilat">
      <ui-currency-input
        v-model="foreign"
        currency="USD"
        locale="en-US"
      />
    </ui-form-row>

    <ui-form-row label="Sayılan tutar">
      <ui-currency-input
        :model-value="counted"
        size="sm"
        readonly
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'CurrencyInputExample',
  data() {
    return {
      opening: 1500,
      foreign: 40,
      counted: 1462.5,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-currency-input>` by `app.use(UiLib)`. Local import: `import { CurrencyInput } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string \| number` | `""` |  |
| `currency` | `string` | `"TRY"` | ISO veya sembol (TRY, ₺, …); verilmezse `TRY` (seeder varsayılanı). |
| `locale` | `string` | `"tr-TR"` | Binlik ve ondalık ayırıcılarını belirleyen BCP 47 locale. |
| `size` | `string` |  |  |
| `disabled` | `boolean` | `false` |  |
| `readonly` | `boolean` | `false` |  |
| `placeholder` | `string` | `""` |  |
| `name` | `string` |  |  |
| `id` | `string` |  |  |
| `autocomplete` | `string` | `"off"` |  |
| `aria-describedby` | `string` |  |  |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `input` | `@input` |
| `change` | `@change` |
| `focus` | `@focus` |
| `blur` | `@blur` |

