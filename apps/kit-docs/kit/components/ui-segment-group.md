---
title: ui-segment-group
outline: [2, 3]
---

# ui-segment-group

Segment grubu: form içi kısa seçim; ikonlu, yalnız ikonlu ve küçük boyut.

Used with: [`ui-segment`](./ui-segment)

## Example

<ExampleFrame name="SegmentGroup" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="İndirim türü">
      <ui-segment-group
        v-model="discountType"
        aria-label="İndirim türü"
      >
        <ui-segment value="percent" label="Yüzde" icon="percent" />
        <ui-segment value="amount" label="Tutar" icon="turkish-lira-sign" />
        <ui-segment value="free" label="İkram" icon="gift" />
      </ui-segment-group>
    </ui-form-row>

    <ui-form-row
      label="Görünüm"
      direction="horizontal"
    >
      <ui-segment-group
        v-model="view"
        icon-only
        :block="false"
        aria-label="Görünüm"
      >
        <ui-segment value="grid" label="Karo" icon="table-cells-large" />
        <ui-segment value="list" label="Liste" icon="list" />
      </ui-segment-group>
    </ui-form-row>

    <ui-form-row label="Fiş dili">
      <ui-segment-group
        v-model="language"
        size="sm"
        aria-label="Fiş dili"
      >
        <ui-segment value="tr" label="Türkçe" />
        <ui-segment value="en" label="İngilizce" />
        <ui-segment value="de" label="Almanca" disabled />
      </ui-segment-group>
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'SegmentGroupExample',
  data() {
    return {
      discountType: 'percent',
      view: 'grid',
      language: 'tr',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-segment-group>` by `app.use(UiLib)`. Local import: `import { SegmentGroup } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string \| number \| boolean` | `null` |  |
| `size` | `'md'` |  |  |
| `direction` | `'horizontal' \| 'vertical'` | `"horizontal"` | `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler |
| `icon-only` | `'mobile' \| boolean` | `false` | Yalnız ikon; etiketler ekran okuyucu için gizli kalır. `true` — her zaman; `mobile` — yalnızca dar viewport (`max-width: 1023px`). |
| `block` | `boolean` | `true` | false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) |
| `scrollable` | `boolean` | `true` | Yatay taşmada grup içinde kaydırma; seçili segment ortalanır. Varsayılan açık — dar kart / mobil’de etiketler patlamasın. Dikey yönde etkisiz. `block=false` (fit) gruplarda da taşmayı keser. |
| `animated` | `boolean` | `true` | Seçili zemin yeni seçilinin arkasına kayarak geçer (yolda hafif büyür). `false`: her segment kendi zeminini çizer (eski davranış). |
| `navigation` | `boolean` | `false` | Gezinme kapsülü: segmentler `to` ile bağlantıdır, grup `radiogroup` rolü taşımaz. Erişilebilir ad sarmalayan `<nav aria-label>` öğesinden gelir; `modelValue` etkin rotanın değeridir. |
| `aria-label` | `string` | `""` | `radiogroup` erişilebilir adı |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

