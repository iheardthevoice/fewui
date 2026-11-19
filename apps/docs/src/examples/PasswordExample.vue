<!-- Şifre alanı: göster/gizle düğmesi ve güç göstergesi; girişte gösterge kapalı. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Yeni şifre"
      description="En az 8 karakter; harf ve rakam içermeli."
    >
      <ui-password v-model="newPassword" />
    </ui-form-row>

    <ui-form-row label="Mevcut şifre">
      <ui-password
        v-model="currentPassword"
        :show-strength="false"
        autocomplete="current-password"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'PasswordExample',
  data() {
    return {
      newPassword: 'Lokanta2026',
      currentPassword: '',
    }
  },
}
</script>
