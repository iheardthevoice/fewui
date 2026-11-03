<script>
import { defineComponent } from 'vue'
import ThemePlaygroundSidebar from '@fewui/theme-playground/ThemePlaygroundSidebar.vue'
import { useThemePlayground } from '@fewui/theme-playground/use-theme-playground.js'
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
  setup() {
    return { playground: useThemePlayground() }
  },
  data() {
    return {
      previewLocale: readStoredLocale() ?? 'tr',
      /** Mobilde tema paneli sheet olarak açılır; masaüstünde sabit sol şerit. */
      themeSheetOpen: false,
    }
  },
  computed: {
    previewTheme() {
      return this.playground.theme.value
    },
    /** Başlangıç teması bir platform katmanı taşıyorsa (Liquid Glass → ios) önizleme onu uygular. */
    previewPlatform() {
      return Object.keys(this.playground.baseTheme.value?.css?.platform || {})[0] || undefined
    },
    /** Başlıktaki Açık / Koyu — renk seçimleri iki moda birden uygulanır, burada yalnız önizlenir. */
    previewMode: {
      get() {
        return this.playground.previewMode.value === 'light' ? 'light' : 'dark'
      },
      set(value) {
        this.playground.previewMode.value = value
      },
    },
    previewCustomCss() {
      return this.playground.draft.customCss || ''
    },
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
  <!-- Kabuk: başlık şeridi + iki ayrı yüzey (tema paneli, önizleme); kenarlar birleşmez, yüzeyler arası boşluk -->
  <div class="flex h-svh max-h-svh flex-col gap-2 overflow-hidden bg-background p-2 text-foreground antialiased md:gap-3 md:p-3">
    <header class="shrink-0">
      <div class="flex h-11 items-center justify-between gap-4 px-1">
        <div class="flex min-w-0 items-center gap-2.5">
          <div class="md:hidden">
            <ui-button
              variant="ghost"
              color="secondary"
              cubed
              prefix-icon="sliders"
              :aria-label="$t('themePlayground.title')"
              @click="themeSheetOpen = true"
            />
          </div>
          <ui-icon-tile
            icon="swatchbook"
            color="primary"
            variant="solid"
            size="sm"
          />
          <span class="ui-text-default truncate whitespace-nowrap font-medium text-foreground">FewUI Playground</span>
        </div>
        <div class="flex items-center gap-2">
          <ui-segment-group
            v-model="previewMode"
            size="sm"
            :block="false"
            icon-only
            :aria-label="$t('themePlayground.fields.previewMode')"
          >
            <ui-segment
              value="light"
              icon="sun"
              :label="$t('themePlayground.mode.light')"
            />
            <ui-segment
              value="dark"
              icon="moon"
              :label="$t('themePlayground.mode.dark')"
            />
          </ui-segment-group>
          <ui-segment-group
            v-model="previewLocale"
            size="sm"
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
      </div>
    </header>

    <div class="flex min-h-0 flex-1 gap-2 overflow-hidden md:gap-3">
      <div class="hidden w-72 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface md:flex">
        <ThemePlaygroundSidebar :playground="playground" />
      </div>
      <div class="relative min-h-0 min-w-0 flex-1 overflow-hidden rounded-2xl border border-border">
        <ui-theme-provider
          class="absolute inset-0 overflow-y-auto overscroll-contain"
          :theme="previewTheme"
          :mode="previewMode"
          :data-ui-platform="previewPlatform"
          background
        >
          <component :is="'style'">{{ previewCustomCss }}</component>
          <ComponentPreview />
        </ui-theme-provider>
      </div>
    </div>

    <ui-sheet
      v-model:open="themeSheetOpen"
      side="left"
      body-padding="none"
      :title="$t('themePlayground.title')"
    >
      <ThemePlaygroundSidebar :playground="playground" />
    </ui-sheet>

    <ui-toast />
    <ui-confirm-dialog />
  </div>
</template>
