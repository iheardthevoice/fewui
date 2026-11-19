<template>
  <div class="h-96 overflow-hidden rounded-lg border border-border bg-surface">
    <ui-resizable-group
      v-model="sizes"
      auto-save-id="docs-orders-layout"
    >
      <ui-resizable-panel
        id="orders-list"
        :default-size="28"
        :min-size="18"
        :max-size="40"
        collapsible
        :collapsed-size="0"
      >
        <div class="flex h-full flex-col gap-1 p-3">
          <p class="ui-heading-6">Açık siparişler</p>
          <ui-list-item
            v-for="order in orders"
            :key="order.table"
            :title="order.table"
            :description="order.summary"
          />
        </div>
      </ui-resizable-panel>

      <ui-resizable-handle show-grip aria-label="Sipariş listesi genişliği" />

      <ui-resizable-panel :min-size="30">
        <ui-resizable-group direction="vertical">
          <ui-resizable-panel :default-size="65" :min-size="30">
            <div class="h-full p-4">
              <p class="ui-heading-5">Masa 12</p>
              <p class="ui-text-default">2 Adana, 1 Künefe, 3 Ayran — mutfakta hazırlanıyor.</p>
            </div>
          </ui-resizable-panel>
          <ui-resizable-handle aria-label="Not alanı yüksekliği" />
          <ui-resizable-panel :min-size="20">
            <div class="h-full p-4">
              <p class="ui-heading-6">Mutfak notu</p>
              <p class="ui-text-default">Adana acısız, künefe servisten 5 dk önce.</p>
            </div>
          </ui-resizable-panel>
        </ui-resizable-group>
      </ui-resizable-panel>
    </ui-resizable-group>
  </div>
</template>

<script>
export default {
  name: 'ResizableExample',
  data() {
    return {
      sizes: [28, 72],
      orders: [
        { table: 'Masa 12', summary: '6 kalem · 1.240 ₺' },
        { table: 'Masa 4', summary: '3 kalem · 560 ₺' },
        { table: 'Bahçe 2', summary: '9 kalem · 2.115 ₺' },
      ],
    }
  },
}
</script>
