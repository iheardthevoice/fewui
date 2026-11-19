---
title: ui-theme-provider
outline: [2, 3]
---

# ui-theme-provider

Tema sağlayıcı: sayfanın bir bölümüne ayrı tema, mod, ana renk ve yoğunluk uygular (önizleme, iç içe tema).

## Example

<ExampleFrame name="ThemeProvider" />

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="max-w-xs">
      <ui-segment-group v-model="mode" size="sm" aria-label="Önizleme modu">
        <ui-segment value="light" label="Açık" icon="sun" />
        <ui-segment value="dark" label="Koyu" icon="moon" />
      </ui-segment-group>
    </div>

    <div class="grid max-w-3xl gap-4 md:grid-cols-2">
      <ui-theme-provider
        v-for="preview in previews"
        :key="preview.label"
        theme="web"
        :mode="mode"
        :overrides="preview.overrides"
        :defaults="preview.defaults"
        background
      >
        <div class="p-4">
          <ui-card :title="preview.label" description="Site önizlemesi" icon="palette">
            <div class="flex flex-col gap-4">
              <ui-form-row label="Kişi sayısı">
                <ui-input model-value="4" />
              </ui-form-row>
              <ui-button block>Rezervasyon yap</ui-button>
            </div>
          </ui-card>
        </div>
      </ui-theme-provider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeProviderExample',
  data() {
    return {
      mode: 'dark',
      previews: [
        { label: 'Turuncu marka', overrides: { primary: '#ea580c' }, defaults: null },
        { label: 'Yeşil marka, sıkı yoğunluk', overrides: { primary: '#15803d' }, defaults: { density: 'compact' } },
      ],
    }
  },
}
</script>
```

## Usage

Registered globally as `<ui-theme-provider>` by `app.use(UiLib)`. Local import: `import { ThemeProvider } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `theme` | `string \| Record<string, unknown>` | `null` | Kayıtlı tema id'si veya `defineTheme` paketi; verilmezse yalnızca mod / override uygulanır. |
| `mode` | `'light' \| 'dark' \| 'system'` | `null` | `light` \| `dark` \| `system` (cihaz ayarı); verilmezse üst provider veya belge kökü. |
| `overrides` | `Record<string, unknown>` | `null` | Token override'ları — düz harita veya `{ light, dark }`. |
| `defaults` | `Record<string, unknown>` | `null` | Bileşen varsayılanı override'ları (`iconType`, `buttonRounded`, …). |
| `background` | `boolean` | `false` | Kökte `--background` dolgusu. |
| `tag` | `string` | `"div"` |  |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` | `mode`, `theme` |

