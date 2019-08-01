<template>
  <div>
    <div class="row no-wrap justify-between q-mb-lg" >
        <div
          class="column reverse pendulo "
          v-for="termometria in termometrias"
          :key="termometria.id_pendulo">
          <q-btn round class="text-thin text-h6 text-center q-mt-xs" size="15px">
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

    <div class="paginador-de-silos  row justify-center">
      <q-card class="row bg-grey-4 shadow-24" style="width:150px;border-radius:18px;">
        <q-btn round flat @click="anterior()" v-bind=can_scroll_up  icon="navigate_before" />
        <div class="row absolute-center indice-paginador">
          {{indice_paginador}}
        </div>
        <q-btn round class="row absolute-right" flat  @click="proximo()" v-bind=can_scroll_down icon="navigate_next" />
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
    border-width 2px  
    border-style dotted
    border-color #C3C3C3
    border-radius 80px
    align-items center
    width 130px
    padding 15px
    margin 10px 

  .q-chip::after
    content: "|"
    position absolute 
    top 28px
    left 47px
    color grey

  .paginador-de-silos
    position fixed     
    right 0
    bottom 65px
    left 0
    z-index 999

  .indice-paginador
    font-family 'Orbitron'

</style>
