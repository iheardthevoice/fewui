import { describe, expect, it, afterEach } from 'vitest'
import { h, nextTick, reactive } from 'vue'
import { flush, mountUi, press } from '../mount.js'
import Dialog from '../../src/components/Dialog.vue'
import ConfirmDialog from '../../src/components/ConfirmDialog.vue'
import Input from '../../src/components/Input.vue'
import FormRow from '../../src/components/FormRow.vue'
import Button from '../../src/components/Button.vue'
import { UI_FORM_DIRTY_KEY } from '../../src/utils/form-dirty.js'
import { UI_FORM_ERRORS_KEY, createFormErrorsContext } from '../../src/utils/form-errors.js'
import { confirmState, answerConfirm } from '../../src/confirm-state.js'
import { clearToasts, pushToast } from '../../src/toast-queue.js'

const mounted = []
const track = (w) => (mounted.push(w), w)

afterEach(() => {
  if (confirmState._resolve) answerConfirm(false)
  while (mounted.length) mounted.pop().unmount()
  document.body.innerHTML = ''
})

/** Kullanıcı yazımı: değer + `input` olayı. */
function type(el, value) {
  el.value = value
  el.dispatchEvent(new Event('input', { bubbles: true }))
}

const OptOut = {
  provide() {
    return { [UI_FORM_DIRTY_KEY]: null }
  },
  render() {
    return this.$slots.default?.()
  },
}

/**
 * Dialog + içinde gerçek `ui-input`; `withHost` onay katmanını da kurar.
 * @param {Record<string, unknown>} dialogProps
 */
function mountForm(dialogProps = {}, { withHost = true, body, footer } = {}) {
  const state = reactive({ open: true, name: '', search: '', saved: 0 })
  const Host = {
    render() {
      return [
        h(
          Dialog,
          {
            open: state.open,
            title: 'Form',
            'onUpdate:open': (v) => { state.open = v },
            ...dialogProps,
          },
          {
            default: () =>
              body
                ? body(state)
                : [
                    h(Input, { id: 'name', modelValue: state.name, 'onUpdate:modelValue': (v) => { state.name = v } }),
                    h(OptOut, null, {
                      default: () =>
                        h(Input, { id: 'search', modelValue: state.search, 'onUpdate:modelValue': (v) => { state.search = v } }),
                    }),
                  ],
            footer: () =>
              footer
                ? footer(state)
                : h(Button, { id: 'save', onClick: () => { state.saved += 1 } }, { default: () => 'Save' }),
          },
        ),
        withHost ? h(ConfirmDialog) : null,
      ]
    },
  }
  const wrapper = track(mountUi(Host))
  return { wrapper, state }
}

const formPanel = () => document.querySelector('.ui-dialog-root:not(.ui-dialog-root--confirm) [role="dialog"]')

