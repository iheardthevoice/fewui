---
title: ui-tag
outline: [2, 3]
---

# ui-tag

Etiket: kaldırılabilir ürün etiketleri (`remove` olayı); ton, görünüm ve boyutlar.

## Example

<ExampleFrame name="Tag" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-tag
        v-for="tag in tags"
        :key="tag"
        removable
        @remove="remove(tag)"
      >
        {{ tag }}
      </ui-tag>
      <ui-button
        v-if="tags.length < initialTags.length"
        variant="link"
        size="sm"
        @click="tags = [...initialTags]"
      >
        Geri yükle
      </ui-button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-tag color="primary">Şefin önerisi</ui-tag>
      <ui-tag color="success" variant="muted">Vegan</ui-tag>
      <ui-tag color="warning" variant="muted">Acılı</ui-tag>
      <ui-tag color="danger" variant="outline">Alerjen</ui-tag>
      <ui-tag size="md">Orta</ui-tag>
      <ui-tag size="lg">Büyük</ui-tag>
    </div>
  </div>
</template>

<script>
const INITIAL_TAGS = ['Glutensiz', 'Mevsimlik', 'Paylaşımlık', 'Çocuk menüsü']

export default {
  name: 'TagExample',
  data() {
    return {
      initialTags: INITIAL_TAGS,
      tags: [...INITIAL_TAGS],
    }
  },
  methods: {
    remove(tag) {
      this.tags = this.tags.filter((row) => row !== tag)
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-tag>` by `app.use(UiLib)`. Local import: `import { Tag } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `'secondary' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger'` | `"secondary"` | Ton — Badge ile aynı sözlük |
| `variant` | `'solid' \| 'outline' \| 'muted'` | `"solid"` |  |
| `size` | `'sm' \| 'md' \| 'lg'` | `"sm"` |  |
| `removable` | `boolean` | `false` |  |

## Events

| Event | Listener |
| --- | --- |
| `remove` | `@remove` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

