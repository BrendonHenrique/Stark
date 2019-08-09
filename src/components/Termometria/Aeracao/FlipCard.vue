<template>
  <div v-bind:class="!flipped ? 'flip-container flipped': 'flip-container'">
    <div class="flipper ">
      <div class="front">
          <card-aeracao>
            <slot name="front"></slot>
          </card-aeracao>
      </div>
      <div class="back">
        <card-aeracao>
          <slot name="back"></slot>
        </card-aeracao>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlipCard',
  props:['flipped'],
  components:{
    'card-aeracao': require('./CardAeracao').default,
  }
};
</script>

<style lang="stylus" scoped>

  i.frontFlipBtn,
  i.backFlipBtn 
    position absolute
    right 20px
    top 20px
    color #FFFFFF

  i 
    &.backFlipBtn 
      -webkit-transform rotateY(-180deg)
      -moz-transform rotateY(-180deg)
      -o-transform rotateY(-180deg)
      -ms-transform rotateY(-180deg)
      transform rotateY(-180deg)

  .flip-container 
    -webkit-perspective 1000
    -moz-perspective 1000
    -o-perspective 1000
    perspective 1000
    min-height 120px
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