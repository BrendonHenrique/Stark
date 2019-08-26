import { stat } from "fs";

const state = { 
    legenda_de_cores: [{
        label: "Curto",
        valor: "#2d8515"
      },
      {
        label: "Aberto",
        valor: "#ffffff"
      },
      {
        label: "Não lido por chaveador",
        valor: "#19b6ff"
      },
      {
        label: "Falha chaveador",
        valor: "#7e0bd6"
      },
      {
        label: "Sem nível de produto",
        valor: "#b8aeae"
      },
      {
        label: "Sensor com erro",
        valor: "#080808"
      },
      {
        label: "Temperaturas baixas",
        valor: "#f7ff00"
      },
      {
        label: "Temperaturas altas",
        valor: "#ff1212"
      }],
    configuracoes_de_cores: {
      temperatura_min: 10,
      temperatura_alta: 40
    }
     
}

const mutations =  {
  update_legenda_de_cores(state, payload){
    state.legenda_de_cores = payload
  },
  update_configuracoes_de_cores(state, payload){
    Object.assign(state.configuracoes_de_cores, payload)
  }
} 

const actions = { 

  update_legenda_de_cores({commit}, payload){
    commit('update_legenda_de_cores', payload)
  },
  update_configuracoes_de_cores({commit}, payload){
    commit('update_configuracoes_de_cores', payload)
  }

}

const getters = { 
    
  legenda_de_cores: (state) => {
    return state.legenda_de_cores
  },

  gradiente_de_temperatura: (state) => {
    let cores_do_gradiente = state.legenda_de_cores.filter( (valor) => {
      return valor.label == 'Temperaturas baixas' || valor.label == 'Temperaturas altas'
    })
    return `linear-gradient(90deg, ${cores_do_gradiente[0].valor}, ${cores_do_gradiente[1].valor})` 
  },

  cores_do_gradiente: (state) =>{
    return state.legenda_de_cores.filter( (valor) => {
      return valor.label == 'Temperaturas baixas' || valor.label == 'Temperaturas altas'
    })
  },

  configuracoes_de_cores: (state) => {
    return state.configuracoes_de_cores
  }
}

export default {
  namespaced: true,
  // this allows me to create another one store modules
  state,
  mutations,
  actions,
  getters
}
