<template>
    <div class='box-heatmap' :style="boxStyle" />
</template>
<script>
// Nota: Usei transform: rotate(270deg) porquê o heatmap utiliza um plano cartesiano para mapeamento (x,y) 
// porém o eixo x inicia em 0 até o valor de largura do elemento pai, e y da altura do elemento pai até 0 
// isso significa que para fazer o mapeamento dos pontos no plano cartesiano seria necessário saber a altura total e ir decrescendo até o primeiro sensor
// o que seria trabalhoso , para facilitar utilizei rotação no elemento .box e transformo os eixos em eixos com a escala normal 
// x de 0 até a largura do el pai e y de 0 até a altura do elemento pai, isso facilita na hora de inserir as coordenadas nos pontos e na hora de criar dinâmicamente 
// a dimensão do heatmap-container , antes de montar o componente
import {buildPendulos, buildRandomicPendulos} from '../../utils/SiloUtils'
import h337 from 'heatmap.js'
export default {
  props:['pendulos'],
  data(){
    return{
      heightValue : 0,
      widthValue : 0,
      boxStyle:{
        height: '',
        width: '', 
        transform: 'scale(0.7) rotate(270deg)'
      }, 
      data:[]
    }
  },
  methods:{
    setHeight(value){
      this.boxStyle.height = `${value}px` 
    },
    setWidth(value){
      this.boxStyle.width = `${value}px` 
    },
    getMaiorPenduloLength(){
      let pendulosLength = [] 
        this.pendulos.map ( pendulo => {
          pendulosLength.push(pendulo.sensores.length)
      })
      return parseInt(Math.max(...pendulosLength))
    }
  },
  // Antes de montar o componente é necessário checar quantos pêndulos e sensores serão montados 
  // Atribuir o valor de height e width no elemento .box baseando-se nos valores calculados para cada sensor e pêndulo
  // o valor calculado para cada sensor é 64px para width e height
  created(){
    this.widthValue = 64 
    this.pendulos.map ( pendulo => {
      this.heightValue = 16 
      pendulo.sensores.map( sensor => {
        let ponto = {
          value: sensor.temperatura,
          x : this.heightValue + 64,  
          y : this.widthValue + 64
        }
        this.data.push(ponto)
        this.heightValue += 48
      })
      this.widthValue += 64
    })
    this.setHeight(this.widthValue + 128)
    this.setWidth(this.getMaiorPenduloLength()  * 55)
  },
  mounted(){
    let heatmapInstance = h337.create({
      container: document.querySelector('.box-heatmap'),
      opacity: '0.6',
      radius: 70,
      gradient: {
        '.1': 'blue',
        '.8': 'red',
        '.95': 'white'
      }
    })
    this.pendulos.map(pendulo => {
      pendulo.sensores.map( sensor => this.data.push(sensor))
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

</style>
