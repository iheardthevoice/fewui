---
title: ui-checkbox
outline: [2, 3]
---

# ui-checkbox

Onay kutusu: tek başına, grup içinde liste ve düğme görünümü; "tümünü seç" için ara durum.

Used with: [`ui-checkbox-group`](./ui-checkbox-group)

## Example

<ExampleFrame name="Checkbox" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Fiş ayarları">
      <ui-checkbox
        v-model="printLogo"
        label="Fişte logo yazdır"
        description="Logo, Ayarlar › Marka bölümünden alınır."
      />
    </ui-form-row>

    <ui-form-row label="Satış kanalları">
      <div class="flex flex-col gap-2">
        <ui-checkbox
          :model-value="allChannels"
          :indeterminate="someChannels"
          label="Tüm kanallar"
          @update:model-value="toggleAllChannels"
        />
        <ui-checkbox-group
          v-model="channels"
          aria-label="Satış kanalları"
        >
          <ui-checkbox value="dine-in" label="Salon" />
          <ui-checkbox value="takeaway" label="Gel al" />
          <ui-checkbox value="delivery" label="Paket servis" description="Yalnız tanımlı bölgelere" />
        </ui-checkbox-group>
      </div>
    </ui-form-row>

    <ui-form-row label="Açık günler">
      <ui-checkbox-group
        v-model="days"
        variant="button"
        orientation="horizontal"
        aria-label="Açık günler"
      >
        <ui-checkbox value="fri" label="Cuma" />
        <ui-checkbox value="sat" label="Cumartesi" />
        <ui-checkbox value="sun" label="Pazar" />
      </ui-checkbox-group>
    </ui-form-row>
  </div>
</template>

<script>
const ALL_CHANNELS = ['dine-in', 'takeaway', 'delivery']

export default {
  name: 'CheckboxExample',
  data() {
    return {
      printLogo: true,
      channels: ['dine-in', 'takeaway'],
      days: ['fri', 'sat'],
    }
  },
  computed: {
    allChannels() {
      return this.channels.length === ALL_CHANNELS.length
    },
    someChannels() {
      return this.channels.length > 0 && !this.allChannels
    },
  },
  methods: {
    toggleAllChannels(checked) {
      this.channels = checked ? [...ALL_CHANNELS] : []
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-checkbox>` by `app.use(UiLib)`. Local import: `import { Checkbox } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string \| number \| boolean` |  | Grup modunda seçenek kimliği. |
| `model-value` | `boolean` |  | Tekil mod: `v-model` boolean. |
| `label` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `highlight` | `boolean` | `false` | `list` varyantında satırları eşit iç boşluklu kutu yapar; işaretli satır dolgu ile vurgulanır (kenarlık yok). |
| `size` | `'md'` | `"md"` | Kutu ölçüsü: sm 16px · md 18px · lg 22px (dokunmatik satır) |
| `presentational` | `boolean` | `false` | Yalnız durum göstergesi — etiket gövdesi yok, tıklama / odak dıştaki satır düğmesinde (ör. sepet satırında seçim kutusu). Satır kendi `aria-pressed` / `aria-checked` bilgisini taşır. |
| `indeterminate` | `boolean` | `false` | Kısmi seçim — "Tümünü seç" alt öğelerin bir kısmı seçiliyken (WAI-ARIA Checkbox, tri-state). Görünüm dolu + çizgi; `aria-checked="mixed"`. Tıklanınca `update:modelValue` normal akışla çalışır. |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |

## Slots

| Slot | Slot props |
| --- | --- |
| `label` |  |

