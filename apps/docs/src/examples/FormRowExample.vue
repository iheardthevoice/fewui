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
