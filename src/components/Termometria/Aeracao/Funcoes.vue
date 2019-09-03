<template>
    <div>
       
       <!-- Header do card de funções -->
       <q-banner dense inline-actions 
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
        <div v-show="!isFlipped">
                        
            <!-- Select com os options das funções de aeração possíveis -->
            <p class="text-center text-subtitle1 q-pa-sm text-grey-10">
                Selecione abaixo uma função para aerar o silo
            </p>
            <div class=" row justify-center q-pa-md">
                <q-btn-dropdown glossy dense outline
                color="primary" label="Selecionar">
                    <q-list>
                        <q-item v-for="item in funcoes"
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
                    <strong>
                        {{funcaoSelecionada}}   
                    </strong>
                    
                </div>
            
                <div class='container-funcao-selecionada q-mt-sm'>
                    
                    <!-- aeração manual -->
                    <div v-show='funcaoSelecionada == "Manual"' 
                        class="column items-center">
                        Ligar/Desligar
                        
                        <div class="row inline">   
                            
                            <q-toggle 
                            @input="enviarFuncaoDeAeracaoParaStore('Manual',funcaoManualLigada)"
                            v-model="funcaoManualLigada"  :label="funcaoManualLigada ? 'Ligada' : 'Desligada'"
                            color="green" checked-icon="check" unchecked-icon="clear"
                            />

                            <q-icon 
                            v-show="funcaoManualLigada"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>

                        </div>
                    </div>
                    <!--  -->

                    <!-- aeração automática -->
                    <div v-show='funcaoSelecionada == "Automática"' class="row justify-center q-gutter-sm" > 

                        <q-btn 
                            label="Secagem" 
                            @click="ativarFuncaoAutomaticaPor('Secagem') ">
                            <q-icon 
                            v-show="funcaoSecagemLigada"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                        </q-btn>

                        <q-btn 
                            label="Conservação" 
                            @click="ativarFuncaoAutomaticaPor('Conservação')"
                            >
                            <q-icon 
                            v-show="funcaoConservacaoLigada"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                        </q-btn>

                    </div>
                    <!--  -->

                    <!-- aeração Semi automática -->
                    <div v-show='funcaoSelecionada == "Semi Automática"'>
                        <div class='row justify-between q-gutter-sm q-pa-sm'>
                       
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

                            <!-- Aviso caso os valores não sejam válidos -->
                            <q-tooltip v-if="valorIncorreto">
                                <span class="infos-equilibrio-input">
                                    Insira um valor válido nas informações de ambiente 
                                </span>
                            </q-tooltip>
                            <!--  -->
                        </div>
                        
                        <!-- botão para enviar os valores acima para o store -->
                        <div class="row justify-center">
                            <save-button
                            :isDisabled="valorIncorreto"
                            @salvarAlteracoes="salvarInfosAmbiente" 
                            :mensagem="`Deseja salvar as informações de ambiente e ativar a aeração semi automática  ?`"
                            />

                            <q-icon 
                            
                            style="bottom:15px;"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>

                        </div>
                        
                    </div>
                    <!--  -->

                    <!-- aeração forçada -->
                    <div v-show='funcaoSelecionada == "Forçado" ' class="column items-center">
                        Ligar/Desligar 
                        <div class='row inline'>
                            <q-toggle 
                            v-model="funcaoForcadoLigada" :label="funcaoForcadoLigada ? 'Ligada' : 'Desligada'"
                            @input="enviarFuncaoDeAeracaoParaStore('Forçado',funcaoForcadoLigada)"
                            color="green" checked-icon="check" unchecked-icon="clear"
                            />

                            <q-icon 
                            v-show="funcaoForcadoLigada"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                            </div>
                    </div>
                    <!--  -->

                    <!-- Expurgo -->
                    <div v-show='funcaoSelecionada == "Expurgo"' class="column items-center">
                        Ligar/Desligar 
                        
                        <div class="row inline">
                            <q-toggle 
                            v-model="funcaoExpurgoLigada" :label="funcaoExpurgoLigada ? 'Ligada' : 'Desligada'"
                            @input="enviarFuncaoDeAeracaoParaStore('Expurgo',funcaoExpurgoLigada)"
                            color="green" checked-icon="check" unchecked-icon="clear"
                            />
                            
                            <q-icon 
                            v-show="funcaoExpurgoLigada"
                            color="red"
                            class="icon-funcao-ativa"
                            name="settings"/>
                        </div>
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

import InfosAmbienteController from '../../../Controllers/InfosAmbiente/Controller'
import SiloController from '../../../Controllers/Silos/Controller'
import NotifyUsers from '../../../services/NotifyUser'
import dialogPromise from  '../../../services/DialogPromise'
import NotifyUser from '../../../services/NotifyUser';

