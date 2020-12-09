import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/vue2',
    name: 'vue2',
    component: ()=>import(/* webpackChunkName: "about" */ '../views/vue2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
