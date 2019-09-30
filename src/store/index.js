/*
* Registro dos módulos utilizados no vuex
*/
import Vue from 'vue'
import Vuex from 'vuex'
import navs from './store-navs'
import legenda_de_cores from './store-legenda-de-cores'
import silos from './store-silos'
import ambiente from './store-ambiente'
import connection_status from './store-connection-status'

Vue.use(Vuex)
export default function () {
  const Store = new Vuex.Store({
    modules: {
      navs,
      ambiente,
      legenda_de_cores,
      silos, 
      connection_status
    }
  })

  return Store
}
