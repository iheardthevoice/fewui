<!-- Uyarı kutusu: bilgi, başarı, uyarı ve tehlike tonu; eylem düğmesi, kapatılabilir uyarı ve sayfa üstü banner. -->
<template>
  <div class="flex max-w-xl flex-col gap-4">
    <ui-alert
      banner
      color="warning"
      title="Bağlantı yok"
      description="Satış kaydı için internet bağlantısı gerekir."
    />

    <ui-alert
      title="Yeni menü yayında"
      description="QR menüdeki değişiklikler misafirlere hemen yansır."
    />

    <ui-alert
      v-if="showStock"
      color="warning"
      title="3 üründe stok kritik seviyede"
      description="Tiramisu, San Sebastian ve ev limonatası bugün tükenebilir."
      dismissible
      @dismiss="showStock = false"
    >
      <ui-button size="sm" color="warning">Stokları gör</ui-button>
    </ui-alert>

    <ui-alert
      color="danger"
      live="assertive"
      title="Mutfak yazıcısı yanıt vermiyor"
      description="Siparişler kuyruğa alındı; yazıcı bağlanınca yazdırılır."
      actions-end
    >
      <ui-button size="sm" variant="outline" color="danger">Yeniden dene</ui-button>
    </ui-alert>

    <ui-alert
      color="success"
      title="Gün sonu tamamlandı"
      :show-icon="false"
    />
  </div>
</template>

<script>
export default {
  name: 'AlertExample',
  data() {
    return {
      showStock: true,
    }
  },
}
</script>
