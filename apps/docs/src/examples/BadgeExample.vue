<!-- Rozet: durum bilgisi için dolu, soluk ve çerçeveli görünüm; ikonlu, özel renkli ve boyutlar. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-badge color="primary">Yeni</ui-badge>
      <ui-badge color="secondary">Taslak</ui-badge>
      <ui-badge color="success">Ödendi</ui-badge>
      <ui-badge color="warning">Bekliyor</ui-badge>
      <ui-badge color="info">Rezerve</ui-badge>
      <ui-badge color="danger">İptal</ui-badge>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-badge color="success" variant="muted" prefix-icon="check">Hazır</ui-badge>
      <ui-badge color="warning" variant="muted" prefix-icon="clock">18 dk</ui-badge>
      <ui-badge color="danger" variant="muted">Stokta yok</ui-badge>
      <ui-badge color="info" variant="outline">Paket servis</ui-badge>
      <ui-badge hex="#8b5cf6">Vegan</ui-badge>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-badge size="xs" color="secondary">3</ui-badge>
      <ui-badge size="sm" color="secondary">Salon</ui-badge>
      <ui-badge size="md" color="secondary">Bahçe</ui-badge>
      <ui-badge size="lg" color="secondary">Teras</ui-badge>
      <ui-badge color="secondary" max-width="32" tooltip="Glutensiz, laktozsuz ve şeker ilavesiz">
        Glutensiz, laktozsuz ve şeker ilavesiz
      </ui-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadgeExample',
}
</script>
