<template>
  <div style="width: 100%;">

    <section class="measurements">
      
      <!-- Valor de umidade -->
      <div>
        <img src="~assets/icons/humidity.svg">
        <span class="humidity__value">
          <animated-number :value="humidity" />
        </span>&percnt;
      </div>
      <!--  -->

      <!-- Valor da possibilidade de chuva -->
      <div>
        <img src="~assets/icons/weather/rain.svg">
        <span class="rain__value">
          <animated-number :value="rain_sensor_value" />
        </span>&percnt;
      </div>
      <!--  -->

    </section>
    
    <!-- Sinal da unidade de medida da temperatura -->
    <span class="temperature__scale" >
      <a href="#" @click.prevent="toggleTemperature">
        &deg;{{ scaleSymbol }}
      </a>
    </span>
    <!--  -->

    <!-- Valor da temperatura -->
    <section>
        <span class="temperature__value">
          <animated-number v-if="scaleSymbol === 'C'" :value="value" />
          <animated-number v-else :value="fValue" />
        </span>
    </section>
    <!--  -->

  </div>
</template>

<script>
export default {
  name: 'Temperature',
  props: {
    value: {
      type: Number,
      required: true
    },
    humidity: {
      type: Number,
      required: true
    },
    rain_sensor_value: {
      type: Number,
      required: true
    },

  },
  data() {
    return {
      scale: 'Celcius'
    }
  },
  methods: {
      // Converte a temperatura para Fahrenheit 
      toFahrenheit(value) {
        return Math.floor((value * 1.8) + 32);
      },
      // Altera a temperatura de Celcius para Fahrenheit e vice versa
      toggleTemperature() {
        (this.scale === 'Celcius')? this.scale = 'Fahrenheit' : this.scale = 'Celcius';
      }
  },
  components:{
    'animated-number': require('../Shared/AnimatedNumber').default
  },
  computed: {
    // Pega o primeiro caracter da unidade de medida de temperatura 
    scaleSymbol() {
      return this.scale.charAt(0);
    },
    // Retorna o valor transformado em Fahrenheit
    fValue() {
        return this.toFahrenheit(this.value);
    }
  }
}
</script>

<style scoped lang="stylus">
 
  a
    text-decoration none
    color inherit
    transition color 

  .measurements
    height 70px
    position relative
    left 0
    top 0
    display flex
    justify-content space-between 

    img
      width 58px
      height 58px
      vertical-align middle

  section 
    height 7rem
    width 100%
    display flex
    flex-direction row
    justify-content center

  .temperature__value
    font-size 10rem
    display flex
    flex-direction column
    justify-content center
    color rgba(255, 255, 255, 0.75) 
    
  .temperature__scale
    position relative 
    margin 10px 10px
    right 20px
    float right
    font-size 2em
    font-weight bold
    color rgba(255, 255, 255, 0.75)

</style>
