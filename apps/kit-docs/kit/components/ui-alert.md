---
title: ui-alert
outline: [2, 3]
---

# ui-alert

Uyarı kutusu: bilgi, başarı, uyarı ve tehlike tonu; eylem düğmesi, kapatılabilir uyarı ve sayfa üstü banner.

## Example

<ExampleFrame name="Alert" />

```vue
<template>
  <div class="flex max-w-xl flex-col gap-4">
    <ui-alert
      banner
      color="warning"
      title="Bağlantı yok"
      description="Satış kaydı için internet bağlantısı gerekir."
    />

    <ui-alert
      title="Yeni menü yayında"
      description="QR menüdeki değişiklikler misafirlere hemen yansır."
    />

    <ui-alert
      v-if="showStock"
      color="warning"
      title="3 üründe stok kritik seviyede"
      description="Tiramisu, San Sebastian ve ev limonatası bugün tükenebilir."
      dismissible
      @dismiss="showStock = false"
    >
      <ui-button size="sm" color="warning">Stokları gör</ui-button>
    </ui-alert>

    <ui-alert
      color="danger"
      live="assertive"
      title="Mutfak yazıcısı yanıt vermiyor"
      description="Siparişler kuyruğa alındı; yazıcı bağlanınca yazdırılır."
      actions-end
    >
      <ui-button size="sm" variant="outline" color="danger">Yeniden dene</ui-button>
    </ui-alert>

    <ui-alert
      color="success"
      title="Gün sonu tamamlandı"
      :show-icon="false"
    />
  </div>
</template>

<script>
export default {
  name: 'AlertExample',
  data() {
    return {
      showStock: true,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-alert>` by `app.use(UiLib)`. Local import: `import { Alert } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `'info' \| 'success' \| 'warning' \| 'danger'` | `"info"` | Durum tonu |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `icon` | `string` | `null` | Varsayılan ikon yerine `circle-info` vb. |
| `show-icon` | `boolean` | `true` | `false` — sol ikon gösterilmez; `#icon` slotu ile özelleştirilebilir |
| `live` | `'polite' \| 'assertive'` | `""` | Ekran okuyucu duyurusu (WCAG 4.1.3). Varsayılan `''`: sayfada kalıcı bilgi kutusu, duyurulmaz. `polite` → `role="status"` (işlem sonucu), `assertive` → `role="alert"` (acil hata / uyarı). Eskiden rol renkten türetiliyordu: her warning/danger `alert` oluyor, kalıcı kutular araya giriyordu. |
| `dismissible` | `boolean` | `false` |  |
| `banner` | `boolean` | `false` | Sayfa üstünde ince, tam genişlikte durum çubuğu. Metin + CTA tek satır. |
| `soft` | `boolean` | `true` | Kullanımdan kalktı — alert tek görünümdür; kenarlık temadan gelir (`--ui-alert-border-width`). Eski kullanımlar kırılmasın diye kabul edilir, etkisi yoktur. |
| `actions-end` | `boolean` | `false` | Varsayılan slot’u açıklamanın altına değil, satırın sağına koyar. `banner` zaten sağ CTA kullanır; bu prop kart / soft alert için. |

## Events

| Event | Listener |
| --- | --- |
| `dismiss` | `@dismiss` |

## Slots

| Slot | Slot props |
| --- | --- |
| `icon` |  |
| `default` |  |

