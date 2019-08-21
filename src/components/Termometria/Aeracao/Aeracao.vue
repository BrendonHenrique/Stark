<template>
    <div class="row justify-center aeracao-container" >
       
        <!-- Card de controle de aeração -->
        <q-card class="bg-grey-3 col-sm-12 col-xs-12 col-md-8 col-lg-6">
            
            <!-- Efeito de background -->
            <particles />
            <!--  -->
            
            <div class="row justify-between  card-de-aeracao" >
                
                <!-- Parte esquerda do card, contém as informações sobre equilibrio higroscópico -->
                <div class="q-pt-md col-xs-5 col-sm-4 col-md-4 col-lg-4">
                    <div class="column items-center">
                        <avatar class="q-mb-md" />
                        <infos-equilibrio  :equilibrio_higroscopico="aeracao.infos.equilibrio_higroscopico"/>
                    </div>
                </div>
                <!--  -->

                <!-- Parte direita do card, contém o card de possibilidades de aeração e de funções -->
                <div class="col-xs-6 col-sm-8 col-md-8 col-lg-8 flip-card">
                    <flip-card :flipped="flipped" class="">
    
                        <template slot="front"> 
                            <possibilidades :possibilidades="aeracao.possibilidades"/>
                        </template>
    
                        <template slot="back"> 
                            <funcoes :funcoes="aeracao.funcoes" :isFlipped="flipped" />
                        </template>
    
                    </flip-card>
                </div>
                <!--  -->

            </div>

            <!-- Controlador de visualização entre cards de possibilidade e vocês -->
            <view-controler :view="card_view" @changeView="changeView"/> 
            <!--  -->

        </q-card>
        <!--  -->
                
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            card_view:{
                Possibilidades_card: true,
                Funcoes_card: false,
            }, 
            flipped: true
        }
    },
    computed:{
        ...mapGetters('aeracao',['aeracao'])
    },
    methods:{
        // Altera a visualização entre os cards de possibilidade e de funções pelo flip-card
        changeView(){
            this.card_view.Possibilidades_card = !this.card_view.Possibilidades_card 
            this.card_view.Funcoes_card = !this.card_view.Funcoes_card 
            this.flipped = !this.flipped
        }
    },
    components:{
        'particles': require('../../Shared/Particles').default,
        'avatar': require('./Avatar').default,
        'infos-equilibrio': require('./InfosEquilibrio').default, 
        'view-controler': require('./ViewControler').default,
        'possibilidades': require('./Possibilidades').default,
        'flip-card': require('./FlipCard').default,
        'funcoes': require('./Funcoes').default
    },
} 
</script> 


<style lang="stylus">
    .front
        margin-bottom 20px
    
    @media screen and (max-width: 600px) {
        .aeracao-container {
            height 52rem
        }
    }
    @media screen and (min-width: 601px) {
        .aeracao-container {
            height 40rem
        }
    }

    .aeracao-container
        animation entry 1s
        font-family 'Libre Caslon Text', serif
        font-size 20px
        box-shadow 1px 1px 10px #eae5e5

    .card-de-aeracao
        padding 15px 

    .flip-card 
        z-index 3!important

    .activated
        animation entry 1s  
     
    @keyframes entry
        from
            opacity 0
            transform scale(0.95)

        to
            opacity 1
            transform scale(1)  

</style>
