<template>
    <!-- Card de controle de aeração -->
    <div class='row justify-center items-center' style="width:100%;margin-bottom:5rem;">
        <q-card class="card-de-aeracao bg-grey-3 col-sm-12 col-xs-12 col-md-12 col-lg-8">
            
            <!-- Efeito de background -->
            <particles />
            <!--  -->
            
            <!-- Controlador de visualização altera a face do flipcard
            entre funções de aeração e possibilidades de aeração -->
            <view-controler :view="card_view" @changeView="changeView"/> 
            <!--  -->
            
            <div class="row justify-between" >
                <!-- Parte esquerda do card, contém as informações sobre equilibrio higroscópico -->
                <div class="col-xs-5 col-sm-4 col-md-4 col-lg-4">
                    <div class="column items-center">
                        <avatar class="q-mb-md" />
                        
                        <q-toggle
                        v-show="possivelLigarAerador" 
                        class="q-my-md text-grey-9"
                        style="z-index:4;"
                        v-model="aeradorLigado"  
                        :label="aeradorLigado ? 'Aerador Ligado' : 'Aerador Desligado'"
                        color="green" checked-icon="check" unchecked-icon="clear"
                        @input="on_off_aerador({
                                indexSilo : index_silo, 
                                ligado : aeradorLigado
                            })"
                        />

                        <infos-equilibrio  
                        :index_silo="index_silo"
                        />
                    </div>
                </div>
                <!--  -->

                <!-- Parte direita do card, contém o card de possibilidades de aeração e de funções -->
                <div class="col-xs-6 col-sm-8 col-md-8 col-lg-8 flip-card">
                    <flip-card :flipped="flipped">

                        <template slot="front"> 
                            <possibilidades 
                            :index_silo="index_silo"
                            /> 
                        </template>

                        <template slot="back"> 
                            <funcoes 
                            :isFlipped="flipped"
                            :index_silo="index_silo"
                            @funcaoManualSelecionada="atualizaVisualizacao"
                            />
                        </template>

                    </flip-card>
                </div>
                <!--  -->
            </div>

        </q-card>
    </div>
    <!--  -->
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    props:['index_silo'],
    data(){
        return{
            card_view:{
                Possibilidades_card: true,
                Funcoes_card: false,
            }, 
            flipped: true,
            aeradorLigado: false,
            funcaoLigada:{},
            possivelLigarAerador: false
        }
    },
    mounted(){
        this.verificaFuncaoManual();
    },
    computed:{
        ...mapGetters('silos',['get_aerador']),
    },
    methods:{
        ...mapActions('silos',['on_off_aerador']),

        // Altera a visualização entre os cards de possibilidade e de funções pelo flip-card
        changeView(){
            this.card_view.Possibilidades_card = !this.card_view.Possibilidades_card;
            this.card_view.Funcoes_card = !this.card_view.Funcoes_card;
            this.flipped = !this.flipped;
        }, 
        
        // Procura função manual e atualiza possibilidade de ligar o aerador se ela estiver selecionada
        verificaFuncaoManual(){ 
            let aerador = this.get_aerador(this.index_silo);
            if(aerador.funcaoSelecionada === 'Manual'){
                this.possivelLigarAerador = true
                if(aerador.ligado){
                    this.aeradorLigado = true
                }else{
                    this.aeradorLigado = false
                }
            }
        }, 
        // Se o usuário estiver selecionado manual irá atualizar a visualização 
        // possibilitando ligar e desligar o aerador
        atualizaVisualizacao(valor){
            this.possivelLigarAerador = valor
            if(!valor){
                this.aeradorLigado = false
            }
        }
    }, 
    components:{
        'particles': require('../../Shared/Particles').default,
        'avatar': require('./stateless/Avatar').default,
        'infos-equilibrio': require('./InfosEquilibrio').default, 
        'view-controler': require('./ViewControler').default,
        'possibilidades': require('./Possibilidades').default,
        'flip-card': require('./stateless/FlipCard').default,
        'funcoes': require('./Funcoes').default,
    }, 
    watch:{
        index_silo(){
            this.verificaFuncaoManual();
        }
    }
} 
</script> 


<style lang="stylus">
    .front
        margin-bottom 20px

    .card-de-aeracao
        height 52rem !important
        animation entry 0.2s !important
        font-family 'Libre Caslon Text', serif
        font-size 20px
        padding 15px 
        box-shadow 1px 1px 10px #eae5e5

    .flip-card 
        z-index 3!important
     
    @keyframes entry
        from
            opacity 0
            transform scale(0.9)

        to
            opacity 1
            transform scale(1)  

</style>
