import Vue from 'vue'
var vm = new Vue()

import { 
  Encrypt, Decrypt
} from './Crypt'

export let hierarchy = { 
  'GARTEN': 'GARTEN',
  'SUPERVISOR': 'SUPERVISOR',
  'OPERATOR': 'OPERATOR',
}

class auth {

  static authenticateUser = (user, token) => {
    vm.$q.sessionStorage.set('senha', user.senha)
    vm.$q.sessionStorage.set('login', user.login)
    vm.$q.sessionStorage.set('token', token)
    vm.$q.sessionStorage.set('hierarchy', Encrypt(hierarchy.OPERATOR));
  }

  static isAuthenticated = () => {
    if (this.hasLoginAndPassword() && this.getToken()) {
      return true
    } else {
      return false
    }
  }

  static hasLoginAndPassword = () => {
    if (vm.$q.sessionStorage.has('login') &&
      vm.$q.sessionStorage.has('senha')) {
      return true
    } else {
      return false
    }
  }

  static getAuthenticatedUser = () => {
    return {
      login: vm.$q.sessionStorage.getItem('login'),
      senha: vm.$q.sessionStorage.getItem('senha'),
      hierarchy: vm.$q.sessionStorage.getItem('hierarchy'),
    }
  }

  static getToken = () => {
    if(vm.$q.sessionStorage.has('token')){
      return vm.$q.sessionStorage.getItem('token')
    }
  }

  static setToken = (response) =>  vm.$q.sessionStorage.set('token', response.token)
  
  static removeToken = () => vm.$q.sessionStorage.remove('token')

  static removeCredentials = () => { 
    vm.$q.sessionStorage.remove('login');
    vm.$q.sessionStorage.remove('senha');
    vm.$q.sessionStorage.remove('hierarchy');
  }
  
}

export default auth
