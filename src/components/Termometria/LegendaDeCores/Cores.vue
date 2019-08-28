<template>
  <div class="row legenda-de-cores">
    
    <!-- Car para criação da legenda de cores -->
    <q-card class="bg-grey-2 shadow-10 col-sm-10 col-xs-12 col-md-10 col-lg-5" 
    style="border-radius:10px;box-shadow:0 0 8px 1px #eae5e5;"
    >
      <!-- Inputs conectado com q-color para escolher as cores -->
      <div class="row q-px-xs" v-for="item in cores" :key="item.label">
        <q-input  
          :rules="[val => !!val || 'Não deixe essa cor em branco']" 
          filled v-model="item.valor" class="input-cores col-12 " :label="item.label">
            <template v-slot:append>
              <q-btn class="shadow-6" round :style="{'background-color': item.valor}">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-color  no-header v-model="item.valor" />
                </q-popup-proxy>
              </q-btn>
            </template>
        </q-input>
      </div>
      <!--  -->
      
      <!-- Prévia do gradiente de temperaturas -->
      <gradiente-preview /> 
      <!--  -->

      <!-- Botão para salvar as informações -->
      <save-button 
        class="q-ma-md float-right"
        :mensagem="'Você gostaria de salvar a legenda de cores?'"
        @salvarAlteracoes="salvarLegendaDeCores"
      />
      <!--  -->

    </q-card>
    <!--  -->

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      cores: []
    }
  },
  methods:{
    ...mapActions('legenda_de_cores',['update_legenda_de_cores']),
    salvarLegendaDeCores(){
      this.update_legenda_de_cores(this.cores)
    }
  },
  mounted(){
    this.cores = this.legenda_de_cores
  },
  components:{
    'save-button': require('../../Shared/SaveButton').default,
    'gradiente-preview': require('../../Termometria/LegendaDeCores/GradientePreview').default
  },
  computed:{
    ...mapGetters('legenda_de_cores',['legenda_de_cores'])
  },
};
</script>

<style lang="stylus" >
  .legenda-de-cores
    min-width 100%
    animation entry 1s
    display flex 
    justify-content center 
    justify-items center 
    
  .input-cores
    .q-field__label
      overflow inherit
      font-size 23px
    
    input 
      font-size 18px

</style>
