<template>
    <!--  container para inserir o nó do canvas com o mapa de calor -->
      <div class="row justify-center">
        <div class='col-xs-12 col-md-11 col-sm-11 col-lg-7 box-silo'>
          <div class='box-heatmap' style="height:90vh;"/>
        </div>
      </div>
    <!--  -->
</template>
<script>
// Import para criação do heatmap
import h337 from 'heatmap.js'
import CoresController from '../../../controllers/LegendaDeCores/Controller'

export default {
  props:['pendulos','showMapa'],
  data(){
    return{
      data:[],
      heatmapInstance: null,
    }
  },
  methods:{
    // set da altura do box-heatmap com base no maior pêndulo 
    getMaiorPenduloLength(pendulos){
      let pendulosLength = [] 
        pendulos.map( pendulo =>  pendulosLength.push(pendulo.sensores.length));
      return parseInt(Math.max(...pendulosLength))
    },
    // set do width do box-heatmap
    getQuantidadeDePendulos(pendulos){
      return pendulos.length
    },
    // Util para recriar o nodo
    removerHeatMap(){
      const $ = document.querySelector.bind(document);
      let boxHeatmap = $(".box-heatmap");
      if(boxHeatmap){
        let canvas = $(".heatmap-canvas");
        let noRemovido = boxHeatmap.removeChild(canvas);
      }
    },
    instanciarHeatMap(){
      const $ = document.querySelector.bind(document);
      this.heatmapInstance = h337.create({
        container: $(".box-heatmap"),
      })
    },
    // Cria o mapa de calor baseando-se nos pêndulos vindos como props ( this.pendulos )
    // Utiliza como inicio do eixo y o height do box-heatmap e inicio do x é 0
    montarMapa(){
      this.data = []
      let penduloGerado = this.pendulos
      let parentHeight = document.getElementsByClassName('box-heatmap')[0].clientHeight
      let parentWidth = document.getElementsByClassName('box-heatmap')[0].clientWidth
      let qtd_pendulos =  this.getQuantidadeDePendulos(penduloGerado)
      
      let y_offset = parseInt((parentHeight / this.getMaiorPenduloLength(penduloGerado)).toFixed(2))
      let x_offset = parseInt((parentWidth / qtd_pendulos).toFixed(2))
      let x_position = parseInt(x_offset * 0.5) 
      
      penduloGerado.map( (pendulo,index) => {
        var y_position = parentHeight - parseInt(y_offset) + 7
        pendulo.sensores.map( sensor => {
          let ponto = {
            value: sensor.temperatura,
            x : x_position,  
            y : y_position,
            radius : ((y_offset + x_offset) / Math.PI) + parentWidth * 0.05
          }
          this.data.push(ponto)
          y_position = y_position - parseInt(y_offset * 0.9) 
        })
        x_position = x_position + parseInt(x_offset) 
      })

    },
    // Valores abaixo serão utilizados como parametro para a cor na escala do mapa de calor
    // Ambos os valores são configurados na página de configurações nos inputs de temperatura baixa e alta respectivamente
    // Aqui também insiro o mapa montado na instância do heatmap
    inserirDados(){
      var max = CoresController.getTemperaturaAlta() 
      var min = CoresController.getTemperaturaBaixa()
      var data = {
        max,
        min, 
        data: this.data,
      }
      this.heatmapInstance.setData(data)
    },
    // Re-cria o mapa de calor , é utilizada quando as dimensões do container é alterada
    reRender(){
      this.removerHeatMap()
      this.instanciarHeatMap()
      this.montarMapa()
      this.heatmapInstance.repaint()
      this.inserirDados(this.data)
    },
  },
  // Cria o mapa se baseando no width da tela , instancia o mapa de calor e insere os dados
  mounted(){
    this.montarMapa()   
    this.instanciarHeatMap()
    this.inserirDados()
  },
  // Observadores para recriar o mapa 
  watch:{
    pendulos(){
      this.reRender()
    },
    showMapa(newValue){
      if(newValue == true){
        this.reRender()
      }
    }
  }
}
</script>

<style lang="stylus" >

  .box-silo
    background url('../../../assets/bg-silo.png') no-repeat center center
    background-size cover
    position relative
    width 100%
    height 80vh
    
  .heatmap-canvas 
    position absolute
    top unset !important
    bottom 0
    width 100%
    height 80vh

</style>