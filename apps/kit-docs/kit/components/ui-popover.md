---
title: ui-popover
outline: [2, 3]
---

# ui-popover

Popover: tetikleyici `#trigger` slot'undan `toggle` alır; içerik `#content`, kapatma `close` ile.

## Example

<ExampleFrame name="Popover" />

```vue
<template>
  <div class="flex flex-wrap items-center gap-2">
    <ui-popover v-model:open="noteOpen">
      <template #trigger="{ toggle }">
        <ui-button variant="outline" color="secondary" prefix-icon="note-sticky" @click="toggle">
          Notu gör
        </ui-button>
      </template>
      <template #content="{ close }">
        <div class="flex max-w-xs flex-col gap-3 p-3">
          <p class="ui-text-default m-0">
            Misafir fıstık alerjisi bildirdi. Tatlı servisinden önce mutfağa haber verin.
          </p>
          <ui-button size="sm" @click="close">Anladım</ui-button>
        </div>
      </template>
    </ui-popover>

    <ui-popover
      v-model:open="guestsOpen"
      placement="bottom-end"
      width="16rem"
      aria-label="Kişi sayısı"
    >
      <template #trigger="{ toggle, open }">
        <ui-button
          variant="outline"
          color="secondary"
          prefix-icon="users"
          :suffix-icon="open ? 'chevron-up' : 'chevron-down'"
          @click="toggle"
        >
          {{ guests }} kişi
        </ui-button>
      </template>
      <template #content="{ close }">
        <div class="flex flex-col gap-3 p-3">
          <ui-form-row label="Kişi sayısı">
            <ui-input v-model="guests" type="number" />
          </ui-form-row>
          <ui-button size="sm" block @click="close">Uygula</ui-button>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
export default {
  name: 'PopoverExample',
  data() {
    return {
      noteOpen: false,
      guestsOpen: false,
      guests: 4,
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-popover>` by `app.use(UiLib)`. Local import: `import { Popover } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | `v-model:open` |
| `placement` | `'bottom-start' \| 'bottom-end' \| 'bottom' \| 'right-start' \| 'right-end' \| 'left-start' \| 'left-end' \| 'top-start' \| 'top-end' \| 'top'` | `"bottom-start"` |  |
| `match-trigger-width` | `boolean` | `false` | Tetikleyici ile aynı minimum genişlik |
| `width` | `string \| number` |  | Panel genişliği (örn. `13rem`, `208px`). Verildiğinde katman sabitlenir; `matchTriggerWidth` ile birlikteyse bu önceliklidir. |
| `disabled` | `boolean` | `false` |  |
| `anchor` | `string \| Record<string, unknown>` | `null` | Konum referansı — verilirse panel tetikleyici yerine bu öğeye göre açılır (HTMLElement, bileşen örneği, CSS seçici ya da sanal referans: `{ x, y }` görünüm noktası / `{ getBoundingClientRect() }`). Tetikleyicisiz kullanımda (`#trigger` boş) `v-model:open` ile programatik açılır; bu öğeye tıklama dış tıklama sayılmaz. |
| `close-on-outside-click` | `boolean` | `true` |  |
| `close-on-escape` | `boolean` | `true` |  |
| `outside-click-ignore-selector` | `string` | `""` | Ek `closest` seçicileri (iç içe Select / DatePicker / TimePicker). |
| `keep-open-on-ancestor-popover-click` | `boolean` | `false` | true: bu popover, üst (ata) popover paneline tıklanınca da açık kalır. false (varsayılan): üst panelde ama kendi panelinin dışında tıklanınca kapanır. |
| `align-selected-option-to-trigger` | `boolean` | `false` | true: panel içinde `[role="option"][aria-selected="true"]` satırının üstü, tetikleyicinin üstü ile aynı hizada olacak şekilde katman kaydırılır (Select). |
| `block` | `boolean` | `false` | true: tetikleyici satır genişliğini doldurur (sidebar footer vb.) |
| `inherit-layout` | `boolean` | `false` | true: kök ve tetikleyici kabuğu `display: contents` — flex satırında yalnızca slot (ör. `ui-tab-trigger`) katılır; konumlandırma ilk çocuk öğeden alınır. |
| `mobile-centered` | `boolean` | `true` | Mobil görünümde paneli ekran ortasında aç (varsayılan). false: tetikleyiciye göre konumlanır (Dropdown menüler). |
| `aria-label` | `string` | `""` | Panelin (`role="dialog"`) erişilebilir adı; metin i18n'den gelir. |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close`, `triggerAttrs` |
| `header` | `close` |
| `content` | `close` |
| `footer` | `close` |

