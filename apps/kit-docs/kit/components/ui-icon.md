---
title: ui-icon
outline: [2, 3]
---

# ui-icon

İkon: Font Awesome adıyla; boyutlar, ağırlık (`type`) ve metinle birlikte kullanım.

## Example

<ExampleFrame name="Icon" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <ui-icon name="utensils" size="xs" />
      <ui-icon name="utensils" size="sm" />
      <ui-icon name="utensils" />
      <ui-icon name="utensils" size="lg" />
      <ui-icon name="utensils" size="xl" />
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <ui-icon name="bell" type="light" size="lg" />
      <ui-icon name="bell" type="regular" size="lg" />
      <ui-icon name="bell" type="solid" size="lg" />
      <ui-icon name="spotify" type="brands" size="lg" />
    </div>

    <p class="ui-text-default m-0 flex items-center gap-2">
      <ui-icon name="clock" size="sm" />
      Mutfak 23.00'te kapanır
    </p>

    <ui-icon name="triangle-exclamation" show-accessible-name aria-label="Stok azaldı" />
  </div>
</template>

<script>
export default {
  name: 'IconExample',
}
</script>
```

## Usage

Registered globally as `<ui-icon>` by `app.use(UiLib)`. Local import: `import { Icon } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` * | `string` |  | Font Awesome icon name without the `fa-` prefix (e.g. `house`). |
| `type` | `string` |  |  |
| `size` | `'md'` | `"md"` | Visual size (maps to Tailwind `text-*`). |
| `show-accessible-name` | `boolean` | `false` | true: `aria-label` i18n `ui.icon.accessible` ile, `role="img"`. false: dekoratif — `aria-hidden="true"`. |

\* required

