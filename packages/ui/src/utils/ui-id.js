import { getCurrentInstance, useId } from 'vue'

let globalUiIdCounter = 0
/** @type {Array<() => void>} */
const factoryResets = []

/**
 * Bileşen kurulumu sırasında (`data()` / `setup()`) Vue'nun `useId()` değeri kullanılır: sunucu ve
 * istemcide aynı bileşen ağacı aynı kimliği üretir, modül sayaçları gibi istekler arasında kaymaz.
 * Bileşen dışında (yardımcı, test) çağrılırsa `null` döner ve sayaç devreye girer.
 * @returns {string | null}
 */
function componentScopedId() {
  return getCurrentInstance() ? useId() : null
}

/**
 * Benzersiz DOM id üretir (`ui-input-v-0-1`; bileşen dışında `ui-input-1`).
 * @param {string} prefix
 * @returns {string}
 */
export function createUiId(prefix) {
  const scoped = componentScopedId()
  if (scoped) return `${prefix}-${scoped}`
  globalUiIdCounter += 1
  return `${prefix}-${globalUiIdCounter}`
}

/**
 * Bileşen dosyası başına kimlik üreteci — `data()` içinde çağrılır.
 * @param {string} prefix
 * @returns {() => string}
 */
export function createUiIdFactory(prefix) {
  let counter = 0
  const next = () => {
    const scoped = componentScopedId()
    if (scoped) return `${prefix}-${scoped}`
    counter += 1
    return `${prefix}-${counter}`
  }
  factoryResets.push(() => {
    counter = 0
  })
  return next
}

/**
 * SSR / hydrate öncesi sayaçları sıfırla. Bileşen kimlikleri artık `useId()` ile üretildiği için
 * yalnız bileşen dışı çağrıları etkiler; eski tüketiciler için durur.
 * Cloudflare Worker gibi kalıcı isolate’larda sayaç kayması hydration mismatch üretir.
 */
export function resetUiIds() {
  globalUiIdCounter = 0
  for (const reset of factoryResets) {
    reset()
  }
}
