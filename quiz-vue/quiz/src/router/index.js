import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../views/Quiz.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
