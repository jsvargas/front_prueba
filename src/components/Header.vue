<template>
  <div style="padding-bottom:15px">
<nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
  <div class="container">
  <a class="navbar-brand" href="#">BIBVirtual</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Reservar libros</router-link>
      </li>
      <li class="nav-item" v-if='isAuthenticated'>
        <router-link class="nav-link" to="/account">Mis reservas</router-link>
      </li>
      <li class="nav-item"  v-if='!isAuthenticated'>
        <router-link class="nav-link" to="/login">Ingresar</router-link>
      </li>
      <li class="nav-item" v-if='isAuthenticated && typeAuthenticated===1'>
        <router-link class="nav-link" to="/adminUsers">Admin. Usuarios</router-link>
      </li>
      <li class="nav-item" v-if='isAuthenticated && typeAuthenticated===1'>
        <router-link class="nav-link" to="/adminBooks">Admin. Libros</router-link>
      </li>
      <li class="nav-item" v-if='isAuthenticated'>
        <button class="btn btn-secondary"  @click="logout">Logout</button>
      </li>
    </ul>
  </div>
  </div>
</nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  methods: {
    logout () {
      console.log('logout')
      this.$store.dispatch('logout').then(() => {
        const newRoutePath = '/'
        if (this.$route.path !== newRoutePath) {
          this.$router.push(newRoutePath)
        }
      })
    }
  },
  computed: mapState({
    isAuthenticated: state => state.auth.status,
    typeAuthenticated: state => state.auth.type
  })
}
</script>

<style>
  .float-right{
    float: right;
  }
</style>
