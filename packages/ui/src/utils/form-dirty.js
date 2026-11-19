/**
 * Form "kirli" bildirimi. `ui-dialog` (ve `ui-form-row`) bir işaretleme fonksiyonu sağlar;
 * fewui form kontrolleri değeri KULLANICI değiştirdiğinde `notifyFormDirty()` çağırır.
 * provide/inject bileşen ağacını izlediği için teleport edilen popover içinden de çalışır.
 *
 * Alt ağacı kapsam dışı bırakmak (arama / filtre alanları) için sarmalayıcı anahtarı `null` ile gölgeler:
 *   provide() { return { [UI_FORM_DIRTY_KEY]: null } }
 * Tek bir kontrol için: `<ui-input data-form-untracked … />`.
 */
export const UI_FORM_DIRTY_KEY = Symbol.for('fewui.form-dirty')

export const UI_FORM_UNTRACKED_ATTR = 'data-form-untracked'

/** Options API mixin — `this.notifyFormDirty()`. */
export const formDirtyMixin = {
  inject: {
    uiFormDirty: { from: UI_FORM_DIRTY_KEY, default: null },
  },
  methods: {
    /** Değer kullanıcı etkileşimiyle değiştiğinde çağrılır; programatik prop değişiminde çağrılmaz. */
    notifyFormDirty() {
      if (typeof this.uiFormDirty !== 'function') return
      const untracked = this.$attrs?.[UI_FORM_UNTRACKED_ATTR]
      if (untracked !== undefined && untracked !== false) return
      this.uiFormDirty()
    },
  },
}
