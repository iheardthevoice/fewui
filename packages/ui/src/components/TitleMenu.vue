<template>
  <span class="ui-title-menu">
    <ui-dropdown
      :items="items"
      placement="bottom-start"
      @select="$emit('select', $event)"
    >
    <template #trigger="{ toggle, open, triggerAttrs }">
      <button
        type="button"
        class="ui-title-menu-trigger"
        v-bind="triggerAttrs"
        :aria-expanded="open ? 'true' : 'false'"
        :aria-label="ariaLabel || undefined"
        @click="toggle"
      >
        <span class="ui-title-menu-text">
          <slot>{{ title }}</slot>
        </span>
        <ui-icon
          v-if="suffixIcon"
          :name="suffixIcon"
          type="solid"
          size="sm"
          :class="['ui-title-menu-suffix', suffixIconColor ? `ui-title-menu-suffix--${suffixIconColor}` : '']"
          aria-hidden="true"
        />
        <ui-icon
          name="chevron-down"
          size="xs"
          class="ui-title-menu-chevron"
          aria-hidden="true"
        />
      </button>
    </template>
    </ui-dropdown>
  </span>
</template>

<script>
const TITLE_MENU_COLORS = ['primary', 'secondary', 'success', 'warning', 'info', 'danger']

/**
 * Başlık menüsü — sayfa / dialog başlığının kendisi dokunulabilir; menü başlık düzeyindeki eylemleri
 * taşır (favori, bağlantı kopyala …). Başlığın yazı stilini aynen devralır; yanında soluk ⌄.
 * `suffixIcon`: yalnız bir durumu gösterir (ör. favorideyken dolu yıldız) — eylem menüdedir.
 * Başlığa her eylem için ayrı ikon eklemek yerine kullanılır (iOS başlık menüsü).
 */
export default {
  name: 'TitleMenu',
  props: {
    title: {
      type: String,
      default: '',
    },
    /** `ui-dropdown` öğeleri */
    items: {
      type: Array,
      default: () => [],
    },
    /** Başlıktan sonra durum ikonu (ör. `star`); boşsa çizilmez */
    suffixIcon: {
      type: String,
      default: '',
    },
    suffixIconColor: {
      type: String,
      default: '',
      validator: (v) => !v || TITLE_MENU_COLORS.includes(v),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['select'],
}
</script>
