<template>
  <span
    ref="indicator"
    class="ui-selection-indicator"
    v-bind="indicatorBind"
  >
    <span class="ui-selection-indicator-fill" />
  </span>
</template>

<script>
import { selectionIndicatorMixin } from '../utils/selection-indicator.js'

/**
 * Kayan seçim göstergesi — herhangi bir kapsayıcıya ilk çocuk olarak konur; `selector` ile eşleşen
 * seçili öğenin arkasına kayar (segment / segmented sekme ile aynı davranış). Seçili öğeler farklı
 * sarmalayıcılarda olabilir (tooltip, açılır grup): ölçüm kapsayıcıya göre yapılır.
 *
 * Kapsayıcı `data-ui-indicator` alır (`pending` → `ready`); hazır olunca seçili öğe kendi zeminini
 * bırakır (CSS). Kapsayıcı kaydırılabilir olabilir — gösterge içerikle birlikte kayar.
 *
 * @example
 * <nav class="flex flex-col gap-1">
 *   <ui-selection-indicator selector=".ui-sidebar-item--active" />
 *   <ui-sidebar-item … />
 * </nav>
 */
export default {
  name: 'SelectionIndicator',
  mixins: [selectionIndicatorMixin],
  props: {
    /** Seçili öğe seçicisi (kapsayıcı içinde aranır). */
    selector: {
      type: String,
      required: true,
    },
  },
  computed: {
    indicatorEnabled() {
      return true
    },
    indicatorSelector() {
      return this.selector
    },
  },
  watch: {
    indicatorRootAttrs: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const root = this.indicatorRootEl()
          if (!root) return
          root.setAttribute('data-ui-indicator-host', '')
          if (attrs['data-ui-indicator']) root.setAttribute('data-ui-indicator', attrs['data-ui-indicator'])
        })
      },
    },
  },
  beforeUnmount() {
    const root = this.indicatorRootEl()
    root?.removeAttribute('data-ui-indicator')
    root?.removeAttribute('data-ui-indicator-host')
  },
  methods: {
    indicatorRootEl() {
      return this.$el?.parentElement || null
    },
  },
}
</script>
