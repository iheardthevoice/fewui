<!-- Ayırıcı: düz çizgi, etiketli ve ikonlu bölüm ayırıcı; boşluk `spacing` ile. -->
<template>
  <div class="flex max-w-md flex-col">
    <p class="ui-text-default m-0">2 × Margherita · ₺570</p>
    <ui-divider spacing="sm" />
    <p class="ui-text-default m-0">1 × Sezar salata · ₺240</p>

    <ui-divider title="İçecekler" />
    <p class="ui-text-default m-0">3 × Ev limonatası · ₺330</p>

    <ui-divider title="Ödeme" icon="credit-card" />
    <p class="ui-text-default m-0">Kredi kartı · ₺1.140</p>

    <ui-divider spacing="none" />
    <p class="ui-text-default m-0">Boşluksuz ayırıcı, çevresindeki yerleşim boşluğu verir.</p>
  </div>
</template>

<script>
export default {
  name: 'DividerExample',
}
</script>
