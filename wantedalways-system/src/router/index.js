import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from "@/layout/BaseLayout.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BaseLayout,
  },
  {
    path: '/login/accountLogin',
    name: 'accountLogin',
    component: () => import('@/views/login/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
