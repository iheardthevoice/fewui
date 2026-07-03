<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResttaView',
})
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-12">
    <ui-button
      variant="ghost"
      color="secondary"
      prefix-icon="arrow-left"
      to="/projects"
    >
      {{ $t('nav.projects') }}
    </ui-button>

    <h1 class="mt-6 text-3xl font-medium text-foreground">
      {{ $t('restta.title') }}
    </h1>
    <p class="mt-2 max-w-2xl text-muted-foreground">
      {{ $t('restta.description') }}
    </p>

    <div class="mt-10 grid gap-4 sm:grid-cols-3">
      <ui-field
        card
        :title="$t('restta.features.pos')"
        icon="cash-register"
      />
      <ui-field
        card
        :title="$t('restta.features.web')"
        icon="globe"
      />
      <ui-field
        card
        :title="$t('restta.features.landing')"
        icon="store"
      />
    </div>
  </main>
</template>
