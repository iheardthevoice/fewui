---
title: ui-select
outline: [2, 3]
---

# ui-select

Seçim kutusu: tekli, aramalı ve temizlenebilir, çoklu etiket seçimi ve açıklamalı seçenekler.

## Example

<ExampleFrame name="Select" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Kategori">
      <ui-select
        v-model="category"
        :options="categories"
        placeholder="Kategori seçin"
      />
    </ui-form-row>

    <ui-form-row label="Masa">
      <ui-select
        v-model="table"
        :options="tables"
        filterable
        clearable
        prefix-icon="chair"
        placeholder="Masa seçin"
        filter-placeholder="Masa ara…"
      />
    </ui-form-row>

    <ui-form-row
      label="Alerjenler"
      description="QR menüde ürünün altında gösterilir."
    >
      <ui-select
        v-model="allergens"
        :options="allergenOptions"
        multiple
        filterable
        placeholder="Alerjen ekleyin"
      />
    </ui-form-row>

    <ui-form-row label="Yazıcı">
      <ui-select
        v-model="printer"
        :options="printers"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'SelectExample',
  data() {
    return {
      category: 'pizza',
      table: null,
      allergens: ['gluten', 'milk'],
      printer: 'kitchen',
      categories: [
        { value: 'pizza', label: 'Pizzalar' },
        { value: 'pasta', label: 'Makarnalar' },
        { value: 'dessert', label: 'Tatlılar' },
        { value: 'drink', label: 'İçecekler' },
      ],
      tables: Array.from({ length: 12 }, (_, i) => ({
        value: i + 1,
        label: i < 6 ? `Salon ${i + 1}` : `Bahçe ${i - 5}`,
      })),
      allergenOptions: [
        { value: 'gluten', label: 'Gluten' },
        { value: 'milk', label: 'Süt' },
        { value: 'egg', label: 'Yumurta' },
        { value: 'nuts', label: 'Kuruyemiş' },
        { value: 'sesame', label: 'Susam' },
      ],
      printers: [
        { value: 'kitchen', label: 'Mutfak', description: 'Sıcak ve soğuk hazırlık' },
        { value: 'bar', label: 'Bar', description: 'İçecek siparişleri' },
        { value: 'cashier', label: 'Kasa', badge: 'Çevrimdışı', badgeColor: 'warning' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-select>` by `app.use(UiLib)`. Local import: `import { Select } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'field' \| 'inline'` | `"field"` |  |
| `size` | `'md' \| 'lg' \| 'sm'` |  |  |
| `model-value` | `string \| number \| boolean \| unknown[]` |  |  |
| `multiple` | `boolean` | `false` | Çoklu seçim — `modelValue` dizi; tetikleyicide etiketler + arama, listede onay işareti |
| `options` | `unknown[]` | `[]` |  |
| `disabled` | `boolean` | `false` |  |
| `loading` | `boolean` | `false` |  |
| `placeholder` | `string` |  |  |
| `clearable` | `boolean` | `false` |  |
| `filterable` | `boolean` | `false` |  |
| `filter-placeholder` | `string` | `""` |  |
| `prefix-icon` | `string` | `null` | Tetikleyici sol ikon (`ui-icon` `name`) |
| `name` | `string` |  |  |
| `id` | `string` |  |  |
| `aria-describedby` | `string` |  |  |
| `block` | `boolean` | `true` |  |
| `match-trigger-width` | `boolean` | `true` |  |
| `width` | `string \| number` | `null` | Seçenek panelinin sabit genişliği (ör. `'18rem'`). Özel `#trigger` ile açılan ve seçenekleri açılınca yüklenen listelerde panel boş/iskelet hâliyle daralmaz. |
| `scroll-list-threshold` | `number` | `6` |  |
| `remote-filter` | `boolean` | `false` | Sunucu tarafı arama — liste yerel filtrelenmez; `filter-change` yayınlanır |
| `open` | `boolean` |  | Liste açık durumu — `v-model:open` ile kontrol edilebilir |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |
| `update:open` | `@update:open` |
| `filter-change` | `@filter-change` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close`, `label`, `hasValue` |
| `option` | `option`, `selected` |
| `footer` | `…` |

