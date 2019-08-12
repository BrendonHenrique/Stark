<template>
  <q-drawer 
    :width="250"
    :side="side"
    :breakpoint="767"
    :value="drawerSide" 
    class="drawer-style"  
  >
    <slot>  </slot>
  </q-drawer>
</template>

<script>
export default{
  props:['drawerSide','side']
}
</script>
<style lang="stylus">
  
  .drawer-style
    .q-drawer 
      height 98%
      position fixed

  .drawer-style
    .q-item--clickable
      vertical-align middle
      -webkit-transform perspective(1px) translateZ(0)
      transform perspective(1px) translateZ(0)
      box-shadow 0 0 1px rgba(0, 0, 0, 0)
      position relative
      -webkit-transition-property color
      transition-property color
      -webkit-transition-duration 0.7s
      transition-duration 0.7s
      background-color: #353535
      height 5rem
  
  .drawer-style
    .q-item--clickable:before
      content ""
      position absolute
      z-index -1
      top 0
      bottom 0
      left 0
      right 0
      background #2c2d30
      -webkit-transform scaleX(0)
      transform scaleX(0)
      -webkit-transform-origin 50%
      transform-origin 50%
      -webkit-transition-property transform
      transition-property transform
      -webkit-transition-duration 0.4s
      transition-duration 0.4s
      -webkit-transition-timing-function ease-out
      transition-timing-function ease-out
  
  .drawer-style
    .q-item--clickable:hover:before, .q-item--clickable:focus:before, .q-item--clickable:active:before
      -webkit-transform scaleX(1)
      transform scaleX(1)

</style>
