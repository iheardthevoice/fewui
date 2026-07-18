<template>
  <div
    :class="[
      'ui-field-action',
      hasValue ? 'ui-field-action--filled' : '',
      iconOnly ? 'ui-field-action--icon' : '',
      $attrs.class,
    ]"
  >
    <ui-popover
      v-if="isPopover"
      v-model:open="resolvedOpen"
      :placement="placement"
      :width="popoverWidth"
      :disabled="disabled"
      :mobile-centered="mobileCentered"
    >
      <template #trigger="{ open, toggle }">
        <slot
          name="trigger"
          :open="open"
          :toggle="toggle"
          :close="close"
          :label="triggerLabel"
          :has-value="hasValue"
        >
          <ui-button
            v-if="iconOnly"
            type="button"
            :variant="triggerVariant"
            :color="triggerColor"
            :size="size"
            rounded
            cubed
            :prefix-icon="prefixIcon"
            :disabled="disabled"
            :aria-expanded="open ? 'true' : 'false'"
            :aria-haspopup="true"
            :aria-label="triggerAriaLabel"
            @click="onTriggerClick($event, toggle)"
          />
          <ui-button
            v-else
            type="button"
            :variant="triggerVariant"
            :color="triggerColor"
            :size="size"
            rounded
            :prefix-icon="prefixIcon"
            :suffix-icon="suffixIcon"
            :disabled="disabled"
            :aria-expanded="open ? 'true' : 'false'"
            :aria-haspopup="true"
            :aria-label="triggerAriaLabel"
            @click="onTriggerClick($event, toggle)"
          >
            {{ triggerLabel }}
          </ui-button>
        </slot>
      </template>
      <template
        v-if="showPopoverHeader"
        #header="{ close: closePanel }"
      >
        <slot
          name="header"
          :close="closePanel"
        >
          <div class="ui-field-action-header">
            <div class="ui-field-action-header__text">
              <p
                v-if="title"
                class="ui-field-action-header__title"
              >
                {{ title }}
              </p>
              <p
                v-if="description"
                class="ui-field-action-header__description"
              >
                {{ description }}
              </p>
            </div>
            <ui-button
              v-if="clearable && hasValue"
              type="button"
              variant="ghost"
              color="secondary"
              size="sm"
              :aria-label="resolvedClearLabel"
              @click="onClear(closePanel)"
            >
              {{ resolvedClearLabel }}
            </ui-button>
          </div>
        </slot>
      </template>
      <template #content="{ close: closePanel }">
        <div class="ui-field-action-body">
          <slot
            :close="closePanel"
            :open="resolvedOpen"
          />
        </div>
      </template>
      <template
        v-if="$slots.footer"
        #footer="{ close: closePanel }"
      >
        <slot
          name="footer"
          :close="closePanel"
        />
      </template>
    </ui-popover>

    <template v-else>
      <slot
        name="trigger"
        :open="resolvedOpen"
        :toggle="toggle"
        :close="close"
        :label="triggerLabel"
        :has-value="hasValue"
      >
        <ui-button
          v-if="iconOnly"
          type="button"
          :variant="triggerVariant"
          :color="triggerColor"
          :size="size"
          rounded
          cubed
          :prefix-icon="prefixIcon"
          :disabled="disabled"
          :aria-expanded="resolvedOpen ? 'true' : 'false'"
          :aria-haspopup="true"
          :aria-label="triggerAriaLabel"
          @click="onTriggerClick($event, toggle)"
        />
        <ui-button
          v-else
          type="button"
          :variant="triggerVariant"
          :color="triggerColor"
          :size="size"
          rounded
          :prefix-icon="prefixIcon"
          :suffix-icon="suffixIcon"
          :disabled="disabled"
          :aria-expanded="resolvedOpen ? 'true' : 'false'"
          :aria-haspopup="true"
          :aria-label="triggerAriaLabel"
          @click="onTriggerClick($event, toggle)"
        >
          {{ triggerLabel }}
        </ui-button>
      </slot>

      <ui-dialog
        v-model:open="resolvedOpen"
        :title="title"
        :description="description"
        :icon="dialogIcon"
        :max-width="maxWidth"
        :close-on-backdrop="closeOnBackdrop"
        :close-on-escape="closeOnEscape"
      >
        <div class="ui-field-action-body">
          <slot
            :close="close"
            :open="resolvedOpen"
          />
        </div>
        <template
          v-if="showDialogFooter"
          #footer
        >
          <slot
            name="footer"
            :close="close"
          >
            <div class="ui-field-action-footer">
              <ui-button
                v-if="clearable && hasValue"
                type="button"
                variant="ghost"
                color="secondary"
                @click="onClear(close)"
              >
                {{ resolvedClearLabel }}
              </ui-button>
              <ui-button
                type="button"
                variant="solid"
                color="primary"
                @click="close"
              >
                {{ resolvedDoneLabel }}
              </ui-button>
            </div>
          </slot>
        </template>
      </ui-dialog>
    </template>
  </div>
