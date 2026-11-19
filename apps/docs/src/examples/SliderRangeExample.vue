<template>
  <div class="flex max-w-md flex-col gap-6">
    <ui-form-row
      label="Fiyat aralığı"
      description="Menüde yalnız bu aralıktaki ürünler listelenir."
    >
      <ui-slider
        v-model="price"
        range
        :min="0"
        :max="1500"
        :step="50"
        :min-distance="100"
        :value-text="priceText"
        :format-value="formatLira"
        min-label="0 ₺"
        max-label="1.500 ₺"
        aria-label="Fiyat aralığı"
      />
    </ui-form-row>

    <ui-form-row label="Rezervasyon saatleri">
      <ui-slider
        v-model="hours"
        range
        :min="10"
        :max="24"
        :value-text="`${formatHour(hours[0])} – ${formatHour(hours[1])}`"
        :format-value="formatHour"
        aria-label="Rezervasyon saatleri"
      />
    </ui-form-row>
  </div>
</template>

<script>
const lira = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 })

export default {
  name: 'SliderRangeExample',
  data() {
    return {
      price: [200, 850],
      hours: [12, 22],
    }
  },
  computed: {
    priceText() {
      return `${lira.format(this.price[0])} – ${lira.format(this.price[1])}`
    },
  },
  methods: {
    formatLira(value) {
      return lira.format(value)
    },
    formatHour(value) {
      return `${String(value).padStart(2, '0')}:00`
    },
  },
}
</script>
