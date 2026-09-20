<template>
  <ui-popover
    :open="isOpen"
    :placement="placement"
    :match-trigger-width="matchTriggerWidth"
    :block="block"
    :inherit-layout="inheritLayout"
    :mobile-centered="false"
    :close-on-outside-click="closeOnOutsideClick"
    :close-on-escape="closeOnEscape"
    :outside-click-ignore-selector="outsideClickIgnoreSelector"
    @update:open="onOpenChange"
  >
    <template #trigger="slotProps">
      <slot
        name="trigger"
        v-bind="slotProps"
      />
    </template>
    <template #content="{ close }">
      <div
        class="ui-dropdown-menu p-3"
        :class="hasDescribedItems ? 'ui-dropdown-menu--described' : ''"
        role="menu"
        @click.stop
      >
        <slot
          name="before"
          :close="close"
        />
        <template v-if="$slots.menu">
          <slot
            name="menu"
            :close="close"
          />
        </template>
        <template v-else>
          <template
            v-for="(it, idx) in items"
            :key="idx"
          >
            <Divider
              v-if="it.divider"
              spacing="sm"
            />
            <span
              v-else-if="it.heading"
              class="ui-dropdown-heading"
              role="presentation"
            >{{ it.heading }}</span>
            <ui-button
              v-else
              variant="ghost"
              :color="itemColor(it)"
              :rounded="!it.description"
              fulled
              text-align="left"
              role="menuitem"
              :prefix-icon="it.description ? null : (it.icon || null)"
              :suffix-icon="itemSuffixIcon(it)"
              :disabled="it.disabled"
              :wrap="Boolean(it.description)"
              @click.stop="onItem(it, close)"
            >
              <span
                v-if="it.description"
                class="ui-dropdown-item-copy"
              >
                <span
                  v-if="it.icon"
                  class="ui-dropdown-item-icon"
                  aria-hidden="true"
                >
                  <ui-icon
                    :name="it.icon"
                    size="sm"
                  />
                </span>
                <span class="ui-dropdown-item-label">{{ it.label }}</span>
                <span class="ui-dropdown-item-description">{{ it.description }}</span>
              </span>
              <template v-else>{{ it.label }}</template>
            </ui-button>
          </template>
        </template>
      </div>
    </template>
  </ui-popover>
</template>

<script>
import Divider from './Divider.vue'

const PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'bottom',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
  'top-start',
  'top-end',
]

export default {
  name: 'Dropdown',
  components: { Divider },
  inheritAttrs: false,
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir */
    open: {
      type: Boolean,
      default: undefined,
    },
    placement: {
      type: String,
      default: 'bottom-start',
      validator: (v) => PLACEMENTS.includes(v),
    },
    matchTriggerWidth: {
      type: Boolean,
      default: false,
    },
    /** Tetikleyici tam genişlik */
    block: {
      type: Boolean,
      default: false,
    },
    /** Flex satırında tetikleyicinin doğrudan katılımı (`ui-tab-list` içi menü sekmesi). */
    inheritLayout: {
      type: Boolean,
      default: false,
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    outsideClickIgnoreSelector: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:open', 'select'],
  data() {
    return {
      internalOpen: false,
    }
  },
  computed: {
    isOpen: {
      get() {
        return this.open !== undefined ? this.open : this.internalOpen
      },
      set(value) {
        if (this.open !== undefined) {
          this.$emit('update:open', value)
        } else {
          this.internalOpen = value
        }
      },
    },
    hasDescribedItems() {
      return Boolean(this.$slots.before) || this.items.some((it) => it && !it.divider && it.description)
    },
  },
  methods: {
    onOpenChange(value) {
      this.isOpen = value
    },
    /** `color`, veya `variant: 'destructive'` → danger (sil / yıkıcı eylem). */
    itemColor(it) {
      if (it?.color) return it.color
      if (it?.selected) return 'primary'
      if (it?.variant === 'destructive' || it?.destructive) return 'danger'
      return 'secondary'
    },
    itemSuffixIcon(it) {
      if (it?.suffixIcon || it?.suffix_icon) return it.suffixIcon || it.suffix_icon
      if (it?.selected) return 'check'
      return null
    },
    onItem(it, close) {
      if (it.disabled) return
      this.$emit('select', it)
      if (!it.keepOpen && !it.keep_open) close()
    },
  },
}
</script>
