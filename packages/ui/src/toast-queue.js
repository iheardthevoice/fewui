import { reactive } from 'vue'

/** @typedef {'info' | 'success' | 'warning' | 'error'} ToastVariant */

/**
 * @typedef {object} ToastChild
 * @property {number} id
 * @property {string} title
 * @property {string} [description]
 * @property {ToastVariant} variant
 */

/**
 * @typedef {object} ToastItem
 * @property {number} id
 * @property {string} title
 * @property {string} [description]
 * @property {ToastVariant} variant
 * @property {number} duration
 * @property {ToastChild[]} children
 * @property {boolean} sealed
 * @property {boolean} expanded
 * @property {number} lastAt
 * @property {ReturnType<typeof setTimeout> | null} [_timer]
 */

/** Consecutive toasts within this gap join the open (unsealed) group. */
export const TOAST_GROUP_WINDOW_MS = 300

const VARIANT_RANK = { info: 0, success: 1, warning: 2, error: 3 }

export const toastState = reactive({
  /** @type {ToastItem[]} */
  items: [],
})

let seq = 0
/** @type {number | null} */
let openGroupId = null
/** @type {ReturnType<typeof setTimeout> | null} */
let sealTimer = null

function clearSealTimer() {
  if (sealTimer) {
    clearTimeout(sealTimer)
    sealTimer = null
  }
}

function findOpenGroup() {
  if (openGroupId == null) return null
  const item = toastState.items.find((row) => row.id === openGroupId)
  if (!item || item.sealed) {
    openGroupId = null
    return null
  }
  return item
}

function sealOpenGroup() {
  clearSealTimer()
  const item = findOpenGroup()
  if (item) item.sealed = true
  openGroupId = null
}

function scheduleSeal() {
  clearSealTimer()
  sealTimer = setTimeout(() => {
    sealTimer = null
    sealOpenGroup()
  }, TOAST_GROUP_WINDOW_MS)
}

function bumpDismissTimer(item) {
  if (item._timer) {
    clearTimeout(item._timer)
    item._timer = null
  }
  if (item.duration > 0) {
    item._timer = setTimeout(() => dismissToast(item.id), item.duration)
  }
}

function maxVariant(a, b) {
  const ra = VARIANT_RANK[a] ?? 0
  const rb = VARIANT_RANK[b] ?? 0
  return rb > ra ? b : a
}

function makeChild(payload, id) {
  return {
    id,
    title: payload.title ?? '',
    description: payload.description ?? '',
    variant: payload.variant ?? 'info',
  }
}

/**
 * Toast gösterir. `Toast` bileşeni kökte bir kez render edilmelidir (`<ui-toast />`).
 * 300ms aralığındaki ardışık toastlar tek grupta toplanır; grup mühürlendikten sonra
 * gelenler altta yeni toast olur.
 *
 * @param {{
 *   title?: string,
 *   description?: string,
 *   variant?: ToastVariant,
 *   duration?: number,
 *   group?: boolean,
 * }} payload
 * @param {number} [payload.duration] ms; `0` — yalnızca elle kapatma
 * @param {boolean} [payload.group=true] `false` ise bu toast gruplanmaz
 * @returns {number} toast id (grup id)
 */
export function pushToast(payload = {}) {
  const now = Date.now()
  const allowGroup = payload.group !== false
  const duration = payload.duration !== undefined ? payload.duration : 4500
  const childVariant = payload.variant ?? 'info'

  if (allowGroup) {
    const open = findOpenGroup()
    if (open && now - open.lastAt <= TOAST_GROUP_WINDOW_MS) {
      seq += 1
      open.children.push(makeChild(payload, seq))
      open.variant = maxVariant(open.variant, childVariant)
      open.lastAt = now
      if (duration === 0 || open.duration === 0) {
        open.duration = 0
      } else {
        open.duration = Math.max(open.duration, duration)
      }
      bumpDismissTimer(open)
      scheduleSeal()
      return open.id
    }
  }

  // Previous burst is done — new toast starts below (new stack entry).
  sealOpenGroup()

  seq += 1
  const id = seq
  const child = makeChild(payload, id)
  const item = {
    id,
    title: child.title,
    description: child.description,
    variant: childVariant,
    duration,
    children: [child],
    sealed: !allowGroup,
    expanded: false,
    lastAt: now,
    _timer: null,
  }
  toastState.items.push(item)

  if (allowGroup) {
    openGroupId = id
    scheduleSeal()
  }

  bumpDismissTimer(item)
  return id
}

/**
 * @param {number} id
 * @param {boolean} [expanded]
 */
export function setToastExpanded(id, expanded) {
  const item = toastState.items.find((row) => row.id === id)
  if (!item || item.children.length < 2) return
  item.expanded = expanded === true
  // Expanded groups stay until dismissed.
  if (item.expanded) {
    if (item._timer) {
      clearTimeout(item._timer)
      item._timer = null
    }
  } else {
    bumpDismissTimer(item)
  }
}

/**
 * @param {number} id
 */
export function toggleToastExpanded(id) {
  const item = toastState.items.find((row) => row.id === id)
  if (!item || item.children.length < 2) return
  setToastExpanded(id, !item.expanded)
}

/**
 * @param {number} id
 */
export function dismissToast(id) {
  const idx = toastState.items.findIndex((x) => x.id === id)
  if (idx === -1) return
  const item = toastState.items[idx]
  if (item._timer) {
    clearTimeout(item._timer)
    item._timer = null
  }
  if (openGroupId === id) {
    clearSealTimer()
    openGroupId = null
  }
  toastState.items.splice(idx, 1)
}

/**
 * Grup içinden tek bildirimi kaldırır. Son çocuk kalırsa grup tek toasta düşer.
 * @param {number} groupId
 * @param {number} childId
 */
export function dismissToastChild(groupId, childId) {
  const item = toastState.items.find((row) => row.id === groupId)
  if (!item) return
  const idx = item.children.findIndex((c) => c.id === childId)
  if (idx === -1) return
  item.children.splice(idx, 1)
  if (item.children.length === 0) {
    dismissToast(groupId)
    return
  }
  const head = item.children[0]
  item.title = head.title
  item.description = head.description
  item.variant = item.children.reduce(
    (acc, c) => maxVariant(acc, c.variant),
    head.variant,
  )
  if (item.children.length < 2) {
    item.expanded = false
    bumpDismissTimer(item)
  }
}

export function clearToasts() {
  clearSealTimer()
  openGroupId = null
  for (const item of toastState.items) {
    if (item._timer) clearTimeout(item._timer)
  }
  toastState.items.splice(0)
}
