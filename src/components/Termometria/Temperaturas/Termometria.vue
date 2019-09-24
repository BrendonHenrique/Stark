<template>
  <div style="width:100%;height:70vh;">
    
    <mapa-de-calor :pendulos="this.pendulos" v-show="showMapa" :showMapa="showMapa" />

    <pendulos  :pendulos="this.pendulos" v-show="showPendulos" /> 
    
    <!-- Fab Button com possibilidades de visualização do mapa de calor e dos sensores  -->
    <div style="z-index:4;margin-bottom:10rem;" class="fixed-bottom-right q-mb-sm q-mr-sm">
      <q-tooltip :content-style="{fontSize:'15px'}">
          Alterar visualização 
      </q-tooltip>
      <q-fab  color="grey-5" persistent text-color="black" icon="keyboard_arrow_left" direction="left">
        <q-fab-action color="grey-5" text-color="black" icon="whatshot" @click="mostrarMapaDeCalor">
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" :content-style="{fontSize:'15px'}">
            Visualizar mapa de calor
          </q-tooltip>
        </q-fab-action>
        <q-fab-action color="grey-5" text-color="black" icon="drag_indicator" @click="mostrarPendulos">
          <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" :content-style="{fontSize:'15px'}">
            Visualizar pêndulos
          </q-tooltip>
        </q-fab-action>
      </q-fab>

    </div> 
    <!--  -->

  </div>
</template>

<script>
// Controlador do store dos silos
import SiloController from '../../../Controllers/Silos/Controller'
import NotifyUser from '../../../services/NotifyUser'
export default {
  props:['index_silo','viewType'], 
  data(){
    return{
      pendulos: [],
      key: 1, 
      showPendulos: false,
      showMapa:true
    }
  },
  // Get das temperaturas basenado-se no index so silo , caso a página seja renderizada via this.$route.push apartir da página dos silos
  // Atualizo a visualização do conteúdo dependendo do viewType vindo do $route
  beforeMount(){
    this.getTemperaturas(this.index_silo) 
    if(this.viewType != undefined){
      if(this.viewType == 'mapaDeCalor'){
        NotifyUser.info(`Mapa de calor silo nº ${this.index_silo + 1}`)
        this.showMapa = true
        this.showPendulos = false  
      }else if(this.viewType == 'pendulos'){ 
        NotifyUser.info(`Pêndulos silo nº ${this.index_silo + 1}`)
        this.showMapa = false
        this.showPendulos = true  
      }
    }
  }, 
  components:{
    'mapa-de-calor': require('./MapaDeCarlor').default,
    'pendulos': require('./Pendulos').default,
  },
  methods:{ 
    // get da temperatura apartir do store, interfaceada pelo controlador
    getTemperaturas(index){
      let siloEncontrado = SiloController.getSiloById(this.index_silo)
      this.pendulos = []
      this.pendulos = siloEncontrado.pendulos
      console.log(`temp\nmin ${siloEncontrado.temperatura.minima}\nMed ${siloEncontrado.temperatura.media}\nMax ${siloEncontrado.temperatura.maxima}`)
    },
    mostrarMapaDeCalor(){
      if(this.showPendulos) this.showPendulos = false
      this.showMapa = true 
    },
    mostrarPendulos(){
      if(this.showMapa) this.showMapa = false
      this.showPendulos = true 
    }
  },
  watch:{
    // Observador do index do silo para atualizar as temperaturas 
    index_silo(index){
      this.getTemperaturas(index) 
      this.key =  index * Math.random()
    }
  }
}
</script>

<style lang="stylus">
  .termometria-wrapper
    display flex 
    justify-content center 
    align-items center
    paddig 20px

</style>
