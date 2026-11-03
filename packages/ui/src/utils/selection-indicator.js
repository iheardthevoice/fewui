/**
 * Kayan seçim göstergesi — segment grubu ve segmented sekme şeridinde seçili öğenin zemini
 * tek bir öğe olarak yeni seçilinin arkasına kayar; yolda hafifçe büyüyüp aynı ölçeğe döner.
 *
 * Bileşen sağlar:
 * - `indicatorEnabled` (computed): gösterge açık mı
 * - `indicatorSelector` (computed): seçili öğe seçicisi (ör. `.ui-segment--selected`)
 * - şablonda kapsayıcının ilk çocuğu olarak:
 *   `<span v-if="indicatorEnabled" ref="indicator" class="ui-selection-indicator" v-bind="indicatorBind">
 *      <span class="ui-selection-indicator-fill" /></span>`
 * - kapsayıcıda `v-bind="indicatorRootAttrs"`
 *
 * İsteğe bağlı `indicatorPersistKey` (computed): aynı anahtarlı kapsayıcı yeniden kurulunca (ör. her
 * rotada yeniden çizilen sekme şeridi) gösterge son konumdan yeni seçiliye kayar.
 *
 * JS ölçene kadar (SSR dahil) seçili öğe kendi zeminini gösterir; `data-ui-indicator="ready"`
 * olunca zemin göstergeye geçer. İlk yerleşim ve yeniden boyutlanma animasyonsuzdur; yalnız seçim
 * değişimi kayar. `prefers-reduced-motion` CSS tarafında hareketi kapatır.
 */
/** Son gösterge konumu — `indicatorPersistKey` → ölçü (kapsayıcıya göre). */
const persistedRects = new Map()

/**
 * Seçili öğe kapsayıcı içinde kırpılarak gizlenmiş mi — ör. kapanan açılır grubun
 * `overflow: hidden` + sıfır yükseklikli sarmalayıcısı. Öğe DOM’da ve ölçülebilir kalır;
 * gösterge yine de onun arkasına (görünmeyen konuma) yerleşmemeli.
 */
function isClippedOut(el, root) {
  const rect = el.getBoundingClientRect()
  let node = el.parentElement
  while (node && node !== root) {
    const { overflowX, overflowY } = getComputedStyle(node)
    if (overflowX !== 'visible' || overflowY !== 'visible') {
      const clip = node.getBoundingClientRect()
      const w = Math.min(rect.right, clip.right) - Math.max(rect.left, clip.left)
      const h = Math.min(rect.bottom, clip.bottom) - Math.max(rect.top, clip.top)
      if (w < 1 || h < 1) return true
    }
    node = node.parentElement
  }
  return false
}

