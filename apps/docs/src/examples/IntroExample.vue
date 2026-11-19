<!-- Tanıtım turu: ilk girişte tam ekran, adım adım karşılama; atlanabilir ve sonunda `finish` olayı verir. -->
<template>
  <div class="flex flex-wrap items-center gap-2">
    <ui-button prefix-icon="play" @click="start">Tanıtımı başlat</ui-button>
    <span class="ui-text-default">{{ status }}</span>

    <ui-intro
      v-model:open="open"
      v-model="step"
      :steps="steps"
      aria-label="Restta tanıtımı"
      finish-label="Kuruluma başla"
      @skip="status = 'Tanıtım atlandı.'"
      @finish="status = 'Tanıtım tamamlandı.'"
    />
  </div>
</template>

<script>
export default {
  name: 'IntroExample',
  data() {
    return {
      open: false,
      step: 0,
      status: '',
      steps: [
        {
          key: 'menu',
          icon: 'utensils',
          title: 'Menünüzü ekleyin',
          description: 'Ürünleri kategorilere ayırın; fiyat ve görsel ekleyin. QR menü kendiliğinden güncellenir.',
        },
        {
          key: 'tables',
          icon: 'chair',
          title: 'Masalarınızı yerleştirin',
          description: 'Salon planını çizin; her masanın siparişi kendi adisyonunda toplanır.',
        },
        {
          key: 'pos',
          icon: 'cash-register',
          title: 'Satışa başlayın',
          description: 'Siparişi alın, mutfağa gönderin ve ödemeyi tek ekrandan tamamlayın.',
        },
      ],
    }
  },
  methods: {
    start() {
      this.step = 0
      this.open = true
    },
  },
}
</script>
