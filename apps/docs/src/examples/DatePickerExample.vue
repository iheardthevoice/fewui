<!-- Tarih seçici: hızlı seçimli (bugün / yarın) alan, en erken tarih sınırı ve devre dışı durum. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Rezervasyon tarihi">
      <ui-date-picker
        v-model="reservationDate"
        :min="today"
        placeholder="Tarih seçin"
      />
    </ui-form-row>

    <ui-form-row
      label="Kampanya başlangıcı"
      description="Seçilen günün açılışında başlar."
    >
      <ui-date-picker
        v-model="campaignStart"
        :show-quick="false"
        placeholder="Tarih seçin"
      />
    </ui-form-row>

    <ui-form-row label="Kayıt tarihi">
      <ui-date-picker
        model-value="2026-03-14"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'DatePickerExample',
  data() {
    return {
      today: '2026-11-17',
      reservationDate: '2026-11-21',
      campaignStart: '',
    }
  },
}
</script>
