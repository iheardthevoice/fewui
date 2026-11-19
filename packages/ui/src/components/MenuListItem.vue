<template>
  <ui-button
    class="ui-dropdown-item"
    :class="inset ? 'ui-dropdown-item--inset' : ''"
    variant="ghost"
    :color="color"
    :rounded="!described"
    block
    text-align="left"
    :role="role"
    tabindex="-1"
    :data-menu-index="index"
    :aria-checked="checkable ? (item.checked ? 'true' : 'false') : undefined"
    :aria-haspopup="hasChildren ? 'menu' : undefined"
    :aria-expanded="hasChildren ? (expanded ? 'true' : 'false') : undefined"
    :aria-controls="hasChildren && expanded ? submenuId : undefined"
    :prefix-icon="rich || described ? null : (item.icon || null)"
    :suffix-icon="rich ? null : suffixIcon"
    :disabled="item.disabled"
    :wrap="described"
  >
    <span
      v-if="described"
      class="ui-dropdown-item-copy"
    >
      <span
        v-if="item.icon"
        class="ui-dropdown-item-icon"
        aria-hidden="true"
      >
        <ui-icon
          :name="item.icon"
          size="sm"
        />
      </span>
      <span class="ui-dropdown-item-label">{{ item.label }}</span>
      <span class="ui-dropdown-item-description">{{ item.description }}</span>
    </span>
    <span
      v-else-if="rich"
      class="ui-dropdown-row"
    >
      <span
        v-if="columns.indicator"
        class="ui-dropdown-row-indicator"
        aria-hidden="true"
      >
        <ui-icon
          v-if="item.type === 'checkbox' && item.checked"
          name="check"
          size="xs"
        />
        <span
          v-else-if="item.type === 'radio' && item.checked"
          class="ui-dropdown-row-dot"
        />
      </span>
      <span
        v-if="columns.icon"
        class="ui-dropdown-row-icon"
        aria-hidden="true"
      >
        <ui-icon
          v-if="item.icon"
          :name="item.icon"
          size="xs"
        />
      </span>
      <span class="ui-dropdown-row-label">{{ item.label }}</span>
      <kbd
        v-if="item.shortcut"
        class="ui-kbd ui-kbd--sm ui-text-2xs ui-dropdown-row-shortcut"
      >{{ item.shortcut }}</kbd>
      <span
        v-if="hasChildren || suffixIcon"
        class="ui-dropdown-row-suffix"
        :class="hasChildren ? 'ui-dropdown-row-suffix--submenu' : ''"
        aria-hidden="true"
      >
        <ui-icon
          :name="hasChildren ? 'chevron-right' : suffixIcon"
          size="xs"
        />
      </span>
    </span>
    <template v-else>{{ item.label }}</template>
  </ui-button>
</template>

<script>
/**
 * Menü satırı — `MenuList` içinde kullanılır, global kayıtlı değildir.
 * Eski (`rich` olmayan) çizim `ui-dropdown` öğelerinin bugünkü görünümünü aynen korur;
 * `rich` satır gösterge / ikon / etiket / kısayol sütunlarını hizalar.
 */
export default {
  name: 'MenuListItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    /** Sütunlu satır çizimi (gösterge, ikon, kısayol, alt menü oku). */
    aligned: {
      type: Boolean,
      default: false,
    },
    /** Menüde ayrılacak sütunlar: `{ indicator, icon }`. */
    columns: {
      type: Object,
      default: () => ({ indicator: false, icon: false }),
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    submenuId: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    described() {
      return Boolean(this.item.description)
    },
    rich() {
      return this.aligned && !this.described
    },
    /**
     * Klasik (sütunsuz) menüde ikonlu ve ikonsuz öğeler karışıksa, ikonsuz öğenin etiketi
     * ikon sütunu kadar içeriden başlar; ikonlu satırların çizimi değişmez.
     */
    inset() {
      return !this.rich && !this.described && this.columns.icon && !this.item.icon
    },
    hasChildren() {
      return Array.isArray(this.item.children) && this.item.children.length > 0
    },
    checkable() {
      return this.item.type === 'checkbox' || this.item.type === 'radio'
    },
    role() {
      if (this.item.type === 'checkbox') return 'menuitemcheckbox'
      if (this.item.type === 'radio') return 'menuitemradio'
      return 'menuitem'
    },
    /** Öğe `color` (ör. `'danger'` sil eylemi); seçili öğe `primary`. */
    color() {
      if (this.item.color) return this.item.color
      if (this.item.selected) return 'primary'
      return 'secondary'
    },
    suffixIcon() {
      const it = this.item
      if (it.suffixIcon || it.suffix_icon) return it.suffixIcon || it.suffix_icon
      if (it.selected) return 'check'
      // Açıklamalı satır sütunlu çizilmez; alt menü okunu sonek ikon taşır.
      if (this.hasChildren) return 'chevron-right'
      return null
    },
  },
}
</script>
