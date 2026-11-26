---
title: ui-number-stepper
outline: [2, 3]
---

# ui-number-stepper

Sayı artırma / azaltma: kişi sayısı, adet gibi küçük tam sayılar. Gruplu liste satırında `#trailing` içinde kullanılır.

## Example

<ExampleFrame name="NumberStepper" />

```vue
<template>
  <div class="flex max-w-md flex-col">
    <ui-list-group>
      <ui-list-item
        tag="div"
        title="Kişi sayısı"
      >
        <template #trailing>
          <ui-number-stepper
            v-model="guests"
            :min="1"
            :max="40"
            aria-label="Kişi sayısı"
          />
        </template>
      </ui-list-item>
      <ui-list-item
        tag="div"
        title="Masa"
        :value="table"
        interactive
        clearable
        @click="table = 'Bahçe 4'"
        @clear="table = ''"
      />
    </ui-list-group>
  </div>
</template>

<script>
export default {
  name: 'NumberStepperExample',
  data() {
    return { guests: 2, table: 'Bahçe 4' }
  },
}
</script>
```

## Usage

Registered globally as `<ui-number-stepper>` by `app.use(UiLib)`. Local import: `import { NumberStepper } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `model-value` | `number` | `null` |  |
| `min` | `number` | `0` |  |
| `max` | `number` | `null` |  |
| `step` | `number` | `1` |  |
| `size` | `'sm'` | `"sm"` |  |
| `disabled` | `boolean` | `false` |  |
| `aria-label` | `string` | `""` | Grubun erişilebilir adı (ör. "Kişi sayısı") |
| `decrease-label` | `string` | `""` |  |
| `increase-label` | `string` | `""` |  |

## Events

| Event | Listener |
| --- | --- |
| `update:modelValue` | `@update:modelValue` |

