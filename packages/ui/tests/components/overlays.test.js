import { describe, expect, it } from 'vitest'
import { h, nextTick } from 'vue'
import { flush, mountUi, press } from '../mount.js'
import Dialog from '../../src/components/Dialog.vue'
import Sheet from '../../src/components/Sheet.vue'
import Tooltip from '../../src/components/Tooltip.vue'
import Select from '../../src/components/Select.vue'

const dialogEl = () => document.querySelector('[role="dialog"][aria-modal="true"]')

describe('Dialog', () => {
  it('başlık ve açıklamayı ARIA ile bağlar', async () => {
    mountUi(Dialog, { props: { open: true, title: 'Ürün', description: 'Ayrıntılar' } })
    await flush(20)
    const panel = dialogEl()
    expect(panel).toBeTruthy()
    expect(document.getElementById(panel.getAttribute('aria-labelledby')).textContent).toContain('Ürün')
    expect(document.getElementById(panel.getAttribute('aria-describedby')).textContent).toContain('Ayrıntılar')
  })

  it('Escape ile kapanma ister; closeOnEscape=false iken istemez', async () => {
    const wrapper = mountUi(Dialog, { props: { open: true, title: 'A' } })
    await flush(20)
    press(dialogEl(), 'Escape')
    expect(wrapper.emitted('update:open')?.[0]).toEqual([false])

    const locked = mountUi(Dialog, { props: { open: true, title: 'B', closeOnEscape: false } })
    await flush(20)
    press([...document.querySelectorAll('[role="dialog"]')].at(-1), 'Escape')
    expect(locked.emitted('update:open')).toBeUndefined()
  })

  it('içteki katmanın tükettiği Escape ile kapanmaz', async () => {
    const wrapper = mountUi(Dialog, { props: { open: true, title: 'A' } })
    await flush(20)
    const event = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true })
    // Açık popover / select tuşu capture aşamasında tüketir.
    const consume = (e) => e.preventDefault()
    document.addEventListener('keydown', consume, true)
    dialogEl().dispatchEvent(event)
    document.removeEventListener('keydown', consume, true)
    expect(wrapper.emitted('update:open')).toBeUndefined()
  })

  it('odak arkadaki sayfaya kaçarsa panele geri çağırır; kapanınca serbest bırakır', async () => {
    const behind = document.createElement('div')
    behind.setAttribute('data-v-app', '')
    behind.innerHTML = '<input id="behind" />'
    document.body.appendChild(behind)

    const wrapper = mountUi(Dialog, { props: { open: true, title: 'A' } })
    await flush(20)
    document.getElementById('behind').focus()
    await nextTick()
    expect(dialogEl().contains(document.activeElement)).toBe(true)

    await wrapper.setProps({ open: false })
    await flush(50)
    document.getElementById('behind').focus()
    expect(document.activeElement.id).toBe('behind')
  })

  it('açıkken arka plan kaydırmasını kilitler, kapanınca açar', async () => {
    const wrapper = mountUi(Dialog, { props: { open: true, title: 'A' } })
    await flush(20)
    expect(document.documentElement.style.overflow).toBe('hidden')
    await wrapper.setProps({ open: false })
    await flush(50)
    expect(document.documentElement.style.overflow).toBe('')
  })
})

describe('Sheet', () => {
  it('modal sheet kaydırmayı kilitler; overlay=false kilitlemez', async () => {
    const wrapper = mountUi(Sheet, { props: { open: false, title: 'Filtre' } })
    await wrapper.setProps({ open: true })
    await flush(20)
    expect(document.documentElement.style.overflow).toBe('hidden')
    wrapper.unmount()
    expect(document.documentElement.style.overflow).toBe('')

    const plain = mountUi(Sheet, { props: { open: false, title: 'Yan', overlay: false } })
    await plain.setProps({ open: true })
    await flush(20)
    expect(document.documentElement.style.overflow).toBe('')
  })
})

describe('Tooltip', () => {
  const withButton = (attrs = {}) => ({ default: () => h('button', { id: 'target', ...attrs }, 'Hedef') })

  it('açıkken tetikleyiciyi aria-describedby ile bağlar, kapanınca kaldırır', async () => {
    const wrapper = mountUi(Tooltip, { props: { label: 'Açıklama' }, slots: withButton() })
    await wrapper.trigger('mouseenter')
    await flush(10)
    const tip = document.querySelector('[role="tooltip"]')
    expect(tip.textContent).toContain('Açıklama')
    expect(document.getElementById('target').getAttribute('aria-describedby')).toBe(tip.id)

    await wrapper.trigger('mouseleave')
    await flush(10)
    expect(document.getElementById('target').hasAttribute('aria-describedby')).toBe(false)
  })

  it('metin erişilebilir adla aynıysa çift okunmasın diye bağlamaz', async () => {
    const wrapper = mountUi(Tooltip, { props: { label: 'Sil' }, slots: withButton({ 'aria-label': 'Sil' }) })
    await wrapper.trigger('mouseenter')
    await flush(10)
    expect(document.getElementById('target').hasAttribute('aria-describedby')).toBe(false)
  })

  it('açık dialogun üstünde çizilir', async () => {
    mountUi(Dialog, { props: { open: true, title: 'A' } })
    await flush(20)
    const wrapper = mountUi(Tooltip, { props: { label: 'Açıklama' }, slots: withButton() })
    await wrapper.trigger('mouseenter')
    await flush(10)
    const dialogZ = Number(document.querySelector('.ui-dialog-root').style.zIndex)
    const tipZ = Number(document.querySelector('[role="tooltip"]').style.zIndex)
    expect(tipZ).toBeGreaterThan(dialogZ)
  })
})

describe('Select', () => {
  const options = [
    { value: 'a', label: 'Ankara' },
    { value: 'b', label: 'Bursa' },
    { value: 'c', label: 'Bolu' },
    { value: 'i', label: 'İzmir' },
  ]
  const trigger = () => document.querySelector('[aria-haspopup="listbox"]')
  const activeLabel = () => document.getElementById(trigger().getAttribute('aria-activedescendant'))?.textContent.trim()

  it('tetikleyici listbox ARIA özniteliklerini taşır', async () => {
    mountUi(Select, { props: { modelValue: 'a', options } })
    await flush(10)
    expect(trigger().getAttribute('aria-expanded')).toBe('false')
    trigger().click()
    await flush(30)
    expect(trigger().getAttribute('aria-expanded')).toBe('true')
    expect(document.querySelector('[role="listbox"]')).toBeTruthy()
    expect(document.querySelectorAll('[role="option"]').length).toBe(4)
  })

  it('açık listede yazarak arama vurguyu taşır (Türkçe İ dahil)', async () => {
    mountUi(Select, { props: { modelValue: 'a', options } })
    await flush(10)
    trigger().click()
    await flush(30)
    press(trigger(), 'b')
    await nextTick()
    expect(activeLabel()).toBe('Bursa')
    press(trigger(), 'b')
    await nextTick()
    expect(activeLabel()).toBe('Bolu')
    await flush(650)
    press(trigger(), 'i')
    await nextTick()
    expect(activeLabel()).toBe('İzmir')
  })

  it('ok tuşlarıyla gezer, Enter ile seçer', async () => {
    const wrapper = mountUi(Select, { props: { modelValue: 'a', options } })
    await flush(10)
    trigger().click()
    await flush(30)
    press(trigger(), 'ArrowDown')
    await nextTick()
    press(trigger(), 'Enter')
    await nextTick()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b'])
  })
})
