<template>
  <div
    :class="itemClass"
    :data-state="isOpen ? 'open' : 'closed'"
  >
    <component
      :is="headingTag"
      class="ui-accordion-header"
    >
      <button
        :id="triggerId"
        type="button"
        class="ui-accordion-trigger"
        :aria-expanded="isOpen ? 'true' : 'false'"
        :aria-controls="panelId"
        :aria-disabled="locked ? 'true' : undefined"
        :disabled="disabled"
        @click="toggle"
      >
        <span
          v-if="icon"
          class="ui-accordion-icon"
          aria-hidden="true"
        >
          <ui-icon
            :name="icon"
            size="sm"
          />
        </span>
        <span class="ui-accordion-text">
          <span class="ui-accordion-title">
            <slot name="title">{{ title }}</slot>
          </span>
          <span
            v-if="description"
            class="ui-accordion-description"
          >{{ description }}</span>
        </span>
        <span
          v-if="$slots.append"
          class="ui-accordion-append"
        >
          <slot name="append" />
        </span>
        <span
          class="ui-accordion-chevron"
          aria-hidden="true"
        >
          <ui-icon
            name="chevron-down"
            size="xs"
          />
        </span>
      </button>
    </component>
    <div
      :id="panelId"
      class="ui-collapse ui-accordion-panel"
      :class="isOpen ? 'ui-collapse--open' : ''"
      role="region"
      :aria-labelledby="triggerId"
    >
      <div class="ui-collapse-inner">
        <div class="ui-accordion-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUiIdFactory } from '../utils/ui-id.js'

const nextAccordionItemId = createUiIdFactory('ui-accordion-item')

export default {
  name: 'AccordionItem',
  inject: {
    uiAccordion: {
      default: null,
    },
  },
  props: {
    /** `ui-accordion` `modelValue` ile eşleşen kimlik. */
    value: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    /** Başlığın altında ikincil satır. */
    description: {
      type: String,
      default: '',
    },
    /** `ui-icon` `name` — başlığın ilk satırıyla hizalanır. */
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      uid: nextAccordionItemId(),
    }
  },
  computed: {
    triggerId() {
      return `${this.uid}-trigger`
    },
    panelId() {
      return `${this.uid}-panel`
    },
    headingTag() {
      return `h${this.uiAccordion?.headingLevel ?? 3}`
    },
    isOpen() {
      return this.uiAccordion ? this.uiAccordion.isOpen(this.value) : false
    },
    locked() {
      return this.uiAccordion ? this.uiAccordion.isLocked(this.value) : false
    },
    itemClass() {
      return [
        'ui-accordion-item',
        this.isOpen ? 'ui-accordion-item--open' : '',
        this.icon ? 'ui-accordion-item--with-icon' : '',
        this.disabled ? 'ui-accordion-item--disabled' : '',
      ]
    },
  },
  mounted() {
    if (!this.uiAccordion && typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn('[AccordionItem] Yalnızca <ui-accordion> içinde kullanılmalı.')
    }
  },
  methods: {
    toggle() {
      if (this.disabled || !this.uiAccordion) return
      this.uiAccordion.toggle(this.value)
    },
  },
}
</script>
