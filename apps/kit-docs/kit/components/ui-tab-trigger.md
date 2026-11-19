---
title: ui-tab-trigger
outline: [2, 3]
---

# ui-tab-trigger

Sekmeler: çizgili ve segmentli (ikon üstte) görünüm; paneller `ui-tab-panel` ile eşleşir.

Used with: [`ui-tab-list`](./ui-tab-list) · [`ui-tab-panel`](./ui-tab-panel) · [`ui-tabs`](./ui-tabs)

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

Registered globally as `<ui-tab-trigger>` by `app.use(UiLib)`. Local import: `import { TabTrigger } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` * | `string \| number` |  |  |
| `label` | `string` | `""` | Slot kullanılmazsa gösterilen metin. |
| `icon` | `string` | `null` | `ui-icon` `name` — doluysa ikon + metin (veya yalnız ikon). |
| `icon-type` | `'duotone'` |  |  |
| `disabled` | `boolean` | `false` |  |
| `badge` | `string \| number` | `null` | Doluysa sekme köşesinde sayı rozeti (ör. sepet adedi). |
| `active` | `boolean` |  | Verilirse `ui-tabs` seçim durumunun üzerine yazar (menü tetikleyici sekmeler). |
| `popup` | `string` | `""` | `menu` — `aria-haspopup` / `aria-expanded` (panel `aria-controls` kapatılır). |
| `expanded` | `boolean` | `false` | `popup` doluysa menü açık/kapalı durumu. |

\* required

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

