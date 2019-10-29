<template>
  <q-layout>
    <q-page-container>
      <q-page>

        <!-- Tabs para navegação na página de configurações -->
        <div class="tab-menu"  v-show="permissions.length > 0" >
          <q-tabs 
            dense inline-label v-model="tab" align="justify" 
            active-color="secundary" indicator-color="secundary"
            narrow-indicator class="text-grey-4 menu-bar-configuraces">
            <q-tab v-for="item in tabs " :key="item.name" :name="item.name" :label="item.label"  />
          </q-tabs>
        </div>
        <!--  -->
        

        <!-- card com as credenciais do usuario -->
        <q-card class="row justify-between items-center card-informativo-user
        bg-secondary text-white" 
        style="margin-top:5px;height:3rem;margin:0 auto;box-shadow:0 0 5px 0 #eae5e5;" 
        v-show="login">

          <q-btn round size="14px" class="q-ml-sm" title="Informações do usuário">
            <q-icon name="person" size="40px"/>
          </q-btn>
          <span> 
            {{hierarchy}}
          </span>
          <span> 
            LOGIN : {{login}}
          </span>
          <q-btn round size="14px" class="q-mr-sm" title="Fazer logout" @click="logout">
            <q-icon name="exit_to_app" size="35px"/>
          </q-btn>
            
        </q-card>
        <!--  -->

        <q-tab-panels class="bg-grey-10" v-model="tab"
        v-show="permissions.length > 0" > 

          <!-- Acesso as configurações de cores  -->
          <q-tab-panel  name="cores"> 
              <cores  />
          </q-tab-panel>
          <!--  -->

          <!-- Acesso as configurações dos silos  -->
          <q-tab-panel  name="configuracoes-silo">
              <configurador-silos :configuracaoRestritiva="configuracaoRestritiva" />
          </q-tab-panel>
          <!--  -->

        </q-tab-panels>

        <login-configuracao 
          @authenticatedUser="checkPermissions" 
          v-show="permissions.length === 0" 
        />

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {Decrypt} from '../services/Crypt';
import auth from '../services/Auth';
import dialogPromise from '../services/DialogPromise'

export default {
  data(){
    return{
      tab: 'cores',
      tabs: [],
      permissions: [],
      configuracaoRestritiva:[],
      login:'',
      hierarchy:'',
    }
  },
  methods:{
    logout(){
      dialogPromise('Fazer logout ?')
      .then( () => {   
        this.permissions = [];
        this.login = '';
        this.hierarchy = '';
        auth.removeCredentials();
      })
      .catch(() => {});
    },  
    checkPermissions(authenticatedInfos){
      
      const { rules, user } = authenticatedInfos;
      
      this.login = user.login;
      this.hierarchy = user.hierarchy;
      
      this.permissions = rules;
      this.tabs = [];
      
      this.permissions.forEach( permission => {
       
        if(permission === 'cores'){
          this.tabs.push({
              name:'cores',
              label:'Legenda de cores'
            }
          );
        }

        if(permission === 'configuracoes-silo' || permission === 'peso-das-sacas'){
          this.configuracaoRestritiva = [];
          this.tabs.push({
              name:'configuracoes-silo',
              label:'Configurações do silo'
            }
          );
          this.configuracaoRestritiva.push(permission);
        }

      });
    }
  }, 
  components:{
    'cores': require('../components/Termometria/LegendaDeCores/Cores').default,
    'configurador-silos': require('../components/Silos/Configurador').default,
    'login-configuracao': require('../components/LoginConfiguracao/login').default,
  }  
}
</script>

<style lang="stylus" >

  .menu-bar-configuraces
    background-color $primary
    z-index 5
    font-family 'Libre Caslon Text', serif
  
  .card-informativo-user
    z-index 5
    font-family 'Libre Caslon Text', serif

</style>
