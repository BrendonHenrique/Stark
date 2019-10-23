<template>
  <div class="configurador-silos">
    
    <q-card class="bg-grey-2 shadow-10 col-sm-10 col-xs-12 col-md-10 col-lg-5" 
    style="border-radius:10px;box-shadow:0 0 8px 1px #eae5e5;"
    >

      <q-banner dense class="bg-grey-5 column align-center q-m">
        <p class="q-mb-sm text-subtitle1 text-grey-9">
          Configurações dos silos
        </p>
        <template v-slot:avatar>
          <q-btn round glossy color="grey" class="q-mb-sm">
            <q-icon name="home" color="black" size="35px"/>
          </q-btn>
        </template>
      </q-banner>

      
      <!-- Botão para salvar as informações -->
      <div class="row">
        <q-space />
        <save-button 
          class="q-ma-md"
          :mensagem="'Você gostaria de salvar as configurações do silo?'"
        />
      </div>
      <!--  -->

    </q-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      indexSiloSelecionado:0
    }
  },
  methods:{
  },
  mounted(){
    // console.log(this.silo_by_id(this.indexSiloSelecionado))
  },
  components:{
    'save-button': require('../Shared/SaveButton').default,
  },
  computed:{
    ...mapGetters({
      silo_by_id: "silos/silo_by_id"
    }),

  }
};
</script>

<style lang="stylus" >
  
  .legenda-de-cores
    animation entry 1s

  .input-cores
    .q-field__label
      overflow inherit
      font-size 23px
    
    input 
      font-size 18px

  div.q-menu.scroll
    width 22rem !important

    .q-field__label
      font-size 1.2em
      color black

</style>