</template>

<script>
import { resolveUiText } from '../utils/resolve-ui-text.js'

const MODES = ['popover', 'dialog']
const SIZES = ['sm', 'md', 'lg']
const PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'bottom',
  'top-start',
  'top-end',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
]

export default {
  name: 'FieldAction',
  inheritAttrs: false,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: undefined,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** Boş değerde tetikleyici metni (örn. “Tarih ekle”). */
    actionName: {
      type: String,
      default: '',
    },
    /** `popover` | `dialog` */
    mode: {
      type: String,
      default: 'popover',
      validator: (v) => MODES.includes(v),
    },
    /** Seçili değerin görünen metni; doluysa tetikleyicide `actionName` yerine gösterilir. */
    value: {
      type: [String, Number],
      default: '',
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    /** Yalnız ikon tetikleyici (kübik düğme). */
    iconOnly: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'sm',
      validator: (v) => SIZES.includes(v),
    },
    placement: {
      type: String,
      default: 'bottom-start',
      validator: (v) => PLACEMENTS.includes(v),
    },
    popoverWidth: {
      type: [String, Number],
      default: undefined,
    },
    mobileCentered: {
      type: Boolean,
      default: true,
    },
    maxWidth: {
      type: String,
      default: 'sm',
    },
    dialogIcon: {
      type: String,
      default: null,
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    clearLabel: {
      type: String,
      default: null,
    },
    doneLabel: {
      type: String,
      default: null,
    },
    /** Dialog modunda alt çubuğu göster (varsayılan: true). */
    showFooter: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:open', 'clear'],
  data() {
    return {
      uncontrolledOpen: false,
    }
  },
  computed: {
    isPopover() {
      return this.mode === 'popover'
    },
    isControlled() {
      return this.open !== undefined
    },
    resolvedOpen: {
      get() {
        return this.isControlled ? Boolean(this.open) : this.uncontrolledOpen
      },
      set(value) {
        const next = Boolean(value)
        if (!this.isControlled) this.uncontrolledOpen = next
        this.$emit('update:open', next)
      },
    },
    hasValue() {
      if (this.value == null) return false
      return String(this.value).trim() !== ''
    },
    triggerLabel() {
      if (this.hasValue) return String(this.value)
      return this.actionName || this.title || ''
    },
    triggerAriaLabel() {
      if (this.title) return this.title
      return this.triggerLabel || this.actionName || 'Field action'
    },
    triggerVariant() {
      return this.hasValue || this.resolvedOpen ? 'soft' : 'solid'
    },
    triggerColor() {
      if (this.hasValue || this.resolvedOpen) return 'primary'
      return 'secondary'
    },
    showPopoverHeader() {
      return Boolean(this.$slots.header || this.title || this.description || (this.clearable && this.hasValue))
    },
    showDialogFooter() {
      return this.showFooter || Boolean(this.$slots.footer) || (this.clearable && this.hasValue)
    },
    resolvedClearLabel() {
      if (this.clearLabel != null && this.clearLabel !== '') return this.clearLabel
      return resolveUiText(this, 'ui.fieldAction.clear', 'Clear')
    },
    resolvedDoneLabel() {
      if (this.doneLabel != null && this.doneLabel !== '') return this.doneLabel
      return resolveUiText(this, 'ui.fieldAction.done', 'Done')
    },
  },
  methods: {
    toggle() {
      if (this.disabled) return
      this.resolvedOpen = !this.resolvedOpen
    },
    close() {
      this.resolvedOpen = false
    },
    onTriggerClick(_event, toggleFn) {
      if (typeof toggleFn === 'function') toggleFn()
      else this.toggle()
    },
    onClear(closeFn) {
      this.$emit('clear')
      if (typeof closeFn === 'function') closeFn()
    },
  },
}
</script>
