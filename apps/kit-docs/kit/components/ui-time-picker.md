---
title: ui-time-picker
outline: [2, 3]
---

# ui-time-picker

Saat seçici: 15 dakikalık adım (varsayılan), 30 dakikalık adım ve devre dışı durum.

## Example

<ExampleFrame name="TimePicker" />

```vue
<template>
  <div class="grid max-w-md grid-cols-2 gap-4">
    <ui-form-row label="Açılış">
      <ui-time-picker
        v-model="opensAt"
        placeholder="Saat seçin"
      />
    </ui-form-row>

    <ui-form-row label="Kapanış">
      <ui-time-picker
        v-model="closesAt"
        placeholder="Saat seçin"
      />
    </ui-form-row>

    <ui-form-row label="Rezervasyon saati">
      <ui-time-picker
        v-model="reservationTime"
        :step-minutes="30"
        placeholder="Saat seçin"
      />
    </ui-form-row>

    <ui-form-row label="Gün sonu">
      <ui-time-picker
        model-value="04:00"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'TimePickerExample',
  data() {
    return {
      opensAt: '09:00',
      closesAt: '23:30',
      reservationTime: '',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-time-picker>` by `app.use(UiLib)`. Local import: `import { TimePicker } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `presentation` | `'auto' \| 'popover' \| 'dialog'` | `"auto"` | Açılış biçimi (`ui-popover` `presentation`): `auto` telefonda dialog, masaüstünde panel; `popover` her zaman panel; `dialog` her zaman dialog. |
| `model-value` | `string` | `""` | `HH:mm` (24 saat) |
| `step-minutes` | `number` | `15` | Adım (dakika) |
| `placeholder` | `string` | `""` |  |
| `disabled` | `boolean` | `false` |  |
| `embedded` | `boolean` | `false` | true: tetikleyici/popover yok — tekerlek panelini doğrudan yerleştir. |
| `id` | `string` |  |  |
| `popover-width` | `string \| number` | `"12.5rem"` | `ui-popover` panel genişliği — dar zaman seçici için |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close` |

