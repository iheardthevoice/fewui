import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  clearToasts,
  pauseToast,
  pushToast,
  resumeToast,
  setToastExpanded,
  toastState,
} from '../../src/toast-queue.js'

describe('toast-queue', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    clearToasts()
    vi.useRealTimers()
  })

  it('süre dolunca toastı kaldırır', () => {
    pushToast({ title: 'Kaydedildi', duration: 1000 })
    expect(toastState.items).toHaveLength(1)
    vi.advanceTimersByTime(1000)
    expect(toastState.items).toHaveLength(0)
  })

  it('300 ms içindeki ardışık toastları tek grupta toplar', () => {
    const first = pushToast({ title: 'Bir' })
    vi.advanceTimersByTime(100)
    const second = pushToast({ title: 'İki', color: 'danger' })
    expect(second).toBe(first)
    expect(toastState.items).toHaveLength(1)
    expect(toastState.items[0].children).toHaveLength(2)
    expect(toastState.items[0].color).toBe('danger')

    vi.advanceTimersByTime(400)
    pushToast({ title: 'Üç' })
    expect(toastState.items).toHaveLength(2)
  })

  it('bekletilen toast kapanmaz; devam edince süre baştan işler', () => {
    const id = pushToast({ title: 'Bekle', duration: 1000 })
    vi.advanceTimersByTime(600)
    pauseToast(id)
    vi.advanceTimersByTime(5000)
    expect(toastState.items).toHaveLength(1)
    resumeToast(id)
    vi.advanceTimersByTime(999)
    expect(toastState.items).toHaveLength(1)
    vi.advanceTimersByTime(1)
    expect(toastState.items).toHaveLength(0)
  })

  it('açık grup elle kapatılana kadar kalır', () => {
    const id = pushToast({ title: 'Bir', duration: 1000 })
    pushToast({ title: 'İki', duration: 1000 })
    setToastExpanded(id, true)
    vi.advanceTimersByTime(10000)
    expect(toastState.items).toHaveLength(1)
  })

  it('eylemli toast gruplanmaz ve eylemi taşır', () => {
    const onClick = vi.fn()
    pushToast({ title: 'Silindi', action: { label: 'Geri al', onClick } })
    pushToast({ title: 'Başka' })
    expect(toastState.items).toHaveLength(2)
    expect(toastState.items[0].children[0].action.label).toBe('Geri al')
  })
})
