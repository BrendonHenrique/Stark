<template>
  <div>
    <div class="row no-wrap justify-between q-mb-xl"  >
      <div
        class="column reverse pendulo "
        v-for="termometria in termometrias"
        :key="termometria.id_pendulo">
        <q-btn round class="text-thin text-h6 text-center text-black q-mt-sm bg-grey-5" size="15px">
          p{{termometria.id_pendulo + 1}}
        </q-btn>
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
      </div>
    </div>

    <div class="paginador-de-silos  row justify-center ">
      <q-card class="row bg-grey-5 ">
        <q-btn  flat @click="anterior()" v-bind=can_scroll_up class="navigate"
        icon="navigate_before" />
        <div class="absolute-center indice-paginador">
          <h6>
            {{indice_paginador}}
          </h6>
        </div>
        <q-space />
        <q-btn  class=" navigate" flat  @click="proximo()" 
          v-bind=can_scroll_down icon="navigate_next" />
      </q-card>
    </div>
  
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import TempToColor from '../../../services/TempToColor'

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
    can_scroll_up(){
      return this.indice_paginador <= 1 ? {
        disable: true
      } : {
        disable: false
      }
    },
    can_scroll_down(){
      return this.indice_paginador >= this.silos.length ? {
        disable: true
      } : {
        disable: false
      }
    },
  },
  mounted(){
    this.getTermometria(this.indice_paginador)
  },
  components:{
    'sequential-entrace': require('../../Shared/SequentialEntrace').default
  },
  methods:{
    tempToColor(temp){
      return TempToColor.parse(this, temp / this.configuracoes_de_cores.temperatura_alta)
    },
    getTermometria(indice){
      this.termometrias  = null
      let test = this.silos.filter( (silo) =>{
        if(silo.id == indice){
          return silo.termometria
        }  
      })
      this.termometrias = test[0].termometria
    },
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

  .pendulo
    border-width bold  
    border-style dotted
    border-color #C3C3C3
    border-radius 80px
    align-items center
    width 130px
    padding 15px
    margin 10px 
    
    span
      position relative
      left -3px
             
  .q-chip::after
    content: "|"
    position absolute 
    top 28px
    left 50px
    color grey
  

  @media (max-width: 767px)
    .paginador-de-silos
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
