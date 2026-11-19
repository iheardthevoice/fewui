---
title: ui-filter-chip
outline: [2, 3]
---

# ui-filter-chip

Filtre çipi: boş ve dolu durum, temizleme düğmesi ve tonlu çip.

## Example

<ExampleFrame name="FilterChip" />

```vue
<template>
  <div class="flex flex-wrap items-center gap-1.5">
    <ui-filter-chip
      icon="chair"
      empty-label="Masa"
      :value-label="table"
      :empty="!table"
      clearable
      @click="table = 'Bahçe 4'"
      @clear="table = ''"
    />
    <ui-filter-chip
      icon="user"
      empty-label="Garson"
      :value-label="waiter"
      :empty="!waiter"
      clearable
      suffix-icon="chevron-down"
      @click="waiter = 'Ayşe Yılmaz'"
      @clear="waiter = ''"
    />
    <ui-filter-chip
      icon="triangle-exclamation"
      empty-label="Geciken"
      value-label="Geciken · 3"
      :empty="!lateOnly"
      :active="lateOnly"
      color="warning"
      @click="lateOnly = !lateOnly"
    />
    <ui-filter-chip
      icon="calendar"
      empty-label="Tarih"
      disabled
      empty
    />
  </div>
</template>

<script>
export default {
  name: 'FilterChipExample',
  data() {
    return {
      table: 'Bahçe 4',
      waiter: '',
      lateOnly: true,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-filter-chip>` by `app.use(UiLib)`. Local import: `import { FilterChip } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `string` | `""` |  |
| `empty-label` * | `string` |  | Değer yokken etiket (ör. “Masa seç”) |
| `value-label` | `string` | `""` | Değer varken etiket |
| `empty` | `boolean` | `false` |  |
| `active` | `boolean` | `false` | Bağlı seçici açıkken değer yokken de vurgulu görünür |
| `clearable` | `boolean` | `false` |  |
| `disabled` | `boolean` | `false` |  |
| `aria-label` | `string` | `""` |  |
| `aria-expanded` | `boolean \| string` |  |  |
| `aria-haspopup` | `boolean \| string` |  | Açtığı katman türü (`true` / `dialog` / `listbox` …) — `aria-haspopup`. |
| `suffix-icon` | `string` | `""` | Değer boşken (veya temizlenemezken) sağdaki ikon; doluyken × önceliklidir. |
| `size` | `string` |  | Verilmezse temanın kontrol boyutu (`controlSize`, varsayılan md = 32px) — yanındaki arama kutusu ve butonlarla aynı yükseklik. Eskiden sabit `sm` idi: tablo araç çubuğundaki çipler panelin geri kalanından bir kademe küçük kalıyordu. Yoğun yerlerde `size="sm"` verilir. |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `""` | Verilirse boş / dolu durum rengi yerine sabit ton kullanılır |

\* required

## Events

| Event | Listener |
| --- | --- |
| `click` | `@click` |
| `clear` | `@clear` |

