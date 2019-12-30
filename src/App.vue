<template>
  <div id="app">
    <Navbar :navs="navs" :nav-active="nav_active"/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components:{
    Navbar
  },
  data() {
    return {
      nav_active:0,
      navs : [
        {title:'首页',path:'/'},
        {title:'文章',path:'/about'}
      ]
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
