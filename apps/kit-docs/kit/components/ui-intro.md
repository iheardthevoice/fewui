---
title: ui-intro
outline: [2, 3]
---

# ui-intro

Tanıtım turu: ilk girişte tam ekran, adım adım karşılama; atlanabilir ve sonunda `finish` olayı verir.

## Example

<ExampleFrame name="Intro" />

```vue
<template>
  <div class="flex flex-wrap items-center gap-2">
    <ui-button prefix-icon="play" @click="start">Tanıtımı başlat</ui-button>
    <span class="ui-text-default">{{ status }}</span>

    <ui-intro
      v-model:open="open"
      v-model="step"
      :steps="steps"
      aria-label="Restta tanıtımı"
      finish-label="Kuruluma başla"
      @skip="status = 'Tanıtım atlandı.'"
      @finish="status = 'Tanıtım tamamlandı.'"
    />
  </div>
</template>

<script>
export default {
  name: 'IntroExample',
  data() {
    return {
      open: false,
      step: 0,
      status: '',
      steps: [
        {
          key: 'menu',
          icon: 'utensils',
          title: 'Menünüzü ekleyin',
          description: 'Ürünleri kategorilere ayırın; fiyat ve görsel ekleyin. QR menü kendiliğinden güncellenir.',
        },
        {
          key: 'tables',
          icon: 'chair',
          title: 'Masalarınızı yerleştirin',
          description: 'Salon planını çizin; her masanın siparişi kendi adisyonunda toplanır.',
        },
        {
          key: 'pos',
          icon: 'cash-register',
          title: 'Satışa başlayın',
          description: 'Siparişi alın, mutfağa gönderin ve ödemeyi tek ekrandan tamamlayın.',
        },
      ],
    }
  },
  methods: {
    start() {
      this.step = 0
      this.open = true
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-intro>` by `app.use(UiLib)`. Local import: `import { Intro } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `true` | Overlay iken görünürlük; `overlay` kapalıysa yok sayılır. |
| `model-value` | `number` | `0` | Aktif slayt (0 tabanlı). |
| `steps` | `unknown[]` | `[]` | `{ key, icon, iconType, title, description, ariaLabel }` |
| `overlay` | `boolean` | `true` | Tam ekran katman (`Teleport` + `role=dialog`). |
| `show-skip` | `boolean` | `true` |  |
| `skip-label` | `string` | `""` |  |
| `next-label` | `string` | `""` |  |
| `finish-label` | `string` | `""` |  |
| `aria-label` | `string` | `""` |  |

## Events

| Event | Listener |
| --- | --- |
| `update:open` | `@update:open` |
| `update:modelValue` | `@update:modelValue` |
| `skip` | `@skip` |
| `finish` | `@finish` |
| `next` | `@next` |

## Slots

| Slot | Slot props |
| --- | --- |
| `header` |  |
| `default` | `step`, `index`, `active` |
| `footer` | `index`, `isLast`, `goNext`, `goPrev`, `goTo` |

