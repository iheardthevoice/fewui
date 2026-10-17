<script>
import { defineComponent } from 'vue'
import {
  BACKDROP_BLUR_SCALE,
  CARD_PADDING_SCALE,
  MIX_FROM_MAP,
  TOKEN_GROUPS,
  googleFontSelectOptions,
} from 'fewui'
import { NEUTRAL_SCALES, matchNeutralScale } from './neutral-scales.js'
import {
  buildThemeZip,
  downloadFile,
  exportAgentSkill,
  exportCursorRule,
} from './export-theme-bundle.js'

const SURFACE_STYLES = ['surfaceStyle', 'controlStyle', 'inputStyle']
const COLOR_TOKENS = TOKEN_GROUPS.colors.filter((key) => key !== 'primary' && key !== 'white')
const ICON_TYPES = ['light', 'regular', 'solid', 'duotone', 'thin']
const DIALOG_WIDTHS = ['sm', 'md', 'lg', 'xl']
const CONTROL_SIZES = ['sm', 'md', 'lg']

/**
 * @param {unknown} value
 * @returns {string}
 */
function firstFontFamily(value) {
  return String(value || '').split(',')[0].replace(/["']/g, '').trim()
}

export default defineComponent({
  name: 'ThemePlaygroundSidebar',
  props: {
    /** `useThemePlayground()` dönüşü. */
    playground: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      importOpen: false,
      importText: '',
      importError: false,
      copied: false,
      menuOpen: false,
    }
  },
  computed: {
    draft() {
      return this.playground.draft
    },
    editMode: {
      get() {
        return this.playground.editMode.value
      },
      set(value) {
        this.playground.editMode.value = value
      },
    },
    baseThemeId: {
      get() {
        return this.draft.baseThemeId
      },
      set(value) {
        this.playground.setBaseTheme(value)
      },
    },
    modeOptions() {
      return ['light', 'dark'].map((value) => ({
        value,
        label: this.$t(`themePlayground.mode.${value}`),
      }))
    },
    colorTokens() {
      return COLOR_TOKENS
    },
    statusTokens() {
      return TOKEN_GROUPS.status
    },
    surfaceStyles() {
      return SURFACE_STYLES
    },
    neutralOptions() {
      return [
        ...Object.keys(NEUTRAL_SCALES).map((value) => ({
          value,
          label: this.$t(`themePlayground.neutral.${value}`),
        })),
        { value: 'custom', label: this.$t('themePlayground.neutral.custom') },
      ]
    },
    neutralScale() {
      return matchNeutralScale(this.playground.getToken('base', 'light')) || 'custom'
    },
    mixFromOptions() {
      return Object.keys(MIX_FROM_MAP).map((value) => ({
        value: `var(--${value})`,
        label: this.$t(`themePlayground.mixFrom.${value}`),
      }))
    },
    blurOptions() {
      return Object.entries(BACKDROP_BLUR_SCALE).map(([key, value]) => ({
        value,
        label: key === 'DEFAULT' ? value : `${key} · ${value}`,
      }))
    },
    fontOptions() {
      return googleFontSelectOptions()
    },
    cardPaddingOptions() {
      return Object.keys(CARD_PADDING_SCALE).map((value) => ({
        value,
        label: this.$t(`themePlayground.cardPadding.${value}`),
      }))
    },
    iconTypeOptions() {
      return ICON_TYPES.map((value) => ({ value, label: this.$t(`themePlayground.iconType.${value}`) }))
    },
    buttonRoundedOptions() {
      return ['lg', 'full'].map((value) => ({
        value,
        label: this.$t(`themePlayground.buttonRounded.${value}`),
      }))
    },
    controlSizeOptions() {
      return CONTROL_SIZES.map((value) => ({ value, label: value.toUpperCase() }))
    },
    dialogWidthOptions() {
      return DIALOG_WIDTHS.map((value) => ({ value, label: value.toUpperCase() }))
    },
    menuItems() {
      return [
        { value: 'copy', icon: 'copy', label: this.$t('themePlayground.actions.copyJson') },
        { value: 'import', icon: 'file-import', label: this.$t('themePlayground.actions.importJson') },
        { divider: true },
        { value: 'rule', icon: 'file-lines', label: this.$t('themePlayground.actions.downloadRules') },
        { value: 'skill', icon: 'wand-magic-sparkles', label: this.$t('themePlayground.actions.downloadSkill') },
        { divider: true },
        { value: 'reset', icon: 'rotate-left', label: this.$t('themePlayground.actions.reset'), color: 'danger' },
      ]
    },
    radiusPx() {
      return Number.parseFloat(String(this.playground.getToken('radius') || '0')) || 0
    },
    cardPadding() {
      const value = this.playground.getToken('cardPadding')
      return Object.entries(CARD_PADDING_SCALE).find(([key, size]) => value === key || value === size)?.[0] || 'default'
    },
  },
  methods: {
    tokenValue(key) {
      return this.playground.getToken(key) ?? ''
    },
    setToken(key, value) {
      this.playground.setToken(key, value)
    },
    styleField(key, field) {
      return this.playground.getToken(key)?.[field] ?? ''
    },
    styleOpacity(key) {
      return Number.parseFloat(String(this.styleField(key, 'opacity') || '100')) || 0
    },
    setStyleField(key, field, value) {
      this.playground.setStyleField(key, field, value)
    },
    setNeutralScale(id) {
      const scale = NEUTRAL_SCALES[id]
      if (!scale) return
      this.playground.setToken('base', { ...scale }, 'light')
      delete this.draft.tokens.dark.base
    },
    fontValue(slot) {
      const name = firstFontFamily(this.playground.theme.value.preset.fonts?.[slot])
      return this.fontOptions.find((opt) => opt.value === name)?.value ?? null
    },
    setFont(slot, value) {
      const option = this.fontOptions.find((opt) => opt.value === value)
      this.draft.fonts = { ...this.draft.fonts, [slot]: option?.fontFamily || value }
    },
    tokenLabel(key) {
      return this.$t(`themePlayground.tokens.${key}`)
    },
    styleLabel(key) {
      return this.$t(`themePlayground.styles.${key}`)
    },
    downloadZip() {
      const data = this.playground.exportPackage()
      downloadFile(`${data.id}.zip`, buildThemeZip(data))
    },
    async copyJson() {
      await navigator.clipboard?.writeText(JSON.stringify(this.playground.exportPackage(), null, 2))
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 1500)
    },
    downloadRules() {
      const data = this.playground.exportPackage()
      downloadFile(`fewui-${data.id}.mdc`, exportCursorRule(data))
    },
    downloadSkill() {
      downloadFile('SKILL.md', exportAgentSkill(this.playground.exportPackage()))
    },
    onMenuSelect(item) {
      const actions = {
        copy: this.copyJson,
        import: this.openImport,
        rule: this.downloadRules,
        skill: this.downloadSkill,
        reset: () => this.playground.reset(),
      }
      actions[item.value]?.()
    },
    openImport() {
      this.importText = ''
      this.importError = false
      this.importOpen = true
    },
    submitImport() {
      try {
        this.playground.importPackage(this.importText)
        this.importOpen = false
      } catch {
        this.importError = true
      }
    },
  },
})
</script>

