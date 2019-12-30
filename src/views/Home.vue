<template>
  <div class="home">
    <HelloWorld />
    <img src="http://localhost:3001/article/loadimg?imgid=6abd5b19fffb0a2e5054e6074663bdd4" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
