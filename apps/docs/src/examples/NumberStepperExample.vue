<!-- Sayı artırma / azaltma: kişi sayısı, adet gibi küçük tam sayılar. Gruplu liste satırında `#trailing` içinde kullanılır. -->
<template>
  <div class="flex max-w-md flex-col">
    <ui-list-group>
      <ui-list-item
        tag="div"
        title="Kişi sayısı"
      >
        <template #trailing>
          <ui-number-stepper
            v-model="guests"
            :min="1"
            :max="40"
            aria-label="Kişi sayısı"
          />
        </template>
      </ui-list-item>
      <ui-list-item
        tag="div"
        title="Masa"
        :value="table"
        interactive
        clearable
        @click="table = 'Bahçe 4'"
        @clear="table = ''"
      />
    </ui-list-group>
  </div>
</template>

<script>
export default {
  name: 'NumberStepperExample',
  data() {
    return { guests: 2, table: 'Bahçe 4' }
  },
}
</script>
