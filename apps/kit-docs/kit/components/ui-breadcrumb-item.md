---
title: ui-breadcrumb-item
outline: [2, 3]
---

# ui-breadcrumb-item

Used with: [`ui-breadcrumb`](./ui-breadcrumb)

## Example

<ExampleFrame name="Breadcrumb" />

```vue
<template>
  <div class="flex flex-col gap-6">
    <ui-breadcrumb>
      <ui-breadcrumb-item
        to="/"
        icon="house"
      >
        Panel
      </ui-breadcrumb-item>
      <ui-breadcrumb-item href="#menu">
        Menü
      </ui-breadcrumb-item>
      <ui-breadcrumb-item current>
        Izgara köfte
      </ui-breadcrumb-item>
    </ui-breadcrumb>

    <ui-breadcrumb
      :items="items"
      :max-items="3"
    />
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbExample',
  data() {
    return {
      items: [
        { label: 'Panel', to: '/', icon: 'house' },
        { label: 'Katalog', href: '#katalog' },
        { label: 'Ana yemekler', href: '#ana-yemekler' },
        { label: 'Izgaralar', href: '#izgaralar' },
        { label: 'Izgara köfte' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-breadcrumb-item>` by `app.use(UiLib)`. Local import: `import { BreadcrumbItem } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `to` | `RouteLocationRaw` | `null` | `vue-router` hedefi; `href`'e göre önceliklidir. |
| `href` | `string` | `""` | Düz bağlantı adresi (`to` yokken). |
| `label` | `string` | `""` | Slot kullanılmazsa gösterilen metin. |
| `icon` | `string` | `null` |  |
| `current` | `boolean` | `false` | Bulunulan sayfa: bağlantı değil, `aria-current="page"` taşıyan metin. |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

