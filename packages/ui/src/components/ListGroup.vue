<template>
  <section
    class="ui-list-group"
    :aria-labelledby="label ? labelId : undefined"
  >
    <p
      v-if="label"
      :id="labelId"
      class="ui-list-group-label ui-section-label"
    >
      {{ label }}
    </p>

    <div
      role="list"
      class="ui-list-group-card"
      :aria-label="ariaLabel || undefined"
    >
      <slot />
    </div>

    <p
      v-if="footer || $slots.footer"
      class="ui-list-group-footer"
    >
      <slot name="footer">{{ footer }}</slot>
    </p>
  </section>
</template>

<script>
import { createUiId } from '../utils/ui-id.js'

/**
 * Gruplu liste — iOS Ayarlar düzeni: üstte bölüm etiketi, içe çekik kart, altta açıklama.
 *
 * Satırlar `ui-list-item` (`tag="div"` veya varsayılan `li`) ile yazılır. Grup satır dilbilgisini
 * sabitler: tek ikon karosu boyutu (28px), tek satır başlık + tek satır alt metin, metin sütunundan
 * başlayan ayraç. Uzun açıklama satıra değil `footer`'a yazılır.
 *
 * Sayfada kart `ui-surface` görünümündedir; dialog / sheet içinde dolgu alan zeminine geçer
 * (kart içinde kart görünmez).
 */
export default {
  name: 'ListGroup',
  props: {
    /** Kartın üstündeki bölüm etiketi (büyük harf, ikincil) */
    label: {
      type: String,
      default: '',
    },
    /** Kartın altındaki açıklama — satırın uzun anlatımı buraya yazılır */
    footer: {
      type: String,
      default: '',
    },
    /** Etiket yoksa listenin erişilebilir adı */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      labelId: createUiId('ui-list-group-label'),
    }
  },
}
</script>
