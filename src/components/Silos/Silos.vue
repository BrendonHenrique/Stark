<template>
  <q-list class="row q-mt-md">
    
    <!-- Silos -->
    <q-item class="justify-center col-xs-12 col-sm-6 col-md-4 col-lg-4" 
    v-for="(silo,index) in silos" :key="silo.id" >
        <q-card class="card-silo q-mb-lg">

          <!-- Card header  -->
          <card-silo-header :index="index"/> 
          <!--  -->

          <!-- Card content -->
          <card-silo-content :silo="silo"/>
          <!--  -->
        
        </q-card>
    </q-item>
    <!--  -->
 
  </q-list>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default{
    computed:{
      ...mapGetters({
        silos:"silos/silos"
      })
    },  
    components:{
      'card-silo-content': require('./CardSiloContent.vue').default,
      'card-silo-header': require('./CardSiloHeader.vue').default,
    }, 
  }
</script>

<style lang="stylus">

  .card-silo
    transform: scale(0.9);
    border-radius 30px  
    font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);   
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    font-size: 20px;
    -webkit-box-shadow: 0 4px 20px 6px #B5B5B5;
    box-shadow: 0 4px 20px 6px #B5B5B5;
 
</style>
