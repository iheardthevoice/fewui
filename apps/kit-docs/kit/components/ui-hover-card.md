---
title: ui-hover-card
outline: [2, 3]
---

# ui-hover-card

## Example

<ExampleFrame name="HoverCard" />

```vue
<template>
  <div class="flex items-center gap-1 text-sm text-foreground">
    <span>Siparişi alan:</span>
    <ui-hover-card placement="bottom-start">
      <template #trigger>
        <ui-button
          variant="link"
          to="/"
        >
          Elif Kaya
        </ui-button>
      </template>
      <div class="flex gap-3">
        <ui-avatar name="Elif Kaya" />
        <div class="flex min-w-0 flex-col gap-1">
          <span class="font-medium">Elif Kaya</span>
          <span class="text-muted-foreground">Salon sorumlusu · 2 yıldır ekipte</span>
          <span class="text-xs text-muted-foreground">Bugün 14 sipariş aldı</span>
        </div>
      </div>
    </ui-hover-card>
  </div>
</template>

<script>
export default {
  name: 'HoverCardExample',
}
</script>
```

## Usage

Registered globally as `<ui-hover-card>` by `app.use(UiLib)`. Local import: `import { HoverCard } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` |  | `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. |
| `open-delay` | `number` | `500` | Açılış gecikmesi (ms). |
| `close-delay` | `number` | `200` | Kapanış gecikmesi (ms) — işaretçinin karta geçmesine izin verir. |
| `placement` | `'bottom-start' \| 'bottom-end' \| 'bottom' \| 'right-start' \| 'right-end' \| 'left-start' \| 'left-end' \| 'top-start' \| 'top-end' \| 'top'` | `"bottom"` |  |
| `width` | `string \| number` |  | Kart genişliği (örn. `20rem`); verilmezse içerik + tema üst sınırı. |
| `disabled` | `boolean` | `false` |  |
| `aria-label` | `string` | `""` | Kart panelinin erişilebilir adı; metin i18n'den gelir. |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open` |
| `default` |  |

