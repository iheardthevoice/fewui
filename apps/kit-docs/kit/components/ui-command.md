---
title: ui-command
outline: [2, 3]
---

# ui-command

## Example

<ExampleFrame name="Command" />

```vue
<template>
  <div class="flex flex-col items-start gap-3">
    <ui-button
      variant="outline"
      color="secondary"
      prefix-icon="magnifying-glass"
      @click="open = true"
    >
      Komut ara
      <ui-kbd keys="mod+k" />
    </ui-button>
    <ui-command
      v-model:open="open"
      :items="items"
      hotkey="mod+k"
      placeholder="Sayfa veya işlem ara…"
      empty-text="Eşleşen komut yok."
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  name: 'CommandExample',
  data() {
    return {
      open: false,
      last: null,
      items: [
        { id: 'pos', group: 'Sayfalar', label: 'Satış', icon: 'cash-register', keywords: ['pos', 'kasa'] },
        { id: 'menu', group: 'Sayfalar', label: 'Menü', icon: 'utensils', keywords: ['ürün', 'katalog'] },
        { id: 'reservations', group: 'Sayfalar', label: 'Rezervasyonlar', icon: 'calendar' },
        { id: 'new-product', group: 'İşlemler', label: 'Yeni ürün ekle', icon: 'plus', shortcut: '⌘N' },
        { id: 'new-reservation', group: 'İşlemler', label: 'Rezervasyon oluştur', icon: 'calendar-plus' },
        { id: 'close-day', group: 'İşlemler', label: 'Günü kapat', icon: 'moon', description: 'Kasa sayımı ve gün sonu raporu', disabled: true },
      ],
    }
  },
  methods: {
    onSelect(item) {
      this.last = item.id
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-command>` by `app.use(UiLib)`. Local import: `import { Command } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | `v-model:open` — palet (dialog) kullanımı. |
| `inline` | `boolean` | `false` | true: dialog olmadan, liste bulunduğu yerde çizilir. |
| `items` | `unknown[]` | `[]` | `[{ id, label, description, icon, shortcut, keywords, group, disabled, to }]` |
| `groups` | `unknown[]` | `[]` | `[{ label, items }]` — verilirse `items` yerine kullanılır. |
| `query` | `string` |  | `v-model:query` — verilmezse arama metni içeride tutulur. |
| `placeholder` | `string` | `""` |  |
| `empty-text` | `string` | `""` |  |
| `loading` | `boolean` | `false` |  |
| `filter` | `(...args: any[]) => any` | `null` | Eşleşme fonksiyonu `(item, query) => boolean`. Varsayılan: etiket + `keywords` içinde harf / aksan duyarsız arama. Sunucu taraflı aramada `() => true` verilip `update:query` dinlenir. |
| `hotkey` | `string` | `""` | Paleti açıp kapatan genel kısayol (örn. `mod+k`); `inline` iken arama alanına odaklar. |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |
| `update:query` | `@update:query` |
| `select` | `@select` |

## Slots

| Slot | Slot props |
| --- | --- |
| `item` | `item`, `active` |
| `empty` | `query` |

