import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import featuresView from '../views/featuresView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import componentView from '../views/componentsView.vue'

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
      path: '/component',
      name: 'component',
      component: componentView,
    },
  ],
})

export default router
