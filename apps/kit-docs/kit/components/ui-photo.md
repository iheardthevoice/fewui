---
title: ui-photo
outline: [2, 3]
---

# ui-photo

Fotoğraf: sabit boyutlar, en-boy oranı, favori işareti ve görsel yokken yer tutucu; tıklayınca önizleme açılır.

## Example

<ExampleFrame name="Photo" />

```vue
<template>
  <div class="flex flex-wrap items-start gap-4">
    <ui-photo :src="pizza" alt="Margherita" size="sm" />
    <ui-photo :src="pizza" alt="Margherita" size="md" favorite />
    <ui-photo :src="salad" alt="Sezar salata" size="lg" aspect="video" />
    <ui-photo alt="Görsel eklenmemiş ürün" size="md" :preview="false" />
  </div>
</template>

<script>
function sampleImage(background, accent) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='640' viewBox='0 0 160 160'><rect width='160' height='160' fill='${background}'/><circle cx='80' cy='80' r='52' fill='${accent}'/><circle cx='62' cy='68' r='9' fill='${background}'/><circle cx='98' cy='92' r='9' fill='${background}'/></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default {
  name: 'PhotoExample',
  data() {
    return {
      pizza: sampleImage('#fde68a', '#f97316'),
      salad: sampleImage('#bbf7d0', '#16a34a'),
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-photo>` by `app.use(UiLib)`. Local import: `import { Photo } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | `""` |  |
| `alt` | `string` | `""` |  |
| `favorite` | `boolean` | `false` |  |
| `aspect` | `'square' \| 'video' \| 'auto'` | `"square"` |  |
| `size` | `'fill' \| 'sm' \| 'md' \| 'lg'` | `"fill"` |  |
| `interactive` | `boolean` | `true` |  |
| `preview` | `boolean` | `true` |  |
| `overflow-label` | `string` | `""` |  |
| `gallery-index` | `number` | `-1` |  |

## Events

| Event | Listener |
| --- | --- |
| `click` | `@click` |
| `open-preview` | `@open-preview` |

