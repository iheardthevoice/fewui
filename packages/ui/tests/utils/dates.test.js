import { describe, expect, it } from 'vitest'
import { formatYmdDisplay, resolveDateDisplayLocale } from '../../src/utils/format-ymd-display.js'
import { normalizeWeekStart, resolveWeekStart } from '../../src/utils/week-start.js'

describe('resolveDateDisplayLocale', () => {
  it('Türkçe ve İngilizceyi sabit biçime bağlar', () => {
    expect(resolveDateDisplayLocale('tr')).toBe('tr-TR')
    expect(resolveDateDisplayLocale('en')).toBe('en-GB')
    expect(resolveDateDisplayLocale('en-US')).toBe('en-GB')
  })

  it('tanınan diğer dilleri kendi dilinde bırakır', () => {
    expect(resolveDateDisplayLocale('de')).toBe('de')
    expect(resolveDateDisplayLocale('zh_CN')).toBe('zh-CN')
    expect(resolveDateDisplayLocale({ value: 'fr' })).toBe('fr')
  })

  it('boş ya da geçersiz dilde İngilizceye düşer (Türkçeye değil)', () => {
    expect(resolveDateDisplayLocale('')).toBe('en-GB')
    expect(resolveDateDisplayLocale(undefined)).toBe('en-GB')
    expect(resolveDateDisplayLocale('xx-invalid-@@')).toBe('en-GB')
  })
})

describe('formatYmdDisplay', () => {
  it('dile göre yazar; dil verilmezse İngilizce', () => {
    expect(formatYmdDisplay('2026-11-17')).toBe('17 November 2026')
    expect(formatYmdDisplay('2026-11-17', 'tr')).toBe('17 Kasım 2026')
  })

  it('geçersiz tarihte boş döner', () => {
    expect(formatYmdDisplay('2026-02-31')).toBe('')
    expect(formatYmdDisplay('')).toBe('')
  })
})

describe('resolveWeekStart', () => {
  it('dilin hafta başını Date#getDay ölçeğinde verir', () => {
    expect(resolveWeekStart('tr-TR')).toBe(1)
    expect(resolveWeekStart('en-GB')).toBe(1)
    expect(resolveWeekStart('en-US')).toBe(0)
  })

  it('geçersiz dilde pazartesiye düşer', () => {
    expect(resolveWeekStart('@@')).toBe(1)
  })

  it('açık prop değeri dili ezer', () => {
    expect(normalizeWeekStart(0, 'tr-TR')).toBe(0)
    expect(normalizeWeekStart(undefined, 'tr-TR')).toBe(1)
    expect(normalizeWeekStart(9, 'en-US')).toBe(0)
  })
})
