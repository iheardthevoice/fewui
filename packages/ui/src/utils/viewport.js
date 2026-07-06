import { ref } from 'vue'

/** Tailwind `md` ile uyumlu mobil üst sınır */
export const MOBILE_MAX_WIDTH_MEDIA = '(max-width: 767px)'

const mobileViewport = ref(false)

function syncMobileViewport() {
  if (typeof window === 'undefined') return
  mobileViewport.value = window.matchMedia(MOBILE_MAX_WIDTH_MEDIA).matches
}

if (typeof window !== 'undefined') {
  syncMobileViewport()
  const mediaQuery = window.matchMedia(MOBILE_MAX_WIDTH_MEDIA)
  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', syncMobileViewport)
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(syncMobileViewport)
  }
}

export function isMobileViewport() {
  return mobileViewport.value
}
