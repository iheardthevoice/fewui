---
title: ui-card
outline: [2, 3]
---

# ui-card

Kart: başlık, açıklama ve ikon prop ile; sağ üst eylem (`#append`), footer ve tıklanabilir kart.

## Example

<ExampleFrame name="Card" />

```vue
<template>
  <div class="grid max-w-3xl gap-4 md:grid-cols-2">
    <ui-card
      title="Günün özeti"
      description="17 Kasım Salı"
      icon="chart-simple"
      icon-color="primary"
    >
      <template #append>
        <ui-badge color="success" variant="muted">Açık</ui-badge>
      </template>
      <ui-stat-group :columns="2" :min-columns="2" aria-label="Günün özeti">
        <ui-stat variant="plain" size="md" title="Ciro" value="₺48.250" />
        <ui-stat variant="plain" size="md" title="Sipariş" value="126" />
      </ui-stat-group>
      <template #footer>
        <ui-button block variant="outline" color="secondary">Raporu aç</ui-button>
      </template>
    </ui-card>

    <div class="flex flex-col gap-4">
      <ui-card
        title="Ana Kasa"
        description="Nakit · ₺6.420"
        icon="vault"
        interactive
        @click="clicks++"
      />
      <ui-card
        title="Yeni kasa"
        description="Şube veya vardiya için ayrı kasa açın."
        icon="plus"
        border-type="dashed"
        transparent
      >
        <p class="ui-text-default m-0">Kart {{ clicks }} kez tıklandı.</p>
      </ui-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardExample',
  data() {
    return {
      clicks: 0,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-card>` by `app.use(UiLib)`. Local import: `import { Card } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `border` | `boolean` | `true` | Dış çerçeve (1px `border-border`). |
| `border-type` | `'solid' \| 'dashed' \| 'dotted' \| 'double'` | `"solid"` | `border-*` stili. |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `icon` | `string` | `null` | Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). |
| `icon-type` | `'solid' \| 'regular' \| 'brands' \| 'light' \| 'duotone' \| 'thin'` |  | `ui-icon` `type` prop’u. |
| `icon-color` | `string` | `""` | Başlık ikonu karosu tonu (`ui-icon-tile` `color`); verilirse ikon renkli zeminde çizilir. |
| `icon-hex` | `string` | `""` | Başlık ikonu karosu hex rengi (`ui-icon-tile` `hex`) — rapor / kategori rengi |
| `icon-variant` | `string` | `""` | `soft` \| `solid` — hex verildiğinde varsayılan `solid` |
| `row` | `boolean` | `false` | Gövde: yatay satır (buton / ikon sıraları). |
| `header-divider` | `boolean` | `false` | Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı |
| `remove-padding` | `boolean` | `false` | Kök padding ve bölüm aralığını kaldırır; gövde kenara yaslanır. Başlık/alt bilgi için kompakt iç boşluk kalır. |
| `transparent` | `boolean` | `false` | Dolgu ve gölge olmadan yalnızca çerçeve (boş tablo kabuğu vb.). |
| `interactive` | `boolean` | `false` | Hover’da hafif yükselme + primary vurgu (etkinlik / tıklanabilir kart). |
| `emphasized` | `boolean` | `false` | Primary kenar / zemin vurgusu (ör. “bugün” etkinlik kartı). |
| `sticky-header` | `boolean` | `false` | Başlık (başlık + `#actions`) sabit kalır, gövde kartın içinde kayar — uzun form kartlarında Kaydet görünür kalsın diye. Yükseklik sınırını üst öğe verir (ör. sticky + max-h sarmalayıcı). Varsayılan kapalı. |
| `full-height` | `boolean` | `false` | Üst flex satırında kardeşlerle aynı yüksekliğe yayılır (`h-full`). |
| `layout` | `'default' \| 'data-table'` | `"default"` | `data-table` — sıfır kök padding; toolbar/footer DataTable boşlukları. |

## Slots

| Slot | Slot props |
| --- | --- |
| `toolbar` |  |
| `header` |  |
| `append` |  |
| `actions` |  |
| `default` |  |
| `footer` |  |

