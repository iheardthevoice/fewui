import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ResttaView from './views/ResttaView.vue'
import CreateView from './views/CreateView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/projects/restta', name: 'restta', component: ResttaView },
    { path: '/create', name: 'create', component: CreateView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
