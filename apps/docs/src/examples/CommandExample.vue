<template>
  <div class="flex flex-col items-start gap-3">
    <ui-button
      variant="outline"
      color="secondary"
      prefix-icon="magnifying-glass"
      @click="open = true"
    >
      Komut ara
      <ui-kbd keys="mod+k" />
    </ui-button>
    <ui-command
      v-model:open="open"
      :items="items"
      hotkey="mod+k"
      placeholder="Sayfa veya işlem ara…"
      empty-text="Eşleşen komut yok."
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  name: 'CommandExample',
  data() {
    return {
      open: false,
      last: null,
      items: [
        { id: 'pos', group: 'Sayfalar', label: 'Satış', icon: 'cash-register', keywords: ['pos', 'kasa'] },
        { id: 'menu', group: 'Sayfalar', label: 'Menü', icon: 'utensils', keywords: ['ürün', 'katalog'] },
        { id: 'reservations', group: 'Sayfalar', label: 'Rezervasyonlar', icon: 'calendar' },
        { id: 'new-product', group: 'İşlemler', label: 'Yeni ürün ekle', icon: 'plus', shortcut: '⌘N' },
        { id: 'new-reservation', group: 'İşlemler', label: 'Rezervasyon oluştur', icon: 'calendar-plus' },
        { id: 'close-day', group: 'İşlemler', label: 'Günü kapat', icon: 'moon', description: 'Kasa sayımı ve gün sonu raporu', disabled: true },
      ],
    }
  },
  methods: {
    onSelect(item) {
      this.last = item.id
    },
  },
}
</script>
