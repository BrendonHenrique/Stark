<template>
    <!--  container para inserir o nó do canvas com o mapa de calor -->
    <div class="mapa-de-calor">
      <div class="row justify-center">
        <div class='col-xs-12 col-sm-9 col-md-7 col-lg-7 box-silo'>
          <div class='box-heatmap' style="height:100vh;"/>
        </div>
      </div>
    </div>
    <!--  -->
</template>
<script>
// Import para criação do heatmap
import h337 from 'heatmap.js'

export default {
  props:['pendulos','showMapa'],
  data(){
    return{
      data:[],
      heatmapInstance: null,
    }
  },
  computed:{
    configuracoesDeCores(){
      return this.$store.state.configuracoes.configuracoes_de_cores
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
        gradient:{
          0.25: "rgb(0,0,255)",
          0.55: "rgb(0,255,0)",
          0.85: "yellow",
          1.0: "rgb(255,0,0)"
        }
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
      let x_position = parseInt(x_offset*0.7) 
      
      penduloGerado.map( (pendulo,index) => {
        var y_position = parentHeight - parseInt(y_offset) - 30
        pendulo.sensores.map( sensor => {
          let ponto = {
            value: sensor.temperatura,
            x : x_position,  
            y : y_position,
            radius : ((y_offset + x_offset) / Math.PI) + parentWidth * 0.04
          }
          this.data.push(ponto)
          y_position = y_position - parseInt(y_offset * 0.8) 
        })
        x_position = x_position + parseInt(x_offset)  - parseInt(x_offset * 0.05) 
      })

    },
    // Valores abaixo serão utilizados como parametro para a cor na escala do mapa de calor
    // Ambos os valores são configurados na página de configurações nos inputs de temperatura baixa e alta respectivamente
    // Aqui também insiro o mapa montado na instância do heatmap
    inserirDados(){
      var max = this.configuracoesDeCores.temperatura_alta 
      var min = this.configuracoesDeCores.temperatura_baixa
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

  .mapa-de-calor 
    width 100%
    height 100vh
    box-shadow 0 0 1rem 0 rgba(255, 255, 255, .2)   
    border-radius 5px
    position relative
    z-index 1
    background inherit
    overflow hidden
  
  .mapa-de-calor:before 
    content ""
    position absolute
    background inherit
    z-index -1
    top 0
    left 0
    right 0
    bottom 0
    box-shadow inset 0 0 200px rgba(255, 255, 255, .5)
    filter blur(100px)
 
  .box-silo
    background url('../../../assets/bg-silo.png') no-repeat center center
    background-size cover
  
  @media (min-width: 1024px) 
    .heatmap-canvas 
      position absolute
      top unset !important
      bottom -20px
      justify-content center 
      display flex
      width 100%
      height 85vh  
  
  @media (min-width: 320px) and (max-width: 1023px) 
    .heatmap-canvas 
      position absolute
      top unset !important
      bottom -15px
      justify-content center 
      display flex
      width 100%
      height 90vh

</style>