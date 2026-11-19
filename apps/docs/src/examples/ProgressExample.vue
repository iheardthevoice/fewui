<!-- İlerleme: çubuk ve daire; durum tonları, belirsiz (indeterminate) yükleme. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Günlük ciro hedefi"
      description="₺48.250 / ₺60.000"
    >
      <ui-progress :value="80" aria-label="Günlük ciro hedefi" aria-valuetext="Yüzde 80" />
    </ui-form-row>

    <div class="flex flex-col gap-2">
      <ui-progress :value="25" variant="weak" size="thin" aria-label="Stok: kritik" />
      <ui-progress :value="55" variant="fair" size="thin" aria-label="Stok: azalıyor" />
      <ui-progress :value="90" variant="strong" size="thin" aria-label="Stok: yeterli" />
    </div>

    <ui-progress indeterminate aria-label="Menü içe aktarılıyor" />

    <div class="flex flex-wrap items-center gap-4">
      <ui-progress type="circle" :value="40" size="md" aria-label="Kurulum" />
      <ui-progress type="circle" :value="65" size="xl" aria-label="Doluluk" />
      <ui-progress type="circle" :value="85" size="2xl" variant="good" aria-label="Hedef" />
      <ui-progress type="circle" indeterminate size="lg" aria-label="Yükleniyor" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressExample',
}
</script>
