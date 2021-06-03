<template>
  <div class="bar">
    <h3>MarcelinXplays</h3>
    <div id="centerItems">
      <router-link class="links" to="/">Início</router-link>
      <router-link class="links" to="/sobre">Sobre</router-link>
      <router-link class="links" to="/produtos">Produtos</router-link>
      <router-link class="links" to="/lepasta">Le Pasta</router-link>
    </div>
    <div id="rightItems">

    </div>
  </div>
</template>

<script>
  export default{
      name: 'TopBar'
  }
</script>

<style lang="sass">
  .bar
    border-radius: 30px
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: baseline
    background-color: #364aff
    color: white
    h3
      margin-left: 15px

  #centerItems
    display: flex
    flex-direction: row
    justify-content: space-between

  #rightItems
    margin-right: 15px
    display: flex
    flex-direction: row
    justify-content: space-between

  .links
    margin-left: 5px
    margin-right: 5px

  a
    font-weight: bold
    color: white
    text-decoration: none

    &.router-link-exact-active
      color: gray

</style>
