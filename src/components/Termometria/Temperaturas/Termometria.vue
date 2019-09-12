<template>
  <div>
    <!-- <div class="row no-wrap justify-between ">
      <div
        class="pendulo column justify-end "
        v-for="pendulo in pendulos"
        :key="pendulo.id_pendulo">
        <sequential-entrace :delay="50">
          <div
            v-for="sensor in pendulo.sensores"
            :key="sensor.id_sensor + key">
            <q-chip class="q-mt-sm " :style="{'background-color': tempToColor(sensor.temperatura)}">
              <q-avatar color="grey" text-color="white">
                {{sensor.id_sensor + 1}}
              </q-avatar>
              {{sensor.temperatura}} ºC
            </q-chip>
          </div>
        </sequential-entrace>
        <q-btn round class="text-thin text-h6 text-center text-black 
        q-mt-sm bg-grey-5 indicador-do-pendulo" size="15px">
          p{{pendulo.id_pendulo + 1}}
        </q-btn>
      </div>
    </div> -->
    <!-- <mapa-de-calor :pendulos="this.pendulos" /> -->
    <div class='box-heatmap' :style="boxStyle" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TempToColor from '../../../services/TempToColor'
import Vue from 'vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance) 
import SiloController from '../../../Controllers/Silos/Controller'
import CoresController from '../../../Controllers/LegendaDeCores/Controller'
import {buildRandomicPendulos, buildPendulos} from '../../../utils/SiloUtils'
import h337 from 'heatmap.js'
import { setInterval } from 'timers';


export default {
  props:['index_silo'], 
  data(){
    return{
      pendulos: [],
      key: 1,
      heightValue : 0,
      widthValue : 0,
      boxStyle:{
        height: '',
        width:  '', 
        minHeight: '',
        minWidth:  '', 
      }, 
      data:[],
      heatmapInstance: null

    }
  },
  computed:{ 
    ...mapGetters('legenda_de_cores',['cores_do_gradiente']),     
  }, 
  beforeMount(){
    this.getTemperaturas(this.index_silo); 
    this.montarMapa()     
  },  
  mounted(){
    this.instanciarHeatMap()
    this.inserirDados()
  },
  components:{
    'sequential-entrace': require('../../Shared/SequentialEntrace').default,
    'mapa-de-calor': require('../../MapaDeCalor/MapaDeCarlor').default
  },
  methods:{ 
    // Mapa de calor 
    setHeight(value){
      this.boxStyle.height = `${value}px`
      this.boxStyle.minHeight = `${value}px`
        if(this.heatmapInstance){
          this.heatmapInstance._renderer.ctx.canvas.height = value 
          this.heatmapInstance._renderer.ctx.canvas.style.minHeight = value  
        }
      },
    setWidth(value){
      this.boxStyle.width = `${value}px`
      this.boxStyle.minWidth = `${value}px`
      if(this.heatmapInstance){
        this.heatmapInstance._renderer.ctx.canvas.width = value 
        this.heatmapInstance._renderer.ctx.canvas.style.minWidth = value 
      }
    },
    getMaiorPenduloLength(pendulos){
      let pendulosLength = [] 
        pendulos.map( pendulo => {
          pendulosLength.push(pendulo.sensores.length)
      })
      return parseInt(Math.max(...pendulosLength))
    },
    getQuantidadeDePendulos(pendulos){
      return pendulos.length
    },
    montarMapa(){
      this.data = []
      let penduloGerado = this.pendulos
      let espacoEntrePontos = 100 
      let posicaoDeInicio = 80
      this.setHeight(this.getMaiorPenduloLength(penduloGerado) * espacoEntrePontos  + posicaoDeInicio - 20)
      this.setWidth(this.getQuantidadeDePendulos(penduloGerado) * espacoEntrePontos + posicaoDeInicio - 20 )
      let x_position = posicaoDeInicio 
      penduloGerado.map( pendulo => {
      let y_position = parseInt(this.boxStyle.height)  - posicaoDeInicio  
        pendulo.sensores.map( sensor => {
          let ponto = {
            value: sensor.temperatura,
            x : x_position,  
            y : y_position
          } 
          y_position -= espacoEntrePontos  
          this.data.push(ponto)
        })
        x_position += espacoEntrePontos  
      })
    },
    instanciarHeatMap(){
      let container = document.querySelector(".box-heatmap");
      this.heatmapInstance = h337.create({
        container: container,
        opacity: '0.5',
        radius: 80,
        gradient: {
          '.1': 'blue',
          '.9': 'red',
          '.95': 'white'
        }
      })

    },
    inserirDados(){
      var max = 40
      var min = 10
      var data = {
        max,
        min, 
        data: this.data,
      }
      this.heatmapInstance.repaint()
      this.heatmapInstance.setData(data)
      this.heatmapInstance.repaint()
    },
    // Desenho dos pêndulos e sensores
    // Converte temperatura em cores
    tempToColor(temperatura){
      return TempToColor.parse(this, temperatura / CoresController.getConfiguracoesDeCores().temperatura_alta)
    },
    getTemperaturas(index){
      this.pendulos = []
      this.pendulos = SiloController.getSiloById(this.index_silo).pendulos
    }
  },
  watch:{
    index_silo(index){
      this.getTemperaturas(index) 
      this.key =  index * Math.random()
    },
    pendulos(newPendulo){
      // this.instanciarHeatMap()
      this.montarMapa()
      setInterval( () => {
        this.inserirDados(this.data)
        this.heatmapInstance.repaint()
      },1000)
    } 
  }
}
</script>

<style lang="stylus" >

  .indicador-do-pendulo
    position relative

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
