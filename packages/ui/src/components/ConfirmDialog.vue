<template>
  <ui-dialog
    v-model:open="syncOpen"
    stack-layer="confirm"
    max-width="sm"
    :title="confirmState.title"
    :close-on-backdrop="true"
    :close-on-escape="true"
    :guard-unsaved="false"
    :aria-label="confirmState.title || fallbackAriaLabel"
  >
    <p
      v-if="confirmState.description"
      class="text-sm text-muted-foreground"
    >
      {{ confirmState.description }}
    </p>
    <template #footer>
      <ui-button
        :color="confirmState.color"
        block
        size="lg"
        @click="onConfirm"
      >
        {{ confirmText }}
      </ui-button>
    </template>
  </ui-dialog>
</template>

<script>
import { confirmState, answerConfirm, trackConfirmHost } from '../confirm-state.js'

export default {
  name: 'ConfirmDialog',
  mounted() {
    trackConfirmHost(1)
  },
  beforeUnmount() {
    trackConfirmHost(-1)
  },
  computed: {
    confirmState() {
      return confirmState
    },
    syncOpen: {
      get() {
        return confirmState.open
      },
      set(v) {
        if (!v) {
          if (confirmState._resolve) answerConfirm(false)
          else confirmState.open = false
        } else {
          confirmState.open = true
        }
      },
    },
    confirmText() {
      if (confirmState.confirmLabel) return confirmState.confirmLabel
      if (typeof this.$t === 'function') return this.$t('ui.confirm.ok')
      return 'Tamam'
    },
    fallbackAriaLabel() {
      if (typeof this.$t === 'function') return this.$t('ui.confirm.fallbackAria')
      return 'Onay'
    },
  },
  methods: {
    onConfirm() {
      answerConfirm(true)
    },
  },
}
</script>
