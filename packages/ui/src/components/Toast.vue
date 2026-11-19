<template>
  <Teleport to="body">
    <div class="ui-toast-host">
      <!--
        Kalıcı canlı bölgeler: ekran okuyucu yalnız DOM'da önceden var olan bölgeye eklenen metni
        güvenilir okur. Görsel toast kartları rol taşımaz; duyuru buradan yapılır.
      -->
      <div
        class="sr-only"
        aria-live="polite"
        aria-relevant="additions"
      >
        <p
          v-for="m in politeMessages"
          :key="m.id"
        >{{ m.text }}</p>
      </div>
      <div
        class="sr-only"
        aria-live="assertive"
        aria-relevant="additions"
      >
        <p
          v-for="m in assertiveMessages"
          :key="m.id"
        >{{ m.text }}</p>
      </div>
      <TransitionGroup
        name="ui-toast"
        tag="div"
        class="ui-toast-stack pointer-events-none"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="pointer-events-none flex w-full justify-center"
        >
          <!-- Açık grup: her bildirim ayrı toast -->
          <div
            v-if="isGrouped(item) && item.expanded"
            class="ui-toast-expanded-stack"
            role="group"
            :aria-label="groupHeading(item)"
          >
            <div
              v-for="(child, index) in item.children"
              :key="child.id"
              :class="childToastClasses(child)"
              class="pointer-events-auto"
              @click="onToastClick(item)"
            >
              <span
                :class="['ui-alert-icon', iconToneClass(child.color)]"
                aria-hidden="true"
              >
                <ui-icon
                  :name="iconFor(child.color)"
                  size="sm"
                />
              </span>
              <div class="ui-alert-body min-w-0 flex-1">
                <p
                  v-if="child.title"
                  class="ui-alert-title"
                >
                  {{ child.title }}
                </p>
                <p
                  v-if="child.description"
                  class="ui-alert-description ui-text-default"
                >
                  {{ child.description }}
                </p>
              </div>
              <ui-button
                native-type="button"
                variant="ghost"
                color="secondary"
                cubed
                size="sm"
                class="ui-toast-dismiss shrink-0"
                prefix-icon="xmark"
                :aria-label="dismissLabel"
                @click.stop="queueDismissToastChild(item.id, child.id)"
              />
              <!-- Grubu daraltan gerçek düğme (klavye + ekran okuyucu); karta tıklamak da daraltır. -->
              <ui-button
                v-if="index === 0"
                native-type="button"
                variant="ghost"
                color="secondary"
                cubed
                size="sm"
                class="ui-toast-dismiss shrink-0"
                prefix-icon="chevron-up"
                aria-expanded="true"
                :aria-label="t('ui.toast.collapse')"
                @click.stop="toggleToastExpanded(item.id)"
              />
            </div>
          </div>

          <!-- Tek / kapalı grup -->
          <div
            v-else
            :class="deckClasses(item)"
          >
            <span
              v-for="n in stackSheetCount(item)"
              :key="`${item.id}-sheet-${n}`"
              class="ui-toast-deck-sheet"
              aria-hidden="true"
            />
            <div
              :class="toastClasses(item)"
              class="pointer-events-auto"
              @pointerenter="onToastPointerEnter($event, item)"
              @pointerleave="onToastPointerLeave($event, item)"
              @focusin="pauseToast(item.id)"
              @focusout="resumeToast(item.id)"
              @click="onToastClick(item)"
            >
              <span
                :class="['ui-alert-icon', iconToneClass(item.color)]"
                aria-hidden="true"
              >
                <ui-icon
                  :name="iconFor(item.color)"
                  size="sm"
                />
              </span>
              <div class="ui-alert-body min-w-0 flex-1">
                <p
                  v-if="collapsedTitle(item)"
                  class="ui-alert-title"
                >
                  {{ collapsedTitle(item) }}
                </p>
                <p
                  v-if="collapsedDescription(item)"
                  class="ui-alert-description ui-text-default"
                >
                  {{ collapsedDescription(item) }}
                </p>
              </div>
              <ui-button
                v-if="singleAction(item)"
                native-type="button"
                variant="ghost"
                color="primary"
                size="sm"
                class="ui-toast-action shrink-0"
                @click.stop="runAction(item)"
              >
                {{ singleAction(item).label }}
              </ui-button>
              <ui-button
                native-type="button"
                variant="ghost"
                color="secondary"
                cubed
                size="sm"
                class="ui-toast-dismiss shrink-0"
                prefix-icon="xmark"
                :aria-label="dismissLabel"
                @click.stop="queueDismissToast(item.id)"
              />
              <ui-button
                v-if="isGrouped(item)"
                native-type="button"
                variant="ghost"
                color="secondary"
                cubed
                size="sm"
                class="ui-toast-dismiss shrink-0"
                prefix-icon="chevron-down"
                aria-expanded="false"
                :aria-label="t('ui.toast.expand', { count: item.children.length })"
                @click.stop="toggleToastExpanded(item.id)"
              />
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script>
import {
  toastState,
  dismissToast as queueDismissToast,
  dismissToastChild as queueDismissToastChild,
  toggleToastExpanded,
  pauseToast,
  resumeToast,
} from '../toast-queue.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'

const COLOR_ICON = {
  info: 'circle-info',
  success: 'circle-check',
  warning: 'triangle-exclamation',
  danger: 'circle-xmark',
}

const COLOR_ICON_CLASS = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
}

