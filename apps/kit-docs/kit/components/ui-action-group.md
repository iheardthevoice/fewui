---
title: ui-action-group
outline: [2, 3]
---

# ui-action-group

Yan yana eylem düğmeleri: aralıklı, birleşik (joined) ve eşit genişlikte (grow) grup.

## Example

<ExampleFrame name="ActionGroup" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-4">
    <ui-action-group aria-label="Sipariş işlemleri">
      <ui-button variant="outline" color="secondary" prefix-icon="print">Fiş yazdır</ui-button>
      <ui-button variant="outline" color="secondary" prefix-icon="arrows-turn-right">Masa taşı</ui-button>
    </ui-action-group>

    <ui-action-group
      joined
      divided
      aria-label="Görünüm"
    >
      <ui-button variant="outline" color="secondary" prefix-icon="chevron-left" aria-label="Önceki gün" />
      <ui-button variant="outline" color="secondary">Bugün</ui-button>
      <ui-button variant="outline" color="secondary" prefix-icon="chevron-right" aria-label="Sonraki gün" />
    </ui-action-group>

    <ui-action-group
      grow
      aria-label="Ödeme"
    >
      <ui-button variant="outline" color="secondary">Hesabı böl</ui-button>
      <ui-button>Ödeme al</ui-button>
    </ui-action-group>
  </div>
</template>

<script>
export default {
  name: 'ActionGroupExample',
}
</script>
```

## Usage

Registered globally as `<ui-action-group>` by `app.use(UiLib)`. Local import: `import { ActionGroup } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | `"horizontal"` | Satır (`horizontal`) veya sütun (`vertical`) dizilimi — form alanları için `vertical` + `joined` |
| `joined` | `boolean` | `false` | true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur). Kapsayıcıya border, arka plan veya divide eklenmez. Dikeyde Input / Select / Button yan yana yığılmış tek kontrol gibi görünür. |
| `divided` | `boolean` | `false` | `joined` ile birlikte: çocuklar arasında ince ayırıcı çizgi (dikeyde üst kenar, yatayda sol kenar — inset). |
| `grow` | `boolean` | `false` | Yatayda çocuklar eşit büyür; dikeyde grup ve çocuklar tam genişlik. (`min-width` / `min-height: max-content` — erken “…” kesilmesini önler). |
| `aria-label` | `string` | `""` | `role="group"` erişilebilir adı |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

