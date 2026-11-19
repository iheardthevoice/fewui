<!-- Yapay zekâ eylemi düğmesi: varsayılan, küçük ve üretim sürerken yükleniyor durumu. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-ai-button
        :loading="generating"
        loading-text="Yazılıyor…"
        @click="generate"
      >
        Açıklamayı yazdır
      </ui-ai-button>
      <ui-ai-button
        size="sm"
        prefix-icon="image"
      >
        Görsel üret
      </ui-ai-button>
      <ui-ai-button disabled>Kredi bitti</ui-ai-button>
    </div>

    <p
      v-if="description"
      class="ui-text-default m-0 max-w-md"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AiButtonExample',
  data() {
    return {
      generating: false,
      description: '',
    }
  },
  methods: {
    generate() {
      this.generating = true
      setTimeout(() => {
        this.generating = false
        this.description = 'Odun ateşinde pişen ince hamur, San Marzano domates sosu ve taze fesleğen.'
      }, 1200)
    },
  },
}
</script>
