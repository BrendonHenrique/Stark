<template>
  <q-footer elevated>
    <div id="mobile-footer">
      <q-tabs>
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
            <div style="justify-content:center;justify-item:center;display:flex;">
              <img src="statics/spinedLogo.1.svg" class="rotating">
              <img src="statics/garten3.svg" style="width:300px;margin-left:5px;">
            </div>
          <q-space />
          <p class="text-weight-thin text-subtitle3 q-mt-md">
            {{date}}
          </p>
        </q-toolbar-title>
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script>
  export default{
    props:['navs'],
    computed: {
      date() {
        return new Date().getFullYear();
      }
    }
  }
</script>

<style lang="stylus">
  
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
    width 60px 
    left 25px 
    top 3px 
  
</style>
