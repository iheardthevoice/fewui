---
title: ui-form-row
outline: [2, 3]
---

# ui-form-row

Form satırı: etiket + açıklama, sağ üst eylem, hata durumu, yatay ve kart görünümü.

## Example

<ExampleFrame name="FormRow" />

```vue
<template>
  <form
    class="flex max-w-md flex-col gap-4"
    novalidate
    @submit.prevent
  >
    <ui-form-row
      label="Restoran adı"
      description="QR menüde ve fişlerde görünür."
    >
      <ui-input v-model="name" />
    </ui-form-row>

    <ui-form-row label="Site adresi">
      <template #action>
        <ui-button variant="link" color="secondary" size="sm">Adresi kopyala</ui-button>
      </template>
      <ui-input v-model="slug">
        <template #append>
          <span class="ui-text-default">.restta.com</span>
        </template>
      </ui-input>
    </ui-form-row>

    <ui-form-row
      label="E-posta"
      error="Geçerli bir e-posta adresi girin; örnek: ad@alanadi.com"
    >
      <ui-input v-model="email" type="email" />
    </ui-form-row>

    <ui-form-row
      label="Rezervasyon al"
      description="Site ve QR menüde rezervasyon formu açılır."
      direction="horizontal"
      variant="card"
    >
      <ui-switch v-model="reservations" />
    </ui-form-row>

    <!-- variant="inset": iOS form — gruplu kartın satırı; etiket solda, kutusuz değer sağda. Etiketsiz + primary = büyük ana alan. -->
    <ui-list-group>
      <ui-form-row
        variant="inset"
        primary
      >
        <ui-input
          v-model="productName"
          aria-label="Ürün adı"
          placeholder="Örn: Adana kebap"
        />
      </ui-form-row>
    </ui-list-group>
    <ui-list-group footer="KDV restoran ayarındaki oranla kaydedilir.">
      <ui-form-row
        variant="inset"
        label="Fiyat"
      >
        <ui-price-input v-model="price" />
      </ui-form-row>
      <ui-form-row
        variant="inset"
        label="Birim"
      >
        <ui-select
          v-model="unit"
          :options="unitOptions"
          :match-trigger-width="false"
        />
      </ui-form-row>
      <ui-form-row
        variant="inset"
        label="Öne çıkan ürün"
      >
        <ui-switch v-model="featured" />
      </ui-form-row>
      <ui-form-row
        variant="inset"
        label="Açıklama"
      >
        <ui-input
          v-model="description"
          multiline
          :rows="3"
          placeholder="Lezzetini, porsiyonunu anlatın…"
        />
      </ui-form-row>
    </ui-list-group>
  </form>
</template>

<script>
export default {
  name: 'FormRowExample',
  data() {
    return {
      name: 'Lokanta Moda',
      slug: 'lokanta-moda',
      email: 'deniz@',
      reservations: true,
      productName: '',
      price: 180,
      unit: 'piece',
      unitOptions: [
        { value: 'piece', label: 'Adet' },
        { value: 'portion', label: 'Porsiyon' },
      ],
      featured: false,
      description: '',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-form-row>` by `app.use(UiLib)`. Local import: `import { FormRow } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `direction` | `'vertical' \| 'horizontal'` | `"vertical"` | `vertical`: etiket üstte, kontrol altta, açıklama kontrolün altında. `horizontal`: etiket + açıklama solda, kontrol sağda (Preferences). |
| `stack-on-mobile` | `boolean` | `false` | `direction="horizontal"` iken dar viewport’ta dikey yığılır (`max-width: 1023px` — segment `icon-only="mobile"` ile aynı kırılım). |
| `variant` | `'default' \| 'card' \| 'inset'` | `"default"` | `default`: mevcut `direction` düzeni. `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`. `inset`: `ui-list-group` kartının satırı (iOS form) — etiket solda, kutusuz kontrol sağda; etiketsiz satır tam genişlik (`primary` ise büyük ana alan). Açıklama / hata satırın altında. |
| `id` | `string` |  | Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. |
| `error` | `string` | `""` | Alan hatası (WCAG 3.3.1). Verilince kontrolün altında gösterilir; kontrol `aria-invalid` ve `aria-describedby` ile otomatik bağlanır (FormRow içindeki ilk fewui kontrolü). |
| `field` | `string` | `""` | Alan adı. Üstteki form hata bağlamında (`UI_FORM_ERRORS_KEY`) bu ada bir mesaj varsa `error` verilmiş gibi gösterilir; kullanıcı satırdaki kontrolü değiştirince mesaj silinir. Birden çok ad boşlukla ayrılır (`"startDate endDate"`). |
| `primary` | `boolean` | `false` | Dialog oluşturma formlarında ana alan — açılışta odak hedefi (kontrol boyutunu değiştirmez) |

## Slots

| Slot | Slot props |
| --- | --- |
| `action` |  |
| `default` | `controlId`, `descriptionId`, `invalid` |

