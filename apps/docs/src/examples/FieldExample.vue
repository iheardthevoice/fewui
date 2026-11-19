<!-- Salt okunur alan: kayıt detayında etiket + değer (`size="sm"`); ikonlu ve kart görünümü. -->
<template>
  <div class="flex max-w-xl flex-col gap-6">
    <div class="grid grid-cols-2 gap-4">
      <ui-field size="sm" title="Kasa">
        <ui-button variant="link">Ana Kasa</ui-button>
      </ui-field>
      <ui-field size="sm" title="Ödeme">Nakit</ui-field>
      <ui-field size="sm" title="Masa">Bahçe 4</ui-field>
      <ui-field size="sm" title="Kaydeden" subtitle="17 Kas 2026, 21.14">Ayşe Yılmaz</ui-field>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <ui-field card icon="calendar" icon-tone="primary" title="Rezervasyon">
        Cumartesi 20.00
      </ui-field>
      <ui-field card icon="users" icon-tile icon-tone="success" title="Misafir">
        4 kişi
      </ui-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldExample',
}
</script>
