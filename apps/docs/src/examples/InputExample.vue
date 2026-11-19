<!-- Metin girişi: ikonlu arama, ek (append) alanı, çok satırlı not ve devre dışı durum. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="Ürün adı">
      <ui-input
        v-model="name"
        placeholder="Örn. Margherita"
      />
    </ui-form-row>

    <ui-form-row label="Ürün ara">
      <ui-input
        v-model="query"
        type="search"
        prefix-icon="magnifying-glass"
        placeholder="Ad veya barkod"
      />
    </ui-form-row>

    <ui-form-row label="Hazırlama süresi">
      <ui-input
        v-model="prepMinutes"
        type="number"
      >
        <template #append>
          <span class="ui-text-default">dk</span>
        </template>
      </ui-input>
    </ui-form-row>

    <ui-form-row
      label="Mutfak notu"
      description="Fişte ürünün altında yazdırılır."
    >
      <ui-input
        v-model="note"
        multiline
        :rows="3"
        :maxlength="140"
      />
    </ui-form-row>

    <ui-form-row label="Stok kodu">
      <ui-input
        model-value="PZ-0012"
        disabled
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'InputExample',
  data() {
    return {
      name: 'Margherita',
      query: '',
      prepMinutes: 12,
      note: 'Az pişmiş, kenarları ince.',
    }
  },
}
</script>
