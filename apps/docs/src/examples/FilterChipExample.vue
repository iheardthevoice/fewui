<!-- Filtre çipi: boş ve dolu durum, temizleme düğmesi ve tonlu çip. -->
<template>
  <div class="flex flex-wrap items-center gap-1.5">
    <ui-filter-chip
      icon="chair"
      empty-label="Masa"
      :value-label="table"
      :empty="!table"
      clearable
      @click="table = 'Bahçe 4'"
      @clear="table = ''"
    />
    <ui-filter-chip
      icon="user"
      empty-label="Garson"
      :value-label="waiter"
      :empty="!waiter"
      clearable
      suffix-icon="chevron-down"
      @click="waiter = 'Ayşe Yılmaz'"
      @clear="waiter = ''"
    />
    <ui-filter-chip
      icon="triangle-exclamation"
      empty-label="Geciken"
      value-label="Geciken · 3"
      :empty="!lateOnly"
      :active="lateOnly"
      color="warning"
      @click="lateOnly = !lateOnly"
    />
    <ui-filter-chip
      icon="calendar"
      empty-label="Tarih"
      disabled
      empty
    />
  </div>
</template>

<script>
export default {
  name: 'FilterChipExample',
  data() {
    return {
      table: 'Bahçe 4',
      waiter: '',
      lateOnly: true,
    }
  },
}
</script>
