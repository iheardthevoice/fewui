import { describe, expect, it } from 'vitest'
import { h, nextTick } from 'vue'
import { flush, mountUi, press } from '../mount.js'
import Accordion from '../../src/components/Accordion.vue'
import AccordionItem from '../../src/components/AccordionItem.vue'
import Pagination from '../../src/components/Pagination.vue'
import Slider from '../../src/components/Slider.vue'
import Command from '../../src/components/Command.vue'
import Dropdown from '../../src/components/Dropdown.vue'
import Breadcrumb from '../../src/components/Breadcrumb.vue'

describe('Accordion', () => {
  const mountAccordion = (props = {}) =>
    mountUi(Accordion, {
      props,
      slots: {
        default: () => [
          h(AccordionItem, { value: 'a', title: 'Teslimat' }, () => 'A içerik'),
          h(AccordionItem, { value: 'b', title: 'Ödeme' }, () => 'B içerik'),
        ],
      },
    })
  const headers = () => [...document.querySelectorAll('button[aria-controls]')]

  it('başlık düğmesi paneli aria-expanded / aria-controls ile yönetir', async () => {
    mountAccordion()
    await flush(10)
    const [first, second] = headers()
    expect(first.getAttribute('aria-expanded')).toBe('false')
    first.click()
    await nextTick()
    expect(first.getAttribute('aria-expanded')).toBe('true')
    const panel = document.getElementById(first.getAttribute('aria-controls'))
    expect(panel.getAttribute('role')).toBe('region')
    // Tekli modda diğerini açmak ilkini kapatır.
    second.click()
    await nextTick()
    expect(first.getAttribute('aria-expanded')).toBe('false')
    expect(second.getAttribute('aria-expanded')).toBe('true')
  })

  it('multiple iken birden çok panel açık kalır ve v-model dizi taşır', async () => {
    const wrapper = mountAccordion({ multiple: true, modelValue: [] })
    await flush(10)
    headers()[0].click()
    await nextTick()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([['a']])
  })

  it('ok tuşları başlıklar arasında odağı taşır', async () => {
    mountAccordion()
    await flush(10)
    const [first, second] = headers()
    first.focus()
    press(first, 'ArrowDown')
    await nextTick()
    expect(document.activeElement).toBe(second)
    press(second, 'Home')
    await nextTick()
    expect(document.activeElement).toBe(first)
  })
})

describe('Pagination', () => {
  it('bulunulan sayfayı işaretler ve sayfa değişimini yayar', async () => {
    const wrapper = mountUi(Pagination, { props: { modelValue: 5, total: 200, pageSize: 10 } })
    await flush(10)
    const current = document.querySelector('[aria-current="page"]')
    expect(current.textContent.trim()).toBe('5')
    expect(document.querySelector('nav').getAttribute('aria-label')).toBe('Pagination')
    document.querySelector('[aria-label="Next page"]').click()
    await nextTick()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([6])
  })

  it('ilk sayfada önceki düğmesi pasiftir', async () => {
    mountUi(Pagination, { props: { modelValue: 1, pageCount: 3 } })
    await flush(10)
    expect(document.querySelector('[aria-label="Previous page"]').disabled).toBe(true)
  })
})

describe('Slider range', () => {
  it('iki tutamaç çizer; klavye değeri değiştirir ve tutamaçlar birbirini geçemez', async () => {
    const wrapper = mountUi(Slider, { props: { range: true, modelValue: [20, 60], min: 0, max: 100, step: 5 } })
    await flush(10)
    const thumbs = [...document.querySelectorAll('[role="slider"]')]
    expect(thumbs).toHaveLength(2)
    expect(thumbs[0].getAttribute('aria-valuenow')).toBe('20')
    expect(thumbs[0].getAttribute('aria-valuemax')).toBe('60')
    press(thumbs[0], 'ArrowRight')
    await nextTick()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([[25, 60]])
    press(thumbs[1], 'Home')
    await nextTick()
    const last = wrapper.emitted('update:modelValue').at(-1)[0]
    expect(last[1]).toBeGreaterThanOrEqual(last[0])
  })

  it('range kapalıyken yerel range girişi kalır', async () => {
    mountUi(Slider, { props: { modelValue: 30 } })
    await flush(10)
    expect(document.querySelector('input[type="range"]')).toBeTruthy()
    expect(document.querySelector('[role="slider"]')).toBeNull()
  })
})

