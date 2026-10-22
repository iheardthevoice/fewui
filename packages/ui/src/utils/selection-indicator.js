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
 * JS ölçene kadar (SSR dahil) seçili öğe kendi zeminini gösterir; `data-ui-indicator="ready"`
 * olunca zemin göstergeye geçer. İlk yerleşim ve yeniden boyutlanma animasyonsuzdur; yalnız seçim
 * değişimi kayar. `prefers-reduced-motion` CSS tarafında hareketi kapatır.
 */
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
    startIndicator() {
      const root = this.$el
      if (!root || typeof window === 'undefined') return
      this.stopIndicator()
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
        attributeFilter: ['class', 'aria-selected', 'aria-checked'],
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
      const root = this.$el
      const selected = root?.querySelector?.(this.indicatorSelector)
      if (!selected || selected.offsetWidth === 0) {
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
        rootWidth: root.offsetWidth,
        rootHeight: root.offsetHeight,
      }
      const prev = this.indicatorRect
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
