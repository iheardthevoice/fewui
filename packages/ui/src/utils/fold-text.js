/**
 * Metin karşılaştırması için katlama: küçük harf + Türkçe İ/ı ayrımı yok sayılır
 * ("İptal" ve "info" `i` ile bulunur). Yazarak arama ve komut paleti aynı kuralı kullanır.
 *
 * `diacritics: true` ile aksanlar da atılır ("çay" → "cay", "öğle" → "ogle"); serbest metin
 * aramasında klavye düzeninden bağımsız eşleşme sağlar.
 * @param {unknown} text
 * @param {{ diacritics?: boolean }} [options]
 * @returns {string}
 */
export function foldText(text, options = {}) {
  let out = String(text ?? '')
    .trim()
    .toLocaleLowerCase()
    .replace(/̇/g, '')
    .replace(/ı/g, 'i')
  if (options.diacritics) {
    out = out.normalize('NFD').replace(/[̀-ͯ]/g, '')
  }
  return out
}
