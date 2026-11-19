import { reactive } from 'vue'

/**
 * Alan hatası bağlamı. Bir form kabı (dialog, sayfa) bağlamı sağlar; `field` verilen her
 * `ui-form-row` kendi mesajını buradan okur ve kendini kaydeder. Böylece kap, görünür bir
 * satıra düşmeyen mesajları (`unmapped`) özet olarak gösterebilir.
 *
 *   provide() { return { [UI_FORM_ERRORS_KEY]: this.formErrors } }
 */
export const UI_FORM_ERRORS_KEY = Symbol.for('fewui.form-errors')

/** @param {unknown} value @returns {string} */
export function formErrorText(value) {
  if (Array.isArray(value)) {
    return value.map((v) => (v == null ? '' : String(v).trim())).filter(Boolean).join(' ')
  }
  return value == null ? '' : String(value).trim()
}

/**
 * @returns {{
 *   errors: Record<string, string | string[]>,
 *   mounted: Record<string, number>,
 *   set(map: Record<string, string | string[]> | null | undefined): void,
 *   clear(): void,
 *   clearField(field: string): void,
 *   registerField(field: string): void,
 *   unregisterField(field: string): void,
 *   has(field: string): boolean,
 *   readonly fields: string[],
 *   readonly firstField: string | null,
 *   readonly unmapped: string[],
 *   readonly hasErrors: boolean,
 * }}
 */
export function createFormErrorsContext() {
  const ctx = reactive({
    /** `{ [field]: mesaj | mesaj[] }` */
    errors: {},
    /** Ekranda `field` ile bağlı satır sayısı. */
    mounted: {},
    set(map) {
      for (const key of Object.keys(ctx.errors)) delete ctx.errors[key]
      if (!map || typeof map !== 'object') return
      for (const [key, value] of Object.entries(map)) {
        if (key && formErrorText(value)) ctx.errors[key] = value
      }
    },
    clear() {
      ctx.set(null)
    },
    clearField(field) {
      if (field in ctx.errors) delete ctx.errors[field]
    },
    registerField(field) {
      if (!field) return
      ctx.mounted[field] = (ctx.mounted[field] || 0) + 1
    },
    unregisterField(field) {
      if (!field || !ctx.mounted[field]) return
      if (ctx.mounted[field] <= 1) delete ctx.mounted[field]
      else ctx.mounted[field] -= 1
    },
    has(field) {
      return Boolean(formErrorText(ctx.errors[field]))
    },
    get fields() {
      return Object.keys(ctx.errors)
    },
    get firstField() {
      return Object.keys(ctx.errors)[0] ?? null
    },
    /** Görünür bir satıra bağlanamayan mesajlar (başka adımda ya da formda karşılığı yok). */
    get unmapped() {
      const out = []
      for (const [field, value] of Object.entries(ctx.errors)) {
        if (ctx.mounted[field]) continue
        const text = formErrorText(value)
        if (text && !out.includes(text)) out.push(text)
      }
      return out
    },
    get hasErrors() {
      return Object.keys(ctx.errors).length > 0
    },
  })
  return ctx
}
