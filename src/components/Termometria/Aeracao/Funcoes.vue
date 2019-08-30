<template>
    <div>
       
       <!-- Header do card de funções -->
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
        <!--  -->
        
        <!-- Card de funções -->
        <div :class="!isFlipped ? 'show' : 'hide'">
                        
            <!-- Select com os options das funções de aeração possíveis -->
            <p class="text-center text-subtitle1 q-pa-sm text-grey-10">
                Selecione abaixo uma função para aerar o silo
            </p>
            <div class=" row justify-center q-pa-md">
                <q-btn-dropdown glossy dense outline
                color="primary" label="Selecionar">
                    <q-list>
                        <!-- <q-item v-for="item in funcoes"
                        :key="item.label"
                        clickable v-close-popup 
                        @click="selecionarOpcao(item.label)">
                            <q-item-section>
                                <q-item-label>{{item.label}}</q-item-label>
                            </q-item-section>
                        </q-item> -->
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
                    <strong>
                        {{funcaoSelecionada}}   
                    </strong>
                </div>
            
                <div class='container-funcao-selecionada q-mt-sm'>
                    
                    <!-- aeração manual -->
                    <div v-show='funcaoSelecionada == "Manual"' 
                        class="column items-center">
                        Ligar/Desligar 
                        <q-toggle v-model="funcaoManualLigada"  :label="funcaoManualLigada ? 'Ligada' : 'Desligada'"
                        color="green" checked-icon="check" unchecked-icon="clear"
                        />
                    </div>
                    <!--  -->

                    <!-- aeração automática -->
                    <div v-show='funcaoSelecionada == "Automática"' class="row justify-center q-gutter-sm" > 

                        <q-btn 
                            label="Secagem" 
                            @click="ativarFuncaoAutomaticaPor('Secagem') ">
                            <q-icon 
                            color="red"
                            class="icon-funcao-automatica"
                            v-show="funcaoSecagemLigada"
                            name="settings"/>
                        </q-btn>

                        <q-btn 
                            label="Conservação" 
                            @click="ativarFuncaoAutomaticaPor('Conservação')"
                            >
                            <q-icon 
                            color="red"
                            class="icon-funcao-automatica"
                            v-show="funcaoConservacaoLigada"
                            name="settings"/>
                        </q-btn>

                    </div>
                    <!--  -->

                    <!-- aeração Semi automática -->
                    <div  class='row justify-center q-gutter-lg q-pa-sm' v-show='funcaoSelecionada == "Semi Automática"'>
                        
                        <!-- Valor de umidade ambiente máxima -->
                        <q-input 
                        v-model.number="novasInfosAmbiente.ua_max"
                        :rules="[  
                            val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                            val =>  val > this.novasInfosAmbiente.ua_min || 'O valor de umidade máxima deve ser maior que a mínima'
                        ]"
                        class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                        label="UA MAX" suffix="%"/>
                        <!--  -->
                        
                        <!-- Valor de umidade ambiente mínima -->
                        <q-input 
                        v-model.number="novasInfosAmbiente.ua_min"
                        :rules="[  
                            val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                            val =>  val < this.novasInfosAmbiente.ua_max || 'O valor de umidade mínima deve ser menor que a máxima'
                        ]"
                        class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                        label="UA MIN" suffix="%"/>
                        <!--  -->
                        
                        <!-- Valor de temperatura ambiente máxima -->
                        <q-input 
                        v-model.number="novasInfosAmbiente.ta_max"
                        :rules="[  val =>  !!val || 'Insira um valor de temperatura válido']"
                        class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-g-3 q-mb-sm" 
                        label="TA MAX" suffix="ºC"/>
                        <!--  -->

                        <!-- Aviso caso os valores não sejam válidos -->
                        <q-tooltip v-if="valorIncorreto">
                            <span class="infos-equilibrio-input">
                                Insira um valor válido nas informações de ambiente 
                            </span>
                        </q-tooltip>
                        <!--  -->
                        
                        <!-- botão para enviar os valores acima para vuex -->
                        <save-button
                        class="q-mt-xl"
                        :isDisabled="valorIncorreto"
                        @salvarAlteracoes="salvarInfosAmbiente" 
                        :mensagem="`Deseja salvar as informações de ambiente e ativar a aeração semi automática  ?`"
                        />
                        <!--  -->

                    </div>
                    <!--  -->

                    <!-- aeração forçada -->
                    <div v-show='funcaoSelecionada == "Forçado" ' class="column items-center">
                        Ligar/Desligar 
                        <q-toggle v-model="funcaoForcadoLigada" :label="funcaoForcadoLigada ? 'Ligada' : 'Desligada'"
                        color="green" checked-icon="check" unchecked-icon="clear"
                        />
                    </div>
                    <!--  -->

                    <!-- Expurgo -->
                    <div v-show='funcaoSelecionada == "Expurgo"' class="column items-center">
                        Ligar/Desligar 
                        <q-toggle v-model="funcaoExpurgoLigada" :label="funcaoExpurgoLigada ? 'Ligada' : 'Desligada'"
                        color="green" checked-icon="check" unchecked-icon="clear"
                        />
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
import {mapActions, mapGetters} from 'vuex'
import NotifyUsers from '../../../services/NotifyUser'
import dialogPromise from  '../../../services/DialogPromise'

