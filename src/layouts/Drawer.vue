<template>
  <div>

    <q-drawer v-if="side == 'left'"
      :width="250"
      :side="side"
      :breakpoint="767"
      :value="openedDrawer" 
      class="drawer-style"
      @hide="$emit('hideDrawerLeft')"
      :content-class='{leftDrawerShadow : openedDrawer }'>
      <slot>  </slot>
    </q-drawer>
    
    <q-drawer v-if="side == 'right'"
      :width="250"
      :side="side"
      :breakpoint="767"
      :value="openedDrawer" 
      class="drawer-style" 
      @hide="$emit('hideDrawerRight')"
      :persistent='true'
      :content-class='{rightDrawerShadow : openedDrawer }'>
      <slot>  </slot>
    </q-drawer>

  </div>
</template>

<script>
export default{
  props:['openedDrawer','side'],
  mounted(){
    console.log(this.openedDrawer);
  },
  methods:{
    alert(){
        
    }
  }
}
</script>
<style lang="stylus">
  
  .leftDrawerShadow 
    transition all 0.3s linear 
    box-shadow: -30px 0px 45px 7px #dff

  .rightDrawerShadow 
    transition all 0.3s linear 
    box-shadow: 30px 0px 45px 7px #dff

  .drawer-style
    .q-drawer 
      height 98%
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
      background-color: #353535
      height 5rem
      
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
