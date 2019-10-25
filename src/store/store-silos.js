// Funções utilizadas apenas para teste no desenvolvimento 
import {buildRandomicSilos, getSiloById} from '../utils/SiloUtils';

const state = {
  silos: buildRandomicSilos(),
}

const mutations = {
  update_min_med_max_temp(state, id_silo) {
    let siloSelecionado = state.silos.filter((element) => {
      if (element.id == id_silo) {
        return element
      }
    });

    var temperaturas = [];
    const {
      pendulos
    } = siloSelecionado[0];

    pendulos.map((pendulo) => {
      pendulo.sensores.map((sensor) => {
        temperaturas.push(parseFloat(sensor.temperatura));
      })
    })

    let sum = temperaturas.reduce((previous, current) => current += previous);
    let media = sum / temperaturas.length;

    Object.assign(siloSelecionado[0].temperatura, {
      minima: parseFloat(Math.min(...temperaturas).toFixed(2)),
      media: parseFloat(media.toFixed(2)),
      maxima: parseFloat(Math.max(...temperaturas).toFixed(2)),
    });
  },

  update_equilibrio_higroscopico_atual(state, payload) {
    const { index_silo, 
    novoEquilibrio } = payload;
    let silo = getSiloById(state.silos, index_silo);
    silo.equilibrio_higroscopico.atual = novoEquilibrio;
  },

  update_produto_armazenado(state, payload) {
    const {index_silo,produto} = payload;
    const silo = getSiloById(state.silos, index_silo);
    Object.assign(silo.produto_armazenado, produto);
  },

  update_funcao_de_aeracao(state, payload) {
    const {
      indexSilo,
      funcaoSelecionada
    } = payload;
    state.silos.forEach(silo => { 
      if(silo.id === indexSilo){
        silo.aerador.funcaoSelecionada = funcaoSelecionada;
      }
    });
  },

  on_off_aerador(state, payload){
    const {
      indexSilo,
      ligado 
    } = payload;

    state.silos.forEach(silo => { 
      if(silo.id === indexSilo){
        silo.aerador.ligado = ligado;
      }
    });
  },

  update_silos(state, payload) {
    state.silos = payload;
  },

  update_configuracoes(state,novaConfiguracao){
    let siloSelecionado =  state.silos.find(silo => silo.id == novaConfiguracao.indexSilo - 1)
    novaConfiguracao.payload.forEach( configuracao => siloSelecionado.configuracoesDoSilo[configuracao.label] = configuracao.value );
  }
}

const actions = {

  update_configuracoes({
    commit
  },payload){
    commit('update_configuracoes', payload);
  },

  update_silos({
    commit
  },payload){
    commit('update_silos', payload);
  },

  update_min_med_max_temp({
    commit
  }, payload) {
    commit('update_min_med_max_temp', payload);
  },
  
  update_equilibrio_higroscopico_atual({
    commit
  }, payload) {
    commit('update_equilibrio_higroscopico_atual', payload);
  },
  
  update_produto_armazenado({commit}
  , payload) {
    commit('update_produto_armazenado', payload);
  },
  
  update_funcao_de_aeracao({
    commit
  }, payload) {
    commit('update_funcao_de_aeracao', payload);
  },

  on_off_aerador({
    commit
  }, payload){
    commit('on_off_aerador', payload);
  },

  update_funcao_semi_automatica({
    commit
  }, payload){
    commit('update_funcao_semi_automatica', payload)
  }
}

const getters = {
  
  silos: (state) => state.silos,
    
  silo_by_id: (state) => (id_silo) => getSiloById(state.silos, id_silo),

  silos_length: (state) =>  state.silos.length, 

  get_aerador: (state) => (id_silo) =>  getSiloById(state.silos, id_silo).aerador,

  get_possibilidades_de_aeracao: (state) => (id_silo) => getSiloById(state.silos, id_silo).possibilidades_aeracao,

  get_equilibrio_higroscopico: (state) => (id_silo) => getSiloById(state.silos, id_silo).equilibrio_higroscopico,

  get_produto_armazenado: (state) => (id_silo) => getSiloById(state.silos, id_silo).produto_armazenado,

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

