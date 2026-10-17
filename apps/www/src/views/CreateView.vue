<script>
import { defineComponent } from 'vue'
import ThemePlaygroundSidebar from '@fewui/theme-playground/ThemePlaygroundSidebar.vue'
import ThemePreviewPanel from '@fewui/theme-playground/ThemePreviewPanel.vue'
import { useThemePlayground } from '@fewui/theme-playground/use-theme-playground.js'

export default defineComponent({
  name: 'CreateView',
  components: { ThemePlaygroundSidebar, ThemePreviewPanel },
  setup() {
    return { playground: useThemePlayground() }
  },
  computed: {
    previewMode: {
      get() {
        return this.playground.previewMode.value
      },
      set(value) {
        this.playground.previewMode.value = value
      },
    },
    previewModes() {
      return this.previewMode === 'split' ? ['light', 'dark'] : [this.previewMode]
    },
    previewModeOptions() {
      return ['light', 'dark', 'split'].map((value) => ({
        value,
        label: this.$t(`create.preview.${value}`),
      }))
    },
  },
})
</script>

<template>
  <div class="flex h-[calc(100vh-4.5rem)] min-h-0 flex-col">
    <div class="flex shrink-0 flex-wrap items-end justify-between gap-4 border-b border-border px-6 py-6">
      <div>
        <h1 class="text-2xl font-medium text-foreground">
          {{ $t('create.title') }}
        </h1>
        <p class="mt-1 text-sm text-muted-foreground">
          {{ $t('create.description') }}
        </p>
      </div>
      <ui-segment-group
        v-model="previewMode"
        :block="false"
        :aria-label="$t('create.preview.label')"
      >
        <ui-segment
          v-for="opt in previewModeOptions"
          :key="opt.value"
          :value="opt.value"
          :label="opt.label"
        />
      </ui-segment-group>
    </div>

    <div class="flex min-h-0 flex-1">
      <ThemePlaygroundSidebar :playground="playground" />
      <div
        class="grid min-h-0 flex-1"
        :class="previewModes.length > 1 ? 'grid-cols-2 divide-x divide-border' : 'grid-cols-1'"
      >
        <div
          v-for="mode in previewModes"
          :key="mode"
          class="min-h-0 overflow-y-auto"
        >
          <ui-theme-provider
            :theme="playground.theme.value"
            :mode="mode"
            background
          >
            <component :is="'style'">{{ playground.draft.customCss }}</component>
            <ThemePreviewPanel />
          </ui-theme-provider>
        </div>
      </div>
    </div>
  </div>
</template>
