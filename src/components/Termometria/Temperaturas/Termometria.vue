<template>
  <div>
    
    <div class="row no-wrap justify-between q-mb-xl">

      <!-- Pêndulo -->
      <div
        class="pendulo "
        v-for="pendulo in pendulos"
        :key="pendulo.id_pendulo">
        
        
        <!-- Sensores -->
        <sequential-entrace :delay="50" class="column reverse">
          <div
            class="column"
            v-for="sensor in pendulo.sensores"
            :key="sensor.id_sensor">
            <q-chip class="q-mt-sm" :style="{'background-color': tempToColor(sensor.temperatura)}">
              <q-avatar color="grey" text-color="white">
                {{sensor.id_sensor + 1}}
              </q-avatar>
              {{sensor.temperatura}} ºC
            </q-chip>
          </div>
        </sequential-entrace>
          <!--  -->
      
        <!-- Número sinalizador do pêndulo -->
        <q-btn round class="text-thin text-h6 text-center text-black 
        q-mt-sm bg-grey-5 indicador-do-pendulo" size="15px">
          p{{pendulo.id_pendulo + 1}}
        </q-btn>
        <!--  -->

      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TempToColor from '../../../services/TempToColor'
import Vue from 'vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance) 
import SiloController from '../../../Controllers/Silos/Controller'

export default {
  props:['index_silo'], 
  data(){
    return{
      pendulos: []
    }
  },
  mounted(){
    this.getTemperaturas(this.index_silo); 
  },  
  computed:{ 
    ...mapGetters('legenda_de_cores',
    ['cores_do_gradiente','configuracoes_de_cores']),
  }, 
  components:{
    'sequential-entrace': require('../../Shared/SequentialEntrace').default
  },
  methods:{ 
    // Converte temperatura em cores
    tempToColor(temp){
      return TempToColor.parse(this, temp / this.configuracoes_de_cores.temperatura_alta)
    },
    getTemperaturas(index){
      this.pendulos = SiloController.getSiloById(this.index_silo).pendulos
    }
  },
  watch:{
    index_silo(index){
      this.getTemperaturas(index)
    } 
  }
}
</script>

<style lang="stylus" scoped>
  
  .indicador-do-pendulo
    position relative
    left 27px 

  .pendulo
    border-width bold  
    border-style dotted
    border-color #C3C3C3
    border-radius 80px
    align-items center
    width 130px
    padding 10px 10px 3px 13px
    margin 10px 
    
    span
      position relative
      left -3px
             
  .q-chip::after
    content: "|"
    position absolute 
    top 28px
    left 47px
    color grey

  @media (max-width: 767px)
    .paginador-de-silos
      padding-bottom 10px
      
      .q-btn__content

      .q-card
        position relative
        height 4.2rem
        width  100%  

      .q-btn
        font-size 1.6rem 
        height 100%
        width 20%

  @media screen and (min-width:768px)
    .paginador-de-silos
      .q-card
        position relative
        height 3.5rem
        width  15rem
        border-radius 40px 
       
      .q-btn
        font-size 1rem

  .paginador-de-silos
    position fixed     
    bottom 65px
    right 0
    left 0
    z-index 999

  .indice-paginador
    font-family 'Orbitron'

</style>
