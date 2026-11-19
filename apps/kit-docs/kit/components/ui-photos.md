---
title: ui-photos
outline: [2, 3]
---

# ui-photos

Fotoğraf ızgarası: `max` kadar görsel gösterir, kalanını "+N" ile özetler; tıklayınca galeri önizlemesi açılır.

## Example

<ExampleFrame name="Photos" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-photos :items="photos" :max="4" />
    <div class="max-w-xs">
      <ui-photos :items="photos.slice(0, 3)" aspect="video" :max="3" />
    </div>
  </div>
</template>

<script>
function sampleImage(background, accent) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='640' viewBox='0 0 160 160'><rect width='160' height='160' fill='${background}'/><circle cx='80' cy='80' r='52' fill='${accent}'/></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default {
  name: 'PhotosExample',
  data() {
    return {
      photos: [
        { key: 'pizza', src: sampleImage('#fde68a', '#f97316'), alt: 'Margherita', favorite: true },
        { key: 'salad', src: sampleImage('#bbf7d0', '#16a34a'), alt: 'Sezar salata' },
        { key: 'dessert', src: sampleImage('#fbcfe8', '#db2777'), alt: 'Tiramisu' },
        { key: 'drink', src: sampleImage('#bae6fd', '#0284c7'), alt: 'Ev limonatası' },
        { key: 'soup', src: sampleImage('#fed7aa', '#c2410c'), alt: 'Mercimek çorbası' },
        { key: 'pasta', src: sampleImage('#e9d5ff', '#7c3aed'), alt: 'Penne arrabbiata' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-photos>` by `app.use(UiLib)`. Local import: `import { Photos } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `unknown[]` | `[]` |  |
| `max` | `number` | `4` |  |
| `aspect` | `'square' \| 'video' \| 'auto'` | `"square"` |  |
| `preview` | `boolean` | `true` |  |

