<!-- Çip grubu: tekli dönem seçimi, çoklu etiket seçimi ve küçük boyut. -->
<template>
  <div class="flex flex-col gap-4">
    <ui-chip-group
      v-model="period"
      :options="periods"
      aria-label="Dönem"
    />

    <ui-chip-group
      v-model="requests"
      :options="requestOptions"
      multiple
      :scrollable="false"
      aria-label="Rezervasyon istekleri"
    />

    <ui-chip-group
      v-model="area"
      :options="areas"
      size="sm"
      clearable
      aria-label="Salon"
    />

    <p class="ui-text-default m-0">
      Dönem: {{ period }} · İstekler: {{ requests.join(', ') || 'yok' }} · Salon: {{ area || 'tümü' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ChipGroupExample',
  data() {
    return {
      period: 'today',
      requests: ['window'],
      area: null,
      periods: [
        { value: 'today', label: 'Bugün' },
        { value: 'yesterday', label: 'Dün' },
        { value: 'week', label: 'Bu hafta' },
        { value: 'month', label: 'Bu ay' },
      ],
      requestOptions: [
        { value: 'window', label: 'Cam kenarı' },
        { value: 'highchair', label: 'Mama sandalyesi' },
        { value: 'birthday', label: 'Doğum günü' },
        { value: 'quiet', label: 'Sessiz masa' },
      ],
      areas: [
        { value: 'hall', label: 'Salon' },
        { value: 'garden', label: 'Bahçe' },
        { value: 'terrace', label: 'Teras' },
      ],
    }
  },
}
</script>
