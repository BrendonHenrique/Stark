<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-10" >
    
    <!-- page content -->
      <q-page-container class="bg-grey-10">
          <layout-header
            @openDrawerLeft="drawerLeft = !drawerLeft"
            @openDrawerRight="drawerRight = !drawerRight" >
            <q-toolbar>
              <q-toolbar-title class="q-pt-md text-h3 text-center">
                Stark
              </q-toolbar-title>
            </q-toolbar>
          </layout-header>

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

          <!-- footer -->
          <layout-footer :navs="navs" />
          <!-- -->
          
          <!-- Content -->
          <router-view />
          <!--  -->
      
      </q-page-container>
    <!--  -->

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

  @import url('https://fonts.googleapis.com/css?family=Libre+Caslon+Text&display=swap');

  @media (max-width: 767px)
    .left-drawer
      display none 

  .q-drawer--left , .q-drawer--right
    background-color: #353535


</style>
