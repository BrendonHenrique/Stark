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
        funcoes:[
            {
                label: 'Manual',
                isActivated: true
            },
            {
                label: 'Automática',
                isActivated: false,
                processos:
                [
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
            }
        ] 
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
                if(element.label == 'Automática'){
                   element.processos[0].isActivated = false;
                   element.processos[1].isActivated = false;
                }
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
    },
    set_funcao_manual(state, payload){
        state.aeracao.funcoes[0].isActivated = payload
    },
    set_funcao_forcada(state, payload){
        state.aeracao.funcoes[3].isActivated = payload
    },
    set_funcao_de_expurgo(state, payload){
        state.aeracao.funcoes[4].isActivated = payload
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
    },
    set_funcao_manual({commit}, payload){
        commit('set_funcao_manual', payload)
    },
    set_funcao_de_expurgo({commit}, payload){
        commit('set_funcao_de_expurgo', payload)
    },
    set_funcao_forcada({commit}, payload){
        commit('set_funcao_forcada', payload)
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
  
