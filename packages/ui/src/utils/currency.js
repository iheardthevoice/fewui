/** ISO 4217 ve ayarlar ekranındaki sembol değerlerini normalize eder. */
const SYMBOL_TO_ISO = {
  '₺': 'TRY',
  $: 'USD',
  '€': 'EUR',
  TRY: 'TRY',
  USD: 'USD',
  EUR: 'EUR',
}

const ISO_TO_SYMBOL = {
  TRY: '₺',
  USD: '$',
  EUR: '€',
}

/**
 * @param {string|null|undefined} raw Restoran `currency` alanı (TRY, ₺, …)
 * @param {string} [fallback='TRY'] Seeder varsayılanı
 * @returns {'TRY'|'USD'|'EUR'}
 */
export function resolveCurrencyCode(raw, fallback = 'TRY') {
  if (raw == null || String(raw).trim() === '') {
    return fallback in ISO_TO_SYMBOL ? fallback : 'TRY'
  }
  const key = String(raw).trim()
  if (SYMBOL_TO_ISO[key]) {
    return SYMBOL_TO_ISO[key]
  }
  const upper = key.toUpperCase()
  if (ISO_TO_SYMBOL[upper]) {
    return upper
  }
  return fallback in ISO_TO_SYMBOL ? fallback : 'TRY'
}

/**
 * @param {string|null|undefined} codeOrSymbol
 * @returns {string}
 */
export function getCurrencySymbol(codeOrSymbol) {
  const code = resolveCurrencyCode(codeOrSymbol)
  if (ISO_TO_SYMBOL[code]) {
    return ISO_TO_SYMBOL[code]
  }
  try {
    const parts = new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: code,
      currencyDisplay: 'narrowSymbol',
    }).formatToParts(0)
    const part = parts.find((p) => p.type === 'currency')
    return part?.value?.trim() || code
  } catch {
    return code
  }
}

/**
 * @param {number|string|null|undefined} amount
 * @param {string|null|undefined} currencyCodeOrSymbol
 * @param {string} [locale='tr-TR']
 */
export function formatCurrencyAmount(amount, currencyCodeOrSymbol, locale = 'tr-TR') {
  const value = Number(amount) || 0
  const code = resolveCurrencyCode(currencyCodeOrSymbol)
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: code }).format(value)
  } catch {
    return `${getCurrencySymbol(code)}${value.toFixed(2)}`
  }
}

/**
 * Para girişi için sadece rakam ve tek ondalık ayırıcı.
 * @param {string|number|null|undefined} value
 */
export function sanitizeMoneyInput(value) {
  let s = String(value ?? '').replace(',', '.')
  s = s.replace(/[^\d.]/g, '')
  const dot = s.indexOf('.')
  if (dot !== -1) {
    const intPart = s.slice(0, dot)
    const frac = s.slice(dot + 1).replace(/\./g, '')
    s = `${intPart}.${frac}`
  }
  return s
}

/**
 * Locale ayırıcılarını çözer. Desteklenmeyen ortamlarda güvenli varsayılan kullanır.
 * @param {string} locale
 */
export function getMoneySeparators(locale = 'tr-TR') {
  try {
    const parts = new Intl.NumberFormat(locale).formatToParts(12345.6)
    return {
      group: parts.find((part) => part.type === 'group')?.value || '.',
      decimal: parts.find((part) => part.type === 'decimal')?.value || ',',
    }
  } catch {
    return { group: '.', decimal: ',' }
  }
}

/**
 * Locale ile gösterilen para girişini API'ye uygun noktalı ondalık metne çevirir.
 * @param {string|number|null|undefined} value
 * @param {string} locale
 */
export function parseLocalizedMoneyInput(value, locale = 'tr-TR') {
  const { group, decimal } = getMoneySeparators(locale)
  let text = String(value ?? '').trim()
  if (!text) return ''

  text = text.split(group).join('')
  text = text.split(decimal).join('.')
  return sanitizeMoneyInput(text)
}

/**
 * API'ye uygun para değerini, yazım devam ederken ondalık kısmı koruyarak gruplar.
 * @param {string|number|null|undefined} value
 * @param {string} locale
 */
export function formatMoneyInput(value, locale = 'tr-TR') {
  const raw = sanitizeMoneyInput(value)
  if (!raw) return ''

  const { group, decimal } = getMoneySeparators(locale)
  const [integerRaw = '', fraction] = raw.split('.')
  const integer = integerRaw.replace(/^0+(?=\d)/, '') || '0'
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, group)

  return fraction === undefined ? grouped : `${grouped}${decimal}${fraction}`
}
