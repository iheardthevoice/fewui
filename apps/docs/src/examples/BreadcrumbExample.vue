<template>
  <div class="flex flex-col gap-6">
    <ui-breadcrumb>
      <ui-breadcrumb-item
        to="/"
        icon="house"
      >
        Panel
      </ui-breadcrumb-item>
      <ui-breadcrumb-item href="#menu">
        Menü
      </ui-breadcrumb-item>
      <ui-breadcrumb-item current>
        Izgara köfte
      </ui-breadcrumb-item>
    </ui-breadcrumb>

    <ui-breadcrumb
      :items="items"
      :max-items="3"
    />
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbExample',
  data() {
    return {
      items: [
        { label: 'Panel', to: '/', icon: 'house' },
        { label: 'Katalog', href: '#katalog' },
        { label: 'Ana yemekler', href: '#ana-yemekler' },
        { label: 'Izgaralar', href: '#izgaralar' },
        { label: 'Izgara köfte' },
      ],
    }
  },
}
</script>
