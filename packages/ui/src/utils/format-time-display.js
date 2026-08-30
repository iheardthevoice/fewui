/**
 * TimePicker tetikleyici metni — tema `timeFormat` ile uyumlu.
 */

/**
 * @param {number} value
 * @returns {string}
 */
function pad2(value) {
  return String(value).padStart(2, '0')
}

/**
 * @param {string} value `H:mm` veya `HH:mm`
 * @param {string} [format]
 * @returns {string}
 */
export function formatTimeString(value, format = 'HH:mm') {
  const match = /^(\d{1,2}):(\d{2})$/.exec(String(value || '').trim())
  if (!match) return String(value || '')

  const hour = Number(match[1])
  const minute = Number(match[2])
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
    return String(value || '')
  }

  if (format === 'HH:mm') {
    return `${pad2(hour)}:${pad2(minute)}`
  }

  if (format === 'h:mm a' || format === 'h:mm A') {
    const suffix = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12 || 12
    return `${hour12}:${pad2(minute)} ${suffix}`
  }

  return `${pad2(hour)}:${pad2(minute)}`
}

/**
 * @param {number} hour
 * @param {number} minute
 * @param {string} [format]
 * @returns {string}
 */
export function formatTimeParts(hour, minute, format = 'HH:mm') {
  return formatTimeString(`${hour}:${minute}`, format)
}
