const state = {
  termometrias: [
    {
      id_pendulo:0,
      sensores:[
        {
          id_sensor:1,
          temperatura:15.6
        },{
          id_sensor:2,
          temperatura:15.6
        },{
          id_sensor:3,
          temperatura:19.2
        }
      ]
    },{
      id_pendulo:1,
      sensores:[{
          id_sensor:4,
          temperatura:18.2
        },{
          id_sensor:5,
          temperatura:16.7
        },{
          id_sensor:6,
          temperatura:21.32
        }]
    },{
      id_pendulo:2,
      sensores:[{
          id_sensor:7,
          temperatura:20.2
        },{
          id_sensor:8,
          temperatura:19.2
        },{
          id_sensor:9,
          temperatura:18.8
        }]
    }
  ]
}


const mutations = {

}

const actions = {

}

const getters = {
  termometrias: (state) => {
    return state.termometrias;
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
