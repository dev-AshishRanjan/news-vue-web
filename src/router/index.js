import { createRouter, createWebHistory } from 'vue-router'
import GeneralView from '../views/GeneralView.vue'
import BView from '../views/BusinessView.vue'
import EView from '../views/EntertainView.vue'
import HView from '../views/HealthView.vue'
import ScView from '../views/ScienceView.vue'
import SpView from '../views/SportsView.vue'
import TView from '../views/TechView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: GeneralView
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: EView
  },
  {
    path: '/business',
    name: 'business',
    component: BView
  },
  {
    path: '/health',
    name: 'health',
    component: HView
  },
  {
    path: '/science',
    name: 'science',
    component: ScView
  },
  {
    path: '/sports',
    name: 'sports',
    component: SpView
  },
  {
    path: '/technology',
    name: 'technology',
    component: TView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
