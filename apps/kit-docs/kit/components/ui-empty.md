---
title: ui-empty
outline: [2, 3]
---

# ui-empty

Boş durum: fayda başlığı + ne yapılacağını anlatan açıklama + eylem; küçük boyut kart içinde.

## Example

<ExampleFrame name="Empty" />

```vue
<template>
  <div class="flex max-w-xl flex-col gap-6">
    <ui-empty
      icon="calendar-plus"
      title="Rezervasyonları tek yerden yönetin"
      description="Telefonla veya siteden gelen rezervasyonlar burada toplanır; masayı önceden ayırın, misafir beklemesin."
    >
      <ui-button prefix-icon="plus">Rezervasyon ekle</ui-button>
      <ui-button variant="link">Site formunu aç</ui-button>
    </ui-empty>

    <ui-card title="Bugünkü etkinlikler">
      <ui-empty
        size="sm"
        icon="music"
        title="Bugün etkinlik yok"
        description="Canlı müzik veya tadım gecesi planlayın; sitede duyurulsun."
      />
    </ui-card>
  </div>
</template>

<script>
export default {
  name: 'EmptyExample',
}
</script>
```

## Usage

Registered globally as `<ui-empty>` by `app.use(UiLib)`. Local import: `import { Empty } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `string` | `"plus"` | `ui-icon` `name` (örn. `plus`). Boş string → ikon kutusu gösterilmez. |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `icon-type` | `string` |  |  |
| `size` | `'sm' \| 'md' \| 'lg'` |  |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

