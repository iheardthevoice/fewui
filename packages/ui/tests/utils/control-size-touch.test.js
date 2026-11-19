import { afterEach, describe, expect, it } from 'vitest'
import { resolveControlSize } from '../../src/utils/control-size.js'
import { isCoarsePointer, isNativeShell, isPhoneViewport } from '../../src/utils/viewport.js'

/** Dokunma ölçeği CSS'te (`pointer: coarse`); JS yalnız native kabukta boyut sınıfını büyütür. */
describe('resolveControlSize — touch scale lives in CSS', () => {
  afterEach(() => {
    document.documentElement.classList.remove('cap-native', 'cap-ios', 'cap-android')
  })

  it('keeps md on web regardless of width (no width heuristic)', () => {
    expect(resolveControlSize('md')).toBe('md')
    expect(resolveControlSize('sm')).toBe('sm')
    expect(resolveControlSize('lg')).toBe('lg')
  })

  it('bumps default md to lg only inside the native shell', () => {
    document.documentElement.classList.add('cap-native', 'cap-android')
    expect(isNativeShell()).toBe(true)
    expect(resolveControlSize('md')).toBe('lg')
    expect(resolveControlSize('sm')).toBe('sm')
  })

  it('defaultSize sm → lg on web, sm in native shell (unchanged contract)', () => {
    expect(resolveControlSize('sm', { defaultSize: 'sm' })).toBe('lg')
    document.documentElement.classList.add('cap-native', 'cap-ios')
    expect(resolveControlSize('sm', { defaultSize: 'sm' })).toBe('sm')
  })

  it('media helpers are safe without matchMedia matches', () => {
    expect(typeof isCoarsePointer()).toBe('boolean')
    expect(typeof isPhoneViewport()).toBe('boolean')
  })
})
