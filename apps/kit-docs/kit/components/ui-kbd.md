---
title: ui-kbd
outline: [2, 3]
---

# ui-kbd

## Example

<ExampleFrame name="Kbd" />

```vue
<template>
  <div class="flex flex-col gap-4 text-sm text-foreground">
    <p class="flex items-center gap-2">
      Ürün aramak için
      <ui-kbd keys="mod+k" />
      tuşlarına basın.
    </p>
    <p class="flex items-center gap-2">
      Adisyonu yazdır
      <ui-kbd :keys="['mod', 'shift', 'p']" />
    </p>
    <p class="flex items-center gap-2 text-xs text-muted-foreground">
      Kapatmak için
      <ui-kbd
        keys="esc"
        size="sm"
      />
      · Onaylamak için
      <ui-kbd size="sm">Enter</ui-kbd>
    </p>
  </div>
</template>

<script>
export default {
  name: 'KbdExample',
}
</script>
```

## Usage

Registered globally as `<ui-kbd>` by `app.use(UiLib)`. Local import: `import { Kbd } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `keys` | `unknown[] \| string` | `[]` | Tuş(lar): dizi (`['mod', 'k']`) ya da `+` ile ayrılmış metin (`"mod+shift+p"`). `mod` Apple platformlarında ⌘, diğerlerinde Ctrl olarak yazılır. |
| `size` | `'sm' \| 'md'` | `"md"` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

