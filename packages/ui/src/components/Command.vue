<template>
  <component
    :is="inline ? 'div' : 'ui-command-dialog'"
    v-bind="shellAttrs"
    @update:open="$emit('update:open', $event)"
  >
    <div
      ref="root"
      class="ui-command"
      :class="inline ? 'ui-command--inline' : ''"
      @keydown="onKeydown"
    >
      <div class="ui-command-search">
        <span
          class="ui-command-search-icon"
          aria-hidden="true"
        >
          <ui-icon
            :name="loading ? 'spinner' : 'magnifying-glass'"
            size="sm"
            :class="loading ? 'fa-spin' : ''"
          />
        </span>
        <input
          ref="input"
          class="ui-command-input"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="true"
          :aria-controls="listId"
          :aria-activedescendant="activeId"
          :aria-label="resolvedPlaceholder"
          :placeholder="resolvedPlaceholder"
          :value="currentQuery"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          @input="onInput"
        >
      </div>
      <div
        :id="listId"
        ref="list"
        class="ui-command-list"
        role="listbox"
        :aria-label="resolvedListLabel"
        :aria-busy="loading ? 'true' : undefined"
        @mousedown.prevent
      >
        <div
          v-for="group in visibleGroups"
          :key="group.key"
          class="ui-command-group"
          :role="group.label ? 'group' : 'presentation'"
          :aria-labelledby="group.label ? group.labelId : undefined"
        >
          <div
            v-if="group.label"
            :id="group.labelId"
            class="ui-command-group-label"
            role="presentation"
          >{{ group.label }}</div>
          <div
            v-for="option in group.options"
            :id="option.id"
            :key="option.id"
            class="ui-command-item"
            role="option"
            :aria-selected="option.position === activePosition ? 'true' : 'false'"
            :aria-disabled="option.item.disabled ? 'true' : undefined"
            @pointermove="setActive(option.position)"
            @click="select(option.item)"
          >
            <slot
              name="item"
              :item="option.item"
              :active="option.position === activePosition"
            >
              <span
                v-if="hasIcons"
                class="ui-command-item-icon"
                aria-hidden="true"
              >
                <ui-icon
                  v-if="option.item.icon"
                  :name="option.item.icon"
                  size="sm"
                />
              </span>
              <span class="ui-command-item-copy">
                <span class="ui-command-item-label">{{ option.item.label }}</span>
                <span
                  v-if="option.item.description"
                  class="ui-command-item-description"
                >{{ option.item.description }}</span>
              </span>
              <kbd
                v-if="option.item.shortcut"
                class="ui-kbd ui-kbd--md ui-command-item-shortcut"
              >{{ option.item.shortcut }}</kbd>
            </slot>
          </div>
        </div>
      </div>
      <!-- Canlı bölge kalıcıdır; sonuç kalmayınca metin eklenir ve ekran okuyucu duyurur. -->
      <div
        class="ui-command-empty"
        role="status"
        aria-live="polite"
      >
        <template v-if="!options.length">
          <slot
            name="empty"
            :query="currentQuery"
          >{{ loading ? resolvedLoadingText : resolvedEmptyText }}</slot>
        </template>
      </div>
    </div>
  </component>
</template>

<script>
import { createUiIdFactory } from '../utils/ui-id.js'
import { foldText } from '../utils/fold-text.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import Dialog from './Dialog.vue'

const nextCommandId = createUiIdFactory('ui-command')

/** PageUp / PageDown adımı (seçenek). */
const PAGE_STEP = 8

const fold = (text) => foldText(text, { diacritics: true })

/**
 * Varsayılan eşleşme: sorgudaki her kelime etiket + anahtar kelimelerde geçmeli.
 * Büyük / küçük harf, aksan ve Türkçe İ/ı ayrımı yok sayılır.
 */
function defaultFilter(item, query) {
  const words = fold(query).split(/\s+/).filter(Boolean)
  if (!words.length) return true
  const keywords = Array.isArray(item.keywords) ? item.keywords.join(' ') : (item.keywords || '')
  const haystack = fold(`${item.label || ''} ${keywords}`)
  return words.every((word) => haystack.includes(word))
}

/** `"mod+k"` → `{ key, ctrl, meta, shift, alt }`; `mod` Apple'da ⌘, diğerlerinde Ctrl. */
function parseHotkey(hotkey, apple) {
  const parts = String(hotkey || '').toLowerCase().split('+').map((p) => p.trim()).filter(Boolean)
  if (!parts.length) return null
  const key = parts.pop()
  const combo = { key, ctrl: false, meta: false, shift: false, alt: false }
  for (const part of parts) {
    if (part === 'mod') combo[apple ? 'meta' : 'ctrl'] = true
    else if (part === 'ctrl' || part === 'control') combo.ctrl = true
    else if (part === 'meta' || part === 'cmd' || part === 'command') combo.meta = true
    else if (part === 'shift') combo.shift = true
    else if (part === 'alt' || part === 'option') combo.alt = true
  }
  return combo
}

