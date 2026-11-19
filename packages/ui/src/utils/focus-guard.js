/**
 * Modal açıkken odağın arkadaki sayfaya kaçmasını engelleyen karar.
 *
 * `trapTabKey` yalnız odak panelin içindeyken çalışır; fare, ekran okuyucu veya programatik
 * `focus()` ile odak arkaya geçerse tuzak devre dışı kalırdı. Bu denetim `focusin` üzerinde
 * çalışır ve yalnız *arkada kaldığı kesin* olan hedefleri geri çağırır:
 *
 * - başka (alttaki) bir fewui dialog / sheet katmanı,
 * - Vue uygulama kökü (`[data-v-app]`) içindeki sayfa içeriği.
 *
 * Dokunulmayanlar: modalın kendi katmanı, ondan açılan yüzen katmanlar (popover, select,
 * tarih seçici), toast alanı, ürün turu, fewui dışı modal (`aria-modal`), body'ye doğrudan
 * eklenen üçüncü taraf bileşenler (adres önerisi, ödeme iframe'i) ve
 * `data-ui-focus-allow` taşıyan öğeler.
 */
const ALLOWED = '[data-ui-popover-layer], .ui-toast-host, .ui-guidance-tour, [data-ui-focus-allow]'
const MODAL_ROOTS = '.ui-dialog-root, .ui-sheet-root'

/**
 * @param {EventTarget | null} target `focusin` hedefi
 * @param {Element | null | undefined} layerEl En üstteki modalın kök katmanı
 * @returns {boolean} odak modal paneline geri çağrılmalı mı
 */
export function shouldContainFocus(target, layerEl) {
  if (!layerEl || !target || typeof target.closest !== 'function') return false
  if (layerEl.contains(target)) return false
  if (target.closest(ALLOWED)) return false
  if (target.closest(MODAL_ROOTS)) return true
  if (target.closest('[aria-modal="true"]')) return false
  return Boolean(target.closest('[data-v-app]'))
}
