---
title: ui-file
outline: [2, 3]
---

# ui-file

Dosya ve klasör: ikon uzantıdan seçilir; boyutlar ve özel ikon / renk.

## Example

<ExampleFrame name="File" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-start gap-4">
      <ui-file name="Menü 2026" kind="folder" />
      <ui-file name="menu-kis.pdf" />
      <ui-file name="urunler.xlsx" />
      <ui-file name="logo.png" />
      <ui-file name="sozlesme.docx" :basename-only="false" />
    </div>

    <div class="flex flex-wrap items-end gap-4">
      <ui-file name="gun-sonu.csv" size="sm" />
      <ui-file name="gun-sonu.csv" size="md" />
      <ui-file name="gun-sonu.csv" size="lg" />
      <ui-file name="Yedek" icon="box-archive" color="amber" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileExample',
}
</script>
```

## Usage

Registered globally as `<ui-file>` by `app.use(UiLib)`. Local import: `import { File } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` * | `string` |  | Dosya veya klasör adı (veya yol — `basename-only` ile yalnız son parça gösterilir) |
| `kind` | `'auto' \| 'file' \| 'folder'` | `"auto"` | `auto`: sonda `/` veya `\\` → klasör; aksi dosya |
| `size` | `'md' \| 'lg'` | `"md"` | Finder tarzı düzen ölçeği |
| `icon` | `string` | `""` | Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır |
| `icon-type` | `string` |  |  |
| `color` | `string` | `""` | İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) |
| `basename-only` | `boolean` | `true` | true: etikette yalnızca yolun son segmenti |
| `hide-label` | `boolean` | `false` | true: yalnızca ikon kabuğu (dışarıda etiket gösteren grid’ler için) |

\* required

