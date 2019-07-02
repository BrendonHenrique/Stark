import Vue from 'vue'


const state = {
  navs: [
    {
      label: 'Página principal',
      icon: 'home',
      to: '/'
    },
    {
      label: 'Silos',
      icon: 'grain',
      to: '/silos'
    },
    {
      label: 'Estação meteorológica',
      icon: 'ac_unit',
      to: '/estacao'
    },
    {
      label: 'Relatórios',
      icon: 'assignment',
      to: '/relatorios'
    },
    {
      label: 'Configurações',
      icon: 'settings',
      to: '/configuracoes'
    }
  ],

}

const mutations = {}

const actions = {}

const getters = {

  navs: (state) =>  state.navs

}

export default {

  namespaced: true,
  // this allows me to create another one store modules
  state,
  mutations,
  actions,
  getters
}
