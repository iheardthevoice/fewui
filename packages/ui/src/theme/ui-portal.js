export const UI_PORTAL_KEY = Symbol('uiPortal')

/**
 * Overlay bileşenleri (`Teleport`) için hedef: en yakın `ui-theme-provider` portalı, yoksa `body`.
 * Böylece kapsamlı temadaki dialog / popover aynı token'larla çizilir.
 */
export const uiPortalMixin = {
  inject: {
    uiPortalTarget: {
      from: UI_PORTAL_KEY,
      default: null,
    },
  },
  computed: {
    portalTarget() {
      return (typeof this.uiPortalTarget === 'function' && this.uiPortalTarget()) || 'body'
    },
  },
}
