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
            <p class="text-center text-subtitle1 q-pa-sm text-grey-10">
                Selecione abaixo uma função para aerar o silo
            </p>
            <div class=" row justify-center q-pa-md">
                <q-btn-dropdown glossy dense outline
                color="primary" label="Selecionar">
                    <q-list>
                        <q-item v-for="item in funcoes"
                        :key="item.label"
                        clickable v-close-popup 
                        @click="selecionarOpcao(item.label)">
                            <q-item-section>
                                <q-item-label>{{item.label}}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>
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
                    
                    <div v-show='funcaoSelecionada == "Manual"' 
                        class="column items-center">
                        Ligar/Desligar 
                        <q-toggle v-model="funcaoManualLigada"  :label="funcaoManualLigada ? 'Ligada' : 'Desligada'"
                        color="green" checked-icon="check" unchecked-icon="clear"
                        />
                    </div>

                    <div v-show='funcaoSelecionada == "Automática"' class="row justify-center q-gutter-sm" > 

                        <q-btn 
                            label="Secagem" 
                            @click="ativarFuncaoAutomaticaPor('Secagem') ">
                            <q-icon 
                            color="red"
                            class="icon-funcao-automatica"
                            v-if="this.get_funcao_automatica_ativa == 'Secagem'"
                            name="settings"/>
                        </q-btn>

                        <q-btn 
                            label="Conservação" 
                            @click="ativarFuncaoAutomaticaPor('Conservação')"
                            >
                            <q-icon 
                            color="red"
                            class="icon-funcao-automatica"
                            v-if="this.get_funcao_automatica_ativa == 'Conservação'"
                            name="settings"/>
                        </q-btn>

                    </div>
          
                    <div class='row justify-center q-gutter-lg q-pa-sm' 
                    v-show='funcaoSelecionada == "Semi Automática"'>


                        <q-input 
                        v-model.number="novasInfosAmbiente.ua_max"
                        :rules="[  
                            val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                            val =>  val > this.novasInfosAmbiente.ua_min || 'O valor de umidade máxima deve ser maior que a mínima'
                        ]"
                        class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                        label="UA MAX" suffix="%"/>
                        
                    
                        <q-input 
                        v-model.number="novasInfosAmbiente.ua_min"
                        :rules="[  
                            val =>  val > 0 && val < 100 || 'Valor de porcentagem deve estar entre 0 e 100',
                            val =>  val < this.novasInfosAmbiente.ua_max || 'O valor de umidade mínima deve ser menor que a máxima'
                        ]"
                        class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-lg-3" 
                        label="UA MIN" suffix="%"/>
                        
                        <q-input 
                        v-model.number="novasInfosAmbiente.ta_max"
                        :rules="[  val =>  !!val || 'Insira um valor de temperatura válido']"
                        class="semi-automatica-inputs col-xs-11 col-sm-3 col-md-3 col-g-3 q-mb-sm" 
                        label="TA MAX" suffix="ºC"/>

                        <save-button
                        class="q-mt-lg"
                        :isDisabled="valorIncorreto"
                        @salvarAlteracoes="salvarInfosAmbiente" 
                        :mensagem="`Deseja salvar as informações de temperatura e umidade  ?`"
                        />

                    </div>

                    <div v-show='funcaoSelecionada == "Forçado" ' class="column items-center">
                        Ligar/Desligar 
                        <q-toggle v-model="funcaoForcadoLigada" :label="funcaoForcadoLigada ? 'Ligada' : 'Desligada'"
                        color="green" checked-icon="check" unchecked-icon="clear"
                        />
                    </div>

                    <div v-show='funcaoSelecionada == "Expurgo"' class="column items-center">
                        Ligar/Desligar 
                        <q-toggle v-model="funcaoExpurgoLigada" :label="funcaoExpurgoLigada ? 'Ligada' : 'Desligada'"
                        color="green" checked-icon="check" unchecked-icon="clear"
                        />
                    </div>

                </div>
            
            </div>
        </div>
    </div>
</template>

<script> 
import {mapActions, mapGetters} from 'vuex'
import NotifyUsers from '../../../services/NotifyUser'
import NotifyUser from '../../../services/NotifyUser';

