import { stat } from "fs";
// Gerênciador de estado das informações contidas em Aeracao.vue e seus componentes filhos
// As informações são a respeito das funções de aeração e das possibilidades de aeração no silo
const state = {
    aeracao:{
        infos:{
            equilibrio_higroscopico:{
                atual: '',
                equilibrio: 9.564,
           },
            ambiente:{
                ua_max: '',
                ua_min: '',
                ta_max: '',
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
                ligada: false
            },
            {
                label: 'Automática',
                ligada: false,
                processos:
                [
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
}

const mutations = { 
    // Integrada
    update_equilibrio_higroscopico_atual(state, payload){
        state.aeracao.infos.equilibrio_higroscopico.atual = payload
    },
    
    // Passado pra store separado 
    update_infos_ambiente(state, payload){
        Object.assign(state.aeracao.infos.ambiente, payload) 
    },
    
    // Nao utilizando
    update_processo_de_aeracao_automatica(state, payload){
        state.aeracao.funcoes.forEach(element => {
            if(element.label == 'Automática'){
                element.processos.forEach(processos => {
                    if(processos.label == payload){
                        processos.ligada = true
                    }else{
                        processos.ligada = false
                    }
                })
            }
        });
    },
    
    // Integrada
        set_funcao_manual(state, payload){
            state.aeracao.funcoes[0].ligada = payload
        },
        set_funcao_automatica_por_conservacao(state, payload){
            state.aeracao.funcoes[1].processos[0].ligada = payload
        },
        set_funcao_automatica_por_secagem(state,payload){
            state.aeracao.funcoes[1].processos[1].ligada = payload
        },
        set_funcao_automatica(state, payload){
            state.aeracao.funcoes[1].ligada = payload
        },
        set_funcao_semi_automatica(state, payload){
            state.aeracao.funcoes[2].ligada = payload
        },
        set_funcao_forcada(state, payload){
            state.aeracao.funcoes[3].ligada = payload
        },
        set_funcao_de_expurgo(state, payload){
            state.aeracao.funcoes[4].ligada = payload
        },
}   

const actions = {
    update_equilibrio_higroscopico_atual({commit}, payload){
        commit('update_equilibrio_higroscopico_atual', payload);
    },
    update_infos_ambiente({commit}, payload){
        commit('update_infos_ambiente', payload);
    },
    // Nao utilizando
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
    },
    set_funcao_automatica({commit}, payload){
        commit('set_funcao_automatica', payload)
    },
    set_funcao_automatica_por_secagem({commit},payload){
        commit('set_funcao_automatica_por_secagem', payload)
    },
    set_funcao_automatica_por_conservacao({commit}, payload){
        commit('set_funcao_automatica_por_conservacao', payload)
    },
    set_funcao_semi_automatica({commit}, payload){
        commit('set_funcao_semi_automatica', payload)
    }
}

const getters = { 
    // Integrado
    aeracao: (state) => state.aeracao,

    // Integrado
    funcoes_de_aeracao: (state) => state.aeracao.funcoes,

    // Integrado
    possibilidades_de_aeracao: (state) => state.aeracao.possibilidades,
    
    // Integrado
    get_funcao_de_aeracao_ativa: (state) => {
        return state.aeracao.funcoes.filter( element => {
            return element.ligada;
        });
    },

    // Nao utilizando
    get_funcao_automatica_ativa: (state) => {
        let funcao;
        state.aeracao.funcoes.filter( element => {
            if(element.label == 'Automática'){
               element.processos.filter(processos => {
                    if(processos.ligada){
                        funcao = processos.label;
                    }
                })
            }
        })
        return funcao;
    },

    // Passado pra store separado 
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
  
