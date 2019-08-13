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
        }],
        funcoes:[{
            label: 'Manual',
            isActivated: false
        },
        {
            label: 'Automática',
            isActivated: false
        },
        {
            label: 'Semi Automática',
            isActivated: false
        },
        {
            label: 'Forçado',
            isActivated: false
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
            }
        });
    },
    update_funcoes_de_aeracao(state, payload){
        state.aeracao.funcoes.forEach(element => {
            if(element.label == payload){
                element.isActivated = true
            }else{
                element.isActivated = false
            }
        });
    },
    update_possibilidades_de_aeracao(state, payload){
        state.aeracao.possibilidades.forEach(element => {
            if(element.label == payload){ 
                element.isPossible = true
            }else{
                element.isPossible = false
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
    },
    update_funcoes_de_aeracao({commit}, payload){
        commit('update_funcoes_de_aeracao', payload)
    },
    update_possibilidades_de_aeracao({commit}, payload){
        commit('update_possibilidades_de_aeracao', payload)
    }
}

const getters = { 
    aeracao: (state) => state.aeracao,
    funcoes_de_aeracao: (state) => state.aeracao.funcoes,
    possibilidades_de_aeracao: (state) => state.aeracao.possibilidades,
    get_funcao_de_aeracao_ativa: (state) => {
        return state.aeracao.funcoes.filter( element => {
            return element.isActivated
        });
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
  