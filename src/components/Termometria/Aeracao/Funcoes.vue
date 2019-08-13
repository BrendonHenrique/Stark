<template>
    <div>
       <q-banner 
        dense 
        inline-actions 
        class="bg-primary text-center funcoes-header">
            <span class="text-h6 text-grey-3">
                Funcoes
            </span>
            <template v-slot:action>
                <q-img src="../../../assets/icons/settings.png" 
                class="funcoes-image" />
            </template>
        </q-banner>
        <div :class="!isFlipped ? 'show' : 'hide'">
            <p class="text-center text-subtitle1 q-mt-sm text-grey-10">
                Selecione abaixo uma função para aerar o silo
            </p>
            <div class=" row justify-center q-pa-md">
                <q-btn-dropdown glossy dense outline
                color="primary" label="Selecionar">
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
            <div 
            v-if="this.get_funcao_de_aeracao_ativa.length > 0"
            class="bg-grey-3 text-grey-9 card-aeracao-ativa" style="font-size: 18px;">

                <div class='container-funcao-selecionada column items-center'>
                    <span class="q-mb-sm">
                        Função selecionada 
                    </span>
                    <strong>
                        {{funcaoAtiva}}   
                    </strong>
                </div>
            
                <div class='container-funcao-selecionada q-mt-sm 
                column items-center'>
                    
                    <div v-if='funcaoAtiva == "Manual" '>
                        Ligar/Desligar 
                        <q-toggle v-model="funcaoManual" />
                    </div>

                    <div class="row q-gutter-lg" v-if='funcaoAtiva == "Automática" '>
                        <q-btn label="Conservação" />
                        <q-btn label="Secagem" />
                    </div>
          
                    <div class='row justify-between q-gutter-sm' 
                    v-if='funcaoAtiva== "Semi Automática" '>
                    
                        <q-input class="col-4">
                            <template v-slot:before>
                                <q-icon size="26px" name="schedule" />
                            </template>
                            <template v-slot:hint>
                                <span class="text-subtitle1">
                                    Atual
                                </span>
                            </template>
                        </q-input>
                    
                        <q-input class="col-3">

                        </q-input>
                        <q-input class="col-3">

                        </q-input>
                    </div>

                    <div v-if='funcaoAtiva == "Forçado" '>
                        Forçado
                    </div>

                    <div v-if='funcaoAtiva== "Expurgo" '>
                        Expurgo
                    </div>

                </div>
            
            </div>
        </div>
    </div>
</template>

<script> 
import {mapActions, mapGetters} from 'vuex'
import NotifyUsers from '../../../services/NotifyUser'

export default {
    props:['funcoes','isFlipped'], 
    data(){
        return{ 
            funcaoSelecionada:'',
            funcaoManual:'',
        }
    },
    methods:{
        ...mapActions('aeracao',['update_funcoes_de_aeracao']),
        selecionarOpcao (opcaoSelecionada) { 
            this.update_funcoes_de_aeracao(opcaoSelecionada)
            this.funcaoSelecionada = opcaoSelecionada 
        }, 
    },
    computed:{
        ...mapGetters('aeracao',['get_funcao_de_aeracao_ativa']), 
        funcaoAtiva(){
            return this.get_funcao_de_aeracao_ativa[0].label 
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
    
    .funcoes-header
        border-top-left-radius 20px
    
    .funcoes-image 
        width 34px 
        color grey 

    .container-funcao-selecionada
        border-left 4px solid #b71212
        width 100%
        padding 10px 5px
    
    .card-aeracao-ativa
        border-bottom-right-radius 20px

            
</style>
