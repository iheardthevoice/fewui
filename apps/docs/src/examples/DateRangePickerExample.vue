<!-- Tarih aralığı: hazır dönemlerle rapor filtresi ve özel hazır seçim listesi. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-date-range-picker
        v-model="reportRange"
        placement="bottom-start"
        placeholder="Dönem seçin"
      />
      <span class="ui-text-default">{{ rangeText }}</span>
    </div>

    <div class="max-w-md">
      <ui-form-row label="Kampanya süresi">
        <ui-date-range-picker
          v-model="campaignRange"
          :presets="campaignPresets"
          :min="today"
          placement="bottom-start"
          placeholder="Başlangıç – bitiş"
        />
      </ui-form-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateRangePickerExample',
  data() {
    return {
      today: '2026-11-17',
      reportRange: ['2026-11-01', '2026-11-17'],
      campaignRange: ['', ''],
      campaignPresets: [
        { key: 'weekend', label: 'Bu hafta sonu', range: ['2026-11-21', '2026-11-22'] },
        { key: 'week', label: '1 hafta', range: ['2026-11-17', '2026-11-23'] },
        { key: 'month', label: '1 ay', range: ['2026-11-17', '2026-12-16'] },
      ],
    }
  },
  computed: {
    rangeText() {
      const [start, end] = this.reportRange
      return start && end ? `${start} → ${end}` : 'Dönem seçilmedi'
    },
  },
}
</script>
