silos: [{
  id: Number,
  quantidade_sacos: Number,
  temperatura: {
    minima: Number,
    media: Number,
    maxima: Number
  }, 
  produto_armazenado:{
    nome:null,
    variedade: null,
    safra: null
  },
  pendulos: [{
    id_pendulo: Number,
    sensores: [{
      id_sensor: Number,
      temperatura: Number
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
    atual: Number,
    equilibrio: Number,
  },
  aerador: {
    ligado: false,
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
    }]
  }
}]