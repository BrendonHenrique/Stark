<template>
    <div class='box-heatmap' :style="boxStyle"/>
</template>
<script>
import h337 from 'heatmap.js'
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
  computed:{
    boxStyleHeight(){
      return this.boxStyle.height
    },
    boxStyleWidth(){
      return this.boxStyle.width
    }
  },
  methods:{
    setHeight(value){
      this.boxStyle.height = `${value}px`
    },
    setWidth(value){
      this.boxStyle.width = `${value}px`
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
    removerHeatMap(){
      const $ = document.querySelector.bind(document);
      var d = $(".box-heatmap");
      var d_interno = $(".heatmap-canvas");
      var noRemovido = d.removeChild(d_interno);
    },
    instanciarHeatMap(){
      const $ = document.querySelector.bind(document);
      this.heatmapInstance = h337.create({
        container: $(".box-heatmap"),
        opacity: '0.5',
        radius: 80,
        gradient: {
          '.1': 'blue',
          '.9': 'red',
          '.95': 'white'
        }
      })
    },
    montarMapa(){
      this.data = []
      let penduloGerado = this.pendulos
      let espacoEntrePontos = 100 
      let posicaoDeInicio = 80
      let x_position = posicaoDeInicio
      this.setHeight(this.getMaiorPenduloLength(penduloGerado) * espacoEntrePontos  + posicaoDeInicio - 20)
      this.setWidth(this.getQuantidadeDePendulos(penduloGerado) * espacoEntrePontos + posicaoDeInicio - 20)
      penduloGerado.map( (pendulo,index) => {
        let y_position = parseInt(this.boxStyle.height)  - posicaoDeInicio  
        pendulo.sensores.map( sensor => {
          let ponto = {
            value: sensor.temperatura,
            x : x_position,  
            y : y_position
          } 
          y_position = y_position - espacoEntrePontos   
          this.data.push(ponto)
        })
        x_position  = x_position   + espacoEntrePontos 
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
      this.heatmapInstance.setData(data)
    },
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
  beforeMount(){ 
    this.montarMapa()   
  },
  mounted(){
    this.instanciarHeatMap()
    this.inserirDados()
  },
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

<style lang="stylus">
  canvas 
    margin-left 7px
    
</style>