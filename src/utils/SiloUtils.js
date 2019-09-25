// Funções responsáveis pela construção de uma estrutura para os silos e para fazer buscas

// valores retirador do silo de São João
let siloSaoJoao =   
  {
    id: 0,
    quantidade_sacos: parseInt(random(50000, 100000).toFixed(0)),
    temperatura: {
      minima: 11,
      media: 21,
      maxima: 26
    }, 
    produto_armazenado: {
      nome: '',
      variedade: '',
      safra: ''
    },
    pendulos : [
      {
        id_pendulo: 0,
        sensores:[
          {
            id_sensor: 0,
            temperatura: 19.3
          },
          {
            id_sensor: 1,
            temperatura: 17.4
          },
          {
            id_sensor: 2,
            temperatura: 15.7
          },
          {
            id_sensor: 3,
            temperatura: 17
          },
          {
            id_sensor: 4,
            temperatura: 19.2
          },
          {
            id_sensor: 5,
            temperatura: 21.3
          },
          {
            id_sensor: 6,
            temperatura: 22.4
          },
          {
            id_sensor: 7,
            temperatura: 22.9
          },
          {
            id_sensor: 8,
            temperatura: 21.8
          },
          {
            id_sensor: 9,
            temperatura: 18.7
          }
        ]
      },
      {
        id_pendulo: 1,
        sensores:[
          {
            id_sensor: 10,
            temperatura: 19.9
          },
          {
            id_sensor: 11,
            temperatura: 17.4
          },
          {
            id_sensor: 12,
            temperatura: 15.7
          },
          {
            id_sensor: 13,
            temperatura: 17.3
          },
          {
            id_sensor: 14,
            temperatura: 19.6
          },
          {
            id_sensor: 15,
            temperatura: 21.7
          },
          {
            id_sensor: 16,
            temperatura: 22.7
          },
          {
            id_sensor: 17,
            temperatura: 23
          },
          {
            id_sensor: 18,
            temperatura: 20.7
          },
          {
            id_sensor: 19,
            temperatura: 18.7
          }
        ]
      },
      {
        id_pendulo: 2,
        sensores:[
          {
            id_sensor:20,
            temperatura: 19.6
          },
          {
            id_sensor:21,
            temperatura: 17.2
          },
          {
            id_sensor:22,
            temperatura: 15.7
          },
          {
            id_sensor:23,
            temperatura: 17.7
          },
          {
            id_sensor:24,
            temperatura: 20.1
          },
          {
            id_sensor:25,
            temperatura: 21.8
          },
          {
            id_sensor:26,
            temperatura: 22.9
          },
          {
            id_sensor:27,
            temperatura: 22
          },
          {
            id_sensor:28,
            temperatura: 20.5
          },
          {
            id_sensor:29,
            temperatura: 18.5
          },

        ]
      },
      {
        id_pendulo:3,
        sensores:[
          {
            id_sensor:30,
            temperatura:19
          },
          {
            id_sensor:31,
            temperatura:17
          },
          {
            id_sensor:32,
            temperatura:15.5
          },
          {
            id_sensor:33,
            temperatura:17.6
          },
          {
            id_sensor:34,
            temperatura:19.9
          },
          {
            id_sensor:35,
            temperatura:22
          },
          {
            id_sensor:36,
            temperatura:23.2
          },
          {
            id_sensor:37,
            temperatura:23.1
          },
          {
            id_sensor:38,
            temperatura:20.1
          },
          {
            id_sensor:39,
            temperatura:18.5
          },
        ]
      },
      {
        id_pendulo:4, 
        sensores: [
          {
            id_sensor: 40, 
            temperatura: 19.6
          },
          {
            id_sensor: 41, 
            temperatura: 17
          },
          {
            id_sensor: 42, 
            temperatura: 15.3
          },
          {
            id_sensor: 43, 
            temperatura: 17.6
          },
          {
            id_sensor: 44, 
            temperatura: 17
          },
          {
            id_sensor: 45, 
            temperatura: 21.8
          },
          {
            id_sensor: 46, 
            temperatura: 22.9
          },
          {
            id_sensor: 47, 
            temperatura: 22.7
          },
          {
            id_sensor: 48, 
            temperatura: 19.9
          },
          {
            id_sensor: 49, 
            temperatura: 18.1
          },
        ]
      },
      {
        id_pendulo: 5,
        sensores: [
          {
            id_sensor: 50,
            temperatura: 18.7
          },
          {
            id_sensor: 51,
            temperatura: 16.8
          },
          {
            id_sensor: 52,
            temperatura: 18.7
          },
          {
            id_sensor: 53,
            temperatura: 21.1
          },
          {
            id_sensor: 54,
            temperatura: 22.3
          },
          {
            id_sensor: 55,
            temperatura: 22.1
          },
          {
            id_sensor: 56,
            temperatura: 20.4
          },
          {
            id_sensor: 57,
            temperatura: 18.1
          },
          {
            id_sensor: 58,
            temperatura: 17.1
          },
          {
            id_sensor: 59,
            temperatura: 17.4
          },
          {
            id_sensor: 60,
            temperatura: 26.4
          },
        ]
      }
    ],
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
    atual: parseFloat(random(0, 100)).toFixed(1),
    equilibrio: parseFloat(random(0, 100)).toFixed(1),
  },
  aeradores: buildAeradores(parseInt(random(1, 2).toFixed(0)))
}

