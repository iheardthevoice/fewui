---
title: ui-stat-group
outline: [2, 3]
---

# ui-stat-group

Metrik: değişim yüzdesi (azalmanın iyi olduğu metrikte `invert-trend`), kutusuz ikon karolu görünüm ve yükleniyor durumu.

Used with: [`ui-stat`](./ui-stat)

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

Registered globally as `<ui-stat-group>` by `app.use(UiLib)`. Local import: `import { StatGroup } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `number` | `3` | Geniş ekrandaki en fazla sütun sayısı |
| `min-columns` | `number` | `1` | Dar ekranda en az sütun sayısı; `2` mobilde de metrikleri ikişer dizer |
| `aria-label` | `string` | `""` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

