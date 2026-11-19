---
title: ui-icon-picker
outline: [2, 3]
---

# ui-icon-picker

İkon seçici: uygulamanın verdiği ikon listesinden aramalı seçim.

## Example

<ExampleFrame name="IconPicker" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Kategori ikonu"
      description="Menüde ve POS kategori şeridinde görünür."
    >
      <ui-icon-picker
        v-model="icon"
        :icons="icons"
        trigger-placeholder="İkon seçin"
        popover-title="Kategori ikonu"
        search-placeholder="İkon ara…"
      />
    </ui-form-row>

    <ui-form-row label="Ödeme türü ikonu">
      <ui-icon-picker
        v-model="paymentIcon"
        :icons="paymentIcons"
        trigger-placeholder="İkon seçin"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'IconPickerExample',
  data() {
    return {
      icon: 'pizza-slice',
      paymentIcon: '',
      icons: [
        'pizza-slice', 'burger', 'bowl-food', 'fish', 'drumstick-bite', 'carrot',
        'ice-cream', 'cake-candles', 'cookie', 'mug-hot', 'wine-glass', 'beer-mug-empty',
        'martini-glass', 'bottle-water', 'lemon', 'pepper-hot', 'egg', 'bread-slice',
      ],
      paymentIcons: ['money-bill', 'credit-card', 'wallet', 'qrcode', 'ticket', 'building-columns'],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-icon-picker>` by `app.use(UiLib)`. Local import: `import { IconPicker } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string` | `""` |  |
| `icons` | `unknown[]` | `[]` |  |
| `icon-type` | `string` |  |  |
| `disabled` | `boolean` | `false` |  |
| `trigger-placeholder` | `string` | `""` |  |
| `popover-title` | `string` | `""` |  |
| `clear-label` | `string` | `""` |  |
| `search-placeholder` | `string` | `""` |  |
| `no-results-label` | `string` | `""` |  |
| `max-results` | `number` | `0` | 0 veya negatif = limit yok (tüm ikonlar). |
| `panel-width` | `string` | `"22rem"` |  |
| `block` | `boolean` | `true` | Form satırı: tam genişlik. Rozet / satır içi tetikleyici için `false`. |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close` |

