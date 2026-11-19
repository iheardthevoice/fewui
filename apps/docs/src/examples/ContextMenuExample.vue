<template>
  <ui-context-menu
    :items="items"
    @select="onSelect"
  >
    <div class="flex h-32 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
      Masa 12 — sağ tıklayın veya basılı tutun
    </div>
  </ui-context-menu>
</template>

<script>
export default {
  name: 'ContextMenuExample',
  data() {
    return {
      pinned: false,
    }
  },
  computed: {
    items() {
      return [
        { id: 'open', label: 'Siparişi aç', icon: 'receipt', shortcut: '↵' },
        { id: 'pin', type: 'checkbox', label: 'Üste sabitle', checked: this.pinned },
        {
          id: 'move',
          label: 'Masaya taşı',
          icon: 'arrow-right-arrow-left',
          children: [
            { id: 'move-salon', label: 'Salon' },
            { id: 'move-terrace', label: 'Teras' },
            { id: 'move-garden', label: 'Bahçe' },
          ],
        },
        { divider: true },
        { id: 'close', label: 'Masayı kapat', icon: 'xmark', color: 'danger' },
      ]
    },
  },
  methods: {
    onSelect(item, state) {
      if (item.id === 'pin') this.pinned = state.checked
    },
  },
}
</script>
