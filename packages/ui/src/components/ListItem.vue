<template>
  <li
    :class="itemClass"
    role="listitem"
  >
    <span
      v-if="prefixIcon"
      class="ui-list-item-prefix"
      aria-hidden="true"
    >
      <ui-icon
        :name="prefixIcon"
        :type="prefixIconType"
        size="xs"
        class="ui-list-item-prefix-icon"
      />
    </span>
    <span
      v-else-if="$slots.prefix"
      class="ui-list-item-prefix-slot shrink-0"
    >
      <slot name="prefix" />
    </span>
    <div class="ui-list-item-content min-w-0 flex-1">
      <slot />
    </div>
    <div
      v-if="$slots.trailing"
      class="ui-list-item-trailing shrink-0"
    >
      <slot name="trailing" />
    </div>
  </li>
</template>

<script>
import { cn } from '../utils/cn.js'

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']
const ALIGNS = ['start', 'center']

export default {
  name: 'ListItem',
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null,
    },
    prefixIconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
    /** Prefiks / trailing ile dikey hizalama (`center` medya satırları için). */
    align: {
      type: String,
      default: 'start',
      validator: (v) => ALIGNS.includes(v),
    },
  },
  computed: {
    itemClass() {
      return cn(
        'ui-list-item',
        this.align === 'center' ? 'ui-list-item--center' : '',
      )
    },
  },
}
</script>
