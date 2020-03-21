import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AdminUsers from '../views/AdminUsers.vue'
import Account from '../views/Account.vue'
import AdminBooks from '../views/AdminBooks.vue'
import store from '../store'

Vue.use(VueRouter)

const normalAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const adminAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    if (store.getters.typeAuthenticated === 1) {
      next()
      return
    }
    next('/account')
    return
  }
  next('/login')
}

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/adminUsers')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/adminUsers',
    name: 'AdminUsers',
    component: AdminUsers,
    beforeEnter: adminAuthenticated
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    beforeEnter: normalAuthenticated
  },
  {
    path: '/adminBooks',
    name: 'AdminBooks',
    component: AdminBooks,
    beforeEnter: adminAuthenticated
  }
]

const router = new VueRouter({
  routes
})

export default router