export default {
  name: 'Toast',
  data() {
    return {
      /** @type {{ id: number, text: string, assertive: boolean }[]} */
      liveMessages: [],
    }
  },
  computed: {
    items() {
      return toastState.items
    },
    /** Görünen tüm bildirimlerin (grup çocukları dahil) kimlikleri — yeni geleni ayırt etmek için. */
    childIds() {
      return this.items.flatMap((item) => item.children.map((child) => child.id))
    },
    politeMessages() {
      return this.liveMessages.filter((m) => !m.assertive)
    },
    assertiveMessages() {
      return this.liveMessages.filter((m) => m.assertive)
    },
    dismissLabel() {
      return resolveUiText(this, 'ui.alert.dismiss', 'Dismiss')
    },
  },
  watch: {
    childIds(ids) {
      this.announceNew(ids)
    },
  },
  created() {
    this.announcedIds = new Set(this.childIds)
    this.liveTimers = new Set()
  },
  beforeUnmount() {
    for (const timer of this.liveTimers) clearTimeout(timer)
    this.liveTimers.clear()
  },
  methods: {
    pauseToast,
    resumeToast,
    /** Yeni gelen bildirimi canlı bölgeye yazar; metin okunduktan sonra bölgeden kaldırılır. */
    announceNew(ids) {
      const present = new Set(ids)
      for (const id of this.announcedIds) {
        if (!present.has(id)) this.announcedIds.delete(id)
      }
      for (const item of this.items) {
        for (const child of item.children) {
          if (this.announcedIds.has(child.id)) continue
          this.announcedIds.add(child.id)
          const text = [child.title, child.description].filter(Boolean).join('. ')
          if (!text) continue
          this.liveMessages.push({ id: child.id, text, assertive: child.color === 'danger' })
          const timer = setTimeout(() => {
            this.liveTimers.delete(timer)
            this.liveMessages = this.liveMessages.filter((m) => m.id !== child.id)
          }, 8000)
          this.liveTimers.add(timer)
        }
      }
    },
    /** Dokunmatik ekranda `pointerleave` gelmez; bekletme yalnız fare imleciyle çalışır. */
    onToastPointerEnter(e, item) {
      if (e.pointerType === 'mouse') pauseToast(item.id)
    },
    onToastPointerLeave(e, item) {
      if (e.pointerType === 'mouse') resumeToast(item.id)
    },
    queueDismissToast,
    queueDismissToastChild,
    toggleToastExpanded,
    isGrouped(item) {
      return Array.isArray(item.children) && item.children.length > 1
    },
    /** Kapalı grupta arkada görünen katman sayısı (1–2). */
    stackSheetCount(item) {
      if (!this.isGrouped(item) || item.expanded) return 0
      return Math.min(item.children.length - 1, 2)
    },
    deckClasses(item) {
      if (!this.isGrouped(item)) return 'ui-toast-deck'
      const layers = this.stackSheetCount(item)
      return [
        'ui-toast-deck',
        'ui-toast-deck--grouped',
        layers > 0 ? `ui-toast-deck--layers-${layers}` : '',
      ].filter(Boolean)
    },
    t(key, params) {
      if (typeof this.$t === 'function') {
        return this.$t(key, params)
      }
      if (key === 'ui.toast.groupCount') {
        return `${params?.count ?? 0}`
      }
      if (key === 'ui.toast.expand') return `Show ${params?.count ?? 0} notifications`
      if (key === 'ui.toast.collapse') return 'Collapse notifications'
      if (key === 'ui.toast.groupHeading') {
        return `${params?.count ?? 0}`
      }
      return key
    },
    collapsedTitle(item) {
      if (!this.isGrouped(item)) {
        return item.title || item.children?.[0]?.title || ''
      }
      const titles = item.children.map((c) => String(c.title || '').trim()).filter(Boolean)
      const unique = [...new Set(titles)]
      if (unique.length === 1) return unique[0]
      return item.children[0]?.title || item.title || ''
    },
    collapsedDescription(item) {
      if (!this.isGrouped(item)) {
        return item.description || item.children?.[0]?.description || ''
      }
      const count = item.children.length
      const titles = item.children.map((c) => String(c.title || '').trim()).filter(Boolean)
      const uniqueTitles = [...new Set(titles)]
      const bodies = item.children.map((c) => String(c.description || '').trim()).filter(Boolean)
      const uniqueBodies = [...new Set(bodies)]
      if (uniqueTitles.length === 1 && uniqueBodies.length === 1 && uniqueBodies[0]) {
        return `${uniqueBodies[0]} · ${this.t('ui.toast.groupCount', { count })}`
      }
      return this.t('ui.toast.groupCount', { count })
    },
    groupHeading(item) {
      return this.t('ui.toast.groupHeading', { count: item.children.length })
    },
    onToastClick(item) {
      if (!this.isGrouped(item)) return
      this.toggleToastExpanded(item.id)
    },
    iconFor(color) {
      return COLOR_ICON[color] || COLOR_ICON.info
    },
    iconToneClass(color) {
      return COLOR_ICON_CLASS[color] || COLOR_ICON_CLASS.info
    },
    toastClasses(item) {
      const v = item.color ?? 'info'
      return [
        `ui-alert ui-alert--${v} ui-alert--toast`,
        this.isGrouped(item) ? 'ui-alert--toast-grouped' : '',
      ].filter(Boolean)
    },
    childToastClasses(child) {
      const v = child.color ?? 'info'
      return [
        `ui-alert ui-alert--${v} ui-alert--toast`,
        'ui-alert--toast-grouped',
      ]
    },
    /** Eylem yalnız tekil toastta gösterilir. */
    singleAction(item) {
      return this.isGrouped(item) ? null : item.children?.[0]?.action || null
    },
    runAction(item) {
      const action = this.singleAction(item)
      if (!action) return
      action.onClick?.()
      if (!action.keepOpen) this.queueDismissToast(item.id)
    },
  },
}
</script>
