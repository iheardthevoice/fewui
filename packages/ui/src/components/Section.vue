<template>
  <section class="ui-section">
    <ui-divider
      v-if="showSectionDivider"
      :title="title"
      :icon="icon"
      spacing="md"
      :decorative="false"
    />

    <p
      v-if="description"
      class="ui-section-description ui-text-default"
    >
      {{ description }}
    </p>

    <slot
      v-if="$slots.empty"
      name="empty"
    />

    <div
      v-else-if="hasFields"
      :class="['ui-section-fields', divided ? 'ui-section-fields--divided' : '']"
    >
      <slot />
    </div>

    <div
      v-else-if="$slots.body"
      class="ui-section-body"
    >
      <slot name="body" />
    </div>
  </section>
</template>

<script>
/**
 * Detay / form bölümü — etiketli ayırıcı başlık, isteğe bağlı açıklama ve alan yığını.
 * Ardışık bölümler arası `--ui-space-section`, alanlar arası `--ui-space-stack`.
 * Slotlar: varsayılan (alan yığını), `body` (serbest içerik), `empty` (boş durum).
 */
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    /**
     * Geniş yerleşimde alanlar arasına ayraç (etiket solda, kontrol sağda düzeni). Dar ekranda
     * satırlar dikeye döndüğü için ayraç çizilmez. Alanlar arasına elle `ui-divider` koymak yerine kullanılır.
     */
    divided: {
      type: Boolean,
      default: false,
    },
    /** `false`: üstteki sekme / segment konumu zaten gösteriyorsa etiketli ayırıcı çizilmez */
    showDivider: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    showSectionDivider() {
      return this.showDivider && Boolean(this.title || this.icon)
    },
    hasFields() {
      return Boolean(this.$slots.default) && !this.$slots.body
    },
  },
}
</script>
