let globalUiIdCounter = 0
/** @type {Array<() => void>} */
const factoryResets = []

/**
 * Benzersiz DOM id üretir (`ui-input-1`, `ui-dialog-2`, …).
 * @param {string} prefix
 * @returns {string}
 */
export function createUiId(prefix) {
  globalUiIdCounter += 1
  return `${prefix}-${globalUiIdCounter}`
}

/**
 * Modül başına sayaç — bileşen dosyasında `let n = 0` yerine.
 * @param {string} prefix
 * @returns {() => string}
 */
export function createUiIdFactory(prefix) {
  let counter = 0
  const next = () => {
    counter += 1
    return `${prefix}-${counter}`
  }
  factoryResets.push(() => {
    counter = 0
  })
  return next
}

/**
 * SSR / hydrate öncesi sayaçları sıfırla.
 * Cloudflare Worker gibi kalıcı isolate’larda sayaç kayması hydration mismatch üretir.
 */
export function resetUiIds() {
  globalUiIdCounter = 0
  for (const reset of factoryResets) {
    reset()
  }
}
