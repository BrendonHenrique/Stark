<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class='container'>
          <div class='box' :style="heatmapBoxStyle">
            
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import h337 from 'heatmap.js'
import {buildPendulos} from '../utils/SiloUtils'

export default {
  data(){
    return{
      heatmapBoxStyle:{
        height: '1000px',
        width: '1000px'
      }
    }
  },
  mounted(){
  
    let heatmapInstance = h337.create({
      container: document.querySelector('.box'),
      backgroundColor: '#0000ff',
      opacity: '1',
      radius: 80
    })

    var qtdPendulo = 13,
    qtdSensor = 13

    this.heatmapBoxStyle.height = qtdSensor >= 12 ? `${60 * qtdSensor }px` : '700px'
    this.heatmapBoxStyle.width  = qtdPendulo >= 12 ? `${60 * qtdPendulo }px` : '700px'   

    var pendulos = buildPendulos(qtdPendulo,qtdSensor)
    var points = []

    console.log(this.heatmapBoxStyle.height, this.heatmapBoxStyle.width )

    for (let id_pendulo = 0; id_pendulo < pendulos.length; id_pendulo++) {
      
      let penduloReference = pendulos[id_pendulo]

      for (let id_sensor = 0; id_sensor < penduloReference.sensores.length; id_sensor++) {

        Object.assign(penduloReference.sensores[id_sensor],{
          id_sensor : penduloReference.sensores[id_sensor].id_sensor,
          temperatura : penduloReference.sensores[id_sensor].temperatura,
          x : (id_pendulo + 1) * 60,
          y : 1000 - ( 60 * (id_sensor + 1))
        })

        let ponto = {
          x: penduloReference.sensores[id_sensor].x,
          y: penduloReference.sensores[id_sensor].y,
          value: penduloReference.sensores[id_sensor].temperatura
        }
        points.push(ponto)
      }
    }
    
    var max = 40
    var min = 10

    var data = {
      max,
      min, 
      data: points
    }

    heatmapInstance.setData(data)
  }
}
</script>

<style lang="stylus">
  .container 
    justify-content  center
    align-items center 
    display flex
    height 100vh
    width 100%
  
  canvas 
    height 100%
    width 100%
    
    

</style>
