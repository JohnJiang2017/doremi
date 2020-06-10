import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pets from '../views/Pets.vue'
import PentatonicScale from '../views/PentatonicScale.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cats
  },
  {
    path: '/dogs',
    name: 'dogs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dogs
  },
  {
    path: '/pets/:species/:id',
    name: 'pet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pets
  },
  {
    path: '/pentatonicscale',
    name: 'pentatonicscale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PentatonicScale
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
