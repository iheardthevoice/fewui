<!-- Popover: tetikleyici `#trigger` slot'undan `toggle` alır; içerik `#content`, kapatma `close` ile. -->
<template>
  <div class="flex flex-wrap items-center gap-2">
    <ui-popover v-model:open="noteOpen">
      <template #trigger="{ toggle }">
        <ui-button variant="outline" color="secondary" prefix-icon="note-sticky" @click="toggle">
          Notu gör
        </ui-button>
      </template>
      <template #content="{ close }">
        <div class="flex max-w-xs flex-col gap-3 p-3">
          <p class="ui-text-default m-0">
            Misafir fıstık alerjisi bildirdi. Tatlı servisinden önce mutfağa haber verin.
          </p>
          <ui-button size="sm" @click="close">Anladım</ui-button>
        </div>
      </template>
    </ui-popover>

    <ui-popover
      v-model:open="guestsOpen"
      placement="bottom-end"
      width="16rem"
      aria-label="Kişi sayısı"
    >
      <template #trigger="{ toggle, open }">
        <ui-button
          variant="outline"
          color="secondary"
          prefix-icon="users"
          :suffix-icon="open ? 'chevron-up' : 'chevron-down'"
          @click="toggle"
        >
          {{ guests }} kişi
        </ui-button>
      </template>
      <template #content="{ close }">
        <div class="flex flex-col gap-3 p-3">
          <ui-form-row label="Kişi sayısı">
            <ui-input v-model="guests" type="number" />
          </ui-form-row>
          <ui-button size="sm" block @click="close">Uygula</ui-button>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
export default {
  name: 'PopoverExample',
  data() {
    return {
      noteOpen: false,
      guestsOpen: false,
      guests: 4,
    }
  },
}
</script>
