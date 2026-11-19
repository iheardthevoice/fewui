/**
 * Dokunsal geri bildirim kancası. fewui yalnız *anı* bildirir (uzun basış, başarı, uyarı, hata);
 * titreşimi uygulama üretir (Capacitor Haptics, `navigator.vibrate` …). Kayıtlı işleyici yoksa no-op.
 *
 * @typedef {'impact-light' | 'impact-medium' | 'impact-heavy' | 'selection' | 'success' | 'warning' | 'error'} UiFeedbackKind
 */

/** @type {((kind: UiFeedbackKind) => void) | null} */
let handler = null

/**
 * @param {((kind: UiFeedbackKind) => void) | null} fn
 */
export function setUiFeedbackHandler(fn) {
  handler = typeof fn === 'function' ? fn : null
}

/**
 * @param {UiFeedbackKind} kind
 */
export function uiFeedback(kind) {
  if (!handler) return
  try {
    handler(kind)
  } catch {
    // Geri bildirim hiçbir zaman akışı bozmamalı.
  }
}
