import { isNativeShell } from './viewport.js'

/**
 * Varsayılan `size` bir kademe büyütülsün mü — yalnız native kabuk (Capacitor iOS / Android).
 *
 * Web'de boyut sınıfı değişmez: dokunma ölçeği genişlikten değil giriş cihazından gelir ve tek
 * yerde, CSS'te tanımlıdır (`themes/_shared/global.css` → `@media (pointer: coarse)`:
 * sm 36 · md 44 · lg 48). Böylece yatay tablet (geniş + dokunmatik) 44px alır, dar bir masaüstü
 * penceresi (fare) 32px kalır. Native kabuklar kendi cihaz ölçülerini taşır
 * (`platform/ios.css`, `platform/android.css`) ve eskisi gibi `md` → `lg` çözülür.
 */
function isTouchPrimaryControlContext() {
  return isNativeShell()
}

/**
 * Varsayılan `size` prop'u için ortama göre çözümleme.
 * Açıkça verilen boyutlar (`size !== defaultSize`) olduğu gibi kalır.
 *
 * - `defaultSize: 'md'` → native kabuk `lg`, web (fare ve dokunmatik) `md`
 * - `defaultSize: 'sm'` → masaüstü web `lg`, native kabuk `sm`
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
