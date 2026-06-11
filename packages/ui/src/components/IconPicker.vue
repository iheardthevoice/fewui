<template>
  <div :class="rootClass">
    <ui-popover
      v-model:open="popoverOpen"
      placement="bottom-start"
      :width="panelWidth"
      :disabled="disabled"
    >
      <template #trigger="{ open, toggle }">
        <button
          type="button"
          class="ui-select-field"
          :disabled="disabled"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-haspopup="true"
          @click="toggle"
        >
          <span
            class="ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground"
            aria-hidden="true"
          >
            <ui-icon
              :name="localIcon || 'grid'"
              :type="iconType"
              size="xs"
            />
          </span>
          <span
            class="ui-select-value"
            :class="{ 'ui-select-value--placeholder': !localIcon }"
          >
            {{ localIcon || triggerLabel }}
          </span>
          <span class="ui-select-field-suffix">
            <span
              class="ui-select-chevron"
              aria-hidden="true"
            >
              <ui-icon
                name="chevron-down"
                size="xs"
              />
            </span>
          </span>
        </button>
      </template>
      <template #content>
        <div class="ui-icon-picker-panel">
          <div class="ui-icon-picker-panel__header">
            <span class="ui-icon-picker-panel__title">
              {{ popoverTitleLabel }}
            </span>
            <ui-button
              v-if="localIcon"
              type="button"
              variant="ghost"
              color="secondary"
              size="sm"
              prefix-icon="eraser"
              @click.stop="clearIcon"
            >
              {{ clearLabelText }}
            </ui-button>
          </div>

          <div class="ui-icon-picker-panel__search">
            <ui-input
              v-model="searchQuery"
              block
              prefix-icon="magnifying-glass"
              :placeholder="searchPlaceholderLabel"
              autocomplete="off"
            />
          </div>

          <div
            v-if="!filteredIcons.length"
            class="ui-icon-picker-panel__empty"
          >
            {{ resolvedNoResultsLabel }}
          </div>

          <div
            v-else
            class="ui-icon-picker-grid"
          >
            <button
              v-for="iconName in filteredIcons"
              :key="iconName"
              type="button"
              class="ui-icon-picker-cell"
              :class="{ 'ui-icon-picker-cell--selected': localIcon === iconName }"
              :title="iconName"
              @click="selectIcon(iconName)"
            >
              <ui-icon
                :name="iconName"
                :type="iconType"
                size="sm"
              />
            </button>
          </div>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

export default {
  name: 'IconPicker',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    icons: {
      type: Array,
      default: () => [],
    },
    iconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    triggerPlaceholder: {
      type: String,
      default: '',
    },
    popoverTitle: {
      type: String,
      default: '',
    },
    clearLabel: {
      type: String,
      default: '',
    },
    searchPlaceholder: {
      type: String,
      default: '',
    },
    noResultsLabel: {
      type: String,
      default: '',
    },
    maxResults: {
      type: Number,
      default: 180,
    },
    panelWidth: {
      type: String,
      default: '22rem',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      popoverOpen: false,
      searchQuery: '',
    }
  },
  computed: {
    rootClass() {
      return cn(
        'ui-icon-picker ui-icon-picker--fulled w-full min-w-0',
        this.disabled && 'pointer-events-none opacity-50',
        this.$attrs.class,
      )
    },
    localIcon: {
      get() {
        return this.modelValue || ''
      },
      set(val) {
        this.$emit('update:modelValue', val || null)
      },
    },
    triggerLabel() {
      return this.triggerPlaceholder || this.$t('ui.iconPicker.triggerPlaceholder')
    },
    popoverTitleLabel() {
      return this.popoverTitle || this.$t('ui.iconPicker.popoverTitle')
    },
    clearLabelText() {
      return this.clearLabel || this.$t('ui.iconPicker.clear')
    },
    searchPlaceholderLabel() {
      return this.searchPlaceholder || this.$t('ui.iconPicker.searchPlaceholder')
    },
    resolvedNoResultsLabel() {
      return this.noResultsLabel || this.$t('ui.iconPicker.noResults')
    },
    filteredIcons() {
      const query = String(this.searchQuery || '').trim().toLowerCase()
      const source = Array.isArray(this.icons) ? this.icons : []
      let rows = source
      if (query) {
        rows = source.filter((name) => String(name).toLowerCase().includes(query))
      }
      return rows.slice(0, this.maxResults)
    },
  },
  watch: {
    popoverOpen(open) {
      if (!open) this.searchQuery = ''
    },
  },
  methods: {
    selectIcon(iconName) {
      this.localIcon = iconName
      this.popoverOpen = false
    },
    clearIcon() {
      this.localIcon = ''
      this.$emit('update:modelValue', null)
      this.popoverOpen = false
    },
  },
}
</script>
