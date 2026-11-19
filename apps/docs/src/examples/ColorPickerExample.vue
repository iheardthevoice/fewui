<!-- Renk seçici: hazır palet + özel renk; etiketli sınırlı seçenek listesi. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Kategori rengi"
      description="POS'ta kategori karosunun zeminidir."
    >
      <ui-color-picker
        v-model="categoryColor"
        trigger-placeholder="Renk seçin"
        popover-title="Kategori rengi"
      />
    </ui-form-row>

    <ui-form-row label="Masa durumu rengi">
      <ui-color-picker
        v-model="statusColor"
        :options="statusColors"
        :show-custom="false"
        :show-clear="false"
        trigger-placeholder="Renk seçin"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'ColorPickerExample',
  data() {
    return {
      categoryColor: '#fb923c',
      statusColor: '#4ade80',
      statusColors: [
        { value: '#4ade80', label: 'Boş' },
        { value: '#fbbf24', label: 'Dolu' },
        { value: '#60a5fa', label: 'Rezerve' },
        { value: '#f87171', label: 'Hesap istendi' },
      ],
    }
  },
}
</script>
