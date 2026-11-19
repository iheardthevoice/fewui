---
title: ui-input
outline: [2, 3]
---

# ui-input

Metin girişi: ikonlu arama, ek (append) alanı, çok satırlı not ve devre dışı durum.

## Example

<ExampleFrame name="Input" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Ürün adı">
      <ui-input
        v-model="name"
        placeholder="Örn. Margherita"
      />
    </ui-form-row>

    <ui-form-row label="Ürün ara">
      <ui-input
        v-model="query"
        type="search"
        prefix-icon="magnifying-glass"
        placeholder="Ad veya barkod"
      />
    </ui-form-row>

    <ui-form-row label="Hazırlama süresi">
      <ui-input
        v-model="prepMinutes"
        type="number"
      >
        <template #append>
          <span class="ui-text-default">dk</span>
        </template>
      </ui-input>
    </ui-form-row>

    <ui-form-row
      label="Mutfak notu"
      description="Fişte ürünün altında yazdırılır."
    >
      <ui-input
        v-model="note"
        multiline
        :rows="3"
        :maxlength="140"
      />
    </ui-form-row>

    <ui-form-row label="Stok kodu">
      <ui-input
        model-value="PZ-0012"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'InputExample',
  data() {
    return {
      name: 'Margherita',
      query: '',
      prepMinutes: 12,
      note: 'Az pişmiş, kenarları ince.',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-input>` by `app.use(UiLib)`. Local import: `import { Input } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'default' \| 'plain'` | `"default"` | `default` dolgulu kabuk; `plain` border/fill yok (inline düzenleme). |
| `size` | `'md'` |  | `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı |
| `model-value` | `string \| number` | `""` | `v-model` |
| `type` | `string` | `"text"` | Tek satır için native `type`. |
| `multiline` | `boolean` | `false` | `<textarea>` kullan. |
| `rows` | `number` | `3` |  |
| `prefix-icon` | `string` | `null` |  |
| `suffix-icon` | `string` | `null` |  |
| `disabled` | `boolean` | `false` |  |
| `readonly` | `boolean` | `false` |  |
| `placeholder` | `string` | `""` |  |
| `name` | `string` |  |  |
| `id` | `string` |  |  |
| `autocomplete` | `string` |  |  |
| `maxlength` | `number \| string` |  |  |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `input` | `@input` |
| `change` | `@change` |
| `focus` | `@focus` |
| `blur` | `@blur` |

## Slots

| Slot | Slot props |
| --- | --- |
| `prepend` |  |
| `append` |  |

