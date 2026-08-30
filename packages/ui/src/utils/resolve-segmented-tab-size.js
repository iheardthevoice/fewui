import { resolveThemeControlSize } from '../theme/resolve-theme-default.js'

/** @type {ReadonlyArray<'sm'|'md'|'lg'>} */
const SIZE_ORDER = ['sm', 'md', 'lg']

/**
 * @param {'sm'|'md'|'lg'} size
 * @returns {'sm'|'md'|'lg'}
 */
function bumpControlSize(size) {
  const index = SIZE_ORDER.indexOf(size)
  if (index < 0) return 'md'
  return SIZE_ORDER[Math.min(index + 1, SIZE_ORDER.length - 1)]
}

/**
 * Segmented tab `size` çözümlemesi.
 * - Varsayılan: button ölçeğinden bir kademe büyük (`--ui-tab-h-*`).
 * - `inlineControls`: button ile aynı ölçek (`--ui-control-h-*`).
 * - `nativeChrome`: footer dock — en az `lg` (`--ui-tab-h-lg`).
 *
 * @param {'sm'|'md'|'lg'|undefined|null} propSize
 * @param {{ inlineControls?: boolean, nativeChrome?: boolean }} [options]
 * @returns {'sm'|'md'|'lg'}
 */
export function resolveSegmentedTabSize(propSize, { inlineControls = false, nativeChrome = false } = {}) {
  const raw = resolveThemeControlSize(propSize, { key: 'controlSize', defaultSize: 'md' })
  if (inlineControls) return raw
  if (nativeChrome) return 'lg'
  return bumpControlSize(raw)
}
