<template>
    <div>
       
       <!-- Header do card de funções -->
       <q-banner dense inline-actions class="bg-primary text-center funcoes-header">
            <span class="text-h6 text-grey-3">
                Funcoes
            </span>
            <template v-slot:action>
                <q-img src="../../../assets/icons/settings.png" 
                class="funcoes-image" />
            </template>
        </q-banner>
        <!--  -->
        
        <!-- Card de funções -->
        <div v-show="!isFlipped">
                        
            <!-- Select com os options das funções de aeração possíveis -->
            <p class="text-center text-subtitle1 q-pa-sm text-grey-10">
                Selecione abaixo uma função para aerar o silo
            </p>
            <div class=" row justify-center q-pa-md">
                <q-btn-dropdown glossy dense outline
                color="primary" label="Selecionar">
                    <q-list>
                        <q-item v-for="item in listaDeLabels"
                        :key="item"
                        clickable v-close-popup 
                        @click="selecionarOpcao(item)">
                            <q-item-section>
                                <q-item-label>{{item}}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>
            <!--  -->
            
            <!-- Parte do card com a função de aeração selecionada  -->
            <div class="bg-grey-3 text-grey-9 card-aeracao-ativa" style="font-size: 18px;">

                <div class='container-funcao-selecionada column items-center'>
                    <span class="q-mb-sm" style="text-align: center;">
                        Função selecionada 
                    </span>

                    <div class="row">
                        <strong class="q-mt-md text-h6">
                            {{funcaoSelecionada}}
                        </strong>
                        <q-icon 
                            v-show="funcaoSelecionada != '' "
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"
                        />
                    </div>
                    
                    
                </div>
            
                <div class='container-funcao-selecionada q-mt-sm' 
                v-show=' funcaoSelecionada == "Automática" || funcaoSelecionada == "Semi Automática"'>
                    
                    <!-- aeração automática -->
                    <div v-show='funcaoSelecionada == "Automática"' class="row justify-center q-gutter-sm" > 

                        <q-btn 
                            label="Secagem" 
                            @click="ativarFuncaoAutomatica('Secagem') ">
                            <q-icon 
                            v-show="funcaoAutomatica == 'Secagem'"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                        </q-btn>

                        <q-btn 
                            label="Conservação" 
                            @click="ativarFuncaoAutomatica('Conservação')">
                            <q-icon 
                            v-show="funcaoAutomatica == 'Conservação'"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                        </q-btn>
                        

                    </div>
                    <!--  -->

                    <!-- aeração Semi automática -->
                    <div v-show='funcaoSelecionada == "Semi Automática"'>
                        
                        <q-form @submit="salvarInfosAmbiente">
                            <div class='row justify-between q-gutter-md q-pa-sm'>
                                
                                <!-- Valor de umidade ambiente máxima -->
                                <q-input 
                                v-model.number="novasInfosAmbiente.umidade_relativa_do_ar_max"
                                :rules="[  
                                    val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                                    val =>  val > this.novasInfosAmbiente.umidade_relativa_do_ar_min || 'O valor de umidade máxima deve ser maior que a mínima'
                                ]"
                                class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                                label="UA MAX" suffix="%"/>
                                <!--  -->
                            
                                <!-- Valor de umidade ambiente mínima -->
                                <q-input 
                                v-model.number="novasInfosAmbiente.umidade_relativa_do_ar_min"
                                :rules="[  
                                    val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                                    val =>  val < this.novasInfosAmbiente.umidade_relativa_do_ar_max || 'O valor de umidade mínima deve ser menor que a máxima'
                                ]"
                                class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                                label="UA MIN" suffix="%"/>
                                <!--  -->
                            
                                <!-- Valor de temperatura ambiente máxima -->
                                <q-input 
                                v-model.number="novasInfosAmbiente.temperatura_ambiente_max"
                                :rules="[  val =>  !!val || 'Insira um valor de temperatura válido']"
                                class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-g-3" 
                                label="TA MAX" suffix="ºC"/>
                                <!--  -->
 
                            </div>
                            
                            <!-- botão para enviar os valores acima para o store -->
                            <div class="row justify-center q-mt-lg">
                                <q-btn 
                                class="save-button"
                                :label="funcaoSemiAutomaticaLigada ? 'Desativar' : 'Ativar'" 
                                text-color="grey-9" 
                                type="submit">
                                    <q-icon 
                                    v-show="funcaoSemiAutomaticaLigada"
                                    style="margin-left:5px;"
                                    color="red"
                                    class="icon-funcao-ativa"
                                    name="settings"/>
                                </q-btn>
                            </div>
                            <!--  -->
                            
                        </q-form>

                    </div>
                    <!--  -->

                </div>
            </div>
            <!--  -->
        </div>
        <!--  -->
    </div>
