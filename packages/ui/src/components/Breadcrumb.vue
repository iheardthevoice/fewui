<template>
  <nav
    class="ui-breadcrumb"
    :aria-label="resolvedAriaLabel"
  >
    <ol class="ui-breadcrumb-list">
      <template
        v-for="entry in entries"
        :key="entry.key"
      >
        <li
          v-if="entry.collapsed"
          class="ui-breadcrumb-item"
        >
          <span
            class="ui-breadcrumb-separator"
            aria-hidden="true"
          >
            <ui-icon
              name="chevron-right"
              size="xs"
            />
          </span>
          <Dropdown
            :items="entry.items"
            @select="onCollapsedSelect"
          >
            <template #trigger="{ toggle, triggerAttrs }">
              <button
                type="button"
                class="ui-breadcrumb-ellipsis"
                :aria-label="moreLabel"
                v-bind="triggerAttrs"
                @click="toggle"
              >
                <ui-icon
                  name="ellipsis"
                  size="xs"
                />
              </button>
            </template>
          </Dropdown>
        </li>
        <BreadcrumbItem
          v-else
          :to="entry.item.to"
          :href="entry.item.href"
          :icon="entry.item.icon"
          :label="entry.item.label"
          :current="entry.current"
        />
      </template>
      <slot />
    </ol>
  </nav>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem.vue'
import Dropdown from './Dropdown.vue'
import { resolveUiText } from '../utils/resolve-ui-text.js'

export default {
  name: 'Breadcrumb',
  components: { BreadcrumbItem, Dropdown },
  props: {
    /**
     * Kısa yol: `[{ label, to, href, icon }]`. Son öğe bulunulan sayfadır.
     * Verilmezse öğeler slot'a `ui-breadcrumb-item` olarak yazılır.
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * `items` bu sayıyı aşarsa ilk öğe ile son öğeler kalır, aradakiler `…` menüsünde toplanır.
     * `0`: daraltma yok. Yalnız `items` ile çalışır (slot öğeleri daraltılmaz).
     */
    maxItems: {
      type: Number,
      default: 0,
    },
    /** Verilmezse `ui.breadcrumb.ariaLabel`. */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    resolvedAriaLabel() {
      return this.ariaLabel || resolveUiText(this, 'ui.breadcrumb.ariaLabel', 'Breadcrumb')
    },
    moreLabel() {
      return resolveUiText(this, 'ui.breadcrumb.more', 'Show hidden pages')
    },
    /** Görünen sıra: öğe ya da daraltılmış grup. */
    entries() {
      const items = this.items.filter(Boolean)
      const lastIndex = items.length - 1
      const toEntry = (item, index) => ({ key: `item-${index}`, item, current: index === lastIndex })
      const max = Math.floor(this.maxItems)
      if (!(max >= 2) || items.length <= max) return items.map(toEntry)
      // İlk öğe + `…` + sondan (max − 1) öğe: kullanıcı kökü ve bulunduğu yeri her zaman görür.
      const tailStart = items.length - (max - 1)
      return [
        toEntry(items[0], 0),
        { key: 'collapsed', collapsed: true, items: items.slice(1, tailStart) },
        ...items.slice(tailStart).map((item, i) => toEntry(item, tailStart + i)),
      ]
    },
  },
  methods: {
    /** Menü öğesi bağlantı değil düğmedir; gezinme burada yapılır. */
    onCollapsedSelect(item) {
      if (item?.to != null && item.to !== '' && this.$router) {
        this.$router.push(item.to)
        return
      }
      if (item?.href) window.location.assign(item.href)
    },
  },
}
</script>