export default {
    props:['isFlipped','index_silo','index_aerador'], 
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
                umidade_relativa_do_ar_max: 0,
                umidade_relativa_do_ar_min: 0,
                temperatura_ambiente_max: 0,
            },
            valorIncorreto: true,
            SiloController
        }
    }, 
    mounted(){
        
        // Inicialização do componente com a função ativada
        this.getFuncaoAtiva()

        // Inicialização das informações dos inputs para informações de ambiente da aeração semi automática
        Object.assign(this.novasInfosAmbiente, InfosAmbienteController.getInfosAmbiente())

    },
    methods:{
        procuraProcessoLigado(arr){
            return arr.filter( element => element.ligada)
        },
        // Pega a função ativa do store e atualiza o componente
        getFuncaoAtiva(){
            let funcoesDeAeracaoLigada = SiloController.getFuncaoDeAeracaoLigada(this.index_silo, this.index_aerador)
            
            if(funcoesDeAeracaoLigada.length > 0) {
                this.funcaoSelecionada = funcoesDeAeracaoLigada[0].label
                
                if(funcoesDeAeracaoLigada[0].processos != undefined){
                    let processoLigado = this.procuraProcessoLigado(funcoesDeAeracaoLigada[0].processos)
                    if(processoLigado[0].label == 'Conservação'){
                        this.funcaoConservacaoLigada = processoLigado[0].ligada
                    }else if (processoLigado[0].label == 'Secagem'){
                        this.funcaoSecagemLigada = processoLigado[0].ligada
                    }  
                }

                if(this.funcaoSelecionada == 'Manual') this.funcaoManualLigada = funcoesDeAeracaoLigada[0].ligada
                if(this.funcaoSelecionada == 'Semi Automática') this.funcaoSemiAutomaticaLigada = funcoesDeAeracaoLigada[0].ligada
                if(this.funcaoSelecionada == 'Forçado') this.funcaoForcadoLigada = funcoesDeAeracaoLigada[0].ligada
                if(this.funcaoSelecionada == 'Expurgo') this.funcaoExpurgoLigada = funcoesDeAeracaoLigada[0].ligada
            }
        },

        // Verifica se possui uma função ativa no componente
        hasFuncaoAtiva(){
            if(this.funcaoManualLigada || this.funcaoConservacaoLigada || this.funcaoSecagemLigada 
                || this.funcaoSemiAutomaticaLigada || this.funcaoForcadoLigada || this.funcaoExpurgoLigada){
                return true
            }else{
                return false
            }            
        },
        
        // Após o usuário selecionar uma opção , essa opção é guardada em this.funcaoSelecionada
        // E nessa função é testado se o usuário quer sobrescrever a função já ativa
        selecionarOpcao (opcaoSelecionada) {

            // Se não houver nenhuma função selecionada, não é necessário confirmar que a função será sobrescrita 
            if(this.funcaoSelecionada == ''){
                this.funcaoSelecionada = opcaoSelecionada
            }else{
                // Se houver então é necessário que o usuário confirme a sobrescrita e então é feita a atualização  
                if(this.hasFuncaoAtiva() && this.funcaoSelecionada != opcaoSelecionada){
                    dialogPromise(`Você selecionou outro processo de aeração, deseja realmente alterar o processo ? O processo atual será desligado.`)
                    .then( () => this.funcaoSelecionada = opcaoSelecionada )
                    .catch( () => NotifyUsers.info('Função de aeração não alterada.'))
                }else{ //Se não tiver uma função já selecionada apenas sobrescreve
                    this.funcaoSelecionada = opcaoSelecionada
                }
            }
        },   

        // Envia o processo para o store e lá ativa a função automática e o processo a ser utilizado dentro dela. 
        ativarFuncaoAutomaticaPor(funcao){

            // Teste permite não dar aviso desnecessário , por exemplo caso o usuário clique no mesmo processo automático de aeração duas vezes
            if(this.ultimaFuncaoAutomatica != funcao){

                dialogPromise(`Deseja confirmar o inicio do processo de aeração por ${funcao} ?`)
                .then( () =>{
                    
                    // Inicialização do processo de aeração automática
                    this.funcaoAutomaticaLigada = true
                    
                   this.enviarFuncaoDeAeracaoParaStore('Automática',this.funcaoAutomaticaLigada)
                    // Me certifico de que não irei possuir dois processos automáticos ligados ao mesmo tempo
                    // E em seguida envio a atualização para o store
                    if(funcao == 'Secagem' && !this.funcaoSecagemLigada ){
                        this.funcaoSecagemLigada = true
                        this.funcaoConservacaoLigada = false
                    }else if(funcao == 'Conservação' && !this.funcaoConservacaoLigada){
                        this.funcaoConservacaoLigada = true
                        this.funcaoSecagemLigada = false
                    }

                    this.enviarFuncaoDeAeracaoParaStore('Secagem',this.funcaoSecagemLigada)
                    this.enviarFuncaoDeAeracaoParaStore('Conservação',this.funcaoConservacaoLigada)
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
            this.funcaoSemiAutomaticaLigada = true
            InfosAmbienteController.updateInfosAmbiente(this.novasInfosAmbiente)
            this.enviarFuncaoDeAeracaoParaStore('Semi Automática',this.funcaoSemiAutomaticaLigada)
        },

        enviarFuncaoDeAeracaoParaStore(nomeDafuncao, variavelDaFuncao ){
            SiloController.updateFuncaoDeAeracaoLigada( 
            {index_silo:this.index_silo,index_aerador: this.index_aerador,
            label:nomeDafuncao,ligada: variavelDaFuncao})
        }
 
    },
    computed:{

        funcoes(){
            return SiloController.getFuncoesDeAeracao(this.index_silo, this.index_aerador).map( element => element.label)
        },
        // Retorna a umidade mínima de dentro do objeto
        UmidadeAmbienteMinima(){
            return this.novasInfosAmbiente.umidade_relativa_do_ar_min;    
        },
        // Retorna a umidade máxima de dentro do objeto
        UmidadeAmbienteMaxima(){
            return this.novasInfosAmbiente.umidade_relativa_do_ar_max;    
        },
        // Retorna a temperatura de ambiente máxima de dentro do objeto
        TemperaturaAmbienteMaxima(){
            return this.novasInfosAmbiente.temperatura_ambiente_max;    
        },
 
    },
    watch:{ 
        // Método serve para prevenir duas funções de aeração ligadas ao mesmo tempo, 
        // observa o ligamento de uma função e desliga caso o usuário tenha selecionado
        // uma outra opção sem desligar a anterior   
        funcaoSelecionada(funcaoAtual, antigaFuncao){
            
            if(antigaFuncao == 'Manual'){
                this.funcaoManualLigada = false;
                this.enviarFuncaoDeAeracaoParaStore('Manual',this.funcaoManualLigada)
            } 
            if(antigaFuncao == 'Automática' ){
                this.funcaoAutomaticaLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Automática',this.funcaoAutomaticaLigada)
            }
             if(this.ultimaFuncaoAutomatica  == 'Conservação'){
                this.ultimaFuncaoAutomatica = ''
                this.funcaoConservacaoLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Conservação',this.funcaoConservacaoLigada)
            }
            if(this.ultimaFuncaoAutomatica  == 'Secagem'){
                this.ultimaFuncaoAutomatica = ''
                this.funcaoSecagemLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Secagem',this.funcaoSecagemLigada)
            }
            if(antigaFuncao == 'Semi Automática'){
                this.funcaoSemiAutomaticaLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Semi Automática',this.funcaoSemiAutomaticaLigada)
            }
            if(antigaFuncao == 'Forçado') {
                this.funcaoForcadoLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Forçado',this.funcaoForcadoLigada)
            }
            if(antigaFuncao == 'Expurgo'){
                this.funcaoExpurgoLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Expurgo',this.funcaoExpurgoLigada)
            } 
        },
        
        // As demais funções abaixo fazem o aviso ao usuário  
        funcaoSemiAutomaticaLigada(valor){
            if(valor){
                NotifyUsers.info('Função semi automática ligada')
            }else{
                NotifyUsers.info('Função semi automática desligada')
            }
        },
        funcaoExpurgoLigada(valor){
            if(valor){
                NotifyUsers.info('Função Expurgo ligada')
            }else{
                NotifyUsers.info('Função Expurgo desligada')
            }
        },
        funcaoForcadoLigada(valor){
            if(valor){
                NotifyUsers.info('Função Forçada ligada')
            }else{
                NotifyUsers.info('Função Forçada desligada')
            } 
        },
        funcaoManualLigada(valor){
            if(valor){
                NotifyUsers.info('Função Manual ligada')
            }else{
                NotifyUsers.info('Função Manual desligada')
            }
        }, 
       
        // Ambas as funções abaixo são sub processos da função automática
        // e ao ligar emitem NotifyUser no method 'ativarFuncaoAutomaticaPor(Nome da função)'
        // Por isso tem tratamento para notificação do usuário apenas para valor == false  
        funcaoConservacaoLigada(valor){
            if(!valor){
                NotifyUsers.info('Função automática por Conservação desligada')
            }
        },
        funcaoSecagemLigada(valor){
            if(!valor){
                NotifyUsers.info('Função automática por Secagem desligada')
            }
        },

        // Verificação de valores válidos para desabilitar o botão de salvar
        UmidadeAmbienteMinima(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true;
            valor > this.novasInfosAmbiente.umidade_relativa_do_ar_max ? this.valorIncorreto = true :  this.valorIncorreto = false;
        },
        UmidadeAmbienteMaxima(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true;
            valor < this.novasInfosAmbiente.umidade_relativa_do_ar_min ? this.valorIncorreto = true :  this.valorIncorreto = false;
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

    .icon-funcao-ativa
        position relative 
        -webkit-animation rotating 5s linear infinite
        -moz-animation rotating 5s linear infinite
        -ms-animation rotating 5s linear infinite
        -o-animation rotating 5s linear infinite
        animation rotating 5s linear infinite

</style>
