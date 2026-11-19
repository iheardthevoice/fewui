---
title: ui-breadcrumb
outline: [2, 3]
---

# ui-breadcrumb

Used with: [`ui-breadcrumb-item`](./ui-breadcrumb-item)

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

Registered globally as `<ui-breadcrumb>` by `app.use(UiLib)`. Local import: `import { Breadcrumb } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `unknown[]` | `[]` | Kısa yol: `[{ label, to, href, icon }]`. Son öğe bulunulan sayfadır. Verilmezse öğeler slot'a `ui-breadcrumb-item` olarak yazılır. |
| `max-items` | `number` | `0` | `items` bu sayıyı aşarsa ilk öğe ile son öğeler kalır, aradakiler `…` menüsünde toplanır. `0`: daraltma yok. Yalnız `items` ile çalışır (slot öğeleri daraltılmaz). |
| `aria-label` | `string` | `""` | Verilmezse `ui.breadcrumb.ariaLabel`. |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

