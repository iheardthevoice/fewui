<template>
  <div class="flex max-w-md flex-col gap-6">
    <ui-scroll-area
      max-height="12rem"
      fade
      aria-label="Bugünkü siparişler"
    >
      <ul class="flex flex-col">
        <li
          v-for="order in orders"
          :key="order.id"
          class="flex items-center justify-between gap-3 py-2 text-sm"
        >
          <span class="text-foreground">{{ order.table }}</span>
          <span class="text-muted-foreground">{{ order.total }}</span>
        </li>
      </ul>
    </ui-scroll-area>

    <ui-scroll-area
      orientation="horizontal"
      fade
      aria-label="Kategoriler"
    >
      <div class="flex gap-2 pb-2">
        <ui-badge
          v-for="category in categories"
          :key="category"
          variant="outline"
        >
          {{ category }}
        </ui-badge>
      </div>
    </ui-scroll-area>
  </div>
</template>

<script>
export default {
  name: 'ScrollAreaExample',
  data() {
    return {
      orders: Array.from({ length: 14 }, (_, index) => ({
        id: index + 1,
        table: `Masa ${index + 1}`,
        total: `${(index + 2) * 145} ₺`,
      })),
      categories: [
        'Başlangıçlar', 'Çorbalar', 'Salatalar', 'Izgaralar', 'Makarnalar', 'Pizzalar',
        'Burgerler', 'Tatlılar', 'Sıcak içecekler', 'Soğuk içecekler', 'Kokteyller',
      ],
    }
  },
}
</script>
