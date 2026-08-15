<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResttaView',
})
</script>

<template>
  <main class="mx-auto max-w-6xl px-6 py-12">
    <router-link
      to="/projects"
      class="inline-flex h-9 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
    >
      ← {{ $t('restta.ctaProjects') }}
    </router-link>

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

    <div class="mt-10">
      <router-link
        to="/create"
        class="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        {{ $t('restta.ctaCreate') }}
      </router-link>
    </div>
  </main>
</template>
