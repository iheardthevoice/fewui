---
title: ui-password
outline: [2, 3]
---

# ui-password

Şifre alanı: göster/gizle düğmesi ve güç göstergesi; girişte gösterge kapalı.

## Example

<ExampleFrame name="Password" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Yeni şifre"
      description="En az 8 karakter; harf ve rakam içermeli."
    >
      <ui-password v-model="newPassword" />
    </ui-form-row>

    <ui-form-row label="Mevcut şifre">
      <ui-password
        v-model="currentPassword"
        :show-strength="false"
        autocomplete="current-password"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'PasswordExample',
  data() {
    return {
      newPassword: 'Lokanta2026',
      currentPassword: '',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-password>` by `app.use(UiLib)`. Local import: `import { Password } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `string` |  |  |
| `model-value` | `string` | `""` |  |
| `disabled` | `boolean` | `false` |  |
| `readonly` | `boolean` | `false` |  |
| `placeholder` | `string` | `""` |  |
| `name` | `string` |  |  |
| `id` | `string` |  |  |
| `autocomplete` | `string` | `"new-password"` |  |
| `maxlength` | `number \| string` |  |  |
| `show-strength` | `boolean` | `true` | Güç çubuğu ve etiket |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `focus` | `@focus` |
| `blur` | `@blur` |

