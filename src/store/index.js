import Vue from 'vue'
import Vuex from 'vuex'
import navs from './store-navs'
import silos from './store-silos' 
import legenda_de_cores from './store-legenda-de-cores'
import produto_armazenado from './store-produto-armazenado'
Vue.use(Vuex)

export default function () {

  const Store = new Vuex.Store({
    modules: {
      navs,
      silos, 
      legenda_de_cores,
      produto_armazenado
    }
  })

  return Store
}
