---
title: ui-confirm-dialog
outline: [2, 3]
---

# ui-confirm-dialog

Programatik onay: `useConfirm().confirm()` Promise döndürür. `<ui-confirm-dialog />` uygulama kökünde bir kez bulunur.

## Example

<ExampleFrame name="ConfirmDialog" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-button variant="outline" color="danger" prefix-icon="trash" @click="removeProduct">
        Ürünü sil
      </ui-button>
      <ui-button variant="outline" color="secondary" @click="closeRegister">
        Kasayı kapat
      </ui-button>
    </div>

    <p class="ui-text-default m-0">
      {{ result }}
    </p>
  </div>
</template>

<script>
import { useConfirm } from 'fewui'

export default {
  name: 'ConfirmDialogExample',
  data() {
    return {
      result: 'Henüz bir işlem yapılmadı.',
    }
  },
  methods: {
    async removeProduct() {
      const { confirm } = useConfirm()
      const ok = await confirm({
        title: 'Margherita silinsin mi?',
        description: 'Ürün menüden ve QR menüden kalkar. Geçmiş siparişler etkilenmez.',
        confirmLabel: 'Sil',
        color: 'danger',
      })
      this.result = ok ? 'Ürün silindi.' : 'Silme işleminden vazgeçildi.'
    },
    async closeRegister() {
      const { confirm } = useConfirm()
      const ok = await confirm({
        title: 'Ana Kasa kapatılsın mı?',
        description: 'Gün sonu raporu oluşturulur; yeni satış için kasa yeniden açılır.',
        confirmLabel: 'Kasayı kapat',
      })
      this.result = ok ? 'Kasa kapatıldı.' : 'Kasa açık bırakıldı.'
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-confirm-dialog>` by `app.use(UiLib)`. Local import: `import { ConfirmDialog } from 'fewui'`.

