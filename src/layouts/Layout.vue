<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-10">
    <!-- header -->
    <layout-header
    @openDrawerLeft="drawerLeft = !drawerLeft"
    @openDrawerRight="drawerRight = !drawerRight" >
      <q-toolbar>
        <q-toolbar-title class="q-pt-md text-h3 text-center">
          Stark
        </q-toolbar-title>
      </q-toolbar>
    </layout-header>
    <!--  -->

    <!-- left side bar -->
    <layout-drawer 
    class="left-drawer"
    :side="'left'" 
    :drawerSide="drawerLeft" >
      <drawer-nav :navs="navs" />
    </layout-drawer>
    <!-- -->

    <!-- right side navbar -->
    <layout-drawer  :drawerSide="drawerRight" :side="'right'">
      <user-painel />
    </layout-drawer>
    <!-- -->

    <!-- page inside content -->
      <q-page-container class="column justify-center bg-grey-10" 
      style="position: relative; top: 2vh; padding-top: 95.2px !important;
      padding-bottom:60px !important;">
          <router-view />
      </q-page-container>
    <!--  -->

    <!-- footer -->
    <layout-footer :navs="navs" />
    <!-- -->

  </q-layout>
</template>

<script>
import {  mapGetters } from 'vuex'
import Vue from 'vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import AnimatedNumber from "animated-number-vue"; 
Vue.use(SequentialEntrance) 

export default {
  data () {
    return {
      drawerLeft: false,
      drawerRight: false
    }
  },
  computed:{
    ...mapGetters('navs', ['navs'])
  },
  components:{
    'layout-header' : require('./Header.vue').default,
    'layout-footer' : require('./Footer.vue').default,
    'layout-drawer' : require('./Drawer.vue').default,
    'drawer-nav' : require('components/DrawerNav/Nav.vue').default,
    'user-painel' : require('components/UserPainel/UserPainel.vue').default,
  }
}
</script>

<style lang="stylus">
  @media (max-width: 767px)
    .left-drawer
      display none 

</style>
