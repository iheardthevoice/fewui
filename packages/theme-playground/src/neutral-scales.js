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
