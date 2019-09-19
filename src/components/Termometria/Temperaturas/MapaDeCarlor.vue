<template>
    <!--  container para inserir o nó do canvas com o mapa de calor -->
      <div class="bg-silo">
        <div class='box-heatmap' :style="boxStyle"/>
      </div>
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
      boxStyle:{
        height: '',
        width:  '', 
      }, 
      data:[],
      heatmapInstance: null
    }
  },
  // getters da propriedade do elemento box-heatmap
  computed:{
    boxStyleHeight(){
      return this.boxStyle.height
    },
    boxStyleWidth(){
      return this.boxStyle.width
    }
  },
  methods:{
    // setters para alterar as propriedades do elemento box-heatmap
    setHeight(value){
      this.boxStyle.height = `${value}px`
    },
    setWidth(value){
      this.boxStyle.width = `${value}px`
    },
    // set da altura do box-heatmap com base no maior pêndulo 
    getMaiorPenduloLength(pendulos){
      let pendulosLength = [] 
        pendulos.map( pendulo => {
          pendulosLength.push(pendulo.sensores.length)
      })
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
    // Instancia o heatmap no nodo box-heatmap   
    // blue #5757D7
    // green 7AD656
    // YELLOW D4DC5C
    // RED E17261
    instanciarHeatMap(){
      const $ = document.querySelector.bind(document);
      this.heatmapInstance = h337.create({
        container: $(".box-heatmap"),
        radius: 125,
        gradient: {
          // enter n keys between 0 and 1 here
          // for gradient color customization
          '.1': '#5757D7',
          '.5': '#7AD656',
          '.7': '#D4DC5C',
          '.8': '#db9b5c',
          '.98': '#E17261'

        }
      })
    },
    // Cria o mapa de calor baseando-se nos pêndulos vindos como props ( this.pendulos )
    // Utiliza como inicio do eixo y o height do box-heatmap e inicio do x é 0
    montarMapa(){
      this.data = []
      let penduloGerado = this.pendulos
      let espacoEntrePontos = 110 
      let posicaoDeInicio = 80
      let x_position = posicaoDeInicio + 50
      this.setHeight(this.getMaiorPenduloLength(penduloGerado) * espacoEntrePontos  + posicaoDeInicio)
      this.setWidth(this.getQuantidadeDePendulos(penduloGerado) * espacoEntrePontos + posicaoDeInicio)
      penduloGerado.map( (pendulo,index) => {
        let y_position = parseInt(this.boxStyle.height)  - posicaoDeInicio  - 50
        pendulo.sensores.map( sensor => {
          let ponto = {
            value: sensor.temperatura,
            x : x_position,  
            y : y_position
          } 
          y_position = y_position - espacoEntrePontos  + 15 
          this.data.push(ponto)
        })
        x_position  = x_position   + espacoEntrePontos - 20
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
      this.heatmapInstance._renderer.ctx.canvas.height = parseInt(this.boxStyle.height)
      this.heatmapInstance._renderer.ctx.canvas.width =  parseInt(this.boxStyle.width)
      this.inserirDados(this.data)
    },
  },
  // Antes de montar o componente o mapa de calor é montado, isso é a estrutura à ser usada é montada , mas ainda não instanciado
  beforeMount(){ 
    this.montarMapa()   
  },
  // Instancia o mapa de calor e insere os dados
  mounted(){
    this.instanciarHeatMap()
    this.inserirDados()
  },
  // Observadores para recriar o mapa 
  watch:{
    boxStyleHeight(newvalue, oldvalue){
      for (let index = 0; index < 2; index++) {
        setTimeout( () => {
          this.reRender()
        },10)
      }
    },
    boxStyleWidth(newvalue, oldvalue){
      for (let index = 0; index < 2; index++) {
        setTimeout( () => {
          this.reRender()
        },10)
      }
    },
    pendulos(){
      this.removerHeatMap()
      this.instanciarHeatMap()
      this.montarMapa()
      this.heatmapInstance.repaint()
      this.heatmapInstance._renderer.ctx.canvas.height = parseInt(this.boxStyle.height)
      this.heatmapInstance._renderer.ctx.canvas.width =  parseInt(this.boxStyle.width)
      this.inserirDados(this.data)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bg-silo
    background-image url(../../../assets/bg-silo.png)  
    -webkit-background-size cover
    -moz-background-size cover
    -o-background-size cover
    background-size cover
    padding-top 20rem
    min-width 65rem
  


</style>