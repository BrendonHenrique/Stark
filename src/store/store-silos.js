import {
  stat
} from "fs";

// Funções utilizadas apenas para teste no desenvolvimento , serão removidas
import {buildRandomicSilos, getSiloById} from '../utils/SiloUtils';

const state = {
  silos: buildRandomicSilos(),
}

const mutations = {
  /*
   *  Atualiza a propriedade temperatura do silo , pegando pelo id do silo todos os sensores e atualiza
   *  com os valores mínimo, médio e máximo de temperatura para cada silo
   *  implementado no front só por enquanto
   */
  updateMinMedMaxTemp(state, id_silo) {
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

  /**
   * Recebe como parametro um objeto contendo o id do silo, equilibrio_higroscopico.atual, equilibrio_higroscopico.equilibrio 
   * e atualiza o store
   */
  update_equilibrio_higroscopico_atual(state, payload) {
    const { index_silo, 
    novoEquilibrio } = payload;
    let silo = getSiloById(state.silos, index_silo);
    silo.equilibrio_higroscopico.atual = novoEquilibrio;
  },

  // Atualiza o produto armazenado no respectivo silo correspondente ao id passado 
  update_produto_armazenado(state, payload) {
    const {id_silo,produto} = payload;
    const silo = getSiloById(state.silos, id_silo);
    Object.assign(silo.produto_armazenado, produto);
  },

  /**
   * Atualiza a função de aeração conforme os valores recebidos como parametro
  **/
  update_funcao_de_aeracao(state, payload) {
    const {
      index_silo,
      label,
      ligada
    } = payload;
    
    let silo = getSiloById(state.silos, index_silo);


  },

  /**
   * Atualiza o array de silos
   */
  update_silos(state, payload) {
    state.silos = payload;
  },
  
  onOffAerador(state, payload){
    let silo = getSiloById(state.silos, index_silo);
  }

}

const actions = {

  update_silos({
    commit
  },payload){
    commit('update_silos', payload);
  },

  // calculo futuramente será implementado no backend
  updateMinMedMaxTemp({
    commit
  }, payload) {
    commit('updateMinMedMaxTemp', payload);
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

  ligarAerador({
    commit
  }, payload){
    commit('onOffAerador', payload);
  }
}

const getters = {
  
  // retorna a lista de silos 
  silos: (state) => state.silos,
    
  // Retorna o silo pelo id buscado  
  silo_by_id: (state) => (id_silo) => {
    return  getSiloById(state.silos, id_silo);
  },

  silos_length: (state) => {
    return state.silos.length;
  },

  // get aerador pelo id do silo
  get_aerador: (state, getters) => (id_silo) => {
    let silo = getSiloById(state.silos, id_silo);
    return silo.aerador;
  },

  // get das possibilidades de aeração recebendo id do silo 
  get_possibilidades_de_aeracao: (state, getters) => (id_silo) => {
    let silo = getSiloById(id_silo);
    return silo.possibilidades_aeracao;
  },

  // get do equilibrio_higroscopico recebendo id do silo 
  get_equilibrio_higroscopico: (state, getters) => (id_silo) => {
    return getSiloById(id_silo).equilibrio_higroscopico;
  },

  // get do produto armazenado recebendo o id do silo 
  get_produto_armazenado: (state, getters) => (id_silo) => {
    let silo = getSiloById(id_silo);
    return silo.produto_armazenado;
  },

}

export default {
  namespaced: true,
  // this allows me to create another one store modules
  state,
  mutations,
  actions,
  getters,
}

