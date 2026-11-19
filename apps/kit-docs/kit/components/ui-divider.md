---
title: ui-divider
outline: [2, 3]
---

# ui-divider

Ayırıcı: düz çizgi, etiketli ve ikonlu bölüm ayırıcı; boşluk `spacing` ile.

## Example

<ExampleFrame name="Divider" />

```vue
<template>
  <div class="flex max-w-md flex-col">
    <p class="ui-text-default m-0">2 × Margherita · ₺570</p>
    <ui-divider spacing="sm" />
    <p class="ui-text-default m-0">1 × Sezar salata · ₺240</p>

    <ui-divider title="İçecekler" />
    <p class="ui-text-default m-0">3 × Ev limonatası · ₺330</p>

    <ui-divider title="Ödeme" icon="credit-card" />
    <p class="ui-text-default m-0">Kredi kartı · ₺1.140</p>

    <ui-divider spacing="none" />
    <p class="ui-text-default m-0">Boşluksuz ayırıcı, çevresindeki yerleşim boşluğu verir.</p>
  </div>
</template>

<script>
export default {
  name: 'DividerExample',
}
</script>
```

## Usage

Registered globally as `<ui-divider>` by `app.use(UiLib)`. Local import: `import { Divider } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `""` | Ortada gösterilecek başlık — `icon` ile birlikte etiketli ayırıcı |
| `icon` | `string` | `""` | Başlık yanında gösterilecek ikon (`ui-icon` `name`) |
| `spacing` | `'none' \| 'sm' \| 'md'` | `"md"` | Dikey boşluk (üst/alt). `none`: yalnızca çizgi — üst bileşenin kendi gap’i ile hizalamak için. |
| `decorative` | `boolean` | `true` | true: yalnızca görsel — `role="presentation"`, ekran okuyucu atlar. false: `role="separator"` + `aria-orientation="horizontal"`. |

