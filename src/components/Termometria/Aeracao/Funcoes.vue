<template>
    <div>
        
       <q-banner dense class="bg-primary text-center" 
        inline-actions style="border-top-left-radius: 20px;">
            <span class="text-h5 text-grey-3">
                Funcoes
            </span>
            <template v-slot:action>
                <q-img src="../../../assets/icons/settings.png" 
                style="width:34px;color:grey;" />
            </template>
        </q-banner>
  

        <q-card-section  :class="!isFlipped ? 'show' : 'hide'">
    
            <p class="text-center text-subtitle1 q-mt-sm text-grey-9">
                Selecione abaixo uma função para aerar o silo
            </p>
        
            <div class=" row justify-center q-pa-md">
                <q-btn-dropdown 
                glossy
                dense
                outline
                color="primary" label="Funções disponíveis">
                    
                    <q-list>
                        <q-item v-for="item in funcoes"
                        :key="item.label"
                        clickable v-close-popup @click="selecionarOpcao(item.label)">
                            <q-item-section>
                                <q-item-label>{{item.label}}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                    
                </q-btn-dropdown>
            </div>
        
            <q-dialog v-model="dialog" position="bottom" >
                <q-card>
                    <q-card-section class="row items-center no-wrap">
                        <div>
                            <div class="text-weight-bold">The Walker</div>
                            <div class="text-grey">Fitz & The Tantrums</div>
                        </div>
                        <q-space />
                        <q-btn flat round icon="fast_rewind" />
                        <q-btn flat round icon="pause" />
                        <q-btn flat round icon="fast_forward" />
                    </q-card-section>
                </q-card>
            </q-dialog>

        </q-card-section>

    </div>
</template>

<script> 
import {mapActions} from 'vuex'
import NotifyUsers from '../../../services/NotifyUser'

export default {
    data(){
        return{
            dialog: false
        }
    },
    props:['funcoes','isFlipped'],
    methods:{
        ...mapActions('aeracao',['update_funcoes_de_aeracao','update_possibilidades_de_aeracao']),
        
        selecionarOpcao (opcaoSelecionada) { 

            this.update_funcoes_de_aeracao(opcaoSelecionada)
            //    this.update_possibilidades_de_aeracao()
            this.dialog = true

        }
    },
    components:{
        'status-aerador': require('./StatusAerador').default
    }
}
</script>

<style lang="stylus">
    .show
        display initial 

    .hide
        display none
</style>
