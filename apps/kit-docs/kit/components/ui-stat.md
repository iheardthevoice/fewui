---
title: ui-stat
outline: [2, 3]
---

# ui-stat

Metrik: değişim yüzdesi (azalmanın iyi olduğu metrikte `invert-trend`), kutusuz ikon karolu görünüm ve yükleniyor durumu.

Used with: [`ui-stat-group`](./ui-stat-group)

## Example

<ExampleFrame name="Stat" />

```vue
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
```

## Usage

Registered globally as `<ui-stat>` by `app.use(UiLib)`. Local import: `import { Stat } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `""` |  |
| `value` | `string \| number` | `""` |  |
| `icon` | `string` | `""` |  |
| `icon-type` | `string` |  |  |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'info' \| 'danger'` | `""` | Başlık ikonu tonu |
| `icon-tile` | `boolean` | `false` | Başlık ikonu `ui-icon-tile` içinde, `color` zemininde |
| `change` | `number` |  | Yüzde değişim; `undefined` satırı gizler, `null` yerini korur |
| `change-text` | `string` | `""` | Hazır değişim metni (biçimlendirmeyi geçersiz kılar), ör. “Yeni dönem” |
| `change-label` | `string` | `""` | Değişimin yanındaki nötr açıklama, ör. “(₺1.250)” veya “dünden” |
| `invert-trend` | `boolean` | `false` | Azalış iyi (gider, iptal, bekleme süresi) |
| `variant` | `'soft' \| 'surface' \| 'plain'` | `"soft"` | `soft`: kart içi dolgulu kutu · `surface`: sayfa üzerinde kart yüzeyi · `plain`: kutusuz |
| `size` | `'lg'` | `"lg"` | Değer ölçüsü: sm 18px · md 20px · lg 24px |
| `interactive` | `boolean` | `false` | Kart tıklanabilir (`click` yayar; Enter / Space ile de çalışır) |
| `loading` | `boolean` | `false` |  |

## Events

| Event | Listener |
| --- | --- |
| `click` | `@click` |

## Slots

| Slot | Slot props |
| --- | --- |
| `value` |  |
| `default` |  |
| `footer` |  |

