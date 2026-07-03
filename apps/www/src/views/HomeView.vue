<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
})
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-16">
    <p class="text-sm text-muted-foreground">
      {{ $t('home.title') }}
    </p>
    <h1 class="mt-2 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
      {{ $t('home.tagline') }}
    </h1>
    <p class="mt-6 max-w-2xl text-lg text-muted-foreground">
      {{ $t('home.description') }}
    </p>
    <div class="mt-10 flex flex-wrap gap-3">
      <ui-button
        variant="solid"
        color="primary"
        to="/create"
        suffix-icon="arrow-right"
      >
        {{ $t('home.ctaCreate') }}
      </ui-button>
      <ui-button
        variant="outline"
        color="secondary"
        href="http://localhost:5174/kit/"
        target="_blank"
        rel="noopener"
      >
        {{ $t('home.ctaDocs') }}
      </ui-button>
    </div>

    <ui-card
      class="mt-16"
      :title="$t('home.techTitle')"
    >
      <p class="text-sm leading-relaxed text-muted-foreground">
        {{ $t('home.techBody') }}
      </p>
    </ui-card>
  </main>
</template>
