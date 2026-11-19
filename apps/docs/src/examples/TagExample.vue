<!-- Etiket: kaldırılabilir ürün etiketleri (`remove` olayı); ton, görünüm ve boyutlar. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-tag
        v-for="tag in tags"
        :key="tag"
        removable
        @remove="remove(tag)"
      >
        {{ tag }}
      </ui-tag>
      <ui-button
        v-if="tags.length < initialTags.length"
        variant="link"
        size="sm"
        @click="tags = [...initialTags]"
      >
        Geri yükle
      </ui-button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-tag color="primary">Şefin önerisi</ui-tag>
      <ui-tag color="success" variant="muted">Vegan</ui-tag>
      <ui-tag color="warning" variant="muted">Acılı</ui-tag>
      <ui-tag color="danger" variant="outline">Alerjen</ui-tag>
      <ui-tag size="md">Orta</ui-tag>
      <ui-tag size="lg">Büyük</ui-tag>
    </div>
  </div>
</template>

<script>
const INITIAL_TAGS = ['Glutensiz', 'Mevsimlik', 'Paylaşımlık', 'Çocuk menüsü']

export default {
  name: 'TagExample',
  data() {
    return {
      initialTags: INITIAL_TAGS,
      tags: [...INITIAL_TAGS],
    }
  },
  methods: {
    remove(tag) {
      this.tags = this.tags.filter((row) => row !== tag)
    },
  },
}
</script>