describe('Dialog — kaydedilmemiş değişiklik koruması', () => {
  it('kirli formda Escape onay ister; onaylanınca kapanır', async () => {
    const { state } = mountForm({ guardUnsaved: true })
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    await nextTick()
    press(formPanel(), 'Escape')
    await flush(20)
    expect(state.open).toBe(true)
    expect(confirmState.open).toBe(true)
    expect(confirmState.title).toBe('Unsaved changes')
    expect(confirmState.color).toBe('danger')
    answerConfirm(true)
    await flush(30)
    expect(state.open).toBe(false)
  })

  it('vazgeçilince açık kalır ve içerik korunur', async () => {
    const { state } = mountForm({ guardUnsaved: true })
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    await nextTick()
    document.querySelector('.ui-dialog-backdrop').click()
    await flush(20)
    expect(confirmState.open).toBe(true)
    answerConfirm(false)
    await flush(30)
    expect(state.open).toBe(true)
    expect(document.getElementById('name').value).toBe('Ayran')
    // Hâlâ kirli: X düğmesi yeniden sorar.
    document.querySelector('.ui-dialog-header__close').click()
    await flush(20)
    expect(confirmState.open).toBe(true)
  })

  it('açık kalan dialog kaydedince (başarı toast\'ı) kirli sayılmaz; bilgi toast\'ı sıfırlamaz', async () => {
    const { state } = mountForm({ guardUnsaved: true })
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    await nextTick()
    pushToast({ title: 'Bilgi', color: 'info', group: false })
    press(formPanel(), 'Escape')
    await flush(20)
    expect(confirmState.open).toBe(true)
    answerConfirm(false)
    await flush(30)
    pushToast({ title: 'Tercihler kaydedildi', color: 'success', group: false })
    press(formPanel(), 'Escape')
    await flush(30)
    expect(confirmState.open).toBe(false)
    expect(state.open).toBe(false)
    clearToasts()
  })

  it('temiz formda sormadan kapanır', async () => {
    const { state } = mountForm({ guardUnsaved: true })
    await flush(20)
    press(formPanel(), 'Escape')
    await flush(30)
    expect(confirmState.open).toBe(false)
    expect(state.open).toBe(false)
  })

  it('programatik kapanış sormaz; yeniden açılış temizdir', async () => {
    const { state } = mountForm({ guardUnsaved: true })
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    await nextTick()
    state.open = false
    await flush(40)
    expect(confirmState.open).toBe(false)
    expect(formPanel()).toBeNull()
    state.open = true
    await flush(30)
    press(formPanel(), 'Escape')
    await flush(30)
    expect(confirmState.open).toBe(false)
    expect(state.open).toBe(false)
  })

  it('koruma kapalıyken (varsayılan) davranış değişmez', async () => {
    const { state } = mountForm()
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    await nextTick()
    press(formPanel(), 'Escape')
    await flush(30)
    expect(confirmState.open).toBe(false)
    expect(state.open).toBe(false)
  })

  it('kapsam dışı alt ağaç (arama alanı) formu kirletmez', async () => {
    const { state } = mountForm({ guardUnsaved: true })
    await flush(20)
    type(document.getElementById('search'), 'ara')
    await nextTick()
    expect(state.search).toBe('ara')
    press(formPanel(), 'Escape')
    await flush(30)
    expect(confirmState.open).toBe(false)
    expect(state.open).toBe(false)
  })

  it('onay katmanı kurulu değilse yine kapanır', async () => {
    const { state } = mountForm({ guardUnsaved: true }, { withHost: false })
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    await nextTick()
    press(formPanel(), 'Escape')
    await flush(30)
    expect(state.open).toBe(false)
  })

  it('`dirty` prop algılamayı ezer; `markPristine` işareti sıfırlar', async () => {
    const forced = mountForm({ guardUnsaved: true, dirty: true })
    await flush(20)
    press(formPanel(), 'Escape')
    await flush(20)
    expect(confirmState.open).toBe(true)
    answerConfirm(false)
    forced.wrapper.unmount()
    mounted.pop()
    document.body.innerHTML = ''

    const clean = mountForm({ guardUnsaved: true, dirty: false })
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    press(formPanel(), 'Escape')
    await flush(30)
    expect(confirmState.open).toBe(false)
    expect(clean.state.open).toBe(false)
    clean.wrapper.unmount()
    mounted.pop()
    document.body.innerHTML = ''

    const { wrapper, state } = mountForm({ guardUnsaved: true })
    await flush(20)
    type(document.getElementById('name'), 'Ayran')
    await nextTick()
    wrapper.findComponent(Dialog).vm.markPristine()
    press(formPanel(), 'Escape')
    await flush(30)
    expect(confirmState.open).toBe(false)
    expect(state.open).toBe(false)
  })

  it('tema varsayılanı `dialogGuardUnsaved` prop verilmeyen dialogu korur', async () => {
    const state = reactive({ open: true, name: '' })
    const Host = {
      render() {
        return [
          h(Dialog, { open: state.open, title: 'F', 'onUpdate:open': (v) => { state.open = v } }, {
            default: () => h(Input, { id: 'name', modelValue: state.name, 'onUpdate:modelValue': (v) => { state.name = v } }),
          }),
          h(ConfirmDialog),
        ]
      },
    }
    const { createI18n } = await import('vue-i18n')
    const { mount } = await import('@vue/test-utils')
    const { default: UiLib } = await import('../../src/index.js')
    const i18n = createI18n({ legacy: false, globalInjection: true, locale: 'en', fallbackLocale: 'en', messages: {} })
    track(mount(Host, {
      attachTo: document.body,
      global: { plugins: [i18n, [UiLib, { i18n, locales: ['en'], defaults: { dialogGuardUnsaved: true } }]] },
    }))
    await flush(20)
    type(document.getElementById('name'), 'x')
    await nextTick()
    press(formPanel(), 'Escape')
    await flush(20)
    expect(confirmState.open).toBe(true)
    expect(state.open).toBe(true)
  })

  it('iç içe dialogda değişiklik yalnız içteki dialogu kirletir', async () => {
    const state = reactive({ outer: true, inner: true, name: '' })
    const Host = {
      render() {
        return [
          h(Dialog, { open: state.outer, title: 'Outer', guardUnsaved: true, class: 'outer', 'onUpdate:open': (v) => { state.outer = v } }, {
            default: () =>
              h(Dialog, { open: state.inner, title: 'Inner', guardUnsaved: true, class: 'inner', 'onUpdate:open': (v) => { state.inner = v } }, {
                default: () => h(Input, { id: 'name', modelValue: state.name, 'onUpdate:modelValue': (v) => { state.name = v } }),
              }),
          }),
          h(ConfirmDialog),
        ]
      },
    }
    track(mountUi(Host))
    await flush(30)
    type(document.getElementById('name'), 'x')
    await nextTick()
    press(document.querySelector('.inner'), 'Escape')
    await flush(20)
    expect(confirmState.open).toBe(true)
    answerConfirm(true)
    await flush(40)
    expect(state.inner).toBe(false)
    press(document.querySelector('.outer'), 'Escape')
    await flush(40)
    expect(confirmState.open).toBe(false)
    expect(state.outer).toBe(false)
  })
})

