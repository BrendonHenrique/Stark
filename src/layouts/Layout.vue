<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-10" >
    
    <!-- conteúdo das páginas -->
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

          <!-- Menu da lateral esquerda -->
          <layout-drawer 
            class="left-drawer"
            :side="'left'" 
            :drawerSide="drawerLeft" >
            <drawer-nav :navs="navs" />
          </layout-drawer>
          <!-- -->

          <!-- Menu da lateral direita -->
          <layout-drawer  :drawerSide="drawerRight" :side="'right'">
            <user-painel />
          </layout-drawer>
          <!-- -->

          <!-- footer -->
          <layout-footer :navs="navs" />
          <!-- -->
          
          <!-- Rotas -->
          <router-view class="rotas-de-conteudo" :class='{opacityContainer: drawerLeft || drawerRight}'/>
          <!--  -->
      
      </q-page-container>
    <!--  -->

  </q-layout>
</template>

<script>
import {  mapGetters } from 'vuex'

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
    'drawer-nav'    : require('components/DrawerNav/Nav.vue').default,
    'user-painel'   : require('components/UserPainel/UserPainel.vue').default,
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

  .rotas-de-conteudo
    transition 0.6s linear 

  .opacityContainer 
    opacity: 0.4

</style>
