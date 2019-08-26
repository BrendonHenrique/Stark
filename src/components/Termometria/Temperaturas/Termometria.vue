<template>
  <div>
    
    <div class="row no-wrap justify-between q-mb-xl">

      <!-- Pêndulo -->
      <div
        class="column reverse pendulo "
        v-for="termometria in termometrias"
        :key="termometria.id_pendulo">
        
        <!-- Número sinalizador do pêndulo -->
        <q-btn round class="text-thin text-h6 text-center text-black q-mt-sm bg-grey-5 indicador-do-pendulo" size="15px">
          p{{termometria.id_pendulo + 1}}
        </q-btn>
        <!--  -->
        
        <!-- Sensores -->
        <sequential-entrace :delay="50">
          <div
            v-for="sensor in termometria.sensores"
            :key="sensor.id_sensor">
            <q-chip class="q-mt-sm" :style="{'background-color': tempToColor(sensor.temperatura)}">
              <q-avatar color="grey" text-color="white">
                {{sensor.id_sensor}}
              </q-avatar>
              {{sensor.temperatura}} ºC
            </q-chip>
          </div>
        </sequential-entrace>
          <!--  -->

      </div>
      <!--  -->

    </div>

    <!-- Paginador dos silos -->
    <div class="paginador-de-silos  row justify-center">
      <q-card class="row bg-grey-5 ">
        <q-btn  flat @click="anterior()" 
        v-bind=podeNavegarParaTras class="navigate"
        icon="navigate_before" />
        <div class="absolute-center indice-paginador">
          <h6>
            {{indice_paginador}}
          </h6>
        </div>
        <q-space />
        <q-btn  class=" navigate" flat  @click="proximo()" 
          v-bind=podeNavegarParaFrente icon="navigate_next"/>
      </q-card>
    </div>
    <!--  -->
  
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TempToColor from '../../../services/TempToColor'
import Vue from 'vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance) 

export default {
  props:[],
  data(){
    return{
      indice_paginador: 1,
      termometrias: []
    }
  },
  computed:{ 
    ...mapGetters('legenda_de_cores',['cores_do_gradiente','configuracoes_de_cores']),
    ...mapGetters('silos',['silos']),

    // Controles de páginação entre as termometrias dos silos 
    podeNavegarParaTras(){
      return this.indice_paginador <= 1 ? {
        disable: true
      } : {
        disable: false
      }
    },
    podeNavegarParaFrente(){
      return this.indice_paginador >= this.silos.length ? {
        disable: true
      } : {
        disable: false
      }
    }
  },
  mounted(){
    this.getTermometria(this.indice_paginador)
  },
  components:{
    'sequential-entrace': require('../../Shared/SequentialEntrace').default
  },
  methods:{

    // Converte temperatura em cores
    tempToColor(temp){
      return TempToColor.parse(this, temp / this.configuracoes_de_cores.temperatura_alta)
    },

    // Pega valores da termometria pelo índice
    getTermometria(indice){
      this.termometrias  = null
      let termomeria_aux = this.silos.filter( (silo) =>{
        if(silo.id == indice){
          return silo.termometria
        }  
      })
      this.termometrias = termomeria_aux[0].termometria
    },

    //Paginador de navegação das termometrias dos silos   
    proximo(){
      this.indice_paginador++
      this.getTermometria(this.indice_paginador)
    },
    anterior(){
      this.indice_paginador--
      this.getTermometria(this.indice_paginador)
    },
  }
}
</script>

<style lang="stylus" scoped>
  
  .indicador-do-pendulo
    position relative
    right 2px 

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