export const selectionIndicatorMixin = {
  data() {
    return {
      indicatorRect: null,
      indicatorInstant: true,
      /** Büyüme animasyonunu her geçişte yeniden başlatmak için `a` / `b` arasında değişir. */
      indicatorPop: '',
    }
  },
  computed: {
    indicatorRootAttrs() {
      if (!this.indicatorEnabled) return {}
      return { 'data-ui-indicator': this.indicatorRect ? 'ready' : 'pending' }
    },
    indicatorBind() {
      const rect = this.indicatorRect
      return {
        'aria-hidden': 'true',
        'data-instant': this.indicatorInstant ? 'true' : undefined,
        'data-pop': this.indicatorPop || undefined,
        style: rect
          ? {
              width: `${rect.width}px`,
              height: `${rect.height}px`,
              transform: `translate3d(${rect.x}px, ${rect.y}px, 0)`,
              '--ui-indicator-radius': rect.radius || undefined,
            }
          : { opacity: '0' },
      }
    },
  },
  watch: {
    indicatorEnabled(enabled) {
      if (enabled) this.$nextTick(() => this.startIndicator())
      else this.stopIndicator()
    },
  },
  mounted() {
    if (this.indicatorEnabled) this.startIndicator()
  },
  beforeUnmount() {
    this.stopIndicator()
  },
  methods: {
    /** Ölçüm kapsayıcısı — varsayılan bileşenin kökü; `ui-selection-indicator` üst öğeyi kullanır. */
    indicatorRootEl() {
      return this.$el
    },
    startIndicator() {
      const root = this.indicatorRootEl()
      if (!root || typeof window === 'undefined') return
      this.stopIndicator()
      const persistKey = this.indicatorPersistKey || ''
      this._indicatorPersisted = persistKey ? persistedRects.get(persistKey) || null : null
      this.measureIndicator({ animate: false })

      this._indicatorMutation = new MutationObserver((records) => {
        const selectionChanged = records.some(
          (r) => r.type === 'childList' || (r.target !== this.$refs.indicator && r.attributeName !== 'style'),
        )
        if (selectionChanged) this.scheduleIndicator(true)
      })
      this._indicatorMutation.observe(root, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['class', 'aria-selected', 'aria-checked', 'aria-expanded', 'data-open', 'hidden'],
      })

      if (typeof ResizeObserver !== 'undefined') {
        this._indicatorResize = new ResizeObserver(() => this.scheduleIndicator(false))
        this._indicatorResize.observe(root)
        for (const child of root.children) {
          if (child !== this.$refs.indicator) this._indicatorResize.observe(child)
        }
      }
      document.fonts?.ready?.then(() => this.scheduleIndicator(false))
    },
    stopIndicator() {
      this._indicatorMutation?.disconnect()
      this._indicatorResize?.disconnect()
      this._indicatorMutation = null
      this._indicatorResize = null
      if (this._indicatorRaf != null) cancelAnimationFrame(this._indicatorRaf)
      this._indicatorRaf = null
    },
    scheduleIndicator(animate) {
      this._indicatorAnimate = Boolean(this._indicatorAnimate || animate)
      if (this._indicatorRaf != null) return
      this._indicatorRaf = requestAnimationFrame(() => {
        this._indicatorRaf = null
        const shouldAnimate = this._indicatorAnimate
        this._indicatorAnimate = false
        this.measureIndicator({ animate: shouldAnimate })
      })
    },
    measureIndicator({ animate }) {
      if (this._indicatorHandoff) return
      const root = this.indicatorRootEl()
      const selected = root?.querySelector?.(this.indicatorSelector)
      if (!selected || selected.offsetWidth === 0 || isClippedOut(selected, root)) {
        this.indicatorRect = null
        return
      }
      // Yeni öğe sonradan eklenirse boyut değişimini de izle.
      this._indicatorResize?.observe(selected)
      // Konum kapsayıcıya göre ekran koordinatından: seçili öğe sarılı olabilir (ör. `ui-tooltip`
      // içinde); `offsetLeft` en yakın konumlu ataya göre ölçer ve göstergeyi yanlış yere koyar.
      // Merkezden ölçülür: basılı büyüme (`scale`) ve açılan dialog ölçeği konumu kaydırmaz.
      const rootRect = root.getBoundingClientRect()
      const rect = selected.getBoundingClientRect()
      const scaleX = root.offsetWidth > 0 ? rootRect.width / root.offsetWidth : 1
      const scaleY = root.offsetHeight > 0 ? rootRect.height / root.offsetHeight : 1
      const width = selected.offsetWidth
      const height = selected.offsetHeight
      const centerX = ((rect.left + rect.right) / 2 - rootRect.left) / (scaleX || 1) - root.clientLeft + root.scrollLeft
      const centerY = ((rect.top + rect.bottom) / 2 - rootRect.top) / (scaleY || 1) - root.clientTop + root.scrollTop
      const next = {
        x: Math.round((centerX - width / 2) * 2) / 2,
        y: Math.round((centerY - height / 2) * 2) / 2,
        width,
        height,
        // Göstergenin köşesi seçili öğeninkini alır (segment hap, sidebar satırı farklı köşe).
        radius: getComputedStyle(selected).borderTopLeftRadius,
        rootWidth: root.offsetWidth,
        rootHeight: root.offsetHeight,
      }
      const prev = this.indicatorRect
      const persistKey = this.indicatorPersistKey || ''
      if (persistKey) persistedRects.set(persistKey, next)
      // Yeniden kurulan kapsayıcı: önce önceki konuma yerleş, bir kare sonra yeniye kay.
      if (!prev && persistKey && this._indicatorPersisted) {
        const stored = this._indicatorPersisted
        this._indicatorPersisted = null
        if (stored.rootHeight === next.rootHeight && (stored.x !== next.x || stored.y !== next.y)) {
          this.indicatorInstant = true
          this.indicatorRect = stored
          // Bekleme sırasında gelen ölçüm (yazı tipi, boyut) göstergeyi anlık yerleştirip kaymayı bozmasın.
          this._indicatorHandoff = true
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this._indicatorHandoff = false
              this.indicatorInstant = false
              this.indicatorPop = this.indicatorPop === 'a' ? 'b' : 'a'
              this.indicatorRect = next
            })
          })
          return
        }
      }
      if (
        prev &&
        prev.x === next.x &&
        prev.y === next.y &&
        prev.width === next.width &&
        prev.height === next.height
      ) {
        return
      }
      // Kapsayıcının boyutu değiştiyse (dar ↔ geniş yerleşim, yönelim) kayma yok; yalnız yerleşir.
      const sameLayout = prev && prev.rootWidth === next.rootWidth && prev.rootHeight === next.rootHeight
      const moved = Boolean(prev) && sameLayout && animate && (prev.x !== next.x || prev.y !== next.y)
      this.indicatorInstant = !moved
      if (moved) this.indicatorPop = this.indicatorPop === 'a' ? 'b' : 'a'
      this.indicatorRect = next
      if (!moved) {
        // Bir kare sonra geçişleri aç (ilk yerleşim / boyut değişimi kaymasın).
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.indicatorInstant = false
          })
        })
      }
    },
  },
}
