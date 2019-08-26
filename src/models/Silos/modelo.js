silos:[
  {
    id:Number,
    quantidade_sacos:Number,
    temperatura:{
      minima:Number,
      media:Number,
      maxima:Number
    },
    co2:Number,
    pendulos:[{
      id_pendulo:Number,
      sensores:[{
        id_sensor:Number,
        temperatura:Number
      }]
    }],
    possibilidades_aeracao:[
      { 
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
    equilibrio_higroscopico:{
      atual: Number,
      equilibrio: Number,
    },
    ambiente:{
      ua_max: Number,
      ua_min: Number,
      ta_max: Number,
    },
    aeradores:[
      {
        id: Number,
        funcoes:[
          {
            label: 'Manual',
            ligada: false
          },
          {
            label: 'Automática',
            ligada: false,
            processos:[
              {
                label:'Conservação',
                ligada: false
              },
              {
                label:'Secagem',
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
      }
    ],
  }
]