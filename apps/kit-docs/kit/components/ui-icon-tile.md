---
title: ui-icon-tile
outline: [2, 3]
---

# ui-icon-tile

İkon karosu: satır ve kart başlığındaki renkli ikon kutusu; ton, dolu görünüm, boyut, daire ve özel renk.

## Example

<ExampleFrame name="IconTile" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <ui-icon-tile icon="utensils" />
      <ui-icon-tile icon="chair" color="primary" />
      <ui-icon-tile icon="sack-dollar" color="success" />
      <ui-icon-tile icon="clock" color="warning" />
      <ui-icon-tile icon="calendar" color="info" />
      <ui-icon-tile icon="ban" color="danger" />
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <ui-icon-tile icon="vault" size="sm" />
      <ui-icon-tile icon="vault" size="md" />
      <ui-icon-tile icon="vault" size="lg" />
      <ui-icon-tile icon="check" color="success" variant="solid" shape="circle" />
      <ui-icon-tile icon="leaf" hex="#16a34a" />
      <ui-icon-tile icon="pepper-hot" hex="#dc2626" variant="solid" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconTileExample',
}
</script>
```

## Usage

Registered globally as `<ui-icon-tile>` by `app.use(UiLib)`. Local import: `import { IconTile } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` * | `string` |  |  |
| `icon-type` | `'solid'` |  |  |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'info' \| 'danger'` | `""` | `primary \| secondary \| success \| warning \| info \| danger`; boş → nötr |
| `variant` | `'soft' \| 'solid'` | `"soft"` | `soft`: tonun açık zemini + ton rengi ikon · `solid`: dolu ton + ön plan rengi |
| `hex` | `string` | `""` | Geçerli hex (#RGB / #RRGGBB); verilirse `color` yerine kullanılır |
| `size` | `'sm' \| 'md' \| 'lg'` | `"md"` | sm 28px · md 40px · lg 44px |
| `shape` | `'rounded' \| 'circle'` | `"rounded"` |  |

\* required

