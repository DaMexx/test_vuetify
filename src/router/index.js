import { createRouter, createWebHistory } from 'vue-router'
import ButtonsView from '@/views/ButtonsView.vue'
import CardsView from '@/views/CardsView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/buttons',
    component: ButtonsView,
  },
  {
    path: '/cards',
    component: CardsView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
