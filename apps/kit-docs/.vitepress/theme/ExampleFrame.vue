<script>
/**
 * Canlı örnek: playground uygulamasındaki `?example=<Ad>` sayfasını iframe ile gömer.
 * Örnek gerçek fewui kurulumunda (Tailwind + tema) çalışır; doküman sitesinin stilleri karışmaz.
 */
const PLAYGROUND_URL = (
  import.meta.env.VITE_PLAYGROUND_URL || (import.meta.env.DEV ? 'http://localhost:5175' : 'https://fewui-docs.pages.dev')
).replace(/\/$/, '')

export default {
  name: 'ExampleFrame',
  props: {
    name: { type: String, required: true },
    /** Katman açan örnekler (dialog, sheet) için en az yükseklik (px). */
    minHeight: { type: Number, default: 220 },
  },
  data() {
    return { height: this.minHeight, mode: 'light', dir: 'ltr', ready: false }
  },
  computed: {
    src() {
      return `${PLAYGROUND_URL}/?example=${encodeURIComponent(this.name)}&mode=${this.mode}&dir=${this.dir}`
    },
  },
  mounted() {
    // Doküman sitesi koyu moddaysa örnek de koyu açılsın.
    this.mode = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    this.ready = true
    window.addEventListener('message', this.onMessage)
  },
  beforeUnmount() {
    window.removeEventListener('message', this.onMessage)
  },
  methods: {
    onMessage(event) {
      const data = event.data
      if (!data || data.type !== 'fewui-example-height' || data.name !== this.name) return
      this.height = Math.max(this.minHeight, Math.min(Number(data.height) || 0, 900))
    },
    toggleMode() {
      this.mode = this.mode === 'dark' ? 'light' : 'dark'
    },
    toggleDir() {
      this.dir = this.dir === 'rtl' ? 'ltr' : 'rtl'
    },
  },
}
</script>

<template>
  <div class="example-frame">
    <div class="example-frame__bar">
      <button
        type="button"
        @click="toggleMode"
      >
        {{ mode === 'dark' ? 'Light' : 'Dark' }}
      </button>
      <button
        type="button"
        @click="toggleDir"
      >
        {{ dir === 'rtl' ? 'LTR' : 'RTL' }}
      </button>
      <a
        :href="src"
        target="_blank"
        rel="noreferrer"
      >Open ↗</a>
    </div>
    <iframe
      v-if="ready"
      :src="src"
      :title="`${name} example`"
      :style="{ height: `${height}px` }"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.example-frame {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}
.example-frame__bar {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 6px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  font-size: 12px;
}
.example-frame__bar button,
.example-frame__bar a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}
.example-frame__bar button:hover,
.example-frame__bar a:hover {
  color: var(--vp-c-brand-1);
}
.example-frame iframe {
  display: block;
  width: 100%;
  border: 0;
}
</style>
