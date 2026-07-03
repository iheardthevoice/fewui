<script>
import { defineComponent } from 'vue'
import ThemePlaygroundSidebar from '@fewui/theme-playground/ThemePlaygroundSidebar.vue'
import { postThemeToFrame } from '@fewui/theme-playground/theme-bridge.js'

const PLAYGROUND_ORIGIN = import.meta.env.VITE_PLAYGROUND_ORIGIN || 'http://localhost:5175'

export default defineComponent({
  name: 'CreateView',
  components: { ThemePlaygroundSidebar },
  data() {
    return {
      playgroundPayload: null,
    }
  },
  computed: {
    previewSrc() {
      return `${PLAYGROUND_ORIGIN}/?embed=1`
    },
  },
  methods: {
    onThemeChange(payload) {
      this.playgroundPayload = payload
      this.syncPreviewTheme()
    },
    onPreviewLoad() {
      this.syncPreviewTheme()
    },
    syncPreviewTheme() {
      if (!this.playgroundPayload) return
      postThemeToFrame(this.$refs.previewFrame, this.playgroundPayload)
    },
  },
})
</script>

<template>
  <div class="flex h-[calc(100vh-4.5rem)] min-h-0 flex-col">
    <div class="shrink-0 border-b border-border px-6 py-6">
      <h1 class="text-2xl font-medium text-foreground">
        {{ $t('create.title') }}
      </h1>
      <p class="mt-1 text-sm text-muted-foreground">
        {{ $t('create.description') }}
      </p>
    </div>

    <div class="flex min-h-0 flex-1">
      <ThemePlaygroundSidebar
        default-preset-id="panel"
        @theme-change="onThemeChange"
      />
      <div class="min-h-0 flex-1 bg-muted/20">
        <iframe
          ref="previewFrame"
          :src="previewSrc"
          title="FewUI component preview"
          class="h-full w-full border-0"
          @load="onPreviewLoad"
        />
      </div>
    </div>
  </div>
</template>
