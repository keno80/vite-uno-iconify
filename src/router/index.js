import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
