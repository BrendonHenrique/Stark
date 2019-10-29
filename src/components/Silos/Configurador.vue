<template>
  <div class="configurador-silos">
    
    <q-card class="bg-grey-2 shadow-10 col-sm-10 col-xs-12 col-md-10 col-lg-5" 
    style="border-radius:10px;box-shadow:0 0 8px 1px #eae5e5;">

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

      <q-card-section class="q-pa-sm">
          <q-select 
          @input="getConfiguracoesAtuais"
          outlined transition-show="jump-up"  transition-hide="jump-down"
          v-model="indexSelecionado" :options="quantidadeDeSilos"  
          label="Antes de iniciar a configuração selecione um silo" autofocus
          :rules="[val => !!val || 'Selecione um silo para configurar']">
              <template v-slot:prepend>
                  <q-img   
                  style="height: 40px; width: 40px"
                  src="../../../assets/icons/silo2.svg" />
              </template>
          </q-select>
      </q-card-section>

      <q-card-section v-show="indexSelecionado" class="q-gutter-md justify-center">

        <q-form @submit="salvarAlteracoes" class="q-gutter-md" >
          <q-input
            v-for="input in inputsDeConfiguracao" :key="input.label"
            outlined
            input-class="text-right"
            v-model="input.value"
            :label="input.label"
            :rules="[val => !!val && val > 0  || input.ruleErrorMessage]"
            :suffix="input.sufix"
            :disable="input.disabled"
          />
          <div class="row">
            <q-space />
            <q-btn 
            label="salvar" 
            text-color="grey-9" icon-right="save" 
            type="submit" /> 
          </div>
        </q-form>

      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import dialogPromise from '../../services/DialogPromise';
import NotifyUsers from '../../services/NotifyUser';
import {mapGetters, mapActions} from 'vuex';

export default {
  props:['configuracaoRestritiva'],
  mounted(){
    if(this.configuracaoRestritiva.length > 0){
      this.configuracaoRestritiva.forEach(permission => { 

        if(permission === 'configuracoes-silo'){ //pode configurar tudo
          this.inputsDeConfiguracao.forEach( input => input.disabled = false)

        }else if(permission === 'peso-das-sacas'){ //pode configurar apenas peso das sacas
          this.inputsDeConfiguracao.forEach( input => {
            if(input.label === 'Peso da saca'){
              input.disabled = false
            }
          });
        }
      });
    }
  },
  data() {
    return {
      indexSelecionado:'',
      inputsDeConfiguracao:[
        {
          value: null,
          ruleErrorMessage: 'Informe a capacidade do silo em sacas',
          label: 'Capacidade do silo',
          sufix: 'Sacas',
          labelVuex: 'capacidade',
          disabled: true
        },
        {
          value: null,
          ruleErrorMessage: 'Informe o peso da saca em kilogramas',
          label: 'Peso da saca',
          sufix: 'Kg',
          labelVuex: 'pesoDaSaca',
          disabled: true
        },
        {
          value: null,
          ruleErrorMessage: 'Informe a quantidade de anéis',
          label: 'Quantidade de anéis',
          sufix: 'Anéis',
          labelVuex: 'pendulosPorAnel',
          disabled: true
        },
        {
          value: null,
          ruleErrorMessage: 'Informe a quantidade de pêndulos por anel',
          label: 'Quantidade de pêndulos por anel',
          sufix: 'Pêndulos',
          labelVuex: 'quantidadeDeAneis',
          disabled: true
        },
      ],
    }
  },
  methods:{
    ...mapActions('silos',['update_configuracoes']),
    getConfiguracoesAtuais(){
      let configuracoesDoSilo = this.silo_by_id(this.indexSelecionado - 1).configuracoesDoSilo
      this.inputsDeConfiguracao.forEach( input => { 
        if(input.label === 'Capacidade do silo'){
          input.value = configuracoesDoSilo.capacidade
        }else if(input.label === 'Peso da saca'){
          input.value = configuracoesDoSilo.pesoDaSaca
        }else if(input.label === 'Quantidade de anéis'){
          input.value = configuracoesDoSilo.pendulosPorAnel
        }else{
          input.value = configuracoesDoSilo.quantidadeDeAneis
        }
      });
    },
    salvarAlteracoes(){
      dialogPromise('Salvar as configurações do silo ?')
      .then( () => {
        let payload = this.inputsDeConfiguracao.map( input => { 
          return{
            value: input.value , 
            label: input.labelVuex
          }
         });

        this.update_configuracoes({
          indexSilo: this.indexSelecionado,
          payload 
        });

        NotifyUsers.success('Configurações salvas com sucesso');
      });
    }
  },
  components:{
    'save-button': require('../Shared/SaveButton').default,
  },
  computed:{
    ...mapGetters('silos',['silo_by_id']),
    quantidadeDeSilos(){
      let options = [];
      for (let index = 0; index < this.$store.state.silos.silos.length; index++) {
        options.push(index+1);
      }
      return options;
    }
  }
};
</script> 

<style lang="stylus">
  .configurador-silos
    animation entry 1s
</style>