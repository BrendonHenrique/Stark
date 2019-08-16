import { stat } from "fs";
 
const state = {
    aeracao:{
        infos:{
            equilibrio_higroscopico:{
                atual: 0,
                equilibrio: 9.564,
           },
            ambiente:{
                ua_max: 0,
                ua_min: 0,
                ta_max: 0,
            }
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
            isActivated: false,
            processos:[
                {
                    label:'Conservação',
                    isActivated: false
                },
                {
                    label:'Secagem',
                    isActivated: false
                }
            ]
        },
        {
            label: 'Semi Automática',
            isActivated: false,
            
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
        Object.assign(state.aeracao.infos.ambiente, payload) 
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
    update_processo_de_aeracao_automatica(state, payload){
        state.aeracao.funcoes.forEach(element => {
            if(element.label == 'Automática'){
                element.processos.forEach(processos => {
                    if(processos.label == payload){
                        processos.isActivated = true
                    }else{
                        processos.isActivated = false
                    }
                })
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
        commit('update_equilibrio_higroscopico_atual', payload);
    },
    update_infos_ambiente({commit}, payload){
        commit('update_infos_ambiente', payload);
    },
    update_funcoes_de_aeracao({commit}, payload){
        commit('update_funcoes_de_aeracao', payload);
    },
    update_possibilidades_de_aeracao({commit}, payload){
        commit('update_possibilidades_de_aeracao', payload);
    },
    update_processo_de_aeracao_automatica({commit}, payload){
        commit('update_processo_de_aeracao_automatica', payload);
    }
}

const getters = { 
    aeracao: (state) => state.aeracao,
    funcoes_de_aeracao: (state) => state.aeracao.funcoes,
    possibilidades_de_aeracao: (state) => state.aeracao.possibilidades,
    get_funcao_de_aeracao_ativa: (state) => {
        return state.aeracao.funcoes.filter( element => {
            return element.isActivated;
        });
    },
    get_funcao_automatica_ativa: (state) => {
        let funcao;
        state.aeracao.funcoes.filter( element => {
            if(element.label == 'Automática'){
               element.processos.filter(processos => {
                    if(processos.isActivated){
                        funcao = processos.label;
                    }
                })
            }
        })
        return funcao;
    },
    get_infos_ambiente: (state) => state.aeracao.infos.ambiente,
}


export default {

    namespaced: true,
    // this allows me to create another one store modules
    state,
    mutations,
    actions,
    getters
}
  