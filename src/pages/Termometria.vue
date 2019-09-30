<template>
  <q-page class="termometria-container" >
    <div class="tab-menu">

      <!-- Possibilidades de navegação na página de termometria -->
      <q-tabs 
        dense inline-label v-model="tab" align="justify" narrow-indicator
        class="text-grey-4 menu-bar-termometria" active-color="secundary" indicator-color="secundary">
        <q-tab v-for="item in tabs " :key="item.name" :name="item.name" :label="item.label" />
      </q-tabs>
      <!--  -->
    
    </div>

    <!-- Acesso às possibilidades de tab -->
    <q-tab-panels class="bg-grey-10" v-model="tab"> 

      <q-tab-panel class="termometria-panel" name="termometria" >
        <termometria-silo :index_silo="index_silo" :viewType="viewType" />
      </q-tab-panel>

      <q-tab-panel class="produto-armazenado-panel" name="prod_armazenado" >
        <produto-armazenado :index_silo="index_silo" />
      </q-tab-panel> 
    
      <q-tab-panel class="aeracao-panel" name="aeracao">
        <aeracao :index_silo="index_silo" />
      </q-tab-panel>
      
    </q-tab-panels>
    <!--  -->

    <!-- Paginador dos silos -->
    <div class="paginador-de-silos-container" 
    style="position:fixed;bottom:5rem;">
      <q-card class="row bg-grey-5 ">
        <q-btn  flat @click="anterior()" 
        v-bind=podeNavegarParaTras class="navigate"
        icon="navigate_before" />
        <div class="absolute-center indice-paginador">
          <h6>
          Silo nº {{index_silo + 1}}
          </h6>
        </div>
        <q-space />
        <q-btn  class="navigate" flat  @click="proximo()" 
          v-bind=podeNavegarParaFrente icon="navigate_next"/>
      </q-card>
    </div>
    <!--  -->

  </q-page>
</template>

<script>
import SiloController from '../controllers/Silos/Controller'
import NotifyUser from '../services/NotifyUser'

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
      viewType: ''
    }
  },
  beforeMount(){
    // Verifica se o componente foi renderizado via $route e renderiza o conteúdo pedido em viewType
    if(this.$route.params.id != undefined){
      this.index_silo = this.$route.params.id 
      this.viewType = this.$route.params.viewType
      if(this.viewType == 'produtoArmazenado'){
        this.tab = 'prod_armazenado'
        NotifyUser.info(`Produto armazenado no silo nº ${this.index_silo + 1}`)
      }else if(this.viewType == 'aerador'){
        this.tab = 'aeracao'
        NotifyUser.info(`Status atual de aeração do silo nº ${this.index_silo + 1}`)
      }
    }
  },
  methods:{
    // Métodos para paginação dos silos
    proximo(){
      this.index_silo++
    },
    anterior(){
      this.index_silo--
    },
  },
  computed:{
    // Bind para desabilitar a paginação caso não seja mais possível acessar o próximo silo ( ou anterior )
    podeNavegarParaTras(){
      return this.index_silo <= 0 ? {
          disable: true
      } : {
          disable: false
      }
    },
    podeNavegarParaFrente(){
      return this.index_silo >= this.quantidadeDeSilos - 1 ? {
          disable: true
      } : {
          disable: false
      }
    },
    quantidadeDeSilos(){
      return SiloController.getQuantidadeDeSilos()
    },
  },
  components:{
    'termometria-silo':require('../components/Termometria/Temperaturas/Termometria').default,
    'produto-armazenado':require('../components/Termometria/ProdutosArmazenados/ProdutosArmazenados').default,
    'aeracao': require('../components/Termometria/Aeracao/Aeracao').default,
  }
}
</script>

<style lang="stylus">
  
  .produto-armazenado-panel
    min-height calc(80.5vh - 129px)
    display flex
    align-items center
    justify-content center

  .paginador-de-silos-container
    height 4rem
    width 100%
    z-index 5
    
    .q-card
        position relative
        height 4.2rem
        width  100%  

  .paginador-de-silos-container 
      .q-btn
          font-size 1rem

  .indice-paginador
    color #443e3e
    font-family 'Libre Caslon Text', serif

  .termometria-panel 
    min-height calc(74.5vh)
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

  .termometria-container
    margin-bottom 4rem
   
</style>
