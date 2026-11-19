import { reactive } from 'vue'
import { uiFeedback } from './utils/feedback.js'

export const confirmState = reactive({
  open: false,
  title: '',
  description: '',
  /** Boşsa i18n `ui.confirm.ok` */
  confirmLabel: '',
  /** Boşsa i18n `ui.confirm.cancel` */
  cancelLabel: '',
  /** Onay düğmesi tonu (ör. `'danger'` silme) */
  color: 'primary',
  /** @type {((value: boolean) => void) | null} */
  _resolve: null,
})

/** Ekrandaki `<ui-confirm-dialog />` sayısı — onay katmanı yoksa çağıranlar soru sormadan ilerler. */
let confirmHosts = 0

/** @param {1 | -1} delta */
export function trackConfirmHost(delta) {
  confirmHosts = Math.max(0, confirmHosts + delta)
}

export function hasConfirmHost() {
  return confirmHosts > 0
}

/**
 * Onay diyaloğu gösterir; `ConfirmDialog` kökte bir kez (`<ui-confirm-dialog />`) olmalıdır.
 * @param {{ title?: string, description?: string, confirmLabel?: string, cancelLabel?: string, color?: 'primary'|'danger'|'warning' }} options
 * @returns {Promise<boolean>}
 */
export function requestConfirm(options = {}) {
  // Geri alınamaz işlem onayı (silme, değişiklikleri atma): dikkat çeken kısa titreşim.
  if (options.color === 'danger') uiFeedback('warning')
  return new Promise((resolve) => {
    confirmState.title = options.title ?? ''
    confirmState.description = options.description ?? ''
    confirmState.confirmLabel = options.confirmLabel ?? ''
    confirmState.cancelLabel = options.cancelLabel ?? ''
    confirmState.color = options.color || 'primary'
    confirmState._resolve = resolve
    confirmState.open = true
  })
}

/**
 * @param {boolean} value
 */
export function answerConfirm(value) {
  const fn = confirmState._resolve
  confirmState.open = false
  confirmState._resolve = null
  if (fn) fn(!!value)
}