export default {
    props:['funcoes','isFlipped'], 
    data(){
        return{ 
            funcaoSelecionada:'',
            funcaoManualLigada:false,
            funcaoConservacaoLigada:false,
            funcaoSecagemLigada: false,
            funcaoSemiAutomaticaLigada: false,
            funcaoForcadoLigada: false,
            funcaoExpurgoLigada: false,
            novasInfosAmbiente:{
                ua_max: 0,
                ua_min: 0,
                ta_max: 0,
            },
            valorIncorreto: false
        }
    },
    mounted(){
        Object.assign(this.novasInfosAmbiente, this.get_infos_ambiente)
        this.funcaoSelecionada = this.get_funcao_de_aeracao_ativa[0].label
        this.updateView()
    },
    methods:{
        ...mapActions('aeracao',['update_funcoes_de_aeracao',
        'update_processo_de_aeracao_automatica','update_infos_ambiente',
        'set_funcao_manual','set_funcao_forcada','set_funcao_de_expurgo']),
        selecionarOpcao (opcaoSelecionada) { 
            
            this.funcaoSelecionada = opcaoSelecionada 
            this.updateView()
        }, 
        ativarFuncaoAutomaticaPor(funcao){

            if(funcao == 'Secagem'){
                this.funcaoSecagemLigada = true
                this.funcaoConservacaoLigada = false
            }else{
                this.funcaoSecagemLigada = false
                this.funcaoConservacaoLigada = true
            }

            this.$q.dialog({
                title: 'Confirmação',
                message: `Deseja confirmar o inicio do processo de aeração por ${funcao} ?`, 
                cancel: true,
                position: 'top',
                persistent: true,
                cancel:{
                    label:'cancelar',
                    color:'negative'
                },
                ok:{
                    label:'confirmar',
                    color:'positive'
                }
            })
            .onOk( () => {
                this.update_processo_de_aeracao_automatica(funcao)
                NotifyUsers.info(`Processo de aeração por ${funcao} iniciada.`)
            })
            .onCancel( () => {
                NotifyUsers.info(`Processo de aeração por ${funcao} cancelada`)
            });

        },
        salvarInfosAmbiente(){
            this.funcaoSemiAutomaticaLigada = true;
            this.update_infos_ambiente(this.novasInfosAmbiente);
        },
        updateView(){
            this.funcaoManualLigada = this.funcoes[0].isActivated
            this.funcaoConservacaoLigada = this.funcoes[1].processos[0].isActivated
            this.funcaoSecagemLigada = this.funcoes[1].processos[1].isActivated
            this.funcaoSemiAutomaticaLigada = this.funcoes[2].isActivated
            this.funcaoForcadoLigada = this.funcoes[3].isActivated
            this.funcaoExpurgoLigada = this.funcoes[4].isActivated
        }
    },
    computed:{
        ...mapGetters('aeracao',['get_funcao_de_aeracao_ativa','get_funcao_automatica_ativa','get_infos_ambiente']), 
        funcaoAtiva(){
            return this.get_funcao_de_aeracao_ativa[0].label 
        },
        UmidadeAmbienteMinima(){
            return this.novasInfosAmbiente.ua_min;    
        },
        UmidadeAmbienteMaxima(){
            return this.novasInfosAmbiente.ua_max;    
        },
        TemperaturaAmbienteMaxima(){
            return this.novasInfosAmbiente.ta_max;    
        }
    },
    components:{
        'status-aerador': require('./StatusAerador').default,
        'save-button': require('../../Shared/SaveButton').default,
    },
    watch:{ 
        funcaoExpurgoLigada(valor){
            this.set_funcao_de_expurgo(valor)
        },
        funcaoForcadoLigada(valor){
            this.set_funcao_forcada(valor)
        },
        funcaoManualLigada(valor){
            this.set_funcao_manual(valor)
        },
        UmidadeAmbienteMinima(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true;
            valor > this.novasInfosAmbiente.ua_max ? this.valorIncorreto = false :  this.valorIncorreto = true;
        },
        UmidadeAmbienteMaxima(valor){
            valor > 0 && valor < 100 ? this.valorIncorreto = false : this.valorIncorreto = true;
            valor < this.novasInfosAmbiente.ua_min ? this.valorIncorreto = false :  this.valorIncorreto = true;
        },
        TemperaturaAmbienteMaxima(valor){
            valor == '' ? this.valorIncorreto = true :  this.valorIncorreto = false;
        }
    }
}
</script>

<style lang="stylus">

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
