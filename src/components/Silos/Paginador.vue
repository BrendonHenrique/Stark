<template>
  <!-- Páginador entre os silos , para width menores que 384px -->
  <div class="paginador">
    <div class="row">
      <q-btn  v-scroll-to="{ element: scrollUp, duration: 100}"
      color="primary" icon="keyboard_arrow_up"
      v-bind=can_scroll_up
      round />
    </div>
    <div class="row text-white-1 absolute-center">
      {{scroll_value}}
    </div>
    <div class="row absolute-bottom">
      <q-btn v-scroll-to="{ element: scrollDown , duration: 100}"
      color="primary" icon="keyboard_arrow_down"
      v-bind=can_scroll_down
      round />
    </div>
  </div>
  <!--  -->
</template>

<script>
const VueScrollTo = require('vue-scrollto')
import Vue from 'vue'
Vue.use(VueScrollTo)

export default {
  props:['quantidade_de_silos'],
  data(){
    return{
      scroll_value: 1,
      dialogIsOpen: false,
      digiplex_index: null
    }
  },
  created () {
    window.addEventListener ('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener ('scroll', this.handleScroll);
  },
  computed:{
    
    // controlador do scroll 
    scrollUp(){
      let next_value = this.scroll_value - 1;
      return `.silo-${next_value}`
    },
    scrollDown(){
      let next_value = this.scroll_value + 1;
      return `.silo-${next_value}`
    },
    
    // Verificador de possibilidade de scroll
    can_scroll_up(){
      return this.scroll_value <= 1 ? {
        disable: true
      } : {
        disable: false
      }
    },
    can_scroll_down(){
      return this.scroll_value >= this.quantidade_de_silos ? {
        disable: true
      } : {
        disable: false
      }
    }

  },
  methods:{
    handleScroll () {
      this.scroll_value = parseInt(((window.scrollY/500)+1).toFixed(1))
    }
  }
}
</script>

<style lang="stylus">
  
  @media (min-width: 320px) and (max-width: 480px) 
    div.paginador
      position relative
      font-family Orbitron
      height 115px
      width 42px
      position fixed
      left 0
      top 40%
      background-color rgba(48,58,66, 0.4)
      -webkit-border-radius 25px 25px 25px 25px
      border-radius 25px 25px 25px 25px
      font-size 20px
      z-index 2

  @media (min-width: 481px)
    div.paginador
      display none

</style>
