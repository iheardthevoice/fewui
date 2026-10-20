/**
 * Panel görsel denetimi — tarayıcı konsolunda çalışır.
 *
 *   eval(await (await fetch('/@fs/<workspace>/ui/packages/ui/scripts/audit-visual.js')).text())
 *   __uiAuditVisual()            // tüm kurallar
 *   __uiAuditVisual({ rules: ['typography'] })
 *
 * Kurallar:
 * - layer        açık yüzen katman (popover, dropdown, select) altındaki dialog/sheet'ten geride
 * - overflow     kırpılmayan yatay taşma, ya da metni kesilip title taşımayan etiket
 * - offscreen    fixed/absolute katman viewport dışında
 * - typography   ölçek dışı font-size ya da font-weight 600 üstü.
 *                 Kasıtlı küçük metin (12px altı: avatar, rozet, sayaç) ve
 *                 kasıtlı vurgu (20px üstü: marka, büyük rakam) raporlanmaz.
 * - spacing      aynı kolon içinde karışık dikey boşluk, bitişik bloklar, 48px üstü boşluk
 * - alignment    aynı satırdaki kontrollerin yükseklik farkı 4px üstü.
 *                 Segment grubu ve dikey dolgulu düğme izi dış kutu olarak ölçülür.
 * - alert        uyarı kutusunda eylem etiketi metinden kaymış, dikey ritim kopuk
 *                 ya da renkli yüzeyde ikincil metin nötr gri.
 * - viewport     dialog/sheet paneli ya da sayfa viewport'u aşıyor
 *
 * Her bulgu { rule, detail, target, el } döner.
 */
