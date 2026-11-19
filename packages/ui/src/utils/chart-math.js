/**
 * Grafik matematiği — saf fonksiyonlar (DOM yok, test edilebilir).
 * Ölçek, eksen adımı, yığma ve SVG yol üretimi `Chart.vue` dışında tutulur.
 */

const TAU = Math.PI * 2

/**
 * Yol koordinatı: 2 ondalık yeter, SVG çıktısı kısa kalır.
 * @param {number} value
 * @returns {number}
 */
export function round2(value) {
  return Math.round(value * 100) / 100
}

/**
 * Sayıya çevrilemeyen hücre `null` olur (çizgide boşluk, sütunda 0).
 * @param {unknown} value
 * @returns {number | null}
 */
export function toNumber(value) {
  if (value == null || value === '') return null
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

/**
 * Aralığı yaklaşık `count` parçaya bölen "yuvarlak" adım (1 · 2 · 5 × 10ⁿ).
 * @param {number} span
 * @param {number} [count]
 * @returns {number}
 */
export function niceStep(span, count = 5) {
  if (!(span > 0) || !(count > 0)) return 1
  const raw = span / count
  const pow = 10 ** Math.floor(Math.log10(raw))
  const fraction = raw / pow
  let nice = 10
  if (fraction <= 1) nice = 1
  else if (fraction <= 2) nice = 2
  else if (fraction <= 5) nice = 5
  return nice * pow
}

/**
 * `min`–`max` aralığını kapsayan yuvarlak eksen değerleri; ilk ve son değer aralığın dışına taşabilir.
 * Tek noktalı aralık (min === max) sıfırı içerecek biçimde genişletilir.
 * @param {number} min
 * @param {number} max
 * @param {number} [count] Hedef aralık sayısı (yaklaşık).
 * @returns {number[]}
 */
export function niceTicks(min, max, count = 5) {
  let lo = Number.isFinite(min) ? min : 0
  let hi = Number.isFinite(max) ? max : 0
  if (lo > hi) [lo, hi] = [hi, lo]
  if (lo === hi) {
    if (lo === 0) hi = 1
    else if (lo > 0) lo = 0
    else hi = 0
  }
  const step = niceStep(hi - lo, Math.max(1, Math.floor(count)))
  const start = Math.floor(lo / step + 1e-9) * step
  const end = Math.ceil(hi / step - 1e-9) * step
  const steps = Math.max(1, Math.round((end - start) / step))
  // Kayan nokta artığı (0.30000000000000004) etikete sızmasın.
  const decimals = Math.max(0, -Math.floor(Math.log10(step))) + 1
  const ticks = []
  for (let i = 0; i <= steps; i += 1) {
    ticks.push(Number((start + i * step).toFixed(decimals)))
  }
  return ticks
}

/**
 * Doğrusal ölçek. Tanım aralığı sıfır genişlikteyse aralığın başını döndürür.
 * @param {number} d0
 * @param {number} d1
 * @param {number} r0
 * @param {number} r1
 * @returns {(value: number) => number}
 */
export function linearScale(d0, d1, r0, r1) {
  const span = d1 - d0
  if (span === 0) return () => r0
  return (value) => r0 + ((value - d0) / span) * (r1 - r0)
}

/**
 * Kategori bandı: `count` eşit dilim; `center(i)` dilimin orta noktası.
 * @param {number} count
 * @param {number} start
 * @param {number} end
 * @returns {{ step: number, center: (index: number) => number }}
 */
export function bandScale(count, start, end) {
  const step = count > 0 ? Math.max(0, end - start) / count : 0
  return { step, center: (index) => start + step * (index + 0.5) }
}

/**
 * İmlece en yakın kategori dizini (bant dışı değerler uçlara sabitlenir).
 * @param {number} x
 * @param {number} start
 * @param {number} step
 * @param {number} count
 * @returns {number} Veri yoksa `-1`.
 */
export function nearestBandIndex(x, start, step, count) {
  if (!(count > 0)) return -1
  if (!(step > 0)) return 0
  return Math.min(count - 1, Math.max(0, Math.floor((x - start) / step)))
}

/**
 * Etiketler üst üste binmesin diye kaç kategoride bir etiket basılacağı.
 * @param {number} labelWidth En geniş etiket + boşluk (px).
 * @param {number} step Kategori bandı genişliği (px).
 * @returns {number} 1 = hepsi, 2 = birer atlayarak…
 */
export function labelStride(labelWidth, step) {
  if (!(step > 0) || !(labelWidth > 0)) return 1
  return Math.max(1, Math.ceil(labelWidth / step))
}

/**
 * Serileri satır bazında üst üste yığar. Pozitifler yukarı, negatifler aşağı birikir.
 * @param {Array<Record<string, unknown>>} rows
 * @param {string[]} keys Yığma sırası (ilk anahtar tabanda).
 * @returns {Array<Array<[number, number]>>} `result[seri][satır] = [y0, y1]`
 */
export function stackSeries(rows, keys) {
  const out = keys.map(() => [])
  rows.forEach((row, rowIndex) => {
    let positive = 0
    let negative = 0
    keys.forEach((key, seriesIndex) => {
      const value = toNumber(row?.[key]) ?? 0
      if (value >= 0) {
        out[seriesIndex][rowIndex] = [positive, positive + value]
        positive += value
      } else {
        out[seriesIndex][rowIndex] = [negative, negative + value]
        negative += value
      }
    })
  })
  return out
}

/**
 * Değer kümesinin [min, max] aralığı; boş kümede `[0, 0]`.
 * @param {Array<number | null | undefined>} values
 * @returns {[number, number]}
 */
export function extent(values) {
  let min = Infinity
  let max = -Infinity
  for (const value of values) {
    if (value == null || !Number.isFinite(value)) continue
    if (value < min) min = value
    if (value > max) max = value
  }
  return min === Infinity ? [0, 0] : [min, max]
}

/**
 * Kırık çizgi yolu. `null` nokta çizgiyi keser (eksik veri birleştirilmez).
 * @param {Array<[number, number] | null>} points
 * @returns {string}
 */
export function linePath(points) {
  let d = ''
  let pen = false
  for (const point of points) {
    if (!point || !Number.isFinite(point[0]) || !Number.isFinite(point[1])) {
      pen = false
      continue
    }
    d += `${pen ? 'L' : 'M'}${round2(point[0])} ${round2(point[1])}`
    pen = true
  }
  return d
}

/**
 * Alan yolu: üst kenar soldan sağa, alt kenar sağdan sola. Eksik nokta içeren çiftler atlanır.
 * @param {Array<[number, number] | null>} top
 * @param {Array<[number, number] | null>} bottom
 * @returns {string}
 */
export function areaPath(top, bottom) {
  const upper = []
  const lower = []
  for (let i = 0; i < top.length; i += 1) {
    if (!top[i] || !bottom[i]) continue
    upper.push(top[i])
    lower.push(bottom[i])
  }
  if (!upper.length) return ''
  const forward = linePath(upper)
  const back = lower
    .reverse()
    .map((point) => `L${round2(point[0])} ${round2(point[1])}`)
    .join('')
  return `${forward}${back}Z`
}

/**
 * Veri ucu yuvarlatılmış, taban ucu düz sütun yolu.
 * @param {number} x
 * @param {number} y Üst kenar.
 * @param {number} width
 * @param {number} height
 * @param {number} radius
 * @param {boolean} [down] Negatif sütun: yuvarlak uç altta.
 * @returns {string}
 */
export function barPath(x, y, width, height, radius = 0, down = false) {
  if (!(width > 0) || !(height > 0)) return ''
  const r = Math.max(0, Math.min(radius, width / 2, height))
  const x0 = round2(x)
  const x1 = round2(x + width)
  const y0 = round2(y)
  const y1 = round2(y + height)
  if (r === 0) return `M${x0} ${y0}H${x1}V${y1}H${x0}Z`
  const rr = round2(r)
  if (down) {
    return `M${x0} ${y0}H${x1}V${round2(y1 - r)}A${rr} ${rr} 0 0 1 ${round2(x1 - r)} ${y1}H${round2(x0 + r)}A${rr} ${rr} 0 0 1 ${x0} ${round2(y1 - r)}Z`
  }
  return `M${x0} ${y1}V${round2(y0 + r)}A${rr} ${rr} 0 0 1 ${round2(x0 + r)} ${y0}H${round2(x1 - r)}A${rr} ${rr} 0 0 1 ${x1} ${round2(y0 + r)}V${y1}Z`
}

/**
 * Açıdan noktaya — 0 radyan saat 12 yönü, saat yönünde artar.
 * @param {number} cx
 * @param {number} cy
 * @param {number} radius
 * @param {number} angle
 * @returns {[number, number]}
 */
export function polarPoint(cx, cy, radius, angle) {
  return [cx + radius * Math.sin(angle), cy - radius * Math.cos(angle)]
}

/**
 * Halka (veya `innerRadius` 0 ise pasta) dilimi yolu.
 * Tam tur tek yay ile çizilemediği için iki yarım yaya bölünür.
 * @param {number} cx
 * @param {number} cy
 * @param {number} outerRadius
 * @param {number} innerRadius
 * @param {number} startAngle Radyan, saat 12'den saat yönünde.
 * @param {number} endAngle
 * @returns {string}
 */
export function arcPath(cx, cy, outerRadius, innerRadius, startAngle, endAngle) {
  const sweep = endAngle - startAngle
  if (!(sweep > 0) || !(outerRadius > 0)) return ''
  const ro = round2(outerRadius)
  const ri = round2(Math.max(0, Math.min(innerRadius, outerRadius)))
  const p = (radius, angle) => {
    const [x, y] = polarPoint(cx, cy, radius, angle)
    return `${round2(x)} ${round2(y)}`
  }
  if (sweep >= TAU - 1e-6) {
    const mid = startAngle + Math.PI
    let d = `M${p(ro, startAngle)}A${ro} ${ro} 0 1 1 ${p(ro, mid)}A${ro} ${ro} 0 1 1 ${p(ro, startAngle)}Z`
    if (ri > 0) {
      d += `M${p(ri, startAngle)}A${ri} ${ri} 0 1 0 ${p(ri, mid)}A${ri} ${ri} 0 1 0 ${p(ri, startAngle)}Z`
    }
    return d
  }
  const large = sweep > Math.PI ? 1 : 0
  const outer = `M${p(ro, startAngle)}A${ro} ${ro} 0 ${large} 1 ${p(ro, endAngle)}`
  if (ri === 0) return `${outer}L${round2(cx)} ${round2(cy)}Z`
  return `${outer}L${p(ri, endAngle)}A${ri} ${ri} 0 ${large} 0 ${p(ri, startAngle)}Z`
}

/**
 * Değerleri tam tura oranlar. Negatif / geçersiz değer 0 sayılır; `padAngle` dilimler arası boşluktur
 * (dilimin kendi açısından düşülür, toplam tur değişmez).
 * @param {Array<number | null>} values
 * @param {number} [padAngle] Radyan.
 * @returns {Array<{ start: number, end: number, mid: number, value: number, ratio: number }>}
 */
export function pieAngles(values, padAngle = 0) {
  const clean = values.map((value) => (value != null && Number.isFinite(value) && value > 0 ? value : 0))
  const total = clean.reduce((sum, value) => sum + value, 0)
  const positive = clean.filter((value) => value > 0).length
  const pad = positive > 1 ? Math.max(0, padAngle) : 0
  let cursor = 0
  return clean.map((value) => {
    const ratio = total > 0 ? value / total : 0
    const span = ratio * TAU
    const inset = Math.min(pad, span) / 2
    const start = cursor + inset
    const end = cursor + span - inset
    const mid = cursor + span / 2
    cursor += span
    return { start, end, mid, value, ratio }
  })
}
