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
      ]
    },
    resttaFeatures() {
      return [
        { icon: 'cash-register', text: this.$t('home.resttaFeatures.pos') },
        { icon: 'globe', text: this.$t('home.resttaFeatures.web') },
        { icon: 'gauge-high', text: this.$t('home.resttaFeatures.ops') },
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
            to="/projects/restta"
          >
            {{ $t('home.ctaRestta') }}
          </ui-button>
          <ui-button
            variant="ghost"
            color="secondary"
            :href="kitDocsUrl"
            target="_blank"
            rel="noopener"
          >
            {{ $t('home.ctaDocs') }}
          </ui-button>
        </div>
      </div>
    </section>

    <section class="border-b border-border">
      <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <div>
          <h2 class="ui-heading-2 text-foreground">
            {{ $t('home.aboutTitle') }}
          </h2>
          <p class="mt-4 text-base leading-relaxed text-muted-foreground">
            {{ $t('home.aboutBody') }}
          </p>
        </div>
        <ul class="flex flex-col gap-4">
          <li
            v-for="(point, index) in aboutPoints"
            :key="index"
            class="flex gap-3 rounded-2xl border border-border bg-surface px-4 py-4"
          >
            <ui-icon
              :name="point.icon"
              class="mt-0.5 shrink-0 text-muted-foreground"
            />
            <span class="text-sm leading-relaxed text-foreground">
              {{ point.text }}
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section class="border-b border-border">
      <div class="mx-auto max-w-6xl px-6 py-16">
        <p class="text-sm font-medium text-muted-foreground">
          {{ $t('home.projectsTitle') }}
        </p>
        <h2 class="mt-2 max-w-2xl ui-heading-2 text-foreground">
          {{ $t('home.projectsDescription') }}
        </h2>

        <div class="mt-10 rounded-3xl border border-border bg-surface p-6 md:p-10">
          <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {{ $t('home.resttaEyebrow') }}
          </p>
          <h3 class="mt-2 text-2xl font-medium text-foreground md:text-3xl">
            {{ $t('home.resttaTitle') }}
          </h3>
          <p class="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {{ $t('home.resttaBody') }}
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

          <div class="mt-8 flex flex-wrap gap-3">
            <ui-button
              variant="solid"
              color="primary"
              to="/projects/restta"
              suffix-icon="arrow-right"
            >
              {{ $t('home.resttaCta') }}
            </ui-button>
            <ui-button
              variant="outline"
              color="secondary"
              to="/projects"
            >
              {{ $t('nav.projects') }}
            </ui-button>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 class="ui-heading-2 text-foreground">
          {{ $t('home.createTitle') }}
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {{ $t('home.createBody') }}
        </p>
        <div class="mt-8">
          <ui-button
            variant="solid"
            color="primary"
            to="/create"
            suffix-icon="arrow-right"
          >
            {{ $t('home.createCta') }}
          </ui-button>
        </div>
      </div>
    </section>
  </main>
</template>
