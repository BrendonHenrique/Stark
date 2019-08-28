<template>
    <div class="row justify-center aeracao-container" >
       
        <!-- Card de controle de aeração -->
        <q-card class="card-de-aeracao bg-grey-3 col-sm-12 col-xs-12 col-md-8 col-lg-6">
            
            <!-- Efeito de background -->
            <particles />
            <!--  -->
            
            <div class="row justify-between" >
                
                <!-- Parte esquerda do card, contém as informações sobre equilibrio higroscópico -->
                <div class="q-pt-md col-xs-5 col-sm-4 col-md-4 col-lg-4">
                    <div class="column items-center">
                        <infos-equilibrio  
                        :equilibrio_higroscopico="get_equilibrio_higroscopico(index_silo)"
                        />
                        <avatar class="q-mb-md" />
                        <!-- :index_silo="index_silo" -->
                    </div>
                </div>
                <!--  -->

                <!-- Parte direita do card, contém o card de possibilidades de aeração e de funções -->
                <div class="col-xs-6 col-sm-8 col-md-8 col-lg-8 flip-card">
                    <flip-card :flipped="flipped" class="">
    
                        <template slot="front"> 
                            <possibilidades 
                            :index_silo="index_silo"
                            /> 
                        </template>
    
                        <template slot="back"> 
                            <funcoes 
                            :index_silo="index_silo"
                            />
                        </template>
    
                    </flip-card>
                </div>
                <!--  -->

            </div>

            <!-- Controlador de visualização altera entre funções de aeração e possibilidades -->
            <view-controler :view="card_view" @changeView="changeView"/> 
            <!--  -->

        </q-card>
        <!--  -->
                
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    props:['index_silo'],
    data(){
        return{
            card_view:{
                Possibilidades_card: true,
                Funcoes_card: false,
            }, 
            flipped: true,
        }
    },
    computed:{
        ...mapGetters('silos',['get_equilibrio_higroscopico']),
    },
    methods:{
        // Altera a visualização entre os cards de possibilidade e de funções pelo flip-card
        changeView(){
            this.card_view.Possibilidades_card = !this.card_view.Possibilidades_card 
            this.card_view.Funcoes_card = !this.card_view.Funcoes_card 
            this.flipped = !this.flipped
        },
    },
    mounted(){
        // this.get_equilibrio_higroscopico(this.index_silo)
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
    watch:{
        index_silo(index){
            this.index_silo = index
            console.log(this.get_equilibrio_higroscopico(this.index_silo))
            
        },
    }
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

    .card-de-aeracao
        padding 15px 
        box-shadow 1px 1px 10px #eae5e5

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
