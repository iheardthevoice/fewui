<script>
import { defineComponent } from 'vue'
import { googleFontSelectOptions } from 'fewui'
import { NEUTRAL_SCALES, matchNeutralScale } from './neutral-scales.js'
import { PRIMARY_PALETTE } from './primary-palette.js'
import {
  buildThemeZip,
  downloadFile,
  exportAgentSkill,
  exportCursorRule,
} from './export-theme-bundle.js'

const ICON_TYPES = ['light', 'regular', 'solid', 'duotone', 'thin']
const CONTROL_SIZES = ['sm', 'md', 'lg']
/** Köşe kademeleri — `--radius`; kontroller yarı yüksekliği geçmez, `round` kontrolleri hap yapar. */
const RADIUS_PRESETS = { sharp: 4, soft: 12, round: 24 }

/**
 * @param {unknown} value
 * @returns {string}
 */
function firstFontFamily(value) {
  return String(value || '').split(',')[0].replace(/["']/g, '').trim()
}

/**
 * Tema oluşturucu paneli — yalnız kararlar: başlangıç teması, base, primary ve stil.
 * Diğer renkler base / primary'den türer; yüzey opaklığı ve durum renkleri temanın kendisindedir.
 */
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
      exportOpen: false,
      copied: false,
      menuOpen: false,
    }
  },
  computed: {
    draft() {
      return this.playground.draft
    },
    baseThemeId: {
      get() {
        return this.draft.baseThemeId
      },
      set(value) {
        this.playground.setBaseTheme(value)
      },
    },
    /** Base örnekleri — her skalanın 500 tonu; değer skala anahtarıdır. */
    baseScaleOptions() {
      return Object.entries(NEUTRAL_SCALES).map(([value, scale]) => ({
        value,
        label: this.$t(`themePlayground.neutral.${value}`),
        color: scale[500],
      }))
    },
    /** Tailwind skalası değilse boş — tetikleyici “Tema skalası” der. */
    baseScale() {
      return matchNeutralScale(this.playground.getToken('base')) || ''
    },
    /** Tailwind ana renkleri; başlangıç temasının kendi rengi paletin dışındaysa başa eklenir. */
    primaryOptions() {
      const palette = Object.entries(PRIMARY_PALETTE).map(([key, color]) => ({
        value: color,
        label: this.$t(`themePlayground.primary.${key}`),
      }))
      const themePrimary = String(this.playground.baseTheme.value?.preset.tokens.light.primary || '')
      const inPalette = palette.some((opt) => opt.value.toLowerCase() === themePrimary.toLowerCase())
      return themePrimary && !inPalette
        ? [{ value: themePrimary, label: this.$t('themePlayground.primary.theme') }, ...palette]
        : palette
    },
    primaryColor() {
      return String(this.playground.getToken('primary') || '')
    },
    fontOptions() {
      return googleFontSelectOptions()
    },
    /** En yakın köşe kademesi — tema ara bir değer kullanıyorsa (ör. 20px) ona en yakını seçili görünür. */
    radiusPreset() {
      const px = Number.parseFloat(String(this.playground.getToken('radius') || '0')) || 0
      return Object.entries(RADIUS_PRESETS).reduce((best, [key, value]) =>
        Math.abs(value - px) < Math.abs(RADIUS_PRESETS[best] - px) ? key : best,
      'soft')
    },
    radiusOptions() {
      return Object.keys(RADIUS_PRESETS).map((value) => ({
        value,
        label: this.$t(`themePlayground.radius.${value}`),
      }))
    },
    controlSizeOptions() {
      return CONTROL_SIZES.map((value) => ({ value, label: value.toUpperCase() }))
    },
    iconTypeOptions() {
      return ICON_TYPES.map((value) => ({ value, label: this.$t(`themePlayground.iconType.${value}`) }))
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
  },
  methods: {
    setBaseScale(id) {
      this.playground.setBaseScale(id)
    },
    /** @param {'body'|'heading'} slot */
    fontStack(slot) {
      return String(this.playground.theme.value.preset.fonts?.[slot] || '')
    },
    /**
     * Google Fonts listesi; temanın yazı tipi listede yoksa (ör. Liquid Glass `-apple-system`)
     * “Tema yazı tipi” olarak başa eklenir — seçim boş görünmesin.
     * @param {'body'|'heading'} slot
     */
    fontOptionsFor(slot) {
      const name = firstFontFamily(this.fontStack(slot))
      if (!name || this.fontOptions.some((opt) => opt.value === name)) return this.fontOptions
      return [{ value: name, label: this.$t('themePlayground.fields.themeFont'), fontFamily: this.fontStack(slot) }, ...this.fontOptions]
    },
    /** @param {'body'|'heading'} slot */
    fontValue(slot) {
      return firstFontFamily(this.fontStack(slot)) || null
    },
    /** @param {'body'|'heading'} slot */
    setFont(slot, value) {
      const option = this.fontOptionsFor(slot).find((opt) => opt.value === value)
      this.draft.fonts = { ...this.draft.fonts, [slot]: option?.fontFamily || value }
    },
    setRadius(preset) {
      const px = RADIUS_PRESETS[preset]
      if (px != null) this.playground.setToken('radius', `${px}px`)
    },
    downloadZip() {
      const data = this.playground.exportPackage()
      downloadFile(`${data.id}.zip`, buildThemeZip(data))
      this.exportOpen = false
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
  <aside class="flex h-full min-h-0 w-full flex-col">
    <div class="flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto px-4 py-5">
      <div class="flex flex-col gap-1">
        <p class="ui-heading-3 m-0">
          {{ $t('themePlayground.title') }}
        </p>
        <p class="ui-text-default m-0 text-muted-foreground">
          {{ $t('themePlayground.description') }}
        </p>
      </div>

      <section class="flex flex-col gap-4">
        <p class="ui-section-label m-0">
          {{ $t('themePlayground.sections.start') }}
        </p>
        <ui-form-row
          :label="$t('themePlayground.fields.base')"
          :description="$t('themePlayground.fields.baseHint')"
        >
          <ui-select
            v-model="baseThemeId"
            :options="playground.themeOptions.value"
          />
        </ui-form-row>
      </section>

      <section class="flex flex-col gap-4">
        <p class="ui-section-label m-0">
          {{ $t('themePlayground.sections.color') }}
        </p>
        <ui-form-row
          :label="$t('themePlayground.fields.baseScale')"
          :description="$t('themePlayground.fields.baseScaleHint')"
        >
          <ui-color-picker
            :model-value="baseScale"
            :options="baseScaleOptions"
            :show-custom="false"
            :show-clear="false"
            :trigger-placeholder="$t('themePlayground.neutral.custom')"
            :popover-title="$t('themePlayground.fields.baseScale')"
            @update:model-value="setBaseScale"
          />
        </ui-form-row>
        <ui-form-row
          :label="$t('themePlayground.fields.primary')"
          :description="$t('themePlayground.fields.primaryHint')"
        >
          <ui-color-picker
            :model-value="primaryColor"
            :options="primaryOptions"
            :show-clear="false"
            :popover-title="$t('themePlayground.fields.primary')"
            :custom-color-label="$t('themePlayground.primary.custom')"
            @update:model-value="playground.setPrimaryColor($event)"
          />
        </ui-form-row>
      </section>

      <section class="flex flex-col gap-4">
        <p class="ui-section-label m-0">
          {{ $t('themePlayground.sections.style') }}
        </p>
        <ui-form-row :label="$t('themePlayground.fields.headingFont')">
          <ui-select
            :model-value="fontValue('heading')"
            :options="fontOptionsFor('heading')"
            filterable
            @update:model-value="setFont('heading', $event)"
          />
        </ui-form-row>
        <ui-form-row :label="$t('themePlayground.fields.bodyFont')">
          <ui-select
            :model-value="fontValue('body')"
            :options="fontOptionsFor('body')"
            filterable
            @update:model-value="setFont('body', $event)"
          />
        </ui-form-row>
        <ui-form-row :label="$t('themePlayground.fields.radius')">
          <ui-segment-group
            :model-value="radiusPreset"
            size="sm"
            block
            :scrollable="false"
            :aria-label="$t('themePlayground.fields.radius')"
            @update:model-value="setRadius"
          >
            <ui-segment
              v-for="opt in radiusOptions"
              :key="opt.value"
              :value="opt.value"
              :label="opt.label"
            />
          </ui-segment-group>
        </ui-form-row>
        <ui-form-row :label="$t('themePlayground.fields.controlSize')">
          <ui-segment-group
            :model-value="playground.getDefault('controlSize')"
            size="sm"
            block
            :scrollable="false"
            :aria-label="$t('themePlayground.fields.controlSize')"
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
        <ui-form-row :label="$t('themePlayground.fields.iconType')">
          <ui-select
            :model-value="playground.getDefault('iconType')"
            :options="iconTypeOptions"
            @update:model-value="playground.setDefault('iconType', $event)"
          />
        </ui-form-row>
      </section>
    </div>

    <div class="flex shrink-0 gap-2 border-t border-border px-4 py-3">
      <div class="min-w-0 flex-1">
        <ui-button
          prefix-icon="file-zipper"
          block
          rounded
          @click="exportOpen = true"
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
      v-model:open="exportOpen"
      :title="$t('themePlayground.export.title')"
      :description="$t('themePlayground.export.description')"
    >
      <div class="flex flex-col gap-4">
        <ui-form-row :label="$t('themePlayground.fields.label')">
          <ui-input v-model="draft.label" />
        </ui-form-row>
        <ui-form-row
          :label="$t('themePlayground.fields.id')"
          :description="$t('themePlayground.fields.idHint')"
        >
          <ui-input
            v-model="draft.id"
            autocomplete="off"
          />
        </ui-form-row>
      </div>
      <template #footer>
        <ui-button
          prefix-icon="download"
          rounded
          @click="downloadZip"
        >
          {{ $t('themePlayground.export.submit') }}
        </ui-button>
      </template>
    </ui-dialog>

    <ui-dialog
      v-model:open="importOpen"
      :title="$t('themePlayground.import.title')"
      :description="$t('themePlayground.import.description')"
    >
      <div class="flex flex-col gap-4">
        <ui-alert
          v-if="importError"
          color="danger"
          :description="$t('themePlayground.import.invalid')"
        />
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
          rounded
          :disabled="!importText.trim()"
          @click="submitImport"
        >
          {{ $t('themePlayground.import.submit') }}
        </ui-button>
      </template>
    </ui-dialog>
  </aside>
</template>
