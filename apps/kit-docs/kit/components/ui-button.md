---
title: ui-button
outline: [2, 3]
---

# ui-button

Birincil, ikincil ve tehlike düğmeleri; ikonlu, yalnız ikonlu ve yükleniyor durumu.

## Example

<ExampleFrame name="Button" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-button prefix-icon="plus">Ürün ekle</ui-button>
      <ui-button variant="outline" color="secondary">Taslak kaydet</ui-button>
      <ui-button variant="muted">Önizle</ui-button>
      <ui-button variant="ghost" color="secondary" prefix-icon="print">Yazdır</ui-button>
      <ui-button variant="link" to="/">Tüm ürünler</ui-button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-button color="danger" prefix-icon="trash">Sil</ui-button>
      <ui-button variant="outline" color="danger">Siparişi iptal et</ui-button>
      <ui-button color="success" suffix-icon="arrow-right">Ödeme al</ui-button>
      <ui-button disabled>Stokta yok</ui-button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <ui-button size="sm">Küçük</ui-button>
      <ui-button size="md">Orta</ui-button>
      <ui-button size="lg">Büyük</ui-button>
      <ui-button rounded>Hap</ui-button>
      <ui-button
        variant="outline"
        color="secondary"
        cubed
        prefix-icon="ellipsis"
        aria-label="Diğer işlemler"
      />
    </div>

    <div class="max-w-xs">
      <ui-button
        block
        :loading="saving"
        loading-text="Kaydediliyor…"
        @click="save"
      >
        Kaydet
      </ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonExample',
  data() {
    return {
      saving: false,
    }
  },
  methods: {
    save() {
      this.saving = true
      setTimeout(() => {
        this.saving = false
      }, 1500)
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-button>` by `app.use(UiLib)`. Local import: `import { Button } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `to` | `RouteLocationRaw` | `null` | `vue-router` hedefi; verildiğinde `<a>` + istemci navigasyonu (`RouterLink` custom). |
| `native-type` | `'button' \| 'submit' \| 'reset'` | `"button"` | Native `<button type="...">` — `to` yokken; forms için `submit` / `reset`. |
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'muted' \| 'link' \| 'nav'` | `"solid"` |  |
| `color` | `'primary' \| 'secondary' \| 'input' \| 'warning' \| 'success' \| 'info' \| 'danger'` | `"primary"` |  |
| `size` | `'sm' \| 'md' \| 'lg'` |  |  |
| `prefix-icon` | `string` | `null` |  |
| `suffix-icon` | `string` | `null` |  |
| `loading` | `boolean` | `false` |  |
| `loading-text` | `string` | `null` | Boş bırakılırsa `ui.button.loading` (i18n) kullanılır |
| `cubed` | `boolean` | `false` |  |
| `stack` | `boolean` | `false` | İkon + metin dikey yığılır (`prefixIcon` üstte, slot altta). `cubed` ile birlikte kullanılmaz. |
| `rounded` | `boolean` | `false` |  |
| `block` | `boolean` | `false` | Tam genişlik. |
| `disabled` | `boolean` | `false` |  |
| `text-align` | `'center' \| 'left'` | `"center"` | Metin slot’u (ve `loading` durumunda görünen satır) yatay hizası. |
| `wrap` | `boolean` | `false` | Çok satırlı etiket / açıklama — truncate ve nowrap kapatılır. |

## Events

| Event | Listener |
| --- | --- |
| `click` | `@click` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

