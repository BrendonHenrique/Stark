<template>
  <q-list class="row">
    
    <!-- Silos -->
    <q-item class="justify-center col-xs-12 col-sm-6 col-md-4 col-lg-4" 
    v-for="(silo,index) in silos" :key="silo.id" style="padding: 20px 16px !important; transform: scale(0.8);">
      <q-card style="box-shadow:0 0 8px 1px #eae5e5;" class="card-silo shadow-10" :class="`silo-${index+1}`">
        <!-- colocar botão com evento no header para ir aos relatórios do silo
        utilizando como conteúdo do trigger o id do silo clicado na header
        -->
        <!-- e colocar botão com evento no header 
        para ir ao hstórico  
        -->

        <card-silo-header />
        <card-silo-content :silo="silo" />
      
      </q-card>
    </q-item>
    <!--  -->

  </q-list>
</template>

<script>
  import SiloController from '../../Controllers/Silos/Controller'
  import Vue from 'vue'
  export default{
    computed:{
      silos(){
        return SiloController.getSilos()
      }
    },  
    components:{
      'card-silo-header': require('./CardSiloHeader.vue').default,
      'card-silo-content': require('./CardSiloContent.vue').default,
    }, 
  }
</script>

<style lang="stylus">

  .card-silo
    transition all .4s ease-in-out 
    border-radius 30px  
    font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    font-size 20px

  .card-silo:hover
    transform scale(1.05)
    cursor pointer
    -webkit-box-shadow 0 4px 20px 6px #B5B5B5
    box-shadow 0 4px 20px 6px #B5B5B5
    z-index 1
 
</style>
