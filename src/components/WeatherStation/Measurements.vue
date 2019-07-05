<template>
    <section>
        <div class="temperature__value">
          <animated-number v-if="scaleSymbol === 'C'" :value="value" />
          <animated-number v-else :value="fValue" />
        </div>
        <div class="temperature__right">
            <div class="temperature__scale">
              <a href="#" @click.prevent="toggleTemperature">&deg;{{ scaleSymbol }}</a>
            </div>
            <div class="humidity">
              <img src="~assets/icons/humidity.svg">
              <span class="humidity__value">
                <animated-number :value="humidity" />
              </span>&percnt;

              <q-separator spaced color="grey-6" />

              <img src="~assets/icons/weather/rain.svg">
              <span class="humidity__value">
                <animated-number :value="rain_sensor_value" />
              </span>&percnt;
          </div>
        </div>
    </section>
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
  },
  methods: {
    toFahrenheit(value) {
      return Math.floor((value * 1.8) + 32);
    },
    toggleTemperature() {
      (this.scale === 'Celcius')? this.scale = 'Fahrenheit' : this.scale = 'Celcius';
    }
  }
}
</script>

<style scoped>
  .humidity img {
      width: 38px;
      height: 38px;
      vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color .2s ease-in;
  }

  section {
    margin-left:5rem;
    margin-top:12rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .temperature__value {
    font-size: 7em;
    color: rgba(255, 255, 255, 0.75);
  }

  .temperature__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .temperature__scale {
    padding-top: 5px;
    font-size: 2em;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.75);
  }

  .humidity {
    vertical-align: middle;
  }
</style>
