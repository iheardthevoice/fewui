<!-- İkon seçici: uygulamanın verdiği ikon listesinden aramalı seçim. -->
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Kategori ikonu"
      description="Menüde ve POS kategori şeridinde görünür."
    >
      <ui-icon-picker
        v-model="icon"
        :icons="icons"
        trigger-placeholder="İkon seçin"
        popover-title="Kategori ikonu"
        search-placeholder="İkon ara…"
      />
    </ui-form-row>

    <ui-form-row label="Ödeme türü ikonu">
      <ui-icon-picker
        v-model="paymentIcon"
        :icons="paymentIcons"
        trigger-placeholder="İkon seçin"
      />
    </ui-form-row>
  </div>
</template>

<script>
export default {
  name: 'IconPickerExample',
  data() {
    return {
      icon: 'pizza-slice',
      paymentIcon: '',
      icons: [
        'pizza-slice', 'burger', 'bowl-food', 'fish', 'drumstick-bite', 'carrot',
        'ice-cream', 'cake-candles', 'cookie', 'mug-hot', 'wine-glass', 'beer-mug-empty',
        'martini-glass', 'bottle-water', 'lemon', 'pepper-hot', 'egg', 'bread-slice',
      ],
      paymentIcons: ['money-bill', 'credit-card', 'wallet', 'qrcode', 'ticket', 'building-columns'],
    }
  },
}
</script>
