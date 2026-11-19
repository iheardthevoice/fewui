---
title: ui-date-range-picker
outline: [2, 3]
---

# ui-date-range-picker

Tarih aralığı: hazır dönemlerle rapor filtresi ve özel hazır seçim listesi.

## Example

<ExampleFrame name="DateRangePicker" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-date-range-picker
        v-model="reportRange"
        placement="bottom-start"
        placeholder="Dönem seçin"
      />
      <span class="ui-text-default">{{ rangeText }}</span>
    </div>

    <div class="max-w-md">
      <ui-form-row label="Kampanya süresi">
        <ui-date-range-picker
          v-model="campaignRange"
          :presets="campaignPresets"
          :min="today"
          placement="bottom-start"
          placeholder="Başlangıç – bitiş"
        />
      </ui-form-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateRangePickerExample',
  data() {
    return {
      today: '2026-11-17',
      reportRange: ['2026-11-01', '2026-11-17'],
      campaignRange: ['', ''],
      campaignPresets: [
        { key: 'weekend', label: 'Bu hafta sonu', range: ['2026-11-21', '2026-11-22'] },
        { key: 'week', label: '1 hafta', range: ['2026-11-17', '2026-11-23'] },
        { key: 'month', label: '1 ay', range: ['2026-11-17', '2026-12-16'] },
      ],
    }
  },
  computed: {
    rangeText() {
      const [start, end] = this.reportRange
      return start && end ? `${start} → ${end}` : 'Dönem seçilmedi'
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-date-range-picker>` by `app.use(UiLib)`. Local import: `import { DateRangePicker } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `week-start` | `number` |  | Haftanın ilk günü (0 pazar … 6 cumartesi). Verilmezse dilden çözülür: `tr` / `en-GB` pazartesi, `en-US` pazar. |
| `model-value` | `unknown[]` | `["",""]` | `[startYmd, endYmd]` |
| `placement` | `'bottom-start' \| 'bottom-end' \| 'bottom' \| 'top-start' \| 'top-end' \| 'top'` | `"bottom-end"` | Masaüstü panelin tetikleyiciye göre yeri. Varsayılan sağa hizalı (`bottom-end`); araç çubuğunun solundaki filtre çipinde `bottom-start` verilir, panel sola taşmaz. |
| `placeholder` | `string` | `""` |  |
| `disabled` | `boolean` | `false` |  |
| `id` | `string` |  |  |
| `min` | `string` | `""` |  |
| `max` | `string` | `""` |  |
| `presets` | `unknown[]` |  | Hızlı aralık listesi. Verilmezse varsayılan set kullanılır. |
| `open` | `boolean` |  | Kontrollü aç/kapa (`undefined` = dahili state). |
| `show-trigger` | `boolean` | `true` | `false`: tetikleyici çizilmez; panel `anchor` öğesine göre `v-model:open` ile açılır (ör. bir seçim çipindeki “Özel aralık”). |
| `anchor` | `string \| Record<string, unknown>` | `null` | Konum referansı (HTMLElement, bileşen örneği veya CSS seçici) — `ui-popover` `anchor` |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |
| `update:open` | `@update:open` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close` |

