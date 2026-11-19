import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, h } from 'vue'
import { setUiFeedbackHandler } from '../../src/utils/feedback.js'
import { clearToasts, pushToast } from '../../src/toast-queue.js'
import { answerConfirm, requestConfirm } from '../../src/confirm-state.js'
import { flush, mountUi } from '../mount.js'
import ContextMenu from '../../src/components/ContextMenu.vue'

describe('dokunsal geri bildirim kancası', () => {
  afterEach(() => {
    setUiFeedbackHandler(null)
    clearToasts()
  })

  it('işleyici yokken sessiz kalır', () => {
    expect(() => pushToast({ title: 'x', color: 'success' })).not.toThrow()
  })

  it('toast tonuna göre başarı / uyarı / hata bildirir; bilgi toast\'ı bildirmez', () => {
    const fn = vi.fn()
    setUiFeedbackHandler(fn)
    pushToast({ title: 'a', color: 'success', group: false })
    pushToast({ title: 'b', color: 'warning', group: false })
    pushToast({ title: 'c', color: 'danger', group: false })
    pushToast({ title: 'd', color: 'info', group: false })
    expect(fn.mock.calls.map((c) => c[0])).toEqual(['success', 'warning', 'error'])
  })

  it('tehlikeli onay açılırken uyarı bildirir', () => {
    const fn = vi.fn()
    setUiFeedbackHandler(fn)
    requestConfirm({ title: 'Sil', color: 'danger' })
    requestConfirm({ title: 'Devam' })
    expect(fn.mock.calls.map((c) => c[0])).toEqual(['warning'])
    answerConfirm(false)
  })

  it('işleyici hata fırlatsa da akış bozulmaz', () => {
    setUiFeedbackHandler(() => {
      throw new Error('plugin yok')
    })
    expect(() => pushToast({ title: 'x', color: 'danger' })).not.toThrow()
  })

  it('bağlam menüsü uzun basışla açılırken dokunsal işaret verir', async () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    setUiFeedbackHandler(fn)
    const wrapper = mountUi(ContextMenu, {
      props: { items: [{ label: 'Aç' }] },
      slots: { default: () => h('div', { id: 'area' }, 'Masa 12') },
    })
    const area = wrapper.find('#area').element
    const touch = { clientX: 20, clientY: 20, identifier: 1, target: area }
    area.dispatchEvent(new TouchEvent('touchstart', { bubbles: true, touches: [touch] }))
    vi.advanceTimersByTime(600)
    await nextTick()
    expect(fn).toHaveBeenCalledWith('impact-medium')
    vi.useRealTimers()
    await flush(10)
  })
})
