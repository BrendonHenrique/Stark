import store from '../../store/store-connection-status' 

const {state,getters,mutations} = store; 

export default class ConnectionStatusController { 

    static updateConnectionStatus(payload){ 
        mutations.update_connection_status(state,payload)
    }

    static getConnectionStatus(){
        return getters.get_connection_status(state)
    }

}
