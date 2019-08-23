const random = () => {
  return Math.random() * (40 - 10) + 10
}

const state = {
  silos: [{
    id: 1,
    quantidade_sacos: 64758,
    temperatura: {
      minima: '',
      media: '',
      maxima: ''
    },
    co2: 220,
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
    ambiente: {
      ua_max: '',
      ua_min: '',
      ta_max: '',
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
  }, {
    id: 2,
    quantidade_sacos: 64758,
    temperatura: {
      minima: '',
      media:  '',
      maxima: ''
    },
    co2: 220,
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
    ambiente: {
      ua_max: '',
      ua_min: '',
      ta_max: '',
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
  }]
}

const mutations = {

  /*
  *  Atualiza a propriedade temperatura do silo , pegando pelo id do silo todos os sensores e sobrescrevendo a propriedade
  *  com os valores mínimo, médio e máximo de temperatura para cada silo
  */
  updateMinMedMaxTemp(state, id_silo){

    let siloSelecionado = state.silos.filter( (element) => {
      if(element.id == id_silo){
        return element
      }
    })
    
    var temperaturas = []
    const { termometria } = siloSelecionado[0]
    termometria.map( ( pendulo ) =>{
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
  }


}
  
const actions = {
  // Passo o id do silo pelo payload
  updateMinMedMaxTemp({commit}, payload){
    commit('updateMinMedMaxTemp', payload)
  }
}

const getters = {
  silos: (state) =>  state.silos,
}

export default {
  namespaced: true,
  // this allows me to create another one store modules
  state,
  mutations,
  actions,
  getters
}

