import { createWebHistory, createRouter } from 'vue-router'

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

export default router