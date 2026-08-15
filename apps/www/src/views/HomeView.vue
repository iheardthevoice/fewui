<script>
import { defineComponent } from 'vue'
import { KIT_DOCS_URL } from '../site-urls.js'

export default defineComponent({
  name: 'HomeView',
  computed: {
    kitDocsUrl() {
      return KIT_DOCS_URL
    },
    aboutPoints() {
      return [
        { icon: 'cubes', text: this.$t('home.aboutPoints.components') },
        { icon: 'palette', text: this.$t('home.aboutPoints.tokens') },
        { icon: 'robot', text: this.$t('home.aboutPoints.agents') },
        { icon: 'rocket', text: this.$t('home.aboutPoints.ship') },
      ]
    },
    systemPoints() {
      return [
        { icon: 'eye', text: this.$t('home.systemPoints.preview') },
        { icon: 'download', text: this.$t('home.systemPoints.export') },
        { icon: 'layer-group', text: this.$t('home.systemPoints.scale') },
      ]
    },
  },
})
</script>

<template>
  <main>
    <section class="border-b border-border">
      <div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p class="text-sm font-medium tracking-wide text-muted-foreground">
          {{ $t('home.brand') }}
        </p>
        <h1 class="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {{ $t('home.tagline') }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {{ $t('home.description') }}
        </p>
        <div class="mt-10 flex flex-wrap items-center gap-3">
          <router-link
            to="/create"
            class="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {{ $t('home.ctaCreate') }}
          </router-link>
          <router-link
            to="/projects"
            class="inline-flex h-11 items-center justify-center rounded-xl border border-border px-5 text-sm font-medium text-foreground hover:bg-muted"
          >
            {{ $t('home.ctaProjects') }}
          </router-link>
          <a
            :href="kitDocsUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm text-muted-foreground hover:text-foreground"
          >
            {{ $t('home.ctaDocs') }}
          </a>
        </div>
      </div>
    </section>

    <section class="border-b border-border">
      <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-start">
        <div>
          <h2 class="ui-heading-2 text-foreground">
            {{ $t('home.aboutTitle') }}
          </h2>
          <p class="mt-4 text-base leading-relaxed text-muted-foreground">
            {{ $t('home.aboutBody') }}
          </p>
        </div>
        <ul class="grid gap-3 sm:grid-cols-2">
          <li
            v-for="(point, index) in aboutPoints"
            :key="index"
            class="rounded-2xl border border-border bg-surface px-4 py-4"
          >
            <ui-icon
              :name="point.icon"
              class="text-muted-foreground"
            />
            <p class="mt-3 text-sm leading-relaxed text-foreground">
              {{ point.text }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="border-b border-border">
      <div class="mx-auto max-w-6xl px-6 py-16">
        <h2 class="ui-heading-2 text-foreground">
          {{ $t('home.systemTitle') }}
        </h2>
        <p class="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {{ $t('home.systemBody') }}
        </p>
        <div class="mt-8 grid gap-3 md:grid-cols-3">
          <div
            v-for="(point, index) in systemPoints"
            :key="index"
            class="rounded-2xl border border-border bg-surface px-4 py-5"
          >
            <ui-icon
              :name="point.icon"
              class="text-muted-foreground"
            />
            <p class="mt-3 text-sm leading-relaxed text-foreground">
              {{ point.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-border">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <h2 class="ui-heading-2 text-foreground">
            {{ $t('home.createTitle') }}
          </h2>
          <p class="mt-4 text-base leading-relaxed text-muted-foreground">
            {{ $t('home.createBody') }}
          </p>
        </div>
        <router-link
          to="/create"
          class="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          {{ $t('home.createCta') }}
        </router-link>
      </div>
    </section>

    <section>
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <h2 class="ui-heading-2 text-foreground">
            {{ $t('home.projectsTitle') }}
          </h2>
          <p class="mt-4 text-base leading-relaxed text-muted-foreground">
            {{ $t('home.projectsBody') }}
          </p>
        </div>
        <router-link
          to="/projects"
          class="inline-flex h-11 shrink-0 items-center justify-center rounded-xl border border-border px-5 text-sm font-medium text-foreground hover:bg-muted"
        >
          {{ $t('home.projectsCta') }}
        </router-link>
      </div>
    </section>
  </main>
</template>
