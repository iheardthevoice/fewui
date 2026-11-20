/**
 * Yükleme kapısı — bir katman (ör. `ui-dialog`) açılırken içindeki yüklemelerin bitmesini kısa bir
 * süre bekleyebilsin diye. `ui-skeleton` beklemedeyken kayıt olur, içerik gelince çıkar.
 * Domain bilmez: kim neyi yüklüyor umursamaz, yalnız "bekleyen var mı" sorusunu yanıtlar.
 */
export const UI_LOADING_GATE_KEY = Symbol.for('fewui.loading-gate')

export function createLoadingGate() {
  const pending = new Set()
  let waiters = []

  function flush() {
    if (pending.size > 0) return
    const list = waiters
    waiters = []
    for (const resolve of list) resolve()
  }

  return {
    /** @param {symbol | string} token */
    register(token) {
      pending.add(token)
    },
    /** @param {symbol | string} token */
    release(token) {
      if (!pending.delete(token)) return
      flush()
    },
    get pendingCount() {
      return pending.size
    },
    /**
     * Bekleyen yükleme kalmayınca veya `timeoutMs` dolunca çözülür.
     * Kontrol bir kare sonra yapılır — aynı karede başlayan yüklemeler de sayılsın.
     * @param {number} timeoutMs
     * @returns {Promise<void>}
     */
    whenSettled(timeoutMs) {
      return new Promise((resolve) => {
        let done = false
        const finish = () => {
          if (done) return
          done = true
          clearTimeout(timer)
          resolve()
        }
        const timer = setTimeout(finish, Math.max(0, timeoutMs))
        const check = () => {
          if (pending.size === 0) {
            finish()
            return
          }
          waiters.push(finish)
        }
        if (typeof requestAnimationFrame === 'function') requestAnimationFrame(check)
        else setTimeout(check, 0)
      })
    },
  }
}
