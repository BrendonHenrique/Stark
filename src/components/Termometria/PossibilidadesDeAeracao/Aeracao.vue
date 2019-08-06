<template>
    <div class="row justify-center q-mb-xl possibilidades-de-aeracao" >
        <q-card
        style="height:28rem; box-shadow:0 0 8px 1px #eae5e5;"
        class="bg-grey-3 col-sm-10 col-xs-12 col-md-8 col-lg-6">
            
            <particles />
            
            <div class='row'>
                
                <div class="q-pt-md col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <avatar class="q-mb-md" />
                    <infos-equilibrio  :equilibrio_higroscopico="aeracao.infos.equilibrio_higroscopico"/>
                </div>

                <div 
                style="height:18rem;z-index:3!important"
                class="col-xs-8 col-sm-8 col-md-8 col-lg-8 q-pr-md">
                     
                    <flip-card :flipped="flipped" class="flip-card">

                        <template slot="front"> 
                            <div class="row justify-center">
                                <span class="text-grey-7 text-h6 q-py-sm">
                                    Possibilidades
                                </span>
                                <possibilidades :possibilidades="aeracao.possibilidades"/>
                            </div>
                        </template>

                        <template slot="back"> 
                            <div class="row justify-center">
                                <div>
                                    <span class="text-grey-7 text-h6 q-py-sm">
                                        Funcoes
                                    </span>
                                </div>
                                <funcoes :aeracao="aeracao" :isFlipped="flipped" />
                            </div>
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
    
    .possibilidades-de-aeracao
        animation entry 1s
        font-family 'Orbitron', sans-serif
    
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
