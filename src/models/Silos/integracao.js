import { stat } from "fs";

const random = () => {
  return Math.random() * (40 - 10) + 10
}

const getSiloById = (arr, id) => { 
  return arr.find(silo => silo.id == id) 
}

const getAeradorById = (arr, id)=>{
  return arr.find( aerador => aerador.id == id)
}

const state = {
  silos: [
    // Silo 1 
    
    {
      id: 1,
      quantidade_sacos: 64758,
      temperatura: {
        minima: '',
        media: '',
        maxima: ''
      },
      co2: 220,
      produto_armazenado:{
        nome:null,
        variedade: null,
        safra: null
      },
      pendulos: [{
        id_pendulo: 1,
        sensores: [{
          id_sensor: 1,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 2,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 3,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 4,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 5,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 6,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 7,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 8,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 9,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 10,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 11,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 12,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 2,
        sensores: [{
          id_sensor: 13,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 14,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 15,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 16,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 17,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 18,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 19,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 20,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 21,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 22,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 23,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 24,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 3,
        sensores: [{
          id_sensor: 25,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 26,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 27,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 28,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 29,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 30,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 31,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 32,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 33,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 34,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 35,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 36,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 4,
        sensores: [{
          id_sensor: 37,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 38,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 39,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 40,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 41,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 42,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 43,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 44,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 45,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 46,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 47,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 48,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 5,
        sensores: [{
          id_sensor: 49,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 50,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 51,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 52,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 53,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 54,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 55,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 56,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 57,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 58,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 59,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 60,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 6,
        sensores: [{
          id_sensor: 61,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 62,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 63,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 64,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 65,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 66,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 67,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 68,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 69,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 70,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 71,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 72,
          temperatura: random().toFixed(1)
        }]
      }],
      possibilidades_aeracao: [{
          label: 'Por Conservação',
          isPossible: false
        },
        {
          label: 'Por Secagem',
          isPossible: false
        },
        {
          label: 'Por Semi-auto',
          isPossible: false
        },
        {
          label: 'Por Emergência',
          isPossible: false
        }
      ],
      equilibrio_higroscopico: {
        atual: '',
        equilibrio: 9.564,
      }, 
      aeradores: [
      // Aerador 1 
      {
        id: 1,
        funcoes: [{
            label: 'Manual',
            ligada: false
          },
          {
            label: 'Automática',
            ligada: false,
            processos: [{
                label: 'Conservação',
                ligada: false
              },
              {
                label: 'Secagem',
                ligada: false
              }
            ]
          },
          {
            label: 'Semi Automática',
            ligada: false,
          },
          {
            label: 'Forçado',
            ligada: false
          },
          {
            label: 'Expurgo',
            ligada: false
          }
        ]
      }, 
      // Aerador 2 
      {
        id: 2,
        funcoes: [{
            label: 'Manual',
            ligada: false
          },
          {
            label: 'Automática',
            ligada: true,
            processos: [{
                label: 'Conservação',
                ligada: false
              },
              {
                label: 'Secagem',
                ligada: false
              }
            ]
          },
          {
            label: 'Semi Automática',
            ligada: false,
          },
          {
            label: 'Forçado',
            ligada: false
          },
          {
            label: 'Expurgo',
            ligada: false
          }
        ]
      }]
    }, 
  
    // Silo  2
  
    {
      id: 2,
      quantidade_sacos: 64758,
      temperatura: {
        minima: '',
        media:  '',
        maxima: ''
      },
      co2: 220,
      produto_armazenado:{
        nome:null,
        variedade: null,
        safra: null
      },
      pendulos: [{
        id_pendulo: 1,
        sensores: [{
          id_sensor: 1,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 2,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 3,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 4,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 5,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 6,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 7,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 8,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 9,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 10,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 11,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 12,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 2,
        sensores: [{
          id_sensor: 13,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 14,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 15,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 16,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 17,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 18,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 19,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 20,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 21,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 22,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 23,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 24,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 3,
        sensores: [{
          id_sensor: 25,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 26,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 27,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 28,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 29,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 30,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 31,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 32,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 33,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 34,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 35,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 36,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 4,
        sensores: [{
          id_sensor: 37,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 38,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 39,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 40,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 41,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 42,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 43,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 44,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 45,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 46,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 47,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 48,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 5,
        sensores: [{
          id_sensor: 49,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 50,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 51,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 52,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 53,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 54,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 55,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 56,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 57,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 58,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 59,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 60,
          temperatura: random().toFixed(1)
        }]
      }, {
        id_pendulo: 6,
        sensores: [{
          id_sensor: 61,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 62,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 63,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 64,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 65,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 66,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 67,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 68,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 69,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 70,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 71,
          temperatura: random().toFixed(1)
        }, {
          id_sensor: 72,
          temperatura: random().toFixed(1)
        }]
      }],
      possibilidades_aeracao: [{
          label: 'Por Conservação',
          isPossible: false
        },
        {
          label: 'Por Secagem',
          isPossible: false
        },
        {
          label: 'Por Semi-auto',
          isPossible: false
        },
        {
          label: 'Por Emergência',
          isPossible: false
        }
      ],
      equilibrio_higroscopico: {
        atual: '',
        equilibrio: 9.564,
      },
      aeradores: [{
        id: 1,
        funcoes: [{
            label: 'Manual',
            ligada: false
          },
          {
            label: 'Automática',
            ligada: false,
            processos: [{
                label: 'Conservação',
                ligada: false
              },
              {
                label: 'Secagem',
                ligada: false
              }
            ]
          },
          {
            label: 'Semi Automática',
            ligada: false,
          },
          {
            label: 'Forçado',
            ligada: false
          },
          {
            label: 'Expurgo',
            ligada: false
          }
        ]
      }, {
        id: 2,
        funcoes: [{
            label: 'Manual',
            ligada: false
          },
          {
            label: 'Automática',
            ligada: false,
            processos: [{
                label: 'Conservação',
                ligada: false
              },
              {
                label: 'Secagem',
                ligada: false
              }
            ]
          },
          {
            label: 'Semi Automática',
            ligada: false,
          },
          {
            label: 'Forçado',
            ligada: false
          },
          {
            label: 'Expurgo',
            ligada: false
          }
        ]
      }]
    }
  ]
}

const mutations = {
  /*
  *  Atualiza a propriedade temperatura do silo , pegando pelo id do silo todos os sensores e atualiza
  *  com os valores mínimo, médio e máximo de temperatura para cada silo
  */
  updateMinMedMaxTemp(state, id_silo){
    
    let siloSelecionado = state.silos.filter( (element) => {
      if(element.id == id_silo){
        return element
      }
    })
    
    var temperaturas = []
    const { pendulos } = siloSelecionado[0]

    pendulos.map( ( pendulo ) =>{
      pendulo.sensores.map( (sensor) =>{
        temperaturas.push(parseFloat(sensor.temperatura))
      })
    })

    let sum = temperaturas.reduce((previous, current) => current += previous)
    let media = sum / temperaturas.length

    Object.assign(siloSelecionado[0].temperatura,{ 
      minima: parseFloat(Math.min(...temperaturas).toFixed(2)),
      media : parseFloat(media.toFixed(2)), 
      maxima: parseFloat(Math.max(...temperaturas).toFixed(2)),
    })
  },
  
  /**
   * Recebe como parametro um objeto contendo o id do silo, equilibrio_higroscopico.atual, equilibrio_higroscopico.equilibrio 
   * e atualiza o store
  */
  update_equilibrio_higroscopico_atual(state, payload){
    const {id_silo, ...novoEquilibrio} = payload 
    let silo = getSiloById(state.silos, id_silo)
    Object.assign(silo.equilibrio_higroscopico, novoEquilibrio)
  },

  // Atualiza o produto armazenado no respectivo silo correspondente ao id passado 
  update_produto_armazenado(state,payload){
    const {id_silo, ...produto_armazenado} = payload
    const silo = getSiloById(state.silos, id_silo)
    Object.assign(silo.produto_armazenado, produto_armazenado)
  },

  /**
  * As demais mutations abaixo guardam os valores de cada uma das funções de aeração
  * Cada uma recebe um objeto contendo o id do silo , id do aerador e o valor booleano de ligado (true ou false)
  * 
  */
  set_funcao_manual(state,payload){
    const {id_silo, id_aerador, ligada} = payload
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    aerador.funcoes[0].ligada = ligada
  },

  set_funcao_automatica(state, payload){
    const {id_silo, id_aerador, ligada} = payload
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    aerador.funcoes[1].ligada = ligada
  },
  
  set_funcao_automatica_por_conservacao(state, payload){
    const {id_silo, id_aerador, ligada} = payload
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    aerador.funcoes[1].processos[0].ligada = ligada
  },

  set_funcao_automatica_por_secagem(state, payload){
    const {id_silo, id_aerador, ligada} = payload
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    aerador.funcoes[1].processos[1].ligada = ligada
  },
  
  set_funcao_semi_automatica(state, payload){
    const {id_silo, id_aerador, ligada} = payload
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    aerador.funcoes[2].ligada = ligada
  },
  
  set_funcao_forcada(state, payload){
    const {id_silo, id_aerador, ligada} = payload
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    aerador.funcoes[3].ligada = ligada
  },
  
  set_funcao_de_expurgo(state, payload){
    const {id_silo, id_aerador, ligada} = payload
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    aerador.funcoes[4].ligada = ligada
  },

}
  
const actions = {
  updateMinMedMaxTemp({commit}, payload){
    commit('updateMinMedMaxTemp', payload)
  },
  set_equilibrio_higroscopico_atual({commit}, payload){
    commit('update_equilibrio_higroscopico_atual', payload);
  },
  set_funcao_manual({commit}, payload){
    commit('set_funcao_manual', payload)
  },
  set_funcao_de_expurgo({commit}, payload){
    commit('set_funcao_de_expurgo', payload)
  },
  set_funcao_forcada({commit}, payload){
    commit('set_funcao_forcada', payload)
  },
  set_funcao_automatica({commit}, payload){
    commit('set_funcao_automatica', payload)
  },
  set_funcao_automatica_por_secagem({commit},payload){
    commit('set_funcao_automatica_por_secagem', payload)
  },
  set_funcao_automatica_por_conservacao({commit}, payload){
    commit('set_funcao_automatica_por_conservacao', payload)
  },
  set_funcao_semi_automatica({commit}, payload){
    commit('set_funcao_semi_automatica', payload)
  },
  update_produto_armazenado({commit}, payload){
    commit('update_produto_armazenado', payload)
  }
}

const getters = {
  // retorna a lista de silos 
  silos: (state) => state.silos,

  // get das funções de aeração recebendo id do silo e id do aerador
  get_funcoes_de_aeracao: (state) => (id_silo, id_aerador) => {
    let silo = getSiloById(state.silos, id_silo)
    let aerador = getAeradorById(silo.aeradores, id_aerador)
    return aerador.funcoes
  },

  // get das possibilidades de aeração recebendo id do silo 
  get_possibilidades_de_aeracao: (state) => (id_silo) => {      
    let silo = getSiloById(state.silos, id_silo)
    return silo.possibilidades_aeracao
  },

  // get da função de aeração ativa recebendo o id do silo e id do aerador
  get_funcao_de_aeracao_ativa: (state,getters) => (id_silo, id_aerador) => {
    let funcoes = getters.get_funcoes_de_aeracao(id_silo,id_aerador)
    return funcoes.filter( funcao_de_aeracao => funcao_de_aeracao.ligada)
  },

  // get do equilibrio_higroscopico recebendo id do silo 
  get_equilibrio_higroscopico: (state) => (id_silo) => {
    let silo = getSiloById(state.silos, id_silo)
    return silo.equilibrio_higroscopico
  },
  
  // get do produto armazenado recebendo o id do silo 
  get_produto_armazenado: (state) => (id_silo) => {
    let silo = getSiloById(state.silos, id_silo)
    return silo.produto_armazenado
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