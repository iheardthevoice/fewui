import { pushToast, dismissToast, clearToasts } from '../toast-queue.js'

function normalizeToastPayload(opts) {
  if (opts == null) return {}
  if (typeof opts === 'string') return { title: opts }
  return typeof opts === 'object' ? opts : {}
}

/**
 * Toast kuyruğu — `Toast` bileşeni (`<ui-toast />`) uygulama kökünde bir kez render edilmelidir.
 * @returns {{
 *   push: typeof pushToast,
 *   dismiss: typeof dismissToast,
 *   clear: typeof clearToasts,
 *   info: (opts: string | Record<string, unknown>) => number,
 *   success: (opts: string | Record<string, unknown>) => number,
 *   warning: (opts: string | Record<string, unknown>) => number,
 *   danger: (opts: string | Record<string, unknown>) => number,
 * }}
 */
export function useToast() {
  return {
    push: pushToast,
    dismiss: dismissToast,
    clear: clearToasts,
    info: (opts) => pushToast({ ...normalizeToastPayload(opts), color: 'info' }),
    success: (opts) => pushToast({ ...normalizeToastPayload(opts), color: 'success' }),
    warning: (opts) => pushToast({ ...normalizeToastPayload(opts), color: 'warning' }),
    danger: (opts) => pushToast({ ...normalizeToastPayload(opts), color: 'danger' }),
  }
}
