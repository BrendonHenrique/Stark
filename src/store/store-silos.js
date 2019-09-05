import {
  stat
} from "fs";

import {random, getSiloById, getAeradorById, buildSilos } from '../utils/SiloUtils'

const state = {
  silos: buildSilos(parseInt(random(2,10).toFixed())),
}

const mutations = {
  /*
   *  Atualiza a propriedade temperatura do silo , pegando pelo id do silo todos os sensores e atualiza
   *  com os valores mínimo, médio e máximo de temperatura para cada silo
   */
  updateMinMedMaxTemp(state, id_silo) {
    let siloSelecionado = state.silos.filter((element) => {
      if (element.id == id_silo) {
        return element
      }
    })

    var temperaturas = []
    const {
      pendulos
    } = siloSelecionado[0]

    pendulos.map((pendulo) => {
      pendulo.sensores.map((sensor) => {
        temperaturas.push(parseFloat(sensor.temperatura))
      })
    })

    let sum = temperaturas.reduce((previous, current) => current += previous)
    let media = sum / temperaturas.length

    Object.assign(siloSelecionado[0].temperatura, {
      minima: parseFloat(Math.min(...temperaturas).toFixed(2)),
      media: parseFloat(media.toFixed(2)),
      maxima: parseFloat(Math.max(...temperaturas).toFixed(2)),
    })
  },

  /**
   * Recebe como parametro um objeto contendo o id do silo, equilibrio_higroscopico.atual, equilibrio_higroscopico.equilibrio 
   * e atualiza o store
   */
  update_equilibrio_higroscopico_atual(state, payload) {
    const { index_silo, 
    novoEquilibrio } = payload 
    let silo = getSiloById(state.silos, index_silo)
    silo.equilibrio_higroscopico.atual = novoEquilibrio 
  },

  // Atualiza o produto armazenado no respectivo silo correspondente ao id passado 
  update_produto_armazenado(state, payload) {
    const {id_silo,produto} = payload
    const silo = getSiloById(state.silos, id_silo)
    Object.assign(silo.produto_armazenado, produto)
  },

  /**
   * Atualiza a função de aeração conforme os valores recebidos como parametro
   * Param { id_silo: Number, id_aerador: Number, ligada: Boolean, label: String}
   * exemplo @input="update_funcao_de_aeracao({id_silo: 1, id_aerador: 1, ligada:funcaoManualLigada , label:'Manual'})"
   */
  update_funcao_de_aeracao(state, payload) {
    
    const {
      index_silo,
      index_aerador,
      label,
      ligada
    } = payload
      

    let silo = getSiloById(state.silos, index_silo)
    let aerador = getAeradorById(silo.aeradores, index_aerador)

    aerador.funcoes.forEach(funcao => {
      if (funcao.label == label) {
        funcao.ligada = ligada
      } else if (funcao.processos != undefined) {
        funcao.processos.forEach(processo_automatico => {
          if (processo_automatico.label == label) {
            processo_automatico.ligada = ligada
          }
        })
      }
    })
  }

}

const actions = {
  updateMinMedMaxTemp({
    commit
  }, payload) {
    commit('updateMinMedMaxTemp', payload)
  },
  update_equilibrio_higroscopico_atual({
    commit
  }, payload) {
    commit('update_equilibrio_higroscopico_atual', payload);
  },
  update_produto_armazenado({commit}
  , payload) {
    commit('update_produto_armazenado', payload)
  },
  update_funcao_de_aeracao({
    commit
  }, payload) {
    commit('update_funcao_de_aeracao', payload)
  }
}

const getters = {
  
  // retorna a lista de silos 
  silos: (state) => state.silos,
    
  // Retorna o silo pelo id buscado  
  silo_by_id: (state) => (id_silo) => {
    return  getSiloById(state.silos, id_silo)
  },

  silos_length: (state) => {
    return state.silos.length
  },

  aeradores_length: (state) => (id_silo) => { 
    const  {aeradores} =  getSiloById(id_silo)
    return  aeradores.length
  },

  // get das funções de aeração recebendo id do silo e id do aerador
  get_funcoes_de_aeracao: (state, getters) => (id_silo, id_aerador) => {
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    return aerador.funcoes
  },

  // get das possibilidades de aeração recebendo id do silo 
  get_possibilidades_de_aeracao: (state, getters) => (id_silo) => {
    let silo = getSiloById(id_silo)
    return silo.possibilidades_aeracao
  },

  // get do equilibrio_higroscopico recebendo id do silo 
  get_equilibrio_higroscopico: (state, getters) => (id_silo) => {
    return getSiloById(id_silo).equilibrio_higroscopico
  },

  // get do produto armazenado recebendo o id do silo 
  get_produto_armazenado: (state, getters) => (id_silo) => {
    let silo = getSiloById(id_silo)
    return silo.produto_armazenado
  },

}

export default {
  namespaced: true,
  // this allows me to create another one store modules
  state,
  mutations,
  actions,
  getters,
}

