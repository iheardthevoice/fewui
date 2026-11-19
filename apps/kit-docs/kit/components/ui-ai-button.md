---
title: ui-ai-button
outline: [2, 3]
---

# ui-ai-button

Yapay zekâ eylemi düğmesi: varsayılan, küçük ve üretim sürerken yükleniyor durumu.

## Example

<ExampleFrame name="AiButton" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-2">
      <ui-ai-button
        :loading="generating"
        loading-text="Yazılıyor…"
        @click="generate"
      >
        Açıklamayı yazdır
      </ui-ai-button>
      <ui-ai-button
        size="sm"
        prefix-icon="image"
      >
        Görsel üret
      </ui-ai-button>
      <ui-ai-button disabled>Kredi bitti</ui-ai-button>
    </div>

    <p
      v-if="description"
      class="ui-text-default m-0 max-w-md"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AiButtonExample',
  data() {
    return {
      generating: false,
      description: '',
    }
  },
  methods: {
    generate() {
      this.generating = true
      setTimeout(() => {
        this.generating = false
        this.description = 'Odun ateşinde pişen ince hamur, San Marzano domates sosu ve taze fesleğen.'
      }, 1200)
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-ai-button>` by `app.use(UiLib)`. Local import: `import { AiButton } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `prefix-icon` | `string` | `"wand-magic-sparkles"` |  |
| `size` | `string` |  |  |
| `disabled` | `boolean` | `false` |  |
| `loading` | `boolean` | `false` |  |
| `loading-text` | `string` | `null` | Boş bırakılırsa `ui.button.loading` (i18n) kullanılır |
| `block` | `boolean` | `false` |  |

## Events

| Event | Listener |
| --- | --- |
| `click` | `@click` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