describe('Command', () => {
  const items = [
    { id: 'new', label: 'Yeni ürün', keywords: ['ekle'] },
    { id: 'drinks', label: 'İçecekler' },
    { id: 'report', label: 'Gün sonu raporu' },
  ]
  const options = () => [...document.querySelectorAll('[role="option"]')].map((o) => o.textContent.trim())

  it('combobox olarak süzer; Türkçe harf ve anahtar kelime eşleşir', async () => {
    const wrapper = mountUi(Command, { props: { inline: true, items } })
    await flush(10)
    const input = document.querySelector('[role="combobox"]')
    expect(input.getAttribute('aria-controls')).toBeTruthy()
    expect(options()).toHaveLength(3)

    await wrapper.find('[role="combobox"]').setValue('icecek')
    await nextTick()
    expect(options().join()).toContain('İçecekler')
    expect(options()).toHaveLength(1)

    await wrapper.find('[role="combobox"]').setValue('ekle')
    await nextTick()
    expect(options().join()).toContain('Yeni ürün')
  })

  it('Enter etkin seçeneği seçer', async () => {
    const wrapper = mountUi(Command, { props: { inline: true, items } })
    await flush(10)
    const input = document.querySelector('[role="combobox"]')
    press(input, 'ArrowDown')
    await nextTick()
    press(input, 'Enter')
    await nextTick()
    expect(wrapper.emitted('select')).toHaveLength(1)
  })
})

describe('Dropdown', () => {
  it('onay öğesi menuitemcheckbox rolü alır ve menüyü kapatmadan yeni değeri bildirir', async () => {
    const wrapper = mountUi(Dropdown, {
      props: { open: true, items: [{ label: 'Izgara', type: 'checkbox', checked: false }, { label: 'Sil' }] },
      slots: { trigger: () => h('button', 'Aç') },
    })
    await flush(40)
    const box = document.querySelector('[role="menuitemcheckbox"]')
    expect(box.getAttribute('aria-checked')).toBe('false')
    box.click()
    await nextTick()
    const [item, state] = wrapper.emitted('select')[0]
    expect(item.label).toBe('Izgara')
    expect(state.checked).toBe(true)
    expect(document.querySelector('[role="menu"]')).toBeTruthy()
  })
})

describe('Dropdown hizası', () => {
  const insetLabels = () => [...document.querySelectorAll('.ui-dropdown-item--inset')].map((el) => el.textContent.trim())
  const open = (items) => mountUi(Dropdown, { props: { open: true, items }, slots: { trigger: () => h('button', 'Aç') } })

  it('ikonlu ve ikonsuz öğeler karışıksa ikonsuz öğe ikon sütunu kadar içeriden başlar', async () => {
    open([{ label: 'Düzenle', icon: 'pen' }, { label: 'Çoğalt' }, { label: 'Sil', color: 'danger' }])
    await flush(40)
    expect(insetLabels()).toEqual(['Çoğalt', 'Sil'])
  })

  it('tümü ikonlu ya da tümü ikonsuz menüde boşluk eklenmez', async () => {
    open([{ label: 'Düzenle' }, { label: 'Sil' }])
    await flush(40)
    expect(insetLabels()).toEqual([])
    open([{ label: 'Düzenle', icon: 'pen' }, { label: 'Sil', icon: 'trash' }])
    await flush(40)
    expect(insetLabels()).toEqual([])
  })
})

describe('Breadcrumb', () => {
  it('son öğeyi aria-current ile işaretler', async () => {
    mountUi(Breadcrumb, { props: { items: [{ label: 'Menü', href: '/menu' }, { label: 'Ürünler' }] } })
    await flush(10)
    expect(document.querySelector('nav').getAttribute('aria-label')).toBe('Breadcrumb')
    expect(document.querySelector('[aria-current="page"]').textContent).toContain('Ürünler')
    expect(document.querySelector('a[href="/menu"]')).toBeTruthy()
  })
})

