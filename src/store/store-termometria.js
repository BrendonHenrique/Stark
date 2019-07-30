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
        },{
          id_sensor:4,
          temperatura:18.2
        },{
          id_sensor:5,
          temperatura:16.7
        },{
          id_sensor:6,
          temperatura:21.3
        },{
          id_sensor:7,
          temperatura:18.2
        },{
          id_sensor:8,
          temperatura:16.7
        },{
          id_sensor:9,
          temperatura:21.3
        },{
          id_sensor:10,
          temperatura:18.2
        },{
          id_sensor:11,
          temperatura:16.7
        },{
          id_sensor:12,
          temperatura:21.3
        }
      ]
    },{
      id_pendulo:1,
      sensores:[{
        id_sensor:13,
        temperatura:18.2
      },{
        id_sensor:14,
        temperatura:16.7
      },{
        id_sensor:15,
        temperatura:21.3
      },{
        id_sensor:16,
        temperatura:18.2
      },{
        id_sensor:17,
        temperatura:16.7
      },{
        id_sensor:18,
        temperatura:21.3
      },{
        id_sensor:19,
        temperatura:18.2
      },{
        id_sensor:20,
        temperatura:16.7
      },{
        id_sensor:21,
        temperatura:21.3
      },{
        id_sensor:22,
        temperatura:18.2
      },{
        id_sensor:23,
        temperatura:16.7
      },{
        id_sensor:24,
        temperatura:21.3
      }]
    },{
      id_pendulo:2,
      sensores:[{
        id_sensor:25,
        temperatura:20.2
      },{
        id_sensor:26,
        temperatura:19.2
      },{
        id_sensor:27,
        temperatura:18.8
      },{
        id_sensor:28,
        temperatura:20.2
      },{
        id_sensor:29,
        temperatura:19.2
      },{
        id_sensor:30,
        temperatura:18.8
      },{
        id_sensor:31,
        temperatura:20.2
      },{
        id_sensor:32,
        temperatura:19.2
      },{
        id_sensor:33,
        temperatura:18.8
      },{
        id_sensor:34,
        temperatura:20.2
      },{
        id_sensor:35,
        temperatura:19.2
      },{
        id_sensor:36,
        temperatura:18.8
      }]
    },{
      id_pendulo:3,
      sensores:[{
        id_sensor:37,
        temperatura:20.2
      },{
        id_sensor:38,
        temperatura:19.2
      },{
        id_sensor:39,
        temperatura:18.8
      },{
        id_sensor:40,
        temperatura:20.2
      },{
        id_sensor:41,
        temperatura:19.2
      },{
        id_sensor:42,
        temperatura:18.8
      },{
        id_sensor:43,
        temperatura:20.2
      },{
        id_sensor:44,
        temperatura:19.2
      },{
        id_sensor:45,
        temperatura:18.8
      },{
        id_sensor:46,
        temperatura:20.2
      },{
        id_sensor:47,
        temperatura:19.2
      },{
        id_sensor:48,
        temperatura:18.8
      }]
    },{
      id_pendulo:4,
      sensores:[{
        id_sensor:49,
        temperatura:20.2
      },{
        id_sensor:50,
        temperatura:19.2
      },{
        id_sensor:51,
        temperatura:18.8
      },{
        id_sensor:52,
        temperatura:20.2
      },{
        id_sensor:53,
        temperatura:19.2
      },{
        id_sensor:54,
        temperatura:18.8
      },{
        id_sensor:55,
        temperatura:20.2
      },{
        id_sensor:56,
        temperatura:19.2
      },{
        id_sensor:57,
        temperatura:18.8
      },{
        id_sensor:58,
        temperatura:20.2
      },{
        id_sensor:59,
        temperatura:19.2
      },{
        id_sensor:60,
        temperatura:18.8
      }]
    },{
      id_pendulo:5,
      sensores:[{
        id_sensor:61,
        temperatura:20.2
      },{
        id_sensor:62,
        temperatura:19.2
      },{
        id_sensor:63,
        temperatura:18.8
      },{
        id_sensor:64,
        temperatura:20.2
      },{
        id_sensor:65,
        temperatura:19.2
      },{
        id_sensor:66,
        temperatura:18.8
      },{
        id_sensor:67,
        temperatura:20.2
      },{
        id_sensor:68,
        temperatura:19.2
      },{
        id_sensor:69,
        temperatura:18.8
      },{
        id_sensor:70,
        temperatura:20.2
      },{
        id_sensor:71,
        temperatura:19.2
      },{
        id_sensor:72,
        temperatura:18.8
      }]
    },{
      id_pendulo:6,
      sensores:[{
        id_sensor:61,
        temperatura:20.2
      },{
        id_sensor:62,
        temperatura:19.2
      },{
        id_sensor:63,
        temperatura:18.8
      },{
        id_sensor:64,
        temperatura:20.2
      },{
        id_sensor:65,
        temperatura:19.2
      },{
        id_sensor:66,
        temperatura:18.8
      },{
        id_sensor:67,
        temperatura:20.2
      },{
        id_sensor:68,
        temperatura:19.2
      },{
        id_sensor:69,
        temperatura:18.8
      },{
        id_sensor:70,
        temperatura:20.2
      },{
        id_sensor:71,
        temperatura:19.2
      },{
        id_sensor:72,
        temperatura:18.8
      }]
    },
  ]
}


const mutations = {

}

const actions = {

}

const getters = {
  termometrias: (state) => state.termometrias
}


export default {
  namespaced: true,
  // this allows me to create another one store modules
  state,
  mutations,
  actions,
  getters
}
