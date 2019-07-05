<template>
  <q-page class="q-py-md">
    <q-list class="row">
      <q-item class="col-xs-12 col-sm-6 col-md-4 col-lg-4" v-for="silo in silos" :key="silo.id">
        <q-card class="card-silo shadow-10">

          <card-silo-header>
          <!-- Conteúdo da header -->
          </card-silo-header>

          <card-silo-content :silo="silo" />

        </q-card>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default{
    components:{
      'card-silo-header': require('components/Silos/CardSiloHeader.vue').default,
      'card-silo-content': require('components/Silos/CardSiloContent.vue').default
    },
    computed:{
      ...mapGetters('silos',['silos'])
    }
  }
</script>

<style>
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
