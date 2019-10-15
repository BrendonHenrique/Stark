const state = { 
  ambiente:{
    umidade_relativa_do_ar_max: '',
    umidade_relativa_do_ar_min: '',
    temperatura_ambiente_max: '',
  }
}

const mutations = {
  update_infos_ambiente(state, payload){
    Object.assign(state.ambiente, payload);
  }
}

const actions = {
  update_infos_ambiente({commit}, payload){
    commit('update_infos_ambiente', payload);
  }
}

const getters = {
  get_infos_ambiente: (state) => state.ambiente
}

export default {
    namespaced: true,
    // this allows me to create another one store modules
    state,
    mutations,
    actions,
    getters
  }
  
  