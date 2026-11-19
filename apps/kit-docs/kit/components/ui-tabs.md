---
title: ui-tabs
outline: [2, 3]
---

# ui-tabs

Sekmeler: çizgili ve segmentli (ikon üstte) görünüm; paneller `ui-tab-panel` ile eşleşir.

Used with: [`ui-tab-list`](./ui-tab-list) · [`ui-tab-panel`](./ui-tab-panel) · [`ui-tab-trigger`](./ui-tab-trigger)

## Example

<ExampleFrame name="Tabs" />

```vue
<template>
  <div class="flex max-w-xl flex-col gap-8">
    <ui-tabs v-model="orderTab">
      <ui-tab-list aria-label="Siparişler">
        <ui-tab-trigger value="open" label="Açık" />
        <ui-tab-trigger value="ready" label="Hazır" />
        <ui-tab-trigger value="closed" label="Kapanan" />
        <ui-tab-trigger value="cancelled" label="İptal" disabled />
      </ui-tab-list>
      <ui-tab-panel value="open">
        <p class="ui-text-default m-0">6 masada sipariş açık; en eskisi 42 dakikadır bekliyor.</p>
      </ui-tab-panel>
      <ui-tab-panel value="ready">
        <p class="ui-text-default m-0">2 sipariş servise hazır.</p>
      </ui-tab-panel>
      <ui-tab-panel value="closed">
        <p class="ui-text-default m-0">Bugün 38 sipariş kapandı.</p>
      </ui-tab-panel>
    </ui-tabs>

    <ui-tabs v-model="productTab" variant="segmented">
      <ui-tab-list aria-label="Ürün">
        <ui-tab-trigger value="general" label="Genel" icon="circle-info" />
        <ui-tab-trigger value="price" label="Fiyat" icon="tag" />
        <ui-tab-trigger value="stock" label="Stok" icon="boxes-stacked" />
      </ui-tab-list>
      <ui-tab-panel value="general">
        <p class="ui-text-default m-0">Ad, açıklama ve kategori bilgileri.</p>
      </ui-tab-panel>
      <ui-tab-panel value="price">
        <p class="ui-text-default m-0">Satış fiyatı ve kataloğa özel fiyatlar.</p>
      </ui-tab-panel>
      <ui-tab-panel value="stock">
        <p class="ui-text-default m-0">3 ürün kritik stok seviyesinin altında.</p>
      </ui-tab-panel>
    </ui-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabsExample',
  data() {
    return {
      orderTab: 'open',
      productTab: 'general',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-tabs>` by `app.use(UiLib)`. Local import: `import { Tabs } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string \| number` | `null` | Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). |
| `variant` | `'line' \| 'segmented'` | `"line"` | `line` — alt çizgi; `segmented` — düğme kartları (yatay: ikon üstte; dikey: yan ray). |
| `orientation` | `'horizontal' \| 'vertical'` | `"horizontal"` | `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. |
| `fit` | `'full'` | `""` | `full` — segmented tab listesi tam genişlik (hub / show sayfaları). |
| `size` | `'sm' \| 'md' \| 'lg'` |  | Segmented yükseklik / tipografi — `sm` \| `md` (varsayılan) \| `lg`. |
| `transparent` | `boolean` | `false` | Segmented iz arka planını kaldırır (mobil sabit üst şerit vb.). |
| `scrollable` | `boolean` | `true` | Dar alanlarda (sheet, mobil) segmented listede yatay kaydırma — varsayılan açık. |
| `inline-controls` | `boolean` | `false` | Button ile aynı satırda / hizada — tab yüksekliği button ile aynı kalır (`--ui-control-h-*`). Varsayılan kapalı: segmented tab bir kademe büyük (`--ui-tab-h-*`). |
| `native-chrome` | `boolean` | `false` | Native mobil alt dock — `cap-ios` / `cap-android` ile liquid glass veya opak blur. Web’de etkisiz; yalnızca `variant="segmented"` ile kullanılır. |
| `icon-only` | `'mobile' \| boolean` | `false` | Dikey segmented ray — yalnız ikon; etiketler ekran okuyucu için gizli kalır. `true` — her zaman; `mobile` — dar viewport (`max-width: 1023px`). |
| `animated` | `boolean` | `true` | `segmented`: seçili zemin yeni sekmenin arkasına kayarak geçer (yolda hafif büyür). `false`: her tetikleyici kendi zeminini çizer (eski davranış). |
| `indicator-key` | `string` | `""` | Kayan göstergenin son konumunu aynı anahtarlı şeritler arasında taşır. Her rotada yeniden kurulan sekme şeridi (sayfa başına `ui-tabs`) önceki sekmeden kayarak gelir; anahtarsız şerit anlık yerleşir. |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

