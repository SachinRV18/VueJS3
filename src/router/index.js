import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import featuresView from '../views/FeaturesView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import VuePracticesView from '../views/VuePractices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView,
    },
    {
      path: '/features',
      name: 'features',
      component: featuresView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/vuePractices',
      name: 'vuePractices',
      component: VuePracticesView,
    },
  ],
})

export default router
