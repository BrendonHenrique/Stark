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
        <q-form
          @submit="salvarAlteracoes"
          class="q-gutter-md"
        >
          <q-input outlined v-model.number="configuracoesDoSilo.capacidade" 
          :rules="[val => !!val || 'Informe a capacidade do silo em sacas']"
          input-class="text-right"
          label="Capacidade do silo"  suffix="Sacas"/>

          <q-input outlined v-model.number="configuracoesDoSilo.pesoDaSaca" 
          label="Peso da saca" suffix="Kg"
          input-class="text-right"
          :rules="[val => !!val || 'Informe o peso da saca em kilogramas']"
          />

          <q-input outlined v-model.number="configuracoesDoSilo.quantidadeDeAneis" 
          label="Quantidade de anéis"
          input-class="text-right"
          suffix="Anéis"
          :rules="[val => !!val || 'Informe a quantidade de anéis']"
          />

          <q-input outlined v-model.number="configuracoesDoSilo.pendulosPorAnel"
          label="Quantidade de pêndulos por anel"
          input-class="text-right"
          suffix="Pêndulos"
          :rules="[val => !!val || 'Informe a quantidade de pêndulos por anel']"
        />

        <!-- Botão para salvar as informações -->
        <div class="row">
          <q-space />
            <q-btn 
            label="salvar" 
            text-color="grey-9" icon-right="save" 
            type="submit" /> 
        </div>
        <!--  -->

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
  data() {
    return {
      indexSelecionado:'',
      configuracoesDoSilo:{
        capacidade:null,
        pesoDaSaca:null,
        pendulosPorAnel:null,
        quantidadeDeAneis:null,
      }
    }
  },
  methods:{
    ...mapActions('silos',['update_configuracoes']),
    getConfiguracoesAtuais(){
      let siloEncontrado = this.silo_by_id(this.indexSelecionado - 1)
      Object.assign(this.configuracoesDoSilo,siloEncontrado.configuracoesDoSilo);
    },
    salvarAlteracoes(){
      dialogPromise('Salvar as configurações do silo ?')
      .then( () => {
        // this.update_configuracoes(this.configuracoesDoSilo)
        // NotifyUsers.success('Configurações salvas com sucesso');
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

<style lang="stylus" >

</style>
