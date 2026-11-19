<!-- Fiyat girişi: uygulamanın para birimi ayarını kullanır; alan bazında para birimi değiştirilebilir. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Satış fiyatı">
      <ui-price-input v-model="price" />
    </ui-form-row>

    <ui-form-row
      label="Paket servis fiyatı"
      description="Boş bırakılırsa satış fiyatı kullanılır."
    >
      <ui-price-input
        v-model="deliveryPrice"
        placeholder="0,00"
      />
    </ui-form-row>

    <ui-form-row label="Tedarikçi fiyatı (EUR)">
      <ui-price-input
        v-model="supplierPrice"
        currency="EUR"
        format="de-DE"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'PriceInputExample',
  data() {
    return {
      price: 285,
      deliveryPrice: '',
      supplierPrice: 12.5,
    }
  },
}
</script>
