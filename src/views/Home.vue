<template>
  <div class="home">
    <div id="imageFade">
      <img class="opaque" alt="Marciello, the founder of this store." src="../assets/marciellotouille.png" height="200" width="800" />
      <img alt="PADORU PADORU" src="../assets/padoru.jpg" height="200" width="500"/>
      <img alt="HelloWorld" src="../assets/helloword.jpg" height="200" width="500"/>
      <img alt="logo" src="../assets/logo.png" height="200" width="500"/>
    </div>
    <p id="imageFadeControl">
      <span v-on:click="imageChangeClick($event, 0)" class="selected">Imagem 1</span>
      <span v-on:click="imageChangeClick($event, 1)">Imagem 2</span>
      <span v-on:click="imageChangeClick($event, 2)">Imagem 3</span>
      <span v-on:click="imageChangeClick($event, 3)">Imagem 4</span>
    </p>
    <h3>Welcome-a to-a my-a store-a</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  methods: {
      imageChangeClick(e, index){
          e.preventDefault();
          var buttonWrapper = document.getElementById('imageFadeControl');
          var buttons = buttonWrapper.getElementsByTagName('span');
          var imageWrapper = document.getElementById('imageFade');
          var images = imageWrapper.getElementsByTagName('img');

          for(var i = 0; i < images.length; i++){
              images[i].classList.remove('opaque');
              buttons[i].classList.remove('selected')
          }
          buttons[index].classList.add('selected');
          images[index].classList.add('opaque');
      }
  },
  mounted(){

  }
}
</script>

<style lang="sass">
  #imageFadeControl
    span
      &.selected
        font-weight: bold

  #imageFade
    position: relative
    height: 100px
    width: 300px
    margin: 0 auto 10px
    margin-bottom: 7%

    img
      position: absolute
      left: 0
      margin-left: -80%
      heigth: 200px
      width: 800px
      -webkit-transition: opacity 1s ease-in-out
      -moz-transition: opacity 1s ease-in-out
      -o-transition: opacity 1s ease-in-out
      transition: opacity 1s ease-in-out
      opacity:0
      -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"
      filter: alpha(opacity=0)
      &.opaque
        opacity:1
        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"
        filter: alpha(opacity=1)
</style>
