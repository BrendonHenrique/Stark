<template>
  <q-layout class="wheater-layout app">
    <q-page-container>
      <q-page id="wheater-content" class="absolute-center  q-mt-lg">

        <sequential-entrance delay="150" fromBottom>
          <WeatherApp class="app--weather"></WeatherApp>
        </sequential-entrance>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import WeatherApp from 'components/WeatherStation/WeatherApp.vue'

export default {
  components: {
    WeatherApp
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

<style>

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  #wheater-content{
    position:fixed;
    margin-top:6rem;

  }
  .wheater-layout{
    position:fixed;
    font-family: 'Orbitron', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height:100%;
  }

  .app--weather {
    cursor: pointer;
    background: linear-gradient(180deg, rgb(134, 141, 158) 15%, rgb(192, 197, 212) 90%);
  }

  .app a:hover {
    color: rgba(0, 0, 0, 0.5);
  }

</style>
