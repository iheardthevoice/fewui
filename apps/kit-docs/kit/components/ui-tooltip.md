---
title: ui-tooltip
outline: [2, 3]
---

# ui-tooltip

İpucu: yalnız ikonlu düğmeye etiket, yön seçimi ve `#content` slot'u ile zengin içerik.

## Example

<ExampleFrame name="Tooltip" />

```vue
<template>
  <div class="flex flex-wrap items-center gap-3">
    <ui-tooltip label="Fişi yeniden yazdır">
      <ui-button
        variant="outline"
        color="secondary"
        cubed
        prefix-icon="print"
        aria-label="Fişi yeniden yazdır"
      />
    </ui-tooltip>

    <ui-tooltip label="Masayı taşı" placement="bottom">
      <ui-button
        variant="outline"
        color="secondary"
        cubed
        prefix-icon="arrows-turn-right"
        aria-label="Masayı taşı"
      />
    </ui-tooltip>

    <ui-tooltip placement="right" :show-delay="300">
      <ui-badge color="warning" variant="muted" prefix-icon="clock">18 dk</ui-badge>
      <template #content>
        Sipariş 18 dakikadır mutfakta. Hedef süre 15 dakika.
      </template>
    </ui-tooltip>

    <ui-tooltip label="Bu ipucu gösterilmez" disabled>
      <ui-button variant="ghost" color="secondary">İpucu kapalı</ui-button>
    </ui-tooltip>
  </div>
</template>

<script>
export default {
  name: 'TooltipExample',
}
</script>
```

## Usage

Registered globally as `<ui-tooltip>` by `app.use(UiLib)`. Local import: `import { Tooltip } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `""` | Boşsa yalnızca `content` slot’u kullanılabilir |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `"top"` |  |
| `show-delay` | `number` | `0` | Gecikme (ms) |
| `hide-delay` | `number` | `0` |  |
| `disabled` | `boolean` | `false` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |
| `content` |  |

