import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/dextination',
    name: 'Destination',
    component: () => import('@/views/Destination.vue')
  },
  {
    path: '/crew',
    name: 'Crew',
    component: () => import('@/views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import('@/views/Technology.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  store.commit('closeMenu')
})

router.afterEach(() => {
  store.commit('toPage', history.state.current)
})

export default router