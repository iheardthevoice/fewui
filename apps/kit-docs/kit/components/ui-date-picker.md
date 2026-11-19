---
title: ui-date-picker
outline: [2, 3]
---

# ui-date-picker

Tarih seçici: hızlı seçimli (bugün / yarın) alan, en erken tarih sınırı ve devre dışı durum.

## Example

<ExampleFrame name="DatePicker" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Rezervasyon tarihi">
      <ui-date-picker
        v-model="reservationDate"
        :min="today"
        placeholder="Tarih seçin"
      />
    </ui-form-row>

    <ui-form-row
      label="Kampanya başlangıcı"
      description="Seçilen günün açılışında başlar."
    >
      <ui-date-picker
        v-model="campaignStart"
        :show-quick="false"
        placeholder="Tarih seçin"
      />
    </ui-form-row>

    <ui-form-row label="Kayıt tarihi">
      <ui-date-picker
        model-value="2026-03-14"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'DatePickerExample',
  data() {
    return {
      today: '2026-11-17',
      reservationDate: '2026-11-21',
      campaignStart: '',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-date-picker>` by `app.use(UiLib)`. Local import: `import { DatePicker } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `week-start` | `number` |  | Haftanın ilk günü (0 pazar … 6 cumartesi). Verilmezse dilden çözülür: `tr` / `en-GB` pazartesi, `en-US` pazar. |
| `model-value` | `string` | `""` | `YYYY-MM-DD` |
| `placeholder` | `string` | `"Pick a date"` |  |
| `disabled` | `boolean` | `false` |  |
| `block` | `boolean` | `true` |  |
| `embedded` | `boolean` | `false` | true: tetikleyici/popover yok — paneli doğrudan yerleştir (FieldAction vb.). |
| `show-quick` | `boolean` | `true` | Hızlı seçim satırını göster |
| `id` | `string` |  |  |
| `min` | `string` | `""` | En erken seçilebilir gün (`YYYY-MM-DD`) |
| `today-label` | `string` | `""` |  |
| `yesterday-label` | `string` | `""` |  |
| `tomorrow-label` | `string` | `""` |  |
| `business-day-end` | `string` | `""` | Restaurant day-end (`HH:mm`). When set, dün/bugün/yarın and “today” highlight follow the business day (same as backend `toBusinessDate`). |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close` |

