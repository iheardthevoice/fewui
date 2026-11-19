---
title: ui-phone
outline: [2, 3]
---

# ui-phone

Telefon alanı: ülke kodu ve numara ayrı v-model ile; özel ülke listesi.

## Example

<ExampleFrame name="Phone" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-form-row
      label="Cep telefonu"
      description="Rezervasyon onayı bu numaraya SMS ile gider."
    >
      <ui-phone
        v-model:country="country"
        v-model:number="number"
        placeholder="5xx xxx xx xx"
      />
    </ui-form-row>

    <ui-form-row label="Restoran telefonu">
      <ui-phone
        v-model:country="branchCountry"
        v-model:number="branchNumber"
        :countries="countries"
        country-aria-label="Ülke kodu"
      />
    </ui-form-row>

    <p class="ui-text-default m-0">
      Kaydedilecek numara: {{ country }} {{ number || '—' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PhoneExample',
  data() {
    return {
      country: '+90',
      number: '5321234567',
      branchCountry: '+90',
      branchNumber: '',
      countries: [
        { value: '+90', label: '+90' },
        { value: '+49', label: '+49' },
        { value: '+31', label: '+31' },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-phone>` by `app.use(UiLib)`. Local import: `import { Phone } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `country` | `string` | `"+90"` |  |
| `number` | `string` | `""` |  |
| `countries` | `unknown[]` | `[{"value":"+90","label":"+90"},{"value":"+1","label":"+1"},{"value":"+44","label":"+44"},{"value":"+49","label":"+49"}]` |  |
| `size` | `'md'` |  |  |
| `disabled` | `boolean` | `false` |  |
| `readonly` | `boolean` | `false` |  |
| `placeholder` | `string` | `""` |  |
| `number-name` | `string` |  |  |
| `id` | `string` |  |  |
| `autocomplete` | `string` | `"tel-national"` |  |
| `number-maxlength` | `number \| string` | `15` |  |
| `country-aria-label` | `string` | `""` |  |
| `aria-describedby` | `string` |  |  |

## Events

| Event | Listener |
| --- | --- |
| `update:country` | `@update:country` |
| `update:number` | `@update:number` |
| `focus` | `@focus` |
| `blur` | `@blur` |

