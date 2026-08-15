<script>
import { defineComponent } from 'vue'
import { KIT_DOCS_URL } from '../site-urls.js'

export default defineComponent({
  name: 'SiteNav',
  computed: {
    kitDocsUrl() {
      return KIT_DOCS_URL
    },
  },
})
</script>

<template>
  <header class="border-b border-border bg-background/90 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
      <router-link
        to="/"
        class="text-sm font-medium text-foreground"
      >
        FewUI
      </router-link>
      <nav class="flex flex-wrap items-center gap-2">
        <ui-button
          variant="ghost"
          color="secondary"
          to="/projects"
        >
          {{ $t('nav.projects') }}
        </ui-button>
        <ui-button
          variant="ghost"
          color="secondary"
          to="/projects/restta"
        >
          {{ $t('nav.restta') }}
        </ui-button>
        <ui-button
          variant="outline"
          color="secondary"
          to="/create"
        >
          {{ $t('nav.create') }}
        </ui-button>
        <ui-button
          variant="ghost"
          color="secondary"
          :href="kitDocsUrl"
          target="_blank"
          rel="noopener"
        >
          {{ $t('nav.docs') }}
        </ui-button>
      </nav>
    </div>
  </header>
</template>
