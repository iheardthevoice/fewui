---
title: ui-color-picker
outline: [2, 3]
---

# ui-color-picker

Renk seçici: hazır palet + özel renk; etiketli sınırlı seçenek listesi.

## Example

<ExampleFrame name="ColorPicker" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Kategori rengi"
      description="POS'ta kategori karosunun zeminidir."
    >
      <ui-color-picker
        v-model="categoryColor"
        trigger-placeholder="Renk seçin"
        popover-title="Kategori rengi"
      />
    </ui-form-row>

    <ui-form-row label="Masa durumu rengi">
      <ui-color-picker
        v-model="statusColor"
        :options="statusColors"
        :show-custom="false"
        :show-clear="false"
        trigger-placeholder="Renk seçin"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'ColorPickerExample',
  data() {
    return {
      categoryColor: '#fb923c',
      statusColor: '#4ade80',
      statusColors: [
        { value: '#4ade80', label: 'Boş' },
        { value: '#fbbf24', label: 'Dolu' },
        { value: '#60a5fa', label: 'Rezerve' },
        { value: '#f87171', label: 'Hesap istendi' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-color-picker>` by `app.use(UiLib)`. Local import: `import { ColorPicker } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string` | `""` |  |
| `disabled` | `boolean` | `false` |  |
| `trigger-placeholder` | `string` | `""` |  |
| `popover-title` | `string` | `""` |  |
| `clear-label` | `string` | `""` |  |
| `custom-color-label` | `string` | `""` |  |
| `block` | `boolean` | `true` | Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`. |
| `options` | `unknown[]` | `null` | Renk örnekleri — `'#hex'` veya `{ value, label?, color? }`. `color` verilirse örnek o renkle çizilir, `value` anahtar olabilir (ör. `'zinc'`); tetikleyici seçili öğenin `label`'ını gösterir. Verilmezse yerleşik palet. |
| `show-custom` | `boolean` | `true` | Özel hex alanı — yalnız paletten seçilecekse `false`. |
| `show-clear` | `boolean` | `true` | Paneldeki “Temizle” — değer boş bırakılamıyorsa `false`. |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close` |

