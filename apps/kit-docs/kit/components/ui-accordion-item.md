---
title: ui-accordion-item
outline: [2, 3]
---

# ui-accordion-item

Used with: [`ui-accordion`](./ui-accordion)

## Example

<ExampleFrame name="Accordion" />

```vue
<template>
  <div class="flex max-w-xl flex-col gap-8">
    <ui-accordion v-model="open">
      <ui-accordion-item
        value="hours"
        title="Çalışma saatleri"
        description="Hafta içi ve hafta sonu ayrı tanımlanır"
        icon="clock"
      >
        Mutfak hafta içi 23.00'te, hafta sonu 00.30'da kapanır. Kapanıştan sonra gelen siparişler ertesi iş gününe yazılır.
      </ui-accordion-item>
      <ui-accordion-item
        value="service"
        title="Servis ücreti"
        icon="receipt"
      >
        <template #append>
          <ui-badge color="success">Açık</ui-badge>
        </template>
        Adisyona %10 servis ücreti eklenir. Paket siparişlerde uygulanmaz.
      </ui-accordion-item>
      <ui-accordion-item
        value="printers"
        title="Yazıcılar"
        icon="print"
        disabled
      >
        Bu bölüm yalnızca yönetici hesabıyla açılır.
      </ui-accordion-item>
    </ui-accordion>

    <ui-accordion
      variant="card"
      multiple
      :default-value="['delivery']"
    >
      <ui-accordion-item
        value="delivery"
        title="Paket servis bölgeleri"
      >
        Üç bölge tanımlı. En düşük sipariş tutarı bölgeye göre değişir.
      </ui-accordion-item>
      <ui-accordion-item
        value="payment"
        title="Ödeme yöntemleri"
      >
        Nakit, kredi kartı ve yemek kartı kabul edilir.
      </ui-accordion-item>
    </ui-accordion>
  </div>
</template>

<script>
export default {
  name: 'AccordionExample',
  data() {
    return {
      open: 'hours',
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-accordion-item>` by `app.use(UiLib)`. Local import: `import { AccordionItem } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` * | `string \| number` |  | `ui-accordion` `modelValue` ile eşleşen kimlik. |
| `title` | `string` | `""` |  |
| `description` | `string` | `""` | Başlığın altında ikincil satır. |
| `icon` | `string` | `null` | `ui-icon` `name` — başlığın ilk satırıyla hizalanır. |
| `disabled` | `boolean` | `false` |  |

\* required

## Slots

| Slot | Slot props |
| --- | --- |
| `title` |  |
| `append` |  |
| `default` |  |