/**
 * Komut paleti (WAI-ARIA Combobox + Listbox). Odak arama alanında kalır; etkin seçenek
 * `aria-activedescendant` ile bildirilir. Varsayılan kullanım dialog içindedir (`v-model:open`);
 * `inline` ile liste yerinde çizilir.
 */
export default {
  name: 'Command',
  components: { 'ui-command-dialog': Dialog },
  inheritAttrs: false,
  props: {
    /** `v-model:open` — palet (dialog) kullanımı. */
    open: {
      type: Boolean,
      default: false,
    },
    /** true: dialog olmadan, liste bulunduğu yerde çizilir. */
    inline: {
      type: Boolean,
      default: false,
    },
    /** `[{ id, label, description, icon, shortcut, keywords, group, disabled, to }]` */
    items: {
      type: Array,
      default: () => [],
    },
    /** `[{ label, items }]` — verilirse `items` yerine kullanılır. */
    groups: {
      type: Array,
      default: () => [],
    },
    /** `v-model:query` — verilmezse arama metni içeride tutulur. */
    query: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: '',
    },
    emptyText: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Eşleşme fonksiyonu `(item, query) => boolean`. Varsayılan: etiket + `keywords` içinde
     * harf / aksan duyarsız arama. Sunucu taraflı aramada `() => true` verilip `update:query` dinlenir.
     */
    filter: {
      type: Function,
      default: null,
    },
    /** Paleti açıp kapatan genel kısayol (örn. `mod+k`); `inline` iken arama alanına odaklar. */
    hotkey: {
      type: String,
      default: '',
    },
  },
  emits: ['update:open', 'update:query', 'select'],
  data() {
    return {
      uid: nextCommandId(),
      internalQuery: '',
      /** Etkin seçeneğin `options` içindeki sırası. */
      activePosition: 0,
    }
  },
  computed: {
    listId() {
      return `${this.uid}-list`
    },
    shellAttrs() {
      if (this.inline) return { class: this.$attrs.class }
      return {
        ...this.$attrs,
        open: this.open,
        showClose: false,
        bodyPadding: 'none',
        maxWidth: 'lg',
        ariaLabel: this.resolvedListLabel,
      }
    },
    currentQuery() {
      return this.query !== undefined ? this.query : this.internalQuery
    },
    resolvedPlaceholder() {
      return this.placeholder || resolveUiText(this, 'ui.command.placeholder', 'Type a command or search…')
    },
    resolvedEmptyText() {
      return this.emptyText || resolveUiText(this, 'ui.command.empty', 'No results found.')
    },
    resolvedLoadingText() {
      return resolveUiText(this, 'ui.command.loading', 'Searching…')
    },
    resolvedListLabel() {
      return resolveUiText(this, 'ui.command.label', 'Command palette')
    },
    /** Kaynak gruplar: `groups` ya da `items` içindeki `group` adına göre (ilk görülme sırası). */
    sourceGroups() {
      if (this.groups.length) {
        return this.groups.map((group) => ({ label: group?.label || '', items: group?.items || [] }))
      }
      const byLabel = new Map()
      for (const item of this.items) {
        if (!item) continue
        const label = item.group || ''
        if (!byLabel.has(label)) byLabel.set(label, [])
        byLabel.get(label).push(item)
      }
      return [...byLabel].map(([label, items]) => ({ label, items }))
    },
    /** Süzülmüş gruplar; her seçenek düz listedeki sırasını (`position`) taşır. */
    visibleGroups() {
      const match = this.filter || defaultFilter
      const query = this.currentQuery
      const out = []
      let position = 0
      this.sourceGroups.forEach((group, groupIndex) => {
        const options = []
        for (const item of group.items) {
          if (!item || !match(item, query)) continue
          options.push({ item, position, id: `${this.uid}-option-${position}` })
          position += 1
        }
        if (options.length) {
          out.push({
            key: `${groupIndex}-${group.label}`,
            label: group.label,
            labelId: `${this.uid}-group-${groupIndex}`,
            options,
          })
        }
      })
      return out
    },
    options() {
      return this.visibleGroups.flatMap((group) => group.options)
    },
    hasIcons() {
      return this.sourceGroups.some((group) => group.items.some((item) => item?.icon))
    },
    activeId() {
      const option = this.options[this.activePosition]
      return option && !option.item.disabled ? option.id : undefined
    },
  },
  watch: {
    open(value) {
      // Her açılış temiz başlar: arama boş, ilk seçenek etkin.
      if (value && !this.inline) this.setQuery('')
      if (value) this.resetActive()
    },
    currentQuery() {
      this.resetActive()
    },
    options() {
      const option = this.options[this.activePosition]
      if (!option || option.item.disabled) this.resetActive()
    },
  },
  mounted() {
    const platform = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || ''
    this.apple = /mac|iphone|ipad|ipod/i.test(platform)
    document.addEventListener('keydown', this.onHotkey)
    this.resetActive()
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onHotkey)
  },
  methods: {
    /** Arama alanına odaklan (dışarıdan `ref` ile çağrılabilir). */
    focus() {
      this.$refs.input?.focus()
    },
    setQuery(value) {
      if (value === this.currentQuery) return
      this.internalQuery = value
      this.$emit('update:query', value)
    },
    onInput(e) {
      this.setQuery(e.target.value)
    },
    resetActive() {
      this.activePosition = Math.max(0, this.options.findIndex((option) => !option.item.disabled))
      this.$nextTick(() => {
        if (this.$refs.list) this.$refs.list.scrollTop = 0
      })
    },
    setActive(position) {
      if (position === this.activePosition) return
      if (this.options[position]?.item.disabled) return
      this.activePosition = position
    },
    /** Etkin seçeneği `step` kadar taşır; devre dışı seçenekler atlanır. `wrap` uçlarda döner. */
    moveActive(step, wrap) {
      const n = this.options.length
      if (!n) return
      const direction = step < 0 ? -1 : 1
      const enabled = (i) => i >= 0 && i < n && !this.options[i].item.disabled
      let position = this.activePosition + step
      position = wrap ? ((position % n) + n) % n : Math.min(n - 1, Math.max(0, position))
      // Hedef devre dışıysa aynı yönde ilk kullanılabilir seçenek; uçta kalırsa geriye doğru aranır.
      let found = -1
      for (let i = 0; i < n && found < 0; i += 1) {
        const next = position + direction * i
        const index = wrap ? ((next % n) + n) % n : next
        if (enabled(index)) found = index
      }
      for (let i = 1; i < n && found < 0; i += 1) {
        if (enabled(position - direction * i)) found = position - direction * i
      }
      if (found < 0) return
      this.activePosition = found
      this.scrollActiveIntoView()
    },
    moveToEdge(last) {
      const enabled = this.options.filter((option) => !option.item.disabled)
      if (!enabled.length) return
      this.activePosition = (last ? enabled[enabled.length - 1] : enabled[0]).position
      this.scrollActiveIntoView()
    },
    scrollActiveIntoView() {
      this.$nextTick(() => {
        const id = this.options[this.activePosition]?.id
        const el = id ? document.getElementById(id) : null
        el?.scrollIntoView({ block: 'nearest' })
      })
    },
    onKeydown(e) {
      // IME bileşimi sürerken Enter / oklar öneri penceresine aittir.
      if (e.isComposing) return
      const keys = {
        ArrowDown: () => this.moveActive(1, true),
        ArrowUp: () => this.moveActive(-1, true),
        PageDown: () => this.moveActive(PAGE_STEP, false),
        PageUp: () => this.moveActive(-PAGE_STEP, false),
        Home: () => this.moveToEdge(false),
        End: () => this.moveToEdge(true),
        Enter: () => {
          const option = this.options[this.activePosition]
          if (option) this.select(option.item)
        },
      }
      if (!keys[e.key]) return
      e.preventDefault()
      keys[e.key]()
    },
    /** Seçim: `select` olayı, `to` varsa yönlendirme, palet kullanımında kapanış. */
    select(item) {
      if (!item || item.disabled) return
      this.$emit('select', item)
      if (item.to != null && item.to !== '' && this.$router) this.$router.push(item.to)
      if (!this.inline) this.$emit('update:open', false)
    },
    onHotkey(e) {
      if (!this.hotkey || e.repeat) return
      const combo = parseHotkey(this.hotkey, this.apple)
      if (!combo) return
      if (
        String(e.key).toLowerCase() !== combo.key
        || e.ctrlKey !== combo.ctrl
        || e.metaKey !== combo.meta
        || e.shiftKey !== combo.shift
        || e.altKey !== combo.alt
      ) return
      // Başka bir alana yazılırken kısayol çalışmaz; paletin kendi alanı hariç.
      const target = e.target
      const typing = target?.closest?.('input, textarea, select, [contenteditable="true"]')
      if (typing && typing !== this.$refs.input) return
      e.preventDefault()
      if (this.inline) this.focus()
      else this.$emit('update:open', !this.open)
    },
  },
}
</script>
