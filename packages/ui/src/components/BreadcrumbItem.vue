<template>
  <li class="ui-breadcrumb-item">
    <span
      class="ui-breadcrumb-separator"
      aria-hidden="true"
    >
      <ui-icon
        name="chevron-right"
        size="xs"
      />
    </span>
    <span
      v-if="current"
      class="ui-breadcrumb-current"
      aria-current="page"
    >
      <ui-icon
        v-if="icon"
        :name="icon"
        size="xs"
        aria-hidden="true"
      />
      <span class="ui-breadcrumb-label"><slot>{{ label }}</slot></span>
    </span>
    <RouterLink
      v-else-if="hasRouterTo"
      :to="to"
      class="ui-breadcrumb-link"
    >
      <ui-icon
        v-if="icon"
        :name="icon"
        size="xs"
        aria-hidden="true"
      />
      <span class="ui-breadcrumb-label"><slot>{{ label }}</slot></span>
    </RouterLink>
    <a
      v-else-if="href"
      :href="href"
      class="ui-breadcrumb-link"
    >
      <ui-icon
        v-if="icon"
        :name="icon"
        size="xs"
        aria-hidden="true"
      />
      <span class="ui-breadcrumb-label"><slot>{{ label }}</slot></span>
    </a>
    <span
      v-else
      class="ui-breadcrumb-text"
    >
      <ui-icon
        v-if="icon"
        :name="icon"
        size="xs"
        aria-hidden="true"
      />
      <span class="ui-breadcrumb-label"><slot>{{ label }}</slot></span>
    </span>
  </li>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'BreadcrumbItem',
  components: { RouterLink },
  props: {
    /** `vue-router` hedefi; `href`'e göre önceliklidir. */
    to: {
      type: [String, Object],
      default: null,
    },
    /** Düz bağlantı adresi (`to` yokken). */
    href: {
      type: String,
      default: '',
    },
    /** Slot kullanılmazsa gösterilen metin. */
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: null,
    },
    /** Bulunulan sayfa: bağlantı değil, `aria-current="page"` taşıyan metin. */
    current: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== ''
    },
  },
}
</script>
