<script>
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { applyUiTheme } from 'fewui'
import { applyThemePlaygroundPayload, listenThemeBridge } from '@fewui/theme-playground/theme-bridge.js'
import ComponentPreview from '../views/ComponentPreview.vue'

export default defineComponent({
  name: 'EmbedLayout',
  components: { ComponentPreview },
  setup() {
    let stopListen = () => {}

    onMounted(() => {
      applyUiTheme('web', { mode: 'dark', inline: true })

      stopListen = listenThemeBridge(applyThemePlaygroundPayload)
    })

    onUnmounted(() => {
      stopListen()
    })
  },
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground antialiased">
    <div class="overflow-y-auto">
      <ComponentPreview />
    </div>
    <ui-toast />
    <ui-confirm-dialog />
  </div>
</template>
