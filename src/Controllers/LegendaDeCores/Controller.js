import storeCores from '../../store/store-legenda-de-cores'

const { state, mutations, actions, getters } = storeCores

import vuexStore from '../../store/index' 
const store = vuexStore()

export default class CoresController{
    
    static getLegendaDeCores(){
        return getters.legenda_de_cores(state)
    }

    static getGradienteDeTemperatura(){
        return getters.gradiente_de_temperatura(state)
    }

    static getCoresDoGradiente(){
        return getters.cores_do_gradiente(state)
    }

    static getTemperaturaBaixa(){
        return getters.temperatura_baixa(state)
    }

    static getTemperaturaAlta(){
        return getters.temperatura_alta(state)
    }

    static getConfiguracoesDeCores(){
        return getters.configuracoes_de_cores(state)
    }

    static updateLegendaDeCores(payload){
        store.dispatch('legenda_de_cores/update_legenda_de_cores',payload)
    }

    static updateConfiguracoesDecores(payload){
        store.dispatch('legenda_de_cores/update_configuracoes_de_cores', payload)
    }

    static updateTemperaturaAlta(payload){
        store.dispatch('legenda_de_cores/update_temperatura_alta', payload)
    }

    static updateTemperaturaBaixa(payload){
        store.dispatch('legenda_de_cores/update_temperatura_baixa', payload)
    }

}