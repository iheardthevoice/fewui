import { describe, expect, it, vi } from 'vitest'
import { createTypeahead, isTypeaheadKey } from '../../src/utils/typeahead.js'

const LABELS = ['Düzenle', 'İptal', 'Info', 'İkinci', 'Sil']

describe('createTypeahead', () => {
  it('basılan harfle başlayan sonraki öğeyi bulur', () => {
    const find = createTypeahead()
    expect(find('s', LABELS, -1)).toBe(4)
  })

  it('aynı harf tekrarlandıkça eşleşenler arasında döner', () => {
    const find = createTypeahead()
    expect(find('i', LABELS, -1)).toBe(1)
    expect(find('i', LABELS, 1)).toBe(2)
    expect(find('i', LABELS, 2)).toBe(3)
    expect(find('i', LABELS, 3)).toBe(1)
  })

  it('birden çok harfi önek olarak arar ve Türkçe İ/ı ayrımını yok sayar', () => {
    const find = createTypeahead()
    find('i', LABELS, -1)
    expect(find('k', LABELS, 1)).toBe(3)
  })

  it('duraklamadan sonra aramayı sıfırlar', () => {
    vi.useFakeTimers()
    const find = createTypeahead()
    find('i', LABELS, -1)
    vi.advanceTimersByTime(700)
    expect(find('s', LABELS, 1)).toBe(4)
    vi.useRealTimers()
  })

  it('eşleşme yoksa -1 döner', () => {
    expect(createTypeahead()('x', LABELS, 0)).toBe(-1)
    expect(createTypeahead()('a', [], 0)).toBe(-1)
  })
})

describe('isTypeaheadKey', () => {
  it('tek karakterleri kabul eder; boşluk, değiştiricili ve adlı tuşları reddeder', () => {
    expect(isTypeaheadKey({ key: 'a' })).toBe(true)
    expect(isTypeaheadKey({ key: ' ' })).toBe(false)
    expect(isTypeaheadKey({ key: 'a', ctrlKey: true })).toBe(false)
    expect(isTypeaheadKey({ key: 'Enter' })).toBe(false)
  })
})
