/**
 * Tarayıcıda çalışan kontrol yerleşimi denetimi.
 *
 * Sayfadaki görünür `.ui-button` öğelerini ölçer:
 * - yatay: içeriğin sol / sağ iç boşluğu eşit mi (ortalanmış düğmelerde)
 * - dikey: metin satırı ve ikonlar düğmenin dikey merkezinde mi
 * - boş ikon: gliften yoksun `.ui-icon` yer kaplıyor mu (ikon fontu yüklenmemiş / yanlış ad)
 *
 * Kullanım: DevTools konsoluna yapıştırın ya da CDP `Runtime.evaluate` ile çalıştırın;
 * `window.__uiAuditControls()` bulgu dizisi döndürür.
 */
;(() => {
  const TOLERANCE_PX = 1

  /** @param {Element} el */
  function describe(el) {
    const text = (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40)
    const label = text || el.getAttribute('aria-label') || el.getAttribute('title') || ''
    return `${el.tagName.toLowerCase()}.${[...el.classList].filter((c) => c.startsWith('ui-')).join('.')} "${label}"`
  }

  /** @param {Element} el */
  function isVisible(el) {
    const rect = el.getBoundingClientRect()
    if (rect.width < 4 || rect.height < 4) return false
    const style = getComputedStyle(el)
    return style.visibility !== 'hidden' && style.display !== 'none' && Number(style.opacity) > 0
  }

  /** İçerik kutusu: kenarlık + dolgu çıkarılmış dikdörtgen. */
  function contentBox(el) {
    const rect = el.getBoundingClientRect()
    const s = getComputedStyle(el)
    const n = (v) => Number.parseFloat(v) || 0
    return {
      left: rect.left + n(s.borderLeftWidth) + n(s.paddingLeft),
      right: rect.right - n(s.borderRightWidth) - n(s.paddingRight),
      top: rect.top + n(s.borderTopWidth) + n(s.paddingTop),
      bottom: rect.bottom - n(s.borderBottomWidth) - n(s.paddingBottom),
      rect,
    }
  }

  /** Düğmedeki görünür içerik (metin satırları + ikon kutuları) birleşik sınırı. */
  function inkBounds(button) {
    const boxes = []
    const walker = document.createTreeWalker(button, NodeFilter.SHOW_TEXT)
    while (walker.nextNode()) {
      const node = walker.currentNode
      if (!node.textContent.trim()) continue
      const parent = node.parentElement
      if (!parent || parent.closest('.sr-only') || !isVisible(parent)) continue
      const range = document.createRange()
      range.selectNodeContents(node)
      for (const r of range.getClientRects()) if (r.width > 0) boxes.push({ kind: 'text', r, el: parent })
    }
    for (const icon of button.querySelectorAll('.ui-icon')) {
      if (!isVisible(icon)) continue
      boxes.push({ kind: 'icon', r: icon.getBoundingClientRect(), el: icon })
    }
    for (const el of button.querySelectorAll('*')) {
      if (el.closest('.ui-icon') || el.closest('.sr-only') || !isVisible(el)) continue
      const s = getComputedStyle(el)
      const painted =
        el.matches('img, svg, canvas, video') ||
        (s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent') ||
        s.backgroundImage !== 'none' ||
        Number.parseFloat(s.borderTopWidth) > 0
      if (painted && !el.querySelector('*')) boxes.push({ kind: 'media', r: el.getBoundingClientRect(), el })
    }
    return boxes
  }

  /** `::before` içeriği yoksa (FA glif yok) ikon boş yer kaplar. */
  function iconIsEmpty(icon) {
    const glyph = icon.matches('i, svg') ? icon : icon.querySelector('i, svg')
    if (!glyph) return !icon.textContent.trim()
    if (glyph.tagName.toLowerCase() === 'svg') return false
    const content = getComputedStyle(glyph, '::before').content
    return !content || content === 'none' || content === 'normal' || content === '""'
  }

  const canvas = document.createElement('canvas').getContext('2d')

  /**
   * Büyük harf yüksekliğinin dikey merkezi (göze görünen metin merkezi).
   * Satır kutusu ortalı olsa bile yazı tipinin ascent / descent dengesizliği metni kaydırır.
   */
  function capCenterY(textRect, el) {
    const s = getComputedStyle(el)
    canvas.font = `${s.fontStyle} ${s.fontWeight} ${s.fontSize} ${s.fontFamily}`
    const m = canvas.measureText('H')
    const contentHeight = m.fontBoundingBoxAscent + m.fontBoundingBoxDescent
    const baseline = textRect.top + (textRect.height - contentHeight) / 2 + m.fontBoundingBoxAscent
    return baseline - m.actualBoundingBoxAscent / 2
  }

  window.__uiAuditControls = function auditControls(root = document) {
    const findings = []
    for (const button of root.querySelectorAll('.ui-button')) {
      if (!isVisible(button)) continue
      const variant = button.dataset.variant
      if (variant === 'link' || variant === 'nav') continue
      const box = contentBox(button)
      const parts = inkBounds(button)
      if (!parts.length) continue
      const add = (rule, detail) => findings.push({ rule, detail, target: describe(button), el: button })

      for (const part of parts) {
        if (part.kind === 'icon' && iconIsEmpty(part.el)) add('empty-icon', 'ikon glifi yok, boş yer kaplıyor')
      }

      const left = Math.min(...parts.map((p) => p.r.left))
      const right = Math.max(...parts.map((p) => p.r.right))
      const textAlignLeft = !!button.querySelector('.ui-button-text.text-left')
      const stretched = button.classList.contains('ui-button--block') || textAlignLeft
      const insetL = left - box.rect.left
      const insetR = box.rect.right - right
      if (!stretched && Math.abs(insetL - insetR) > TOLERANCE_PX * 2) {
        add('horizontal-balance', `sol ${insetL.toFixed(1)}px / sağ ${insetR.toFixed(1)}px`)
      }

      const midY = (box.rect.top + box.rect.bottom) / 2
      const multiline = new Set(parts.filter((p) => p.kind === 'text').map((p) => Math.round(p.r.top))).size > 1
      if (!multiline && !button.classList.contains('ui-button--stack')) {
        for (const part of parts) {
          const partMid = (part.r.top + part.r.bottom) / 2
          if (Math.abs(partMid - midY) > TOLERANCE_PX) {
            add('vertical-center', `${part.kind} kutusu ${(partMid - midY).toFixed(1)}px kaymış`)
            break
          }
          if (part.kind === 'text') {
            const ink = capCenterY(part.r, part.el) - midY
            if (Math.abs(ink) > TOLERANCE_PX) {
              add('vertical-ink', `harf merkezi ${ink.toFixed(1)}px kaymış (${getComputedStyle(part.el).fontFamily.split(',')[0]})`)
              break
            }
          }
        }
      }

      const overflowX = button.scrollWidth - button.clientWidth
      if (overflowX > TOLERANCE_PX && !button.querySelector('.truncate')) {
        add('overflow', `içerik ${overflowX}px taşıyor`)
      }
    }
    return findings
  }
})()
