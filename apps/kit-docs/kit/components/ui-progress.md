---
title: ui-progress
outline: [2, 3]
---

# ui-progress

İlerleme: çubuk ve daire; durum tonları, belirsiz (indeterminate) yükleme.

## Example

<ExampleFrame name="Progress" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Günlük ciro hedefi"
      description="₺48.250 / ₺60.000"
    >
      <ui-progress :value="80" aria-label="Günlük ciro hedefi" aria-valuetext="Yüzde 80" />
    </ui-form-row>

    <div class="flex flex-col gap-2">
      <ui-progress :value="25" variant="weak" size="thin" aria-label="Stok: kritik" />
      <ui-progress :value="55" variant="fair" size="thin" aria-label="Stok: azalıyor" />
      <ui-progress :value="90" variant="strong" size="thin" aria-label="Stok: yeterli" />
    </div>

    <ui-progress indeterminate aria-label="Menü içe aktarılıyor" />

    <div class="flex flex-wrap items-center gap-4">
      <ui-progress type="circle" :value="40" size="md" aria-label="Kurulum" />
      <ui-progress type="circle" :value="65" size="xl" aria-label="Doluluk" />
      <ui-progress type="circle" :value="85" size="2xl" variant="good" aria-label="Hedef" />
      <ui-progress type="circle" indeterminate size="lg" aria-label="Yükleniyor" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressExample',
}
</script>
```

## Usage

Registered globally as `<ui-progress>` by `app.use(UiLib)`. Local import: `import { Progress } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `'bar' \| 'circle'` | `"bar"` | `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) |
| `value` | `number` | `0` | 0 … `max` |
| `max` | `number` | `100` |  |
| `size` | `string` | `"md"` | Daire: sm 16px, md 20px, lg 24px, xl 40px, 2xl 56px. Çubuk: thin 4px (şifre gücü), md 8px (slider izi). |
| `variant` | `'default' \| 'weak' \| 'fair' \| 'good' \| 'strong'` | `"default"` | Çubuk / halka dolgu rengi — şifre gücü vb. |
| `indeterminate` | `boolean` | `false` |  |
| `presentational` | `boolean` | `false` | Slider izi gibi — progressbar rolü / aria yok |
| `aria-label` | `string` | `""` |  |
| `aria-valuetext` | `string` | `""` |  |

