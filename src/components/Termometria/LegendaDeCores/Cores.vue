<template>
  <div>
    <card-configuracao 
    iconName="color_lens"
    mensagemSaveButton="Você gostaria de salvar a legenda de cores?"
    title="Configuração das cores dos sensores"
    subtitle="Clique na cor para alterar"
    >
      <!-- Inputs conectado com q-color para escolher as cores -->
      <div class="row q-pa-sm" v-for="item in cores" :key="item.label">
        <q-banner class="bg-grey-4 col-12" v-show="item.label == 'Temperaturas altas' || item.label == 'Temperaturas baixas'">
          <template v-slot:avatar>
            <q-icon name="color_lens" color="secondary" size="30px" />
          </template>
            <div>
              <p class="text-subtitle2">
                Insira o valor para a temperatura que será considerada como {{item.label}}
              </p>
            </div>
            <q-input 
            :label="item.label" 
            @input="handleInputs(item.label)"
            suffix="ºC"
            :value="item.label === 'Temperaturas altas' ? temperaturaAlta : temperaturaBaixa " 
            />
        </q-banner>
        <q-input  
          :rules="[val => !!val || 'Não deixe essa cor em branco']" 
          filled v-model="item.valor" class="input-cores col-12 " :label="item.label">
            <template v-slot:append>
              <q-btn class="shadow-6" round :style="{'background-color': item.valor}">
                <q-popup-proxy transition-show="scale" transition-hide="scale" class="popup-proxy-temperaturas" >
                    <q-color  no-header v-model="item.valor" no-footer/>
                </q-popup-proxy>
              </q-btn>
            </template>
        </q-input>
      </div>
      <!--  -->

      <!-- Prévia do gradiente de temperaturas -->
      <gradiente-preview :gradiente="gradienteDeTemperatura"/> 
      <!--  -->

    </card-configuracao>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  methods:{
    ...mapActions('configuracoes',['update_temperatura_baixa','update_temperatura_alta']),
    handleInputs(label){
      label === 'Temperaturas baixas' ? this.temperaturaBaixa = event.target.value : this.temperaturaAlta = event.target.value;   
    }
  },
  computed:{
    ...mapGetters({
      gradienteDeTemperatura: "configuracoes/gradiente_de_temperatura"
    }),
    cores(){
      return this.$store.state.configuracoes.legenda_de_cores
    },
    temperaturaBaixa:{
      get(){
        return this.$store.state.configuracoes.configuracoes_de_cores.temperatura_baixa;
      },
      set(value){
        this.update_temperatura_baixa(value);
      }
    },
    temperaturaAlta:{
      get(){
        return this.$store.state.configuracoes.configuracoes_de_cores.temperatura_alta;
      },
      set(value){
        this.update_temperatura_alta(value);
      }
    }
  },
  components:{
    'gradiente-preview': require('../../Termometria/LegendaDeCores/GradientePreview').default,
    'card-configuracao': require('../../Shared/CardDeConfiguracoes').default,
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
    
</style>
