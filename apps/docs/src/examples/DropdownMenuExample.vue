<template>
  <ui-dropdown
    :items="items"
    @select="onSelect"
  >
    <template #trigger="{ toggle, triggerAttrs }">
      <ui-button
        variant="outline"
        color="secondary"
        suffix-icon="chevron-down"
        v-bind="triggerAttrs"
        @click="toggle"
      >
        Görünüm
      </ui-button>
    </template>
  </ui-dropdown>
</template>

<script>
export default {
  name: 'DropdownMenuExample',
  data() {
    return {
      showPrices: true,
      showImages: false,
      density: 'comfortable',
    }
  },
  computed: {
    items() {
      return [
        { id: 'new', label: 'Yeni ürün', icon: 'plus', shortcut: '⌘N' },
        { id: 'duplicate', label: 'Çoğalt', icon: 'copy', shortcut: '⌘D' },
        {
          id: 'export',
          label: 'Dışa aktar',
          icon: 'arrow-up-from-bracket',
          children: [
            { id: 'export-csv', label: 'CSV' },
            { id: 'export-xlsx', label: 'Excel' },
            { id: 'export-pdf', label: 'PDF' },
          ],
        },
        { heading: 'Sütunlar' },
        { id: 'prices', type: 'checkbox', label: 'Fiyatlar', checked: this.showPrices },
        { id: 'images', type: 'checkbox', label: 'Görseller', checked: this.showImages },
        { heading: 'Yoğunluk' },
        { id: 'compact', type: 'radio', group: 'density', label: 'Sıkı', checked: this.density === 'compact' },
        { id: 'comfortable', type: 'radio', group: 'density', label: 'Rahat', checked: this.density === 'comfortable' },
        { divider: true },
        { id: 'delete', label: 'Sil', icon: 'trash', color: 'danger', shortcut: '⌫' },
      ]
    },
  },
  methods: {
    /** Onay / radyo öğelerinde ikinci argüman `{ checked, group }` taşır. */
    onSelect(item, state) {
      if (item.id === 'prices') this.showPrices = state.checked
      if (item.id === 'images') this.showImages = state.checked
      if (state?.group === 'density') this.density = item.id
    },
  },
}
</script>
