<script>
import { defineComponent } from 'vue'

const NAV = [
  { key: 'dashboard', icon: 'grid-2' },
  { key: 'orders', icon: 'receipt' },
  { key: 'products', icon: 'box' },
  { key: 'customers', icon: 'users' },
  { key: 'settings', icon: 'gear' },
]

const ORDERS = [
  { id: '#1042', customer: 'Ayşe K.', total: '₺1.240', status: 'success' },
  { id: '#1041', customer: 'Mehmet D.', total: '₺860', status: 'warning' },
  { id: '#1040', customer: 'Elif S.', total: '₺2.115', status: 'info' },
  { id: '#1039', customer: 'Can Y.', total: '₺410', status: 'danger' },
]

export default defineComponent({
  name: 'ThemePreviewPanel',
  data() {
    return {
      activeNav: 'dashboard',
      tab: 'overview',
      name: '',
      plan: 'pro',
      notify: true,
      terms: false,
      dialogOpen: false,
    }
  },
  computed: {
    nav() {
      return NAV
    },
    orders() {
      return ORDERS
    },
    stats() {
      return [
        { key: 'revenue', value: '₺48.2K', delta: '+12%', color: 'success' },
        { key: 'orders', value: '1.284', delta: '+4%', color: 'info' },
        { key: 'refunds', value: '23', delta: '-2%', color: 'danger' },
      ]
    },
    planOptions() {
      return ['starter', 'pro', 'business'].map((value) => ({
        value,
        label: this.$t(`themePlayground.preview.plans.${value}`),
      }))
    },
  },
})
</script>

