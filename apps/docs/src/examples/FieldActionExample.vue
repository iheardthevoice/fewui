<!-- Alan eylemi: çip tetikleyici açılır panelde küçük bir form açar; değer çipte görünür ve temizlenebilir. -->
<template>
  <div class="flex flex-wrap items-center gap-1.5">
    <ui-field-action
      title="Sipariş notu"
      description="Mutfak fişinde ürünlerin üstünde yazdırılır."
      action-name="Not ekle"
      prefix-icon="note-sticky"
      :value="note"
      clearable
      popover-width="20rem"
      @clear="note = ''"
    >
      <ui-form-row label="Not">
        <ui-input
          v-model="note"
          multiline
          :rows="2"
          placeholder="Örn. Önce çorbalar gelsin"
        />
      </ui-form-row>
    </ui-field-action>

    <ui-field-action
      title="Kişi sayısı"
      action-name="Kişi sayısı"
      prefix-icon="users"
      :value="guestLabel"
      clearable
      @clear="guests = null"
    >
      <template #default="{ close }">
        <ui-chip-group
          v-model="guests"
          :options="guestOptions"
          :scrollable="false"
          aria-label="Kişi sayısı"
          @change="close"
        />
      </template>
    </ui-field-action>

    <ui-field-action
      mode="dialog"
      title="İndirim"
      description="Adisyon toplamına uygulanır."
      action-name="İndirim ekle"
      prefix-icon="percent"
      dialog-icon="percent"
      :value="discount ? `%${discount}` : ''"
      clearable
      @clear="discount = ''"
    >
      <ui-form-row label="İndirim oranı (%)">
        <ui-input v-model="discount" type="number" />
      </ui-form-row>
    </ui-field-action>
  </div>
</template>

<script>
export default {
  name: 'FieldActionExample',
  data() {
    return {
      note: '',
      guests: 4,
      discount: '',
      guestOptions: [2, 3, 4, 5, 6, 8].map((n) => ({ value: n, label: String(n) })),
    }
  },
  computed: {
    guestLabel() {
      return this.guests ? `${this.guests} kişi` : ''
    },
  },
}
</script>
