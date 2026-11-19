import { describe, expect, it } from 'vitest'
import {
  arcPath,
  extent,
  labelStride,
  linePath,
  linearScale,
  niceStep,
  niceTicks,
  pieAngles,
  stackSeries,
  toNumber,
} from '../../src/utils/chart-math.js'

describe('chart-math', () => {
  it('eksen adımını 1 · 2 · 5 × 10ⁿ değerlerine yuvarlar', () => {
    expect(niceStep(52, 5)).toBe(20)
    expect(niceStep(9, 5)).toBe(2)
    expect(niceStep(0, 5)).toBe(1)
  })

  it('aralığı kapsayan yuvarlak eksen değerleri üretir', () => {
    expect(niceTicks(0, 52, 5)).toEqual([0, 20, 40, 60])
    const ticks = niceTicks(-30, 70, 5)
    expect(ticks[0]).toBeLessThanOrEqual(-30)
    expect(ticks.at(-1)).toBeGreaterThanOrEqual(70)
    expect(ticks).toContain(0)
  })

  it('doğrusal ölçek uçları eşler', () => {
    const scale = linearScale(0, 100, 200, 0)
    expect(scale(0)).toBe(200)
    expect(scale(100)).toBe(0)
    expect(scale(25)).toBe(150)
  })

  it('sayıya çevrilemeyen hücreyi null yapar', () => {
    expect(toNumber('12.5')).toBe(12.5)
    expect(toNumber('')).toBeNull()
    expect(toNumber('abc')).toBeNull()
    expect(toNumber(null)).toBeNull()
  })

  it('en küçük ve en büyük değeri bulur', () => {
    expect(extent([3, null, -2, 8])).toEqual([-2, 8])
  })

  it('serileri üst üste yığar', () => {
    const stacked = stackSeries([{ a: 10, b: 5 }, { a: 2, b: 3 }], ['a', 'b'])
    expect(JSON.stringify(stacked)).toContain('15')
    expect(stacked).toHaveLength(2)
  })

  it('çizgi yolu M ile başlar ve her nokta için bir parça içerir', () => {
    const d = linePath([[0, 10], [10, 0], [20, 5]])
    expect(d.startsWith('M')).toBe(true)
    expect(d.match(/[ML]/g)).toHaveLength(3)
    expect(linePath([])).toBe('')
    // Eksik nokta çizgiyi keser: iki ayrı parça.
    expect(linePath([[0, 1], null, [2, 3]]).match(/M/g)).toHaveLength(2)
  })

  it('pasta açıları tam turu paylaştırır ve yay yolu üretir', () => {
    const angles = pieAngles([1, 1, 2])
    expect(angles).toHaveLength(3)
    const total = angles.reduce((sum, a) => sum + (a.end - a.start), 0)
    expect(total).toBeCloseTo(Math.PI * 2, 5)
    expect(arcPath(50, 50, 40, 20, 0, Math.PI)).toMatch(/^M.*A/)
  })

  it('etiketler sığmıyorsa seyreltme adımını büyütür', () => {
    expect(labelStride(40, 50)).toBe(1)
    expect(labelStride(40, 10)).toBeGreaterThan(1)
  })
})
