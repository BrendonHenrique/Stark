import { stat } from "fs";

const state = {
    aeracao:{
        infos:{
            equilibrio_higroscopico:{
                atual: 0,
                equilibrio: 9.564,
           },
            ambiente:[
                {
                    valor: 10,
                    label: 'Umidade ambiente min'
                },
                {
                    valor: 10,
                    label: 'Umidade ambiente max'
                },
                {
                    valor: 10,
                    label: 'Temperatura ambiente max'
                }
            ]
        },
        possibilidades:[{
            label: 'Por Conservação',
            isPossible: true
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
            isPossible: true
        }],
        funcoes:[{
            label: 'Manual',
            isActivated: false
        },
        {
            label: 'Auto',
            isActivated: false
        },
        {
            label: 'Semi Auto',
            isActivated: false
        },
        {
            label: 'Forçado',
            isActivated: true
        },
        {
            label: 'Expurgo',
            isActivated: false
        }] 
    }

}

const mutations = { 
    update_equilibrio_higroscopico_atual(state, payload){
        state.aeracao.infos.equilibrio_higroscopico.atual = payload
    },
    update_infos_ambiente(state, payload){
        state.aeracao.infos.ambiente.forEach(element => {
            if(element.label == payload.label){
                Object.assign(element, payload)
                // console.log('encontrado : ' + element.valor)
                // console.log('será substituido por  : ' + payload.valor)
            }
        });
    }
}   

const actions = {
    update_equilibrio_higroscopico_atual({commit}, payload){
        commit('update_equilibrio_higroscopico_atual', payload)
    },
    update_infos_ambiente({commit}, payload){
        commit('update_infos_ambiente', payload)
    }
}

const getters = { 
    aeracao: (state) => state.aeracao
}


export default {

    namespaced: true,
    // this allows me to create another one store modules
    state,
    mutations,
    actions,
    getters
}
  