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
    :side="'left'" 
    :MiniState="MiniState"  
    :drawerSide="drawerLeft" 
    @mouseOut="MiniState = true"
    @mouseOver="MiniState = false">
      <drawer-nav :navs="navs" />
    </layout-drawer>
    <!-- -->

    <!-- right side navbar -->
    <layout-drawer  :drawerSide="drawerRight" :side="'right'">
      <user-painel />
    </layout-drawer>
    <!-- -->

    <!-- page inside content -->
      <q-page-container class="column justify-center" 
      style="position: relative; top: 2vh;
      padding-top: 95.2px !important; padding-bottom:60px !important;"
      >
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
import VueAnime from 'vue-animejs';
Vue.use(SequentialEntrance)
Vue.use(VueAnime)


export default {
  data () {
    return {
      drawerLeft: true,
      drawerRight: false,
      MiniState: true
    }
  },
  computed:{
    ...mapGetters('navs', ['navs'])
  },
  components:{
    'layout-header' : require('components/MenuLayout/Header.vue').default,
    'layout-footer' : require('components/MenuLayout/Footer.vue').default,
    'layout-drawer' : require('components/MenuLayout/Drawer.vue').default,
    'drawer-nav' : require('components/DrawerNav/Nav.vue').default,
    'user-painel' : require('components/UserPainel/UserPainel.vue').default,
  }
}
</script>