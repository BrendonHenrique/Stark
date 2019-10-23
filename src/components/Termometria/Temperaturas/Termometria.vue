<template>
  <div style="width:100%;">
    
    <mapa-de-calor :pendulos="this.pendulos" v-show="showMapa" :showMapa="showMapa" />

    <pendulos  :pendulos="this.pendulos" v-show="showPendulos" /> 
    
    <!-- Fab Button com possibilidades de visualização do mapa de calor e dos sensores  -->
    <div style="z-index:4;margin-bottom:10rem;" class="fixed-bottom-right q-mb-sm q-mr-sm">
      <q-tooltip :content-style="{fontSize:'15px'}">
          Menu de visualizações 
      </q-tooltip>
      <q-fab  color="grey-5" persistent text-color="black" icon="menu" direction="left">
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
import NotifyUser from '../../../services/NotifyUser'
import {mapGetters} from 'vuex';

export default {
  props:['index_silo','viewType'], 
  data(){
    return{
      pendulos: [],
      key: 1, 
      showPendulos: true,
      showMapa:false,
    }
  },
  // Atualizo a visualização do conteúdo dependendo do viewType vindo do $route
  beforeMount(){
    this.getTemperaturas() 
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
    getTemperaturas(){
      this.pendulos = this.silo_by_id(this.index_silo).pendulos
    },
    // Controladores para visualização da termometria por mapa de calor ou sensores
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
      this.getTemperaturas() 
      this.key =  index * Math.random()
    }
  },
  computed:{
    ...mapGetters('silos',['silo_by_id'])
  }
}
</script>
 