import { afterEach } from 'vitest'
import { config, enableAutoUnmount } from '@vue/test-utils'
import { resetUiIds } from '../src/utils/ui-id.js'

/** Animasyon beklemeden katman aç/kapa: bileşenler `prefers-reduced-motion` altında anında geçer. */
window.matchMedia = (query) => ({
  matches: query.includes('prefers-reduced-motion'),
  media: query,
  addEventListener() {},
  removeEventListener() {},
  addListener() {},
  removeListener() {},
})

if (!window.ResizeObserver) {
  window.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}

/** `$t` yokken bileşenler İngilizce yedeğe düşer; testler bu metinleri bekler. */
config.global.stubs = { transition: false, teleport: false }

enableAutoUnmount(afterEach)

afterEach(() => {
  document.body.innerHTML = ''
  document.documentElement.removeAttribute('style')
  document.documentElement.className = ''
  resetUiIds()
})
