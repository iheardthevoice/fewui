<!-- İkon karosu: satır ve kart başlığındaki renkli ikon kutusu; ton, dolu görünüm, boyut, daire ve özel renk. -->
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <ui-icon-tile icon="utensils" />
      <ui-icon-tile icon="chair" color="primary" />
      <ui-icon-tile icon="sack-dollar" color="success" />
      <ui-icon-tile icon="clock" color="warning" />
      <ui-icon-tile icon="calendar" color="info" />
      <ui-icon-tile icon="ban" color="danger" />
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <ui-icon-tile icon="vault" size="sm" />
      <ui-icon-tile icon="vault" size="md" />
      <ui-icon-tile icon="vault" size="lg" />
      <ui-icon-tile icon="check" color="success" variant="solid" shape="circle" />
      <ui-icon-tile icon="leaf" hex="#16a34a" />
      <ui-icon-tile icon="pepper-hot" hex="#dc2626" variant="solid" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconTileExample',
}
</script>
