/*
* Recebe como parametro uma mensagem para interagir com o usuário
* Retorna uma promisse 
* Se o usuário clicar em 'confirmar' resolve irá emitir .then()
* Se o usuário clicar em 'cancelar' reject irá emitir .catch()
*/
import Vue from 'vue'
const vm = new Vue();
const dialogPromise = (message) => {
    return new Promise((resolve, reject) => {
            vm.$q.dialog({
            title: 'Confirmação',
            message, 
            cancel: true,
            position: 'top',
            persistent: true,
            cancel:{
                label:'cancelar',
                color:'negative'
            },
            ok:{
                label:'confirmar',
                color:'positive'
            }
        })
        .onOk( () => {
            resolve();
        })
        .onCancel( () => {
            reject();
        })
    });
}


export default dialogPromise;