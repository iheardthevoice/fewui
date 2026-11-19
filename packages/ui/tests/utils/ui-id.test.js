import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createUiId, createUiIdFactory, resetUiIds } from '../../src/utils/ui-id.js'

const nextId = createUiIdFactory('ui-test')

const Field = {
  data() {
    return { id: nextId() }
  },
  render() {
    return h('input', { id: this.id })
  },
}
const Page = { render: () => h('div', [h(Field), h(Field)]) }

describe('ui-id', () => {
  it('bileşen dışında sayaçla çalışır ve sıfırlanabilir', () => {
    resetUiIds()
    expect(createUiId('ui-x')).toBe('ui-x-1')
    expect(createUiId('ui-x')).toBe('ui-x-2')
    resetUiIds()
    expect(createUiId('ui-x')).toBe('ui-x-1')
  })

  it('aynı sayfanın ardışık sunucu render\'ları aynı kimlikleri üretir (sayaç kayması yok)', async () => {
    const first = await renderToString(createSSRApp(Page))
    const second = await renderToString(createSSRApp(Page))
    expect(second).toBe(first)
    const ids = [...first.matchAll(/id="([^"]+)"/g)].map((m) => m[1])
    expect(ids).toHaveLength(2)
    expect(new Set(ids).size).toBe(2)
    expect(ids.every((id) => id.startsWith('ui-test-'))).toBe(true)
  })
})
