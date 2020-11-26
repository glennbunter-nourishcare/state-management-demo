import Vue from 'vue'
import VueRouter from 'vue-router'
import VuexDemo from '@/views/VuexDemo.vue'
import Home from '@/views/Home.vue'
import VueCompositionDemo from '@/views/VueCompositionDemo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex-demo',
    name: 'VuexDemo',
    component: VuexDemo
  },
  {
    path: '/vue-composition-demo',
    name: 'VueCompositionDemo',
    component: VueCompositionDemo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
