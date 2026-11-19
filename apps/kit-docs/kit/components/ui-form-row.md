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
| `variant` | `'default' \| 'card'` | `"default"` | `default`: mevcut `direction` düzeni. `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`. |
| `id` | `string` |  | Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. |
| `error` | `string` | `""` | Alan hatası (WCAG 3.3.1). Verilince kontrolün altında gösterilir; kontrol `aria-invalid` ve `aria-describedby` ile otomatik bağlanır (FormRow içindeki ilk fewui kontrolü). |
| `field` | `string` | `""` | Alan adı. Üstteki form hata bağlamında (`UI_FORM_ERRORS_KEY`) bu ada bir mesaj varsa `error` verilmiş gibi gösterilir; kullanıcı satırdaki kontrolü değiştirince mesaj silinir. Birden çok ad boşlukla ayrılır (`"startDate endDate"`). |
| `primary` | `boolean` | `false` | Dialog oluşturma formlarında ana alan — açılışta odak hedefi (kontrol boyutunu değiştirmez) |

## Slots

| Slot | Slot props |
| --- | --- |
| `action` |  |
| `default` | `controlId`, `descriptionId`, `invalid` |

