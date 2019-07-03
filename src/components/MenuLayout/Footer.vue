<template>
  <q-footer elevated class="primary">
    <div id="mobile-footer">
      <q-tabs>
        <q-route-tab
        v-for="nav in navs" :key="nav.label"
        :icon="nav.icon"
        :label="nav.label"
        :to="nav.to" />
      </q-tabs>
    </div>
    <div id="desktop-footer">
      <q-toolbar>
        <q-toolbar-title class="row">
          <img alt="garten logo" class="logo" src="statics/garten2.svg">
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

<style>

  @media screen and (min-width:768px){
    #mobile-footer{
      display:none;
    }
  }

  @media (max-width: 767px){
    #desktop-footer{
      display:none;
    }
  }

  .logo{
    height:4rem;
    margin-top:8px;
  }

</style>
