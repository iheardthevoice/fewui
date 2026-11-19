import { foldText as fold } from './fold-text.js'

const RESET_MS = 600

/** Yazarak arama için tuş mu (tek karakter, değiştirici tuş yok)? */
export function isTypeaheadKey(event) {
  return (
    typeof event.key === 'string'
    && event.key.length === 1
    && event.key !== ' '
    && !event.ctrlKey
    && !event.metaKey
    && !event.altKey
  )
}

/**
 * Menü / liste için yazarak arama (WAI-ARIA APG): basılan harflerle başlayan öğeyi bulur.
 * Tek harf tekrarlandıkça aynı harfle başlayan öğeler arasında döner.
 * @returns {(key: string, labels: string[], currentIndex: number) => number} eşleşen dizin ya da -1
 */
export function createTypeahead() {
  let buffer = ''
  let timer = null
  return (key, labels, currentIndex) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      buffer = ''
      timer = null
    }, RESET_MS)
    const char = fold(key)
    const repeating = buffer !== '' && [...buffer].every((c) => c === char)
    buffer += char
    const query = repeating ? char : buffer
    const n = labels.length
    if (!n) return -1
    // Yeni aramada ve harf tekrarında bir sonraki öğeden başla; devam eden yazımda yerinde kal.
    const start = buffer.length === 1 || repeating ? currentIndex + 1 : Math.max(currentIndex, 0)
    for (let i = 0; i < n; i += 1) {
      const idx = (((start + i) % n) + n) % n
      if (fold(labels[idx]).startsWith(query)) return idx
    }
    return -1
  }
}
