<template>
  <q-page class="termometria-container" >
    <div class="tab-menu">
      <q-tabs 
        dense inline-label v-model="tab" align="justify" narrow-indicator
        class="text-grey-4 menu-bar-termometria" active-color="secundary" indicator-color="secundary">
        <q-tab v-for="item in tabs " :key="item.name" :name="item.name" :label="item.label" />
      </q-tabs>
    </div>
    
    <q-tab-panels class="bg-grey-10" v-model="tab"> 
      
      <q-tab-panel class="termometria-panel" name="termometria" >
        <termometria-silo :index_silo="index_silo"/>
      </q-tab-panel>

      <q-tab-panel class="produto-armazenado-panel" name="prod_armazenado" >
        <produto-armazenado :index_silo="index_silo" />
      </q-tab-panel> 
    
      <q-tab-panel class="aeracao-panel" name="aeracao">
        <aeracao :index_silo="index_silo" />
      </q-tab-panel>
      
    </q-tab-panels>
   
    <paginador
    style="position:fixed;bottom:4rem;"
    :silos_length="quantidadeDeSilos" 
    @proximoSilo="proximoSilo" 
    @siloAnterior="siloAnterior" />

  </q-page>
</template>

<script>
import SiloController from '../Controllers/Silos/Controller'

export default {
  data(){
    return{
      tab: 'termometria',
      tabs: [
        {
          name:'termometria',
          label:'Termometria'
        },
        {
          name:'prod_armazenado',
          label:'Produto armazenado'
        },
        {
          name:'aeracao',
          label:'Aeração'
        },
      ],
      index_silo: 0, 
    }
  },
  methods:{
    proximoSilo(indice){
      this.index_silo = indice
    },
    siloAnterior(indice){
      this.index_silo = indice
    },
  },
  computed:{
    quantidadeDeSilos(){
      return SiloController.getQuantidadeDeSilos()
    },
  },
  components:{
    'termometria-silo':require('../components/Termometria/Temperaturas/Termometria').default,
    'produto-armazenado':require('../components/Termometria/ProdutosArmazenados/ProdutosArmazenados').default,
    'aeracao': require('../components/Termometria/Aeracao/Aeracao').default,
    'paginador': require('../components/Termometria/Paginador/PaginadorDeSilo').default,
  }
}
</script>

<style lang="stylus">
  
  .q-panel 
    margin-bottom 4rem

  .produto-armazenado-panel
    min-height calc(80.5vh - 129px)
    display flex
    align-items center
    justify-content center


  .termometria-panel 
    min-height calc(90.5vh)
    margin-bottom 5rem
    display flex
    align-items center
  
  .aeracao-panel
    min-height calc(91.5vh - 129px)
    display  flex
    align-items center 
    justify-content center
    width 100% 
  
  .menu-bar-termometria
    background-color $primary
    z-index 5
    height 3rem
    font-family 'Libre Caslon Text', serif
   
</style>
