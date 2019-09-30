
import storeSilos from '../../store/store-silos' 
const {state,getters} = storeSilos; 
import vuexStore from '../../store/index' 
const store = vuexStore()

/**
 * A classe controler faz a interface de todas as ações do store do silo 
 * Útil para não repetir os imports dos getters e actions em todos os componentes
 * 
 * As ações que necessitam ser comitadas devem receber a referência do store passando como argumento
 * ex: SiloController.updateProdutoArmazenado(this.$store) 
 */
export default class SiloController { 

  static getSilos() {
    return state.silos
  }

  static getQuantidadeDeSilos(){
    return getters.silos_length(state)
  }

  static getSiloById(id_silo){
    return getters.silo_by_id(state)(id_silo)
  }

  static getEquilibrioHigroscopico(id_silo){
    return this.getSiloById(id_silo).equilibrio_higroscopico
  }

  static getPossibilidadesDeAeracao(id_silo){  
    return this.getSiloById(id_silo).possibilidades_aeracao
  }

  static getFuncoesDeAeracao(id_silo){
    return getters.get_funcoes_de_aeracao(state,getters)(id_silo)
  }

  static getFuncaoDeAeracaoLigada(id_silo){
    let funcoes = this.getFuncoesDeAeracao(id_silo)
    return funcoes.filter(funcao_de_aeracao => funcao_de_aeracao.ligada)
  }
  
  static updateProdutoArmazenado(payload){ 
    store.dispatch('silos/update_produto_armazenado',payload)
  }

  static updateMinMedMaxTemp(id_silo){
    store.dispatch('silos/updateMinMedMaxTemp', id_silo)
  }

  static updateEquilibrioHigroscopicoAtual(payload){
    store.dispatch('silos/update_equilibrio_higroscopico_atual', payload)
  }

  static updateFuncaoDeAeracaoLigada(payload){
    store.dispatch('silos/update_funcao_de_aeracao', payload)
  }

  static updateSilos(payload){
    store.dispatch('silos/update_silos',payload)
  }

}