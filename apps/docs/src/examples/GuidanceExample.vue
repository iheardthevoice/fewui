<!-- Yönlendirme: sayfa içinde kart olarak ve bir düğmenin yanında popover olarak; "Git" eylemi `go` olayıdır. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-guidance
      mode="card"
      icon="qrcode"
      title="QR menünüzü masalara yerleştirin"
      description="Misafir kodu okutup menüyü telefonunda görür; garson beklemeden sipariş verebilir."
      go-label="QR kodları indir"
      @go="message = 'QR kodlar indiriliyor.'"
    />

    <div class="flex flex-wrap items-center gap-2">
      <ui-guidance
        v-model:open="tipOpen"
        mode="popover"
        icon="lightbulb"
        title="Hesabı bölmek ister misiniz?"
        description="Ürünleri kişilere dağıtın; her misafir kendi payını öder."
        go-label="Hesabı böl"
        @go="message = 'Hesap bölme açıldı.'"
      >
        <template #trigger="{ toggle }">
          <ui-button variant="outline" color="secondary" prefix-icon="circle-question" @click="toggle">
            Nasıl çalışır?
          </ui-button>
        </template>
      </ui-guidance>
      <span class="ui-text-default">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuidanceExample',
  data() {
    return {
      tipOpen: false,
      message: '',
    }
  },
}
</script>
