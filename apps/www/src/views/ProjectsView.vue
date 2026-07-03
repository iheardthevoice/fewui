<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectsView',
})
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-12">
    <h1 class="text-3xl font-medium text-foreground">
      {{ $t('projects.title') }}
    </h1>
    <p class="mt-2 text-muted-foreground">
      {{ $t('projects.description') }}
    </p>

    <div class="mt-10 grid gap-4 sm:grid-cols-2">
      <ui-card
        :title="$t('projects.resttaTitle')"
        icon="store"
      >
        <p class="mb-4 text-sm text-muted-foreground">
          {{ $t('projects.resttaDescription') }}
        </p>
        <ui-button
          variant="outline"
          color="secondary"
          to="/projects/restta"
          suffix-icon="arrow-right"
        >
          {{ $t('projects.resttaTitle') }}
        </ui-button>
      </ui-card>
    </div>
  </main>
</template>
