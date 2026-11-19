---
title: ui-pin
outline: [2, 3]
---

# ui-pin

PIN girişi: 6 haneli doğrulama kodu ve 4 haneli gizli personel PIN'i; tamamlanınca `complete` olayı.

## Example

<ExampleFrame name="Pin" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Doğrulama kodu"
      description="Telefonunuza gelen 6 haneli kodu girin."
    >
      <ui-pin
        v-model="code"
        aria-label="Doğrulama kodu"
        @complete="onComplete"
      />
    </ui-form-row>

    <ui-form-row label="Personel PIN'i">
      <ui-pin
        v-model="staffPin"
        :length="4"
        mask
        autocomplete="off"
        aria-label="Personel PIN'i"
      />
    </ui-form-row>

    <p
      v-if="completed"
      class="ui-text-default m-0"
    >
      Girilen kod: {{ completed }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PinExample',
  data() {
    return {
      code: '',
      staffPin: '1234',
      completed: '',
    }
  },
  methods: {
    onComplete(value) {
      this.completed = value
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-pin>` by `app.use(UiLib)`. Local import: `import { Pin } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string` | `""` | Tam kod — `v-model` |
| `length` | `number` | `6` | Hane sayısı |
| `type` | `'numeric' \| 'alphanumeric'` | `"numeric"` | `numeric` yalnızca rakam; `alphanumeric` harf + rakam |
| `disabled` | `boolean` | `false` |  |
| `readonly` | `boolean` | `false` |  |
| `mask` | `boolean` | `false` | Haneleri gizler (PIN / şifre); OTP için kapalı bırakın. |
| `autocomplete` | `string` | `"one-time-code"` |  |
| `aria-label` | `string` | `""` |  |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `complete` | `@complete` |
| `focus` | `@focus` |
| `blur` | `@blur` |

