<template>
  <!-- Card com efeito de virar no eixo Y -->
  <div v-bind:class="!flipped ? 'flip-container flipped': 'flip-container'">
    <div class="flipper ">
      
      <!-- Parte da frente do card -->
      <div class="front">
        <q-card class="card-style">
          <slot name="front">

          </slot>
        </q-card>
      </div>
      <!--  -->
      
      <!-- Parte de trás do card  -->
      <div class="back">
        <q-card class="card-style">
          <slot name="back">

          </slot>
        </q-card>
      </div>
      <!--  -->

    </div>
  </div>
  <!--  -->

</template>

<script>
export default {
  name: 'FlipCard',
  props:['flipped'],
  components:{
  }
};
</script>

<style lang="stylus" scoped>

  .card-style 
    border-radius 20px 0 20px 0
    z-index 2 box-shadow 0 2px 10px 3px #C0C0C0
    background-color #FFFFFF

  .flip-container 
    -webkit-perspective 1000
    -moz-perspective 1000
    -o-perspective 1000
    perspective 1000
    &.flipped 
      .back 
        -webkit-transform rotateY(0deg)
        -moz-transform rotateY(0deg)
        -o-transform rotateY(0deg)
        -ms-transform rotateY(0deg)
        transform rotateY(0deg)
      .front 
        -webkit-transform rotateY(180deg)
        -moz-transform rotateY(180deg)
        -o-transform rotateY(180deg)
        -ms-transform rotateY(180deg)
        transform rotateY(180deg)

  .flipper 
    -moz-transform perspective(1000px)
    -moz-transform-style preserve-3d
    position relative

  .front,
  .back 
    -webkit-backface-visibility hidden
    -moz-backface-visibility hidden
    -o-backface-visibility hidden
    backface-visibility hidden
    -webkit-transition 0.6s
    -webkit-transform-style preserve-3d
    -moz-transition 0.6s
    -moz-transform-style preserve-3d
    -o-transition 0.6s
    -o-transform-style preserve-3d
    -ms-transition 0.6s
    -ms-transform-style preserve-3d
    transition 0.6s
    transform-style preserve-3d
    top 0
    left 0
    width 100%

  .back 
    -webkit-transform rotateY(-180deg)
    -moz-transform rotateY(-180deg)
    -o-transform rotateY(-180deg)
    -ms-transform rotateY(-180deg)
    transform rotateY(-180deg)
    position absolute

  .front 
    z-index 3

</style>