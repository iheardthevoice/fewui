import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flush, mountUi } from '../mount.js'
import { clearToasts } from '../../src/toast-queue.js'

/**
 * Doküman örnekleri aynı zamanda duman testidir: her biri gerçek kurulumla bağlanır ve
 * hata ya da Vue uyarısı (bilinmeyen prop, geçersiz değer, çözülemeyen bileşen) vermemelidir.
 */
const examples = import.meta.glob('../../../../apps/docs/src/examples/*Example.vue')

describe('doküman örnekleri', () => {
  let errors
  beforeEach(() => {
    errors = []
    vi.spyOn(console, 'error').mockImplementation((...args) => errors.push(args.map(String).join(' ')))
    vi.spyOn(console, 'warn').mockImplementation((...args) => errors.push(args.map(String).join(' ')))
  })
  afterEach(() => clearToasts())

  const entries = Object.entries(examples)
  it('örnek dosyaları bulunur', () => {
    expect(entries.length).toBeGreaterThan(60)
  })

  it.each(entries.map(([path, load]) => [path.match(/([A-Za-z0-9]+)Example\.vue$/)[1], load]))(
    '%s hatasız ve uyarısız çizilir',
    async (_name, load) => {
      const component = (await load()).default
      const wrapper = mountUi(component, { locale: 'tr' })
      await flush(20)
      expect(wrapper.element).toBeTruthy()
      expect(errors).toEqual([])
    },
  )
})
