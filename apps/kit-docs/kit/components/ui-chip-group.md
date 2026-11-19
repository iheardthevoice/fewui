---
title: ui-chip-group
outline: [2, 3]
---

# ui-chip-group

Çip grubu: tekli dönem seçimi, çoklu etiket seçimi ve küçük boyut.

## Example

<ExampleFrame name="ChipGroup" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <ui-chip-group
      v-model="period"
      :options="periods"
      aria-label="Dönem"
    />

    <ui-chip-group
      v-model="requests"
      :options="requestOptions"
      multiple
      :scrollable="false"
      aria-label="Rezervasyon istekleri"
    />

    <ui-chip-group
      v-model="area"
      :options="areas"
      size="sm"
      clearable
      aria-label="Salon"
    />

    <p class="ui-text-default m-0">
      Dönem: {{ period }} · İstekler: {{ requests.join(', ') || 'yok' }} · Salon: {{ area || 'tümü' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ChipGroupExample',
  data() {
    return {
      period: 'today',
      requests: ['window'],
      area: null,
      periods: [
        { value: 'today', label: 'Bugün' },
        { value: 'yesterday', label: 'Dün' },
        { value: 'week', label: 'Bu hafta' },
        { value: 'month', label: 'Bu ay' },
      ],
      requestOptions: [
        { value: 'window', label: 'Cam kenarı' },
        { value: 'highchair', label: 'Mama sandalyesi' },
        { value: 'birthday', label: 'Doğum günü' },
        { value: 'quiet', label: 'Sessiz masa' },
      ],
      areas: [
        { value: 'hall', label: 'Salon' },
        { value: 'garden', label: 'Bahçe' },
        { value: 'terrace', label: 'Teras' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-chip-group>` by `app.use(UiLib)`. Local import: `import { ChipGroup } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string \| number \| boolean \| unknown[]` | `null` | Tek seçimde değer, `multiple` ile dizi |
| `options` | `unknown[]` | `[]` | `{ value, label, icon?, disabled?, ariaLabel?, ariaCurrent? }[]` (`ariaCurrent`: ör. `'date'` bugünkü birim) |
| `multiple` | `boolean` | `false` |  |
| `clearable` | `boolean` | `false` | Tek seçimde seçili çipe tekrar basınca seçimi kaldırır |
| `size` | `string` |  | Verilmezse temanın kontrol boyutu (`controlSize`, varsayılan md) — yanındaki seçici ve filtre çipleriyle aynı yükseklik ve metin. Eskiden sabit `sm` idi. Yoğun yerlerde `size="sm"` verilir. |
| `scrollable` | `boolean` | `true` | Tek satırda yatay kaydırma (dar ekran); `false` iken alt satıra kayar |
| `disabled` | `boolean` | `false` |  |
| `aria-label` | `string` | `""` |  |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |

## Slots

| Slot | Slot props |
| --- | --- |
| `option` | `option`, `selected` |

