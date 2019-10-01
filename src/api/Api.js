const baseURL = '/api' 
import simple_jsonrpc from 'simple-jsonrpc-js'
import SiloController from '../controllers/Silos/Controller'
import ConnectionStatusController from '../controllers/ConnectionStatus/Controller'
import NotifyUser from '../services/NotifyUser'

class Api {
    
    constructor(){
        this.jrpc =  new simple_jsonrpc()
        this.socket =  new WebSocket("ws://localhost:8090")
    }

    initConectionToServer  = () => {
        
        // Configuração inicial do websocket
        this.socket.onmessage = event => this.jrpc.messageHandler(event.data);
        this.jrpc.toStream = _msg => this.socket.send(_msg)

        // Tratamento de erros na conexão 
        this.socket.onerror = error => this.onDisconnect() 
        this.socket.onclose = event => this.onDisconnect() 
        const {statusDescription} = ConnectionStatusController.getConnectionStatus()
        this.onDisconnect = () => {
            if(statusDescription == 'sem conexão' || statusDescription  == 'conectado' ){
                ConnectionStatusController.updateConnectionStatus({ 
                    isConnected: false, 
                    statusDescription: 'tentando conectar'
                })
                NotifyUser.error('Sem conexão')
            }
        }

        // função com callback para executar após a abertura da conexão 
        // atualiza o status da conexão e descrição , passa um callback para as funções que irão enviar métodos para o servidor
        this.onConnected =  (callback) => this.socket.onopen = () => {
            if(statusDescription == 'sem conexão' || statusDescription  == 'tentando conectar' ){
                ConnectionStatusController.updateConnectionStatus({ 
                    isConnected: true, 
                    statusDescription: 'conectado'
                })
                NotifyUser.success('Conectado')
            }
            callback()
        } 

        // listeners para os métodos enviados pelo servidor
        // teste
        this.jrpc.on('view.setTitle', title => {
            console.log(title)
        })
        
    }
    
    // teste
    add = () => {
        this.onConnected(() => {
            this.jrpc.call('add', [2, 3]).then(function (result) {
                console.log(result)
            })
        })
    }
 
}

export default Api;