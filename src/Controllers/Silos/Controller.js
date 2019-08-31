
import store from '../../models/Silos/store-silos' 

const {state,getters,mutations,actions} = store; 
  
/**
 * A classe controler faz a interface de todas as ações do store do silo 
 * Útil para não repetir os imports dos getters e actions em todos os componentes
 * que usarem esse store 
 */
export default class SiloController { 
  
  static getSilos() {
    return state.silos
  }

  static updateMinMedMaxTemp(id_silo){
    mutations.updateMinMedMaxTemp(state, id_silo)
  }

  static getQuantidadeDeSilos(){
    return getters.silos_length(state)
  }

  static getSiloById(id_silo){
    return getters.silo_by_id(state)(id_silo)
  }

  static updateProdutoArmazenado(payload){
    if(payload){
      mutations.update_produto_armazenado(state, payload)
    }
  }

  static getEquilibrioHigroscopico(id_silo){
    return this.getSiloById(id_silo).equilibrio_higroscopico
  }

  static getQuantidadeDeAeradores(id_silo){
    return this.getSiloById(id_silo).aeradores.length 
  }

  static getPossibilidadesDeAeracao(id_silo){  
    return this.getSiloById(id_silo).possibilidades_aeracao
  }

}