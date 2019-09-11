<template> 
  <main>
    <template v-if="this.forecast.temperatureValue != 0">
      
      <!-- Medidas de umidade e porcentagem de possibilidade da chuva -->
      <measurements
      :value="this.forecast.temperatureValue"
      :humidity="this.forecast.humidity"
      :rain_sensor_value="this.forecast.cloudiness" />
      <!--  -->

      <!-- Temperatura, horas e localização -->
      <locale
      class="q-mt-md"
      :location="this.forecast.location"
      :icon="this.forecast.weatherIcon">

        <span v-if="one_decimal_hour">0</span>
        <animated-number :value="this.hours"/>
        :
        <span v-if="one_decimal_minutes">0</span>
        <animated-number :value="this.minutes"/>

      </locale>
      <!--  -->
    
    </template>

    <!-- Spinner de loading -->
    <template v-else> 
      <div style="height:25rem;" class="column justify-center">
        <q-spinner-gears color="secondary" size="150px"  />
        <p class="q-my-xl text-center text-h5">
          Carregando...
        </p>
      </div>
    </template>
    <!--  -->

  </main> 
</template>

<script>
import WeatherForecast from '../../services/WeatherForecast'
import AnimatedNumber from "animated-number-vue"; 

export default {
  data() {
    return {
      forecast: new WeatherForecast,
      minutes: new Date().getMinutes(),
      hours: new Date().getHours()
    }
  }, 
  components: {
    'animated-number':  require('../Shared/AnimatedNumber').default,
    'measurements': require('./Measurements').default,
    'locale': require('./Locale').default
  },
  computed:{

    // Métodos auxiliares para preencher as horas e os minutos com um zero à esquerda 
    one_decimal_hour(){
     return new Date().getHours().toString().length == 1 ? true : false
    },
    one_decimal_minutes(){
      return new Date().getMinutes().toString().length == 1 ? true : false
    }
  }
}
</script>

<style scoped lang="stylus">

  main
    width 24rem
    padding 10px 15px
    background-position center
    background-size cover
    background-repeat no-repeat
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    box-shadow 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)
    border-radius 10px
    box-shadow 1px 1px 15px 1px white

</style>
