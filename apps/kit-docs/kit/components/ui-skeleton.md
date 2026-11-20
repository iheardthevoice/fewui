---
title: ui-skeleton
outline: [2, 3]
---

# ui-skeleton

İskelet: tek başına yer tutucu şekiller ve içeriği saran kullanım. Gösterim kuralı: iskelet yalnız yükleme `delay` (150 ms) süresini aşarsa görünür, görünürse en az `minDuration` (300 ms) kalır; içerik yükseklik canlandırılmadan, yalnız opacity ile belirir. "Hızlı" düğmesi 100 ms'lik yüklemeyi gösterir: iskelet hiç çizilmez.

## Example

<ExampleFrame name="Skeleton" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-6">
    <div class="flex items-center gap-3">
      <div class="size-10 shrink-0">
        <ui-skeleton variant="circle" />
      </div>
      <div class="flex flex-1 flex-col gap-2">
        <div class="w-1/2">
          <ui-skeleton size="sm" />
        </div>
        <div class="w-3/4">
          <ui-skeleton size="sm" />
        </div>
      </div>
      <div class="w-20">
        <ui-skeleton variant="pill" />
      </div>
    </div>

    <ui-skeleton variant="block" />

    <ui-skeleton :lines="3" />

    <ui-card title="Son siparişler">
      <template #append>
        <div class="flex gap-2">
          <ui-button variant="outline" color="secondary" size="sm" @click="reload(100)">Hızlı</ui-button>
          <ui-button variant="outline" color="secondary" size="sm" @click="reload(1500)">Yavaş</ui-button>
        </div>
      </template>
      <ui-skeleton :loading="loading">
        <ui-list>
          <ui-list-item title="Bahçe 4" description="3 ürün · ₺1.140" icon="receipt" trailing-icon="none" />
          <ui-list-item title="Salon 2" description="2 ürün · ₺640" icon="receipt" trailing-icon="none" />
        </ui-list>
      </ui-skeleton>
    </ui-card>
  </div>
</template>

<script>
export default {
  name: 'SkeletonExample',
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    reload(ms) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, ms)
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-skeleton>` by `app.use(UiLib)`. Local import: `import { Skeleton } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'line' \| 'circle' \| 'block' \| 'pill'` | `"line"` |  |
| `loading` | `boolean` | `false` |  |
| `size` | `'md'` | `"md"` | Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). |
| `lines` | `number` | `1` | Kutu modu: alt alta bu kadar satır çizer (son satırlar kısalır) — metin bloğu yer tutucusu. |
| `delay` | `number` | `150` | Sarmalayıcı mod: iskelet ancak yükleme bu süreden (ms) uzun sürerse görünür. Hızlı yanıtta iskelet hiç çizilmez; yer yine de ayrılır (görünmez iskelet), içerik zıplamaz. |
| `min-duration` | `number` | `300` | Sarmalayıcı mod: iskelet bir kez göründüyse en az bu süre (ms) kalır — yanıp sönmez. |

## Slots

| Slot | Slot props |
| --- | --- |
| `placeholder` |  |
| `default` |  |

