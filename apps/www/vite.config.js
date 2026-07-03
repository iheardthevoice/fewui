import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const uiRoot = resolve(__dirname, '../../packages/ui')
const playgroundRoot = resolve(__dirname, '../../packages/theme-playground')

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: [
      { find: 'fewui/style.css', replacement: join(uiRoot, 'themes/default.css') },
      { find: 'fewui/components.css', replacement: join(uiRoot, 'themes/components.css') },
      { find: 'fewui', replacement: resolve(uiRoot, 'src/index.js') },
      { find: '@fewui/theme-playground', replacement: resolve(playgroundRoot, 'src') },
    ],
  },
  server: {
    port: 5176,
    fs: {
      allow: [uiRoot, playgroundRoot, __dirname],
    },
  },
})
