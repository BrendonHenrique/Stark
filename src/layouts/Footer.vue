<template>
  <q-footer elevated>
    <div id="mobile-footer">
      <q-tabs class="mobile-tabs">
        <q-route-tab
          v-for="nav in navs" :key="nav.label"
          :icon="nav.icon"
          :label="nav.label"
          :to="nav.to" 
        />
      </q-tabs>
    </div>
    <div id="desktop-footer">
      <q-toolbar>
        <q-toolbar-title class="row">
          <div>
            <img src="static/spinedLogo.1.svg" class="rotating">
            <img src="static/garten3.svg" style="width:200px;margin-left:5px;">
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script>
  export default{
    props:['navs'],
  }
</script>

<style lang="stylus">
  
  .q-router-link--exact-active
    color #0f0e0e

  .mobile-tabs
    height 5rem
  
  #desktop-footer 
    display flex 
    align-items center
    height 35px

    .q-tab__label 
      font-size 15px
      font-weight 600
  
  @media screen and (min-width:768px)
    #mobile-footer
      display none
        
    .q-router-link--exact-active
      color $primary !important

  @media (max-width: 767px)
    #desktop-footer
      display none


   @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .rotating 
    -webkit-animation rotating 5s linear infinite
    -moz-animation rotating 5s linear infinite
    -ms-animation rotating 5s linear infinite
    -o-animation rotating 5s linear infinite
    animation rotating 5s linear infinite
    position absolute
    width 35px 
    left 25px 
    top 8px
  
</style>
