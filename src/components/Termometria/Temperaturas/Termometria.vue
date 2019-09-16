<template>
  <div>
    <pendulos  :pendulos="this.pendulos" v-show="showPendulos"/>
    <mapa-de-calor :pendulos="this.pendulos" v-show="showMapa"/>

    <div class="absolute-bottom-right q-mb-sm q-mr-sm">
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

  </div>
</template>

<script>
import SiloController from '../../../Controllers/Silos/Controller'

export default {
  props:['index_silo'], 
  data(){
    return{
      pendulos: [],
      key: 1, 
      showPendulos:true,
      showMapa:false
    }
  },
  beforeMount(){
    this.getTemperaturas(this.index_silo) 
  },  
  components:{
    'mapa-de-calor': require('./MapaDeCarlor').default,
    'pendulos': require('./Pendulos').default,
  },
  methods:{ 
    getTemperaturas(index){
      this.pendulos = []
      this.pendulos = SiloController.getSiloById(this.index_silo).pendulos
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
    index_silo(index){
      this.getTemperaturas(index) 
      this.key =  index * Math.random()
    },
  }
}
</script>

<style lang="stylus">
</style>
