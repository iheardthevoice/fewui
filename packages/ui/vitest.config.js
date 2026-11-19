import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

/** Bileşen ve yardımcı testleri — tarayıcı yerine happy-dom; stiller yüklenmez (davranış + ARIA sınanır). */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Doküman örnekleri `import { useToast } from 'fewui'` yazar; testte kaynak kodu kullanılır.
    alias: { fewui: fileURLToPath(new URL('./src/index.js', import.meta.url)) },
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.js'],
    setupFiles: ['tests/setup.js'],
    restoreMocks: true,
  },
})
