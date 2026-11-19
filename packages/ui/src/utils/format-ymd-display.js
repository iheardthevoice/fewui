/**
 * DatePicker / DateRangePicker tetikleyici metni — örn. "7 Mayıs 2026" / "7 May 2026".
 */

const FALLBACK_DATE_LOCALE = 'en-GB'

/**
 * Tarih gösterim dili. Türkçe ve İngilizce sabit biçime bağlanır; `Intl`'in tanıdığı diğer diller
 * kendi dilinde yazılır (`de` → "17. November 2026"). Boş ya da tanınmayan dil İngilizceye düşer.
 * @param {unknown} locale
 * @returns {string}
 */
export function resolveDateDisplayLocale(locale) {
  const raw =
    typeof locale === 'object' && locale != null && 'value' in locale
      ? locale.value
      : locale
  const tag = typeof raw === 'string' ? raw.trim().replace(/_/g, '-') : ''
  if (!tag) return FALLBACK_DATE_LOCALE
  const lower = tag.toLowerCase()
  if (lower === 'tr' || lower.startsWith('tr-')) return 'tr-TR'
  if (lower === 'en' || lower === 'en-gb' || lower === 'en-us') return 'en-GB'
  try {
    if (Intl.DateTimeFormat.supportedLocalesOf(tag).length > 0) return tag
  } catch {
    // Geçersiz dil etiketi — İngilizceye düş.
  }
  return FALLBACK_DATE_LOCALE
}

/**
 * @param {Date} date
 * @param {string} [locale]
 * @returns {string}
 */
export function formatDateDisplay(date, locale = FALLBACK_DATE_LOCALE, format) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return ''
  const loc = resolveDateDisplayLocale(locale)
  if (format === 'd MMM yyyy') {
    return date.toLocaleDateString(loc, { day: 'numeric', month: 'short', year: 'numeric' })
  }
  return date.toLocaleDateString(loc, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * @param {string} ymd `YYYY-MM-DD`
 * @param {string} [locale]
 * @returns {string}
 */
export function formatYmdDisplay(ymd, locale = FALLBACK_DATE_LOCALE, format) {
  if (ymd == null || ymd === '') return ''
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(ymd).trim())
  if (!m) return ''
  const y = Number(m[1])
  const mo = Number(m[2]) - 1
  const da = Number(m[3])
  const d = new Date(y, mo, da)
  if (d.getFullYear() !== y || d.getMonth() !== mo || d.getDate() !== da) return ''
  return formatDateDisplay(d, locale, format)
}
