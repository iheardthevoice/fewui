<script>
import { defineComponent } from 'vue'
import PlaygroundLayout from './layouts/PlaygroundLayout.vue'
import EmbedLayout from './layouts/EmbedLayout.vue'

function isEmbedMode() {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.get('embed') === '1' || window.location.pathname === '/embed'
}

export default defineComponent({
  name: 'App',
  components: {
    PlaygroundLayout,
    EmbedLayout,
  },
  data() {
    return {
      embed: isEmbedMode(),
    }
  },
})
</script>

<template>
  <EmbedLayout v-if="embed" />
  <PlaygroundLayout v-else />
</template>
