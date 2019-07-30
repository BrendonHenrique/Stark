<template>
  <main>

    <template v-if="this.forecast.temperatureValue != 0">
      <wheater-measurements
      :value="this.forecast.temperatureValue"
      :humidity="this.forecast.humidity"
      :rain_sensor_value="2" />

      <wheater-locale
      class="q-mt-md"
      :location="this.forecast.location"
      :icon="this.forecast.weatherIcon">

        <span v-if="one_decimal_hour">0</span>
        <animated-number :value="this.hours"/>
        :
        <span v-if="one_decimal_minutes">0</span>
        <animated-number :value="this.minutes"/>

      </wheater-locale>
    </template>

    <template v-else>
      <q-spinner-gears color="primary" size="9em" class="q-mt-xs"  />
      <p class="q-mb-md text-h5">
        carregando..
      </p>
    </template>

  </main>
</template>

<script>
import WeatherForecast from '../../services/WeatherForecast'

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
    'wheater-measurements': require('./Measurements').default,
    'wheater-locale': require('./Locale').default
  },
  computed:{
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
    height 29rem
    width 19rem
    background-position center
    background-size cover
    background-repeat no-repeat
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    box-shadow 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)
    border-radius 10px


</style>
