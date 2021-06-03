<template>
  <div id="nav">
    <TopBar />
  </div>
  <router-view/>
</template>

<script>
  import TopBar from './components/TopBar.vue';

  export default{
      components: {
          TopBar
      }
  }
</script>

<style lang="sass">
body
  background-color: #808080

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50


#nav
  padding: 15px


</style>
