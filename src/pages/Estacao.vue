<template>
  <q-page id="wheater-content" style="min-height:0;" class="fixed-center wheater-layout app">
    <sequential-entrance delay="150" fromBottom>
      <wheater-app class="app--weather" />
    </sequential-entrance>
  </q-page>
</template>

<script>
import WeatherApp from 'components/WeatherStation/WeatherApp.vue'

export default {
  components: {
    'wheater-app': require('components/WeatherStation/WeatherApp.vue').default
  },

  data() {
    return {
      date: new Date
    }
  },

  computed: {
    year() {
      return this.date.getFullYear();
    }
  }
}
</script>

<style lang="stylus" >

  .wheater-layout
    position fixed
    font-family 'Libre Caslon Text', serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color rgba(255, 255, 255, 0.9) 

  .app--weather
    cursor pointer
    background linear-gradient(180deg, rgb(134, 141, 158) 15%, rgb(192, 197, 212) 90%)

  .app
    a
      &:hover
        color rgba(0, 0, 0, 0.5)

</style>
