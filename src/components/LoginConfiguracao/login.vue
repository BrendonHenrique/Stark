<template>
  <div class="q-ma-lg row">
    <q-form 
        @submit="onSubmit"
        class="col-xs-12 col-sm-6 col-md-5 col-lg-3 absolute-center q-gutter-md">
      <q-card class="login-painel">
        
        <!-- card header -->
        <q-card-section class="bg-secondary text-white">
            <div class="text-subtitle1 text-center" >
                Acessar configurações do silo
            </div>
        </q-card-section>
        <!--  -->

        <!-- card body -->
        <q-card-section class="row q-mt-md justify-center">
          
          <!-- Login -->
          <q-input filled class="q-mt-md col-12" autofocus 
          v-model="user.login" label="Login" :rules="[val => !!val || 'Insira o login']">
            <template v-slot:append>
              <q-icon name="person" />
            </template>
          </q-input>
          <!--  -->

          <!-- Senha -->
          <q-input filled class="q-mt-lg col-12" v-model="user.senha" label="Senha"
            :rules="[val => !!val || 'Insira a senha']" :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" 
              class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <!--  -->
        
        </q-card-section>
        <!--  -->
        
        <!-- Submit button -->
        <q-card-actions>
            <q-btn class="q-ma-md absolute-bottom-right" color="secondary"
            icon-right="send"  label="Acessar"   type="submit" />
        </q-card-actions>
        <!--  -->

      </q-card>
    </q-form>
  </div>

</template>

<script>
  import auth, {hierarchy} from '../../services/Auth'
  import { Decrypt } from '../../services/Crypt'
  import NotifyUser from '../../services/NotifyUser'

  export default {
    data() {
      return {
        user: {
          login: '',
          senha: '',
          hierarchy: '',
        },
        isPwd: true,
        tokenExample: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      }
    },
    created() {
      if (auth.hasLoginAndPassword()) {
        this.checkHierarchy();
      }
    },
    methods: {
      checkHierarchy(){
        Object.assign(this.user, auth.getAuthenticatedUser())
        if(this.user.hierarchy === 'GARTEN'){
          this.$emit('authenticatedUser', {
            rules:['cores','configuracoes-silo'],
            user:this.user
          });
        }else if(this.user.hierarchy === 'SUPERVISOR'){
          this.$emit('authenticatedUser', {
            rules:['cores','peso-das-sacas'],
            user:this.user
          })
        }else if(this.user.hierarchy === 'OPERADOR'){
          this.$emit('authenticatedUser', {
            rules:[],
            user:this.user
          });
        }
      },  
      onSubmit() {
        auth.authenticateUser(this.user, this.tokenExample);
        this.checkHierarchy();
      },
    },
  }

</script>

<style lang="stylus" >
  .login-painel 
    height 380px
    animation entry 1s linear
    font-family 'Libre Caslon Text', serif
    box-shadow 0 0 8px 1px #eae5e5

</style>
