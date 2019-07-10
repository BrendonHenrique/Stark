<template>
  <q-layout view="hHh lpR fFf">

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
    <layout-drawer :drawerSide="drawerLeft" :side="'left'">
      <drawer-nav :navs="navs"></drawer-nav>
    </layout-drawer>
    <!-- -->

    <!-- right side navbar -->
    <layout-drawer :drawerSide="drawerRight" :side="'right'">
      <user-painel />
    </layout-drawer>
    <!-- -->

    <!-- page inside content -->
      <q-page-container>
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
      drawerLeft: true,
      drawerRight: false
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
<style>
  .blur{
    filter: grayscale(0%) blur(1px) saturate(0.25) opacity(1);
    -webkit-filter: grayscale(0%) blur(1px) saturate(0.25) opacity(1);
    background-image: url(../assets/bg3.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