export default {
    props:['isFlipped','index_silo'], 
    data(){
        return{ 
            funcaoSelecionada:'', 
            ultimaFuncaoAutomatica: '',
            funcaoManualLigada:false,
            funcaoConservacaoLigada:false,
            funcaoSecagemLigada: false,
            funcaoSemiAutomaticaLigada: false,
            funcaoAutomaticaLigada: false,
            funcaoForcadoLigada: false,
            funcaoExpurgoLigada: false,
            novasInfosAmbiente:{
                ua_max: 0,
                ua_min: 0,
                ta_max: 0,
            },
            valorIncorreto: true
        }
    }, 
    mounted(){
        // Inicialização da view com a função ativada 
        // if(this.get_funcao_de_aeracao_ativa.length > 0) this.funcaoSelecionada = this.get_funcao_de_aeracao_ativa[0].label 
        
        // Atualização da view com as informações do store
        this.updateView() 

        // Inicialização das informações dos inputs para informações de ambiente da aeração semi automática
        Object.assign(this.novasInfosAmbiente, this.get_infos_ambiente)


        // Atualização da variável com a função automatica ligada para prevenir 
        // avisos desnecessários se o usuário ativar a mesma função automática duas vezes
        if(this.funcaoAutomaticaLigada){
            if(this.funcaoConservacaoLigada){
                this.ultimaFuncaoAutomatica = 'Conservação'
            }else{
                this.ultimaFuncaoAutomatica = 'Secagem'
            }
        }

    },
    methods:{
        ...mapActions('aeracao',
        ['update_infos_ambiente','update_funcao_de_aeracao']),
        ...mapActions('integracao',['update_funcao_de_aeracao']),
        
        // Verifica se possui uma função ativa no momento , se houver será possível avisar o usuário que a função será sobrescrita quando ele selecionar outra 
        hasFuncaoAtiva(){
            if(this.funcaoManualLigada || this.funcaoConservacaoLigada || this.funcaoSecagemLigada 
                || this.funcaoSemiAutomaticaLigada || this.funcaoForcadoLigada || this.funcaoExpurgoLigada){
                return true
            }else{
                return false
            }            
        },
        
        // Interface de aplicação entre o q-select na view e o state/vuex 
        selecionarOpcao (opcaoSelecionada) {

            // Se não houver nenhuma função selecionada, não é necessário confirmar que a função será sobrescrita 
            if(this.funcaoSelecionada == ''){
                this.funcaoSelecionada = opcaoSelecionada
            }else{

                // Se houver é necessário que o usuário confirme a sobrescrita e então é feita a atualização  
                if(this.hasFuncaoAtiva() && this.funcaoSelecionada != opcaoSelecionada){
                    dialogPromise(`Você selecionou outro processo de aeração, deseja realmente alterar o processo ? O processo atual será desligado.`)
                    .then( () => this.funcaoSelecionada = opcaoSelecionada )
                    .catch( () => NotifyUsers.info('Função de aeração não alterada.'))
                }else{
                    this.funcaoSelecionada = opcaoSelecionada
                }
            }
            this.updateView()
        },   

        // Envia o processo para o store e lá ativa a função automática e o processo a ser utilizado dentro dela. 
        ativarFuncaoAutomaticaPor(funcao){
            
            // Teste permite não dar aviso desnecessário , por exemplo caso o usuário clique no mesmo processo automático de aeração duas vezes
            if(this.ultimaFuncaoAutomatica != funcao){

                dialogPromise(`Deseja confirmar o inicio do processo de aeração por ${funcao} ?`)
                .then( () =>{
                    
                    // Inicialização do processo de aeração automática
                    this.funcaoAutomaticaLigada = true

                    // Me certifico de que não irei possuir dois processos automáticos ligados ao mesmo tempo
                    if(funcao == 'Secagem' && !this.funcaoSecagemLigada ){
                        this.funcaoSecagemLigada = true
                        this.funcaoConservacaoLigada = false
                    }else if(funcao == 'Conservação' && !this.funcaoConservacaoLigada){
                        this.funcaoConservacaoLigada = true
                        this.funcaoSecagemLigada = false
                    }
                    NotifyUsers.info(`Processo de aeração por ${funcao} iniciada`)
                    this.ultimaFuncaoAutomatica = funcao
                
                })
                .catch( ()=>{
                    NotifyUsers.info(`Processo de aeração por ${funcao} cancelada`)
                }); 
            
            }
        },

        // Salva as informações de ambiente da função de aeração semi automática
        salvarInfosAmbiente(){
            this.funcaoSemiAutomaticaLigada = true;
            this.update_infos_ambiente(this.novasInfosAmbiente);
        },
        
        // Atualiza a view com as informações do store
        updateView(){
            // this.funcaoManualLigada = this.funcoes[0].ligada
            // this.funcaoConservacaoLigada = this.funcoes[1].processos[0].ligada
            // this.funcaoSecagemLigada = this.funcoes[1].processos[1].ligada
            // this.funcaoSemiAutomaticaLigada = this.funcoes[2].ligada
            // this.funcaoForcadoLigada = this.funcoes[3].ligada
            // this.funcaoExpurgoLigada = this.funcoes[4].ligada
        }
    },
    computed:{
        // ...mapGetters('aeracao',['get_funcao_de_aeracao_ativa','get_infos_ambiente']), 

        // Retorna a umidade mínima de dentro do objeto
        UmidadeAmbienteMinima(){
            return this.novasInfosAmbiente.ua_min;    
        },
        
        // Retorna a umidade máxima de dentro do objeto
        UmidadeAmbienteMaxima(){
            return this.novasInfosAmbiente.ua_max;    
        },
        // Retorna  a temperatura de ambiente máxima de dentro do objeto
        TemperaturaAmbienteMaxima(){
            return this.novasInfosAmbiente.ta_max;    
        }
    },
    watch:{ 
        // Método serve para prevenir duas funções de aeração ligadas ao mesmo tempo, observa o ligamento de uma função e desliga as demais caso estejam ligadas   
        funcaoSelecionada(funcaoAtual, antigaFuncao){ 
            if(antigaFuncao == 'Manual' && this.funcaoManualLigada) this.funcaoManualLigada = false;
            if(antigaFuncao == 'Automática' ){

                this.funcaoAutomaticaLigada = false

                if(this.funcaoConservacaoLigada){
                    this.funcaoConservacaoLigada = false
                }else if(this.funcaoSecagemLigada){
                    this.funcaoSecagemLigada = false
                }
            }
            if(antigaFuncao == 'Semi Automática' && this.funcaoSemiAutomaticaLigada ) this.funcaoSemiAutomaticaLigada = false
            if(antigaFuncao == 'Forçado' && this.funcaoForcadoLigada) this.funcaoForcadoLigada = false
            if(antigaFuncao == 'Expurgo' && this.funcaoExpurgoLigada) this.funcaoExpurgoLigada = false
        },
        
        // As demais funções abaixo fazem o trigger de on/off entre as aerações e envia para o store no vuex 
        // funcaoSemiAutomaticaLigada(valor){
        //     this.set_funcao_semi_automatica(valor)
        // },
        // funcaoExpurgoLigada(valor){
        //     if(valor){
        //         NotifyUsers.info('Função Expurgo ligada')
        //     }else{
        //         NotifyUsers.info('Função Expurgo desligada')
        //     }
        //     this.set_funcao_de_expurgo(valor)
        // },
        // funcaoForcadoLigada(valor){
        //     if(valor){
        //         NotifyUsers.info('Função Forçada ligada')
        //     }else{
        //         NotifyUsers.info('Função Forçada desligada')
        //     }
        //     this.set_funcao_forcada(valor)
        // },
        // funcaoManualLigada(valor){
        //     if(valor){
        //         NotifyUsers.info('Função Manual ligada')
        //     }else{
        //         NotifyUsers.info('Função Manual desligada')
        //     }
        //     this.set_funcao_manual(valor)
        // },
        // funcaoAutomaticaLigada(valor){
        //     this.set_funcao_automatica(valor)
        // },
        // funcaoConservacaoLigada(valor){
        //     if(!valor){
        //         NotifyUsers.info('Função automática por Conservação desligada')
        //     }
        //     this.set_funcao_automatica_por_conservacao(valor)
        // },
        // funcaoSecagemLigada(valor){
        //     if(!valor){
        //         NotifyUsers.info('Função automática por Secagem desligada')
        //     }
        //     this.set_funcao_automatica_por_secagem(valor)
        // },

        // Verificação de valores válidos para desabilitar o botão de salvar
        UmidadeAmbienteMinima(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true;
            valor > this.novasInfosAmbiente.ua_max ? this.valorIncorreto = true :  this.valorIncorreto = false;
        },
        UmidadeAmbienteMaxima(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true;
            valor < this.novasInfosAmbiente.ua_min ? this.valorIncorreto = true :  this.valorIncorreto = false;
        },
        TemperaturaAmbienteMaxima(valor){
            valor == '' ? this.valorIncorreto = true :  this.valorIncorreto = false;
        },

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

    .icon-funcao-automatica
        position relative 
        -webkit-animation rotating 5s linear infinite
        -moz-animation rotating 5s linear infinite
        -ms-animation rotating 5s linear infinite
        -o-animation rotating 5s linear infinite
        animation rotating 5s linear infinite

</style>
