<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class='container'>
          <div class='box'>
            
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
  mounted(){
    
    let heatmapInstance = h337.create({
      container: document.querySelector('.box'),
      backgroundColor: 'black',
      opacity: '.5',
      radius: 60
    })

    var pendulos = buildPendulos(15,19)
    var points = []

    for (let id_pendulo = 0; id_pendulo < pendulos.length; id_pendulo++) {
      
      let penduloReference = pendulos[id_pendulo]

      for (let id_sensor = 0; id_sensor < penduloReference.sensores.length; id_sensor++) {

        Object.assign(penduloReference.sensores[id_sensor],{
          id_sensor : penduloReference.sensores[id_sensor].id_sensor,
          temperatura : penduloReference.sensores[id_sensor].temperatura,
          x : (id_pendulo + 1) * 50,
          y : 800 - ( 40 * (id_sensor + 1))
        })

        let ponto = {
          x: penduloReference.sensores[id_sensor].x,
          y: penduloReference.sensores[id_sensor].y,
          value: penduloReference.sensores[id_sensor].temperatura
        }
        points.push(ponto)
        console.log(ponto)
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
    
  .box
    width  800px
    height 800px

</style>
