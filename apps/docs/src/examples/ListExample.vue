<!-- Liste: kart içinde ikon karolu gezinme satırları; değerli, tıklanabilir ve tehlike tonlu satır; altta çerçeveli sıkı liste. -->
<template>
  <div class="flex max-w-md flex-col gap-6">
    <ui-card remove-padding>
      <ui-list variant="divided">
        <ui-list-item
          title="Çalışma saatleri"
          description="Hafta içi 09.00 – 23.30"
          icon="clock"
          icon-color="info"
          to="/"
        />
        <ui-list-item
          title="Yazıcılar"
          description="Mutfak ve kasa fişleri"
          icon="print"
          icon-color="success"
          value="2 bağlı"
          interactive
          @click="clicked = 'Yazıcılar'"
        />
        <ui-list-item
          title="Ödeme türleri"
          icon="credit-card"
          icon-color="warning"
          interactive
          disabled
        />
        <ui-list-item
          title="Restoranı kapat"
          description="Menü ve site yayından kalkar"
          icon="power-off"
          color="danger"
          interactive
          trailing-icon="none"
          @click="clicked = 'Restoranı kapat'"
        />
      </ui-list>
    </ui-card>

    <ui-list variant="bordered" density="compact">
      <ui-list-item icon="check" icon-color="success" title="42 ürün içe aktarıldı" />
      <ui-list-item icon="check" icon-color="success" title="6 kategori oluşturuldu" />
      <ui-list-item icon="triangle-exclamation" icon-color="warning" title="3 üründe fiyat eksik">
        <template #trailing>
          <ui-button variant="link" size="sm">Düzelt</ui-button>
        </template>
      </ui-list-item>
    </ui-list>

    <p class="ui-text-default m-0">Son tıklanan: {{ clicked || '—' }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListExample',
  data() {
    return {
      clicked: '',
    }
  },
}
</script>
