import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '../views/Login'
import Guard from '../services/middleware'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/restaurantes',
    name: 'restaurantes',
    beforeEnter: Guard.auth,
    component: () => import('@/views/Restaurantes.vue')
},
{
    path: '/cardapio/:id',
    name: 'Cardapio',
    beforeEnter: Guard.auth,
    component: () => import('@/components/restaurantes/Cardapio.vue')
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
