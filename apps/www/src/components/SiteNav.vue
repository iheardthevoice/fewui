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
      <nav class="flex flex-wrap items-center gap-1 sm:gap-2">
        <router-link
          to="/projects"
          class="inline-flex h-9 items-center rounded-xl px-3 text-sm text-foreground hover:bg-muted"
        >
          {{ $t('nav.projects') }}
        </router-link>
        <router-link
          to="/create"
          class="inline-flex h-9 items-center rounded-xl border border-border px-3 text-sm font-medium text-foreground hover:bg-muted"
        >
          {{ $t('nav.create') }}
        </router-link>
        <a
          :href="kitDocsUrl"
          target="_blank"
          rel="noopener"
          class="inline-flex h-9 items-center rounded-xl px-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {{ $t('nav.docs') }}
        </a>
      </nav>
    </div>
  </header>
</template>
