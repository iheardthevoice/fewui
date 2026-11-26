<!-- Form satırı: etiket + açıklama, sağ üst eylem, hata durumu, yatay ve kart görünümü. -->
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
