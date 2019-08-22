const state = { 
    produto_armazenado:{
        nome:null,
        variedade: null,
        safra: null
    }
}

const mutations = {
    update_produto_armazenado(state, payload){
        Object.assign(state.produto_armazenado, payload)
    }
}

const actions = {
    update_produto_armazenado({commit}, payload){
        commit('update_produto_armazenado', payload)
    }
}

const getters = {
    produto_armazenado: (state) => state.produto_armazenado 
}

export default {
    namespaced: true,
    // this allows me to create another one store modules
    state,
    mutations,
    actions,
    getters
}