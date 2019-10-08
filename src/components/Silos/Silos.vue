<template>
  <q-list class="row">
    
    <!-- Silos -->
    <q-item class="justify-center col-xs-12 col-sm-6 col-md-4 col-lg-4" 
    v-for="(silo,index) in silos" :key="silo.id" style="transform: scale(0.95);">
        <q-card class="card-silo">

          <!-- Card header  -->
          <card-silo-header :index="index"/> 
          <!--  -->

          <!-- Card content -->
          <card-silo-content :silo="silo" />
          <!--  -->
        
        </q-card>
    </q-item>
    <!--  -->
 
  </q-list>
</template>

<script>
  import SiloController from '../../controllers/Silos/Controller'
  import Vue from 'vue'
  export default{
    computed:{
      silos(){
        return SiloController.getSilos()
      }
    },  
    components:{
      'card-silo-content': require('./CardSiloContent.vue').default,
      'card-silo-header': require('./CardSiloHeader.vue').default,
    }, 
  }
</script>

<style lang="stylus">

  .card-silo
    transition all .4s ease-in-out 
    border-radius 30px  
    font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);   
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    font-size 20px

  .card-silo:before 
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, .5);
    filter: blur(10px);
    overflow: hidden;

  .card-silo:hover
    transform scale(1.05)
    cursor pointer
    -webkit-box-shadow 0 4px 20px 6px #B5B5B5
    box-shadow 0 4px 20px 6px #B5B5B5
    z-index 1
 
</style>
