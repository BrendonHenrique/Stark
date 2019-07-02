import Vue from 'vue'
import Vuex from 'vuex'

import navs from './store-navs'

Vue.use(Vuex)

export default function () {

  const Store = new Vuex.Store({
    modules: {
      navs
    }
  })

  return Store
}
