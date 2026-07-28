import { reactive, readonly } from 'vue'
import { resolveCurrencyCode } from './utils/currency.js'

const PRICE_FORMATS = ['tr-TR', 'en-US']

const state = reactive({
  currency: 'TRY',
  format: 'tr-TR',
})

function resolvePriceFormat(value, fallback = state.format) {
  return PRICE_FORMATS.includes(value) ? value : fallback
}

/**
 * `ui-price-input` için uygulama genelindeki para birimi ve yazım biçimini günceller.
 * Bileşen prop'ları bu varsayılanları kullanım bazında geçersiz kılabilir.
 */
export function setPriceInputConfig(config = {}) {
  if (config.currency != null && String(config.currency).trim() !== '') {
    state.currency = resolveCurrencyCode(config.currency)
  }

  const format = config.format ?? config.locale
  if (format != null) {
    state.format = resolvePriceFormat(format)
  }
}

export function getPriceInputConfig() {
  return readonly(state)
}

export { PRICE_FORMATS }
