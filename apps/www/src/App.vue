<script>
import { defineComponent } from 'vue'
import SiteNav from './components/SiteNav.vue'

export default defineComponent({
  name: 'WwwApp',
  components: { SiteNav },
})
</script>

<template>
  <div class="min-h-screen bg-background text-foreground antialiased">
    <SiteNav />
    <router-view />
  </div>
</template>
