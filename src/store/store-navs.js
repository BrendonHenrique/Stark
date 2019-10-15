const state = {
  navs: [
    {
      label: 'Silos',
      icon: 'home',
      to: '/'
    },
    {
      label: 'Termometria',
      icon: 'grain',
      to: '/termometria'
    },
    {
      label: 'Estação meteorológica',
      icon: 'ac_unit',
      to: '/estacao_meteorologica'
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
};  

const getters = {
  navs: (state) =>  state.navs
}

export default {

  namespaced: true,
  // this allows me to create another one store modules
  state,
  getters
}
