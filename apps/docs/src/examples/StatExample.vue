<!-- Metrik: değişim yüzdesi (azalmanın iyi olduğu metrikte `invert-trend`), kutusuz ikon karolu görünüm ve yükleniyor durumu. -->
<template>
  <div class="flex max-w-3xl flex-col gap-6">
    <ui-stat-group :columns="3" aria-label="Günün özeti">
      <ui-stat
        title="Ciro"
        icon="sack-dollar"
        value="₺48.250"
        :change="12.5"
        change-label="dünden"
      />
      <ui-stat
        title="İptal"
        icon="ban"
        color="danger"
        value="₺1.120"
        :change="8"
        invert-trend
        change-label="dünden"
      />
      <ui-stat
        title="Masa devri"
        icon="chair"
        value="3,4"
        interactive
      >
        Ortalama 52 dk oturma
      </ui-stat>
    </ui-stat-group>

    <ui-stat-group :columns="3" :min-columns="2" aria-label="Operasyon">
      <ui-stat variant="plain" size="md" icon-tile title="Bahşiş" icon="coins" color="success" value="₺1.240">
        Satışın %4'ü
      </ui-stat>
      <ui-stat variant="plain" size="md" icon-tile title="İndirim" icon="percent" color="warning" value="₺380">
        6 adisyonda
      </ui-stat>
      <ui-stat variant="plain" size="md" icon-tile title="Paket" icon="motorcycle" loading />
    </ui-stat-group>
  </div>
</template>

<script>
export default {
  name: 'StatExample',
}
</script>
