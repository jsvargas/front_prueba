<template>
  <div id="app">
    <Header></Header>
    <router-view class="container"/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:hover {
 cursor:pointer;
}
</style>
