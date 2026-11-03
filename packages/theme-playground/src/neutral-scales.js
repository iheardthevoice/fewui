const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

/**
 * @param {string[]} values
 * @returns {Record<number, string>}
 */
function scale(values) {
  return Object.fromEntries(STEPS.map((step, index) => [step, `oklch(${values[index]})`]))
}

/** Tailwind v4 nötr skalaları — `tokens.light.base`. */
export const NEUTRAL_SCALES = {
  gray: scale([
    '0.985 0.002 247.839',
    '0.967 0.003 264.542',
    '0.928 0.006 264.531',
    '0.872 0.01 258.338',
    '0.707 0.022 261.325',
    '0.551 0.027 264.364',
    '0.446 0.03 256.802',
    '0.373 0.034 259.733',
    '0.278 0.033 256.848',
    '0.21 0.034 265.755',
    '0.13 0.028 261.692',
  ]),
  zinc: scale([
    '0.985 0 0',
    '0.967 0.001 286.375',
    '0.92 0.004 286.32',
    '0.871 0.006 286.286',
    '0.705 0.015 286.067',
    '0.552 0.016 285.938',
    '0.442 0.017 285.786',
    '0.37 0.013 285.805',
    '0.274 0.006 286.033',
    '0.21 0.006 285.885',
    '0.141 0.005 285.823',
  ]),
  neutral: scale([
    '0.985 0 0',
    '0.97 0 0',
    '0.922 0 0',
    '0.87 0 0',
    '0.708 0 0',
    '0.556 0 0',
    '0.439 0 0',
    '0.371 0 0',
    '0.269 0 0',
    '0.205 0 0',
    '0.145 0 0',
  ]),
  slate: scale([
    '0.984 0.003 247.858',
    '0.968 0.007 247.896',
    '0.929 0.013 255.508',
    '0.869 0.022 252.894',
    '0.704 0.04 256.788',
    '0.554 0.046 257.417',
    '0.446 0.043 257.281',
    '0.372 0.044 257.287',
    '0.279 0.041 260.031',
    '0.208 0.042 265.755',
    '0.129 0.042 264.695',
  ]),
  stone: scale([
    '0.985 0.001 106.423',
    '0.97 0.001 106.424',
    '0.923 0.003 48.717',
    '0.869 0.005 56.366',
    '0.709 0.01 56.259',
    '0.553 0.013 58.071',
    '0.444 0.011 73.639',
    '0.374 0.01 67.558',
    '0.268 0.007 34.298',
    '0.216 0.006 56.043',
    '0.147 0.004 49.25',
  ]),
}

/**
 * @param {unknown} base
 * @returns {string|null} Eşleşen skala id'si
 */
export function matchNeutralScale(base) {
  if (!base || typeof base !== 'object') return null
  const entry = Object.entries(NEUTRAL_SCALES).find(([, values]) =>
    STEPS.every((step) => values[step] === base[step]),
  )
  return entry?.[0] ?? null
}

/**
 * Base skalasından türeyen nötr roller — metin, yüzey, kontrol, sönük ve vurgu.
 * Durum renkleri (success …) ve yüzey stilleri (opaklık, bulanıklık) temanın kendisindedir.
 */
export const NEUTRAL_ROLE_TOKENS = [
  'background',
  'foreground',
  'surface',
  'surfaceForeground',
  'control',
  'controlForeground',
  'secondary',
  'secondaryForeground',
  'muted',
  'mutedForeground',
  'accent',
  'accentForeground',
  'border',
  'borderSubtle',
  'surfaceSubtle',
  'surfaceSunken',
  'chartForeground',
]

/** sRGB 0–255 → OKLab `{ l, c }` (açıklık ve renklilik). */
function rgbToOklabLc([r, g, b]) {
  const lin = [r, g, b].map((v) => {
    const x = v / 255
    return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4
  })
  const l = Math.cbrt(0.4122214708 * lin[0] + 0.5363325363 * lin[1] + 0.0514459929 * lin[2])
  const m = Math.cbrt(0.2119034982 * lin[0] + 0.6806995451 * lin[1] + 0.1073969566 * lin[2])
  const s = Math.cbrt(0.0883024619 * lin[0] + 0.2817188376 * lin[1] + 0.6299787005 * lin[2])
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
  return { l: L, c: Math.hypot(A, B) }
}

/**
 * Nötr bir sabit rengi (hex / oklch) skaladaki en yakın açıklık basamağına bağlar: `var(--base-N)`.
 * Böylece base değişince metin ve yüzeyler de o skaladan gelir. Dokunulmayanlar:
 * - zaten değişken / `color-mix` olan değerler (`var(--base-500)`, `var(--white)` …)
 * - renkli tonlar (renklilik > 0.04) — tema bilinçli seçmiştir
 * - saf siyah / beyaz — skala uçlarından bilinçli olarak ayrıdır
 * @param {unknown} value
 * @param {(color: string) => [number, number, number] | null} toRgb
 * @returns {unknown}
 */
export function bindColorToBaseStep(value, toRgb) {
  if (typeof value !== 'string' || /var\(|color-mix|from /.test(value)) return value
  const rgb = toRgb(value)
  if (!rgb) return value
  const { l, c } = rgbToOklabLc(rgb)
  if (c > 0.04 || l < 0.02 || l > 0.995) return value
  const step = STEPS.reduce((best, candidate) =>
    Math.abs(STEP_LIGHTNESS[candidate] - l) < Math.abs(STEP_LIGHTNESS[best] - l) ? candidate : best,
  )
  return `var(--base-${step})`
}

/** Tailwind nötr skalalarının ortak açıklıkları (skalalar arası fark ≤0.01). */
const STEP_LIGHTNESS = {
  50: 0.985,
  100: 0.968,
  200: 0.922,
  300: 0.87,
  400: 0.707,
  500: 0.553,
  600: 0.442,
  700: 0.371,
  800: 0.27,
  900: 0.207,
  950: 0.141,
}
