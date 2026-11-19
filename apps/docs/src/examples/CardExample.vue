<!-- Kart: başlık, açıklama ve ikon prop ile; sağ üst eylem (`#append`), footer ve tıklanabilir kart. -->
<template>
  <div class="grid max-w-3xl gap-4 md:grid-cols-2">
    <ui-card
      title="Günün özeti"
      description="17 Kasım Salı"
      icon="chart-simple"
      icon-color="primary"
    >
      <template #append>
        <ui-badge color="success" variant="muted">Açık</ui-badge>
      </template>
      <ui-stat-group :columns="2" :min-columns="2" aria-label="Günün özeti">
        <ui-stat variant="plain" size="md" title="Ciro" value="₺48.250" />
        <ui-stat variant="plain" size="md" title="Sipariş" value="126" />
      </ui-stat-group>
      <template #footer>
        <ui-button block variant="outline" color="secondary">Raporu aç</ui-button>
      </template>
    </ui-card>

    <div class="flex flex-col gap-4">
      <ui-card
        title="Ana Kasa"
        description="Nakit · ₺6.420"
        icon="vault"
        interactive
        @click="clicks++"
      />
      <ui-card
        title="Yeni kasa"
        description="Şube veya vardiya için ayrı kasa açın."
        icon="plus"
        border-type="dashed"
        transparent
      >
        <p class="ui-text-default m-0">Kart {{ clicks }} kez tıklandı.</p>
      </ui-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardExample',
  data() {
    return {
      clicks: 0,
    }
  },
}
</script>
