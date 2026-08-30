import { resolveThemeIconType } from './resolve-theme-default.js'

export const UI_ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

/** Bileşen `iconType` prop tanımı — tema `defaults.iconType` ile birleşir. */
export const iconTypeProp = {
  type: String,
  default: undefined,
  validator: (value) => value == null || UI_ICON_TYPES.includes(value),
}

/**
 * Options API — `resolvedIconType` computed ekler.
 * @param {string} [propKey='iconType'] — prop adı (`Icon` bileşeninde `type`).
 * @returns {Record<string, unknown>}
 */
export function themeIconTypeComputed(propKey = 'iconType') {
  return {
    resolvedIconType() {
      return resolveThemeIconType(this[propKey])
    },
  }
}
