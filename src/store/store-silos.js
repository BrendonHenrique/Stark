const state = {
  silos:[
    {
      id:1,
      quantidade_sacos:64758,
      sensor_temperatura:{
        minima:10,
        media:20,
        maxima:30
      },
      sensor_co2:220
    },
    {
      id:2,
      quantidade_sacos:34758,
      sensor_temperatura:{
        minima:20,
        media:30,
        maxima:34
      },
      sensor_co2:276
    },
    {
      id:3,
      quantidade_sacos:44758,
      sensor_temperatura:{
        minima:21,
        media:43,
        maxima:64
      },
      sensor_co2:877
    },
    {
      id:4,
      quantidade_sacos:34758,
      sensor_temperatura:{
        minima:13,
        media:23,
        maxima:42
      },
      sensor_co2:832
    },
    {
      id:5,
      quantidade_sacos:32423,
      sensor_temperatura:{
        minima:13,
        media:23,
        maxima:42
      },
      sensor_co2:637
    },
    {
      id:6,
      quantidade_sacos:23324,
      sensor_temperatura:{
        minima:13,
        media:23,
        maxima:42
      },
      sensor_co2:738
    },
  ]
}

const mutations = {

}

const actions = {

}

const getters = {
  silos: (state) => {
    return state.silos;
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
