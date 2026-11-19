import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import { mount } from '@vue/test-utils'
import { flush, mountUi, press } from '../mount.js'
import UiLib, { getUiMessages } from '../../src/index.js'
import Toast from '../../src/components/Toast.vue'
import DatePicker from '../../src/components/DatePicker.vue'
import { clearToasts, pushToast, toastState } from '../../src/toast-queue.js'

describe('Toast', () => {
  afterEach(() => clearToasts())
  const live = (mode) => document.querySelector(`.ui-toast-host [aria-live="${mode}"]`)

  it('canlı bölgeler toast gelmeden önce DOM\'dadır; duyuru tona göre bölgeye yazılır', async () => {
    mountUi(Toast)
    expect(live('polite')).toBeTruthy()
    expect(live('assertive')).toBeTruthy()

    pushToast({ title: 'Kaydedildi', description: 'Ürün güncellendi' })
    await nextTick()
    expect(live('polite').textContent).toContain('Kaydedildi. Ürün güncellendi')
    expect(live('assertive').textContent.trim()).toBe('')

    pushToast({ title: 'Bağlantı koptu', color: 'danger', group: false })
    await nextTick()
    expect(live('assertive').textContent).toContain('Bağlantı koptu')
  })

  it('eylem düğmesi geri çağırmayı çalıştırır ve toastı kapatır', async () => {
    mountUi(Toast)
    const onClick = vi.fn()
    pushToast({ title: 'Silindi', action: { label: 'Geri al', onClick } })
    await nextTick()
    const action = [...document.querySelectorAll('.ui-toast-action')].find((b) => b.textContent.includes('Geri al'))
    action.click()
    await nextTick()
    expect(onClick).toHaveBeenCalledOnce()
    expect(toastState.items).toHaveLength(0)
  })

  it('grup gerçek bir düğmeyle açılıp kapanır', async () => {
    mountUi(Toast)
    pushToast({ title: 'Bir' })
    pushToast({ title: 'İki' })
    await nextTick()
    const expand = document.querySelector('.ui-toast-host button[aria-expanded="false"]')
    expect(expand.getAttribute('aria-label')).toBe('Show 2 notifications')
    expand.click()
    await nextTick()
    expect(document.querySelectorAll('.ui-toast-expanded-stack .ui-alert--toast').length).toBe(2)
    document.querySelector('.ui-toast-host button[aria-expanded="true"]').click()
    await nextTick()
    expect(document.querySelector('.ui-toast-expanded-stack')).toBeNull()
  })
})

describe('DatePicker', () => {
  const weekdays = () => [...document.querySelectorAll('.ui-datepicker-weekdays span')].map((s) => s.textContent.trim())
  const firstCellLabel = () => document.querySelector('.ui-datepicker-grid [data-key]').getAttribute('aria-label')

  it('Türkçede hafta pazartesi başlar, ay düğmeleri çevrilidir', async () => {
    mountUi(DatePicker, { locale: 'tr', props: { modelValue: '2026-11-17', embedded: true } })
    await flush(10)
    expect(weekdays()[0]).toBe('Pzt')
    // Kasım 2026'nın ilk günü pazar: ızgara 26 Ekim pazartesiden başlar.
    expect(firstCellLabel()).toContain('26 Ekim 2026')
    const labels = [...document.querySelectorAll('.ui-datepicker-panel button[aria-label]')].map((b) => b.getAttribute('aria-label'))
    expect(labels).toContain('Önceki ay')
    expect(labels).toContain('Sonraki ay')
  })

  it('weekStart prop\'u dili ezer', async () => {
    mountUi(DatePicker, { locale: 'tr', props: { modelValue: '2026-11-17', embedded: true, weekStart: 0 } })
    await flush(10)
    expect(weekdays()[0]).toBe('Paz')
    expect(firstCellLabel()).toContain('1 Kasım 2026')
  })

  it('ızgara ay adıyla etiketlidir ve ok tuşlarıyla gün gezilir', async () => {
    mountUi(DatePicker, { locale: 'en', props: { modelValue: '2026-11-17', embedded: true } })
    await flush(10)
    const grid = document.querySelector('.ui-datepicker-grid')
    expect(grid.getAttribute('role')).toBe('group')
    expect(grid.getAttribute('aria-label')).toBe('November 2026')
    const roving = () => grid.querySelector('[tabindex="0"]').getAttribute('aria-label')
    expect(roving()).toContain('17 November 2026')
    press(grid, 'ArrowRight')
    await nextTick()
    expect(roving()).toContain('18 November 2026')
    press(grid, 'ArrowDown')
    await nextTick()
    expect(roving()).toContain('25 November 2026')
    press(grid, 'Home')
    await nextTick()
    expect(roving()).toContain('Monday')
  })
})

describe('dil yedeği', () => {
  it('paketi olmayan dil İngilizce metinlerle çalışır', () => {
    expect(getUiMessages('de').ui.dialog.close).toBe('Close')
    expect(getUiMessages().ui.dialog.close).toBe('Close')
    expect(getUiMessages('tr').ui.dialog.close).toBe('Kapat')

    const i18n = createI18n({ legacy: false, locale: 'de', messages: {} })
    mount({ template: '<span />' }, { global: { plugins: [i18n, [UiLib, { i18n, locales: ['de'] }]] } })
    expect(i18n.global.getLocaleMessage('de').ui.dialog.close).toBe('Close')
  })

  it('uygulamanın kendi çevirisini ezmez', () => {
    const i18n = createI18n({ legacy: false, locale: 'de', messages: { de: { ui: { dialog: { close: 'Schließen' } } } } })
    mount({ template: '<span />' }, { global: { plugins: [i18n, [UiLib, { i18n, locales: ['de'] }]] } })
    expect(i18n.global.getLocaleMessage('de').ui.dialog.close).toBe('Schließen')
  })
})
