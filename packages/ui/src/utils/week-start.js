/** `Intl.Locale` hafta bilgisi vermeyen ortamlar için: haftası pazar başlayan başlıca bölgeler. */
const SUNDAY_REGIONS = new Set(['US', 'CA', 'MX', 'BR', 'JP', 'KR', 'IL', 'IN', 'PH', 'TW', 'HK', 'ZA', 'AU'])
const SATURDAY_REGIONS = new Set(['AE', 'AF', 'BH', 'DZ', 'EG', 'IQ', 'IR', 'JO', 'KW', 'LY', 'OM', 'QA', 'SA', 'SD', 'SY'])

/**
 * Dilin haftayı başlattığı gün — `Date#getDay()` ölçeğinde (0 pazar … 6 cumartesi).
 * `tr`, `de`, `en-GB` → 1 (pazartesi); `en-US` → 0. Bilinmeyen dil ISO haftasına (pazartesi) düşer.
 * @param {string} [locale] BCP 47 dil etiketi
 * @returns {number}
 */
export function resolveWeekStart(locale) {
  try {
    const loc = new Intl.Locale(String(locale || 'en-GB').replace(/_/g, '-'))
    const info = typeof loc.getWeekInfo === 'function' ? loc.getWeekInfo() : loc.weekInfo
    if (info && Number.isFinite(info.firstDay)) return info.firstDay % 7
    const region = loc.maximize?.().region
    if (SUNDAY_REGIONS.has(region)) return 0
    if (SATURDAY_REGIONS.has(region)) return 6
  } catch {
    // Geçersiz etiket — ISO haftası.
  }
  return 1
}

/**
 * @param {unknown} value `weekStart` prop'u
 * @param {string} [locale]
 * @returns {number} 0–6
 */
export function normalizeWeekStart(value, locale) {
  const n = Number(value)
  if (value != null && value !== '' && Number.isInteger(n) && n >= 0 && n <= 6) return n
  return resolveWeekStart(locale)
}
