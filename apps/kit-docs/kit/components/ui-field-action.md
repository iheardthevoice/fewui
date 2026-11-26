---
title: ui-field-action
outline: [2, 3]
---

# ui-field-action

Alan eylemi: çip tetikleyici açılır panelde küçük bir form açar; değer çipte görünür ve temizlenebilir.

## Example

<ExampleFrame name="FieldAction" />

```vue
<template>
  <div class="flex flex-wrap items-center gap-1.5">
    <ui-field-action
      title="Sipariş notu"
      description="Mutfak fişinde ürünlerin üstünde yazdırılır."
      action-name="Not ekle"
      prefix-icon="note-sticky"
      :value="note"
      clearable
      popover-width="20rem"
      @clear="note = ''"
    >
      <ui-form-row label="Not">
        <ui-input
          v-model="note"
          multiline
          :rows="2"
          placeholder="Örn. Önce çorbalar gelsin"
        />
      </ui-form-row>
    </ui-field-action>

    <ui-field-action
      title="Kişi sayısı"
      action-name="Kişi sayısı"
      prefix-icon="users"
      :value="guestLabel"
      clearable
      @clear="guests = null"
    >
      <template #default="{ close }">
        <ui-chip-group
          v-model="guests"
          :options="guestOptions"
          :scrollable="false"
          aria-label="Kişi sayısı"
          @change="close"
        />
      </template>
    </ui-field-action>

    <ui-field-action
      mode="dialog"
      title="İndirim"
      description="Adisyon toplamına uygulanır."
      action-name="İndirim ekle"
      prefix-icon="percent"
      dialog-icon="percent"
      :value="discount ? `%${discount}` : ''"
      clearable
      @clear="discount = ''"
    >
      <ui-form-row label="İndirim oranı (%)">
        <ui-input v-model="discount" type="number" />
      </ui-form-row>
    </ui-field-action>
  </div>
</template>

<script>
export default {
  name: 'FieldActionExample',
  data() {
    return {
      note: '',
      guests: 4,
      discount: '',
      guestOptions: [2, 3, 4, 5, 6, 8].map((n) => ({ value: n, label: String(n) })),
    }
  },
  computed: {
    guestLabel() {
      return this.guests ? `${this.guests} kişi` : ''
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-field-action>` by `app.use(UiLib)`. Local import: `import { FieldAction } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `presentation` | `'popover' \| 'dialog' \| 'auto'` | `"auto"` | Açılış biçimi (`ui-popover` `presentation`): `auto` telefonda dialog, masaüstünde panel; `popover` her zaman panel; `dialog` her zaman dialog. |
| `open` | `boolean` |  | `v-model:open` |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `action-name` | `string` | `""` | Boş değerde tetikleyici metni (örn. “Tarih ekle”). |
| `mode` | `'popover' \| 'dialog'` | `"popover"` | `popover` \| `dialog` |
| `value` | `string \| number` | `""` | Seçili değerin görünen metni; doluysa tetikleyicide `actionName` yerine gösterilir. |
| `prefix-icon` | `string` | `null` |  |
| `suffix-icon` | `string` | `null` |  |
| `icon-only` | `boolean` | `false` | Yalnız ikon tetikleyici (kübik düğme). |
| `clearable` | `boolean` | `false` |  |
| `disabled` | `boolean` | `false` |  |
| `size` | `'sm'` |  | Tetikleyici boyutu. Verilmezse `ui-filter-chip` gibi temanın kontrol boyutu — yan yana duran filtre çipleriyle aynı yükseklik (eskiden sabit `sm` idi, bir kademe küçük kalıyordu). |
| `placement` | `'bottom-start' \| 'bottom-end' \| 'bottom' \| 'top-start' \| 'top-end' \| 'right-start' \| 'right-end' \| 'left-start' \| 'left-end'` | `"bottom-start"` |  |
| `popover-width` | `string \| number` |  |  |
| `mobile-centered` | `boolean` | `true` |  |
| `max-width` | `string` | `"sm"` |  |
| `dialog-icon` | `string` | `null` |  |
| `close-on-backdrop` | `boolean` | `true` |  |
| `close-on-escape` | `boolean` | `true` |  |
| `clear-label` | `string` | `null` |  |
| `done-label` | `string` | `null` |  |
| `show-footer` | `boolean` | `true` | Dialog modunda alt çubuğu göster (varsayılan: true). |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |
| `clear` | `@clear` |

## Slots

| Slot | Slot props |
| --- | --- |
| `trigger` | `open`, `toggle`, `close`, `label`, `hasValue`, `clear` |
| `header` | `close` |
| `default` | `close`, `open` |
| `footer` | `close` |

