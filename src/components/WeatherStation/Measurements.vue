<template>
  <div style="width: 100%;">

    <section class="humidity">
      <div>
        <img src="~assets/icons/humidity.svg">
        <span class="humidity__value">
          <animated-number :value="humidity" />
        </span>&percnt;
      </div>

      <div>
        <img src="~assets/icons/weather/rain.svg">
        <span class="rain__value">
          <animated-number :value="rain_sensor_value" />
        </span>&percnt;
      </div>

    </section>
    
    <span class="temperature__scale" >
      <a href="#" @click.prevent="toggleTemperature">
        &deg;{{ scaleSymbol }}
      </a>
    </span>
    
    <section>
        <span class="temperature__value">
          <animated-number v-if="scaleSymbol === 'C'" :value="value" />
          <animated-number v-else :value="fValue" />
        </span>
    </section>
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
      toFahrenheit(value) {
        return Math.floor((value * 1.8) + 32);
      },
      toggleTemperature() {
        (this.scale === 'Celcius')? this.scale = 'Fahrenheit' : this.scale = 'Celcius';
      }
  },
  components:{
    'animated-number': require('../Shared/AnimatedNumber').default
  },
  computed: {
    scaleSymbol() {
      return this.scale.charAt(0);
    },
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

  .humidity
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
    font-size 20px
    height 7rem
    width 100%
    display flex
    flex-direction row
    justify-content center
  
  .temperature__value
    display flex
    flex-direction column
    justify-content center
    font-size 7em
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
