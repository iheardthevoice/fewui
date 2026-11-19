<!-- Birincil, ikincil ve tehlike düğmeleri; ikonlu, yalnız ikonlu ve yükleniyor durumu. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-button prefix-icon="plus">Ürün ekle</ui-button>
      <ui-button variant="outline" color="secondary">Taslak kaydet</ui-button>
      <ui-button variant="muted">Önizle</ui-button>
      <ui-button variant="ghost" color="secondary" prefix-icon="print">Yazdır</ui-button>
      <ui-button variant="link" to="/">Tüm ürünler</ui-button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-button color="danger" prefix-icon="trash">Sil</ui-button>
      <ui-button variant="outline" color="danger">Siparişi iptal et</ui-button>
      <ui-button color="success" suffix-icon="arrow-right">Ödeme al</ui-button>
      <ui-button disabled>Stokta yok</ui-button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-button size="sm">Küçük</ui-button>
      <ui-button size="md">Orta</ui-button>
      <ui-button size="lg">Büyük</ui-button>
      <ui-button rounded>Hap</ui-button>
      <ui-button
        variant="outline"
        color="secondary"
        cubed
        prefix-icon="ellipsis"
        aria-label="Diğer işlemler"
      />
    </div>

    <div class="max-w-xs">
      <ui-button
        block
        :loading="saving"
        loading-text="Kaydediliyor…"
        @click="save"
      >
        Kaydet
      </ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonExample',
  data() {
    return {
      saving: false,
    }
  },
  methods: {
    save() {
      this.saving = true
      setTimeout(() => {
        this.saving = false
      }, 1500)
    },
  },
}
</script>
