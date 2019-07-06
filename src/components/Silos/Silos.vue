<template>
  <q-page class="q-py-md">

    <div class="sticky">
      <div class="row absolute-top">
        <q-btn  v-scroll-to="{ element: scrollUp, duration: 100, offset: -70}"
        color="primary" icon="keyboard_arrow_up"
        v-bind=can_scroll_up
        round />
      </div>
      <div class="row text-white-1 absolute-center">
        {{scroll_value}}
      </div>
      <div class="row absolute-bottom">
        <q-btn v-scroll-to="{ element: scrollDown , duration: 100, offset: -70}"
        color="primary" icon="keyboard_arrow_down"
        v-bind=can_scroll_down
        round />
      </div>
    </div>

    <q-list class="row">
      <q-item class="col-xs-12 col-sm-6 col-md-4 col-lg-4" v-for="(silo,index) in silos" :key="silo.id">
        <q-card class="card-silo shadow-10" :class="`silo-${index+1}`">
          <card-silo-header/>
          <card-silo-content :silo="silo" />
        </q-card>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
  const VueScrollTo = require('vue-scrollto')
  Vue.use(VueScrollTo)

  export default{
    components:{
      'card-silo-header': require('components/Silos/CardSiloHeader.vue').default,
      'card-silo-content': require('components/Silos/CardSiloContent.vue').default
    },
    computed:{
      ...mapGetters('silos',['silos']),
      scrollUp(){
        let next_value = this.scroll_value - 1;
        return `.silo-${next_value}`
      },
      scrollDown(){
        let next_value = this.scroll_value + 1;
        return `.silo-${next_value}`
      },
      can_scroll_up(){
        return this.scroll_value <= 1 ? {
          disable: true
        } : {
          disable: false
        }
      },
      can_scroll_down(){
        return this.scroll_value >= this.silos.length ? {
          disable: true
        } : {
          disable: false
        }
      },
    },
    data(){
      return{
        scroll_value: 1
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        this.scroll_value = parseInt(((window.scrollY/550)+1).toFixed(1))
      }
    },
  }
</script>

<style>

  @media (max-width: 480px) {
    div.sticky {
      position: relative;
      font-family: Orbitron;
      height:115px;
      width: 42px;
      position:fixed;
      left:0;
      top:40%;
      background-color: rgba(48,58,66, 0.4);
      -webkit-border-radius: 25px 25px 25px 25px;
      border-radius: 25px 25px 25px 25px;
      font-size: 20px;
      z-index:1;
    }
  }

  @media (min-width: 481px) {
    div.sticky {
      display:none
    }
  }
  .card-silo{
    transition: all .4s ease-in-out;
    -webkit-animation: entering 2s;
    animation: entering 2s;
  }
  .card-silo:hover{
    transform: scale(1.05);
    cursor: pointer;
    -webkit-box-shadow: 0 4px 20px 6px #B5B5B5;
    box-shadow: 0 4px 20px 6px #B5B5B5;
    z-index:1;
  }
  @keyframes entering {
    0%{
      right: 100rem;
    }

    100%{
      right:0;
    }
  }

</style>
