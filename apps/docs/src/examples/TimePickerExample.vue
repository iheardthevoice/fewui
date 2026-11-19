<!-- Saat seçici: 15 dakikalık adım (varsayılan), 30 dakikalık adım ve devre dışı durum. -->
<template>
  <div class="grid max-w-md grid-cols-2 gap-4">
    <ui-form-row label="Açılış">
      <ui-time-picker
        v-model="opensAt"
        placeholder="Saat seçin"
      />
    </ui-form-row>

    <ui-form-row label="Kapanış">
      <ui-time-picker
        v-model="closesAt"
        placeholder="Saat seçin"
      />
    </ui-form-row>

    <ui-form-row label="Rezervasyon saati">
      <ui-time-picker
        v-model="reservationTime"
        :step-minutes="30"
        placeholder="Saat seçin"
      />
    </ui-form-row>

    <ui-form-row label="Gün sonu">
      <ui-time-picker
        model-value="04:00"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'TimePickerExample',
  data() {
    return {
      opensAt: '09:00',
      closesAt: '23:30',
      reservationTime: '',
    }
  },
}
</script>
