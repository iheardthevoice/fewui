<!-- Aç/kapa anahtarı: yatay form satırında ayar; kart satırı ve devre dışı durum. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="QR menüden sipariş"
      description="Misafir masadaki kodu okutup sipariş verebilir."
      direction="horizontal"
    >
      <ui-switch v-model="qrOrdering" />
    </ui-form-row>

    <ui-form-row
      label="Stok bitince gizle"
      description="Tükenen ürün menüde görünmez."
      direction="horizontal"
      variant="card"
    >
      <ui-switch v-model="hideSoldOut" />
    </ui-form-row>

    <ui-form-row
      label="Çevrimiçi ödeme"
      description="Ödeme sağlayıcısı bağlanınca açılır."
      direction="horizontal"
      variant="card"
    >
      <ui-switch
        :model-value="false"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'SwitchExample',
  data() {
    return {
      qrOrdering: true,
      hideSoldOut: false,
    }
  },
}
</script>
