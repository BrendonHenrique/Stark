<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-10" >

    <!-- conteúdo das páginas -->
      <q-page-container class="bg-grey-10">
          <layout-header
            class="header"
            @openDrawerLeft="openedDrawerLeft = !openedDrawerLeft"
            @openDrawerRight="openedDrawerRight = !openedDrawerRight" >
            <q-toolbar style="min-height:0px !important;">
              <q-toolbar-title style="font-size:35px;" class="text-center q-pt-sm">
                Stark
              </q-toolbar-title>
            </q-toolbar>
          </layout-header>

          <!-- Menu da lateral esquerda -->
          <layout-drawer 
            class="left-drawer"
            @hideDrawerLeft="openedDrawerLeft = false"
            :openedDrawer="openedDrawerLeft">
            <drawer-nav :navs="navs" />
          </layout-drawer>
          <!--  -->

          <!-- Rotas -->
          <router-view class="rotas-de-conteudo" />
          <!--  -->
      
          <!-- footer -->
          <layout-footer :navs="navs" />
          <!-- -->
          
      </q-page-container>
    <!--  -->

  </q-layout>
</template>

<script>
import {  mapGetters } from 'vuex'

export default {
  data () {
    return {
      openedDrawerLeft: false,
    }
  },
  computed:{
    ...mapGetters('navs', ['navs'])
  },
  components:{
    'layout-header' : require('./Header.vue').default,
    'layout-footer' : require('./Footer.vue').default,
    'layout-drawer' : require('./Drawer.vue').default,
    'drawer-nav'    : require('components/DrawerNav/Nav.vue').default,
    'sequential-entrace': require('../components/Shared/SequentialEntrace').default
  }
}
</script>

<style lang="stylus">

  @import url('https://fonts.googleapis.com/css?family=Libre+Caslon+Text&display=swap');

  @media (max-width: 767px)
    .left-drawer
      display none 

  .q-drawer--left 
    background-color: #353535

  .header
    height 3rem
</style>
