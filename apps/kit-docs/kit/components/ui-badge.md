---
title: ui-badge
outline: [2, 3]
---

# ui-badge

Rozet: durum bilgisi için dolu, soluk ve çerçeveli görünüm; ikonlu, özel renkli ve boyutlar.

## Example

<ExampleFrame name="Badge" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-badge color="primary">Yeni</ui-badge>
      <ui-badge color="secondary">Taslak</ui-badge>
      <ui-badge color="success">Ödendi</ui-badge>
      <ui-badge color="warning">Bekliyor</ui-badge>
      <ui-badge color="info">Rezerve</ui-badge>
      <ui-badge color="danger">İptal</ui-badge>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-badge color="success" variant="muted" prefix-icon="check">Hazır</ui-badge>
      <ui-badge color="warning" variant="muted" prefix-icon="clock">18 dk</ui-badge>
      <ui-badge color="danger" variant="muted">Stokta yok</ui-badge>
      <ui-badge color="info" variant="outline">Paket servis</ui-badge>
      <ui-badge hex="#8b5cf6">Vegan</ui-badge>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-badge size="xs" color="secondary">3</ui-badge>
      <ui-badge size="sm" color="secondary">Salon</ui-badge>
      <ui-badge size="md" color="secondary">Bahçe</ui-badge>
      <ui-badge size="lg" color="secondary">Teras</ui-badge>
      <ui-badge color="secondary" max-width="32" tooltip="Glutensiz, laktozsuz ve şeker ilavesiz">
        Glutensiz, laktozsuz ve şeker ilavesiz
      </ui-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadgeExample',
}
</script>
```

## Usage

Registered globally as `<ui-badge>` by `app.use(UiLib)`. Local import: `import { Badge } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'info' \| 'danger'` |  | Ton; boşsa `solid`/`outline` için `primary`, `muted` için nötr (`secondary`). |
| `variant` | `'solid' \| 'outline' \| 'muted'` | `"solid"` | Görsel stil — `solid` dolgu, `outline` çerçeve, `muted` tonun soluk zemini |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `"sm"` | sm — varsayılan kompakt; md / lg daha geniş padding |
| `truncate` | `boolean` | `true` | Uzun metinde kısaltma (…) — `maxWidth` üst sınırından sonra (varsayılan ~12rem) |
| `max-width` | `'32' \| '40' \| '48' \| '64'` | `"48"` | Tailwind max-w-* anahtarı: 32, 40, 48, 64, full — truncate açıkken üst sınır |
| `tooltip` | `string` | `""` | Tooltip metni; boşsa slot metni kullanılır |
| `hex` | `string` | `""` | Geçerli hex renk (#RGB / #RRGGBB); arka plan ve metin kontrastı buna göre uygulanır |
| `prefix-icon` | `string` | `null` |  |
| `suffix-icon` | `string` | `null` |  |
| `clickable` | `boolean` | `false` | Tıklanabilir etiket — `button` olarak basılır (kaldır / seç). |

## Slots

| Slot | Slot props |
| --- | --- |
| `prepend` |  |
| `default` |  |
| `append` |  |

