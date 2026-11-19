import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import { mountUi, press } from '../mount.js'
import Table from '../../src/components/Table.vue'
import TableBody from '../../src/components/TableBody.vue'
import TableRow from '../../src/components/TableRow.vue'
import TableCell from '../../src/components/TableCell.vue'

function mountTable({ interactive = true, clicks = [] } = {}) {
  const row = (id) =>
    h(TableRow, { interactive, 'data-id': id, onClick: () => clicks.push(id) }, () => [
      h(TableCell, null, () => `Satır ${id}`),
      h(TableCell, null, () => [
        h('button', { type: 'button', 'data-inner': id }, 'Menü'),
        h('span', { 'data-plain': id }, 'metin'),
      ]),
    ])
  const wrapper = mountUi(Table, {
    slots: { default: () => h(TableBody, null, () => ['a', 'b', 'c'].map(row)) },
  })
  const rows = () => [...wrapper.element.querySelectorAll('tr')]
  return { wrapper, rows, clicks }
}

describe('TableRow interactive', () => {
  it('interactive satır odaklanabilir; interactive olmayan satırda tabindex yok', () => {
    const on = mountTable()
    expect(on.rows().every((tr) => tr.getAttribute('tabindex') === '0')).toBe(true)
    expect(on.rows()[0].classList.contains('ui-table-row--interactive')).toBe(true)
    on.wrapper.unmount()

    const off = mountTable({ interactive: false })
    expect(off.rows().every((tr) => !tr.hasAttribute('tabindex'))).toBe(true)
    off.wrapper.unmount()
  })

  it('Enter ve Boşluk satırın click olayını yayar', () => {
    const { wrapper, rows, clicks } = mountTable()
    const [first, second] = rows()
    first.focus()
    const enter = press(first, 'Enter')
    expect(enter.defaultPrevented).toBe(true)
    press(second, ' ')
    expect(clicks).toEqual(['a', 'b'])
    wrapper.unmount()
  })

  it('ok tuşları, Home ve End aynı tablonun satırları arasında odağı taşır', () => {
    const { wrapper, rows } = mountTable()
    const [first, second, third] = rows()
    first.focus()
    press(first, 'ArrowDown')
    expect(document.activeElement).toBe(second)
    press(second, 'End')
    expect(document.activeElement).toBe(third)
    press(third, 'ArrowDown')
    expect(document.activeElement).toBe(third)
    press(third, 'ArrowUp')
    expect(document.activeElement).toBe(second)
    press(second, 'Home')
    expect(document.activeElement).toBe(first)
    wrapper.unmount()
  })

  it('iç denetime tıklama ve iç denetimdeki tuş satırı tetiklemez; düz içerik tetikler', () => {
    const { wrapper, rows, clicks } = mountTable()
    const [first] = rows()
    const inner = first.querySelector('[data-inner]')
    inner.click()
    press(inner, 'Enter')
    press(inner, 'ArrowDown')
    expect(clicks).toEqual([])
    first.querySelector('[data-plain]').click()
    expect(clicks).toEqual(['a'])
    wrapper.unmount()
  })

  it('interactive olmayan satır tıklamayı olduğu gibi iletir, tuşlara karışmaz', () => {
    const { wrapper, rows, clicks } = mountTable({ interactive: false })
    const [first] = rows()
    first.querySelector('[data-inner]').click()
    expect(clicks).toEqual(['a'])
    const enter = press(first, 'Enter')
    expect(enter.defaultPrevented).toBe(false)
    expect(clicks).toEqual(['a'])
    wrapper.unmount()
  })
})
