const state = {
    status:{
        isConnected: null,
        lastUpdatedData: null
    }
}

const mutations  = {
    update_connection_status: (state,payload) => {
        Object.assign(state.status , payload) 
    }
}

const actions = {
    update_connection_status: ({commit}, payload) => commit('update_connection_status', payload),
}

const getters = {
    get_connection_status: (state) => state.status,
}

export default { 
    state,
    mutations,
    actions,
    getters
}