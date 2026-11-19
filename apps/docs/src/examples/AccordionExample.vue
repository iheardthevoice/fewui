<template>
  <div class="flex max-w-xl flex-col gap-8">
    <ui-accordion v-model="open">
      <ui-accordion-item
        value="hours"
        title="Çalışma saatleri"
        description="Hafta içi ve hafta sonu ayrı tanımlanır"
        icon="clock"
      >
        Mutfak hafta içi 23.00'te, hafta sonu 00.30'da kapanır. Kapanıştan sonra gelen siparişler ertesi iş gününe yazılır.
      </ui-accordion-item>
      <ui-accordion-item
        value="service"
        title="Servis ücreti"
        icon="receipt"
      >
        <template #append>
          <ui-badge color="success">Açık</ui-badge>
        </template>
        Adisyona %10 servis ücreti eklenir. Paket siparişlerde uygulanmaz.
      </ui-accordion-item>
      <ui-accordion-item
        value="printers"
        title="Yazıcılar"
        icon="print"
        disabled
      >
        Bu bölüm yalnızca yönetici hesabıyla açılır.
      </ui-accordion-item>
    </ui-accordion>

    <ui-accordion
      variant="card"
      multiple
      :default-value="['delivery']"
    >
      <ui-accordion-item
        value="delivery"
        title="Paket servis bölgeleri"
      >
        Üç bölge tanımlı. En düşük sipariş tutarı bölgeye göre değişir.
      </ui-accordion-item>
      <ui-accordion-item
        value="payment"
        title="Ödeme yöntemleri"
      >
        Nakit, kredi kartı ve yemek kartı kabul edilir.
      </ui-accordion-item>
    </ui-accordion>
  </div>
</template>

<script>
export default {
  name: 'AccordionExample',
  data() {
    return {
      open: 'hours',
    }
  },
}
</script>
