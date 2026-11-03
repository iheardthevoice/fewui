/**
 * FormRow → içerideki kontrol bağlamı. Kontrol (Input, Select …) `useFormField` ile id,
 * `aria-describedby` ve `aria-invalid` değerlerini kendiliğinden alır; `v-slot="{ controlId }"`
 * ile elle bağlama zorunluluğu kalkar (unutulunca etiket bağlanmıyordu).
 * Bir satırda birden çok kontrol olabilir (Telefon: Input + ülke Select) — bağlamı ilk kaydolan
 * (dış) kontrol sahiplenir, diğerleri etkilenmez.
 */
export const UI_FORM_FIELD_KEY = Symbol('ui-form-field')

/** Options API mixin — `formFieldId`, `formFieldDescribedBy(extra)`, `formFieldInvalid`. */
export const formFieldMixin = {
  inject: {
    uiFormField: { from: UI_FORM_FIELD_KEY, default: null },
  },
  created() {
    if (this.uiFormField && this.uiFormField.ownerUid == null) {
      this.uiFormField.ownerUid = this.$.uid
    }
  },
  beforeUnmount() {
    if (this.uiFormField && this.uiFormField.ownerUid === this.$.uid) {
      this.uiFormField.ownerUid = null
    }
  },
  computed: {
    ownsFormField() {
      return Boolean(this.uiFormField) && this.uiFormField.ownerUid === this.$.uid
    },
    formFieldId() {
      return this.ownsFormField ? this.uiFormField.id || undefined : undefined
    },
    formFieldInvalid() {
      return this.ownsFormField && this.uiFormField.invalid ? 'true' : undefined
    },
  },
  methods: {
    /** Dışarıdan verilen `aria-describedby` ile satırın açıklama/hata id'lerini birleştirir. */
    formFieldDescribedBy(extra) {
      const ids = [extra, this.ownsFormField ? this.uiFormField.describedBy : undefined]
        .filter(Boolean)
        .join(' ')
        .split(/\s+/)
        .filter(Boolean)
      return ids.length ? [...new Set(ids)].join(' ') : undefined
    },
  },
}