describe('Dialog — Enter ile gönderim', () => {
  it('tek satırlı alanda Enter birincil eylemi tetikler', async () => {
    const { state } = mountForm({ submitOnEnter: true })
    await flush(20)
    const event = press(document.getElementById('name'), 'Enter')
    expect(state.saved).toBe(1)
    expect(event.defaultPrevented).toBe(true)
  })

  it('varsayılan kapalı; textarea, IME ve tüketilmiş Enter tetiklemez', async () => {
    const off = mountForm()
    await flush(20)
    press(document.getElementById('name'), 'Enter')
    expect(off.state.saved).toBe(0)
    off.wrapper.unmount()
    mounted.pop()
    document.body.innerHTML = ''

    const { state } = mountForm({ submitOnEnter: true }, {
      body: () => [
        h(Input, { id: 'name', modelValue: '' }),
        h('textarea', { id: 'note' }),
        h('div', { 'aria-expanded': 'true' }, [h('input', { id: 'combo', type: 'text' })]),
      ],
    })
    await flush(20)
    press(document.getElementById('note'), 'Enter')
    press(document.getElementById('name'), 'Enter', { isComposing: true })
    press(document.getElementById('combo'), 'Enter')
    const consume = (e) => e.preventDefault()
    document.addEventListener('keydown', consume, true)
    press(document.getElementById('name'), 'Enter')
    document.removeEventListener('keydown', consume, true)
    expect(state.saved).toBe(0)
    // Cmd/Ctrl+Enter her yerden çalışır.
    press(document.getElementById('note'), 'Enter', { ctrlKey: true })
    expect(state.saved).toBe(1)
    press(document.getElementById('note'), 'Enter', { metaKey: true })
    expect(state.saved).toBe(2)
  })

  it('`data-ui-dialog-primary` önceliklidir; devre dışı düğme tetiklenmez; birincil yoksa bir şey olmaz', async () => {
    const clicks = { marked: 0, solid: 0 }
    const a = mountForm({ submitOnEnter: true }, {
      footer: () => [
        h(Button, { variant: 'ghost', color: 'secondary', 'data-ui-dialog-primary': '', onClick: () => { clicks.marked += 1 } }, { default: () => 'Next' }),
        h(Button, { onClick: () => { clicks.solid += 1 } }, { default: () => 'Save' }),
      ],
    })
    await flush(20)
    press(document.getElementById('name'), 'Enter')
    expect(clicks).toEqual({ marked: 1, solid: 0 })
    a.wrapper.unmount()
    mounted.pop()
    document.body.innerHTML = ''

    const b = mountForm({ submitOnEnter: true }, {
      footer: (state) => [
        h(Button, { onClick: () => { state.saved += 1 } }, { default: () => 'First' }),
        h(Button, { disabled: true, onClick: () => { state.saved += 10 } }, { default: () => 'Disabled' }),
      ],
    })
    await flush(20)
    press(document.getElementById('name'), 'Enter')
    expect(b.state.saved).toBe(1)
    b.wrapper.unmount()
    mounted.pop()
    document.body.innerHTML = ''

    const c = mountForm({ submitOnEnter: true }, {
      footer: (state) => h(Button, { variant: 'ghost', color: 'secondary', onClick: () => { state.saved += 1 } }, { default: () => 'Other' }),
    })
    await flush(20)
    const event = press(document.getElementById('name'), 'Enter')
    expect(c.state.saved).toBe(0)
    expect(event.defaultPrevented).toBe(false)
  })
})

