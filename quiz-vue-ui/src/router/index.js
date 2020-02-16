import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('../views/Quiz.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
