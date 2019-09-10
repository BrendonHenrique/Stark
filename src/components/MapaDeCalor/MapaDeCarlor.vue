<template>
    <div class='box-heatmap' :style="boxStyle" />
</template>
<script>
import {buildRandomicPendulos, buildPendulos} from '../../utils/SiloUtils'
import h337 from 'heatmap.js'
export default {
  props:['pendulos'],
  data(){
    return{
      heightValue : 0,
      widthValue : 0,
      boxStyle:{
        height: '',
        width:  '', 
        minHeight: '',
        minWidth:  '', 
      }, 
      data:[]
    }
  },
  methods:{
    setHeight(value){
      this.boxStyle.height = `${value}px`
      this.boxStyle.minHeight = `${value}px`
    },
    setWidth(value){
      this.boxStyle.width = `${value}px`
      this.boxStyle.minWidth = `${value}px`
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
    }
  },
  beforeMount(){ 
    let penduloGerado = buildRandomicPendulos()
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
  mounted(){
    let heatmapInstance = h337.create({
      container: document.querySelector('.box-heatmap'),
      opacity: '0.5',
      radius: 80,
      gradient: {
        '.1': 'blue',
        '.9': 'red',
        '.95': 'white'
      }
    })
    var max = 40
    var min = 10
    var data = {
      max,
      min, 
      data: this.data,
    }
    heatmapInstance.setData(data)
  },
  watch:{
    pendulos(newValue){
      console.log(newValue)
    }
  }
}
</script>

<style lang="stylus">
  canvas 
    width 100%
    height 100%
  .box-heatmap 
    margin: 0 auto;
</style>