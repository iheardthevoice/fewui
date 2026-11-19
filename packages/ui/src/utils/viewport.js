import { ref } from 'vue'

/** Tailwind `lg` altı — telefon ve dikey tablet (web arayüzü ≥1024px) */
export const MOBILE_MAX_WIDTH_MEDIA = '(max-width: 1023px)'

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

/** Telefon — Tailwind `md` altı. Dikey tablet (768–1023) telefon sayılmaz. */
export const PHONE_MAX_WIDTH_MEDIA = '(max-width: 767px)'

export function isPhoneViewport() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia(PHONE_MAX_WIDTH_MEDIA).matches
}

/**
 * Birincil işaretçi parmak mı — dokunma hedefi ölçeği genişliğe değil giriş cihazına bağlıdır
 * (yatay tablet 1180px geniş ama dokunmatiktir). Ölçünün kendisi CSS'tedir:
 * `themes/_shared/global.css` → `@media (pointer: coarse)`.
 */
export const COARSE_POINTER_MEDIA = '(pointer: coarse)'

export function isCoarsePointer() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia(COARSE_POINTER_MEDIA).matches
}

/** Capacitor kabuğu (iOS / Android) — `index.html` / `native-app.js` `cap-native` sınıfı. */
export function isNativeShell() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('cap-native')
}

/** Capacitor iOS kabuğu — `index.html` / `native-app.js` `cap-ios` sınıfı. */
export function isNativeIos() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('cap-ios')
}
