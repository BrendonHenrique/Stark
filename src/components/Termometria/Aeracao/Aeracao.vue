<template>
    <div class="row justify-center aeracao-container" >
       
        <q-card class="bg-grey-3 col-sm-12 col-xs-12 col-md-8 col-lg-6">
            <particles />
            
            <div class="row justify-between  card-de-aeracao">
                
                <div class="q-pt-md col-xs-5 col-sm-4 col-md-4 col-lg-4">
                    <div class="column items-center">
                        <avatar class="q-mb-md" />
                        <infos-equilibrio  :equilibrio_higroscopico="aeracao.infos.equilibrio_higroscopico"/>
                    </div>
                </div>

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

            </div>

            <view-controler :view="card_view" @changeView="changeView"/> 

        </q-card>
                
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


    @media (min-width: 481px) {
        height 40rem !important
    }

    @media (min-width: 320px) and (max-width: 480px) 
        .card-de-aeracao
            height 52rem !important 
    

    .aeracao-container
        animation entry 1s
        font-family 'Libre Caslon Text', serif
        font-size 20px

    .card-de-aeracao
        padding 15px
        box-shadow 0 0 8px 1px #eae5e5

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
