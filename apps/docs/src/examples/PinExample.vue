<!-- PIN girişi: 6 haneli doğrulama kodu ve 4 haneli gizli personel PIN'i; tamamlanınca `complete` olayı. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Doğrulama kodu"
      description="Telefonunuza gelen 6 haneli kodu girin."
    >
      <ui-pin
        v-model="code"
        aria-label="Doğrulama kodu"
        @complete="onComplete"
      />
    </ui-form-row>

    <ui-form-row label="Personel PIN'i">
      <ui-pin
        v-model="staffPin"
        :length="4"
        mask
        autocomplete="off"
        aria-label="Personel PIN'i"
      />
    </ui-form-row>

    <p
      v-if="completed"
      class="ui-text-default m-0"
    >
      Girilen kod: {{ completed }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PinExample',
  data() {
    return {
      code: '',
      staffPin: '1234',
      completed: '',
    }
  },
  methods: {
    onComplete(value) {
      this.completed = value
    },
  },
}
</script>
