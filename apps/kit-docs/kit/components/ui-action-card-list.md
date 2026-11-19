---
title: ui-action-card-list
outline: [2, 3]
---

# ui-action-card-list

Eylem kartı listesi: ikon + başlık + açıklama ile seçenek; seçili ve devre dışı durum.

Used with: [`ui-action-card`](./ui-action-card)

## Example

<ExampleFrame name="ActionCard" />

```vue
<template>
  <div class="max-w-md">
    <ui-action-card-list aria-label="Ürün ekleme yöntemi">
      <ui-action-card
        v-for="option in options"
        :key="option.value"
        :title="option.title"
        :description="option.description"
        :icon="option.icon"
        :selected="selected === option.value"
        :disabled="option.disabled"
        @click="selected = option.value"
      />
    </ui-action-card-list>
  </div>
</template>

<script>
export default {
  name: 'ActionCardExample',
  data() {
    return {
      selected: 'manual',
      options: [
        {
          value: 'manual',
          icon: 'pen',
          title: 'Elle ekle',
          description: 'Ürünleri tek tek girin; fiyat ve görseli siz belirleyin.',
        },
        {
          value: 'import',
          icon: 'file-arrow-up',
          title: 'Excel\'den aktar',
          description: 'Mevcut menü dosyanızı yükleyin, sütunları eşleştirin.',
        },
        {
          value: 'ai',
          icon: 'wand-magic-sparkles',
          title: 'Menü fotoğrafından oluştur',
          description: 'Yapay zekâ kredisi gerekir.',
          disabled: true,
        },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-action-card-list>` by `app.use(UiLib)`. Local import: `import { ActionCardList } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-label` | `string` | `""` |  |
| `max-height` | `string` | `""` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

