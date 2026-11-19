---
title: ui-toast
outline: [2, 3]
---

# ui-toast

Toast: `useToast()` ile tonlu bildirim; `action` ile "Geri al" eylemi, `duration: 0` ile kalıcı bildirim. `<ui-toast />` uygulama kökünde bir kez bulunur.

## Example

<ExampleFrame name="Toast" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-button variant="outline" color="secondary" @click="saved">Kaydet</ui-button>
      <ui-button variant="outline" color="secondary" @click="removed">Ürünü sil</ui-button>
      <ui-button variant="outline" color="secondary" @click="warned">Stok uyarısı</ui-button>
      <ui-button variant="outline" color="secondary" @click="failed">Yazıcı hatası</ui-button>
      <ui-button variant="ghost" color="secondary" @click="toast.clear()">Tümünü kapat</ui-button>
    </div>

    <p class="ui-text-default m-0">Menüdeki ürünler: {{ products.join(', ') }}</p>
  </div>
</template>

<script>
import { useToast } from 'fewui'

export default {
  name: 'ToastExample',
  data() {
    return {
      toast: useToast(),
      products: ['Margherita', 'Sezar salata', 'Tiramisu'],
    }
  },
  methods: {
    saved() {
      this.toast.success({ title: 'Ürün kaydedildi' })
    },
    removed() {
      const removed = this.products.pop()
      if (!removed) return
      this.toast.info({
        title: `${removed} silindi`,
        description: 'Ürün menüden kaldırıldı.',
        action: {
          label: 'Geri al',
          onClick: () => this.products.push(removed),
        },
      })
    },
    warned() {
      this.toast.warning({
        title: 'Tiramisu tükenmek üzere',
        description: 'Stokta 2 porsiyon kaldı.',
      })
    },
    failed() {
      this.toast.danger({
        title: 'Mutfak yazıcısına ulaşılamadı',
        description: 'Fiş kuyruğa alındı.',
        duration: 0,
      })
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-toast>` by `app.use(UiLib)`. Local import: `import { Toast } from 'fewui'`.

