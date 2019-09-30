const baseURL = '/api' 
import Simple_jsonrpc from 'simple-jsonrpc-js'
import SiloController from '../controllers/Silos/Controller'
import ConnectionStatusController from '../controllers/ConnectionStatus/Controller'

class API {

    constructor(){
        this.jrpc = new Simple_jsonrpc()
        this.socket = new WebSocket("ws://localhost:8080"+baseURL)

        this.initConectionToServer()
        
        // // listeners para os eventos do servidor
        this.jrpc.on('silo.getSilos', silos => SiloController.updateSilos(silos))
        
    }

    // manter status da conexão no store
    initConectionToServer = () => {

        // Tratamento de erro na conexão com WebSocket
        this.socket.onerror = event => {
            ConnectionStatusController.updateConnectionStatus({
                isConnected: false
            })
        }
        
        // Tratamento de encerramento de conexão com websocket  
        this.socket.onclose = event => {
            ConnectionStatusController.updateConnectionStatus({
                isConnected: false
            })
        }
            
        // Configuração do handler e mensageiro do socket
        this.socket.onmessage = event => {
            jrpc.messageHandler()
        }
            
        this.jrpc.toStream = _msg => {
            socket.send(_msg);
        }
    } 

}

export default API
