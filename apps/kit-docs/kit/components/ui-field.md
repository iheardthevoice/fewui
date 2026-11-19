---
title: ui-field
outline: [2, 3]
---

# ui-field

Salt okunur alan: kayıt detayında etiket + değer (`size="sm"`); ikonlu ve kart görünümü.

## Example

<ExampleFrame name="Field" />

```vue
<template>
  <div class="flex max-w-xl flex-col gap-6">
    <div class="grid grid-cols-2 gap-4">
      <ui-field size="sm" title="Kasa">
        <ui-button variant="link">Ana Kasa</ui-button>
      </ui-field>
      <ui-field size="sm" title="Ödeme">Nakit</ui-field>
      <ui-field size="sm" title="Masa">Bahçe 4</ui-field>
      <ui-field size="sm" title="Kaydeden" subtitle="17 Kas 2026, 21.14">Ayşe Yılmaz</ui-field>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <ui-field card icon="calendar" icon-tone="primary" title="Rezervasyon">
        Cumartesi 20.00
      </ui-field>
      <ui-field card icon="users" icon-tile icon-tone="success" title="Misafir">
        4 kişi
      </ui-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldExample',
}
</script>
```

## Usage

Registered globally as `<ui-field>` by `app.use(UiLib)`. Local import: `import { Field } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `""` |  |
| `subtitle` | `string` | `""` |  |
| `card` | `boolean` | `false` | true: yuvarlatılmış arka plan (kenarlık yok). |
| `size` | `'sm' \| 'md'` | `"md"` | Değer boyutu. `md` (varsayılan): metrik ve ayar özeti — 16px medium. `sm`: salt okunur detay listesi (kayıt detayı, özet) — 14px normal; etiket aynı kalır (12px büyük harf, soluk). |
| `fill` | `boolean` | `false` | Grid / flex hücrede kart yüksekliğini eşitlemek için `h-full`. |
| `icon` | `string` | `""` |  |
| `icon-type` | `string` |  |  |
| `icon-tone` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'muted'` | `""` | Başlık ikonu rengi: ortak `color` kümesi (`primary` \| `secondary` \| `success` \| `warning` \| `danger` \| `info`) veya `muted` \| ''. Boş / muted → varsayılan muted-foreground. |
| `icon-tile` | `boolean` | `false` | Başlık ikonu `ui-icon-tile` (sm) içinde, `iconTone` zemininde gösterilir. |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

