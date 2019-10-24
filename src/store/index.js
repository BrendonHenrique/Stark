/*
* Registro dos módulos utilizados no vuex
*/
import Vue from 'vue';
import Vuex from 'vuex';
import navs from './store-navs';
import configuracoes from './store-configuracoes';
import silos from './store-silos';
import connection_status from './store-connection-status';
Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      navs,
      configuracoes,
      silos, 
      connection_status,
    }
  });
  
  return Store;
}
