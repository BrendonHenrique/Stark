import Vue from 'vue'
import Vuex from 'vuex'
import navs from './store-navs'
import silos from './store-silos'
import termometrias from './store-termometria'

Vue.use(Vuex)

export default function () {

  const Store = new Vuex.Store({
    modules: {
      navs,
      silos,
      termometrias
    }
  })

  return Store
}
