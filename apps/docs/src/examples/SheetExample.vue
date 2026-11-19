<!-- Yan panel (sheet): detay ve hızlı düzenleme için sağdan açılır; başlık prop ile, eylem footer'da. -->
<template>
  <div class="flex flex-wrap items-center gap-2">
    <ui-button variant="outline" color="secondary" prefix-icon="receipt" @click="open = true">
      Siparişi aç
    </ui-button>
    <ui-button variant="ghost" color="secondary" prefix-icon="sliders" @click="filtersOpen = true">
      Filtreler
    </ui-button>

    <ui-sheet
      v-model:open="open"
      title="Bahçe 4"
      description="4 kişi · 19.42'de açıldı"
      icon="receipt"
    >
      <ui-list variant="divided">
        <ui-list-item
          v-for="item in items"
          :key="item.title"
          tag="li"
          :title="item.title"
          :description="item.note"
          :value="item.price"
          trailing-icon="none"
        />
      </ui-list>

      <template #footer>
        <ui-button block @click="open = false">Ödeme al · ₺1.140</ui-button>
      </template>
    </ui-sheet>

    <ui-sheet
      v-model:open="filtersOpen"
      side="left"
      size="sm"
      title="Filtreler"
      icon="sliders"
    >
      <div class="flex flex-col gap-4">
        <ui-form-row label="Salon">
          <ui-select v-model="area" :options="areas" />
        </ui-form-row>
        <ui-form-row label="Yalnız açık siparişler" direction="horizontal">
          <ui-switch v-model="openOnly" />
        </ui-form-row>
      </div>
    </ui-sheet>
  </div>
</template>

<script>
export default {
  name: 'SheetExample',
  data() {
    return {
      open: false,
      filtersOpen: false,
      area: 'garden',
      openOnly: true,
      areas: [
        { value: 'hall', label: 'Salon' },
        { value: 'garden', label: 'Bahçe' },
      ],
      items: [
        { title: '2 × Margherita', note: 'Biri az pişmiş', price: '₺570' },
        { title: '1 × Sezar salata', note: '', price: '₺240' },
        { title: '3 × Ev limonatası', note: 'Buzsuz', price: '₺330' },
      ],
    }
  },
}
</script>
