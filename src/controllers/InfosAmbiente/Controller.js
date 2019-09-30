
import store from '../../store/store-ambiente' 

const {state,getters,mutations} = store; 

export default class InfosAmbienteController { 

    static updateInfosAmbiente(payload){    
        mutations.update_infos_ambiente(state, payload)
    }

    static getInfosAmbiente(){
        return getters.get_infos_ambiente(state)
    }

}