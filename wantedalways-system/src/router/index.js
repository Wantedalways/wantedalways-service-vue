import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/layout/index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
