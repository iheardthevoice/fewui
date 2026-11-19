<script>
import { defineComponent } from 'vue'
import PlaygroundLayout from './layouts/PlaygroundLayout.vue'
import EmbedLayout from './layouts/EmbedLayout.vue'
import ExampleLayout from './layouts/ExampleLayout.vue'

function isEmbedMode() {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.get('embed') === '1' || window.location.pathname === '/embed'
}

/** `?example=Accordion` tek örnek, `?examples=1` tüm örneklerin galerisi (doküman sayfaları bunu gömer). */
function isExampleMode() {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.has('example') || params.has('examples')
}

export default defineComponent({
  name: 'App',
  components: {
    PlaygroundLayout,
    EmbedLayout,
    ExampleLayout,
  },
  data() {
    return {
      embed: isEmbedMode(),
      example: isExampleMode(),
    }
  },
})
</script>

<template>
  <ExampleLayout v-if="example" />
  <EmbedLayout v-else-if="embed" />
  <PlaygroundLayout v-else />
</template>
