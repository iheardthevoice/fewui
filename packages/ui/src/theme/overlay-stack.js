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
 * @param {object} owner
 * @param {'modal' | 'floating'} kind
 * @param {() => void} close
 * @returns {number}
 */
export function pushOverlay(owner, kind, close) {
  const base = kind === 'modal' ? OVERLAY_BASE_Z.dialog : OVERLAY_BASE_Z.floating
  const z = Math.max(base, topZ() + STEP)
  stack.set(owner, { kind, z, close })
  if (kind === 'modal') {
    for (const [other, entry] of stack) {
      if (other !== owner && entry.kind === 'floating') entry.close()
    }
  }
  return z
}

/** @param {object} owner */
export function releaseOverlay(owner) {
  stack.delete(owner)
}
