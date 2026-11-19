/**
 * Açık overlay katmanlarının tek kaydı.
 *
 * z-index yalnız açılış anında okunursa sonra açılan dialog, önceden açık popover'ın
 * altında kalır (ya da tersi). Kayıt, her açılışta en üst değeri bilir ve yeni katmanı
 * onun üzerine koyar. Modal (dialog / sheet) açılınca altındaki yüzen katmanlar
 * (popover, dropdown, select, tooltip) kapanır; arkada etkileşimli kalmaları istenmez.
 *
 * Taban değerler `themes/components.css` ile aynıdır:
 * dialog 400, onay 420, popover 450, photo 460, toast 500.
 */

export const OVERLAY_BASE_Z = {
  dialog: 400,
  confirm: 420,
  floating: 450,
}

const STEP = 10

/** @type {Map<object, { kind: 'modal' | 'floating', z: number, close: () => void }>} */
const stack = new Map()

function topZ() {
  let top = 0
  for (const entry of stack.values()) top = Math.max(top, entry.z)
  return top
}

/**
 * Kayda uygulanacak z-index'in kendisi yazılır; sonradan açılan katman bunun üstüne çıkar.
 * @param {object} owner
 * @param {'modal' | 'floating'} kind
 * @param {() => void} close
 * @param {number} [minZ] Taban üstü alt sınır (ör. onay diyaloğu `OVERLAY_BASE_Z.confirm`)
 * @returns {number}
 */
export function pushOverlay(owner, kind, close, minZ = 0) {
  const base = kind === 'modal' ? OVERLAY_BASE_Z.dialog : OVERLAY_BASE_Z.floating
  const z = Math.max(base, minZ, topZ() + STEP)
  stack.set(owner, { kind, z, close })
  if (kind === 'modal') {
    for (const [other, entry] of stack) {
      if (other === owner || entry.kind !== 'floating') continue
      // Modal bu yüzen katmanın içinden açıldıysa (popover → medya seçici dialog'u)
      // katman kapatılmaz: kapanırsa içeriği söker, dialog da onunla birlikte yok olur.
      if (isComponentAncestor(other, owner)) continue
      entry.close()
    }
  }
  return z
}

/**
 * `ancestor`, `node` bileşeninin Vue ebeveyn zincirinde mi?
 * Sahipler bileşen örnekleridir (`this`); `$parent` aynı genel proxy'yi döndürür.
 * @param {object} ancestor
 * @param {object} node
 * @returns {boolean}
 */
function isComponentAncestor(ancestor, node) {
  let current = node?.$parent
  while (current) {
    if (current === ancestor) return true
    current = current.$parent
  }
  return false
}

/**
 * `owner` katmanının üstünde açık bir modal var mı?
 * Yüzen katman açık kalıp üstünde modal duruyorsa o modal onun içinden açılmıştır;
 * bu sürede dış tıklama / Escape yüzen katmanı kapatmamalıdır.
 * @param {object} owner
 * @returns {boolean}
 */
export function hasModalAbove(owner) {
  const own = stack.get(owner)
  if (!own) return false
  for (const entry of stack.values()) {
    if (entry.kind === 'modal' && entry.z > own.z) return true
  }
  return false
}

/**
 * Açık katmanların en üst z-index'i; kayıt boşsa 0.
 * Kayda girmeyen geçici katmanlar (tooltip) kendini bunun üstüne koyar.
 * @returns {number}
 */
export function peekOverlayTop() {
  return topZ()
}

/**
 * `owner` şu an en üstteki modal mı? Odak denetimi yalnız en üst modalda çalışır.
 * @param {object} owner
 * @returns {boolean}
 */
export function isTopModalOverlay(owner) {
  const own = stack.get(owner)
  if (!own || own.kind !== 'modal') return false
  for (const entry of stack.values()) {
    if (entry.kind === 'modal' && entry.z > own.z) return false
  }
  return true
}

/** @param {object} owner */
export function releaseOverlay(owner) {
  stack.delete(owner)
}