</template>

<script> 

import InfosAmbienteController from '../../../controllers/InfosAmbiente/Controller'
import NotifyUsers from '../../../services/NotifyUser'
import dialogPromise from  '../../../services/DialogPromise'

import {mapGetters, mapActions} from 'vuex';

export default {
    props:['isFlipped','index_silo'], 
    data(){
        return{ 
            funcaoSelecionada:'', 
            novasInfosAmbiente:{
                umidade_relativa_do_ar_max: '',
                umidade_relativa_do_ar_min: '',
                temperatura_ambiente_max: '',
            },
            funcaoAutomatica:'',
            funcaoSemiAutomaticaLigada : false,
            aerador: {},
            listaDeLabels:[],
        }
    }, 
    mounted(){
        this.getAerador();
        this.getListaDeLabels();
        this.getFuncaoSelecionada();
        Object.assign(this.novasInfosAmbiente, InfosAmbienteController.getInfosAmbiente());
    },
    methods:{
        ...mapActions('silos',['update_funcao_de_aeracao','update_funcao_semi_automatica']),

        getListaDeLabels(){
            this.listaDeLabels = this.aerador.funcoes.map( element => element.label);
        },
        
        getAerador(){
            this.aerador = this.get_aerador(this.index_silo);
        },

        getFuncaoSelecionada(){
            this.funcaoSelecionada = this.aerador.funcaoSelecionada;
        },

        selecionarOpcao (opcaoSelecionada) {
            dialogPromise(`Iniciar aeração ${opcaoSelecionada}?`)
            .then(()=>{
                this.funcaoSelecionada = opcaoSelecionada
            })
        },   
         
        salvarInfosAmbiente(){
            if(this.funcaoSemiAutomaticaLigada){ // Funcao já ligada então pergunta se quer desligar
                dialogPromise('Desativar aeração semi automática ?') //apenas desliga
                .then(()=>{
                    this.funcaoSemiAutomaticaLigada = false;
                });
            }else{ //Função desliga então pergunta se quer ligar
                dialogPromise('Ativar aeração semi automática ?') //liga e envia o form
                .then(()=>{
                    InfosAmbienteController.updateInfosAmbiente(this.novasInfosAmbiente);
                    this.funcaoSemiAutomaticaLigada = true
                });
            }
            this.update_funcao_semi_automatica({
                indexSilo : this.index_silo, 
                onOff : !this.funcaoSemiAutomaticaLigada,
            });
        },

        ativarFuncaoAutomatica(funcaoSelecionada){
            // Se nova função for igual a antiga então desabilita
            if(this.funcaoAutomatica == funcaoSelecionada){
                this.funcaoAutomatica = ''
            }else{//se não habilita normal e armazena no store
                this.funcaoAutomatica = funcaoSelecionada
            }
            this.update_funcao_de_aeracao({
                indexSilo : this.index_silo, 
                funcaoSelecionada : this.funcaoAutomatica,
            });
        },
        
        enviarFuncaoDeAeracaoParaStore(nomeDafuncao){
            this.update_funcao_de_aeracao({
                indexSilo : this.index_silo, 
                funcaoSelecionada : nomeDafuncao,
            });
        },
    },
    computed:{
        ...mapGetters('silos',['get_aerador']),
    },
    watch:{ 
        index_silo(newValue){
            this.getAerador();
            this.getFuncaoSelecionada();
        },
        funcaoSelecionada(funcaoAtual, antigaFuncao){
            if(funcaoAtual!=antigaFuncao){
                // Se for função manual possibilito o usuário ligar ou desligar o aerador
                if(funcaoAtual == 'Manual'){
                    this.$emit('funcaoManualSelecionada',  true);
                    this.enviarFuncaoDeAeracaoParaStore('Manual')
                }else{
                    this.$emit('funcaoManualSelecionada',  false);
                    this.enviarFuncaoDeAeracaoParaStore(funcaoAtual)
                }
            }
        }
    },
    components:{
        'save-button': require('../../Shared/SaveButton').default,
    },
}
</script>

<style lang="stylus">

    .infos-equilibrio-input
        font-size 16px

    .semi-automatica-inputs
        font-size 20px

    .show
        display initial 

    .hide
        display none
    
    .funcoes-header
        font-family 'Libre Caslon Text', serif
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
    
    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .icon-funcao-ativa
        position relative 
        -webkit-animation rotating 5s linear infinite
        -moz-animation rotating 5s linear infinite
        -ms-animation rotating 5s linear infinite
        -o-animation rotating 5s linear infinite
        animation rotating 5s linear infinite

</style>
