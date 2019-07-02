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
      </q-header>
    </layout-header>
    <!--  -->

    <!-- left side bar -->
    <layout-drawer :drawerSide="drawerLeft" :side="'left'">
      <navigator :navs="navs"></navigator>
    </layout-drawer>
    <!-- -->

    <!-- right side navbar -->
    <layout-drawer :drawerSide="drawerRight" :side="'right'">
      <q-scroll-area style="height: calc(100% - 150px);">
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-scroll-area>
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
    'navigator' : require('components/Navigator/Navigator.vue').default
  }
}
</script>
