<!-- Seçim kutusu: tekli, aramalı ve temizlenebilir, çoklu etiket seçimi ve açıklamalı seçenekler. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Kategori">
      <ui-select
        v-model="category"
        :options="categories"
        placeholder="Kategori seçin"
      />
    </ui-form-row>

    <ui-form-row label="Masa">
      <ui-select
        v-model="table"
        :options="tables"
        filterable
        clearable
        prefix-icon="chair"
        placeholder="Masa seçin"
        filter-placeholder="Masa ara…"
      />
    </ui-form-row>

    <ui-form-row
      label="Alerjenler"
      description="QR menüde ürünün altında gösterilir."
    >
      <ui-select
        v-model="allergens"
        :options="allergenOptions"
        multiple
        filterable
        placeholder="Alerjen ekleyin"
      />
    </ui-form-row>

    <ui-form-row label="Yazıcı">
      <ui-select
        v-model="printer"
        :options="printers"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'SelectExample',
  data() {
    return {
      category: 'pizza',
      table: null,
      allergens: ['gluten', 'milk'],
      printer: 'kitchen',
      categories: [
        { value: 'pizza', label: 'Pizzalar' },
        { value: 'pasta', label: 'Makarnalar' },
        { value: 'dessert', label: 'Tatlılar' },
        { value: 'drink', label: 'İçecekler' },
      ],
      tables: Array.from({ length: 12 }, (_, i) => ({
        value: i + 1,
        label: i < 6 ? `Salon ${i + 1}` : `Bahçe ${i - 5}`,
      })),
      allergenOptions: [
        { value: 'gluten', label: 'Gluten' },
        { value: 'milk', label: 'Süt' },
        { value: 'egg', label: 'Yumurta' },
        { value: 'nuts', label: 'Kuruyemiş' },
        { value: 'sesame', label: 'Susam' },
      ],
      printers: [
        { value: 'kitchen', label: 'Mutfak', description: 'Sıcak ve soğuk hazırlık' },
        { value: 'bar', label: 'Bar', description: 'İçecek siparişleri' },
        { value: 'cashier', label: 'Kasa', badge: 'Çevrimdışı', badgeColor: 'warning' },
      ],
    }
  },
}
</script>