// construtores
export function buildPendulos(pendulos_size, sensores_size) {
  let pendulo = [],
    sensores = [],
    index_sensor = 0
    
  for (let i = 0; i < pendulos_size; i++) {
    sensores = []
    for (let j = 0; j < sensores_size; j++) {
      sensores.push({
        id_sensor: index_sensor,
        temperatura: parseFloat(random(0, 30).toFixed(1))
      })
      index_sensor++
    }
    pendulo.push({
      id_pendulo: i,
      sensores
    })
  }
  return pendulo
}

export function buildRandomicPendulos(){
  let pendulo = [],
  sensores = [],
  index_sensor = 0,
  pendulos_size = parseInt(random(5, 25).toFixed(1))
  
  for (let i = 0; i < pendulos_size; i++) {
    sensores = []
    for (let j = 0; j < parseInt(random(5, 25).toFixed(1)); j++) {
      sensores.push({
        id_sensor: index_sensor,
        temperatura: parseFloat(random(0, 40).toFixed(1))
      })
      index_sensor++
    }
    pendulo.push({
      id_pendulo: i,
      sensores
    })
  }
  return pendulo
}

export function buildAeradores(aerador_length) {
  let aeradores = []
  for (let index = 0; index < aerador_length; index++) {
    aeradores.push({
      id: index,
      funcoes: [{
          label: 'Manual',
          ligada: true
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
    })
  }
  return aeradores
}

export function buildRandomicSilos() {
  let silos = [],
  silos_length = parseInt(random(10, 20).toFixed(1))

  for (let index = 0; index < silos_length; index++) {
    if(index == 0){
      silos.push(siloSaoJoao)
    }else{
      silos.push({
        id: index,
        quantidade_sacos: parseInt(random(50000, 100000).toFixed(0)),
        temperatura: {
          minima: Number,
          media: Number,
          maxima: Number
        }, 
        produto_armazenado: {
          nome: '',
          variedade: '',
          safra: ''
        },
        pendulos: buildRandomicPendulos(),
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
          atual: parseFloat(random(0, 100)).toFixed(1),
          equilibrio: parseFloat(random(0, 100)).toFixed(1),
        },
        aeradores: buildAeradores(parseInt(random(1, 2).toFixed(0)))
      })
    }
  }
  return silos
}

export function buildSilos(silos_length) {
  let silos = []
  for (let index = 0; index < silos_length; index++) {
    silos.push({
      id: index,
      quantidade_sacos: parseInt(random(50000, 100000).toFixed(0)),
      temperatura: {
        minima: Number,
        media: Number,
        maxima: Number
      }, 
      produto_armazenado: {
        nome: '',
        variedade: '',
        safra: ''
      },
      pendulos: buildRandomicPendulos(),
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
        atual: parseFloat(random(0, 100)).toFixed(1),
        equilibrio: parseFloat(random(0, 100)).toFixed(1),
      },
      aeradores: buildAeradores(parseInt(random(1, 2).toFixed(0)))
    })
  }
  return silos
}

// Buscadores

export function random(min, max) {
  return Math.random() * (max - min) + min
}

export function getSiloById(arr, id) {
  return arr.find(silo => silo.id == id)
}

export function getAeradorById(arr, id) {
  return arr.find(aerador => aerador.id == id)
}

