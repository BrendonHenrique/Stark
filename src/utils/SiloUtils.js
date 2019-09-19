// Funções responsáveis pela construção de uma estrutura para os silos e para fazer buscas

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
        temperatura: parseFloat(random(10, 40).toFixed(1))
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
    for (let j = 0; j < parseInt(random(10, 25).toFixed(1)); j++) {
      sensores.push({
        id_sensor: index_sensor,
        temperatura: parseFloat(random(10, 40).toFixed(1))
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
  silos_length = parseInt(random(10, 100).toFixed(1))

  for (let index = 0; index < silos_length; index++) {
    silos.push({
      id: index,
      quantidade_sacos: parseInt(random(50000, 100000).toFixed(0)),
      temperatura: {
        minima: Number,
        media: Number,
        maxima: Number
      },
      co2: parseFloat(random(100, 1000).toFixed(1)),
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
      co2: parseFloat(random(100, 1000).toFixed(1)),
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