;(() => {
  const TYPE_SCALE = [12, 14, 16, 18]
  const MAX_WEIGHT = 500
  const GAP_LARGE = 48
  const ROW_HEIGHT_DELTA = 4

  const FLOATING = '.ui-popover-layer, .ui-dropdown-menu, .ui-select-listbox'
  const MODAL = '.ui-dialog-root, .ui-sheet-root'
  const CONTROLS = '.ui-button, .ui-input, .ui-select'

  /** @param {Element} el */
  function visible(el) {
    const rect = el.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return false
    const style = getComputedStyle(el)
    return style.visibility !== 'hidden' && style.display !== 'none' && Number(style.opacity) > 0
  }

  /** @param {Element} el */
  function describe(el) {
    const text = (el.innerText || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 40)
    const cls = [...el.classList].filter((c) => c.startsWith('ui-')).slice(0, 3).join('.')
    return `${el.tagName.toLowerCase()}${cls ? '.' + cls : ''} "${text}"`
  }

  /**
   * Segment grubu ve dikey dolgulu düğme izi kendi dış kutusudur.
   * İçindeki düğme ayrıca ölçülmez.
   * @param {Element} el
   */
  function controlSurface(el) {
    const group = el.closest('.ui-segment-group')
    if (group && group !== el) return group
    const parent = el.parentElement
    if (parent && el.matches('.ui-button')) {
      const peers = parent.querySelectorAll(':scope > .ui-button')
      if (peers.length >= 2) {
        const style = getComputedStyle(parent)
        const extra =
          (Number.parseFloat(style.paddingTop) || 0) +
          (Number.parseFloat(style.paddingBottom) || 0) +
          (Number.parseFloat(style.borderTopWidth) || 0) +
          (Number.parseFloat(style.borderBottomWidth) || 0)
        if (extra > 2) return parent
      }
    }
    return el
  }

  /** oklch/oklab computed color → sRGB. */
  function sampleColor(color) {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 1
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    ctx.fillStyle = '#000'
    ctx.fillStyle = color
    ctx.fillRect(0, 0, 1, 1)
    const data = ctx.getImageData(0, 0, 1, 1).data
    return [data[0], data[1], data[2]]
  }

  function zOf(el) {
    let node = el
    let z = 0
    while (node && node !== document.body) {
      const value = Number.parseInt(getComputedStyle(node).zIndex, 10)
      if (Number.isFinite(value)) z = Math.max(z, value)
      node = node.parentElement
    }
    return z
  }

  window.__uiAuditVisual = function auditVisual(options = {}) {
    const enabled = options.rules ? new Set(options.rules) : null
    const root = options.root || document
    const on = (rule) => !enabled || enabled.has(rule)
    const findings = []
    const add = (rule, detail, el) => findings.push({ rule, detail, target: describe(el), el })

    if (on('layer')) {
      let topModal = 0
      for (const modal of root.querySelectorAll(MODAL)) {
        if (visible(modal)) topModal = Math.max(topModal, zOf(modal))
      }
      if (topModal) {
        for (const layer of root.querySelectorAll(FLOATING)) {
          if (!visible(layer)) continue
          const z = zOf(layer)
          if (z < topModal) add('layer', `z ${z} < dialog/sheet z ${topModal}`, layer)
        }
      }
    }

    if (on('overflow')) {
      for (const el of root.querySelectorAll('body *')) {
        if (!visible(el) || el.closest(FLOATING)) continue
        const style = getComputedStyle(el)
        const overflowX = el.scrollWidth - el.clientWidth
        if (
          style.overflowX === 'visible' &&
          overflowX > 2 &&
          el.clientWidth > 0 &&
          style.position !== 'fixed' &&
          el.getBoundingClientRect().right > window.innerWidth + 1
        ) {
          add('overflow', `${overflowX}px yatay taşma`, el)
        }
        // Taşan kutu kendisi de olabilir: `scrollWidth` ile `clientWidth` farkı kırpmayı gösterir.
        // Birkaç piksellik kesik okunabilirliği bozmaz; eşiğin altı gürültüdür.
        // Ekran okuyucu için gizlenen metin (icon-only segment) kesik sayılmaz.
        const clippedForSight = style.overflowX === 'hidden' || style.textOverflow === 'ellipsis'
        // `sr-only` 1px'e kırpılır; bu gizleme, kesik metin değildir.
        // Rozet etiketi daralınca tam metin fewui tooltip'i ile görünür; title gerekmez.
        if (
          clippedForSight &&
          overflowX > 16 &&
          el.clientWidth > 4 &&
          el.textContent.trim() &&
          !el.classList.contains('ui-badge-label') &&
          !el.closest('.ui-alert--toast') &&
          el.getClientRects().length
        ) {
          const clips = style.overflow === 'hidden' || style.overflowX === 'hidden' || style.textOverflow === 'ellipsis'
          if (clips && !el.getAttribute('title') && !el.closest('[title]')) {
            add('overflow', `metin kesik, title yok (${el.scrollWidth - el.clientWidth}px)`, el)
          }
        }
      }
    }

    if (on('offscreen')) {
      for (const el of root.querySelectorAll(FLOATING + ', .ui-dialog-panel, .ui-sheet-panel')) {
        if (!visible(el)) continue
        const rect = el.getBoundingClientRect()
        if (rect.right < 0 || rect.left > window.innerWidth || rect.bottom < 0 || rect.top > window.innerHeight) {
          add('offscreen', `viewport dışı (${Math.round(rect.left)}, ${Math.round(rect.top)})`, el)
        }
      }
    }

    if (on('typography')) {
      const seen = new Set()
      for (const el of root.querySelectorAll('body *')) {
        if (!visible(el) || el.closest('.ui-heading-1, .ui-heading-2, .ui-heading-3, .ui-heading-4, .ui-heading-5, .ui-heading-6, .ui-table-head, .ui-empty-title')) continue
        const style = getComputedStyle(el)
        const size = Math.round(Number.parseFloat(style.fontSize))
        const weight = Number.parseInt(style.fontWeight, 10)
        // 12px altı mikro metin, 20px üstü vurgu kasıtlıdır; ara değerler tutarsızlıktır.
        if (!el.childElementCount && el.textContent.trim() && size > 12 && size < 20 && !TYPE_SCALE.includes(size)) {
          const key = `size:${size}:${describe(el)}`
          if (!seen.has(key)) { seen.add(key); add('typography', `font-size ${size}px (ölçek 12/14/16/18)`, el) }
        }
        // Büyük harf başlıklar (tablo kolonu) zaten vurguludur; ek kalınlık okunabilirliği bozmaz.
        if (weight > MAX_WEIGHT && el.textContent.trim() && style.textTransform !== 'uppercase') {
          const key = `weight:${weight}:${el.className}`
          if (!seen.has(key)) { seen.add(key); add('typography', `font-weight ${weight} (üst sınır 500)`, el) }
        }
      }
    }

    if (on('spacing')) {
      for (const parent of root.querySelectorAll('.ui-card, .ui-dialog-panel, .ui-form, form')) {
        if (!visible(parent)) continue
        const kids = [...parent.children].filter(visible)
        const gaps = []
        for (let i = 1; i < kids.length; i++) {
          const prev = kids[i - 1].getBoundingClientRect()
          const next = kids[i].getBoundingClientRect()
          // Yalnız alt alta duran kardeşler; yan yana satırlar ölçülmez.
          if (next.top < prev.bottom - 1) continue
          const gap = next.top - prev.bottom
          const margins =
            (Number.parseFloat(getComputedStyle(kids[i - 1]).marginBottom) || 0) +
            (Number.parseFloat(getComputedStyle(kids[i]).marginTop) || 0)
          gaps.push(Math.round(margins || gap))
        }
        if (!gaps.length) continue
        const distinct = [...new Set(gaps.filter((g) => g > 0))]
        if (distinct.length >= 3) add('spacing', `karışık dikey boşluk: ${distinct.join('/')}px`, parent)
        if (gaps.filter((g) => g === 0).length >= 3) add('spacing', `${gaps.filter((g) => g === 0).length} bitişik blok`, parent)
        const wide = gaps.find((g) => g > GAP_LARGE)
        if (wide) add('spacing', `${wide}px boş aralık`, parent)
      }
    }

    if (on('alignment')) {
      const surfaces = new Set()
      for (const el of root.querySelectorAll(`${CONTROLS}, .ui-segment-group`)) {
        if (!visible(el)) continue
        if (el.closest('.ui-dropdown-menu, .ui-select-listbox, .ui-popover-layer')) continue
        surfaces.add(controlSurface(el))
      }
      const boxes = [...surfaces].map((el) => {
        const rect = el.getBoundingClientRect()
        return { el, top: rect.top, bottom: rect.bottom, height: rect.height, left: rect.left }
      }).filter((box) => box.height > 0 && box.height <= 56)
      boxes.sort((a, b) => a.top - b.top || a.left - b.left)
      const rows = []
      for (const box of boxes) {
        const row = rows.find((entry) => {
          const overlap = Math.min(entry.bottom, box.bottom) - Math.max(entry.top, box.top)
          return overlap > Math.min(entry.height, box.height) * 0.5
        })
        if (row) {
          row.items.push(box)
          row.top = Math.min(row.top, box.top)
          row.bottom = Math.max(row.bottom, box.bottom)
          row.height = row.bottom - row.top
        } else {
          rows.push({ top: box.top, bottom: box.bottom, height: box.height, items: [box] })
        }
      }
      for (const row of rows) {
        if (row.items.length < 2) continue
        const heights = row.items.map((box) => box.height)
        const delta = Math.max(...heights) - Math.min(...heights)
        if (delta > ROW_HEIGHT_DELTA) {
          add('alignment', `aynı satırda kontrol yüksekliği ${Math.round(delta)}px farklı`, row.items[0].el)
        }
      }
    }

    if (on('alert')) {
      const mutedProbe = document.createElement('span')
      mutedProbe.className = 'text-muted-foreground'
      mutedProbe.style.cssText = 'position:absolute;left:-9999px;visibility:hidden'
      mutedProbe.textContent = 'm'
      document.body.appendChild(mutedProbe)
      const mutedColor = sampleColor(getComputedStyle(mutedProbe).color)
      mutedProbe.remove()

      for (const alert of root.querySelectorAll('.ui-alert:not(.ui-alert--banner):not(.ui-alert--toast)')) {
        if (!visible(alert)) continue
        const title = alert.querySelector(':scope > .ui-alert-body > .ui-alert-copy > .ui-alert-title')
        const description = alert.querySelector(':scope > .ui-alert-body > .ui-alert-copy > .ui-alert-description')
        const action = alert.querySelector(':scope > .ui-alert-body > .ui-alert-slot .ui-button:not([data-variant="link"]):not([data-variant="nav"])')
        const copy = title && visible(title) ? title : description
        if (title && description && visible(title) && visible(description)) {
          const textGap = description.getBoundingClientRect().top - title.getBoundingClientRect().bottom
          if (textGap < 4) add('alert', `başlık ile açıklama arası ${Math.round(textGap)}px`, alert)
        }
        if (copy && action && visible(copy) && visible(action)) {
          const style = getComputedStyle(action)
          const labelLeft = action.getBoundingClientRect().left + (Number.parseFloat(style.paddingLeft) || 0)
          const shift = labelLeft - copy.getBoundingClientRect().left
          if (Math.abs(shift) > 2) add('alert', `eylem etiketi metinden ${Math.round(shift)}px kaymış`, action)
          const anchor = description && visible(description) ? description : copy
          const ink = action.querySelector('.ui-button-text')
          const inkTop = (ink && visible(ink) ? ink : action).getBoundingClientRect().top
          const labelGap = inkTop - anchor.getBoundingClientRect().bottom
          const textGap = title && description && visible(title) && visible(description)
            ? description.getBoundingClientRect().top - title.getBoundingClientRect().bottom
            : 6
          if (labelGap > textGap + 6) {
            add('alert', `eylem metni açıklamadan ${Math.round(labelGap)}px uzakta`, action)
          }
        }
        if (description && visible(description) && mutedColor) {
          const color = sampleColor(getComputedStyle(description).color)
          const chroma = Math.max(...color) - Math.min(...color)
          const nearMuted = Math.abs(color[0] - mutedColor[0]) < 8 && Math.abs(color[1] - mutedColor[1]) < 8 && Math.abs(color[2] - mutedColor[2]) < 8
          if (chroma < 12 || nearMuted) {
            add('alert', 'renkli uyarıda ikincil metin nötr gri', description)
          }
        }
      }
    }

    if (on('viewport')) {
      for (const panel of root.querySelectorAll('.ui-dialog-panel, .ui-sheet-panel')) {
        if (!visible(panel)) continue
        const rect = panel.getBoundingClientRect()
        if (rect.height > window.innerHeight + 1 || rect.width > window.innerWidth + 1) {
          add('viewport', `panel ${Math.round(rect.width)}x${Math.round(rect.height)} viewport ${window.innerWidth}x${window.innerHeight}`, panel)
        }
      }
      const doc = document.documentElement
      if (doc.scrollWidth > window.innerWidth + 1) add('viewport', `sayfa yatay taşıyor (${doc.scrollWidth} > ${window.innerWidth})`, doc)
    }

    return findings
  }
})()
