import { describe, expect, it, vi } from 'vitest'
import { hasModalAbove, isTopModalOverlay, peekOverlayTop, pushOverlay, releaseOverlay } from '../../src/theme/overlay-stack.js'
import { shouldContainFocus } from '../../src/utils/focus-guard.js'
import { lockBodyScroll, unlockBodyScroll } from '../../src/utils/scroll-lock.js'

describe('overlay-stack', () => {
  it('her yeni katmanı öncekinin üstüne koyar ve en üst modalı bilir', () => {
    const dialog = {}
    const popover = {}
    const inner = {}
    const dialogZ = pushOverlay(dialog, 'modal', () => {})
    const popoverZ = pushOverlay(popover, 'floating', () => {})
    expect(dialogZ).toBe(400)
    expect(popoverZ).toBeGreaterThan(dialogZ)
    expect(peekOverlayTop()).toBe(popoverZ)
    expect(isTopModalOverlay(dialog)).toBe(true)

    const innerZ = pushOverlay(inner, 'modal', () => {})
    expect(innerZ).toBeGreaterThan(popoverZ)
    expect(isTopModalOverlay(dialog)).toBe(false)
    expect(isTopModalOverlay(inner)).toBe(true)

    for (const owner of [dialog, popover, inner]) releaseOverlay(owner)
    expect(peekOverlayTop()).toBe(0)
  })

  it('modal açılınca açık yüzen katmanları kapatır', () => {
    const popover = {}
    const dialog = {}
    const close = vi.fn()
    pushOverlay(popover, 'floating', close)
    pushOverlay(dialog, 'modal', () => {})
    expect(close).toHaveBeenCalledOnce()
    releaseOverlay(popover)
    releaseOverlay(dialog)
  })

  it('popover içinden açılan modal o popover’ı kapatmaz, dıştaki diğerlerini kapatır', () => {
    const host = {}
    const picker = { $parent: host }
    const dialog = { $parent: { $parent: picker } }
    const other = {}
    const closeHost = vi.fn()
    const closeOther = vi.fn()
    pushOverlay(host, 'floating', closeHost)
    pushOverlay(other, 'floating', closeOther)
    expect(hasModalAbove(host)).toBe(false)

    pushOverlay(dialog, 'modal', () => {})
    expect(closeHost).not.toHaveBeenCalled()
    expect(closeOther).toHaveBeenCalledOnce()
    expect(hasModalAbove(host)).toBe(true)

    releaseOverlay(dialog)
    expect(hasModalAbove(host)).toBe(false)
    releaseOverlay(host)
    releaseOverlay(other)
  })
})

describe('shouldContainFocus', () => {
  function setup() {
    document.body.innerHTML = `
      <div id="app" data-v-app><button id="page">Sayfa</button></div>
      <div class="ui-dialog-root" id="lower"><button id="lower-btn">Alt</button></div>
      <div class="ui-dialog-root" id="top"><button id="top-btn">Üst</button></div>
      <div data-ui-popover-layer><input id="popover-input" /></div>
      <div class="ui-toast-host"><button id="toast-btn">Kapat</button></div>
      <div class="pac-container"><button id="third-party">Öneri</button></div>
      <div role="dialog" aria-modal="true"><button id="foreign-modal">Dış</button></div>
      <div data-v-app><button id="allowed" data-ui-focus-allow>İzinli</button></div>`
    return document.getElementById('top')
  }
  const el = (id) => document.getElementById(id)

  it('arkadaki sayfa ve alttaki modal için odağı geri çağırır', () => {
    const top = setup()
    expect(shouldContainFocus(el('page'), top)).toBe(true)
    expect(shouldContainFocus(el('lower-btn'), top)).toBe(true)
  })

  it('modalın kendisine, yüzen katmanlara, toasta ve dış bileşenlere dokunmaz', () => {
    const top = setup()
    for (const id of ['top-btn', 'popover-input', 'toast-btn', 'third-party', 'foreign-modal', 'allowed']) {
      expect(shouldContainFocus(el(id), top), id).toBe(false)
    }
  })
})

describe('scroll-lock', () => {
  it('iç içe kilitleri sayar ve son kilit açılınca eski stili geri yükler', () => {
    document.documentElement.style.overflow = 'auto'
    lockBodyScroll()
    lockBodyScroll()
    expect(document.documentElement.style.overflow).toBe('hidden')
    unlockBodyScroll()
    expect(document.documentElement.style.overflow).toBe('hidden')
    unlockBodyScroll()
    expect(document.documentElement.style.overflow).toBe('auto')
  })
})
