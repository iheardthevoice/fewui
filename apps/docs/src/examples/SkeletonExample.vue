<!-- İskelet: tek başına yer tutucu şekiller ve içeriği saran kullanım (`loading` bitince içerik görünür). -->
<template>
  <div class="flex max-w-md flex-col gap-6">
    <div class="flex items-center gap-3">
      <div class="size-10 shrink-0">
        <ui-skeleton variant="circle" />
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <div class="w-1/2">
          <ui-skeleton size="sm" />
        </div>
        <div class="w-3/4">
          <ui-skeleton size="sm" />
        </div>
      </div>
      <div class="w-20">
        <ui-skeleton variant="pill" />
      </div>
    </div>

    <ui-skeleton variant="block" />

    <ui-card title="Son siparişler">
      <template #append>
        <ui-button variant="outline" color="secondary" size="sm" @click="reload">Yenile</ui-button>
      </template>
      <ui-skeleton :loading="loading">
        <ui-list>
          <ui-list-item title="Bahçe 4" description="3 ürün · ₺1.140" icon="receipt" trailing-icon="none" />
          <ui-list-item title="Salon 2" description="2 ürün · ₺640" icon="receipt" trailing-icon="none" />
        </ui-list>
      </ui-skeleton>
    </ui-card>
  </div>
</template>

<script>
export default {
  name: 'SkeletonExample',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    reload() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
    },
  },
}
</script>
