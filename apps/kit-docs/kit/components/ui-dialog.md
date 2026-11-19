---
title: ui-dialog
outline: [2, 3]
---

# ui-dialog

Dialog: başlık, açıklama ve ikon prop ile; footer'da yalnız birincil eylem, kapatma başlıktaki X ile.

## Example

<ExampleFrame name="Dialog" />

```vue
<template>
  <div class="flex flex-wrap items-center gap-2">
    <ui-button prefix-icon="plus" @click="open = true">Masa ekle</ui-button>
    <span
      v-if="saved"
      class="ui-text-default"
    >
      Son eklenen: {{ saved }}
    </span>

    <ui-dialog
      v-model:open="open"
      title="Masa ekle"
      description="Masa salon planında ve POS'ta hemen görünür."
      icon="chair"
      max-width="md"
    >
      <form
        class="flex flex-col gap-4"
        novalidate
        @submit.prevent="save"
      >
        <ui-form-row label="Masa adı">
          <ui-input v-model="form.name" placeholder="Örn. Bahçe 7" />
        </ui-form-row>
        <ui-form-row label="Salon">
          <ui-select v-model="form.area" :options="areas" />
        </ui-form-row>
        <ui-form-row label="Kişi sayısı">
          <ui-input v-model="form.seats" type="number" />
        </ui-form-row>
      </form>

      <template #footer>
        <ui-button block @click="save">Kaydet</ui-button>
      </template>
    </ui-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogExample',
  data() {
    return {
      open: false,
      saved: '',
      form: { name: '', area: 'garden', seats: 4 },
      areas: [
        { value: 'hall', label: 'Salon' },
        { value: 'garden', label: 'Bahçe' },
        { value: 'terrace', label: 'Teras' },
      ],
    }
  },
  methods: {
    save() {
      this.saved = this.form.name || 'Adsız masa'
      this.open = false
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-dialog>` by `app.use(UiLib)`. Local import: `import { Dialog } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | `v-model:open` |
| `close-on-backdrop` | `boolean` | `true` |  |
| `close-on-escape` | `boolean` | `true` |  |
| `max-width` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| 'full'` |  | İç panel genişliği (`max-w-*`). |
| `border` | `boolean` | `true` | Dış çerçeve (1px `border-border`) — `ui-card` ile aynı. |
| `border-type` | `'solid' \| 'dashed' \| 'dotted' \| 'double'` | `"solid"` | `border-*` stili. |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `icon` | `string` | `null` | Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). |
| `icon-type` | `'solid' \| 'regular' \| 'brands' \| 'light' \| 'duotone' \| 'thin'` |  | `ui-icon` `type` prop’u. |
| `show-close` | `boolean` | `true` | Sağ üst kapat düğmesi. |
| `close-label` | `string` | `""` | Kapat düğmesi `aria-label`; boşsa `ui.dialog.close` (i18n). |
| `with-back` | `boolean` | `false` | Başlıkta geri düğmesi; `@back` ile birlikte kullanılır. |
| `back-label` | `string` | `""` | Geri düğmesi metni; boşsa `ui.dialog.back` (i18n). |
| `row` | `boolean` | `false` | Gövde: yatay satır (buton / ikon sıraları). |
| `body-padding` | `'default' \| 'none'` | `"default"` | Gövde dolgusu — `none`: kenar padding sıfır (POS ödeme vb.). |
| `body-layout` | `'default' \| 'flex'` | `"default"` | Gövde düzeni — `flex`: dikey flex + taşma kontrolü (içerik paneli). |
| `footer-transparent` | `boolean` | `true` | Footer şeffaf — arka plan/border yok; gövde üzerine biner. Kaydırılabilir içerik footer altında görünür; gövde alt boşluğu otomatik artar. Varsayılan açık: yalnızca eylem butonları görünür. |
| `panel-max-height` | `string` | `""` | Panel `max-height` — örn. `min(85vh, 36rem)`. |
| `header-divider` | `boolean` | `false` | Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı. |
| `aria-label` | `string` | `""` | Başlık yokken `role="dialog"` için erişilebilir ad. Başlık varsa `aria-labelledby` önceliklidir. |
| `initial-focus` | `boolean` | `true` | Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer). `false`: alan seçilmez, odak yalnız panele taşınır (klavye / Escape dialoga gider). |
| `stack-layer` | `'default' \| 'confirm'` | `"default"` | Yığılma katmanı — `confirm`: açık modalların üstünde (programatik onay). |
| `guard-unsaved` | `boolean` |  | Kaydedilmemiş değişiklik koruması: form kirliyken Escape / arka plan / X / sheet sürükleme kapatmadan önce onay ister. Verilmezse tema varsayılanı `dialogGuardUnsaved` (false). Programatik kapanış (`open=false`) hiçbir zaman sormaz. |
| `dirty` | `boolean` |  | Kirli durumu elle belirler; verilmezse içerideki fewui form kontrollerinin kullanıcı değişiklikleri izlenir. |
| `submit-on-enter` | `boolean` |  | Tek satırlı metin alanında Enter (ve her yerde Cmd/Ctrl+Enter) footer'daki birincil eylemi tetikler: `data-ui-dialog-primary` işaretli ilk etkin düğme, yoksa son etkin solid primary `ui-button`. Verilmezse tema varsayılanı `dialogSubmitOnEnter` (false). |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |
| `after-leave` | `@after-leave` |
| `back` | `@back` |

## Slots

| Slot | Slot props |
| --- | --- |
| `header` |  |
| `title` |  |
| `append` |  |
| `actions` |  |
| `description` |  |
| `toolbar` |  |
| `default` |  |
| `footer` |  |

