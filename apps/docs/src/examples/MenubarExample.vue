<template>
  <ui-menubar
    :menus="menus"
    aria-label="Menü düzenleyici"
    @select="onSelect"
  />
</template>

<script>
export default {
  name: 'MenubarExample',
  data() {
    return {
      showGrid: true,
    }
  },
  computed: {
    menus() {
      return [
        {
          label: 'Dosya',
          items: [
            { id: 'new', label: 'Yeni menü', shortcut: '⌘N' },
            { id: 'open', label: 'Aç…', shortcut: '⌘O' },
            {
              id: 'share',
              label: 'Paylaş',
              children: [
                { id: 'share-link', label: 'Bağlantı kopyala' },
                { id: 'share-qr', label: 'QR kod indir' },
              ],
            },
            { divider: true },
            { id: 'print', label: 'Yazdır', shortcut: '⌘P' },
          ],
        },
        {
          label: 'Düzen',
          items: [
            { id: 'undo', label: 'Geri al', shortcut: '⌘Z' },
            { id: 'redo', label: 'Yinele', shortcut: '⇧⌘Z' },
            { divider: true },
            { id: 'cut', label: 'Kes', shortcut: '⌘X' },
            { id: 'copy', label: 'Kopyala', shortcut: '⌘C' },
          ],
        },
        {
          label: 'Görünüm',
          items: [
            { id: 'grid', type: 'checkbox', label: 'Izgarayı göster', checked: this.showGrid },
            { id: 'fullscreen', label: 'Tam ekran', shortcut: 'F11' },
          ],
        },
      ]
    },
  },
  methods: {
    onSelect(item, state) {
      if (item.id === 'grid') this.showGrid = state.checked
    },
  },
}
</script>
