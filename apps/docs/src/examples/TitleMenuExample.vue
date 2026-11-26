<!-- Başlık menüsü: başlığın kendisi dokunulabilir; favori gibi başlık eylemleri menüde, durum (★) yalnız etkinken. -->
<template>
  <div class="flex flex-col gap-6">
    <h1 class="ui-heading-2 m-0">
      <ui-title-menu
        title="Ürünler"
        :items="items"
        :suffix-icon="favorite ? 'star' : ''"
        suffix-icon-color="warning"
        @select="onSelect"
      />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleMenuExample',
  data() {
    return { favorite: true }
  },
  computed: {
    items() {
      return [
        { value: 'favorite', icon: 'star', label: this.favorite ? 'Favorilerden çıkar' : 'Favorilere ekle' },
        { value: 'copy', icon: 'link', label: 'Bağlantıyı kopyala' },
      ]
    },
  },
  methods: {
    onSelect(item) {
      if (item?.value === 'favorite') this.favorite = !this.favorite
    },
  },
}
</script>
