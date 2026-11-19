---
title: ui-section
outline: [2, 3]
---

# ui-section

Bölüm: etiketli ayırıcı + açıklama + alan yığını; serbest içerik için `#body`, boş bölüm için `#empty`.

## Example

<ExampleFrame name="Section" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-6">
    <ui-section
      title="Misafir"
      icon="user"
      description="Rezervasyonu yapan kişi ve iletişim bilgisi."
    >
      <ui-form-row label="Ad soyad">
        <ui-input v-model="name" />
      </ui-form-row>
      <ui-form-row label="Cep telefonu">
        <ui-phone v-model:country="country" v-model:number="number" />
      </ui-form-row>
    </ui-section>

    <ui-section title="İstekler" icon="note-sticky">
      <template #body>
        <ui-chip-group
          v-model="requests"
          :options="requestOptions"
          multiple
          :scrollable="false"
          aria-label="İstekler"
        />
      </template>
    </ui-section>

    <ui-section title="Ön ödeme" icon="credit-card">
      <template #empty>
        <ui-empty
          size="sm"
          icon="credit-card"
          title="Ön ödeme alınmadı"
          description="Kalabalık gruplarda masayı güvenceye almak için kapora isteyin."
        />
      </template>
    </ui-section>
  </div>
</template>

<script>
export default {
  name: 'SectionExample',
  data() {
    return {
      name: 'Deniz Yılmaz',
      country: '+90',
      number: '5321234567',
      requests: ['window'],
      requestOptions: [
        { value: 'window', label: 'Cam kenarı' },
        { value: 'highchair', label: 'Mama sandalyesi' },
        { value: 'birthday', label: 'Doğum günü' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-section>` by `app.use(UiLib)`. Local import: `import { Section } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` |  |
| `icon` | `string` | `""` |  |
| `show-divider` | `boolean` | `true` | `false`: üstteki sekme / segment konumu zaten gösteriyorsa etiketli ayırıcı çizilmez |

## Slots

| Slot | Slot props |
| --- | --- |
| `empty` |  |
| `default` |  |
| `body` |  |

