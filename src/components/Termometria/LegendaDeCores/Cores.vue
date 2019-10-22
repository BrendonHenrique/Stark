<template>
  <div class="legenda-de-cores">
    
    <!-- Car para criação da legenda de cores -->
    <q-card class="bg-grey-2 shadow-10 col-sm-10 col-xs-12 col-md-10 col-lg-5" 
    style="border-radius:10px;box-shadow:0 0 8px 1px #eae5e5;"
    >

      <q-banner dense class="bg-grey-5 column align-center q-m">
        <p class="q-mb-sm text-subtitle1 text-grey-9">
          Configuração das cores dos sensores
        </p>
        <template v-slot:avatar>
          <q-btn round glossy color="grey" class="q-mb-sm">
            <q-icon name="color_lens" color="black" size="35px"/>
          </q-btn>
        </template>
      </q-banner>

      <!-- Inputs conectado com q-color para escolher as cores -->
      <div class="row q-px-xs" v-for="item in cores" :key="item.label">
        <q-input  
          :rules="[val => !!val || 'Não deixe essa cor em branco']" 
          filled v-model="item.valor" class="input-cores col-12 " :label="item.label">
            <template v-slot:append>
              <q-btn class="shadow-6" round :style="{'background-color': item.valor}">
               
                <q-popup-proxy transition-show="scale" transition-hide="scale" class="popup-proxy-temperaturas">
                    <q-banner class="bg-grey-3 banner-temperaturas-baixas" v-show="item.label == 'Temperaturas baixas' " >
                      <template v-slot:avatar>
                        <q-icon name="color_lens" color="secondary" size="30px" />
                      </template>
                      <strong>
                        Informe um valor para as temperaturas baixas
                      </strong>
                      <br>
                      <span>
                        Obs: As temperaturas na termometria mais próximas desse valor terá a cor que você escolher abaixo.
                      </span>
                      <q-input label="Temperatura baixa" 
                      v-model="temperaturaBaixa" 
                      suffix="ºC"
                      @input="CoresController.updateTemperaturaBaixa(temperaturaBaixa)"></q-input>
                    </q-banner>

                    <q-banner v-show="item.label == 'Temperaturas altas' ">
                      <template v-slot:avatar>
                        <q-icon name="color_lens" color="secondary" size="30px" />
                      </template>
                      <strong>
                        Informe um valor para as temperaturas altas
                      </strong>
                      <br>
                      <span>
                        Obs: As temperaturas na termometria mais próximas desse valor terá a cor que você escolher abaixo.
                      </span>
                      <q-input label="Temperatura alta" 
                      v-model="temperaturaAlta" 
                      suffix="ºC"
                      @input="CoresController.updateTemperaturaAlta(temperaturaAlta)"></q-input>
                    </q-banner>
                    <q-color  no-header v-model="item.valor" />
                </q-popup-proxy>
              </q-btn>
            </template>
        </q-input>
      </div>
      <!--  -->
      
      <!-- Prévia do gradiente de temperaturas -->
      <gradiente-preview :gradiente="CoresController.getGradienteDeTemperatura()"/> 
      <!--  -->

      <!-- Botão para salvar as informações -->
      <div class="row">
        <q-space />
        <save-button 
          class="q-ma-md"
          :mensagem="'Você gostaria de salvar a legenda de cores?'"
          @salvarAlteracoes="CoresController.updateLegendaDeCores(cores)"
        />
      </div>
      <!--  -->

    </q-card>
    <!--  -->

  </div>
</template>

<script>
import CoresController from '../../../controllers/LegendaDeCores/Controller'

export default {
  data() {
    return {
      cores: [],
      CoresController,
      temperaturaBaixa: '',
      temperaturaAlta: ''
    }
  },
  mounted(){
    this.cores = CoresController.getLegendaDeCores();
    this.temperaturaBaixa = CoresController.getTemperaturaBaixa();
    this.temperaturaAlta = CoresController.getTemperaturaAlta();
  },
  components:{
    'save-button': require('../../Shared/SaveButton').default,
    'gradiente-preview': require('../../Termometria/LegendaDeCores/GradientePreview').default
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