<template>
  <div class="@container flex min-h-full gap-4 p-4">
    <nav class="hidden w-48 shrink-0 flex-col gap-1 @3xl:flex">
      <ui-sidebar-item
        v-for="item in nav"
        :key="item.key"
        :prefix-icon="item.icon"
        :active="activeNav === item.key"
        text-align="left"
        block
        @click="activeNav = item.key"
      >
        {{ $t(`themePlayground.preview.nav.${item.key}`) }}
      </ui-sidebar-item>
    </nav>

    <div class="flex min-w-0 flex-1 flex-col gap-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 class="font-heading text-xl font-medium text-foreground">
            {{ $t('themePlayground.preview.title') }}
          </h2>
          <p class="text-sm text-muted-foreground">
            {{ $t('themePlayground.preview.subtitle') }}
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <ui-button
            variant="outline"
            color="secondary"
            prefix-icon="download"
          >
            {{ $t('themePlayground.preview.export') }}
          </ui-button>
          <ui-button
            prefix-icon="plus"
            @click="dialogOpen = true"
          >
            {{ $t('themePlayground.preview.create') }}
          </ui-button>
        </div>
      </div>

      <div class="grid gap-4 @lg:grid-cols-3">
        <ui-card
          v-for="stat in stats"
          :key="stat.key"
          :title="$t(`themePlayground.preview.stats.${stat.key}`)"
        >
          <div class="flex items-end justify-between gap-2">
            <span class="font-heading text-2xl font-medium text-foreground">{{ stat.value }}</span>
            <ui-badge
              :color="stat.color"
              variant="muted"
            >
              {{ stat.delta }}
            </ui-badge>
          </div>
        </ui-card>
      </div>

      <ui-tabs v-model="tab">
        <ui-tab-list :aria-label="$t('themePlayground.preview.tabsLabel')">
          <ui-tab-trigger
            value="overview"
            :label="$t('themePlayground.preview.tabs.overview')"
            icon="chart-line"
          />
          <ui-tab-trigger
            value="form"
            :label="$t('themePlayground.preview.tabs.form')"
            icon="pen"
          />
          <ui-tab-trigger
            value="feedback"
            :label="$t('themePlayground.preview.tabs.feedback')"
            icon="bell"
          />
        </ui-tab-list>

        <ui-tab-panel value="overview">
          <ui-card :title="$t('themePlayground.preview.ordersTitle')">
            <ui-table>
              <ui-table-header>
                <ui-table-row>
                  <ui-table-head>{{ $t('themePlayground.preview.columns.order') }}</ui-table-head>
                  <ui-table-head>{{ $t('themePlayground.preview.columns.customer') }}</ui-table-head>
                  <ui-table-head>{{ $t('themePlayground.preview.columns.total') }}</ui-table-head>
                  <ui-table-head>{{ $t('themePlayground.preview.columns.status') }}</ui-table-head>
                </ui-table-row>
              </ui-table-header>
              <ui-table-body>
                <ui-table-row
                  v-for="order in orders"
                  :key="order.id"
                >
                  <ui-table-cell>{{ order.id }}</ui-table-cell>
                  <ui-table-cell>{{ order.customer }}</ui-table-cell>
                  <ui-table-cell>{{ order.total }}</ui-table-cell>
                  <ui-table-cell>
                    <ui-badge
                      :color="order.status"
                      variant="muted"
                    >
                      {{ $t(`themePlayground.preview.status.${order.status}`) }}
                    </ui-badge>
                  </ui-table-cell>
                </ui-table-row>
              </ui-table-body>
            </ui-table>
          </ui-card>
        </ui-tab-panel>

        <ui-tab-panel value="form">
          <ui-card
            :title="$t('themePlayground.preview.formTitle')"
            :description="$t('themePlayground.preview.formDescription')"
          >
            <div class="grid gap-4 @lg:grid-cols-2">
              <ui-form-row :label="$t('themePlayground.preview.fields.name')">
                <ui-input
                  v-model="name"
                  :placeholder="$t('themePlayground.preview.fields.namePlaceholder')"
                />
              </ui-form-row>
              <ui-form-row :label="$t('themePlayground.preview.fields.plan')">
                <ui-select
                  v-model="plan"
                  :options="planOptions"
                />
              </ui-form-row>
              <ui-form-row
                :label="$t('themePlayground.preview.fields.notify')"
                direction="horizontal"
              >
                <ui-switch v-model="notify" />
              </ui-form-row>
              <ui-form-row>
                <ui-checkbox
                  v-model="terms"
                  :label="$t('themePlayground.preview.fields.terms')"
                />
              </ui-form-row>
            </div>
            <template #footer>
              <ui-button prefix-icon="check">
                {{ $t('themePlayground.preview.save') }}
              </ui-button>
            </template>
          </ui-card>
        </ui-tab-panel>

        <ui-tab-panel value="feedback">
          <div class="flex flex-col gap-3">
            <ui-alert
              v-for="color in ['info', 'success', 'warning', 'danger']"
              :key="color"
              :color="color"
            >
              {{ $t(`themePlayground.preview.alerts.${color}`) }}
            </ui-alert>
            <ui-card :title="$t('themePlayground.preview.buttonsTitle')">
              <div class="flex flex-wrap gap-2">
                <ui-button
                  v-for="color in ['primary', 'secondary', 'success', 'warning', 'info', 'danger']"
                  :key="color"
                  :color="color"
                >
                  {{ $t(`themePlayground.preview.colors.${color}`) }}
                </ui-button>
              </div>
              <div class="mt-3 flex flex-wrap gap-2">
                <ui-button
                  variant="outline"
                  color="secondary"
                >
                  {{ $t('themePlayground.preview.variants.outline') }}
                </ui-button>
                <ui-button
                  variant="ghost"
                  color="secondary"
                >
                  {{ $t('themePlayground.preview.variants.ghost') }}
                </ui-button>
                <ui-button variant="link">
                  {{ $t('themePlayground.preview.variants.link') }}
                </ui-button>
              </div>
              <div class="mt-4">
                <ui-progress :value="64" />
              </div>
            </ui-card>
          </div>
        </ui-tab-panel>
      </ui-tabs>
    </div>

    <ui-dialog
      v-model:open="dialogOpen"
      :title="$t('themePlayground.preview.dialogTitle')"
      :description="$t('themePlayground.preview.dialogDescription')"
    >
      <ui-form-row :label="$t('themePlayground.preview.fields.name')">
        <ui-input
          v-model="name"
          :placeholder="$t('themePlayground.preview.fields.namePlaceholder')"
        />
      </ui-form-row>
      <template #footer>
        <ui-button
          prefix-icon="check"
          @click="dialogOpen = false"
        >
          {{ $t('themePlayground.preview.save') }}
        </ui-button>
      </template>
    </ui-dialog>
  </div>
</template>
