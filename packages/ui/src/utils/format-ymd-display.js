/**
 * DatePicker / DateRangePicker tetikleyici metni — örn. "7 Mayıs 2026" / "7 May 2026".
 */

/**
 * @param {unknown} locale
 * @returns {string}
 */
export function resolveDateDisplayLocale(locale) {
  const raw =
    typeof locale === 'object' && locale != null && 'value' in locale
      ? locale.value
      : locale
  return raw === 'en' || raw === 'en-GB' || raw === 'en-US' ? 'en-GB' : 'tr-TR'
}

/**
 * @param {Date} date
 * @param {string} [locale]
 * @returns {string}
 */
export function formatDateDisplay(date, locale = 'tr-TR') {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString(resolveDateDisplayLocale(locale), {
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
export function formatYmdDisplay(ymd, locale = 'tr-TR') {
  if (ymd == null || ymd === '') return ''
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(ymd).trim())
  if (!m) return ''
  const y = Number(m[1])
  const mo = Number(m[2]) - 1
  const da = Number(m[3])
  const d = new Date(y, mo, da)
  if (d.getFullYear() !== y || d.getMonth() !== mo || d.getDate() !== da) return ''
  return formatDateDisplay(d, locale)
}
