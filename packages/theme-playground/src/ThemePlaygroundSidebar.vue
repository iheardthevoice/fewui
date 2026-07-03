<script>
import { defineComponent, watch } from 'vue'
import { useThemePlayground } from './use-theme-playground.js'
import {
  downloadTextFile,
  exportAgentSkill,
  exportCursorRule,
  exportThemeJson,
} from './export-theme-bundle.js'

export default defineComponent({
  name: 'ThemePlaygroundSidebar',
  props: {
    defaultPresetId: {
      type: String,
      default: 'panel',
    },
  },
  emits: ['theme-change'],
  setup(props, { emit }) {
    const playground = useThemePlayground({ defaultPresetId: props.defaultPresetId })

    watch(
      [playground.theme, playground.customCss],
      ([theme, customCss]) => {
        emit('theme-change', { theme, customCss })
      },
      { deep: true, immediate: true },
    )

    return {
      presetId: playground.presetId,
      primaryColor: playground.primaryColor,
      mode: playground.mode,
      fontFamily: playground.fontFamily,
      customCss: playground.customCss,
      theme: playground.theme,
      presetOptions: playground.presetOptions,
    }
  },
  computed: {
    modeOptions() {
      return [
        { value: 'dark', label: this.$t('themePlayground.mode.dark') },
        { value: 'light', label: this.$t('themePlayground.mode.light') },
      ]
    },
    fontOptions() {
      return [
        { value: 'Inter', label: 'Inter' },
        { value: 'Poppins', label: 'Poppins' },
      ]
    },
  },
  methods: {
    copyThemeJson() {
      const text = exportThemeJson(this.theme, {
        presetId: this.presetId,
        customCss: this.customCss,
      })
      void navigator.clipboard?.writeText(text)
    },
    downloadRules() {
      downloadTextFile(
        'fewui-theme.mdc',
        exportCursorRule(this.theme, {
          presetId: this.presetId,
          customCss: this.customCss,
        }),
      )
    },
    downloadSkill() {
      downloadTextFile(
        'SKILL.md',
        exportAgentSkill(this.theme, { presetId: this.presetId }),
      )
    },
  },
})
</script>

<template>
  <aside class="flex h-full w-72 shrink-0 flex-col gap-4 overflow-y-auto border-r border-border bg-surface p-4">
    <div>
      <p class="text-sm font-medium text-foreground">
        {{ $t('themePlayground.title') }}
      </p>
      <p class="mt-1 text-xs text-muted-foreground">
        {{ $t('themePlayground.description') }}
      </p>
    </div>

    <ui-form-row :label="$t('themePlayground.fields.preset')">
      <ui-select
        v-model="presetId"
        :options="presetOptions"
      />
    </ui-form-row>

    <ui-form-row :label="$t('themePlayground.fields.mode')">
      <ui-segment-group
        v-model="mode"
        block
      >
        <ui-segment
          v-for="opt in modeOptions"
          :key="opt.value"
          :value="opt.value"
          :label="opt.label"
        />
      </ui-segment-group>
    </ui-form-row>

    <ui-form-row :label="$t('themePlayground.fields.primary')">
      <ui-color-picker v-model="primaryColor" />
    </ui-form-row>

    <ui-form-row :label="$t('themePlayground.fields.font')">
      <ui-select
        v-model="fontFamily"
        :options="fontOptions"
      />
    </ui-form-row>

    <ui-form-row :label="$t('themePlayground.fields.customCss')">
      <ui-input
        v-model="customCss"
        multiline
        :rows="5"
        :placeholder="$t('themePlayground.fields.customCssPlaceholder')"
      />
    </ui-form-row>

    <div class="mt-auto flex flex-col gap-2">
      <ui-button
        type="button"
        variant="outline"
        color="secondary"
        fulled
        prefix-icon="copy"
        @click="copyThemeJson"
      >
        {{ $t('themePlayground.actions.copyJson') }}
      </ui-button>
      <ui-button
        type="button"
        variant="outline"
        color="secondary"
        fulled
        prefix-icon="file-lines"
        @click="downloadRules"
      >
        {{ $t('themePlayground.actions.downloadRules') }}
      </ui-button>
      <ui-button
        type="button"
        variant="solid"
        color="primary"
        fulled
        prefix-icon="download"
        @click="downloadSkill"
      >
        {{ $t('themePlayground.actions.downloadSkill') }}
      </ui-button>
    </div>
  </aside>
</template>