<template>
  <aside class="flex h-full w-80 shrink-0 flex-col border-r border-border bg-background">
    <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4">
      <div>
        <p class="text-sm font-medium text-foreground">
          {{ $t('themePlayground.title') }}
        </p>
        <p class="mt-1 text-xs text-muted-foreground">
          {{ $t('themePlayground.description') }}
        </p>
      </div>

      <ui-form-row
        :label="$t('themePlayground.fields.base')"
        :description="$t('themePlayground.fields.baseHint')"
      >
        <ui-select
          v-model="baseThemeId"
          :options="playground.themeOptions.value"
        />
      </ui-form-row>
      <ui-form-row :label="$t('themePlayground.fields.label')">
        <ui-input v-model="draft.label" />
      </ui-form-row>
      <ui-form-row :label="$t('themePlayground.fields.id')">
        <ui-input
          v-model="draft.id"
          autocomplete="off"
        />
      </ui-form-row>

      <ui-divider :title="$t('themePlayground.sections.mode')" />
      <ui-form-row :description="$t('themePlayground.fields.editModeHint')">
        <ui-segment-group
          v-model="editMode"
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

      <ui-divider :title="$t('themePlayground.sections.colors')" />
      <ui-form-row :label="tokenLabel('primary')">
        <ui-color-picker
          :model-value="tokenValue('primary')"
          @update:model-value="setToken('primary', $event)"
        />
        <template #action>
          <ui-button
            variant="link"
            size="sm"
            @click="playground.deriveFromPrimary()"
          >
            {{ $t('themePlayground.actions.derive') }}
          </ui-button>
        </template>
      </ui-form-row>
      <ui-form-row
        v-for="key in colorTokens"
        :key="key"
        :label="tokenLabel(key)"
      >
        <ui-color-picker
          :model-value="tokenValue(key)"
          @update:model-value="setToken(key, $event)"
        />
      </ui-form-row>

      <ui-divider :title="$t('themePlayground.sections.status')" />
      <ui-form-row
        v-for="key in statusTokens"
        :key="key"
        :label="tokenLabel(key)"
      >
        <ui-color-picker
          :model-value="tokenValue(key)"
          @update:model-value="setToken(key, $event)"
        />
      </ui-form-row>
      <ui-form-row :label="$t('themePlayground.fields.neutral')">
        <ui-select
          :model-value="neutralScale"
          :options="neutralOptions"
          @update:model-value="setNeutralScale"
        />
      </ui-form-row>

      <ui-divider :title="$t('themePlayground.sections.surfaces')" />
      <template
        v-for="key in surfaceStyles"
        :key="key"
      >
        <ui-form-row :label="styleLabel(key)">
          <ui-select
            :model-value="styleField(key, 'mixFrom')"
            :options="mixFromOptions"
            @update:model-value="setStyleField(key, 'mixFrom', $event)"
          />
        </ui-form-row>
        <ui-slider
          :model-value="styleOpacity(key)"
          :min="0"
          :max="100"
          :label="$t('themePlayground.fields.opacity')"
          :value-text="`${styleOpacity(key)}%`"
          @update:model-value="setStyleField(key, 'opacity', `${$event}%`)"
        />
        <ui-form-row :label="$t('themePlayground.fields.blur')">
          <ui-select
            :model-value="styleField(key, 'backdropBlur')"
            :options="blurOptions"
            @update:model-value="setStyleField(key, 'backdropBlur', $event)"
          />
        </ui-form-row>
      </template>

      <ui-divider :title="$t('themePlayground.sections.typography')" />
      <ui-form-row :label="$t('themePlayground.fields.bodyFont')">
        <ui-select
          :model-value="fontValue('body')"
          :options="fontOptions"
          filterable
          @update:model-value="setFont('body', $event)"
        />
      </ui-form-row>
      <ui-form-row :label="$t('themePlayground.fields.headingFont')">
        <ui-select
          :model-value="fontValue('heading')"
          :options="fontOptions"
          filterable
          @update:model-value="setFont('heading', $event)"
        />
      </ui-form-row>

      <ui-divider :title="$t('themePlayground.sections.shape')" />
      <ui-slider
        :model-value="radiusPx"
        :min="0"
        :max="32"
        :label="$t('themePlayground.fields.radius')"
        :value-text="`${radiusPx}px`"
        @update:model-value="setToken('radius', `${$event}px`)"
      />
      <ui-form-row :label="$t('themePlayground.fields.cardPadding')">
        <ui-select
          :model-value="cardPadding"
          :options="cardPaddingOptions"
          @update:model-value="setToken('cardPadding', $event)"
        />
      </ui-form-row>

      <ui-divider :title="$t('themePlayground.sections.components')" />
      <ui-form-row :label="$t('themePlayground.fields.iconType')">
        <ui-select
          :model-value="playground.getDefault('iconType')"
          :options="iconTypeOptions"
          @update:model-value="playground.setDefault('iconType', $event)"
        />
      </ui-form-row>
      <ui-form-row :label="$t('themePlayground.fields.buttonRounded')">
        <ui-segment-group
          :model-value="playground.getDefault('buttonRounded')"
          block
          @update:model-value="playground.setDefault('buttonRounded', $event)"
        >
          <ui-segment
            v-for="opt in buttonRoundedOptions"
            :key="opt.value"
            :value="opt.value"
            :label="opt.label"
          />
        </ui-segment-group>
      </ui-form-row>
      <ui-form-row :label="$t('themePlayground.fields.controlSize')">
        <ui-segment-group
          :model-value="playground.getDefault('controlSize')"
          block
          @update:model-value="playground.setDefault('controlSize', $event)"
        >
          <ui-segment
            v-for="opt in controlSizeOptions"
            :key="opt.value"
            :value="opt.value"
            :label="opt.label"
          />
        </ui-segment-group>
      </ui-form-row>
      <ui-form-row :label="$t('themePlayground.fields.dialogMaxWidth')">
        <ui-segment-group
          :model-value="playground.getDefault('dialogMaxWidth')"
          block
          @update:model-value="playground.setDefault('dialogMaxWidth', $event)"
        >
          <ui-segment
            v-for="opt in dialogWidthOptions"
            :key="opt.value"
            :value="opt.value"
            :label="opt.label"
          />
        </ui-segment-group>
      </ui-form-row>

      <ui-divider :title="$t('themePlayground.sections.css')" />
      <ui-form-row :description="$t('themePlayground.fields.customCssHint')">
        <ui-input
          v-model="draft.customCss"
          multiline
          :rows="5"
          :placeholder="$t('themePlayground.fields.customCssPlaceholder')"
        />
      </ui-form-row>
    </div>

    <div class="flex shrink-0 gap-2 border-t border-border p-4">
      <div class="min-w-0 flex-1">
        <ui-button
          prefix-icon="file-zipper"
          block
          @click="downloadZip"
        >
          {{ $t('themePlayground.actions.downloadZip') }}
        </ui-button>
      </div>
      <ui-dropdown
        v-model:open="menuOpen"
        placement="top-end"
        :items="menuItems"
        @select="onMenuSelect"
      >
        <template #trigger="{ toggle, open }">
          <ui-button
            variant="outline"
            color="secondary"
            cubed
            :prefix-icon="copied ? 'check' : 'ellipsis'"
            :aria-expanded="open ? 'true' : 'false'"
            aria-haspopup="menu"
            :aria-label="$t('themePlayground.actions.more')"
            @click="toggle"
          />
        </template>
      </ui-dropdown>
    </div>

    <ui-dialog
      v-model:open="importOpen"
      :title="$t('themePlayground.import.title')"
      :description="$t('themePlayground.import.description')"
    >
      <div class="flex flex-col gap-4">
        <ui-alert
          v-if="importError"
          color="danger"
        >
          {{ $t('themePlayground.import.invalid') }}
        </ui-alert>
        <ui-form-row :label="$t('themePlayground.import.field')">
          <ui-input
            v-model="importText"
            multiline
            :rows="10"
            :placeholder="$t('themePlayground.import.placeholder')"
          />
        </ui-form-row>
      </div>
      <template #footer>
        <ui-button
          prefix-icon="file-import"
          :disabled="!importText.trim()"
          @click="submitImport"
        >
          {{ $t('themePlayground.import.submit') }}
        </ui-button>
      </template>
    </ui-dialog>
  </aside>
</template>
