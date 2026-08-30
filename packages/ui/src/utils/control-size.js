import { isMobileViewport, isNativeIos } from './viewport.js'

/** Dokunma birincil platform — dar viewport veya native iOS (iPad dahil). */
function isTouchPrimaryControlContext() {
  return isMobileViewport() || isNativeIos()
}

/**
 * Varsayılan `size` prop’u için viewport’a göre çözümleme.
 * Açıkça verilen boyutlar (`size !== defaultSize`) olduğu gibi kalır.
 *
 * - `defaultSize: 'md'` → mobil / native iOS `lg`, masaüstü web `md`
 * - `defaultSize: 'sm'` → masaüstü web `lg`, mobil / native iOS `sm`
 *
 * @param {'sm'|'md'|'lg'} size
 * @param {{ defaultSize?: 'sm'|'md'|'lg' }} [options]
 * @returns {'sm'|'md'|'lg'}
 */
export function resolveControlSize(size, { defaultSize = 'md' } = {}) {
  if (size !== defaultSize) {
    return size
  }

  const touchPrimary = isTouchPrimaryControlContext()

  if (defaultSize === 'sm' && !touchPrimary) {
    return 'lg'
  }

  if (defaultSize === 'md') {
    return touchPrimary ? 'lg' : 'md'
  }

  return size
}
