---
title: ui-list-group
outline: [2, 3]
---

# ui-list-group

Gruplu liste: bölüm etiketi + içe çekik kart + açıklama. Satır: ikon karosu · tek satır başlık / alt metin · sağda tek değer. Geri dönüşsüz işlem en altta, ayrı grupta.

## Example

<ExampleFrame name="ListGroup" />

```vue
<template>
  <div class="flex max-w-md flex-col gap-6">
    <ui-list-group label="Hesap">
      <ui-list-item
        tag="div"
        title="Hesap bilgileri"
        description="E-posta, bağlı işletmeler"
        icon="user"
        icon-hex="#007AFF"
        icon-variant="solid"
        icon-type="solid"
        interactive
      />
      <ui-list-item
        tag="div"
        title="Güvenlik"
        value="2 adımlı açık"
        icon="lock"
        icon-hex="#5856D6"
        icon-variant="solid"
        icon-type="solid"
        interactive
      />
      <ui-list-item
        tag="div"
        title="Oturumlar"
        value="3 cihaz"
        icon="laptop-mobile"
        icon-hex="#8E8E93"
        icon-variant="solid"
        icon-type="solid"
        interactive
      />
    </ui-list-group>

    <ui-list-group footer="Hesabı silmek bağlı işletmelere erişimi kalıcı olarak kapatır.">
      <ui-list-item
        tag="div"
        title="Hesabı sil"
        color="danger"
        interactive
      />
    </ui-list-group>
  </div>
</template>

<script>
export default {
  name: 'ListGroupExample',
}
</script>
```

## Usage

Registered globally as `<ui-list-group>` by `app.use(UiLib)`. Local import: `import { ListGroup } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `""` | Kartın üstündeki bölüm etiketi (büyük harf, ikincil) |
| `footer` | `string` | `""` | Kartın altındaki açıklama — satırın uzun anlatımı buraya yazılır |
| `aria-label` | `string` | `""` | Etiket yoksa listenin erişilebilir adı |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |
| `footer` |  |

