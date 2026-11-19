<!-- Adım göstergesi: çok adımlı formda `pills`, içerik `ui-step` panellerinde; altta dikey ilerleme listesi. -->
<template>
  <div class="flex max-w-md flex-col gap-8">
    <div class="flex flex-col gap-5">
      <ui-stepper
        v-model="step"
        variant="pills"
        interactive
        :steps="steps"
        aria-label="Restoran kurulumu"
      />
      <ui-step :active="step === 0">
        <ui-form-row label="Restoran adı">
          <ui-input v-model="name" />
        </ui-form-row>
      </ui-step>
      <ui-step :active="step === 1">
        <ui-form-row label="Masa sayısı">
          <ui-input v-model="tableCount" type="number" />
        </ui-form-row>
      </ui-step>
      <ui-step :active="step === 2">
        <p class="ui-text-default m-0">{{ name }} için {{ tableCount }} masa oluşturulacak.</p>
      </ui-step>
      <ui-button block :disabled="step === steps.length - 1" @click="step++">İleri</ui-button>
    </div>

    <ui-stepper
      :model-value="1"
      direction="vertical"
      :steps="setupSteps"
      aria-label="Kurulum durumu"
    />
  </div>
</template>

<script>
export default {
  name: 'StepperExample',
  data() {
    return {
      step: 0,
      name: 'Lokanta Moda',
      tableCount: 12,
      steps: [
        { title: 'Restoran' },
        { title: 'Masalar' },
        { title: 'Özet' },
      ],
      setupSteps: [
        { title: 'Menü eklendi', description: '42 ürün, 6 kategori' },
        { title: 'Masaları yerleştirin', description: 'Salon planını çizin' },
        { title: 'Yazıcıyı bağlayın', description: 'Mutfak ve kasa fişleri' },
      ],
    }
  },
}
</script>
