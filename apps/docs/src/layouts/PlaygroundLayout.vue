<script>
import { defineComponent } from 'vue'
import ThemePlaygroundSidebar from '@fewui/theme-playground/ThemePlaygroundSidebar.vue'
import ComponentPreview from '../views/ComponentPreview.vue'
import { i18n } from '../i18n.js'

const LOCALE_KEY = 'ui-preview-locale'

function readStoredLocale() {
  if (typeof localStorage === 'undefined') return null
  const v = localStorage.getItem(LOCALE_KEY)
  return v === 'tr' || v === 'en' ? v : null
}

export default defineComponent({
  name: 'PlaygroundLayout',
  components: {
    ThemePlaygroundSidebar,
    ComponentPreview,
  },
  data() {
    return {
      previewLocale: readStoredLocale() ?? 'tr',
    }
  },
  watch: {
    previewLocale(value) {
      const g = i18n.global
      if (typeof g.locale === 'string') {
        g.locale = value
      } else if (g.locale && typeof g.locale === 'object' && 'value' in g.locale) {
        g.locale.value = value
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCALE_KEY, value)
      }
    },
  },
  mounted() {
    this.previewLocale = readStoredLocale() ?? 'tr'
  },
})
</script>

<template>
  <div class="flex h-screen min-h-screen flex-col bg-background text-foreground antialiased">
    <header class="shrink-0 border-b border-border bg-background/85 backdrop-blur-md">
      <div class="flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6">
        <span class="text-sm font-medium tracking-tight text-foreground">FewUI Playground</span>
        <ui-segment-group
          v-model="previewLocale"
          :block="false"
          aria-label="Language"
        >
          <ui-segment
            value="tr"
            label="TR"
          />
          <ui-segment
            value="en"
            label="EN"
          />
        </ui-segment-group>
      </div>
    </header>

    <div class="flex min-h-0 flex-1">
      <ThemePlaygroundSidebar default-preset-id="panel" />
      <div class="min-h-0 flex-1 overflow-y-auto">
        <ComponentPreview />
      </div>
    </div>

    <ui-toast />
    <ui-confirm-dialog />
  </div>
</template>
