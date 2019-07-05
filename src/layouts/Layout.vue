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
      <navigator :navs="navs"></navigator>
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
    'navigator' : require('components/Navigator/Navigator.vue').default,
    'user-painel' : require('components/UserPainel/UserPainel.vue').default,
  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }
</style>
