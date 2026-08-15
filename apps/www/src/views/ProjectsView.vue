<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectsView',
  computed: {
    resttaFeatures() {
      return [
        { icon: 'cash-register', text: this.$t('projects.resttaFeatures.pos') },
        { icon: 'globe', text: this.$t('projects.resttaFeatures.web') },
        { icon: 'gauge-high', text: this.$t('projects.resttaFeatures.ops') },
      ]
    },
  },
})
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-12">
    <h1 class="text-3xl font-medium text-foreground">
      {{ $t('projects.title') }}
    </h1>
    <p class="mt-2 max-w-2xl text-muted-foreground">
      {{ $t('projects.description') }}
    </p>

    <article class="mt-10 rounded-3xl border border-border bg-surface p-6 md:p-10">
      <h2 class="text-2xl font-medium text-foreground">
        {{ $t('projects.resttaTitle') }}
      </h2>
      <p class="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        {{ $t('projects.resttaDescription') }}
      </p>

      <div class="mt-8 grid gap-3 sm:grid-cols-3">
        <div
          v-for="(feature, index) in resttaFeatures"
          :key="index"
          class="rounded-2xl border border-border bg-background px-4 py-4"
        >
          <ui-icon
            :name="feature.icon"
            class="text-muted-foreground"
          />
          <p class="mt-3 text-sm leading-relaxed text-foreground">
            {{ feature.text }}
          </p>
        </div>
      </div>

      <div class="mt-8">
        <router-link
          to="/projects/restta"
          class="inline-flex h-11 items-center justify-center rounded-xl border border-border px-5 text-sm font-medium text-foreground hover:bg-muted"
        >
          {{ $t('projects.resttaCta') }}
        </router-link>
      </div>
    </article>
  </main>
</template>