describe('ListGroup', () => {
  it('etiketi listenin adı yapar, kartı role=list ile çizer ve footer gösterir', async () => {
    const { default: ListGroup } = await import('../../src/components/ListGroup.vue')
    const { default: ListItem } = await import('../../src/components/ListItem.vue')
    const wrapper = mountUi(ListGroup, {
      props: { label: 'Hesap', footer: 'Açıklama' },
      slots: {
        default: () => [
          h(ListItem, { tag: 'div', title: 'Güvenlik', icon: 'lock' }),
          h(ListItem, { tag: 'div', title: 'Oturumlar' }),
        ],
      },
    })
    await flush(5)
    const section = wrapper.element
    const label = section.querySelector('.ui-list-group-label')
    expect(section.getAttribute('aria-labelledby')).toBe(label.id)
    const card = section.querySelector('.ui-list-group-card')
    expect(card.getAttribute('role')).toBe('list')
    expect(card.querySelectorAll('[role="listitem"]').length).toBe(2)
    expect(section.querySelector('.ui-list-group-footer').textContent.trim()).toBe('Açıklama')
  })

  it('etiket yokken ariaLabel karta yazılır', async () => {
    const { default: ListGroup } = await import('../../src/components/ListGroup.vue')
    const wrapper = mountUi(ListGroup, { props: { ariaLabel: 'Kategoriler' } })
    await flush(2)
    expect(wrapper.element.hasAttribute('aria-labelledby')).toBe(false)
    expect(wrapper.element.querySelector('.ui-list-group-card').getAttribute('aria-label')).toBe('Kategoriler')
  })
})

describe('NumberStepper', () => {
  it('artırır, azaltır ve sınırda düğmeyi kapatır', async () => {
    const { default: NumberStepper } = await import('../../src/components/NumberStepper.vue')
    const wrapper = mountUi(NumberStepper, { props: { modelValue: 1, min: 1, max: 2, ariaLabel: 'Kişi' } })
    await flush(2)
    const [dec, inc] = wrapper.element.querySelectorAll('button')
    expect(wrapper.element.getAttribute('role')).toBe('group')
    expect(dec.disabled).toBe(true)
    inc.click()
    await nextTick()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([2])
    await wrapper.setProps({ modelValue: 2 })
    expect(inc.disabled).toBe(true)
  })
})

describe('ListItem clearable', () => {
  it('değer varken temizle düğmesi çizer ve clear yayar; chevron çizmez', async () => {
    const { default: ListItem } = await import('../../src/components/ListItem.vue')
    const wrapper = mountUi(ListItem, { props: { tag: 'div', title: 'Masa', value: 'B4', interactive: true, clearable: true } })
    await flush(2)
    const clear = wrapper.element.querySelector('.ui-list-item-clear')
    expect(clear).toBeTruthy()
    expect(wrapper.element.querySelector('.ui-list-item-chevron')).toBeNull()
    clear.click()
    await nextTick()
    expect(wrapper.emitted('clear')).toHaveLength(1)
    expect(wrapper.emitted('click')).toBeUndefined()
    await wrapper.setProps({ value: '' })
    expect(wrapper.element.querySelector('.ui-list-item-clear')).toBeNull()
  })
})

describe('FormRow inset', () => {
  it('inset sınıfını verir, etiketi kontrole bağlar', async () => {
    const { default: FormRow } = await import('../../src/components/FormRow.vue')
    const { default: Input } = await import('../../src/components/Input.vue')
    const wrapper = mountUi(FormRow, {
      props: { variant: 'inset', label: 'Fiyat' },
      slots: { default: ({ controlId }) => h(Input, { id: controlId, modelValue: '' }) },
    })
    await flush(2)
    expect(wrapper.element.classList.contains('ui-form-row--inset')).toBe(true)
    const label = wrapper.element.querySelector('label')
    expect(label.textContent.trim()).toBe('Fiyat')
    expect(wrapper.element.querySelector(`#${label.getAttribute('for')}`)).toBeTruthy()
  })
})
