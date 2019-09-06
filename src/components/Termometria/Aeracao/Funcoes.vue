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
                                :label="!funcaoSemiAutomaticaLigada ? 'Ativar' : 'Desativar'" 
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
                umidade_relativa_do_ar_max: '',
                umidade_relativa_do_ar_min: '',
                temperatura_ambiente_max: '',
            }
        }
    }, 
    mounted(){
        
        // Inicialização do componente com a função ativada
        this.getFuncaoAtiva(this.index_silo)

        // Inicialização das informações dos inputs para informações de ambiente da aeração semi automática
        Object.assign(this.novasInfosAmbiente, InfosAmbienteController.getInfosAmbiente())

    },
    methods:{
        procuraProcessoLigado(arr){
            return arr.filter( element => element.ligada)
        },
        // Pega a função ativa do store e atualiza o componente
        getFuncaoAtiva(index_silo){

            let funcoes = SiloController.getFuncoesDeAeracao(index_silo, this.index_aerador)

            this.funcaoManualLigada = funcoes[0].ligada
            this.funcaoAutomaticaLigada =  funcoes[1].ligada
            this.funcaoConservacaoLigada = funcoes[1].processos[0].ligada
            this.funcaoSecagemLigada =  funcoes[1].processos[1].ligada
            this.funcaoSemiAutomaticaLigada = funcoes[2].ligada
            this.funcaoForcadoLigada =  funcoes[3].ligada
            this.funcaoExpurgoLigada =  funcoes[4].ligada

            if(this.funcaoSecagemLigada){
                this.ultimaFuncaoAutomatica = 'Secagem'
            }else if(this.funcaoConservacaoLigada){
                this.ultimaFuncaoAutomatica = 'Conservação'
            }

            let funcaoQueSeraSelecionada = this.procuraProcessoLigado(funcoes)
            
            if(funcaoQueSeraSelecionada.length > 0){
                this.funcaoSelecionada = funcaoQueSeraSelecionada[0].label
            }else{
                this.funcaoSelecionada = ''
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

        // Ativa a função automática recebendo o nome do processo como argumento
        // Quando o usuário clica no botão de aeração a primeira vez ativa a função desejada e guarda o nome da função em this.ultimaFuncaoAutomatica
        // em seguida quando clica a segunda vez se a função for igual a this.ultimaFuncaoAutomatica desliga a função 
        ativarFuncaoAutomaticaPor(funcao){
            if(this.ultimaFuncaoAutomatica != funcao){
                dialogPromise(`Confirmar o inicio da aeração por ${funcao} ?`)
                .then( () =>{
                    
                    // Inicialização do processo de aeração automática e envio para store
                    this.funcaoAutomaticaLigada = true
                    this.enviarFuncaoDeAeracaoParaStore('Automática',this.funcaoAutomaticaLigada)

                    // Me certifico de que não irei possuir dois processos automáticos ligados ao mesmo tempo
                    // E em seguida envio a atualização para o store
                    if(funcao == 'Secagem' && !this.funcaoSecagemLigada ){
                        this.funcaoSecagemLigada = true
                        if(this.funcaoConservacaoLigada) this.funcaoConservacaoLigada = false 

                    }else if(funcao == 'Conservação' && !this.funcaoConservacaoLigada){
                        this.funcaoConservacaoLigada = true
                        if(this.funcaoSecagemLigada) this.funcaoSecagemLigada = false
                    }
                    this.enviarFuncaoDeAeracaoParaStore('Secagem',this.funcaoSecagemLigada)
                    this.enviarFuncaoDeAeracaoParaStore('Conservação',this.funcaoConservacaoLigada)
                    NotifyUsers.info(`Processo de aeração por ${funcao} iniciada`)
                    this.ultimaFuncaoAutomatica = funcao
                })
                .catch( ()=>{
                    NotifyUsers.info(`Processo de aeração por ${funcao} cancelada`)
                });

            }else{ //Isso irá permitir fazer trigger entre on para off apertando a segunda vez   
                dialogPromise(`Desligar de aeração por ${funcao} ?`)
                .then( () =>{
                    
                    // Inicialização do processo de aeração automática
                    this.funcaoAutomaticaLigada = false
                    
                    this.enviarFuncaoDeAeracaoParaStore('Automática',this.funcaoAutomaticaLigada)
                   
                    if(funcao == 'Secagem' && this.funcaoSecagemLigada ){
                        this.funcaoSecagemLigada = false
                        this.enviarFuncaoDeAeracaoParaStore('Secagem',this.funcaoSecagemLigada)
                    }else if(funcao == 'Conservação' && this.funcaoConservacaoLigada){
                        this.funcaoConservacaoLigada = false
                        this.enviarFuncaoDeAeracaoParaStore('Conservação',this.funcaoConservacaoLigada)
                    }

                    this.ultimaFuncaoAutomatica = ''
                })
                .catch( ()=>{
                    NotifyUsers.info(`Aeração não alterada`)
                });
            }
        },

        // Salva as informações de ambiente da função de aeração semi automática
        salvarInfosAmbiente(){
            if(this.funcaoSemiAutomaticaLigada){
                this.funcaoSemiAutomaticaLigada = false
            }else{
                this.funcaoSemiAutomaticaLigada = true
                InfosAmbienteController.updateInfosAmbiente(this.novasInfosAmbiente)
            }
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
    },
    watch:{ 
        index_silo(novoValor){
            this.getFuncaoAtiva(novoValor)
        },

        // Método serve para prevenir duas funções de aeração ligadas ao mesmo tempo, 
        // observa o ligamento de uma função e desliga caso o usuário tenha selecionado
        funcaoSelecionada(funcaoAtual, antigaFuncao){
            
            if(antigaFuncao == 'Manual' && this.funcaoManualLigada){
                this.funcaoManualLigada = false;
                this.enviarFuncaoDeAeracaoParaStore('Manual',this.funcaoManualLigada)
            } 
            if(antigaFuncao == 'Automática' && this.funcaoAutomaticaLigada ){
                this.funcaoAutomaticaLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Automática',this.funcaoAutomaticaLigada)
            }
             if(antigaFuncao  == 'Conservação' && this.funcaoConservacaoLigada){
                this.ultimaFuncaoAutomatica = ''
                this.funcaoConservacaoLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Conservação',this.funcaoConservacaoLigada)
            }
            if(antigaFuncao  == 'Secagem' && this.funcaoSecagemLigada){
                this.ultimaFuncaoAutomatica = ''
                this.funcaoSecagemLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Secagem',this.funcaoSecagemLigada)
            }
            if(antigaFuncao == 'Semi Automática' && this.funcaoSemiAutomaticaLigada){
                this.funcaoSemiAutomaticaLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Semi Automática',this.funcaoSemiAutomaticaLigada)
            }
            if(antigaFuncao == 'Forçado' && this.funcaoForcadoLigada) {
                this.funcaoForcadoLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Forçado',this.funcaoForcadoLigada)
            }
            if(antigaFuncao == 'Expurgo' && this.funcaoExpurgoLigada){
                this.funcaoExpurgoLigada = false
                this.enviarFuncaoDeAeracaoParaStore('Expurgo',this.funcaoExpurgoLigada)
            } 
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
