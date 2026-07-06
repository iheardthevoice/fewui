import { isMobileViewport } from './viewport.js'

/**
 * Varsayılan `size` prop’u için viewport’a göre çözümleme.
 * Açıkça verilen boyutlar (`size !== defaultSize`) olduğu gibi kalır.
 *
 * - `defaultSize: 'md'` → mobil `lg`, masaüstü `md`
 * - `defaultSize: 'sm'` → masaüstü `lg`, mobil `sm`
 *
 * @param {'sm'|'md'|'lg'} size
 * @param {{ defaultSize?: 'sm'|'md'|'lg' }} [options]
 * @returns {'sm'|'md'|'lg'}
 */
export function resolveControlSize(size, { defaultSize = 'md' } = {}) {
  if (size !== defaultSize) {
    return size
  }

  const mobile = isMobileViewport()

  if (defaultSize === 'sm' && !mobile) {
    return 'lg'
  }

  if (defaultSize === 'md') {
    return mobile ? 'lg' : 'md'
  }

  return size
}
