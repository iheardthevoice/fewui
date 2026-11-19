---
title: ui-guidance
outline: [2, 3]
---

# ui-guidance

Yönlendirme: sayfa içinde kart olarak ve bir düğmenin yanında popover olarak; "Git" eylemi `go` olayıdır.

## Example

<ExampleFrame name="Guidance" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-guidance
      mode="card"
      icon="qrcode"
      title="QR menünüzü masalara yerleştirin"
      description="Misafir kodu okutup menüyü telefonunda görür; garson beklemeden sipariş verebilir."
      go-label="QR kodları indir"
      @go="message = 'QR kodlar indiriliyor.'"
    />

    <div class="flex flex-wrap items-center gap-2">
      <ui-guidance
        v-model:open="tipOpen"
        mode="popover"
        icon="lightbulb"
        title="Hesabı bölmek ister misiniz?"
        description="Ürünleri kişilere dağıtın; her misafir kendi payını öder."
        go-label="Hesabı böl"
        @go="message = 'Hesap bölme açıldı.'"
      >
        <template #trigger="{ toggle }">
          <ui-button variant="outline" color="secondary" prefix-icon="circle-question" @click="toggle">
            Nasıl çalışır?
          </ui-button>
        </template>
      </ui-guidance>
      <span class="ui-text-default">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuidanceExample',
  data() {
    return {
      tipOpen: false,
      message: '',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-guidance>` by `app.use(UiLib)`. Local import: `import { Guidance } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `mode` | `'dialog' \| 'popover' \| 'card' \| 'tour'` | `"dialog"` | `dialog` \| `popover` \| `card` \| `tour` |
| `open` | `boolean` | `false` | v-model:open — dialog, popover, tour |
| `icon` | `string` | `null` |  |
| `icon-type` | `string` |  |  |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `go-label` | `string` | `""` |  |
| `close-label` | `string` | `""` |  |
| `show-go` | `boolean` | `true` |  |
| `show-close` | `boolean` | `true` | Üst köşe X (dialog/tour) |
| `show-footer-close` | `boolean` | `false` | Alt ikincil düğme (card/popover/tour) |
| `placement` | `'bottom-start' \| 'bottom-end' \| 'bottom' \| 'top-start' \| 'top-end' \| 'top' \| 'right-start' \| 'right-end' \| 'left-start' \| 'left-end'` | `"bottom-start"` |  |
| `target` | `string \| Record<string, unknown>` | `""` | Tour: CSS seçici veya HTMLElement |
| `target-padding` | `number` | `8` | Tour: hedef etrafındaki vurgu boşluğu (px) |
| `max-width` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `"sm"` |  |
| `popover-width` | `string` | `"18rem"` |  |
| `close-on-backdrop` | `boolean` | `true` |  |
| `close-on-escape` | `boolean` | `true` |  |
| `repeatable` | `boolean` | `false` | `false` iken `seen` true olduğunda bileşen render edilmez. Kalıcılık üst katmanda `persistKey` ile yönetilir. |
| `seen` | `boolean` | `false` | Kullanıcı bu bilgilendirmeyi gördü mü (üst katman tercihlerinden) |
| `persist-key` | `string` | `""` | Üst katman tercih anahtarı (dokümantasyon / erişilebilirlik) |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |
| `go` | `@go` |
| `close` | `@close` |
| `after-leave` | `@after-leave` |

## Slots

| Slot | Slot props |
| --- | --- |
| `actions` |  |
| `default` |  |
| `footer` |  |
| `trigger` | `…` |

