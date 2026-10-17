import { deriveBrandColorsFromPrimary } from './color-utils.js'

/**
 * Token haritasındaki `primary`'den `accent` ve `brandAccent` türetir (verilmiş değerleri korur).
 * @param {import('./tokens.js').UiThemeTokens} tokens
 * @param {{ force?: boolean }} [options] `force`: mevcut değerlerin üzerine yazar
 * @returns {import('./tokens.js').UiThemeTokens}
 */
export function withDerivedBrandTokens(tokens, options = {}) {
  if (!tokens || typeof tokens !== 'object' || !tokens.primary) return tokens
  const derived = deriveBrandColorsFromPrimary(String(tokens.primary))
  const next = { ...tokens }
  if (options.force || !next.accent) next.accent = derived.accent
  if (options.force || !next.brandAccent) next.brandAccent = derived.brandAccent
  return next
}
