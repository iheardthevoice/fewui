<!-- Yan yana eylem düğmeleri: aralıklı, birleşik (joined) ve eşit genişlikte (grow) grup. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-action-group aria-label="Sipariş işlemleri">
      <ui-button variant="outline" color="secondary" prefix-icon="print">Fiş yazdır</ui-button>
      <ui-button variant="outline" color="secondary" prefix-icon="arrows-turn-right">Masa taşı</ui-button>
    </ui-action-group>

    <ui-action-group
      joined
      divided
      aria-label="Görünüm"
    >
      <ui-button variant="outline" color="secondary" prefix-icon="chevron-left" aria-label="Önceki gün" />
      <ui-button variant="outline" color="secondary">Bugün</ui-button>
      <ui-button variant="outline" color="secondary" prefix-icon="chevron-right" aria-label="Sonraki gün" />
    </ui-action-group>

    <ui-action-group
      grow
      aria-label="Ödeme"
    >
      <ui-button variant="outline" color="secondary">Hesabı böl</ui-button>
      <ui-button>Ödeme al</ui-button>
    </ui-action-group>
  </div>
</template>

<script>
export default {
  name: 'ActionGroupExample',
}
</script>
