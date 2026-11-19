---
title: ui-list-item
outline: [2, 3]
---

# ui-list-item

Liste: kart içinde ikon karolu gezinme satırları; değerli, tıklanabilir ve tehlike tonlu satır; altta çerçeveli sıkı liste.

Used with: [`ui-list`](./ui-list)

## Example

<ExampleFrame name="List" />

```vue
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
```

## Usage

Registered globally as `<ui-list-item>` by `app.use(UiLib)`. Local import: `import { ListItem } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `prefix-icon` | `string` | `null` | Dolu daire içinde `ui-icon` (ör. `check`) — serbest içerik düzeni. |
| `prefix-icon-type` | `'solid'` |  |  |
| `align` | `'start' \| 'center'` | `"start"` | Prefiks / trailing ile dikey hizalama (`center` medya satırları için). |
| `tag` | `'li' \| 'div'` | `"li"` | `div`: `role="list"` taşıyan `div` içinde (ör. kart içi ayar listesi) |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `value` | `string` | `""` | Sağdaki kısa durum metni (chevron'un solunda) |
| `icon` | `string` | `""` | Satır başı ikon karosu (`ui-icon-tile`) |
| `icon-type` | `'solid'` |  |  |
| `icon-color` | `string` | `""` | İkon karosu tonu (`ui-icon-tile` `color`) |
| `icon-hex` | `string` | `""` | İkon karosu hex rengi (`ui-icon-tile` `hex`) — kategori / marka rengi |
| `icon-variant` | `string` | `""` | `soft` \| `solid` — hex verildiğinde varsayılan `solid` |
| `color` | `'danger'` | `""` | `danger`: başlık tehlike tonunda (ör. hesabı sil) |
| `size` | `'sm' \| 'md' \| 'lg'` | `"md"` | sm / md: 14px başlık · lg: 16px başlık |
| `to` | `RouteLocationRaw` |  | `vue-router` hedefi — satır bağlantı olur |
| `interactive` | `boolean` | `false` | Satır düğme olur ve `click` yayar |
| `disabled` | `boolean` | `false` |  |
| `trailing-icon` | `'chevron' \| 'external' \| 'none'` | `"chevron"` | Tıklanabilir satırda sağ gösterge: `chevron` \| `external` \| `none` |

## Events

| Event | Listener |
| --- | --- |
| `click` | `@click` |

## Slots

| Slot | Slot props |
| --- | --- |
| `prefix` |  |
| `title` |  |
| `description` |  |
| `default` |  |
| `trailing` |  |

