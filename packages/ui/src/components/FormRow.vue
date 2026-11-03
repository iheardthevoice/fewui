<template>
  <div
    class="ui-form-row"
    :class="rootLayoutClass"
    :data-primary-field="primary ? '' : undefined"
    v-bind="$attrs"
  >
    <div
      v-if="hasTextBlock"
      class="ui-form-row-text"
    >
      <div
        v-if="label || $slots.action"
        :class="labelLineClass"
      >
        <label
          v-if="label"
          class="ui-form-label min-w-0"
          :for="controlId"
        >
          {{ label }}
        </label>
        <div
          v-if="$slots.action"
          class="ui-form-row-action shrink-0"
        >
          <slot name="action" />
        </div>
      </div>
      <p
        v-if="description && descriptionWithLabel"
        :id="descriptionId"
        class="ui-form-row-description ui-text-default"
      >
        {{ description }}
      </p>
    </div>
    <div class="ui-form-row-control">
      <slot
        :control-id="controlId"
        :description-id="describedBy"
        :invalid="invalid"
      />
      <p
        v-if="description && !descriptionWithLabel"
        :id="descriptionId"
        class="ui-form-row-description ui-text-default"
      >
        {{ description }}
      </p>
      <p
        v-if="invalid"
        :id="errorId"
        class="ui-form-row-error"
      >
        <ui-icon
          name="circle-exclamation"
          size="xs"
          class="ui-form-row-error-icon"
          aria-hidden="true"
        />
        <span>{{ error }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { createUiIdFactory } from '../utils/ui-id.js'
import { UI_FORM_FIELD_KEY } from '../utils/form-field.js'

const nextFormRowId = createUiIdFactory('ui-form-control')

const DIRECTIONS = ['vertical', 'horizontal']
const VARIANTS = ['default', 'card']

export default {
  name: 'FormRow',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /**
     * `vertical`: etiket üstte, kontrol altta, açıklama kontrolün altında.
     * `horizontal`: etiket + açıklama solda, kontrol sağda (Preferences).
     */
    direction: {
      type: String,
      default: 'vertical',
      validator: (v) => DIRECTIONS.includes(v),
    },
    /**
     * `direction="horizontal"` iken dar viewport’ta dikey yığılır
     * (`max-width: 1023px` — segment `icon-only="mobile"` ile aynı kırılım).
     */
    stackOnMobile: {
      type: Boolean,
      default: false,
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: 'default',
      validator: (v) => VARIANTS.includes(v),
    },
    /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
    id: {
      type: String,
      default: undefined,
    },
    /**
     * Alan hatası (WCAG 3.3.1). Verilince kontrolün altında gösterilir; kontrol `aria-invalid`
     * ve `aria-describedby` ile otomatik bağlanır (FormRow içindeki ilk fewui kontrolü).
     */
    error: {
      type: String,
      default: '',
    },
    /** Dialog oluşturma formlarında ana alan — açılışta odak hedefi (kontrol boyutunu değiştirmez) */
    primary: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const fallbackId = nextFormRowId()
    const seq = fallbackId.slice('ui-form-control-'.length)
    return {
      fallbackId,
      fallbackDescId: `ui-form-desc-${seq}`,
      fallbackErrorId: `ui-form-error-${seq}`,
      /** İçerideki kontrolün okuduğu bağlam — id, açıklama/hata bağlantısı, geçersizlik. */
      fieldContext: reactive({ id: '', describedBy: undefined, invalid: false, ownerUid: null }),
    }
  },
  provide() {
    return { [UI_FORM_FIELD_KEY]: this.fieldContext }
  },
  watch: {
    controlId: { immediate: true, handler(v) { this.fieldContext.id = v } },
    describedBy: { immediate: true, handler(v) { this.fieldContext.describedBy = v } },
    invalid: { immediate: true, handler(v) { this.fieldContext.invalid = v } },
  },
  computed: {
    controlId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    descriptionId() {
      return this.description ? this.fallbackDescId : undefined
    },
    invalid() {
      return Boolean(this.error)
    },
    errorId() {
      return this.invalid ? this.fallbackErrorId : undefined
    },
    /** Kontrolün `aria-describedby` değeri: açıklama + hata. */
    describedBy() {
      return [this.descriptionId, this.errorId].filter(Boolean).join(' ') || undefined
    },
    /** Yatay / Preferences: açıklama etiketle solda. */
    descriptionWithLabel() {
      return this.direction === 'horizontal'
    },
    hasTextBlock() {
      return !!(
        this.label
        || this.$slots.action
        || (this.description && this.descriptionWithLabel)
      )
    },
    rootLayoutClass() {
      const stack =
        this.stackOnMobile && this.direction === 'horizontal'
          ? 'ui-form-row--stack-mobile'
          : ''
      if (this.variant === 'card') {
        const base =
          this.direction === 'vertical'
            ? 'ui-form-row--card ui-form-row--card-vertical'
            : 'ui-form-row--card ui-form-row--card-horizontal'
        return [base, stack].filter(Boolean).join(' ')
      }
      const base =
        this.direction === 'horizontal' ? 'ui-form-row--horizontal' : 'ui-form-row--vertical'
      return [base, stack].filter(Boolean).join(' ')
    },
    labelLineClass() {
      const base = 'ui-form-row-label-line'
      if (!this.label && this.$slots.action) {
        return `${base} ui-form-row-label-line--action-only`
      }
      return base
    },
  },
}
</script>
