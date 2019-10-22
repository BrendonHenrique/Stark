<template>
    <div>
       <!-- Header do card de funções -->
       <header-funcoes />
       <!--  -->
        
        <!-- Card de funções -->
        <div v-show="!isFlipped">
                        
            <!-- Select com as opções de aeração -->
            <select-funcoes 
                :listaDeLabels="listaDeLabels"
                @selecionarOpcao="selecionarOpcao"
            />
            <!--  -->
            
            <!-- Parte do card com a função de aeração selecionada  -->
            <div class="bg-grey-3 text-grey-9 card-aeracao-ativa" 
            style="font-size: 18px;">

                <label-funcao-selecionada 
                :funcaoSelecionada="funcaoSelecionada" />

                <!-- Sub container para função semi automática e automática -->
                <div class='container-funcao-selecionada q-mt-sm' 
                v-show=' 
                    funcaoSelecionada === "Automática" || 
                    funcaoSelecionada === "Semi Automática" ||
                    funcaoSelecionada === "Secagem" ||
                    funcaoSelecionada === "Conservação"'
                >
                    <!-- aeração automática -->
                    <div v-show='
                    funcaoSelecionada === "Automática"||
                    funcaoSelecionada === "Secagem"||
                    funcaoSelecionada === "Conservação"'
                    class="row justify-center q-gutter-sm" > 
                        <q-btn 
                            label="Secagem" 
                            @click="ativarFuncaoAutomatica('Secagem') ">
                            <q-icon 
                            v-show="funcaoSelecionada === 'Secagem'"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                        </q-btn>
                        <q-btn 
                            label="Conservação" 
                            @click="ativarFuncaoAutomatica('Conservação')">
                            <q-icon 
                            v-show="funcaoSelecionada === 'Conservação'"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                        </q-btn>
                    </div>
                    <!--  -->

                    <!-- Aeração Semi automática -->
                    <div v-show='funcaoSelecionada == "Semi Automática"'>
                        <q-form @submit="salvarInfosAmbiente">
                            <div class='row justify-between q-gutter-md q-pa-sm'>
                                <q-input 
                                v-model.number="novasInfosAmbiente.umidade_relativa_do_ar_max"
                                :rules="[  
                                    val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                                    val =>  val > this.novasInfosAmbiente.umidade_relativa_do_ar_min || 'O valor de umidade máxima deve ser maior que a mínima'
                                ]"
                                class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                                label="UA MAX" suffix="%"/>
                                <q-input 
                                v-model.number="novasInfosAmbiente.umidade_relativa_do_ar_min"
                                :rules="[  
                                    val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                                    val =>  val < this.novasInfosAmbiente.umidade_relativa_do_ar_max || 'O valor de umidade mínima deve ser menor que a máxima'
                                ]"
                                class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                                label="UA MIN" suffix="%"/>
                                <q-input 
                                v-model.number="novasInfosAmbiente.temperatura_ambiente_max"
                                :rules="[  val =>  !!val || 'Insira um valor de temperatura válido']"
                                class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-g-3" 
                                label="TA MAX" suffix="ºC"/>
                            </div>
                            <div class="row justify-center q-mt-lg">
                                <q-btn 
                                class="save-button"
                                label="Salvar" 
                                text-color="grey-9" 
                                type="submit" />
                            </div>
                        </q-form>
                    </div>
                    <!-- Aeração semi automática -->

                </div>
                <!--  -->

            </div>
            <!--  -->
        </div>
        <!--  -->
    </div>
</template>

<script> 

import dialogPromise from  '../../../services/DialogPromise';
import NotifyUser from '../../../services/NotifyUser';
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
            aerador: {},
            auxFuncaoAutomatica: '',
        }
    }, 
    methods:{
        ...mapActions('silos',['update_funcao_de_aeracao']),
        ...mapActions('ambiente',['update_infos_ambiente']),
        
        getAerador(Index = this.index_silo){
            this.aerador = this.get_aerador(Index);
            this.funcaoSelecionada = this.aerador.funcaoSelecionada;
        },

        selecionarOpcao (opcaoSelecionada) {
            dialogPromise(`Iniciar aeração ${opcaoSelecionada}?`)
            .then(()=> {
                this.funcaoSelecionada = opcaoSelecionada
                NotifyUser.success(`Aeração ${opcaoSelecionada} ligada`);
            });
        },   
         
        salvarInfosAmbiente(){
            dialogPromise('Deseja salvar as informações ?')
            .then(() => this.update_infos_ambiente(this.novasInfosAmbiente));
        },

        ativarFuncaoAutomatica(funcaoSelecionada){
            if(this.auxFuncaoAutomatica == this.funcaoSelecionada){
                this.enviarFuncaoDeAeracaoParaStore('Automática');
                this.funcaoSelecionada = 'Automática'
            }else{
                this.funcaoSelecionada = funcaoSelecionada;
                this.auxFuncaoAutomatica = this.funcaoSelecionada;
                this.enviarFuncaoDeAeracaoParaStore(this.funcaoSelecionada);
                NotifyUser.success(`Aeração automática por ${funcaoSelecionada} ligada`)
            }
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
        ...mapGetters('ambiente',['get_infos_ambiente']),
        listaDeLabels(){
            return this.get_aerador(this.index_silo).funcoes.map( element => element.label);
        }
    },
    watch:{ 
        index_silo(newValue){
            this.getAerador(newValue);
        },
        funcaoSelecionada(funcaoAtual, antigaFuncao){
            if(funcaoAtual!=antigaFuncao){
                if(funcaoAtual == 'Manual'){
                    this.$emit('funcaoManualSelecionada',  true);
                }else{
                    this.$emit('funcaoManualSelecionada',  false);
                }
                this.enviarFuncaoDeAeracaoParaStore(funcaoAtual)
            }
        }
    },
    mounted(){
        this.getAerador();
        Object.assign(this.novasInfosAmbiente, this.get_infos_ambiente());
    },
    components:{
        'save-button': require('../../Shared/SaveButton').default,
        'header-funcoes': require('./stateless/HeaderFuncoes').default,
        'select-funcoes': require('./SelectFuncoes').default,
        'label-funcao-selecionada': require('./LabelFuncaoSelecionada').default,
    }
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
        padding 10px 0
    
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