describe('FormRow — alan hatası bağlamı', () => {
  function mountRows() {
    const ctx = createFormErrorsContext()
    const state = reactive({ name: '', price: '', dirty: 0, showPrice: true })
    const Host = {
      provide() {
        return { [UI_FORM_ERRORS_KEY]: ctx, [UI_FORM_DIRTY_KEY]: () => { state.dirty += 1 } }
      },
      render() {
        return [
          h(FormRow, { label: 'Name', field: 'name' }, {
            default: () => h(Input, { modelValue: state.name, 'onUpdate:modelValue': (v) => { state.name = v } }),
          }),
          state.showPrice
            ? h(FormRow, { label: 'Price', field: 'price', error: 'Explicit' }, {
                default: () => h(Input, { modelValue: state.price, 'onUpdate:modelValue': (v) => { state.price = v } }),
              })
            : null,
        ]
      },
    }
    const wrapper = track(mountUi(Host))
    return { wrapper, ctx, state }
  }

  it('bağlamdaki mesajı gösterir ve kontrolü ARIA ile bağlar', async () => {
    const { wrapper, ctx } = mountRows()
    ctx.set({ name: ['Name is required'], price: 'Too low', phone: 'Bad phone' })
    await nextTick()
    const rows = wrapper.findAll('.ui-form-row')
    const error = rows[0].find('.ui-form-row-error')
    expect(error.text()).toBe('Name is required')
    const input = rows[0].find('input')
    expect(input.attributes('aria-invalid')).toBe('true')
    expect(input.attributes('aria-describedby')).toContain(error.attributes('id'))
    // Açık `error` prop'u bağlamı ezer.
    expect(rows[1].find('.ui-form-row-error').text()).toBe('Explicit')
    // Satırı olmayan alan özet listesine düşer.
    expect(ctx.unmapped).toEqual(['Bad phone'])
    expect(ctx.firstField).toBe('name')
  })

  it('kullanıcı alanı değiştirince mesaj silinir ve kirli bildirimi üst kaba iletilir', async () => {
    const { wrapper, ctx, state } = mountRows()
    ctx.set({ name: 'Name is required', price: 'Too low' })
    await nextTick()
    const input = wrapper.findAll('.ui-form-row')[0].find('input')
    type(input.element, 'Ayran')
    await nextTick()
    expect(wrapper.findAll('.ui-form-row')[0].find('.ui-form-row-error').exists()).toBe(false)
    expect(ctx.errors.name).toBeUndefined()
    expect(ctx.errors.price).toBe('Too low')
    expect(state.dirty).toBe(1)
  })

  it('satır kaldırılınca alan eşlenmemiş sayılır', async () => {
    const { ctx, state } = mountRows()
    ctx.set({ price: 'Too low' })
    await nextTick()
    expect(ctx.unmapped).toEqual([])
    state.showPrice = false
    await nextTick()
    expect(ctx.unmapped).toEqual(['Too low'])
  })

  it('bağlam yokken `field` etkisizdir', async () => {
    const wrapper = track(mountUi(FormRow, { props: { label: 'Name', field: 'name' }, slots: { default: () => h(Input, { modelValue: '' }) } }))
    await nextTick()
    expect(wrapper.find('.ui-form-row-error').exists()).toBe(false)
  })
})
