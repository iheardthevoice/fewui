<!-- Dialog: başlık, açıklama ve ikon prop ile; footer'da yalnız birincil eylem, kapatma başlıktaki X ile. -->
<template>
  <div class="flex flex-wrap items-center gap-2">
    <ui-button prefix-icon="plus" @click="open = true">Masa ekle</ui-button>
    <span
      v-if="saved"
      class="ui-text-default"
    >
      Son eklenen: {{ saved }}
    </span>

    <ui-dialog
      v-model:open="open"
      title="Masa ekle"
      description="Masa salon planında ve POS'ta hemen görünür."
      icon="chair"
      max-width="md"
    >
      <form
        class="flex flex-col gap-4"
        novalidate
        @submit.prevent="save"
      >
        <ui-form-row label="Masa adı">
          <ui-input v-model="form.name" placeholder="Örn. Bahçe 7" />
        </ui-form-row>
        <ui-form-row label="Salon">
          <ui-select v-model="form.area" :options="areas" />
        </ui-form-row>
        <ui-form-row label="Kişi sayısı">
          <ui-input v-model="form.seats" type="number" />
        </ui-form-row>
      </form>

      <template #footer>
        <ui-button block @click="save">Kaydet</ui-button>
      </template>
    </ui-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogExample',
  data() {
    return {
      open: false,
      saved: '',
      form: { name: '', area: 'garden', seats: 4 },
      areas: [
        { value: 'hall', label: 'Salon' },
        { value: 'garden', label: 'Bahçe' },
        { value: 'terrace', label: 'Teras' },
      ],
    }
  },
  methods: {
    save() {
      this.saved = this.form.name || 'Adsız masa'
      this.open = false
    },
  },
}
</script>
