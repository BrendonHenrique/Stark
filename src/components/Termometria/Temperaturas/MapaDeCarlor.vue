<template>
    <!--  container para inserir o nó do canvas com o mapa de calor -->
      <!-- <div class="bg-silo"> -->
        <div class='box-heatmap' style="height:100%;width:100%;"/>
      <!-- </div> -->
    <!--  -->
</template>
<script>
// Import para criação do heatmap
import h337 from 'heatmap.js'
import CoresController from '../../../Controllers/LegendaDeCores/Controller'

export default {
  props:['pendulos'],
  data(){
    return{
      data:[],
      heatmapInstance: null
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
        radius: '70',
      })
    },
    // Cria o mapa de calor baseando-se nos pêndulos vindos como props ( this.pendulos )
    // Utiliza como inicio do eixo y o height do box-heatmap e inicio do x é 0
    montarMapa(){
      this.data = []
      let penduloGerado = this.pendulos
      let parentHeight = document.getElementsByClassName('box-heatmap')[0].clientHeight
      let parentWidth = document.getElementsByClassName('box-heatmap')[0].clientWidth
      
      let y_offset = parseInt((parentHeight / this.getMaiorPenduloLength(penduloGerado)).toFixed(2))
      let x_offset = parseInt((parentWidth / this.getQuantidadeDePendulos(penduloGerado)).toFixed(2))
      
      let x_position = parseInt(x_offset * 0.7)
      
      penduloGerado.map( (pendulo,index) => {
        var y_position = parentHeight - parseInt(y_offset * 1.3) 
        pendulo.sensores.map( sensor => {
          let ponto = {
            value: sensor.temperatura,
            x : x_position,  
            y : y_position
          }
          this.data.push(ponto)
          y_position = y_position - parseInt(y_offset * 0.94) 
        })
        x_position = x_position + parseInt(x_offset * 0.97) 
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
  // Antes de montar o componente o mapa de calor é montado, isso é a estrutura à ser usada é montada , mas ainda não instanciado
  beforeMount(){ 
  },
  // Instancia o mapa de calor e insere os dados
  mounted(){
    this.montarMapa()   
    this.instanciarHeatMap()
    this.inserirDados()
  },
  // Observadores para recriar o mapa 
  watch:{
    pendulos(){
      this.reRender()
    } 
  }
}
</script>

<style lang="stylus" > 
  .box-heatmap
    width:100%
    
  .heatmap-canvas 
    width: 100%

</style>