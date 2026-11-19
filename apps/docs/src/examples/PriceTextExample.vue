<!-- Tutar metni: eşit genişlikli rakam; boyutlar, tonlar ve üstü çizili eski fiyat. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-baseline gap-4">
      <ui-price-text value="₺285,00" size="sm" />
      <ui-price-text value="₺285,00" />
      <ui-price-text value="₺285,00" size="lg" />
      <ui-price-text value="₺285,00" size="xl" />
      <ui-price-text value="₺285,00" size="2xl" />
    </div>

    <div class="flex flex-wrap items-baseline gap-4">
      <ui-price-text value="+₺1.240,00" tone="success" />
      <ui-price-text value="−₺380,00" tone="danger" />
      <ui-price-text value="₺0,00" tone="muted" />
      <ui-price-text value="₺48.250,00" tone="primary" />
    </div>

    <div class="flex items-baseline gap-2">
      <ui-price-text value="₺320,00" tone="muted" strike />
      <ui-price-text value="₺285,00" size="lg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceTextExample',
}
</script>
