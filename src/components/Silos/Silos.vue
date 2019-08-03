<template>
  <q-list class="row">
  <paginador-mobile :silos="silos" />
    <q-item class="justify-center col-xs-12 col-sm-6 col-md-4 col-lg-4" v-for="(silo,index) in silos" :key="silo.id">
      <q-card class="card-silo shadow-10" :class="`silo-${index+1}`">
          <card-silo-header />
          <card-silo-content :silo="silo" />
      </q-card>
    </q-item>
  </q-list>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'

  export default{
    components:{
      'card-silo-header': require('./CardSiloHeader.vue').default,
      'card-silo-content': require('./CardSiloContent.vue').default,
      'paginador-mobile': require('./Paginador.vue').default
    },
    computed:{
      ...mapGetters('silos',['silos']),
    },
    data(){
      return{}
    },
    methods: {
    },
  }
</script>

<style lang="stylus">

  .card-silo
    transition all .4s ease-in-out
    -webkit-animation entering 2s
    animation entering 2s
    border-radius 30px  

  .card-silo:hover
    transform scale(1.05)
    cursor pointer
    -webkit-box-shadow 0 4px 20px 6px #B5B5B5
    box-shadow 0 4px 20px 6px #B5B5B5
    z-index 1

  @keyframes entering
    from
      right 100rem

    to
      right 0

</style>
