---
title: ui-collapsible
outline: [2, 3]
---

# ui-collapsible

## Example

<ExampleFrame name="Collapsible" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-3">
    <ui-collapsible v-model:open="open">
      <template #trigger="{ open: isOpen, toggle, triggerAttrs }">
        <div class="flex items-center justify-between gap-3">
          <span class="text-sm text-foreground">Bu masada 3 indirim uygulandı</span>
          <ui-button
            variant="ghost"
            color="secondary"
            size="sm"
            :suffix-icon="isOpen ? 'chevron-up' : 'chevron-down'"
            v-bind="triggerAttrs"
            @click="toggle"
          >
            {{ isOpen ? 'Gizle' : 'Göster' }}
          </ui-button>
        </div>
      </template>
      <ul class="flex flex-col gap-1 pt-2 text-sm text-muted-foreground">
        <li>Mutlu saat: %20</li>
        <li>Sadakat kartı: 1 kahve</li>
        <li>Personel indirimi: %10</li>
      </ul>
    </ui-collapsible>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleExample',
  data() {
    return {
      open: false,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-collapsible>` by `app.use(UiLib)`. Local import: `import { Collapsible } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` |  | `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir. |
| `default-open` | `boolean` | `false` | Kontrolsüz kullanımda ilk durum. |
| `disabled` | `boolean` | `false` | Açma / kapama kilitlenir; mevcut durum korunur. |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `triggerAttrs` |
| `default` | `open`, `toggle` |

