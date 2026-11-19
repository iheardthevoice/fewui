---
title: ui-menu-item
outline: [2, 3]
---

# ui-menu-item

Used with: [`ui-menu`](./ui-menu) · [`ui-menu-group`](./ui-menu-group) · [`ui-menu-nav`](./ui-menu-nav) · [`ui-sidebar-item`](./ui-sidebar-item)

## Example

<ExampleFrame name="MenuRail" />

```vue
<template>
  <div class="flex h-96 overflow-hidden rounded-lg border border-border bg-surface">
    <div class="flex border-e border-border p-2">
      <ui-menu
        v-model:collapsed="collapsed"
        width="sm"
      >
        <ui-menu-nav aria-label="Panel menüsü">
          <ui-menu-group label="Satış">
            <ui-menu-item
              v-for="item in salesItems"
              :key="item.id"
              :prefix-icon="item.icon"
              :active="active === item.id"
              @click="active = item.id"
            >
              {{ item.label }}
            </ui-menu-item>
          </ui-menu-group>
          <ui-menu-group label="Yönetim">
            <ui-menu-item
              v-for="item in adminItems"
              :key="item.id"
              :prefix-icon="item.icon"
              :active="active === item.id"
              @click="active = item.id"
            >
              {{ item.label }}
            </ui-menu-item>
          </ui-menu-group>
        </ui-menu-nav>
        <template #footer="{ collapsed: isCollapsed, toggle }">
          <ui-menu-item
            :prefix-icon="isCollapsed ? 'angles-right' : 'angles-left'"
            :aria-expanded="isCollapsed ? 'false' : 'true'"
            @click="toggle"
          >
            {{ isCollapsed ? 'Menüyü genişlet' : 'Menüyü daralt' }}
          </ui-menu-item>
        </template>
      </ui-menu>
    </div>
    <div class="min-w-0 flex-1 p-4">
      <p class="ui-heading-5">{{ activeLabel }}</p>
      <p class="ui-text-default">Menü daraltıldığında etiketler ipucu olarak görünür.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuRailExample',
  data() {
    return {
      collapsed: true,
      active: 'pos',
      salesItems: [
        { id: 'pos', icon: 'cash-register', label: 'Satış' },
        { id: 'tables', icon: 'table-cells', label: 'Masalar' },
        { id: 'kitchen', icon: 'fire-burner', label: 'Mutfak' },
      ],
      adminItems: [
        { id: 'menu', icon: 'utensils', label: 'Menü' },
        { id: 'finance', icon: 'wallet', label: 'Finans' },
        { id: 'team', icon: 'users', label: 'Ekip' },
      ],
    }
  },
  computed: {
    activeLabel() {
      return [...this.salesItems, ...this.adminItems].find((item) => item.id === this.active)?.label
    },
  },
}
</script>
```

## Usage

Registered globally as `<ui-menu-item>` by `app.use(UiLib)`. Local import: `import { MenuItem } from 'fewui'`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `to` | `RouteLocationRaw` | `null` | `vue-router` hedefi; verildiğinde menü öğesi bağlantı olarak davranır. |
| `prefix-icon` | `string` | `null` |  |
| `suffix-icon` | `string` | `null` |  |
| `disabled` | `boolean` | `false` |  |
| `loading` | `boolean` | `false` |  |
| `active` | `boolean` | `false` |  |

## Events

| Event | Listener |
| --- | --- |
| `click` | `@click` |

## Slots

| Slot | Slot props |
| --- | --- |
| `default` |  |

