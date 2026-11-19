---
title: ui-avatar-group
outline: [2, 3]
---

# ui-avatar-group

Avatar: adın baş harfleri, boyutlar, şekiller ve görsel; grup içinde taşan kişi sayısı.

Used with: [`ui-avatar`](./ui-avatar)

## Example

<ExampleFrame name="Avatar" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <ui-avatar name="Ayşe Yılmaz" size="xs" />
      <ui-avatar name="Ayşe Yılmaz" size="sm" />
      <ui-avatar name="Ayşe Yılmaz" />
      <ui-avatar name="Ayşe Yılmaz" size="lg" />
      <ui-avatar name="Ayşe Yılmaz" size="xl" />
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <ui-avatar name="Mert Kaya" shape="rounded" />
      <ui-avatar name="Lokanta Moda" shape="square" />
      <ui-avatar name="Selin Ak" ring />
      <ui-avatar :src="photo" alt="Deniz Arslan" />
      <ui-avatar name="Deniz Arslan" interactive aria-label="Deniz Arslan profilini aç" />
    </div>

    <ui-avatar-group :overflow-count="3" aria-label="Vardiyadaki personel">
      <ui-avatar name="Ayşe Yılmaz" />
      <ui-avatar name="Mert Kaya" />
      <ui-avatar name="Deniz Arslan" />
    </ui-avatar-group>
  </div>
</template>

<script>
const PHOTO_SVG = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' fill='#0ea5e9'/><circle cx='20' cy='16' r='7' fill='#e0f2fe'/><circle cx='20' cy='40' r='14' fill='#e0f2fe'/></svg>"

export default {
  name: 'AvatarExample',
  data() {
    return {
      photo: `data:image/svg+xml,${encodeURIComponent(PHOTO_SVG)}`,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-avatar-group>` by `app.use(UiLib)`. Local import: `import { AvatarGroup } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `'md'` | `"md"` |  |
| `overflow-count` | `number` | `0` | Extra count shown as +N after visible avatars. |
| `aria-label` | `string` | `""` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

