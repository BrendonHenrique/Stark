const random = () => {
  return Math.random() * (40 - 10) + 10;
}

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
      sensor_co2:220,
      termometria: [
        {
          id_pendulo:0,
          sensores:[
            {
              id_sensor:1,
              temperatura:random().toFixed(1)
            },{
              id_sensor:2,
              temperatura:random().toFixed(1)
            },{
              id_sensor:3,
              temperatura:random().toFixed(1)
            },{
              id_sensor:4,
              temperatura:random().toFixed(1)
            },{
              id_sensor:5,
              temperatura:random().toFixed(1)
            },{
              id_sensor:6,
              temperatura:random().toFixed(1)
            },{
              id_sensor:7,
              temperatura:random().toFixed(1)
            },{
              id_sensor:8,
              temperatura:random().toFixed(1)
            },{
              id_sensor:9,
              temperatura:random().toFixed(1)
            },{
              id_sensor:10,
              temperatura:random().toFixed(1)
            },{
              id_sensor:11,
              temperatura:random().toFixed(1)
            },{
              id_sensor:12,
              temperatura:random().toFixed(1)
            }
          ]
        },{
          id_pendulo:1,
          sensores:[{
            id_sensor:13,
            temperatura:random().toFixed(1)
          },{
            id_sensor:14,
            temperatura:random().toFixed(1)
          },{
            id_sensor:15,
            temperatura:random().toFixed(1)
          },{
            id_sensor:16,
            temperatura:random().toFixed(1)
          },{
            id_sensor:17,
            temperatura:random().toFixed(1)
          },{
            id_sensor:18,
            temperatura:random().toFixed(1)
          },{
            id_sensor:19,
            temperatura:random().toFixed(1)
          },{
            id_sensor:20,
            temperatura:random().toFixed(1)
          },{
            id_sensor:21,
            temperatura:random().toFixed(1)
          },{
            id_sensor:22,
            temperatura:random().toFixed(1)
          },{
            id_sensor:23,
            temperatura:random().toFixed(1)
          },{
            id_sensor:24,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:2,
          sensores:[{
            id_sensor:25,
            temperatura:random().toFixed(1)
          },{
            id_sensor:26,
            temperatura:random().toFixed(1)
          },{
            id_sensor:27,
            temperatura:random().toFixed(1)
          },{
            id_sensor:28,
            temperatura:random().toFixed(1)
          },{
            id_sensor:29,
            temperatura:random().toFixed(1)
          },{
            id_sensor:30,
            temperatura:random().toFixed(1)
          },{
            id_sensor:31,
            temperatura:random().toFixed(1)
          },{
            id_sensor:32,
            temperatura:random().toFixed(1)
          },{
            id_sensor:33,
            temperatura:random().toFixed(1)
          },{
            id_sensor:34,
            temperatura:random().toFixed(1)
          },{
            id_sensor:35,
            temperatura:random().toFixed(1)
          },{
            id_sensor:36,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:3,
          sensores:[{
            id_sensor:37,
            temperatura:random().toFixed(1)
          },{
            id_sensor:38,
            temperatura:random().toFixed(1)
          },{
            id_sensor:39,
            temperatura:random().toFixed(1)
          },{
            id_sensor:40,
            temperatura:random().toFixed(1)
          },{
            id_sensor:41,
            temperatura:random().toFixed(1)
          },{
            id_sensor:42,
            temperatura:random().toFixed(1)
          },{
            id_sensor:43,
            temperatura:random().toFixed(1)
          },{
            id_sensor:44,
            temperatura:random().toFixed(1)
          },{
            id_sensor:45,
            temperatura:random().toFixed(1)
          },{
            id_sensor:46,
            temperatura:random().toFixed(1)
          },{
            id_sensor:47,
            temperatura:random().toFixed(1)
          },{
            id_sensor:48,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:4,
          sensores:[{
            id_sensor:49,
            temperatura:random().toFixed(1)
          },{
            id_sensor:50,
            temperatura:random().toFixed(1)
          },{
            id_sensor:51,
            temperatura:random().toFixed(1)
          },{
            id_sensor:52,
            temperatura:random().toFixed(1)
          },{
            id_sensor:53,
            temperatura:random().toFixed(1)
          },{
            id_sensor:54,
            temperatura:random().toFixed(1)
          },{
            id_sensor:55,
            temperatura:random().toFixed(1)
          },{
            id_sensor:56,
            temperatura:random().toFixed(1)
          },{
            id_sensor:57,
            temperatura:random().toFixed(1)
          },{
            id_sensor:58,
            temperatura:random().toFixed(1)
          },{
            id_sensor:59,
            temperatura:random().toFixed(1)
          },{
            id_sensor:60,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:5,
          sensores:[{
            id_sensor:61,
            temperatura:random().toFixed(1)
          },{
            id_sensor:62,
            temperatura:random().toFixed(1)
          },{
            id_sensor:63,
            temperatura:random().toFixed(1)
          },{
            id_sensor:64,
            temperatura:random().toFixed(1)
          },{
            id_sensor:65,
            temperatura:random().toFixed(1)
          },{
            id_sensor:66,
            temperatura:random().toFixed(1)
          },{
            id_sensor:67,
            temperatura:random().toFixed(1)
          },{
            id_sensor:68,
            temperatura:random().toFixed(1)
          },{
            id_sensor:69,
            temperatura:random().toFixed(1)
          },{
            id_sensor:70,
            temperatura:random().toFixed(1)
          },{
            id_sensor:71,
            temperatura:random().toFixed(1)
          },{
            id_sensor:72,
            temperatura:random().toFixed(1)
          }]
        },
      ]
    },
    {
      id:2,
      quantidade_sacos:34758,
      sensor_temperatura:{
        minima:20,
        media:30,
        maxima:34
      },
      sensor_co2:276,
      termometria: [
        {
          id_pendulo:0,
          sensores:[
            {
              id_sensor:1,
              temperatura:random().toFixed(1)
            },{
              id_sensor:2,
              temperatura:random().toFixed(1)
            },{
              id_sensor:3,
              temperatura:random().toFixed(1)
            },{
              id_sensor:4,
              temperatura:random().toFixed(1)
            },{
              id_sensor:5,
              temperatura:random().toFixed(1)
            },{
              id_sensor:6,
              temperatura:random().toFixed(1)
            },{
              id_sensor:7,
              temperatura:random().toFixed(1)
            },{
              id_sensor:8,
              temperatura:random().toFixed(1)
            },{
              id_sensor:9,
              temperatura:random().toFixed(1)
            },{
              id_sensor:10,
              temperatura:random().toFixed(1)
            },{
              id_sensor:11,
              temperatura:random().toFixed(1)
            },{
              id_sensor:12,
              temperatura:random().toFixed(1)
            }
          ]
        },{
          id_pendulo:1,
          sensores:[{
            id_sensor:13,
            temperatura:random().toFixed(1)
          },{
            id_sensor:14,
            temperatura:random().toFixed(1)
          },{
            id_sensor:15,
            temperatura:random().toFixed(1)
          },{
            id_sensor:16,
            temperatura:random().toFixed(1)
          },{
            id_sensor:17,
            temperatura:random().toFixed(1)
          },{
            id_sensor:18,
            temperatura:random().toFixed(1)
          },{
            id_sensor:19,
            temperatura:random().toFixed(1)
          },{
            id_sensor:20,
            temperatura:random().toFixed(1)
          },{
            id_sensor:21,
            temperatura:random().toFixed(1)
          },{
            id_sensor:22,
            temperatura:random().toFixed(1)
          },{
            id_sensor:23,
            temperatura:random().toFixed(1)
          },{
            id_sensor:24,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:2,
          sensores:[{
            id_sensor:25,
            temperatura:random().toFixed(1)
          },{
            id_sensor:26,
            temperatura:random().toFixed(1)
          },{
            id_sensor:27,
            temperatura:random().toFixed(1)
          },{
            id_sensor:28,
            temperatura:random().toFixed(1)
          },{
            id_sensor:29,
            temperatura:random().toFixed(1)
          },{
            id_sensor:30,
            temperatura:random().toFixed(1)
          },{
            id_sensor:31,
            temperatura:random().toFixed(1)
          },{
            id_sensor:32,
            temperatura:random().toFixed(1)
          },{
            id_sensor:33,
            temperatura:random().toFixed(1)
          },{
            id_sensor:34,
            temperatura:random().toFixed(1)
          },{
            id_sensor:35,
            temperatura:random().toFixed(1)
          },{
            id_sensor:36,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:3,
          sensores:[{
            id_sensor:37,
            temperatura:random().toFixed(1)
          },{
            id_sensor:38,
            temperatura:random().toFixed(1)
          },{
            id_sensor:39,
            temperatura:random().toFixed(1)
          },{
            id_sensor:40,
            temperatura:random().toFixed(1)
          },{
            id_sensor:41,
            temperatura:random().toFixed(1)
          },{
            id_sensor:42,
            temperatura:random().toFixed(1)
          },{
            id_sensor:43,
            temperatura:random().toFixed(1)
          },{
            id_sensor:44,
            temperatura:random().toFixed(1)
          },{
            id_sensor:45,
            temperatura:random().toFixed(1)
          },{
            id_sensor:46,
            temperatura:random().toFixed(1)
          },{
            id_sensor:47,
            temperatura:random().toFixed(1)
          },{
            id_sensor:48,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:4,
          sensores:[{
            id_sensor:49,
            temperatura:random().toFixed(1)
          },{
            id_sensor:50,
            temperatura:random().toFixed(1)
          },{
            id_sensor:51,
            temperatura:random().toFixed(1)
          },{
            id_sensor:52,
            temperatura:random().toFixed(1)
          },{
            id_sensor:53,
            temperatura:random().toFixed(1)
          },{
            id_sensor:54,
            temperatura:random().toFixed(1)
          },{
            id_sensor:55,
            temperatura:random().toFixed(1)
          },{
            id_sensor:56,
            temperatura:random().toFixed(1)
          },{
            id_sensor:57,
            temperatura:random().toFixed(1)
          },{
            id_sensor:58,
            temperatura:random().toFixed(1)
          },{
            id_sensor:59,
            temperatura:random().toFixed(1)
          },{
            id_sensor:60,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:5,
          sensores:[{
            id_sensor:61,
            temperatura:random().toFixed(1)
          },{
            id_sensor:62,
            temperatura:random().toFixed(1)
          },{
            id_sensor:63,
            temperatura:random().toFixed(1)
          },{
            id_sensor:64,
            temperatura:random().toFixed(1)
          },{
            id_sensor:65,
            temperatura:random().toFixed(1)
          },{
            id_sensor:66,
            temperatura:random().toFixed(1)
          },{
            id_sensor:67,
            temperatura:random().toFixed(1)
          },{
            id_sensor:68,
            temperatura:random().toFixed(1)
          },{
            id_sensor:69,
            temperatura:random().toFixed(1)
          },{
            id_sensor:70,
            temperatura:random().toFixed(1)
          },{
            id_sensor:71,
            temperatura:random().toFixed(1)
          },{
            id_sensor:72,
            temperatura:random().toFixed(1)
          }]
        },
      ]
    },
    {
      id:3,
      quantidade_sacos:44758,
      sensor_temperatura:{
        minima:21,
        media:43,
        maxima:64
      },
      sensor_co2:877,
      termometria: [
        {
          id_pendulo:0,
          sensores:[
            {
              id_sensor:1,
              temperatura:random().toFixed(1)
            },{
              id_sensor:2,
              temperatura:random().toFixed(1)
            },{
              id_sensor:3,
              temperatura:random().toFixed(1)
            },{
              id_sensor:4,
              temperatura:random().toFixed(1)
            },{
              id_sensor:5,
              temperatura:random().toFixed(1)
            },{
              id_sensor:6,
              temperatura:random().toFixed(1)
            },{
              id_sensor:7,
              temperatura:random().toFixed(1)
            },{
              id_sensor:8,
              temperatura:random().toFixed(1)
            },{
              id_sensor:9,
              temperatura:random().toFixed(1)
            },{
              id_sensor:10,
              temperatura:random().toFixed(1)
            },{
              id_sensor:11,
              temperatura:random().toFixed(1)
            },{
              id_sensor:12,
              temperatura:random().toFixed(1)
            }
          ]
        },{
          id_pendulo:1,
          sensores:[{
            id_sensor:13,
            temperatura:random().toFixed(1)
          },{
            id_sensor:14,
            temperatura:random().toFixed(1)
          },{
            id_sensor:15,
            temperatura:random().toFixed(1)
          },{
            id_sensor:16,
            temperatura:random().toFixed(1)
          },{
            id_sensor:17,
            temperatura:random().toFixed(1)
          },{
            id_sensor:18,
            temperatura:random().toFixed(1)
          },{
            id_sensor:19,
            temperatura:random().toFixed(1)
          },{
            id_sensor:20,
            temperatura:random().toFixed(1)
          },{
            id_sensor:21,
            temperatura:random().toFixed(1)
          },{
            id_sensor:22,
            temperatura:random().toFixed(1)
          },{
            id_sensor:23,
            temperatura:random().toFixed(1)
          },{
            id_sensor:24,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:2,
          sensores:[{
            id_sensor:25,
            temperatura:random().toFixed(1)
          },{
            id_sensor:26,
            temperatura:random().toFixed(1)
          },{
            id_sensor:27,
            temperatura:random().toFixed(1)
          },{
            id_sensor:28,
            temperatura:random().toFixed(1)
          },{
            id_sensor:29,
            temperatura:random().toFixed(1)
          },{
            id_sensor:30,
            temperatura:random().toFixed(1)
          },{
            id_sensor:31,
            temperatura:random().toFixed(1)
          },{
            id_sensor:32,
            temperatura:random().toFixed(1)
          },{
            id_sensor:33,
            temperatura:random().toFixed(1)
          },{
            id_sensor:34,
            temperatura:random().toFixed(1)
          },{
            id_sensor:35,
            temperatura:random().toFixed(1)
          },{
            id_sensor:36,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:3,
          sensores:[{
            id_sensor:37,
            temperatura:random().toFixed(1)
          },{
            id_sensor:38,
            temperatura:random().toFixed(1)
          },{
            id_sensor:39,
            temperatura:random().toFixed(1)
          },{
            id_sensor:40,
            temperatura:random().toFixed(1)
          },{
            id_sensor:41,
            temperatura:random().toFixed(1)
          },{
            id_sensor:42,
            temperatura:random().toFixed(1)
          },{
            id_sensor:43,
            temperatura:random().toFixed(1)
          },{
            id_sensor:44,
            temperatura:random().toFixed(1)
          },{
            id_sensor:45,
            temperatura:random().toFixed(1)
          },{
            id_sensor:46,
            temperatura:random().toFixed(1)
          },{
            id_sensor:47,
            temperatura:random().toFixed(1)
          },{
            id_sensor:48,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:4,
          sensores:[{
            id_sensor:49,
            temperatura:random().toFixed(1)
          },{
            id_sensor:50,
            temperatura:random().toFixed(1)
          },{
            id_sensor:51,
            temperatura:random().toFixed(1)
          },{
            id_sensor:52,
            temperatura:random().toFixed(1)
          },{
            id_sensor:53,
            temperatura:random().toFixed(1)
          },{
            id_sensor:54,
            temperatura:random().toFixed(1)
          },{
            id_sensor:55,
            temperatura:random().toFixed(1)
          },{
            id_sensor:56,
            temperatura:random().toFixed(1)
          },{
            id_sensor:57,
            temperatura:random().toFixed(1)
          },{
            id_sensor:58,
            temperatura:random().toFixed(1)
          },{
            id_sensor:59,
            temperatura:random().toFixed(1)
          },{
            id_sensor:60,
            temperatura:random().toFixed(1)
          }]
        },{
          id_pendulo:5,
          sensores:[{
            id_sensor:61,
            temperatura:random().toFixed(1)
          },{
            id_sensor:62,
            temperatura:random().toFixed(1)
          },{
            id_sensor:63,
            temperatura:random().toFixed(1)
          },{
            id_sensor:64,
            temperatura:random().toFixed(1)
          },{
            id_sensor:65,
            temperatura:random().toFixed(1)
          },{
            id_sensor:66,
            temperatura:random().toFixed(1)
          },{
            id_sensor:67,
            temperatura:random().toFixed(1)
          },{
            id_sensor:68,
            temperatura:random().toFixed(1)
          },{
            id_sensor:69,
            temperatura:random().toFixed(1)
          },{
            id_sensor:70,
            temperatura:random().toFixed(1)
          },{
            id_sensor:71,
            temperatura:random().toFixed(1)
          },{
            id_sensor:72,
            temperatura:random().toFixed(1)
          }]
        }]
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
