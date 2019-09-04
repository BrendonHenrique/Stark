 
/*
* Interface de notificação ao usuário  
* Para usar importe no arquivo e utilize NotifyUser.{um dos métodos estáticos}(mensagem a ser enviada) 
*/

import Vue from 'vue'
const vm = new Vue()

const interface_Notify = (color, icon, message, position, timeout) => {
  vm.$q.notify({
    color,
    icon,
    message,
    position,
    timeout
  })
}

class NotifyUser {

  static success = (message) => {
    interface_Notify('positive', 'done', message, 'bottom-right')
  }

  static warning = (message) => {
    interface_Notify('warning', 'warning', message, 'bottom-right')
  }

  static error = (message) => {
    interface_Notify('negative', 'error', message, 'bottom-right')
  }

  static info = (message) => {
    interface_Notify('info', 'info', message, 'bottom-right', 6000)
  }

}

export default NotifyUser;
