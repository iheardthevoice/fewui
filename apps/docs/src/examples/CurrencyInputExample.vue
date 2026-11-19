<!-- Tutar girişi: para birimi ve yerel biçim alan üzerinde verilir; küçük boyut ve salt okunur durum. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Kasa açılış tutarı">
      <ui-currency-input v-model="opening" />
    </ui-form-row>

    <ui-form-row label="Döviz ile tahsilat">
      <ui-currency-input
        v-model="foreign"
        currency="USD"
        locale="en-US"
      />
    </ui-form-row>

    <ui-form-row label="Sayılan tutar">
      <ui-currency-input
        :model-value="counted"
        size="sm"
        readonly
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'CurrencyInputExample',
  data() {
    return {
      opening: 1500,
      foreign: 40,
      counted: 1462.5,
    }
  },
}
</script>
