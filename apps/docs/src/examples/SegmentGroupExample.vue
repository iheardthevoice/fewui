<!-- Segment grubu: form içi kısa seçim; ikonlu, yalnız ikonlu ve küçük boyut. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row label="İndirim türü">
      <ui-segment-group
        v-model="discountType"
        aria-label="İndirim türü"
      >
        <ui-segment value="percent" label="Yüzde" icon="percent" />
        <ui-segment value="amount" label="Tutar" icon="turkish-lira-sign" />
        <ui-segment value="free" label="İkram" icon="gift" />
      </ui-segment-group>
    </ui-form-row>

    <ui-form-row
      label="Görünüm"
      direction="horizontal"
    >
      <ui-segment-group
        v-model="view"
        icon-only
        :block="false"
        aria-label="Görünüm"
      >
        <ui-segment value="grid" label="Karo" icon="table-cells-large" />
        <ui-segment value="list" label="Liste" icon="list" />
      </ui-segment-group>
    </ui-form-row>

    <ui-form-row label="Fiş dili">
      <ui-segment-group
        v-model="language"
        size="sm"
        aria-label="Fiş dili"
      >
        <ui-segment value="tr" label="Türkçe" />
        <ui-segment value="en" label="İngilizce" />
        <ui-segment value="de" label="Almanca" disabled />
      </ui-segment-group>
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'SegmentGroupExample',
  data() {
    return {
      discountType: 'percent',
      view: 'grid',
      language: 'tr',
    }
  },
}
</script>
