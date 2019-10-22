import simple_jsonrpc from 'simple-jsonrpc-js'
import ConnectionStatusController from '../controllers/ConnectionStatus/Controller'
import NotifyUser from '../services/NotifyUser'
import { promises } from 'fs';

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
        const {statusDescription} = ConnectionStatusController.getConnectionStatus()
        this.socket.onclose = event => this.onDisconnect() 
        this.onDisconnect = () => {
            if(statusDescription == 'sem conexão' || statusDescription  == 'conectado' ){
                ConnectionStatusController.updateConnectionStatus({ 
                    isConnected: false, 
                    statusDescription: 'tentando conectar'
                })
                NotifyUser.error('Sem conexão')
            }
        }
        
        // atualiza o status da conexão e retorna promisse para executar uma metodo no servidor após abrir a conexão 
        // com o websockets 
        this.socket.onopen = () => {
            if(statusDescription == 'sem conexão' || statusDescription  == 'tentando conectar' ){
                ConnectionStatusController.updateConnectionStatus({ 
                    isConnected: true, 
                    statusDescription: 'conectado'
                })
                NotifyUser.success('Conectado')
            }
            return Promise.resolve()
        }

        // listeners para os métodos enviados pelo servidor
        // teste
        this.jrpc.on('view.setTitle', title => {
            console.log('Recebendo dados do servidor')
            this.add()
        })
        
    }
    
    // teste
    add = () => {
        this.socket.onopen().then(() => {
            this.jrpc.call('add', [2, 3]).then(function (result) {
                // console.log(result)
            })
        })
    }
 
}

export default Api;