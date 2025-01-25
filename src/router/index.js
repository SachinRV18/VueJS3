import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import featuresView from '../views/FeaturesView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import VuePracticesView from '../views/VuePractices.vue'
import VuePractices2View from '../views/VuePractice2.vue'
import SigninFormView from '../components/SigninForm.vue'
import SignupFormView from '../components/SignUpForm.vue'

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
    {
      path: '/vuePractices2',
      name: 'vuePractices2',
      component: VuePractices2View,
    },
    {
      path: '/signinForm',
      name: 'SigninForm',
      component: SigninFormView,
    },
    {
      path: '/signupForm',
      name: 'signupForm',
      component: SignupFormView,
    },
  ],
})

export default router
