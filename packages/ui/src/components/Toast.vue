<template>
  <Teleport to="body">
    <div class="ui-toast-host">
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
              v-for="child in item.children"
              :key="child.id"
              :class="childToastClasses(child)"
              class="pointer-events-auto"
              v-bind="childA11y(child)"
              @click="onToastClick(item)"
              @keydown.enter.prevent="onToastClick(item)"
              @keydown.space.prevent="onToastClick(item)"
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
              v-bind="toastA11y(item)"
              @click="onToastClick(item)"
              @keydown.enter.prevent="onToastClick(item)"
              @keydown.space.prevent="onToastClick(item)"
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
} from '../toast-queue.js'

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
  computed: {
    items() {
      return toastState.items
    },
    dismissLabel() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.alert.dismiss')
      }
      return 'Kapat'
    },
  },
  methods: {
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
    toastA11y(item) {
      const assertive = item.color === 'danger'
      const grouped = this.isGrouped(item)
      return {
        role: assertive ? 'alert' : 'status',
        'aria-live': assertive ? 'assertive' : 'polite',
        ...(grouped
          ? {
              'aria-expanded': 'false',
              tabindex: 0,
            }
          : {}),
      }
    },
    childA11y(child) {
      const assertive = child.color === 'danger'
      return {
        role: assertive ? 'alert' : 'status',
        'aria-live': assertive ? 'assertive' : 'polite',
        'aria-expanded': 'true',
        tabindex: 0,
      }
    },
  },
}
</script>
