<template>
  <div
    v-show="active"
    ref="root"
    class="ui-step"
  >
    <slot />
  </div>
</template>

<script>
import { focusFirstField } from '../utils/focus-first-field.js'
import { isMobileViewport } from '../utils/viewport.js'

export default {
  name: 'Step',
  props: {
    /** Adım paneli görünür mü */
    active: {
      type: Boolean,
      default: false,
    },
    /** Görünür olduğunda ilk form alanına odaklan (dialog içinde toolbar birincil alanı dahil) */
    autofocus: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    active(value, oldValue) {
      if (value && oldValue === false) {
        this.scheduleFocus()
      }
    },
  },
  methods: {
    resolveFocusRoot() {
      const el = this.$refs.root
      if (!(el instanceof HTMLElement)) return null
      return (
        el.closest('.ui-dialog-panel')
        || el.closest('.ui-sheet-panel')
        || el.closest('.ui-card')
        || el
      )
    },
    scheduleFocus() {
      if (!this.autofocus || !this.active || isMobileViewport()) return
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          if (!this.active) return
          const root = this.resolveFocusRoot()
          if (root && focusFirstField(root)) return
        })
      })
    },
  },
}
</script>
