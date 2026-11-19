<script>
import { defineAsyncComponent, defineComponent } from 'vue'
import { applyUiTheme } from 'fewui'

/** `src/examples/<Ad>Example.vue` — doküman sayfalarının canlı örnekleri (kit-docs iframe ile gömer). */
const modules = import.meta.glob('../examples/*Example.vue')
const EXAMPLES = Object.fromEntries(
  Object.entries(modules).map(([path, loader]) => [path.match(/([A-Za-z0-9]+)Example\.vue$/)[1], loader]),
)

function readParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    name: params.get('example') || '',
    mode: params.get('mode') === 'dark' ? 'dark' : 'light',
    dir: params.get('dir') === 'rtl' ? 'rtl' : 'ltr',
    theme: params.get('theme') || 'web',
    // `?examples=Accordion,Chart` yalnız seçilenleri listeler; `?examples=1` hepsini.
    only: (params.get('examples') || '').split(',').filter((name) => name && name !== '1'),
  }
}

export default defineComponent({
  name: 'ExampleLayout',
  data() {
    const { name, mode, dir, theme, only } = readParams()
    const all = Object.keys(EXAMPLES).sort()
    return { name, mode, dir, theme, names: only.length ? all.filter((item) => only.includes(item)) : all }
  },
  computed: {
    /** Tek örnek: `?example=Accordion`; ad verilmezse tüm örneklerin galerisi. */
    single() {
      return this.name ? this.resolve(this.name) : null
    },
    gallery() {
      return this.name ? [] : this.names.map((name) => ({ name, component: this.resolve(name) }))
    },
  },
  created() {
    this.cache = {}
  },
  mounted() {
    this.applyAppearance()
    window.addEventListener('message', this.onMessage)
    // Gömülü kullanımda çerçeve yüksekliği içeriğe göre ayarlansın.
    this.observer = new ResizeObserver(() => this.reportHeight())
    this.observer.observe(this.$refs.content)
  },
  beforeUnmount() {
    window.removeEventListener('message', this.onMessage)
    this.observer?.disconnect()
  },
  methods: {
    resolve(name) {
      if (!EXAMPLES[name]) return null
      this.cache[name] ??= defineAsyncComponent(EXAMPLES[name])
      return this.cache[name]
    },
    applyAppearance() {
      applyUiTheme(this.theme, { mode: this.mode })
      document.documentElement.dir = this.dir
    },
    onMessage(event) {
      const data = event.data
      if (!data || data.type !== 'fewui-example-appearance') return
      if (data.mode === 'light' || data.mode === 'dark') this.mode = data.mode
      if (data.dir === 'ltr' || data.dir === 'rtl') this.dir = data.dir
      this.applyAppearance()
    },
    reportHeight() {
      if (window.parent === window) return
      window.parent.postMessage(
        { type: 'fewui-example-height', name: this.name, height: Math.ceil(this.$refs.content.offsetHeight) },
        '*',
      )
    },
  },
})
</script>

<template>
  <!-- Playground sayfa kaydırmasını kapatır; örnek sayfası kendi kaydırma alanını taşır. -->
  <div class="h-dvh overflow-y-auto bg-background text-foreground antialiased">
    <div ref="content">
    <div
      v-if="single"
      class="p-6"
    >
      <component :is="single" />
    </div>
    <div
      v-else-if="name"
      class="p-6"
    >
      <ui-empty
        icon="circle-question"
        :title="`“${name}” örneği bulunamadı`"
        description="Örnek dosyaları apps/docs/src/examples altında <Ad>Example.vue adıyla durur."
      />
    </div>
    <div
      v-else
      class="mx-auto flex max-w-4xl flex-col gap-10 p-6"
    >
      <ui-section
        v-for="item in gallery"
        :key="item.name"
        :title="item.name"
      >
        <component :is="item.component" />
      </ui-section>
    </div>
    </div>
    <ui-toast />
    <ui-confirm-dialog />
  </div>
</template>
