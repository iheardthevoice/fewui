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
          <div
            :class="toastClasses(item)"
            class="pointer-events-auto"
            v-bind="toastA11y(item)"
            @click="onToastClick(item)"
            @keydown.enter.prevent="onToastClick(item)"
            @keydown.space.prevent="onToastClick(item)"
          >
            <span
              :class="['ui-alert-icon', iconToneClass(item.variant)]"
              aria-hidden="true"
            >
              <ui-icon
                :name="iconFor(item.variant)"
                size="sm"
              />
            </span>
            <div class="ui-alert-body min-w-0 flex-1">
              <template v-if="isGrouped(item) && item.expanded">
                <p class="ui-alert-title">
                  {{ groupHeading(item) }}
                </p>
                <ul
                  class="ui-toast-group-list"
                  :aria-label="groupHeading(item)"
                >
                  <li
                    v-for="child in item.children"
                    :key="child.id"
                    class="ui-toast-group-item"
                  >
                    <p
                      v-if="child.title"
                      class="ui-toast-group-item-title"
                    >
                      {{ child.title }}
                    </p>
                    <p
                      v-if="child.description"
                      class="ui-alert-description ui-text-default"
                    >
                      {{ child.description }}
                    </p>
                  </li>
                </ul>
              </template>
              <template v-else>
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
              </template>
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
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script>
import {
  toastState,
  dismissToast as queueDismissToast,
  toggleToastExpanded,
} from '../toast-queue.js'

const VARIANT_ICON = {
  info: 'circle-info',
  success: 'circle-check',
  warning: 'triangle-exclamation',
  error: 'circle-xmark',
}

const VARIANT_ICON_CLASS = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
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
    toggleToastExpanded,
    isGrouped(item) {
      return Array.isArray(item.children) && item.children.length > 1
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
    iconFor(variant) {
      return VARIANT_ICON[variant] || VARIANT_ICON.info
    },
    iconToneClass(variant) {
      return VARIANT_ICON_CLASS[variant] || VARIANT_ICON_CLASS.info
    },
    toastClasses(item) {
      const v = item.variant ?? 'info'
      return [
        `ui-alert ui-alert--${v} ui-alert--toast`,
        this.isGrouped(item) ? 'ui-alert--toast-grouped' : '',
        item.expanded ? 'ui-alert--toast-expanded' : '',
      ].filter(Boolean)
    },
    toastA11y(item) {
      const assertive = item.variant === 'error'
      const grouped = this.isGrouped(item)
      return {
        role: assertive ? 'alert' : 'status',
        'aria-live': assertive ? 'assertive' : 'polite',
        ...(grouped
          ? {
              'aria-expanded': item.expanded ? 'true' : 'false',
              tabindex: 0,
            }
          : {}),
      }
    },
  },
}
</script>
