<template>
  <q-page id="wheater-content" style="" class="wheater-layout app">
    <wheater-app class="app--weather" />
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
    padding 15px
    display flex
    justify-content center
    justify-items center 
    min-width 100%
    font-family 'Libre Caslon Text', serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color rgba(255, 255, 255, 0.9) 

  .app--weather
    cursor pointer
    background: url('../assets/bg-estacao.jpg') ;
    text-shadow 1px 1px #1b1919
    height 38rem
    width 26rem
    font-size 20px

  .app
    a
      &:hover
        color rgba(0, 0, 0, 0.5)

</style>
