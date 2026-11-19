---
title: ui-accordion
outline: [2, 3]
---

# ui-accordion

Used with: [`ui-accordion-item`](./ui-accordion-item)

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

Registered globally as `<ui-accordion>` by `app.use(UiLib)`. Local import: `import { Accordion } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `string \| number \| unknown[]` |  | Açık öğe(ler): tekli kullanımda `value` (yoksa `null`), `multiple` ile dizi. Verilmezse bileşen kendi iç durumunu yönetir (`defaultValue`). |
| `default-value` | `string \| number \| unknown[]` | `null` | Kontrolsüz kullanımda ilk açık öğe(ler). |
| `multiple` | `boolean` | `false` | Aynı anda birden fazla öğe açık kalabilir. |
| `collapsible` | `boolean` | `true` | Tekli kullanımda açık öğe yeniden tıklanınca kapanır. `false`: her zaman bir öğe açık kalır. |
| `variant` | `'line' \| 'card'` | `"line"` | `line` — ayırıcı çizgili satırlar; `card` — her öğe ayrı yüzey. |
| `size` | `'md'` |  | Satır dikey dolgusu; verilmezse tema kontrol boyutu. |
| `heading-level` | `number` | `3` | Başlık düğmesini saran başlık seviyesi (`h2`–`h6`); sayfa hiyerarşisine göre seçilir. |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |
| `change` | `@change` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

