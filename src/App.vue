<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view></router-view>

   

  </div>
</template>

<script>
import TopNav from './components/web/TopNav.vue'

export default {
  name: 'App',
  components: {
    TopNav
  }
}
</script>

<style>
  
</style>
