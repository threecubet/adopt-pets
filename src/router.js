import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cat from './views/cats.vue'
import Dog from './views/dogs.vue'
import Pet from './views/pets.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cat
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dog
    },
    {
      path: '/pets/:species/:id',
      name: 'pets',
      component: Pet
    }
  ]
})
