<template>
  <div>

    <q-drawer
      :width="260"
      :breakpoint="767"
      :value="openedDrawer" 
      class="drawer-style"
      @click="$emit('hideDrawerLeft')"
      :content-class='{leftDrawerShadow : openedDrawer }'>
      <slot>  </slot>
    </q-drawer>
     
  </div>
</template>

<script>
export default{
  props:['openedDrawer'],
}
</script>
<style lang="stylus">
  
  .drawer-style
    .q-drawer 
      height 100%
      position fixed
    
    .q-router-link--exact-active 
      color: #f55a66 !important

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
      
      &:hover 
        border-left 2px solid red 
        
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
